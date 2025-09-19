import React, { useState } from 'react';
import './CTAForm.css';

const CTAForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý gửi dữ liệu (hiện tại chỉ log ra console)
    console.log('Thông tin khách hàng:', formData);
    alert('Cảm ơn bạn đã đăng ký nhận tư vấn!');
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <section id = 'cta-form' className="cta-section">
      <div className="cta-content">
        <div className="cta-text">
          <h2>Đăng ký nhận tư vấn miễn phí</h2>
          <p>
            Để lại thông tin để chúng tôi có thể tư vấn cho bạn về khóa học
            tiếng Anh phù hợp nhất!
          </p>
        </div>
        <form className="cta-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Họ và tên"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Số điện thoại"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <button type="submit">Gửi ngay</button>
        </form>
      </div>
    </section>
  );
};

export default CTAForm;
