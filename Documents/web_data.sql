#create database web_data;
use web_data;

-- 資料表結構 `brand`品牌
CREATE TABLE `brand` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `info` text,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

INSERT INTO `brand` (`id`, `name`, `img`, `info`, `created_at`, `updated_at`) VALUES
(1, 'Apple', '', 'This is the description of the brand', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(2, 'Dell', '', 'This is the description of the brand', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(3, 'Canon', '', 'This is the description of the brand', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(4, 'Nikon', '', 'This is the description of the brand', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(5, 'GoPro', '', 'This is the description of the brand', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(6, 'Nike', '', 'This is the description of the brand', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(7, 'adidas', '', 'This is the description of the brand', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(8, 'PUMA', '', 'This is the description of the brand', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(9, 'New Balance', '', 'This is the description of the brand', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(10, 'Ikea', '', 'This is the description of the brand', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(11, 'Scanteak', '', 'This is the description of the brand', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(12, 'Mr.Living', '', 'This is the description of the brand', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(13, 'logi', '', 'This is the description of the brand', '2024-06-29 21:01:28', '2024-06-29 21:01:28');

INSERT INTO `brand` (`id`, `name`, `img`, `info`, `created_at`, `updated_at`) VALUE
(14, 'Samsung', '', 'This is the description of the brand', '2024-06-29 21:01:28', '2024-06-29 21:01:28');

-- 資料表結構 `category`分類
CREATE TABLE `category` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `parent_id` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

INSERT INTO `category` (`id`, `name`, `parent_id`, `created_at`, `updated_at`) VALUES
(1, '電腦與週邊配件', NULL, '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(2, '相機攝影', NULL, '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(3, '鞋類', NULL, '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(4, '家具', 1, '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(5, '收納', 1, '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(6, '居家佈置', 1, '2024-06-29 21:01:28', '2024-06-29 21:01:28');

-- 資料表結構 `color`顏色
CREATE TABLE `color` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

INSERT INTO `color` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, '黑', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(2, '白', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(3, '灰', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(4, '藍', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(5, '粉紅', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(6, '紅', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(7, '綠', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(8, '橘', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(9, '黃', '2024-06-29 21:01:28', '2024-06-29 21:01:28');

-- 資料表結構 `favorite`
CREATE TABLE `favorite` (
  `id` int NOT NULL,
  `pid` int NOT NULL,
  `uid` int NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- 資料表結構 `otp`
CREATE TABLE `otp` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `exp_timestamp` bigint NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- 資料表結構 `size`尺寸
CREATE TABLE `size` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

INSERT INTO `size` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'S', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(2, 'M', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(3, 'L', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(4, 'XL', '2024-06-29 21:01:28', '2024-06-29 21:01:28');

-- 資料表結構 `tag`標籤
CREATE TABLE `tag` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

INSERT INTO `tag` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, '男性', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(2, '女性', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(3, '中性', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(4, '兒童', '2024-06-29 21:01:28', '2024-06-29 21:01:28');

-- 資料表結構 `product`產品
CREATE TABLE `product` (
  `id` int NOT NULL,
  `sn` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `brand_id` int NOT NULL,
  `cat_id` int NOT NULL,
  `photos` text,
  `stock` varchar(255) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `info` text,
  `color` varchar(255) DEFAULT NULL,
  `size` varchar(255) DEFAULT NULL,
  `tag` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

INSERT INTO `product` (`id`, `sn`, `name`, `brand_id`, `cat_id`, `photos`, `stock`, `price`, `info`, `color`, `size`, `tag`, `created_at`, `updated_at`) VALUES
(1, '09fdab8a-6185-4484-8bea-c47d85647d8b', 'Logi 鍵盤', 13, 1, 'keyboard.jpg,keyboard-t.jpg,keyboard-m.jpg', '90', 1600, 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients', '2,3', '3,4,1,2', '3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(2, 'da94bfac-49e7-490e-b02b-7412e5942d0c', 'Logi 滑鼠', 13, 1, 'mouse.jpg,mouse-t.jpg,mouse-m.jpg', '20', 1200, 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality', '2', '3,4,1,2', '3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(3, 'e21f9142-7dbd-4094-aca1-69405e0aefe7', 'Samsung 曲面螢幕', 14, 1, 'screen.jpg,screen-t.jpg,screen-m.jpg', '90', 8900, 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit', '1', '4', '3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(4, 'e6050922-e074-430b-b4ad-235c9d7ce43a', 'Apple Macbook', 1, 1, 'macbook.jpg,macbook-t.jpg,macbook-m.jpg', '20', 10500, 'Boston\'s most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles', '5', '1', '3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(5, '1aa6729e-52d3-4771-9744-ee8008d4ccdd', 'Dell Notebook', 2, 1, 'notebook1.jpg,notebook1-t.jpg,notebook1-m.jpg', '70', 9100, 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J', '6', '2', '3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(6, 'bcda2244-cc91-4cb6-ada8-cd19dc4822a0', 'Canon 錄影機', 3, 2, 'canon1.jpg,canon1-t.jpg,canon1-m.jpg', '60', 6200, 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016', '1', '3', '3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(7, 'd769fb3e-9bd4-4003-8608-0ec6583d99ac', 'Nikon 單眼相機', 4, 2, 'nikon1.jpg,nikon1-t.jpg,nikon1-m.jpg', '70', 5400, 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients', '1', '3', '3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(8, '1f9e5ca6-4384-49b7-ad21-484fb6e6fa4c', 'GoPro 10', 5, 2, 'gopro10.jpg,gopro10-t.jpg,gopro10-m.jpg', '20', 6100, 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support', '1', '1', '3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(9, '1f9e6ca6-4384-49b7-ad21-484fb6e6fa4c', 'GoPro 12', 5, 2, 'gopro12.jpg,gopro12-t.jpg,gopro12-m.jpg', '20', 6900, 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support', '1', '1', '3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(10, 'bcda2344-cc91-4cb6-ada8-cd19dc4822a0', 'Canon 單眼相機', 3, 2, 'canon2.jpg,canon2-t.jpg,canon2-m.jpg', '63', 6000, 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016', '1', '3', '3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(11, '09fdab8a-6185-4484-8bea-c46d85647d8b', 'PUMA 慢跑鞋', 8, 3, 'puma1.jpg,puma1-t.jpg,puma1-m.jpg', '90', 680, 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients', '2,3', '3,4,1,2', '2,3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(12, '09fdab8a-6285-4484-8bea-c46d85647d8b', 'PUMA 慢跑鞋', 8, 3, 'puma2.jpg,puma2-t.jpg,puma2-m.jpg', '90', 680, 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients', '2,3', '3,4,1,2', '2,3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(13, '09fdab8a-6385-4484-8bea-c46d85647d8b', 'PUMA 慢跑鞋', 8, 3, 'puma3.jpg,puma3-t.jpg,puma3-m.jpg', '90', 600, 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients', '2,1', '3,4,1,2', '1,3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(14, '09fdab8a-6485-4484-8bea-c46d85647d8b', 'PUMA 慢跑鞋', 8, 3, 'puma4.jpg,puma4-t.jpg,puma4-m.jpg', '90', 690, 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients', '8', '3,4,1,2', '1,3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(15, '1981df3d-99dc-4cba-a62e-ee015a51a19e', 'Nike 籃球鞋', 6, 3, 'nike1.jpg,nike1-t.jpg,nike1-m.jpg', '70', 860, 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart', '2,5,7,9', '1,2,3', '1,2,3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(16, '1981df3d-96dc-4cba-a62e-ee015a51a19e', 'Nike 慢跑鞋', 6, 3, 'nike2.jpg,nike2-t.jpg,nike2-m.jpg', '70', 850, 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart', '1,2', '1,2,3', '1,2,3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(17, '1981df3d-97dc-4cba-a62e-ee015a51a19e', 'Nike 籃球鞋', 1, 6, 'nike3.jpg,nike3-t.jpg,nike3-m.jpg', '70', 890, 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart', '1,2,7', '1,2,3', '1,2,3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(18, 'da94bfac-49e6-490e-b02b-7412e5942d0c', 'New Balance 慢跑鞋', 9, 3, 'nb1.jpg,nb1-t.jpg,nb1-m.jpg', '50', 550, 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality', '1,4,3', '1,2,3', '1,2,3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(19, 'e21f9142-8dbd-4094-aca1-69405e0aefe7', 'New Balance 步鞋', 9, 3, 'nb2.jpg,nb2-t.jpg,nb2-m.jpg', '90', 600, 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit', '2,8', '1', '4', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(20, '1981df3d-99dc-4cba-a62e-ee015a51a19e', 'Ikea 掛鐘', 10, 6, 'pt_1.jpg,pt_s_1.jpg', '70', 320, 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart', '1', '2', '3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(21, '03694c9a-a0c2-41be-8466-5a01cc1432d1', 'Ikea 收納桶', 10, 5, 'pt_2.jpg,pt_s_2.jpg', '20', 130, 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart', '8,9', '2,1,4,3', '3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(22, '2443bb8d-c63c-46e6-bf5f-c0dc4ed058d9', 'Ikea 環保袋', 10, 5, 'pt_3.jpg,pt_s_3.jpg', '40', 70, 'The Football Is Good For Training And Recreational Purposes', '4,6,7,9', '3,4', '3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(23, '8625cdd1-aac1-41d7-b36a-f24ad277a321', 'Ikea 窗簾', 10, 6, 'pt_4.jpg,pt_s_4.jpg', '60', 560, 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals', '2', '3', '3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(24, '939a82f0-3d8d-4793-ae15-05a381e1f0cf', 'Scanteak 系統櫃', 11, 4, 'pt_5.jpg,pt_s_5.jpg', '100', 11500, 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design', '2', '3,4', '3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(25, '0d9458f8-a8d1-4f8e-8d26-8ebc53c4f7ec', 'Ikea 抱枕', 10, 6, 'pt_6.jpg,pt_s_6.jpg', '10', 100, 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support', '2,5,7', '2,3', '2,4,3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(26, '9c39c5dc-6de1-409d-86d9-7460fce2f3e6', 'Ikea 窗簾', 10, 6, 'pt_7.jpg,pt_s_7.jpg', '60', 560, 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart', '4', '3,4', '3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(27, '77f58eca-d39a-40cc-8d00-ddfbf034b14a', 'Ikea 窗簾', 10, 6, 'pt_8.jpg,pt_s_8.jpg', '60', 560, 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support', '9', '3,4', '3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(28, '6d779db6-1f49-4791-886f-1e10396cc453', 'Ikea 抱枕', 10, 6, 'pt_9.jpg,pt_s_9.jpg', '10', 100, 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart', '4,2', '2,3', '2,4,3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(29, '215b7f08-4290-4832-963d-3423cdd38509', 'Ikea 寵物墊', 10, 6, 'pt_10.jpg,pt_s_10.jpg', '90', 100, 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support', '3', '3,4,1', '3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(30, '2b7c7e96-8759-45c4-8756-3683f2f5d1b7', 'Mr.Living 單人沙發', 12, 4, 'pt_11.jpg,pt_s_11.jpg', '40', 14200, 'Boston\'s most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles', '1', '4,3', '3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(31, 'fefdc1f5-4ba2-455a-9a41-27553b20e16b', 'Mr.Living 角桌', 12, 4, 'pt_12.jpg,pt_s_12.jpg', '50', 800, 'The Football Is Good For Training And Recreational Purposes', '7', '3,2', '3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(32, '2a8ad795-ca36-4ee8-a4e3-11eedff49c69', 'Mr.Living 長凳', 12, 4, 'pt_13.jpg,pt_s_13.jpg', '100', 900, 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality', '1,6', '4,3', '3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(33, '78a04ca8-edd3-4944-ab0f-b7ad46d56035', 'Ikea 收納', 10, 5, 'pt_14.jpg,pt_s_14.jpg', '60', 100, 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality', '6,4', '1,2', '3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(34, 'bcfcb7ad-3a1a-4583-a098-0fbe287915e6', 'Ikea 留言版', 10, 6, 'pt_15.jpg,pt_s_15.jpg', '40', 300, 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals', '1,2', '1,2,3', '3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(35, 'c277a514-b74a-4b6b-9424-0fd029a6ec2b', 'Ikea 墊子', 10, 6, 'pt_16.jpg,pt_s_16.jpg', '20', 200, 'The Football Is Good For Training And Recreational Purposes', '4,7', '2,1,4', '3,4', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(36, 'd37f606a-5951-4052-bba5-b89f8b791bb3', 'Ikea 餐具', 10, 6, 'pt_17.jpg,pt_s_17.jpg', '70', 200, 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals', '3,4,5', '1', '3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(37, '5002d55c-dd42-4f24-b9bd-9815ac8267c4', 'Scanteak 展示櫃', 11, 4, 'pt_18.jpg,pt_s_18.jpg', '100', 10400, 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design', '7', '1', '3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(38, 'b7580be4-d3f6-4f95-82b3-c930c652c91f', 'Scanteak 展示櫃', 11, 4, 'pt_19.jpg,pt_s_19.jpg', '30', 21000, 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J', '9', '4', '3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(39, '97bfb07d-cbd1-4bc2-9e9d-95b8000b8355', 'Mr.Living 掛衣樹', 12, 6, 'pt_20.jpg,pt_s_20.jpg', '20', 7800, 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart', '2,4,7,9', '2', '3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(40, 'cb0938c8-3b66-4bb5-bdff-63bbbf73265d', 'Ikea 收納盒', 10, 5, 'pt_21.jpg,pt_s_21.jpg', '70', 100, 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit', '4,6', '4,3,2,1', '4,2,3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(41, '1d1afa1b-2d0f-4d15-b580-85b1f4205bff', 'Ikea 收納盒', 10, 5, 'pt_22.jpg,pt_s_22.jpg', '70', 130, 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016', '7', '3,4', '3,2,1', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(42, 'e724b66a-f7d3-4c5e-8c2b-bf37ecaa2a6a', 'Ikea 收納包款', 10, 5, 'pt_23.jpg,pt_s_23.jpg', '20', 120, 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J', '7', '3,2', '2,3,1', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(43, '5950430c-e7e2-401d-8d7e-d09dcec2e51f', 'Ikea 沙灘遊戲組', 10, 5, 'pt_24.jpg,pt_s_24.jpg', '20', 160, 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart', '4,6,2', '1', '4', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(44, '6fb1a6f3-cd9e-4dd5-9b31-b24bb56480e0', 'Mr.Living 單人椅', 12, 4, 'pt_25.jpg,pt_s_25.jpg', '80', 3300, 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit', '2', '1', '3', '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(45, '3963664d-68a6-4a80-832d-3674ca19c0a6', 'Ikea 衣架', 10, 5, 'pt_26.jpg,pt_s_26.jpg', '10', 100, 'The Football Is Good For Training And Recreational Purposes', '4,9', '2', '3', '2024-06-29 21:01:28', '2024-06-29 21:01:28');

-- 資料表結構 `purchase_item`
CREATE TABLE `purchase_item` (
  `id` int NOT NULL,
  `order_id` varchar(255) NOT NULL,
  `product_id` int NOT NULL,
  `quantity` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- 資料表結構 `purchase_order`
CREATE TABLE `purchase_order` (
  `id` varchar(255) NOT NULL COMMENT 'UUID',
  `user_id` int NOT NULL,
  `amount` int DEFAULT NULL,
  `transaction_id` varchar(255) DEFAULT NULL,
  `payment` varchar(255) DEFAULT NULL COMMENT 'LINE Pay, 信用卡, ATM',
  `shipping` varchar(255) DEFAULT NULL COMMENT '7-11, Family Mart, Hi-Life, OK Mart, 郵局, 宅配',
  `status` varchar(255) DEFAULT NULL COMMENT 'pending, paid, fail, cancel, error',
  `order_info` text COMMENT 'send to line pay',
  `reservation` text COMMENT 'get from line pay',
  `confirm` text COMMENT 'confirm from line pay',
  `return_code` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- 資料表結構 `user`
CREATE TABLE `user` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `postcode` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `google_uid` varchar(255) DEFAULT NULL,
  `line_uid` varchar(255) DEFAULT NULL,
  `photo_url` varchar(255) DEFAULT NULL,
  `line_access_token` text,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
-- -------------------------------------------------------- 以下未執行，需再確認密碼，改名字、電子信箱
INSERT INTO `user` (`id`, `name`, `username`, `password`, `email`, `avatar`, `birth_date`, `sex`, `phone`, `postcode`, `address`, `google_uid`, `line_uid`, `photo_url`, `line_access_token`, `created_at`, `updated_at`) VALUES
(1, '大耳狗', 'eardog', '$2b$10$wWKXAausD8CG7IOjTMaZj.DOnzVNWVMJJ.Fu9NsQXlW45AtI.XFGK', 'eardog@test.com', '1.webp', '1980-07-13', '男', '0906102808', '330', '桃園市桃園區劉南路377號18樓', NULL, NULL, NULL, NULL, '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(2, '酷洛米', 'cool', '$2b$10$wWKXAausD8CG7IOjTMaZj.DOnzVNWVMJJ.Fu9NsQXlW45AtI.XFGK', 'cool@test.com', '', '1981-08-11', '女', '0946840920', '882', '澎湖縣望安鄉高東路305號19樓', NULL, NULL, NULL, NULL, '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(3, '布丁狗', 'puding', '$2b$10$wWKXAausD8CG7IOjTMaZj.DOnzVNWVMJJ.Fu9NsQXlW45AtI.XFGK', 'puding@test.com', '', '1979-09-19', '男', '0912541534', '511', '彰化縣社頭鄉趙南路295號15樓', NULL, NULL, NULL, NULL, '2024-06-29 21:01:28', '2024-06-29 21:01:28'),
(4, '美樂蒂', 'mal', '$2b$10$wWKXAausD8CG7IOjTMaZj.DOnzVNWVMJJ.Fu9NsQXlW45AtI.XFGK', 'mal@test.com', '', '1979-09-19', '女', '0912541535','521', '高雄市楠梓區高楠公路296號6樓', NULL, NULL, NULL, NULL, '2024-06-29 21:18:31', '2024-06-29 21:18:31');