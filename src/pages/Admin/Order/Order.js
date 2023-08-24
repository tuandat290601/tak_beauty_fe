import React from 'react';
import './Order.scss';

export const Order = () => {
  return (
    <div className="page-body">
      <div className="ui-layout">
        <div className="action-bar">
          <div className="ui-layout">
            <div className="pull-left" />
            <div className="pull-right">
              <a
                href="http://test.sikidodemo.com/manhdung/admin/page/add"
                className="btn-icon btn-green"
              >
                <i className="fad fa-plus-circle" /> Thêm Mới
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-12" />
        <div className="clearfix" />
        <div className="col-md-12">
          <div className="ui-title-bar__group">
            <h1 className="ui-title-bar__title">Trang nội dung</h1>
            <div className="ui-title-bar__action" />
          </div>
          <div className="box" style={{ overflow: 'inherit' }}>
            <div className="box-heading">
              <div className="box-heading-left">
                <a
                  href="http://test.sikidodemo.com/manhdung/admin/page/"
                  className="btn btn-theme"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Đã đăng"
                >
                  <i className="fad fa-pencil" />
                  <b className="number-count">4</b>
                </a>
                <a
                  href="http://test.sikidodemo.com/manhdung/admin/page/?status=trash"
                  className="btn btn-white"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Thùng rác"
                >
                  <i className="fad fa-trash" />
                  <b className="number-count">0</b>
                </a>
                <div
                  className="jsTableManipulation"
                  style={{ display: 'none' }}
                >
                  <a href="#" className="btn btn-success">
                    <i className="far fa-ellipsis-v" />
                    <span className="text-btn ng-binding">Thao tác</span>
                    <i className="fa fa-caret-down" />
                  </a>
                  <ul>
                    <li>
                      <a
                        href="/"
                        className="ng-binding js_btn_confirm"
                        data-action="delete"
                        data-ajax="Cms_Ajax_Action::delete"
                        data-module="page"
                        data-trash="enable"
                        data-heading="Xóa Dữ liệu"
                        data-description="Bạn chắc chắn muốn xóa trường dữ liệu này?"
                      >
                        <i className="fad fa-trash" /> Xóa trang
                      </a>
                    </li>
                  </ul>
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                      .jsTableManipulation {\n                        display: inline-block;\n                        position: relative;\n                      }\n                      .jsTableManipulation ul {\n                        position: absolute;\n                        top: 40px;\n                        left: 0;\n                        z-index: 999;\n                        min-width: 265px;\n                        display: none;\n                        padding: 10px 0;\n                        list-style: none;\n                        background-color: #fff;\n                        -webkit-border-radius: 5px;\n                        -moz-border-radius: 5px;\n                        border-radius: 5px;\n                        -webkit-box-shadow: 0 5px 25px rgb(0 0 0 / 25%);\n                        -moz-box-shadow: 0 5px 25px rgba(0, 0, 0, 0.25);\n                        box-shadow: 0 5px 25px rgb(0 0 0 / 25%);\n                        margin-top: -5px;\n                      }\n                      .jsTableManipulation ul li a {\n                        display: block;\n                        padding: 0.8rem 2.4rem;\n                        white-space: nowrap;\n                        color: #111;\n                        line-height: 20px;\n                        cursor: pointer;\n                      }\n                      .jsTableManipulation ul li a i {\n                        font-size: 14px;\n                        width: 14px;\n                        text-align: center;\n                      }\n                      .jsTableManipulation ul li a [class*='fa-'] {\n                        margin-right: 1rem;\n                        color: #666;\n                        font-size: 16px;\n                        min-width: 22px;\n                      }\n                      .jsTableManipulation:hover ul {\n                        display: block;\n                      }\n                      .jsTableManipulation ul li a:hover {\n                        background-color: #f2f2f2;\n                      }\n                    ",
                  }}
                />
              </div>
              <div className="box-heading-right">
                <form
                  className="search-box"
                  action="http://test.sikidodemo.com/manhdung/admin/page/"
                >
                  <div className="form-group-search">
                    <input
                      type="text"
                      name="keyword"
                      defaultValue=""
                      id="keyword"
                      className="form-control"
                      placeholder="Từ khóa..."
                      field="keyword"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn"
                    style={{ padding: '10px 10px' }}
                  >
                    <i className="fad fa-search" />
                  </button>
                </form>
              </div>
            </div>
            <div className="box-content">
              <form method="post" id="form-action">
                <div className="table-responsive">
                  <table className="display table table-striped media-table">
                    <thead>
                      <tr>
                        <th
                          id="cb"
                          className="manage-column column-cb check-column"
                        >
                          <input
                            type="checkbox"
                            name="select[]"
                            id="select_all"
                            className="icheck"
                          />
                        </th>
                        <th id="title" className="manage-column column-title">
                          Tiêu Đề
                        </th>
                        <th id="public" className="manage-column column-public">
                          Hiển Thị
                        </th>
                        <th id="action" className="manage-column column-action">
                          Hành Động
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="tr_3">
                        <td scope="row" className="check-column">
                          <input
                            className="icheck select"
                            defaultValue={3}
                            type="checkbox"
                            name="select[]"
                          />
                        </td>
                        <td className="title column-title">
                          <h3>Giỏ hàng</h3>
                          <div className="action-hide">
                            <span>ID : 3</span> |
                            <a
                              href="gio-hang"
                              target="_blank"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Xem"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </div>
                        </td>
                        <td className="public column-public">
                          <input
                            type="checkbox"
                            className="icheck up-boolean"
                            data-row="public"
                            data-model="page"
                            data-id={3}
                            defaultChecked=""
                          />
                        </td>
                        <td className="action column-action text-center">
                          <a href="admin/page/edit/3" className="btn-blue btn">
                            <i className="fad fa-pencil" />
                          </a>
                          <button
                            className="btn btn-red js_btn_confirm"
                            data-action="delete"
                            data-ajax="Cms_Ajax_Action::delete"
                            data-id={3}
                            data-module="page"
                            data-heading="Xóa Dữ liệu"
                            data-description="Bạn chắc chắn muốn xóa trang <b>Giỏ hàng</b> ?"
                            data-trash="enable"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Xóa"
                          >
                            <i className="fad fa-trash" />
                          </button>
                        </td>
                      </tr>
                      <tr className="tr_4">
                        <td scope="row" className="check-column">
                          <input
                            className="icheck select"
                            defaultValue={4}
                            type="checkbox"
                            name="select[]"
                          />
                        </td>
                        <td className="title column-title">
                          <h3>Thanh toán</h3>
                          <div className="action-hide">
                            <span>ID : 4</span> |
                            <a
                              href="thanh-toan"
                              target="_blank"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Xem"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </div>
                        </td>
                        <td className="public column-public">
                          <input
                            type="checkbox"
                            className="icheck up-boolean"
                            data-row="public"
                            data-model="page"
                            data-id={4}
                            defaultChecked=""
                          />
                        </td>
                        <td className="action column-action text-center">
                          <a href="admin/page/edit/4" className="btn-blue btn">
                            <i className="fad fa-pencil" />
                          </a>
                          <button
                            className="btn btn-red js_btn_confirm"
                            data-action="delete"
                            data-ajax="Cms_Ajax_Action::delete"
                            data-id={4}
                            data-module="page"
                            data-heading="Xóa Dữ liệu"
                            data-description="Bạn chắc chắn muốn xóa trang <b>Thanh toán</b> ?"
                            data-trash="enable"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Xóa"
                          >
                            <i className="fad fa-trash" />
                          </button>
                        </td>
                      </tr>
                      <tr className="tr_5">
                        <td scope="row" className="check-column">
                          <input
                            className="icheck select"
                            defaultValue={5}
                            type="checkbox"
                            name="select[]"
                          />
                        </td>
                        <td className="title column-title">
                          <h3>Đơn hàng</h3>
                          <div className="action-hide">
                            <span>ID : 5</span> |
                            <a
                              href="don-hang"
                              target="_blank"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Xem"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </div>
                        </td>
                        <td className="public column-public">
                          <input
                            type="checkbox"
                            className="icheck up-boolean"
                            data-row="public"
                            data-model="page"
                            data-id={5}
                            defaultChecked=""
                          />
                        </td>
                        <td className="action column-action text-center">
                          <a href="admin/page/edit/5" className="btn-blue btn">
                            <i className="fad fa-pencil" />
                          </a>
                          <button
                            className="btn btn-red js_btn_confirm"
                            data-action="delete"
                            data-ajax="Cms_Ajax_Action::delete"
                            data-id={5}
                            data-module="page"
                            data-heading="Xóa Dữ liệu"
                            data-description="Bạn chắc chắn muốn xóa trang <b>Đơn hàng</b> ?"
                            data-trash="enable"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Xóa"
                          >
                            <i className="fad fa-trash" />
                          </button>
                        </td>
                      </tr>
                      <tr className="tr_2">
                        <td scope="row" className="check-column">
                          <input
                            className="icheck select"
                            defaultValue={2}
                            type="checkbox"
                            name="select[]"
                          />
                        </td>
                        <td className="title column-title">
                          <h3>Liên hệ</h3>
                          <div className="action-hide">
                            <span>ID : 2</span> |
                            <a
                              href="lien-he"
                              target="_blank"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Xem"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </div>
                        </td>
                        <td className="public column-public">
                          <input
                            type="checkbox"
                            className="icheck up-boolean"
                            data-row="public"
                            data-model="page"
                            data-id={2}
                            defaultChecked=""
                          />
                        </td>
                        <td className="action column-action text-center">
                          <a href="admin/page/edit/2" className="btn-blue btn">
                            <i className="fad fa-pencil" />
                          </a>
                          <button
                            className="btn btn-red js_btn_confirm"
                            data-action="delete"
                            data-ajax="Cms_Ajax_Action::delete"
                            data-id={2}
                            data-module="page"
                            data-heading="Xóa Dữ liệu"
                            data-description="Bạn chắc chắn muốn xóa trang <b>Liên hệ</b> ?"
                            data-trash="enable"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Xóa"
                          >
                            <i className="fad fa-trash" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
          </div>
          <div className="paging">
            <div className="pull-right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
