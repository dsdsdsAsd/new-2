import React from 'react';

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-white">Запуск за 3 минуты</h2>
        </div>
        <div className="row text-center align-items-center">
          <div className="col-lg-3 mb-4 step-container">
            <div className="glass-card p-4 h-100">
              <div className="step-number">1</div>
              <h5 className="fw-bold mt-4">Подключите аккаунт</h5>
              <p>Безопасная авторизация в один клик.</p>
            </div>
          </div>
          <div className="col-lg-1 mb-4 step-arrow d-none d-lg-block text-center"><i class="bi bi-arrow-right-circle-fill fs-2 text-white-50"></i></div>
          <div className="col-lg-4 mb-4 step-container">
            <div className="glass-card p-4 h-100">
              <div className="step-number">2</div>
              <h5 className="fw-bold mt-4">Опишите целевой портрет</h5>
              <p>Укажите, кому отправлять сообщения (должность, сфера, город).</p>
            </div>
          </div>
          <div className="col-lg-1 mb-4 step-arrow d-none d-lg-block text-center"><i class="bi bi-arrow-right-circle-fill fs-2 text-white-50"></i></div>
          <div className="col-lg-3 mb-4 step-container">
            <div className="glass-card p-4 h-100">
              <div className="step-number">3</div>
              <h5 className="fw-bold mt-4">Наблюдайте за ростом</h5>
              <p>Получайте уведомления о новых ответах.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
