import React from 'react';

function PricingSection() {
  return (
    <section id="pricing" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-white">Прозрачные тарифы</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 mb-4">
            <div className="glass-card pricing-card p-4 text-center h-100">
              <h5 className="fw-bold text-uppercase">Pro</h5>
              <h1 className="display-4 fw-bold my-3">2990₽<span className="fs-5 op-50">/мес</span></h1>
              <ul className="list-unstyled my-4 text-start">
                <li><i class="bi bi-check-circle-fill me-2"></i>1 аккаунт TenChat</li>
                <li><i class="bi bi-check-circle-fill me-2"></i>AI-персонализация</li>
                <li><i class="bi bi-check-circle-fill me-2"></i>Live-аналитика</li>
              </ul>
              <button className="btn btn-outline-light rounded-pill mt-auto">Выбрать тариф</button>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="glass-card pricing-card popular-card p-4 text-center h-100">
              <span className="badge rounded-pill position-absolute top-0 start-50 translate-middle">Хит продаж</span>
              <h5 className="fw-bold text-uppercase">Business</h5>
              <h1 className="display-4 fw-bold my-3">7990₽<span className="fs-5 op-50">/мес</span></h1>
              <ul className="list-unstyled my-4 text-start">
                <li><i class="bi bi-check-circle-fill me-2"></i>5 аккаунтов TenChat</li>
                <li><i class="bi bi-check-circle-fill me-2"></i>Все функции Pro</li>
                <li><i class="bi bi-check-circle-fill me-2"></i>Визуальная воронка</li>
                <li><i class="bi bi-check-circle-fill me-2"></i>Командный доступ</li>
              </ul>
              <button className="btn btn-light rounded-pill mt-auto fw-bold">Попробовать бесплатно</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
