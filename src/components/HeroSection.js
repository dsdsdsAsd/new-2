import React from 'react';

function HeroSection() {
  return (
    <header id="home" className="hero-section text-white text-center">
      <div className="container">
        <h1 className="display-2 fw-bolder">Новый уровень лидогенерации в TenChat</h1>
        <p className="lead my-4 mx-auto" style={{ maxWidth: '700px' }}>Автоматизированный поиск и отправка персонализированных сообщений для B2B-продаж.</p>
        <a href="#pricing" className="btn btn-light btn-lg rounded-pill px-5 py-3 fw-bold">Запустить на 7 дней бесплатно</a>
        <div className="hero-product-shot">
          <div className="product-ui-header"></div>
          <div className="product-ui-sidebar"></div>
          <div className="product-ui-content"></div>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;
