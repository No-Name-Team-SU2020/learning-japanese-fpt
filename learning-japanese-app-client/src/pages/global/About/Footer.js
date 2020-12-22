import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";

const Footer = () => {
  return (
    <div className='about-footer'>
      <div className='d-flex mt-2 justify-content-between'>
        <p>© 2020 Bản quyền thuộc về Trường Đại học FPT.</p>
        <div className='ps-relative'>
          <p>
            JLMS Team <FacebookIcon color='primary' />
          </p>
          <p>Contact: xxxxxxxxxxxx</p>
        </div>
      </div>
      <div className='text-center w-50 mx-auto'>
        <h5>HÀ NỘI</h5>
        <p>
          Khu Giáo dục và Đào tạo – Khu Công nghệ cao Hòa Lạc – Km29 Đại lộ
          Thăng Long, H. Thạch Thất, TP. Hà Nội
        </p>
        <p>Điện thoại: (024) 7300 1866</p>
        <p>Email: daihocfpt@fpt.edu.vn</p>
      </div>
    </div>
  );
};

export default Footer;
