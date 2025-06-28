import React from 'react';

function ReviewsSection() {
  return (
    <section id="reviews" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-white">Что говорят наши клиенты</h2>
          <p className="text-white-50">Истории успеха от пользователей TenSender.</p>
        </div>
        <div className="row justify-content-center">
          {/* Пример отзыва 1 */}
          <div className="col-lg-6 mb-4">
            <div className="glass-card p-4 h-100">
              <p className="fst-italic text-white-50">"TenSender полностью изменил наш подход к лидогенерации. AI-персонализация - это просто магия!"</p>
              <div className="d-flex align-items-center mt-4">
                <img src="https://via.placeholder.com/50" alt="Client Avatar" className="rounded-circle me-3" />
                <div>
                  <h6 className="fw-bold mb-0">Иван Иванов</h6>
                  <p className="text-white-50 mb-0">Директор по продажам, ООО "Пример"</p>
                </div>
              </div>
            </div>
          </div>
          {/* Пример отзыва 2 */}
          <div className="col-lg-6 mb-4">
            <div className="glass-card p-4 h-100">
              <p className="fst-italic text-white-50">"Благодаря TenSender мы значительно увеличили количество целевых лидов и сократили время на рутинные операции."</p>
              <div className="d-flex align-items-center mt-4">
                <img src="https://via.placeholder.com/50" alt="Client Avatar" className="rounded-circle me-3" />
                <div>
                  <h6 className="fw-bold mb-0">Елена Петрова</h6>
                  <p className="text-white-50 mb-0">Основатель стартапа "Инновации"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
