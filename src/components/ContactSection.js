import React from 'react';

function ContactSection() {
  return (
    <section id="contact" className="py-5">
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="text-center mb-5">
          <h2 className="fw-bold text-white">Свяжитесь с нами</h2>
          <p className="text-white-50">Мы всегда готовы ответить на ваши вопросы.</p>
        </div>
        <div className="glass-card p-4">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label text-white-50">Ваше имя</label>
              <input type="text" className="form-control bg-transparent text-white border-secondary" id="name" placeholder="Иван" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-white-50">Email адрес</label>
              <input type="email" className="form-control bg-transparent text-white border-secondary" id="email" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label text-white-50">Сообщение</label>
              <textarea className="form-control bg-transparent text-white border-secondary" id="message" rows="5" placeholder="Ваше сообщение..."></textarea>
            </div>
            <button type="submit" className="btn btn-light rounded-pill px-4 py-2 fw-bold">Отправить сообщение</button>
          </form>
        </div>
        <div className="text-center mt-4">
          <p className="text-white-50">Или напишите нам на: <a href="mailto:info@tensender.com" className="text-white">info@tensender.com</a></p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
