import React from 'react';
import './Service.scss';

export const Service = () => {
  return (
    <>
      <div className="page-body">
        <div className="ui-layout">
          <div className="action-bar">
            <div className="ui-layout">
              <div className="pull-left" />
              <div className="pull-right">
                <a
                  href="http://test.sikidodemo.com/manhdung/admin/post/add?post_type=service-combo"
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
              <h1 className="ui-title-bar__title">Gói dịch vụ</h1>
              <div className="ui-title-bar__action" />
            </div>
            {/* paging */}
            <div className="box" style={{ overflow: 'inherit' }}>
              <div className="box-heading">
                <div className="box-heading-left">
                  <a
                    href="http://test.sikidodemo.com/manhdung/admin/post/?post_type=service-combo"
                    className="btn btn-theme"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Đã đăng"
                  >
                    <i className="fad fa-pencil" />
                    <b className="number-count">3</b>
                  </a>
                  <a
                    href="http://test.sikidodemo.com/manhdung/admin/post/?post_type=service-combo&status=trash"
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
                    <a href="javascript:void(0)" className="btn btn-success">
                      <i className="far fa-ellipsis-v" />
                      <span className="text-btn ng-binding">Thao tác</span>
                      <i className="fa fa-caret-down" />
                    </a>
                    <ul>
                      <li>
                        <a
                          className="ng-binding js_btn_confirm"
                          data-action="delete"
                          data-ajax="Cms_Ajax_Action::delete"
                          data-module="post"
                          data-trash="enable"
                          data-heading="Xóa Dữ liệu"
                          data-description="Bạn chắc chắn muốn xóa trường dữ liệu này?"
                        >
                          <i className="fad fa-trash" /> Xóa bài viết
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
                    action="http://test.sikidodemo.com/manhdung/admin/post/?post_type=service-combo"
                  >
                    <div style={{ display: 'none' }}>
                      <input
                        type="text"
                        name="post_type"
                        defaultValue="service-combo"
                        id="post_type"
                        className="form-control"
                        field="post_type"
                      />
                    </div>
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
              {/* .box-content */}
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
                          <th id="image" className="manage-column column-image">
                            Hình
                          </th>
                          <th id="title" className="manage-column column-title">
                            Tiêu Đề
                          </th>
                          <th id="order" className="manage-column column-order">
                            Thứ Tự
                          </th>
                          <th
                            id="status"
                            className="manage-column column-status"
                          >
                            Nổi bật
                          </th>
                          <th
                            id="public"
                            className="manage-column column-public"
                          >
                            Hiển Thị
                          </th>
                          <th
                            id="action"
                            className="manage-column column-action"
                          >
                            Hành Động
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="tr_12">
                          <td scope="row" className="check-column">
                            <input
                              className="icheck select"
                              defaultValue={12}
                              type="checkbox"
                              name="select[]"
                            />
                          </td>
                          <td className="image column-image">
                            <img
                              src="uploads/source/service/dich-vu-khac-300x300-1.webp"
                              alt="Luxury Retreat"
                              title="Luxury Retreat"
                              style={{ width: 50 }}
                              loading="lazy"
                            />
                          </td>
                          <td className="title column-title">
                            <h3>Luxury Retreat</h3>
                            <div style={{ color: '#ddd', padding: '5px 0' }}>
                              Proin vehi...
                            </div>
                            <div className="action-hide">
                              <span>ID : 12</span> |
                              <a
                                href="luxury-retreat"
                                target="_blank"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Xem"
                              >
                                <i className="fa fa-eye" />
                              </a>
                            </div>
                          </td>
                          <td className="order column-order">
                            <p>
                              <a
                                href="#"
                                data-pk={12}
                                data-name="order"
                                data-table="post"
                                className="edittable-dl-text"
                              >
                                0
                              </a>
                            </p>
                          </td>
                          <td className="status column-status">
                            <input
                              type="checkbox"
                              className="icheck up-boolean"
                              data-row="status"
                              data-model="post"
                              data-id={12}
                              defaultChecked=""
                            />
                          </td>
                          <td className="public column-public">
                            <input
                              type="checkbox"
                              className="icheck up-boolean"
                              data-row="public"
                              data-model="post"
                              data-id={12}
                              defaultChecked=""
                            />
                          </td>
                          <td className="action column-action text-center">
                            <a
                              href="http://test.sikidodemo.com/manhdung/admin//post/edit/12?post_type=service-combo"
                              className="btn-blue btn"
                            >
                              <i className="fad fa-pencil" />
                            </a>
                            <button
                              className="btn btn-red js_btn_confirm"
                              style={{}}
                              data-action="delete"
                              data-ajax="Cms_Ajax_Action::delete"
                              data-id={12}
                              data-module="post"
                              data-heading="Xóa Dữ liệu"
                              data-description="Bạn chắc chắn muốn xóa bài viết <b>Luxury Retreat</b> ?"
                              data-trash="enable"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Xóa"
                            >
                              <i className="fad fa-trash" />
                            </button>
                          </td>
                        </tr>
                        <tr className="tr_11">
                          <td scope="row" className="check-column">
                            <input
                              className="icheck select"
                              defaultValue={11}
                              type="checkbox"
                              name="select[]"
                            />
                          </td>
                          <td className="image column-image">
                            <img
                              src="uploads/medium/service/dich-vu-tri-nam.png"
                              alt="Premium Spa"
                              title="Premium Spa"
                              style={{ width: 50 }}
                              loading="lazy"
                            />
                          </td>
                          <td className="title column-title">
                            <h3>Premium Spa</h3>
                            <div style={{ color: '#ddd', padding: '5px 0' }}>
                              Proin vehi...
                            </div>
                            <div className="action-hide">
                              <span>ID : 11</span> |
                              <a
                                href="premium-spa"
                                target="_blank"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Xem"
                              >
                                <i className="fa fa-eye" />
                              </a>
                            </div>
                          </td>
                          <td className="order column-order">
                            <p>
                              <a
                                href="#"
                                data-pk={11}
                                data-name="order"
                                data-table="post"
                                className="edittable-dl-text"
                              >
                                0
                              </a>
                            </p>
                          </td>
                          <td className="status column-status">
                            <input
                              type="checkbox"
                              className="icheck up-boolean"
                              data-row="status"
                              data-model="post"
                              data-id={11}
                              defaultChecked=""
                            />
                          </td>
                          <td className="public column-public">
                            <input
                              type="checkbox"
                              className="icheck up-boolean"
                              data-row="public"
                              data-model="post"
                              data-id={11}
                              defaultChecked=""
                            />
                          </td>
                          <td className="action column-action text-center">
                            <a
                              href="http://test.sikidodemo.com/manhdung/admin//post/edit/11?post_type=service-combo"
                              className="btn-blue btn"
                            >
                              <i className="fad fa-pencil" />
                            </a>
                            <button
                              className="btn btn-red js_btn_confirm"
                              style={{}}
                              data-action="delete"
                              data-ajax="Cms_Ajax_Action::delete"
                              data-id={11}
                              data-module="post"
                              data-heading="Xóa Dữ liệu"
                              data-description="Bạn chắc chắn muốn xóa bài viết <b>Premium Spa</b> ?"
                              data-trash="enable"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Xóa"
                            >
                              <i className="fad fa-trash" />
                            </button>
                          </td>
                        </tr>
                        <tr className="tr_10">
                          <td scope="row" className="check-column">
                            <input
                              className="icheck select"
                              defaultValue={10}
                              type="checkbox"
                              name="select[]"
                            />
                          </td>
                          <td className="image column-image">
                            <img
                              src="uploads/medium/service/dich-vu-tri-mun.png"
                              alt="Comfort Relax"
                              title="Comfort Relax"
                              style={{ width: 50 }}
                              loading="lazy"
                            />
                          </td>
                          <td className="title column-title">
                            <h3>Comfort Relax</h3>
                            <div style={{ color: '#ddd', padding: '5px 0' }}>
                              Proin vehi...
                            </div>
                            <div className="action-hide">
                              <span>ID : 10</span> |
                              <a
                                href="comfort-relax"
                                target="_blank"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Xem"
                              >
                                <i className="fa fa-eye" />
                              </a>
                            </div>
                          </td>
                          <td className="order column-order">
                            <p>
                              <a
                                href="#"
                                data-pk={10}
                                data-name="order"
                                data-table="post"
                                className="edittable-dl-text"
                              >
                                0
                              </a>
                            </p>
                          </td>
                          <td className="status column-status">
                            <input
                              type="checkbox"
                              className="icheck up-boolean"
                              data-row="status"
                              data-model="post"
                              data-id={10}
                              defaultChecked=""
                            />
                          </td>
                          <td className="public column-public">
                            <input
                              type="checkbox"
                              className="icheck up-boolean"
                              data-row="public"
                              data-model="post"
                              data-id={10}
                              defaultChecked=""
                            />
                          </td>
                          <td className="action column-action text-center">
                            <a
                              href="http://test.sikidodemo.com/manhdung/admin//post/edit/10?post_type=service-combo"
                              className="btn-blue btn"
                            >
                              <i className="fad fa-pencil" />
                            </a>
                            <button
                              className="btn btn-red js_btn_confirm"
                              style={{}}
                              data-action="delete"
                              data-ajax="Cms_Ajax_Action::delete"
                              data-id={10}
                              data-module="post"
                              data-heading="Xóa Dữ liệu"
                              data-description="Bạn chắc chắn muốn xóa bài viết <b>Comfort Relax</b> ?"
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
              {/* /.box-content */}
            </div>
            {/* paging */}
            <div className="paging d-flex justify-content-end gap-2 align-items-center">
              <div className="pull-right" />
            </div>
            {/* paging */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
