import React from 'react';
import './Testimonials.css';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';

const Testimonials = () => {
    const [ref, isVisible] = useFadeInOnScroll();
  const testimonials = [
    {
      name: 'Nguyễn Minh Anh',
      role: 'Sinh viên Đại học Kinh tế',
      image: 'https://i.pravatar.cc/100?img=1',
      feedback:
        'Khóa học giúp mình tự tin giao tiếp tiếng Anh hơn. Nội dung dễ hiểu, giảng viên rất nhiệt tình.',
    },
    {
      name: 'Trần Quốc Bảo',
      role: 'Nhân viên Marketing',
      image: 'https://i.pravatar.cc/100?img=2',
      feedback:
        'Video bài giảng chất lượng, bài tập thực hành phong phú. Sau 3 tháng mình đã cải thiện kỹ năng nghe nói đáng kể.',
    },
    {
      name: 'Lê Thu Hằng',
      role: 'Giáo viên Tiểu học',
      image: 'https://i.pravatar.cc/100?img=3',
      feedback:
        'Khóa học rất phù hợp cho người đi làm bận rộn. Học mọi lúc mọi nơi, cộng đồng học tập rất hỗ trợ.',
    },
  ];

  return (
    <section id = 'testimonials' ref={ref} className={`testimonials fade-in ${isVisible ? 'fade-in-active' : ''}`}>
      <h2 className="testimonials-title">Học viên nói gì về khóa học?</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <img src={t.image} alt={t.name} className="testimonial-avatar" />
            <h3 className="testimonial-name">{t.name}</h3>
            <p className="testimonial-role">{t.role}</p>
            <p className="testimonial-feedback">“{t.feedback}”</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
