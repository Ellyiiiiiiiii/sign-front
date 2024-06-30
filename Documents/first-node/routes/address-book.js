import express from "express";
import moment from "moment-timezone";
import db from "./../utils/connect-mysql.js";
import upload from "./../utils/upload-imgs.js"

const dateFormat = "YYYY-MM-DD";
const router = express.Router();

const getListData = async(req) => {
  let keyword = req.query.keyword || ""; // 預設值為空字串

  let birthBegin = req.query.birthBegin || ""; // 這日期之後出生
  let birthEnd = req.query.birthEnd || ""; // 這日期之前出生

  const perPage = 10; // 每頁最多有幾筆
  let page = +req.query.page || 1;
  if(page < 1){
    // return res.redirect(`?page=1`);
    return {
      success: false,
      redirect: `?page=1`, // 需轉向
      info: 'page值太小',
    };
  }

  let where = ' WHERE 1 ';
  if(keyword){
    // where += ` AND \`name\` LIKE '%${keyword}%' `;
    // where += ` AND \`name\` LIKE %${db.escape("%" + keyword + "%")}% `; // 兩側不加單引號
    where += ` AND
    (
      \`name\` LIKE ${db.escape(`%${keyword}%`)}
      OR
      \`mobile\` LIKE ${db.escape(`%${keyword}%`)} 
    )
    `;
  }

  birthBegin = moment(birthBegin);
  if(birthBegin.isValid()){
    where += ` AND birthday >= '${birthBegin.format(dateFormat)}' `;
  }

  birthEnd = moment(birthEnd);
  if(birthEnd.isValid()){
    where += ` AND birthday <= '${birthEnd.format(dateFormat)}' `;
  }

  const sql = `SELECT COUNT(*) AS totalRows FROM address_book ${where}`;
  const [[{totalRows}]] = await db.query(sql); // 取得總筆數

  let totalPages = 0; // 總頁數，預設值設定0
  let rows = []; // 分頁資料
  if(totalRows >0){
    totalPages = Math.ceil(totalRows/perPage);
    if(page > totalPages){
      return {
        success: false,
        redirect: `?page=${totalPages}`,
        info: "page 值太大",
      }; // 轉向
    }

    const sql2 = `SELECT * FROM address_book ${where} ORDER BY sid DESC LIMIT ${
      (page-1) * perPage
    }, ${perPage}`;
    [rows]= await db.query(sql2);

    // JS 的 Date 類型， 轉換為日期格式的字串。裡面的 r 是參照
    rows.forEach((r)=>{
      if(r.birthday) {
        r.birthday = moment(r.birthday).format(dateFormat);
      }
    });
  }

  // res.json({totalRows, totalPages, page, perPage, rows});

  return {
    success: true,
    totalRows, 
    totalPages, 
    page, 
    perPage, 
    rows, 
    qs: req.query // query string參數
  };
};

// router top-level middleware
router.use((req, res, next)=>{
  if(req.session.admin){
    // 若有登入，可通過
    return next();
  } 
  let path = req.url.split('?')[0]; // 只要路徑(去掉query string)
  // 可通過的白名單
  if(['/', '/api'].includes(path)){
      return next();
    }
  // res.status(403).send("<h1>無權限訪問此頁面</h1>"); // 直接擋掉 API的作法
  res.redirect(`/login?u=${req.originalUrl}`); // 導到登入頁 前端網頁的作法
});

router.get("/", async(req, res)=>{
  res.locals.pageName= "ab-list";
  const result = await getListData(req);

  if(result.redirect){
    return res.redirect(result.redirect);
  }
  if(req.session.admin){
    res.render("address-book/list", result);
  } else {
    res.render("address-book/list-no-admin", result);
  }
});

router.get("/api", async(req, res)=>{
  const result  = await getListData(req);
  res.json(result);
});

router.get("/add", async(req, res)=>{
  res.locals.pageName = "ab-add";
  // 呈現新增資料表單
  res.render("address-book/add");
});

router.post("/add", upload.none(), async(req, res)=>{
  const output = {
    success: false,
    bodyData: req.body,
    result: {},
  }
  // 處理資料表單

  // TODO: 欄位檢查

  /* const sql = `INSERT INTO address_book(name, email, mobile, birthday, address, created_at) VALUES (
  ?, ?, ?, ?, ?, now()
  )`;

  const [result] = await db.query(sql, [
    req.body.name,
    req.body.email,
    req.body.mobile,
    req.body.birthday,
    req.body.address,
  ]); */

  const sql2 = `INSERT INTO address_book set?`;
  // data 物件的屬性，對應到資料表的欄位
  const data = {...req.body, created_at: new Date()};

  data.birthday = moment(data.birthday);
  if(data.birthday.isValid()){
    // 如果是正確的格式
    data.birthday = data.birthday.format(dateFormat);
  } else {
    // 不是正確的日期格式，就用空值
    data.birthday = null;
  }


  try{
    const [result] = await db.query(sql2, [data]);
    output.result = result;
    output.success = !!result.affectedRows;
    
  } catch (ex) {
    // sql 發生錯誤
    output.error = ex; //開發時期除錯
  }
  res.json(output);
/* 
{
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 43,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0,
    "changedRows": 0
}
*/
});

// 比較RESTful API的寫法 (刪除資料)
router.delete("/:sid", async (req, res) => {
  const output = {
    success: false,
    result: {},
  }
  let sid = +req.params.sid || 0;
  if(sid) {
    const sql = `DELETE FROM address_book WHERE sid=${sid}`;
    const [result] = await db.query(sql);
    output.result = result;
    output.success = !!result.affectedRows;
  }
  res.json(output);
});

// 呈現修改資料表單
router.get("/edit/:sid", async (req, res) => {
  // TODO: 欄位資料檢查

  let sid = +req.params.sid || 0;
  if(!sid){
    return res.redirect('/address-book');
  }
  const sql = `SELECT * FROM address_book WHERE sid=${sid}`;
  const [rows] = await db.query(sql);
  if(rows.length === 0) {
    return res.redirect('/address-book');
  }

  const row = rows[0];
  if(row.birthday){
    // 日期格式轉換
    row.birthday = moment(row.birthday).format(dateFormat);
  }

  res.render("address-book/edit", rows[0]);
});
// 處理修改資料表單
router.put("/edit/:sid", upload.none(), async (req, res) => {
  const output = {
    success: false,
    bodyData: req.body,
    result: null,
  }

  let sid = +req.params.sid || 0;
  if(!sid){
    return res.json({ success: false, info: "不正確的主鍵"});
  }
  const sql = "UPDATE address_book SET ? WHERE sid=?";
  const [result] = await db.query(sql, [req.body, sid]);

  output.result = result;
  output.success = !!(result.affectedRows && result.changedRows);


  res.json(output);
});

export default router;