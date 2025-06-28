import React from 'react';

function FeaturesSection() {
  return (
    <section id="features" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-white">Инструменты для доминирования</h2>
          <p className="text-white-50">Все, что нужно для построения потока клиентов.</p>
        </div>
        <div className="bento-grid">
          <div className="bento-item bento-item-large glass-card">
            <i className="bi bi-robot fs-1 mb-3"></i>
            <h5 className="fw-bold">AI-Персонализация</h5>
            <p>Нейросеть анализирует профиль и пишет уникальное сообщение, которое не отличить от написанного вручную.</p>
          </div>
          <div className="bento-item glass-card">
            <i className="bi bi-graph-up-arrow fs-1 mb-3"></i>
            <h5 className="fw-bold">Live-Аналитика</h5>
            <p>Отслеживайте воронку в реальном времени.</p>
          </div>
          <div className="bento-item glass-card">
            <i className="bi bi-shield-shaded fs-1 mb-3"></i>
            <h5 className="fw-bold">Макс. безопасность</h5>
            <p>Эмуляция человеческих действий и поведенческих факторов.</p>
          </div>
          <div className="bento-item glass-card">
            <i className="bi bi-funnel-fill fs-1 mb-3"></i>
            <h5 className="fw-bold">Визуальная воронка</h5>
            <p>Настраивайте сценарии ответов и ведите клиента по воронке.</p>
          </div>
          <div className="bento-item glass-card">
            <i className="bi bi-people-fill fs-1 mb-3"></i>
            <h5 className="fw-bold">Командная работа</h5>
            <p>Добавляйте коллег и управляйте аккаунтами вместе.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;