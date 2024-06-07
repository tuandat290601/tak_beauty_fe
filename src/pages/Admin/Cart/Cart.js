import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import BasicButton from "../../../components/Button/BasicButton";
import HeaderMainPage from "../Header/HeaderMainPage";

import { Tooltip } from "@mui/material";
import { IoMdEye } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import BasicIconButton from "../../../components/Button/BasicIconButton";
import Table from "../../../components/Table/Table";
import "../ProductManagement/ProductManagement.scss";

import { vi } from "date-fns/locale";
import { formatDistance, parseISO } from "date-fns";
const test = [
  {
    id: 1,
    name: "Huynh Tuan Dat",
    phoneNumber: "0705507383",
    address: "3/38, Nguyễn Thị Sáu, phường Thạnh Lộc, quận 12",
    items: [
      {
        product: {
          id: "29c043ab-da16-40ec-931e-dda7250bd54c",
          title: "12312edasd",
          originPrice: "10000.000",
          discountPrice: "3000.000",
          rating: 5,
          image:
            "/images/file-1716917159006-37146564.jpg;/images/file-1716917159007-659941102.jpg;/images/file-1716917159004-591647618.jpg;/images/file-1716917159008-886927993.jpg",
          description: "<p>qưe</p>",
          detail:
            '<p>FILLER STYLAGE L</p><p>-Dòng filler hot nhất hiện nay cùng với công nghê tiêm môi ” STRIPPLIPS ”</p><ul><li>Được biết đến là filler có độ tinh khiết cao định hình dáng siêu chuẩn, gần như chống tràn tuyệt đối được các chuyên gia và bác sĩ hàng đầu tin dùng</li><li>Thành phần: axit hyaluronic liên kết ngang và các chất chống oxy hóa tự nhiên để giảm các dấu hiệu lão hóa rõ rệt.<img src="https://ckwhitetongkho.com/uploads/source/re-n-tox-(4).png"></li></ul><h2><strong>ƯU ĐIỂM CỦA FILLER:</strong></h2><p><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png">&nbsp;Filler STYLAGE được chứng nhận bởi FDA Mỹ &amp; CE Châu Âu. Đây là minh chứng rõ ràng và cụ thể nhất về độ an toàn tuyệt đối của&nbsp;STYLAGE&nbsp;Filler cho làn da và sức khỏe. Có độ tương thích cao với cơ thể và ít gây dị ứng.</p><p><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png">&nbsp;Đã được sử dụng trong 20 năm qua với hơn 30 triệu liều trên gần 100 quốc gia.</p><p><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png">&nbsp;Có cấu trúc tương tự Hyaluronic_Acid tự nhiên trong cơ thể, bền vững và không có nguồn gốc đầu tiên trên thế giới.</p><h2><strong>CÔNG DỤNG</strong></h2><ul><li>STYLAGE S lidocaine- siêu mềm : làm đầy quanh mắt, môi .</li><li>STYLAGE M lidocaine – trung : Tạo hình môi , cân chỉnh má rãnh cười , thái dương , trán , ...</li><li>STYLAGE L lidocaine -cứng : làm đầy rãnh cười sâu , cân chỉnh dáng cằm&nbsp;</li></ul><p>🤜🏻 CKwhite - Tổng Kho Sỉ Lẻ Filler Botox cam kết phân phối hàng chuẩn thật 100% -bao check cod- đền bù gấp 10 lần nếu chứng minh mua hàng giả từ CKWHITE 🤛🏻</p><p>☎️ 𝐇𝐨𝐭𝐥𝐢𝐧𝐞 0789611774 - 0902717657&nbsp;</p><p>➡️ Kho sẵn hàng giao 24/7</p><p>➡️ Giá Sỉ Từ 1 sản phẩm</p><p>➡️ Sỉ Không ép số lượng&nbsp;</p><p>➡️ Hỗ trợ Hình ảnh, Kỹ Thuật khi lấy hàng</p><p>➡️ Hỗ trợ công thức, cách dùng sp hiệu quả cao nhất.</p>',
          sku: "",
          attributes: null,
          createdAt: "2024-05-20T07:04:57.000Z",
          createdBy: "a1d05682-403e-44ba-b1e9-dc8e83e61e8f",
          updatedAt: null,
          updatedBy: null,
          sold: null,
          isActive: true,
          display: null,
          type: "PRODUCT",
          discountPercent: "0.000000000000000000000000000000",
          region: "Nước hoa từ Pháp",
          meta: "#filler#fillercaocap#fillerphap",
        },
        amount: 2,
      },
      {
        product: {
          id: "8e10378c-676d-460d-9651-f330093e932a",
          title: "FILLER CAO CẤP PHÁP STYLAGE MỀM",
          originPrice: "199000.000",
          discountPrice: "129000.000",
          rating: 5,
          image:
            "/images/file-1717683304908-70642204.jpg;/images/file-1717683304909-41783919.png",
          description:
            '<p><span style="color: rgb(51, 51, 51);">– Xuất xứ: PHÁP</span></p><p><span style="color: rgb(51, 51, 51);">– Hãng sản xuất: VIVACY</span></p><p><span style="color: rgb(51, 51, 51);">– Quy cách: hộp 1 ống x 1ml</span></p><p><span style="color: rgb(51, 51, 51);">– Thành phần:</span></p><p><span style="color: rgb(51, 51, 51);">+ Hyaluronic acid</span></p><p><span style="color: rgb(51, 51, 51);">+ Lidocaine</span></p><p><span style="color: rgb(51, 51, 51);">- CHÚ THÍCH : FILLER CỦA HÃNG VIVACY NÀY CÓ ĐỘ TINH KHIẾT CAO NÊN CHẤT SẼ MỀM HƠN NHỮNG DÒNG KHÁC . QUÝ KHÁCH HÀNG CẦN TƯ VẤN THÊM VỀ DÒNG SẢN PHẨM STYLAGE XIN LIÊN HỆ QUA ZALO : 0938.339.369 ( MR.TUAN ANH KIEU )</span></p>',
          detail:
            '<p>FILLER STYLAGE S</p><p>-Dòng filler hot nhất hiện nay cùng với công nghê tiêm môi ” STRIPPLIPS ”</p><ul><li>Được biết đến là filler có độ tinh khiết cao định hình dáng siêu chuẩn, gần như chống tràn tuyệt đối được các chuyên gia và bác sĩ hàng đầu tin dùng</li><li>Thành phần: axit hyaluronic liên kết ngang và các chất chống oxy hóa tự nhiên để giảm các dấu hiệu lão hóa rõ rệt.<img src="https://ckwhitetongkho.com/uploads/source/re-n-tox-(4).png"></li></ul><h2><strong>ƯU ĐIỂM CỦA FILLER:</strong></h2><p><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png">&nbsp;Filler STYLAGE được chứng nhận bởi FDA Mỹ &amp; CE Châu Âu. Đây là minh chứng rõ ràng và cụ thể nhất về độ an toàn tuyệt đối của&nbsp;STYLAGE&nbsp;Filler cho làn da và sức khỏe. Có độ tương thích cao với cơ thể và ít gây dị ứng.</p><p><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png">&nbsp;Đã được sử dụng trong 20 năm qua với hơn 30 triệu liều trên gần 100 quốc gia.</p><p><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png">&nbsp;Có cấu trúc tương tự Hyaluronic_Acid tự nhiên trong cơ thể, bền vững và không có nguồn gốc đầu tiên trên thế giới.</p><h2><strong>CÔNG DỤNG</strong></h2><ul><li>STYLAGE S lidocaine- siêu mềm : làm đầy quanh mắt, môi .</li><li>STYLAGE M lidocaine – trung : Tạo hình môi , cân chỉnh má rãnh cười , thái dương , trán , ...</li><li>STYLAGE L lidocaine -cứng : làm đầy rãnh cười sâu , cân chỉnh dáng cằm&nbsp;</li></ul><p>🤜🏻 CKwhite - Tổng Kho Sỉ Lẻ Filler Botox cam kết phân phối hàng chuẩn thật 100% -bao check cod- đền bù gấp 10 lần nếu chứng minh mua hàng giả từ CKWHITE 🤛🏻</p><p>☎️ 𝐇𝐨𝐭𝐥𝐢𝐧𝐞 0789611774 - 0902717657&nbsp;</p><p>➡️ Kho sẵn hàng giao 24/7</p><p>➡️ Giá Sỉ Từ 1 sản phẩm</p><p>➡️ Sỉ Không ép số lượng&nbsp;</p><p>➡️ Hỗ trợ Hình ảnh, Kỹ Thuật khi lấy hàng</p><p>➡️ Hỗ trợ công thức, cách dùng sp hiệu quả cao nhất.</p>',
          sku: "",
          attributes: null,
          createdAt: "2024-06-06T14:15:05.000Z",
          createdBy: "de308bed-f73b-4212-ad75-e9590d83b12f",
          updatedAt: null,
          updatedBy: null,
          sold: null,
          isActive: true,
          display: null,
          type: "PRODUCT",
          discountPercent: "35.175879396984925000000000000000",
          region: "Pháp",
          meta: "",
        },
        amount: 3,
      },
    ],
    createdAt: "2024-06-06T10:52:35.000Z",
    status: "Mới",
  },
  {
    id: 2,
    name: "Huynh Tuan Dat",
    phoneNumber: "0705507383",
    address: "3/38, Nguyễn Thị Sáu, phường Thạnh Lộc, quận 12",
    items: [
      {
        product: {
          id: "29c043ab-da16-40ec-931e-dda7250bd54c",
          title: "12312edasd",
          originPrice: "10000.000",
          discountPrice: "3000.000",
          rating: 5,
          image:
            "/images/file-1716917159006-37146564.jpg;/images/file-1716917159007-659941102.jpg;/images/file-1716917159004-591647618.jpg;/images/file-1716917159008-886927993.jpg",
          description: "<p>qưe</p>",
          detail:
            '<p>FILLER STYLAGE L</p><p>-Dòng filler hot nhất hiện nay cùng với công nghê tiêm môi ” STRIPPLIPS ”</p><ul><li>Được biết đến là filler có độ tinh khiết cao định hình dáng siêu chuẩn, gần như chống tràn tuyệt đối được các chuyên gia và bác sĩ hàng đầu tin dùng</li><li>Thành phần: axit hyaluronic liên kết ngang và các chất chống oxy hóa tự nhiên để giảm các dấu hiệu lão hóa rõ rệt.<img src="https://ckwhitetongkho.com/uploads/source/re-n-tox-(4).png"></li></ul><h2><strong>ƯU ĐIỂM CỦA FILLER:</strong></h2><p><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png">&nbsp;Filler STYLAGE được chứng nhận bởi FDA Mỹ &amp; CE Châu Âu. Đây là minh chứng rõ ràng và cụ thể nhất về độ an toàn tuyệt đối của&nbsp;STYLAGE&nbsp;Filler cho làn da và sức khỏe. Có độ tương thích cao với cơ thể và ít gây dị ứng.</p><p><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png">&nbsp;Đã được sử dụng trong 20 năm qua với hơn 30 triệu liều trên gần 100 quốc gia.</p><p><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png">&nbsp;Có cấu trúc tương tự Hyaluronic_Acid tự nhiên trong cơ thể, bền vững và không có nguồn gốc đầu tiên trên thế giới.</p><h2><strong>CÔNG DỤNG</strong></h2><ul><li>STYLAGE S lidocaine- siêu mềm : làm đầy quanh mắt, môi .</li><li>STYLAGE M lidocaine – trung : Tạo hình môi , cân chỉnh má rãnh cười , thái dương , trán , ...</li><li>STYLAGE L lidocaine -cứng : làm đầy rãnh cười sâu , cân chỉnh dáng cằm&nbsp;</li></ul><p>🤜🏻 CKwhite - Tổng Kho Sỉ Lẻ Filler Botox cam kết phân phối hàng chuẩn thật 100% -bao check cod- đền bù gấp 10 lần nếu chứng minh mua hàng giả từ CKWHITE 🤛🏻</p><p>☎️ 𝐇𝐨𝐭𝐥𝐢𝐧𝐞 0789611774 - 0902717657&nbsp;</p><p>➡️ Kho sẵn hàng giao 24/7</p><p>➡️ Giá Sỉ Từ 1 sản phẩm</p><p>➡️ Sỉ Không ép số lượng&nbsp;</p><p>➡️ Hỗ trợ Hình ảnh, Kỹ Thuật khi lấy hàng</p><p>➡️ Hỗ trợ công thức, cách dùng sp hiệu quả cao nhất.</p>',
          sku: "",
          attributes: null,
          createdAt: "2024-05-20T07:04:57.000Z",
          createdBy: "a1d05682-403e-44ba-b1e9-dc8e83e61e8f",
          updatedAt: null,
          updatedBy: null,
          sold: null,
          isActive: true,
          display: null,
          type: "PRODUCT",
          discountPercent: "0.000000000000000000000000000000",
          region: "Nước hoa từ Pháp",
          meta: "#filler#fillercaocap#fillerphap",
        },
        amount: 2,
      },
      {
        product: {
          id: "8e10378c-676d-460d-9651-f330093e932a",
          title: "FILLER CAO CẤP PHÁP STYLAGE MỀM",
          originPrice: "199000.000",
          discountPrice: "129000.000",
          rating: 5,
          image:
            "/images/file-1717683304908-70642204.jpg;/images/file-1717683304909-41783919.png",
          description:
            '<p><span style="color: rgb(51, 51, 51);">– Xuất xứ: PHÁP</span></p><p><span style="color: rgb(51, 51, 51);">– Hãng sản xuất: VIVACY</span></p><p><span style="color: rgb(51, 51, 51);">– Quy cách: hộp 1 ống x 1ml</span></p><p><span style="color: rgb(51, 51, 51);">– Thành phần:</span></p><p><span style="color: rgb(51, 51, 51);">+ Hyaluronic acid</span></p><p><span style="color: rgb(51, 51, 51);">+ Lidocaine</span></p><p><span style="color: rgb(51, 51, 51);">- CHÚ THÍCH : FILLER CỦA HÃNG VIVACY NÀY CÓ ĐỘ TINH KHIẾT CAO NÊN CHẤT SẼ MỀM HƠN NHỮNG DÒNG KHÁC . QUÝ KHÁCH HÀNG CẦN TƯ VẤN THÊM VỀ DÒNG SẢN PHẨM STYLAGE XIN LIÊN HỆ QUA ZALO : 0938.339.369 ( MR.TUAN ANH KIEU )</span></p>',
          detail:
            '<p>FILLER STYLAGE S</p><p>-Dòng filler hot nhất hiện nay cùng với công nghê tiêm môi ” STRIPPLIPS ”</p><ul><li>Được biết đến là filler có độ tinh khiết cao định hình dáng siêu chuẩn, gần như chống tràn tuyệt đối được các chuyên gia và bác sĩ hàng đầu tin dùng</li><li>Thành phần: axit hyaluronic liên kết ngang và các chất chống oxy hóa tự nhiên để giảm các dấu hiệu lão hóa rõ rệt.<img src="https://ckwhitetongkho.com/uploads/source/re-n-tox-(4).png"></li></ul><h2><strong>ƯU ĐIỂM CỦA FILLER:</strong></h2><p><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png">&nbsp;Filler STYLAGE được chứng nhận bởi FDA Mỹ &amp; CE Châu Âu. Đây là minh chứng rõ ràng và cụ thể nhất về độ an toàn tuyệt đối của&nbsp;STYLAGE&nbsp;Filler cho làn da và sức khỏe. Có độ tương thích cao với cơ thể và ít gây dị ứng.</p><p><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png">&nbsp;Đã được sử dụng trong 20 năm qua với hơn 30 triệu liều trên gần 100 quốc gia.</p><p><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png">&nbsp;Có cấu trúc tương tự Hyaluronic_Acid tự nhiên trong cơ thể, bền vững và không có nguồn gốc đầu tiên trên thế giới.</p><h2><strong>CÔNG DỤNG</strong></h2><ul><li>STYLAGE S lidocaine- siêu mềm : làm đầy quanh mắt, môi .</li><li>STYLAGE M lidocaine – trung : Tạo hình môi , cân chỉnh má rãnh cười , thái dương , trán , ...</li><li>STYLAGE L lidocaine -cứng : làm đầy rãnh cười sâu , cân chỉnh dáng cằm&nbsp;</li></ul><p>🤜🏻 CKwhite - Tổng Kho Sỉ Lẻ Filler Botox cam kết phân phối hàng chuẩn thật 100% -bao check cod- đền bù gấp 10 lần nếu chứng minh mua hàng giả từ CKWHITE 🤛🏻</p><p>☎️ 𝐇𝐨𝐭𝐥𝐢𝐧𝐞 0789611774 - 0902717657&nbsp;</p><p>➡️ Kho sẵn hàng giao 24/7</p><p>➡️ Giá Sỉ Từ 1 sản phẩm</p><p>➡️ Sỉ Không ép số lượng&nbsp;</p><p>➡️ Hỗ trợ Hình ảnh, Kỹ Thuật khi lấy hàng</p><p>➡️ Hỗ trợ công thức, cách dùng sp hiệu quả cao nhất.</p>',
          sku: "",
          attributes: null,
          createdAt: "2024-06-06T14:15:05.000Z",
          createdBy: "de308bed-f73b-4212-ad75-e9590d83b12f",
          updatedAt: null,
          updatedBy: null,
          sold: null,
          isActive: true,
          display: null,
          type: "PRODUCT",
          discountPercent: "35.175879396984925000000000000000",
          region: "Pháp",
          meta: "",
        },
        amount: 3,
      },
    ],
    createdAt: "2024-06-06T10:52:35.000Z",
    status: "Đã liên hệ",
  },
  {
    id: 3,
    name: "Huynh Tuan Dat",
    phoneNumber: "0705507383",
    address: "3/38, Nguyễn Thị Sáu, phường Thạnh Lộc, quận 12",
    items: [
      {
        product: {
          id: "29c043ab-da16-40ec-931e-dda7250bd54c",
          title: "12312edasd",
          originPrice: "10000.000",
          discountPrice: "3000.000",
          rating: 5,
          image:
            "/images/file-1716917159006-37146564.jpg;/images/file-1716917159007-659941102.jpg;/images/file-1716917159004-591647618.jpg;/images/file-1716917159008-886927993.jpg",
          description: "<p>qưe</p>",
          detail:
            '<p>FILLER STYLAGE L</p><p>-Dòng filler hot nhất hiện nay cùng với công nghê tiêm môi ” STRIPPLIPS ”</p><ul><li>Được biết đến là filler có độ tinh khiết cao định hình dáng siêu chuẩn, gần như chống tràn tuyệt đối được các chuyên gia và bác sĩ hàng đầu tin dùng</li><li>Thành phần: axit hyaluronic liên kết ngang và các chất chống oxy hóa tự nhiên để giảm các dấu hiệu lão hóa rõ rệt.<img src="https://ckwhitetongkho.com/uploads/source/re-n-tox-(4).png"></li></ul><h2><strong>ƯU ĐIỂM CỦA FILLER:</strong></h2><p><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png">&nbsp;Filler STYLAGE được chứng nhận bởi FDA Mỹ &amp; CE Châu Âu. Đây là minh chứng rõ ràng và cụ thể nhất về độ an toàn tuyệt đối của&nbsp;STYLAGE&nbsp;Filler cho làn da và sức khỏe. Có độ tương thích cao với cơ thể và ít gây dị ứng.</p><p><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png">&nbsp;Đã được sử dụng trong 20 năm qua với hơn 30 triệu liều trên gần 100 quốc gia.</p><p><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png">&nbsp;Có cấu trúc tương tự Hyaluronic_Acid tự nhiên trong cơ thể, bền vững và không có nguồn gốc đầu tiên trên thế giới.</p><h2><strong>CÔNG DỤNG</strong></h2><ul><li>STYLAGE S lidocaine- siêu mềm : làm đầy quanh mắt, môi .</li><li>STYLAGE M lidocaine – trung : Tạo hình môi , cân chỉnh má rãnh cười , thái dương , trán , ...</li><li>STYLAGE L lidocaine -cứng : làm đầy rãnh cười sâu , cân chỉnh dáng cằm&nbsp;</li></ul><p>🤜🏻 CKwhite - Tổng Kho Sỉ Lẻ Filler Botox cam kết phân phối hàng chuẩn thật 100% -bao check cod- đền bù gấp 10 lần nếu chứng minh mua hàng giả từ CKWHITE 🤛🏻</p><p>☎️ 𝐇𝐨𝐭𝐥𝐢𝐧𝐞 0789611774 - 0902717657&nbsp;</p><p>➡️ Kho sẵn hàng giao 24/7</p><p>➡️ Giá Sỉ Từ 1 sản phẩm</p><p>➡️ Sỉ Không ép số lượng&nbsp;</p><p>➡️ Hỗ trợ Hình ảnh, Kỹ Thuật khi lấy hàng</p><p>➡️ Hỗ trợ công thức, cách dùng sp hiệu quả cao nhất.</p>',
          sku: "",
          attributes: null,
          createdAt: "2024-05-20T07:04:57.000Z",
          createdBy: "a1d05682-403e-44ba-b1e9-dc8e83e61e8f",
          updatedAt: null,
          updatedBy: null,
          sold: null,
          isActive: true,
          display: null,
          type: "PRODUCT",
          discountPercent: "0.000000000000000000000000000000",
          region: "Nước hoa từ Pháp",
          meta: "#filler#fillercaocap#fillerphap",
        },
        amount: 2,
      },
      {
        product: {
          id: "8e10378c-676d-460d-9651-f330093e932a",
          title: "FILLER CAO CẤP PHÁP STYLAGE MỀM",
          originPrice: "199000.000",
          discountPrice: "129000.000",
          rating: 5,
          image:
            "/images/file-1717683304908-70642204.jpg;/images/file-1717683304909-41783919.png",
          description:
            '<p><span style="color: rgb(51, 51, 51);">– Xuất xứ: PHÁP</span></p><p><span style="color: rgb(51, 51, 51);">– Hãng sản xuất: VIVACY</span></p><p><span style="color: rgb(51, 51, 51);">– Quy cách: hộp 1 ống x 1ml</span></p><p><span style="color: rgb(51, 51, 51);">– Thành phần:</span></p><p><span style="color: rgb(51, 51, 51);">+ Hyaluronic acid</span></p><p><span style="color: rgb(51, 51, 51);">+ Lidocaine</span></p><p><span style="color: rgb(51, 51, 51);">- CHÚ THÍCH : FILLER CỦA HÃNG VIVACY NÀY CÓ ĐỘ TINH KHIẾT CAO NÊN CHẤT SẼ MỀM HƠN NHỮNG DÒNG KHÁC . QUÝ KHÁCH HÀNG CẦN TƯ VẤN THÊM VỀ DÒNG SẢN PHẨM STYLAGE XIN LIÊN HỆ QUA ZALO : 0938.339.369 ( MR.TUAN ANH KIEU )</span></p>',
          detail:
            '<p>FILLER STYLAGE S</p><p>-Dòng filler hot nhất hiện nay cùng với công nghê tiêm môi ” STRIPPLIPS ”</p><ul><li>Được biết đến là filler có độ tinh khiết cao định hình dáng siêu chuẩn, gần như chống tràn tuyệt đối được các chuyên gia và bác sĩ hàng đầu tin dùng</li><li>Thành phần: axit hyaluronic liên kết ngang và các chất chống oxy hóa tự nhiên để giảm các dấu hiệu lão hóa rõ rệt.<img src="https://ckwhitetongkho.com/uploads/source/re-n-tox-(4).png"></li></ul><h2><strong>ƯU ĐIỂM CỦA FILLER:</strong></h2><p><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png">&nbsp;Filler STYLAGE được chứng nhận bởi FDA Mỹ &amp; CE Châu Âu. Đây là minh chứng rõ ràng và cụ thể nhất về độ an toàn tuyệt đối của&nbsp;STYLAGE&nbsp;Filler cho làn da và sức khỏe. Có độ tương thích cao với cơ thể và ít gây dị ứng.</p><p><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png">&nbsp;Đã được sử dụng trong 20 năm qua với hơn 30 triệu liều trên gần 100 quốc gia.</p><p><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png">&nbsp;Có cấu trúc tương tự Hyaluronic_Acid tự nhiên trong cơ thể, bền vững và không có nguồn gốc đầu tiên trên thế giới.</p><h2><strong>CÔNG DỤNG</strong></h2><ul><li>STYLAGE S lidocaine- siêu mềm : làm đầy quanh mắt, môi .</li><li>STYLAGE M lidocaine – trung : Tạo hình môi , cân chỉnh má rãnh cười , thái dương , trán , ...</li><li>STYLAGE L lidocaine -cứng : làm đầy rãnh cười sâu , cân chỉnh dáng cằm&nbsp;</li></ul><p>🤜🏻 CKwhite - Tổng Kho Sỉ Lẻ Filler Botox cam kết phân phối hàng chuẩn thật 100% -bao check cod- đền bù gấp 10 lần nếu chứng minh mua hàng giả từ CKWHITE 🤛🏻</p><p>☎️ 𝐇𝐨𝐭𝐥𝐢𝐧𝐞 0789611774 - 0902717657&nbsp;</p><p>➡️ Kho sẵn hàng giao 24/7</p><p>➡️ Giá Sỉ Từ 1 sản phẩm</p><p>➡️ Sỉ Không ép số lượng&nbsp;</p><p>➡️ Hỗ trợ Hình ảnh, Kỹ Thuật khi lấy hàng</p><p>➡️ Hỗ trợ công thức, cách dùng sp hiệu quả cao nhất.</p>',
          sku: "",
          attributes: null,
          createdAt: "2024-06-06T14:15:05.000Z",
          createdBy: "de308bed-f73b-4212-ad75-e9590d83b12f",
          updatedAt: null,
          updatedBy: null,
          sold: null,
          isActive: true,
          display: null,
          type: "PRODUCT",
          discountPercent: "35.175879396984925000000000000000",
          region: "Pháp",
          meta: "",
        },
        amount: 3,
      },
    ],
    createdAt: "2024-06-06T10:52:35.000Z",
    status: "Đã thanh toán",
  },
  {
    id: 4,
    name: "Huynh Tuan Dat",
    phoneNumber: "0705507383",
    address: "3/38, Nguyễn Thị Sáu, phường Thạnh Lộc, quận 12",
    items: [
      {
        product: {
          id: "29c043ab-da16-40ec-931e-dda7250bd54c",
          title: "12312edasd",
          originPrice: "10000.000",
          discountPrice: "3000.000",
          rating: 5,
          image:
            "/images/file-1716917159006-37146564.jpg;/images/file-1716917159007-659941102.jpg;/images/file-1716917159004-591647618.jpg;/images/file-1716917159008-886927993.jpg",
          description: "<p>qưe</p>",
          detail:
            '<p>FILLER STYLAGE L</p><p>-Dòng filler hot nhất hiện nay cùng với công nghê tiêm môi ” STRIPPLIPS ”</p><ul><li>Được biết đến là filler có độ tinh khiết cao định hình dáng siêu chuẩn, gần như chống tràn tuyệt đối được các chuyên gia và bác sĩ hàng đầu tin dùng</li><li>Thành phần: axit hyaluronic liên kết ngang và các chất chống oxy hóa tự nhiên để giảm các dấu hiệu lão hóa rõ rệt.<img src="https://ckwhitetongkho.com/uploads/source/re-n-tox-(4).png"></li></ul><h2><strong>ƯU ĐIỂM CỦA FILLER:</strong></h2><p><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png">&nbsp;Filler STYLAGE được chứng nhận bởi FDA Mỹ &amp; CE Châu Âu. Đây là minh chứng rõ ràng và cụ thể nhất về độ an toàn tuyệt đối của&nbsp;STYLAGE&nbsp;Filler cho làn da và sức khỏe. Có độ tương thích cao với cơ thể và ít gây dị ứng.</p><p><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png">&nbsp;Đã được sử dụng trong 20 năm qua với hơn 30 triệu liều trên gần 100 quốc gia.</p><p><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png">&nbsp;Có cấu trúc tương tự Hyaluronic_Acid tự nhiên trong cơ thể, bền vững và không có nguồn gốc đầu tiên trên thế giới.</p><h2><strong>CÔNG DỤNG</strong></h2><ul><li>STYLAGE S lidocaine- siêu mềm : làm đầy quanh mắt, môi .</li><li>STYLAGE M lidocaine – trung : Tạo hình môi , cân chỉnh má rãnh cười , thái dương , trán , ...</li><li>STYLAGE L lidocaine -cứng : làm đầy rãnh cười sâu , cân chỉnh dáng cằm&nbsp;</li></ul><p>🤜🏻 CKwhite - Tổng Kho Sỉ Lẻ Filler Botox cam kết phân phối hàng chuẩn thật 100% -bao check cod- đền bù gấp 10 lần nếu chứng minh mua hàng giả từ CKWHITE 🤛🏻</p><p>☎️ 𝐇𝐨𝐭𝐥𝐢𝐧𝐞 0789611774 - 0902717657&nbsp;</p><p>➡️ Kho sẵn hàng giao 24/7</p><p>➡️ Giá Sỉ Từ 1 sản phẩm</p><p>➡️ Sỉ Không ép số lượng&nbsp;</p><p>➡️ Hỗ trợ Hình ảnh, Kỹ Thuật khi lấy hàng</p><p>➡️ Hỗ trợ công thức, cách dùng sp hiệu quả cao nhất.</p>',
          sku: "",
          attributes: null,
          createdAt: "2024-05-20T07:04:57.000Z",
          createdBy: "a1d05682-403e-44ba-b1e9-dc8e83e61e8f",
          updatedAt: null,
          updatedBy: null,
          sold: null,
          isActive: true,
          display: null,
          type: "PRODUCT",
          discountPercent: "0.000000000000000000000000000000",
          region: "Nước hoa từ Pháp",
          meta: "#filler#fillercaocap#fillerphap",
        },
        amount: 2,
      },
      {
        product: {
          id: "8e10378c-676d-460d-9651-f330093e932a",
          title: "FILLER CAO CẤP PHÁP STYLAGE MỀM",
          originPrice: "199000.000",
          discountPrice: "129000.000",
          rating: 5,
          image:
            "/images/file-1717683304908-70642204.jpg;/images/file-1717683304909-41783919.png",
          description:
            '<p><span style="color: rgb(51, 51, 51);">– Xuất xứ: PHÁP</span></p><p><span style="color: rgb(51, 51, 51);">– Hãng sản xuất: VIVACY</span></p><p><span style="color: rgb(51, 51, 51);">– Quy cách: hộp 1 ống x 1ml</span></p><p><span style="color: rgb(51, 51, 51);">– Thành phần:</span></p><p><span style="color: rgb(51, 51, 51);">+ Hyaluronic acid</span></p><p><span style="color: rgb(51, 51, 51);">+ Lidocaine</span></p><p><span style="color: rgb(51, 51, 51);">- CHÚ THÍCH : FILLER CỦA HÃNG VIVACY NÀY CÓ ĐỘ TINH KHIẾT CAO NÊN CHẤT SẼ MỀM HƠN NHỮNG DÒNG KHÁC . QUÝ KHÁCH HÀNG CẦN TƯ VẤN THÊM VỀ DÒNG SẢN PHẨM STYLAGE XIN LIÊN HỆ QUA ZALO : 0938.339.369 ( MR.TUAN ANH KIEU )</span></p>',
          detail:
            '<p>FILLER STYLAGE S</p><p>-Dòng filler hot nhất hiện nay cùng với công nghê tiêm môi ” STRIPPLIPS ”</p><ul><li>Được biết đến là filler có độ tinh khiết cao định hình dáng siêu chuẩn, gần như chống tràn tuyệt đối được các chuyên gia và bác sĩ hàng đầu tin dùng</li><li>Thành phần: axit hyaluronic liên kết ngang và các chất chống oxy hóa tự nhiên để giảm các dấu hiệu lão hóa rõ rệt.<img src="https://ckwhitetongkho.com/uploads/source/re-n-tox-(4).png"></li></ul><h2><strong>ƯU ĐIỂM CỦA FILLER:</strong></h2><p><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png">&nbsp;Filler STYLAGE được chứng nhận bởi FDA Mỹ &amp; CE Châu Âu. Đây là minh chứng rõ ràng và cụ thể nhất về độ an toàn tuyệt đối của&nbsp;STYLAGE&nbsp;Filler cho làn da và sức khỏe. Có độ tương thích cao với cơ thể và ít gây dị ứng.</p><p><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png">&nbsp;Đã được sử dụng trong 20 năm qua với hơn 30 triệu liều trên gần 100 quốc gia.</p><p><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png">&nbsp;Có cấu trúc tương tự Hyaluronic_Acid tự nhiên trong cơ thể, bền vững và không có nguồn gốc đầu tiên trên thế giới.</p><h2><strong>CÔNG DỤNG</strong></h2><ul><li>STYLAGE S lidocaine- siêu mềm : làm đầy quanh mắt, môi .</li><li>STYLAGE M lidocaine – trung : Tạo hình môi , cân chỉnh má rãnh cười , thái dương , trán , ...</li><li>STYLAGE L lidocaine -cứng : làm đầy rãnh cười sâu , cân chỉnh dáng cằm&nbsp;</li></ul><p>🤜🏻 CKwhite - Tổng Kho Sỉ Lẻ Filler Botox cam kết phân phối hàng chuẩn thật 100% -bao check cod- đền bù gấp 10 lần nếu chứng minh mua hàng giả từ CKWHITE 🤛🏻</p><p>☎️ 𝐇𝐨𝐭𝐥𝐢𝐧𝐞 0789611774 - 0902717657&nbsp;</p><p>➡️ Kho sẵn hàng giao 24/7</p><p>➡️ Giá Sỉ Từ 1 sản phẩm</p><p>➡️ Sỉ Không ép số lượng&nbsp;</p><p>➡️ Hỗ trợ Hình ảnh, Kỹ Thuật khi lấy hàng</p><p>➡️ Hỗ trợ công thức, cách dùng sp hiệu quả cao nhất.</p>',
          sku: "",
          attributes: null,
          createdAt: "2024-06-06T14:15:05.000Z",
          createdBy: "de308bed-f73b-4212-ad75-e9590d83b12f",
          updatedAt: null,
          updatedBy: null,
          sold: null,
          isActive: true,
          display: null,
          type: "PRODUCT",
          discountPercent: "35.175879396984925000000000000000",
          region: "Pháp",
          meta: "",
        },
        amount: 3,
      },
    ],
    createdAt: "2024-06-06T10:52:35.000Z",
    status: "Đã hủy",
  },
];

const Cart = () => {
  const [carts, setCarts] = useState(test);
  const navigate = useNavigate();
  const getBackground = (cart) => {
    switch (cart.status) {
      case "Mới": {
        return "bg-sky-200";
      }
      case "Đã liên hệ": {
        return "bg-amber-200";
      }
      case "Đã thanh toán": {
        return "bg-emerald-200";
      }
      case "Đã hủy": {
        return "bg-rose-300";
      }
    }
  };

  const getDate = (cart) => {
    console.log(Date(Date.now), Date(cart.createdAt));
    const compareTwoDate = formatDistance(
      parseISO(cart.createdAt),
      Date.now(),
      {
        locale: vi, // Fall back to English locale if Vietnamese is unavailable
        addSuffix: true,
      }
    );

    return compareTwoDate;
  };

  return (
    <div className="page-body">
      <HeaderMainPage>
        <div className="flex justify-end ui-layout gap-x-2">
          <BasicButton
            icon={<AiOutlinePlusCircle></AiOutlinePlusCircle>}
            title="Thêm mới"
            className="green-btn"
            onClick={() => {}}
            style={{ visibility: "hidden" }}
          />
        </div>
      </HeaderMainPage>
      <div className="ui-layout">
        <div className="py-[25px]">
          <h1 className="text-[28px] text-blue-950 font-semibold">
            Danh sách đơn hàng
          </h1>
        </div>
        <div>
          <Table>
            <thead></thead>
            <tbody>
              {carts.length === 0 ? (
                <div className="flex flex-col items-center justify-center my-10 gap-y-10">
                  <h4 className="font-medium text-2xl">
                    Không tìm thấy kết quả nào
                  </h4>
                </div>
              ) : (
                <>
                  <tr className="sticky z-9 shadow-md">
                    <th>Mã đơn hàng</th>
                    <th>Khách hàng</th>
                    <th>Số điện thoại</th>
                    <th>Địa chỉ</th>
                    <th>Ngày tạo</th>
                    <th>Trạng thái</th>
                    <th></th>
                  </tr>
                  {carts.map((item, index) => {
                    const bg = getBackground(item);
                    const date = getDate(item);
                    return (
                      <tr key={item.id.toString().split("-")[0]}>
                        <td className="!py-[10px] !px-[14px]">
                          {item.id.toString().split("-")[0]}
                        </td>
                        <td>{item.name}</td>
                        <td className="!py-[10px]">{item.phoneNumber}</td>
                        <td>{item.address}</td>
                        <td>{date}</td>
                        <td>
                          <span className={`${bg + " px-2 py-0.5 rounded"} `}>
                            {item.status}
                          </span>
                        </td>
                        <td>
                          <div className="flex gap-1">
                            <Tooltip title="Xem chi tiết" arrow placement="top">
                              <div>
                                <BasicIconButton
                                  className="!bg-blue-500"
                                  handleOnClick={() => {
                                    navigate(`/admin/cart/${item.id}`);
                                  }}
                                >
                                  <IoMdEye color="white"></IoMdEye>
                                </BasicIconButton>
                              </div>
                            </Tooltip>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
