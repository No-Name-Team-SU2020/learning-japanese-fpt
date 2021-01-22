import React from "react";
import Footer from "./Footer";
// import Member from "./Member";

const About = () => {
  return (
    <div className='about'>
      <h1 className='text-orange text-center'>
        Japanese Learning Management System (JLMS)
      </h1>
      <section className='mt-5'>
        <h3>I. Một vài điều về hệ thống</h3>
        <p className='lead'>
          JLMS là một hệ thống, ứng dụng web quản lý học tập tiếng Nhật cho đội
          ngũ giáo viên và sinh viên của trường đại học FPT. Hệ thống được xây
          dựng dựa trên nhu cầu phát triển của quá trình đào tạo giáo dục trong
          nhà trường nhằm thúc đẩy việc học tập cho sinh viên cũng như việc quản
          lý nội dung học tập của sinh viên tốt hơn đối với giáo viên...
        </p>
      </section>
      {/* <section className='mt-5'>
        <h3>II. Các thành viên phát triển</h3>
        <div className='team mb-5'>
          <Member name='John Doe' isBigger />
          <div className='row'>
            <div className='col-md-2'>
              <Member name='John Doe' />
            </div>
            <div className='col-md-2'>
              <Member name='John Doe' />
            </div>
            <div className='col-md-2'>
              <Member name='John Doe' />
            </div>
            <div className='col-md-2'>
              <Member name='John Doe' />
            </div>
            <div className='col-md-2'>
              <Member name='John Doe' />
            </div>
            <div className='col-md-2'>
              <Member name='John Doe' />
            </div>
          </div>
        </div>
        <p className='lead'>
          Các thành viên trong nhóm là những sinh viên của đại học FPT, là những
          con người năng động hoạt bát...Các thành viên trong nhóm được dẫn dặt
          bởi một người thầy vô cùng tận tâm với sinh viên ....
        </p>
      </section> */}
      <section className='mt-5'>
        <h3>II. Điều khoản, chính sách</h3>
        <p className='lead'>
          Đại học FPT coi việc bảo vệ thông tin cá nhân của người sử dụng là ưu
          tiên hàng đầu. Chúng tôi hiểu hoàn toàn rằng thông tin cá nhân của bạn
          là thuộc về bạn, vì vậy chúng tôi nỗ lực hết sức lưu trữ bảo mật và xử
          lý cẩn thận thông tin mà bạn chia sẻ với chúng tôi. Chúng tôi coi sự
          tin cậy của bạn có giá trị cao nhất. Vì vậy chúng tôi thu thập lượng
          thông tin tối thiểu chỉ khi có sự cho phép của bạn và sử dụng thông
          tin này chỉ cho các mục đích đã dự định. Chúng tôi không cung cấp
          thông tin cho các bên thứ ba mà không có sự cho phép của bạn.
        </p>
        <p className='lead'>
          Cảm ơn bạn vẫn tiếp tục quan tâm và ủng hộ chúng tôi.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default About;
