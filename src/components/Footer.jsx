import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="footer-logo">English Mastery</h2>
          <p>
            Khóa học tiếng Anh giúp bạn nâng cao kỹ năng giao tiếp và sự tự tin
            trong công việc & cuộc sống.
          </p>
        </div>
        <div className="footer-links">
          <h3>Menu</h3>
          <ul>
            <li><a href="#hero">Trang chủ</a></li>
            <li><a href="#courses">Khóa học</a></li>
            <li><a href="#contact">Liên hệ</a></li>
            <li><a href="#privacy">Chính sách bảo mật</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Liên hệ</h3>
          <p>Email: support@englishmastery.vn</p>
          <p>Điện thoại: 0909 123 456</p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 English Mastery. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
