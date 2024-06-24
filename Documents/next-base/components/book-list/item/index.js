import FavIcon from './fav-icon'

// 細分屬性再傳入屬性值，比較直接傳入book物件的原因：1.避免不必要資訊傳遞(例如book物件中有其他屬性值，而被傳遞的子元件不需要)。2.指定預設值較好撰寫。3.更好進行react屬性及re-render最佳化有關。
export default function Item({
  isbn = '',
  title = '',
  author = '',
  fav = false,
  handleToogleFav = () => {},
}) {
  return (
    <>
      <tr>
        <td>{isbn}</td>
        <td>{title}</td>
        <td>{author}</td>
        <td>
          <FavIcon
            handleToogleFav={handleToogleFav}
            fav={fav}
            isbn={isbn}
          />
          
        </td>
      </tr>
    </>
  )
}
