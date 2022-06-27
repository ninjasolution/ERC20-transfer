/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function Footer() {
  return <footer className="footer_widgets">
            
            <div className="footer_bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer_bottom_inner d-flex justify-content-between">
                                <div className="copyright_right">
                                    <p> © 2021  BONX  Made with  <i className="icofont-heart"></i>  by <a href="#">HasThemes</a ></p>
                                </div>
                                <div className="footer_bottom_link_menu">
                                    <ul className="d-flex">
                                        <li><a href="#">Terms & Condition  </a ></li>
                                        <li><a href="#">Privacy Policy  </a ></li>
                                    </ul>
                                </div>

                                {/* <div className="scroll__top_icon">
                                    <Link id="scroll-top" to="#"><img ariaLabel="scroll-top" width="46" height="40" src="../assets/img/icon/scroll-top.webp" alt=""/></Link >
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </footer>;
}
