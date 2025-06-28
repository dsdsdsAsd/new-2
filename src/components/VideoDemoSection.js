import React from 'react';

function VideoDemoSection() {
  return (
    <section id="video-demo" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-white">Посмотрите TenSender в действии</h2>
          <p className="text-white-50">Краткое видео о том, как наш сервис упрощает лидогенерацию.</p>
        </div>
        <div className="glass-card p-4 text-center">
          {/* Здесь будет ваше видео. Например, YouTube iframe */}
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="TenSender Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-white-50 mt-3">*Пример видео. Замените на свое.</p>
        </div>
      </div>
    </section>
  );
}

export default VideoDemoSection;
