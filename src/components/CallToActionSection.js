import React from 'react';

function CallToActionSection() {
  return (
    <section id="cta" className="py-5 text-center text-white">
      <div className="container">
        <div className="glass-card p-5">
          <h2 className="display-4 fw-bold mb-4">Готовы увеличить свои продажи?</h2>
          <p className="lead mb-5">Начните использовать TenSender сегодня и трансформируйте свою лидогенерацию.</p>
          <a href="#pricing" className="btn btn-light btn-lg rounded-pill px-5 py-3 fw-bold">Начать 7-дневный бесплатный период</a>
        </div>
      </div>
    </section>
  );
}

export default CallToActionSection;
