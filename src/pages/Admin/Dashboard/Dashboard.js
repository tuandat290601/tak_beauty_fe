import React from 'react';
import './Dashboard.scss';

export const Dashboard = () => {
  return (
    <div className="page-body">
      <div className="ui-layout">
        <ul id="list_dashboard_widget">
          <li
            className="list-dashboard-item col-md-12"
            data-id="cart_dashboard_order"
          >
            <div id="wg_dashboard_cart_dashboard_order">
              <div className="cart_dashboard_order">
                <div className="row">
                  <div className="col-md-4">
                    <h3>Doanh thu</h3>
                    <div className="cart_dashboard_order_item today">
                      <div className="loading ng-star-inserted" id="">
                        <div className="vs-loading__load vs-loading--default">
                          <div className="lds">
                            <div className="lds__1" />
                            <div className="lds__2" />
                          </div>
                        </div>
                      </div>
                      <p className="time">Hôm nay</p>
                      <p className="icon">
                        <i className="fad fa-clouds-sun" />
                      </p>
                      <p className="number" />
                      <p className="count" />
                    </div>
                    <div className="cart_dashboard_order_item yesterday">
                      <div className="loading ng-star-inserted" id="">
                        <div className="vs-loading__load vs-loading--default">
                          <div className="lds">
                            <div className="lds__1" />
                            <div className="lds__2" />
                          </div>
                        </div>
                      </div>
                      <p className="time">Hôm qua</p>
                      <p className="icon">
                        <i className="fad fa-clouds-sun" />
                      </p>
                      <p className="number" />
                      <p className="count" />
                    </div>
                    <div className="cart_dashboard_order_item week">
                      <div className="loading ng-star-inserted" id="">
                        <div className="vs-loading__load vs-loading--default">
                          <div className="lds">
                            <div className="lds__1" />
                            <div className="lds__2" />
                          </div>
                        </div>
                      </div>
                      <p className="time">Tuần trước</p>
                      <p className="icon">
                        <i className="fad fa-clouds-sun" />
                      </p>
                      <p className="number" />
                      <p className="count" />
                    </div>
                    <div className="cart_dashboard_order_item month">
                      <div className="loading ng-star-inserted" id="">
                        <div className="vs-loading__load vs-loading--default">
                          <div className="lds">
                            <div className="lds__1" />
                            <div className="lds__2" />
                          </div>
                        </div>
                      </div>
                      <p className="time">Tháng trước</p>
                      <p className="icon">
                        <i className="fad fa-clouds-sun" />
                      </p>
                      <p className="number" />
                      <p className="count" />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <h3>Bán chạy tháng này</h3>
                    <div className="cart_dashboard_product_bestseller">
                      <div className="loading ng-star-inserted" id="">
                        <div className="vs-loading__load vs-loading--default">
                          <div className="lds">
                            <div className="lds__1" />
                            <div className="lds__2" />
                          </div>
                        </div>
                      </div>
                      <div className="cart_dashboard_product_item item-header">
                        <div className="col title">Sản phẩm</div>
                        <div className="col img" />
                        <div className="col price">Giá</div>
                        <div className="col quantity">Đã bán</div>
                        <div className="col subtotal">Tổng tiền</div>
                      </div>
                      <div className="list_product__body" />
                    </div>
                  </div>
                </div>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n                    .cart_dashboard_order {\n                      position: relative;\n                      margin: 20px 0;\n                      overflow: hidden;\n                      border-radius: 10px;\n                      border: 1px solid #b9c4da;\n                      padding: 35px 20px;\n                      background-color: #fff;\n                    }\n                    .cart_dashboard_order h3 {\n                      font-size: 18px;\n                      margin-bottom: 30px;\n                      margin-top: 0;\n                    }\n                    .cart_dashboard_order .cart_dashboard_order_item {\n                      padding: 20px 20px 20px 100px;\n                      border: 1px solid #b9c4da;\n                      color: #b9c4da;\n                      border-radius: 10px;\n                      margin-bottom: 20px;\n                      position: relative;\n                      min-height: 98px;\n                    }\n                    .cart_dashboard_order\n                      .cart_dashboard_order_item:last-child {\n                      margin-bottom: 0;\n                    }\n                    .cart_dashboard_order .cart_dashboard_order_item .time {\n                      position: absolute;\n                      left: 10px;\n                      top: -10px;\n                      background-color: #fff;\n                      padding: 0 5px;\n                      font-size: 13px;\n                      margin-bottom: 0;\n                      font-weight: bold;\n                      color: #000;\n                    }\n                    .cart_dashboard_order .cart_dashboard_order_item .icon {\n                      position: absolute;\n                      left: 20px;\n                      top: 30px;\n                      width: 50px;\n                      height: 50px;\n                      line-height: 50px;\n                      text-align: center;\n                      background-color: #f5f8fd;\n                      color: #45d7c4;\n                      border-radius: 50%;\n                    }\n                    .cart_dashboard_order .cart_dashboard_order_item .number {\n                      font-size: 20px;\n                      font-weight: bold;\n                      margin-bottom: 10px;\n                      color: #323232;\n                    }\n                    .cart_dashboard_order .cart_dashboard_order_item .count {\n                      font-size: 13px;\n                      margin-bottom: 0;\n                      font-weight: bold;\n                    }\n\n                    .cart_dashboard_product_bestseller {\n                      min-height: 300px;\n                    }\n\n                    .cart_dashboard_product_bestseller\n                      .cart_dashboard_product_item {\n                      overflow: hidden;\n                    }\n                    .cart_dashboard_product_bestseller\n                      .cart_dashboard_product_item.item-header {\n                      font-weight: bold;\n                      background-color: #fff !important;\n                      color: #b9c4da;\n                    }\n\n                    .cart_dashboard_product_bestseller\n                      .cart_dashboard_product_item:nth-child(2n + 1) {\n                      background-color: var(--content-bg);\n                    }\n                    .cart_dashboard_product_bestseller\n                      .cart_dashboard_product_item\n                      .col {\n                      float: left;\n                      width: 20%;\n                      padding: 10px;\n                    }\n                    .cart_dashboard_product_bestseller\n                      .cart_dashboard_product_item\n                      .img {\n                      width: 10%;\n                    }\n                    .cart_dashboard_product_bestseller\n                      .cart_dashboard_product_item\n                      .img\n                      img {\n                      width: 100%;\n                      border: 1px solid #c5cfdf;\n                      border-radius: 5px;\n                    }\n\n                    .cart_dashboard_product_bestseller\n                      .cart_dashboard_product_item\n                      .title {\n                      width: 30%;\n                    }\n                    .cart_dashboard_product_bestseller\n                      .cart_dashboard_product_item\n                      .title\n                      h4 {\n                      font-size: 13px;\n                      margin: 0;\n                      line-height: 20px;\n                    }\n                  ',
                }}
              />
            </div>
          </li>
          <li className="list-dashboard-item col-md-12" data-id="support">
            <div id="wg_dashboard_support">
              <div className="dashboard_box">
                <div className="dashboard_support_box">
                  <div className="dashboard_support_box__icon">
                    <div className="icon">
                      <i className="fad fa-box-check" />
                    </div>
                  </div>
                  <div className="dashboard_support_box__info">
                    <h3>Thêm sản phẩm</h3>
                    <p>
                      Tạo mới và quản lý tồn kho theo từng phiên bản sản phẩm
                    </p>
                  </div>
                  <div className="dashboard_support_box__button">
                    <a
                      href="http://test.sikidodemo.com/manhdung/admin/products/add"
                      className="btn btn-blue btn-block"
                    >
                      Thêm sản phẩm (F2)
                    </a>
                  </div>
                </div>
                <div className="dashboard_support_box green">
                  <div className="dashboard_support_box__icon">
                    <div className="icon">
                      <i className="fad fa-books-medical" />
                    </div>
                  </div>
                  <div className="dashboard_support_box__info">
                    <h3>Thêm đơn hàng</h3>
                    <p>Tạo mới và quản lý danh sách đơn hàng của bạn</p>
                  </div>
                  <div className="dashboard_support_box__button">
                    <a
                      href="http://test.sikidodemo.com/manhdung/admin/plugins?page=order&view=create"
                      className="btn btn-blue btn-block"
                    >
                      Thêm đơn hàng (F1)
                    </a>
                  </div>
                </div>
                <div className="dashboard_support_box yellow">
                  <div className="dashboard_support_box__icon">
                    <div className="icon">
                      <i className="fad fa-box-check" />
                    </div>
                  </div>
                  <div className="dashboard_support_box__info">
                    <h3>Cấu hình hệ thống</h3>
                    <p>Cài đặt thông tin liên hệ, mạng xã hội... cho website</p>
                  </div>
                  <div className="dashboard_support_box__button">
                    <a
                      href="http://test.sikidodemo.com/manhdung/admin/system"
                      className="btn btn-blue btn-block"
                    >
                      Cấu hình hệ thống (F6)
                    </a>
                  </div>
                </div>
                <div className="dashboard_support_box green">
                  <div className="dashboard_support_box__icon">
                    <div className="icon">
                      <i className="fad fa-palette" />
                    </div>
                  </div>
                  <div className="dashboard_support_box__info">
                    <h3>Cấu hình giao diện</h3>
                    <p>Cấu hình logo, màu sắc, header, footer cho website</p>
                  </div>
                  <div className="dashboard_support_box__button">
                    <a
                      href="http://test.sikidodemo.com/manhdung/admin/theme/option"
                      className="btn btn-blue btn-block"
                    >
                      Cấu hình giao diện (F7)
                    </a>
                  </div>
                </div>
                <div className="dashboard_support_box red">
                  <div className="dashboard_support_box__icon">
                    <div className="icon">
                      <i className="fad fa-bring-forward" />
                    </div>
                  </div>
                  <div className="dashboard_support_box__info">
                    <h3>Widget</h3>
                    <p>Quản lý cài đặt nội dung widget trang chủ website</p>
                  </div>
                  <div className="dashboard_support_box__button">
                    <a
                      href="http://test.sikidodemo.com/manhdung/admin/theme/widgets"
                      className="btn btn-blue btn-block"
                    >
                      Danh sách widget (F8)
                    </a>
                  </div>
                </div>
                <p style={{ paddingLeft: 10, color: '#999' }}>
                  Mở bảng hỗ trợ bằng tổ hợp phím <b>CTRL + H</b>
                </p>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n                    .dashboard_box {\n                      background-color: #fff;\n                      border-radius: 5px;\n                      overflow: hidden;\n                      padding: 0 5px;\n\n                      display: flex; /* or inline-flex */\n                      align-items: stretch;\n                      flex-flow: row wrap;\n                      justify-content: space-between;\n                    }\n                    .dashboard_box::-webkit-scrollbar {\n                      height: 5px;\n                      background-color: #ebebeb;\n                    }\n                    .dashboard_box::-webkit-scrollbar-track {\n                      border-radius: 10px;\n                      background-color: #ebebeb;\n                      height: 5px;\n                    }\n                    .dashboard_box::-webkit-scrollbar-thumb {\n                      border-radius: 10px;\n                      background-color: #888;\n                      height: 5px;\n                    }\n                    .dashboard_support_box {\n                      float: left;\n                      width: calc(20% - 10px);\n                      margin: 10px 5px;\n                      background-color: #f2f9ff;\n                      padding: 10px;\n                      text-align: center;\n                      border-radius: 5px;\n\n                      display: inline-block;\n                      scroll-snap-stop: normal;\n                      scroll-snap-align: start;\n                      flex: 0 0 auto;\n\n                      align-self: auto;\n                      position: relative;\n                      overflow: hidden;\n                    }\n                    .dashboard_support_box .dashboard_support_box__icon .icon {\n                      font-size: 30px;\n                      width: 80px;\n                      height: 80px;\n                      line-height: 80px;\n                      border-radius: 50%;\n                      background-color: #0d95e8;\n                      color: #fff;\n                      display: inline-block;\n                    }\n                    .dashboard_support_box .dashboard_support_box__info h3 {\n                      font-size: 18px;\n                      margin: 20px 0;\n                    }\n                    .dashboard_support_box .dashboard_support_box__info p {\n                      color: #a4acb5;\n                    }\n                    .dashboard_support_box .dashboard_support_box__button {\n                      padding: 10px;\n                    }\n\n                    .dashboard_support_box.green {\n                      background-color: #f3fcf9;\n                    }\n                    .dashboard_support_box.green\n                      .dashboard_support_box__icon\n                      .icon {\n                      background-color: #0fd186;\n                    }\n\n                    .dashboard_support_box.yellow {\n                      background-color: #fffbf2;\n                    }\n                    .dashboard_support_box.yellow\n                      .dashboard_support_box__icon\n                      .icon {\n                      background-color: #ffae06;\n                    }\n\n                    .dashboard_support_box.red {\n                      background-color: #f7e5e9;\n                    }\n                    .dashboard_support_box.red\n                      .dashboard_support_box__icon\n                      .icon {\n                      background-color: #df3b64;\n                    }\n                  ',
                }}
              />
            </div>
          </li>
          <li className="list-dashboard-item col-md-12" data-id="prompt_post">
            <div id="wg_dashboard_prompt_post">
              <div className="dashboard_prompt_post">
                <div className="dashboard_prompt_post__title">
                  <h2>Chào mừng admin!</h2>
                  <p>
                    Website của bạn vẫn chưa thêm <b>bài viết</b> nào trong tuần
                    này.
                  </p>
                  <p>Điều này hoàn toàn không tốt cho việc seo website.</p>
                </div>
                <div className="dashboard_prompt_post__img">
                  <img
                    src="views/backend/assets/images/postman2.png"
                    alt=""
                    loading="lazy"
                  />
                </div>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n                    .dashboard_prompt_post {\n                      position: relative;\n                      margin: 20px 0;\n                    }\n                    .dashboard_prompt_post .dashboard_prompt_post__img {\n                      position: absolute;\n                      right: 20px;\n                      top: -50px;\n                    }\n                    .dashboard_prompt_post .dashboard_prompt_post__title {\n                      padding: 20px;\n                      background-color: #f7e5e9;\n                      border-radius: 10px;\n                    }\n                    .dashboard_prompt_post .dashboard_prompt_post__title h2 {\n                      color: #fe616f;\n                      margin-top: 0;\n                      margin-bottom: 20px;\n                    }\n                  ',
                }}
              />
            </div>
          </li>
          <li className="list-dashboard-item col-md-12" data-id="quick_access">
            <div id="wg_dashboard_quick_access">
              <div className="dashboard_quich_access">
                <div className="dashboard_quich_access__item option">
                  <a href="http://test.sikidodemo.com/manhdung/admin/theme/option">
                    <div className="icon">
                      <i className="fad fa-pencil-ruler" />
                    </div>
                    <div className="icon icon-opacity">
                      <i className="fad fa-pencil-ruler" />
                    </div>
                    <div className="title">Giao diện</div>
                  </a>
                </div>
                <div className="dashboard_quich_access__item order">
                  <a href="http://test.sikidodemo.com/manhdung/admin/plugins?page=order">
                    <div className="icon">
                      <i className="fad fa-shopping-basket" />
                    </div>
                    <div className="icon icon-opacity">
                      <i className="fad fa-shopping-basket" />
                    </div>
                    <div className="title">Đơn hàng</div>
                  </a>
                </div>
                <div className="dashboard_quich_access__item post">
                  <a href="http://test.sikidodemo.com/manhdung/admin/post/add?post_type=post">
                    <div className="icon">
                      <i className="fad fa-user-edit" />
                    </div>
                    <div className="icon icon-opacity">
                      <i className="fad fa-user-edit" />
                    </div>
                    <div className="title">Viết bài viết</div>
                  </a>
                </div>
                <div className="dashboard_quich_access__item widget">
                  <a href="http://test.sikidodemo.com/manhdung/admin/theme/widgets">
                    <div className="icon">
                      <i className="fad fa-layer-group" />
                    </div>
                    <div className="icon icon-opacity">
                      <i className="fad fa-layer-group" />
                    </div>
                    <div className="title">Widget</div>
                  </a>
                </div>
                <div className="dashboard_quich_access__item menu">
                  <a href="http://test.sikidodemo.com/manhdung/admin/theme/menu">
                    <div className="icon">
                      <i className="fad fa-bars" />
                    </div>
                    <div className="icon icon-opacity">
                      <i className="fad fa-bars" />
                    </div>
                    <div className="title">Menu</div>
                  </a>
                </div>
                <div className="dashboard_quich_access__item gallery">
                  <a href="http://test.sikidodemo.com/manhdung/admin/gallerys">
                    <div className="icon">
                      <i className="fad fa-images" />
                    </div>
                    <div className="icon icon-opacity">
                      <i className="fad fa-images" />
                    </div>
                    <div className="title">Gallery</div>
                  </a>
                </div>
                <div className="dashboard_quich_access__item products">
                  <a href="http://test.sikidodemo.com/manhdung/admin/products/add">
                    <div className="icon">
                      <i className="fad fa-box-open" />
                    </div>
                    <div className="icon icon-opacity">
                      <i className="fad fa-box-open" />
                    </div>
                    <div className="title">Thêm sản phẩm</div>
                  </a>
                </div>
                <div className="dashboard_quich_access__item contact">
                  <a href="http://test.sikidodemo.com/manhdung/admin/system?tab=cms-contact">
                    <div className="icon">
                      <i className="fad fa-id-card-alt" />
                    </div>
                    <div className="icon icon-opacity">
                      <i className="fad fa-id-card-alt" />
                    </div>
                    <div className="title">Liên hệ</div>
                  </a>
                </div>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n                    .dashboard_quich_access {\n                      display: flex; /* or inline-flex */\n                      align-items: stretch;\n                      flex-flow: row wrap;\n                      justify-content: space-between;\n                    }\n                    .dashboard_quich_access__item {\n                      align-self: auto;\n                      padding: 5px;\n                      margin: 10px 0px;\n                      color: white;\n                      font-weight: bold;\n                      font-size: 13px;\n                      text-align: center;\n                      border-radius: 10px;\n                      box-shadow: 3px 3px 6px #ccc;\n                      background-color: #fff;\n                      width: calc(100% / 9);\n                      position: relative;\n                      overflow: hidden;\n                    }\n                    .dashboard_quich_access__item > a {\n                      display: block;\n                    }\n                    .dashboard_quich_access__item .icon {\n                      font-size: 40px;\n                      color: #000;\n                    }\n                    .dashboard_quich_access__item .icon-opacity {\n                      font-size: 80px;\n                      color: #000;\n                      position: absolute;\n                      bottom: -35px;\n                      right: -35px;\n                      opacity: 0.1;\n                    }\n                    .dashboard_quich_access__item .title {\n                      color: var(--theme-color);\n                      margin: 10px;\n                    }\n\n                    .dashboard_quich_access__item.post .icon {\n                      color: #158eff;\n                    }\n                    .dashboard_quich_access__item.option .icon {\n                      color: #ec436e;\n                    }\n                    .dashboard_quich_access__item.widget .icon {\n                      color: #8e6fe9;\n                    }\n                    .dashboard_quich_access__item.menu .icon {\n                      color: #21d783;\n                    }\n                    .dashboard_quich_access__item.gallery .icon {\n                      color: #d7b500;\n                    }\n                    .dashboard_quich_access__item.products .icon {\n                      color: #214171;\n                    }\n                    .dashboard_quich_access__item.order .icon {\n                      color: #c71313;\n                    }\n                    .dashboard_quich_access__item:hover {\n                      background: rgb(147, 147, 147);\n                      background: linear-gradient(\n                        126deg,\n                        rgba(147, 147, 147, 1) 0%,\n                        rgba(46, 46, 46, 1) 42%,\n                        rgba(0, 0, 0, 1) 100%\n                      );\n                    }\n                    .dashboard_quich_access__item.post:hover {\n                      background: rgb(48, 155, 255);\n                      background: -moz-linear-gradient(\n                        165deg,\n                        rgba(48, 155, 255, 1) 0%,\n                        rgba(21, 142, 255, 1) 30%,\n                        rgba(5, 86, 159, 1) 100%\n                      );\n                      background: -webkit-linear-gradient(\n                        165deg,\n                        rgba(48, 155, 255, 1) 0%,\n                        rgba(21, 142, 255, 1) 30%,\n                        rgba(5, 86, 159, 1) 100%\n                      );\n                      background: linear-gradient(\n                        165deg,\n                        rgba(48, 155, 255, 1) 0%,\n                        rgba(21, 142, 255, 1) 30%,\n                        rgba(5, 86, 159, 1) 100%\n                      );\n                      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#309bff",endColorstr="#05569f",GradientType=1);\n                    }\n                    .dashboard_quich_access__item.option:hover {\n                      background: rgb(255, 128, 160);\n                      background: -moz-linear-gradient(\n                        165deg,\n                        rgba(255, 128, 160, 1) 0%,\n                        rgba(236, 67, 110, 1) 30%,\n                        rgba(156, 15, 51, 1) 100%\n                      );\n                      background: -webkit-linear-gradient(\n                        165deg,\n                        rgba(255, 128, 160, 1) 0%,\n                        rgba(236, 67, 110, 1) 30%,\n                        rgba(156, 15, 51, 1) 100%\n                      );\n                      background: linear-gradient(\n                        165deg,\n                        rgba(255, 128, 160, 1) 0%,\n                        rgba(236, 67, 110, 1) 30%,\n                        rgba(156, 15, 51, 1) 100%\n                      );\n                      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff80a0",endColorstr="#9c0f33",GradientType=1);\n                    }\n                    .dashboard_quich_access__item.widget:hover {\n                      background: rgb(188, 165, 255);\n                      background: -moz-linear-gradient(\n                        165deg,\n                        rgba(188, 165, 255, 1) 0%,\n                        rgba(142, 111, 233, 1) 30%,\n                        rgba(56, 30, 133, 1) 100%\n                      );\n                      background: -webkit-linear-gradient(\n                        165deg,\n                        rgba(188, 165, 255, 1) 0%,\n                        rgba(142, 111, 233, 1) 30%,\n                        rgba(56, 30, 133, 1) 100%\n                      );\n                      background: linear-gradient(\n                        165deg,\n                        rgba(188, 165, 255, 1) 0%,\n                        rgba(142, 111, 233, 1) 30%,\n                        rgba(56, 30, 133, 1) 100%\n                      );\n                      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#bca5ff",endColorstr="#381e85",GradientType=1);\n                    }\n                    .dashboard_quich_access__item.menu:hover {\n                      background: rgb(145, 255, 204);\n                      background: -moz-linear-gradient(\n                        165deg,\n                        rgba(145, 255, 204, 1) 0%,\n                        rgba(33, 215, 131, 1) 30%,\n                        rgba(11, 120, 69, 1) 100%\n                      );\n                      background: -webkit-linear-gradient(\n                        165deg,\n                        rgba(145, 255, 204, 1) 0%,\n                        rgba(33, 215, 131, 1) 30%,\n                        rgba(11, 120, 69, 1) 100%\n                      );\n                      background: linear-gradient(\n                        165deg,\n                        rgba(145, 255, 204, 1) 0%,\n                        rgba(33, 215, 131, 1) 30%,\n                        rgba(11, 120, 69, 1) 100%\n                      );\n                      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#91ffcc",endColorstr="#0b7845",GradientType=1);\n                    }\n                    .dashboard_quich_access__item.gallery:hover {\n                      background: rgb(255, 236, 132);\n                      background: -moz-linear-gradient(\n                        165deg,\n                        rgba(255, 236, 132, 1) 0%,\n                        rgba(215, 181, 0, 1) 30%,\n                        rgba(117, 100, 6, 1) 100%\n                      );\n                      background: -webkit-linear-gradient(\n                        165deg,\n                        rgba(255, 236, 132, 1) 0%,\n                        rgba(215, 181, 0, 1) 30%,\n                        rgba(117, 100, 6, 1) 100%\n                      );\n                      background: linear-gradient(\n                        165deg,\n                        rgba(255, 236, 132, 1) 0%,\n                        rgba(215, 181, 0, 1) 30%,\n                        rgba(117, 100, 6, 1) 100%\n                      );\n                      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffec84",endColorstr="#756406",GradientType=1);\n                    }\n                    .dashboard_quich_access__item.products:hover {\n                      background: rgb(130, 166, 221);\n                      background: -moz-linear-gradient(\n                        165deg,\n                        rgba(130, 166, 221, 1) 0%,\n                        rgba(33, 65, 113, 1) 30%,\n                        rgba(16, 49, 101, 1) 100%\n                      );\n                      background: -webkit-linear-gradient(\n                        165deg,\n                        rgba(130, 166, 221, 1) 0%,\n                        rgba(33, 65, 113, 1) 30%,\n                        rgba(16, 49, 101, 1) 100%\n                      );\n                      background: linear-gradient(\n                        165deg,\n                        rgba(130, 166, 221, 1) 0%,\n                        rgba(33, 65, 113, 1) 30%,\n                        rgba(16, 49, 101, 1) 100%\n                      );\n                      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#82a6dd",endColorstr="#103165",GradientType=1);\n                    }\n                    .dashboard_quich_access__item.order:hover {\n                      background: rgb(255, 141, 141);\n                      background: -moz-linear-gradient(\n                        165deg,\n                        rgba(255, 141, 141, 1) 0%,\n                        rgba(199, 19, 19, 1) 30%,\n                        rgba(129, 0, 0, 1) 100%\n                      );\n                      background: -webkit-linear-gradient(\n                        165deg,\n                        rgba(255, 141, 141, 1) 0%,\n                        rgba(199, 19, 19, 1) 30%,\n                        rgba(129, 0, 0, 1) 100%\n                      );\n                      background: linear-gradient(\n                        165deg,\n                        rgba(255, 141, 141, 1) 0%,\n                        rgba(199, 19, 19, 1) 30%,\n                        rgba(129, 0, 0, 1) 100%\n                      );\n                      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff8d8d",endColorstr="#810000",GradientType=1);\n                    }\n\n                    .dashboard_quich_access__item:hover .icon {\n                      color: #fff;\n                    }\n                    .dashboard_quich_access__item:hover .title {\n                      color: #fff;\n                    }\n                    @media (max-width: 900px) {\n                      .dashboard_quich_access__item {\n                        width: 24%;\n                      }\n                    }\n                    @media (max-width: 600px) {\n                      .dashboard_quich_access__item {\n                        width: 24%;\n                      }\n                    }\n                    @media (max-width: 350px) {\n                      .dashboard_quich_access__item {\n                        width: 45%;\n                      }\n                    }\n                  ',
                }}
              />
            </div>
          </li>
          <li className="list-dashboard-item col-md-12" data-id="site_about">
            <div id="wg_dashboard_site_about">
              <div className="alert alert_warning">
                <div className="alert_icon">
                  <i className="fad fa-lightbulb" />
                </div>
                <div className="alert_wrapper">
                  <b>Lưu ý</b> Callback of widget dashboard do'nt exits!
                </div>
                <a className="close" href="#">
                  <i className="icon-cancel" />
                </a>
              </div>
            </div>
          </li>
        </ul>
        <div className="clearfix" />
        <div className="col-md-12">
          <a
            href="#"
            className="manage-dashboard-btn"
            data-fancybox=""
            data-src="#manage-dashboard-widget"
          >
            <i className="fa fa-plus" /> Manage Widgets
          </a>
          <a
            href="#"
            className="manage-dashboard-btn dashboard-sort-widget"
            data-action="on"
          >
            <i className="fad fa-sort-up" /> Bật Sắp Xếp
          </a>
        </div>
        <div style={{ display: 'none' }} id="manage-dashboard-widget">
          <form className="manage-dashboard-widget__list">
            <section className="wrap_widget_posts_recent">
              <div className="widget_info">
                <i
                  className="fad fa-sitemap"
                  style={{ backgroundColor: '#214171' }}
                />
                <span className="widget_name">Hỗ trợ</span>
              </div>
              <div className="swc_wrap">
                <div
                  className="col-md-12 form-group"
                  id="box_dashboard_support"
                >
                  <div className="group">
                    <div className="toggleWrapper">
                      <input
                        name="dashboard[support]"
                        className="d-none switch-value form-control"
                        type="checkbox"
                        defaultValue={1}
                        defaultChecked=""
                      />
                      <div className="button" id="button-17">
                        <input
                          data-true={1}
                          data-false={0}
                          className="switch checkbox"
                          type="checkbox"
                          defaultValue={1}
                          defaultChecked=""
                        />
                        <div className="knobs">
                          <span />
                        </div>
                        <div className="layer" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="wrap_widget_posts_recent">
              <div className="widget_info">
                <i
                  className="fad fa-sitemap"
                  style={{ backgroundColor: '#214171' }}
                />
                <span className="widget_name">Quick access</span>
              </div>
              <div className="swc_wrap">
                <div
                  className="col-md-12 form-group"
                  id="box_dashboard_quick_access"
                >
                  <div className="group">
                    <div className="toggleWrapper">
                      <input
                        name="dashboard[quick_access]"
                        className="d-none switch-value form-control"
                        type="checkbox"
                        defaultValue={1}
                        defaultChecked=""
                      />
                      <div className="button" id="button-17">
                        <input
                          data-true={1}
                          data-false={0}
                          className="switch checkbox"
                          type="checkbox"
                          defaultValue={1}
                          defaultChecked=""
                        />
                        <div className="knobs">
                          <span />
                        </div>
                        <div className="layer" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="wrap_widget_posts_recent">
              <div className="widget_info">
                <i
                  className="fad fa-sitemap"
                  style={{ backgroundColor: '#214171' }}
                />
                <span className="widget_name">Nhắc nhở</span>
              </div>
              <div className="swc_wrap">
                <div
                  className="col-md-12 form-group"
                  id="box_dashboard_prompt_post"
                >
                  <div className="group">
                    <div className="toggleWrapper">
                      <input
                        name="dashboard[prompt_post]"
                        className="d-none switch-value form-control"
                        type="checkbox"
                        defaultValue={1}
                        defaultChecked=""
                      />
                      <div className="button" id="button-17">
                        <input
                          data-true={1}
                          data-false={0}
                          className="switch checkbox"
                          type="checkbox"
                          defaultValue={1}
                          defaultChecked=""
                        />
                        <div className="knobs">
                          <span />
                        </div>
                        <div className="layer" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="wrap_widget_posts_recent">
              <div className="widget_info">
                <i
                  className="fad fa-sitemap"
                  style={{ backgroundColor: '#214171' }}
                />
                <span className="widget_name">Chức năng</span>
              </div>
              <div className="swc_wrap">
                <div
                  className="col-md-12 form-group"
                  id="box_dashboard_site_about"
                >
                  <div className="group">
                    <div className="toggleWrapper">
                      <input
                        name="dashboard[site_about]"
                        className="d-none switch-value form-control"
                        type="checkbox"
                        defaultValue={1}
                        defaultChecked=""
                      />
                      <div className="button" id="button-17">
                        <input
                          data-true={1}
                          data-false={0}
                          className="switch checkbox"
                          type="checkbox"
                          defaultValue={1}
                          defaultChecked=""
                        />
                        <div className="knobs">
                          <span />
                        </div>
                        <div className="layer" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="wrap_widget_posts_recent">
              <div className="widget_info">
                <i
                  className="fas fa-edit"
                  style={{ backgroundColor: '#f3c200' }}
                />
                <span className="widget_name">Thống kê 1</span>
              </div>
              <div className="swc_wrap">
                <div
                  className="col-md-12 form-group"
                  id="box_dashboard_cart_dashboard_order"
                >
                  <div className="group">
                    <div className="toggleWrapper">
                      <input
                        name="dashboard[cart_dashboard_order]"
                        className="d-none switch-value form-control"
                        type="checkbox"
                        defaultValue={1}
                        defaultChecked=""
                      />
                      <div className="button" id="button-17">
                        <input
                          data-true={1}
                          data-false={0}
                          className="switch checkbox"
                          type="checkbox"
                          defaultValue={1}
                          defaultChecked=""
                        />
                        <div className="knobs">
                          <span />
                        </div>
                        <div className="layer" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="clearfix" />
            <button type="submit" className="btn btn-icon btn-blue">
              <i className="fad fa-hdd" /> Save
            </button>
          </form>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n              .wrapper .content .page-content {\n                margin-top: 0;\n                min-height: 445px;\n              }\n              .wrapper .box .box-content {\n                height: 445px;\n                overflow: hidden;\n              }\n              .manage-dashboard-btn {\n                display: inline-block;\n                color: #bcc3c7;\n                padding: 10px 15px;\n                font-size: 14px;\n                font-weight: 400;\n                border: 1px dashed #bcc3c7;\n                border-radius: 2px;\n                margin-bottom: 15px;\n                max-width: 155px;\n              }\n              #manage-dashboard-widget {\n                min-width: 400px;\n                max-width: 100%;\n              }\n              .wrap_widget_posts_recent {\n                height: 65px;\n                line-height: 45px;\n              }\n              .wrap_widget_posts_recent .widget_info {\n                width: calc(100% - 110px);\n                float: left;\n              }\n              .wrap_widget_posts_recent i {\n                font-size: 30px;\n                width: 45px;\n                height: 45px;\n                color: #fff;\n                line-height: 45px;\n                text-align: center;\n                float: left;\n              }\n              .wrap_widget_posts_recent .widget_name {\n                padding-left: 10px;\n              }\n              .wrap_widget_posts_recent .swc_wrap {\n                height: 20px;\n                width: 100px;\n                float: right;\n              }\n              .wrap_widget_posts_recent .swc_wrap label.control-label {\n                display: none;\n              }\n              .toggle__handler {\n                top: 0;\n              }\n            ',
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
