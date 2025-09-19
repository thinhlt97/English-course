import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">English<span>Fast</span></div>

        {/* Nút toggle menu mobile */}
        <div
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu */}
        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <ul>
            <li><a href="#hero">Trang chủ</a></li>
            <li><a href="#benefits">Lợi ích</a></li>
            <li><a href="#course">Khóa học</a></li>
            <li><a href="#testimonials">Học viên nói gì</a></li>
            <li><a href="#pricing">Giá</a></li>
            <li><a href="#contact">Liên hệ</a></li>
          </ul>
        </nav>

        {/* Nút CTA */}
        <a href="#pricing" className="cta-btn">Đăng ký ngay</a>
      </div>
    </header>
  );
}
