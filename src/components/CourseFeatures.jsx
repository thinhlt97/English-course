import React from 'react';
import './CourseFeatures.css';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';

const CourseFeatures = () => {
     const [ref, isVisible] = useFadeInOnScroll();
  const features = [
    {
      icon: '📚',
      title: 'Nội dung toàn diện',
      description:
        'Khóa học bao gồm tất cả các kỹ năng: nghe, nói, đọc, viết – phù hợp mọi trình độ.',
    },
    {
      icon: '🎥',
      title: 'Video chất lượng cao',
      description:
        'Bài giảng dạng video Full HD giúp bạn dễ theo dõi và học mọi lúc mọi nơi.',
    },
    {
      icon: '👨‍🏫',
      title: 'Giảng viên giàu kinh nghiệm',
      description:
        'Đội ngũ giảng viên có chứng chỉ quốc tế và nhiều năm giảng dạy tiếng Anh.',
    },
    {
      icon: '💬',
      title: 'Cộng đồng học tập',
      description:
        'Tham gia nhóm hỗ trợ học tập và thực hành giao tiếp với học viên khác.',
    },
  ];

  return (
    <section id = 'course' ref={ref}
      className={`hero fade-in ${isVisible ? 'fade-in-active' : ''}`}>
      <h2 className="features-title">Tính năng nổi bật của khóa học</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseFeatures;
