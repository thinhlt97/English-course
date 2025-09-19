import "./Benefits.css";
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';

export default function Benefits() {
    const [ref, isVisible] = useFadeInOnScroll();
  const benefits = [
    {
      icon: "🎧",
      title: "Giáo viên bản ngữ",
      desc: "Trực tiếp giảng dạy với phát âm chuẩn, giúp bạn tự tin hơn trong giao tiếp."
    },
    {
      icon: "📚",
      title: "Lộ trình khoa học",
      desc: "Khóa học được thiết kế từ cơ bản đến nâng cao, dễ theo sát và tiến bộ rõ rệt."
    },
    {
      icon: "✅",
      title: "Cam kết đầu ra",
      desc: "Đảm bảo kết quả, hoàn tiền nếu không đạt mục tiêu giao tiếp sau 3 tháng."
    }
  ];

  return (
    <section id="benefits" ref={ref}
      className={`benefits fade-in ${isVisible ? 'fade-in-active' : ''}`}>
      <div className="benefits-container">
        <h2>Lợi ích khi tham gia khóa học</h2>
        <div className="benefits-grid">
          {benefits.map((item, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
