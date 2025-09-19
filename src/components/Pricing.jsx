import React from 'react';
import './Pricing.css';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';

const Pricing = () => {
    const [ref, isVisible] = useFadeInOnScroll();
  const plans = [
    {
      name: 'Basic',
      price: '499.000đ',
      features: [
        'Truy cập nội dung cơ bản',
        'Hỗ trợ qua email',
        'Bài tập thực hành',
      ],
      highlight: false,
    },
    {
      name: 'Standard',
      price: '999.000đ',
      features: [
        'Truy cập toàn bộ nội dung',
        'Hỗ trợ qua chat + email',
        'Bài tập thực hành + kiểm tra định kỳ',
      ],
      highlight: true,
    },
    {
      name: 'Premium',
      price: '1.499.000đ',
      features: [
        'Toàn bộ nội dung + video chuyên sâu',
        'Hỗ trợ 1:1 với giảng viên',
        'Chứng nhận hoàn thành khóa học',
      ],
      highlight: false,
    },
  ];

  return (
    <section id = 'pricing' ref={ref} className={`pricing fade-in ${isVisible ? 'fade-in-active' : ''}`}>
      <h2 className="pricing-title">Chọn gói học phù hợp với bạn</h2>
      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div
            className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}
            key={index}
          >
            <h3 className="plan-name">{plan.name}</h3>
            <p className="plan-price">{plan.price}</p>
            <ul className="plan-features">
              {plan.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <button className="plan-button">Đăng ký ngay</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
