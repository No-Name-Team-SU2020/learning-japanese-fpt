import React, { Component, Fragment, useState, useEffect } from "react";
import axios from "axios";
import TableRow from "./TableRow";

export default class ManagementQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  tabRow() {
    return this.state.persons.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    axios
      .get("http://localhost:3000/question")
      .then((response) => {
        console.log(response.data);
        this.setState({ persons: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="page-wrapper">
        <div className="page-container">
          <header className="header-desktop">
            <div className="section__content section__content--p30">
              <div className="container-fluid">
                <div className="header-wrap">
                  <a className="logo" href="http://localhost:3000/question">
                    <img src="images/fpt logo.png" alt="CoolAdmin" />
                  </a>
                  <div className="header-button">
                    <div className="noti-wrap">
                      <div className="noti__item js-item-menu">
                        <i className="zmdi zmdi-email" />
                        <span className="quantity">1</span>
                        <div className="email-dropdown js-dropdown">
                          <div className="email__title">
                            <p>You have 3 New Emails</p>
                          </div>
                          <div className="email__item">
                            <div className="image img-cir img-40">
                              <img
                                src="images/icon/avatar-06.jpg"
                                alt="Cynthia Harvey"
                              />
                            </div>
                            <div className="content">
                              <p>Meeting about new dashboard...</p>
                              <span>Cynthia Harvey, 3 min ago</span>
                            </div>
                          </div>
                          <div className="email__item">
                            <div className="image img-cir img-40">
                              <img
                                src="images/icon/avatar-05.jpg"
                                alt="Cynthia Harvey"
                              />
                            </div>
                            <div className="content">
                              <p>Meeting about new dashboard...</p>
                              <span>Cynthia Harvey, Yesterday</span>
                            </div>
                          </div>
                          <div className="email__item">
                            <div className="image img-cir img-40">
                              <img
                                src="images/icon/avatar-04.jpg"
                                alt="Cynthia Harvey"
                              />
                            </div>
                            <div className="content">
                              <p>Meeting about new dashboard...</p>
                              <span>Cynthia Harvey, April 12,,2018</span>
                            </div>
                          </div>
                          <div className="email__footer">
                            <a href="https://magic.reactjs.net/htmltojsx.htm">
                              See all emails
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="noti__item js-item-menu">
                        <i className="zmdi zmdi-notifications" />
                        <span className="quantity">3</span>
                        <div className="notifi-dropdown js-dropdown">
                          <div className="notifi__title">
                            <p>You have 3 Notifications</p>
                          </div>
                          <div className="notifi__item">
                            <div className="bg-c1 img-cir img-40">
                              <i className="zmdi zmdi-email-open" />
                            </div>
                            <div className="content">
                              <p>You got a email notification</p>
                              <span className="date">April 12, 2018 06:50</span>
                            </div>
                          </div>
                          <div className="notifi__item">
                            <div className="bg-c2 img-cir img-40">
                              <i className="zmdi zmdi-account-box" />
                            </div>
                            <div className="content">
                              <p>Your account has been blocked</p>
                              <span className="date">April 12, 2018 06:50</span>
                            </div>
                          </div>
                          <div className="notifi__item">
                            <div className="bg-c3 img-cir img-40">
                              <i className="zmdi zmdi-file-text" />
                            </div>
                            <div className="content">
                              <p>You got a new file</p>
                              <span className="date">April 12, 2018 06:50</span>
                            </div>
                          </div>
                          <div className="notifi__footer">
                            <a href="https://magic.reactjs.net/htmltojsx.htm">
                              All notifications
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="account-wrap">
                      <div className="account-item clearfix js-item-menu">
                        <div className="image">
                          <img src="images/daumoi.jpg" alt="John Doe" />
                        </div>
                        <div className="content">
                          <a
                            className="js-acc-btn"
                            href="https://magic.reactjs.net/htmltojsx.htm"
                          >
                            john doe
                          </a>
                        </div>
                        <div className="account-dropdown js-dropdown">
                          <div className="info clearfix">
                            <div className="image">
                              <a href="https://magic.reactjs.net/htmltojsx.htm">
                                <img src="images/daumoi.jpg" alt="John Doe" />
                              </a>
                            </div>
                            <div className="content">
                              <h5 className="name">
                                <a href="https://magic.reactjs.net/htmltojsx.htm">
                                  john doe
                                </a>
                              </h5>
                              <span className="email">johndoe@example.com</span>
                            </div>
                          </div>
                          <div className="account-dropdown__body">
                            <div className="account-dropdown__item">
                              <a href="https://magic.reactjs.net/htmltojsx.htm">
                                <i className="zmdi zmdi-account" />
                                Account
                              </a>
                            </div>
                            <div className="account-dropdown__item">
                              <a href="https://magic.reactjs.net/htmltojsx.htm">
                                <i className="zmdi zmdi-settings" />
                                Setting
                              </a>
                            </div>
                            {/* <div class="account-dropdown__item">
                          <a href="#">
                            <i class="zmdi zmdi-money-box"></i>Billing</a>
                        </div> */}
                          </div>
                          <div className="account-dropdown__footer">
                            <a href="https://magic.reactjs.net/htmltojsx.htm">
                              <i className="zmdi zmdi-power" />
                              Logout
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* END HEADER DESKTOP*/}
          {/* MAIN CONTENT*/}
          <div className="main-content">
            <div className="section__content section__content--p30">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    {/* DATA TABLE */}
                    <h3 className="title-5 m-b-35">Question Table</h3>
                    <div className="table-data__tool">
                      <div className="table-data__tool-left">
                        <div className="rs-select2--light rs-select2--md">
                          <select className="js-select2" name="property">
                            <option selected="selected">Subject</option>
                            <option value>Japanese 1</option>
                            <option value>Japanese 2</option>
                            <option value>Japanese 3</option>
                          </select>
                          <div className="dropDownSelect2" />
                        </div>
                        {/* <div class="rs-select2--light rs-select2--sm">
                      <select class="js-select2" name="time">
                        <option selected="selected">Class</option>
                        <option value="">IS1301</option>
                        <option value="">IS1302</option>
                        <option value="">IS1303</option>

                      </select>
                      <div class="dropDownSelect2"></div>
                    </div> */}
                        <div className="rs-select2--light rs-select2--sm">
                          <select className="js-select2" name="time">
                            <option selected="selected">Lesson</option>
                            <option value>IS1301</option>
                            <option value>IS1302</option>
                            <option value>IS1303</option>
                          </select>
                          <div className="dropDownSelect2" />
                        </div>
                        <input
                          className="au-btn-filter"
                          type="text"
                          name="search-id"
                          placeholder="Search by ID"
                        />
                        {/* <i class="zmdi zmdi-filter-list"></i>filters</input> */}
                        <div className="rs-select2--dark rs-select2--sm rs-select2--dark2">
                          {/* <select class="js-select2" name="type"> */}
                          <button className="au-btn au-btn-icon au-btn--green au-btn--small btnSearch">
                            Search{" "}
                          </button>
                          {/* <option selected="selected">Search</option> */}
                          {/* <option value="">Option 1</option>
                        <option value="">Option 2</option> */}
                          {/* </select> */}
                          <div className="dropDownSelect2" />
                        </div>
                      </div>
                      <div className="table-data__tool-right">
                        <button className="au-btn au-btn-icon au-btn--green au-btn--small">
                          <i className="zmdi zmdi-plus" />
                          Create{" "}
                        </button>
                      </div>
                    </div>
                    <div className="table-responsive table-responsive-data2">
                      <table className="table table-data2">
                        <thead>
                          <tr>
                            <th>Question ID</th>
                            <th>Question Content</th>
                            <th>Option A</th>
                            <th>Option B</th>
                            <th>Option C</th>
                            <th>Option D</th>
                            <th>Correct Answer</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="tr-shadow">
                            {/* <td>
                          <label class="au-checkbox">
                            <input type="checkbox">
                            <span class="au-checkmark"></span>
                          </label>
                        </td> */}
                            {/* <td class="desc">12</td> */}
                            <td>12</td>
                            <td>ＦＰＴだいがくで べんきょうしました</td>
                            {/* <span class=" block-email question-cont">去年から べんきょうしました。</span> */}
                            <td>去年から べんきょうしました。</td>
                            {/* <td class="desc">スーパーで かいました</td> */}
                            <td>スーパーで かいました</td>
                            <td>去年から べんきょうしました</td>
                            {/* <span class="status--process ">ＦＰＴだいがくで べんきょうしました</span> */}
                            <td> ＦＰＴだいがくで べんきょうしました</td>
                            <td>去年から べんきょうしました。</td>
                            <td>
                              <div className="table-data-feature">
                                {/* <button class="item" data-toggle="tooltip" data-placement="top" title="Send">
                              <i class="zmdi zmdi-mail-send"></i> */}
                                <button
                                  className="item"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Edit"
                                >
                                  <i className="zmdi zmdi-edit" />
                                </button>
                                <button
                                  className="item"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Delete"
                                >
                                  <i className="zmdi zmdi-delete" />
                                </button>
                                <button
                                  className="item"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="More"
                                >
                                  <i className="zmdi zmdi-more" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* END DATA TABLE */}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="copyright">
                      <p>
                        Copyright © 2020 Japanese. All rights reserved. Template
                        by <a href="https://colorlib.com">JLMS</a>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
