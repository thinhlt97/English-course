import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Khóa học Tiếng Anh Giao Tiếp Cấp Tốc</h1>
          <p>
            Học tiếng Anh giao tiếp tự tin chỉ trong 3 tháng.  
            Giáo viên bản ngữ – Lộ trình khoa học – Cam kết đầu ra.
          </p>
          <button className="btn btn-primary">Đăng ký ngay</button>
            <button className="btn btn-secondary">Xem thêm</button>
        </div>
        <div className="hero-image">
          <img
            src="/images/hero-new.jpg" alt="Khóa học tiếng Anh"
          />
        </div>
      </div>
    </section>
  );
}
