import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Background Aurora Effect */}
      <div className="aurora-background"></div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <a className="navbar-brand fs-4 fw-bold" href="#home">TenSender</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><a className="nav-link" href="#features">Возможности</a></li>
              <li className="nav-item"><a className="nav-link" href="#how-it-works">Процесс</a></li>
              <li className="nav-item"><a className="nav-link" href="#video">Видео</a></li>
              <li className="nav-item"><a className="nav-link" href="#pricing">Тарифы</a></li>
              <li className="nav-item"><a className="nav-link" href="#faq">FAQ</a></li>
            </ul>
            <a href="#pricing" className="btn btn-outline-light rounded-pill">Начать работу</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="hero-section text-white text-center">
        <div className="container">
          <h1 className="display-2 fw-bolder hero-title-gradient">Новый уровень лидогенерации в TenChat</h1>
          <p className="lead my-4 mx-auto" style={{ maxWidth: '700px' }}>Автоматизированный поиск и отправка персонализированных сообщений для B2B-продаж.</p>
          <a href="#pricing" className="btn btn-light btn-lg rounded-pill px-5 py-3 fw-bold">Делегировать лидогенерацию</a>
          <div className="hero-image-container">
            <img src="/image (73).png" alt="Product Screenshot" className="img-fluid" />
          </div>
        </div>
      </header>

      {/* Features Section (Bento Grid) */}
      <section id="features" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-white">Инструменты для доминирования</h2>
            <p className="text-white-50">Все, что нужно для построения потока клиентов.</p>
          </div>
          <div className="bento-grid">
            <div className="bento-item bento-item-large glass-card">
              <i className="bi bi-funnel fs-1 mb-3 icon-gradient"></i>
              <h5 className="fw-bold">Парсинг ЦА по фильтрам</h5>
              <p>Нахожу целевую аудиторию по нужным критериям.</p>
            </div>
            <div className="bento-item glass-card">
              <i className="bi bi-person-plus fs-1 mb-3 icon-gradient"></i>
              <h5 className="fw-bold">Массовая регистрация аккаунтов</h5>
              <p>Создаю и управляю множеством аккаунтов.</p>
            </div>
            <div className="bento-item glass-card">
              <i className="bi bi-stars fs-1 mb-3 icon-gradient"></i>
              <h5 className="fw-bold">Генерация текста</h5>
              <p>Создаю уникальные и привлекательные тексты.</p>
            </div>
            <div className="bento-item glass-card">
              <i className="bi bi-send fs-1 mb-3 icon-gradient"></i>
              <h5 className="fw-bold">Авторассылка сообщений</h5>
              <p>Автоматизирую отправку сообщений вашей аудитории.</p>
            </div>
            <div className="bento-item glass-card">
              <i className="bi bi-bar-chart-line fs-1 mb-3 icon-gradient"></i>
              <h5 className="fw-bold">Аналитика переходов</h5>
              <p>Отслеживаю эффективность ваших рассылок.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-white">Этапы работы</h2>
          </div>
          <div className="row align-items-start justify-content-center orb-steps-container">
            <div className="col-md-4 text-center orb-step">
              <div className="orb"><span>01</span></div>
              <h5 className="fw-bold mt-4">Собираем ЦА</h5>
              <p className="text-white-50">Находим целевую аудиторию по нужным критериям.</p>
            </div>
            <div className="col-md-4 text-center orb-step">
              <div className="orb"><span>02</span></div>
              <h5 className="fw-bold mt-4">Рассылаем в личку</h5>
              <p className="text-white-50">Автоматизируем отправку сообщений по вашей аудитории.</p>
            </div>
            <div className="col-md-4 text-center orb-step">
              <div className="orb"><span>03</span></div>
              <h5 className="fw-bold mt-4">Наблюдаете за ростом</h5>
              <p className="text-white-50">Получайте уведомления о новых ответах.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-white">Видеообзор</h2>
          </div>
          <div className="video-container p-0">
            <div className="video-placeholder position-relative">
              <img src="/current-image (3) (1).jpg" alt="Video placeholder" className="img-fluid" />
              <div className="play-icon-overlay">
                <i className="bi bi-play-circle-fill display-1"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-white">Прозрачные тарифы</h2>
          </div>
          <div className="row justify-content-center align-items-stretch">
            {/* Pricing Cards */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="glass-card pricing-card p-4 text-center h-100 d-flex flex-column">
                <h4 className="fw-bold text-uppercase text-center">🧪 ТЕСТОВЫЙ</h4>
                <div className="text-start">
                  <h1 className="fw-bold my-3"><span className="pricing-title-gradient">500₽</span></h1>
                </div>
                <ul className="list-unstyled my-2 text-start">
                  <li>300 сообщений</li>
                  <li>1.67₽ за сообщение</li>
                </ul>
                                <a href="#contacts" className="btn btn-outline-light rounded-pill mt-auto">Выбрать тариф</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="glass-card pricing-card p-4 text-center h-100 d-flex flex-column">
                <h4 className="fw-bold text-uppercase text-center">⚡ ИМПУЛЬС</h4>
                <div className="text-start">
                  <h1 className="fw-bold my-3"><span className="pricing-title-gradient">9 000₽</span></h1>
                </div>
                <ul className="list-unstyled my-2 text-start">
                  <li>5 000 сообщений</li>
                  <li>625 сообщений/сутки</li>
                  <li>1.80₽ за сообщение</li>
                </ul>
                                <a href="#contacts" className="btn btn-outline-light rounded-pill mt-auto">Выбрать тариф</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="glass-card pricing-card popular-card p-4 text-center h-100 d-flex flex-column">
                <span className="badge rounded-pill position-absolute top-0 start-50 translate-middle">Хит продаж</span>
                <h4 className="fw-bold text-uppercase text-center">🔵 ПИНГ</h4>
                <div className="text-start">
                  <h1 className="fw-bold my-3"><span className="pricing-title-gradient">25 000₽</span></h1>
                </div>
                <ul className="list-unstyled my-2 text-start">
                  <li>15 000 сообщений</li>
                  <li>682 сообщений/сутки</li>
                  <li>1.67₽ за сообщение</li>
                </ul>
                                <a href="#contacts" className="btn btn-light rounded-pill mt-auto fw-bold">Попробовать бесплатно</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="glass-card pricing-card p-4 text-center h-100 d-flex flex-column">
                <h4 className="fw-bold text-uppercase text-center">📡 СИГНАЛ</h4>
                <div className="text-start">
                  <h1 className="fw-bold my-3"><span className="pricing-title-gradient">40 000₽</span></h1>
                </div>
                <ul className="list-unstyled my-2 text-start">
                  <li>30 000 сообщений</li>
                  <li>682 сообщений/сутки</li>
                  <li>1.33₽ за сообщение</li>
                </ul>
                                <a href="#contacts" className="btn btn-outline-light rounded-pill mt-auto">Выбрать тариф</a>
              </div>
            </div>
          </div>

          
        </div>
      </section>

      

      {/* Footer as Contacts Section */}
      <footer id="contacts" className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold text-white mb-4">Свяжитесь с нами</h2>
          <div className="d-flex flex-column flex-md-row justify-content-center gap-4">
            <a href="https://t.me/itbezcoda_dev" className="btn btn-telegram-glass btn-lg rounded-pill px-5 py-3 d-flex align-items-center justify-content-center"><i className="bi bi-telegram"></i><span>Написать в Телеграм</span></a>
            <a href="https://wa.me/79916877807" className="btn btn-whatsapp-glass btn-lg rounded-pill px-5 py-3 d-flex align-items-center justify-content-center"><i className="bi bi-whatsapp"></i><span>Написать в Ватсап</span></a>
          </div>
        </div>
      </footer>

      {/* FAQ Section */}
      <section id="faq" className="py-5">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="text-center mb-5">
            <h2 className="fw-bold text-white">Остались вопросы?</h2>
          </div>
          <div className="accordion accordion-flush" id="faqAccordion">
            <div className="accordion-item glass-card"><h2 className="accordion-header"><button className="accordion-button collapsed bg-transparent text-white fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">Насколько это безопасно?</button></h2><div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div className="accordion-body text-white-50">Максимально. Мы эмулируем действия реального пользователя с умными задержками, чтобы минимизировать риски.</div></div></div>
            <div className="accordion-item glass-card"><h2 className="accordion-header"><button className="accordion-button collapsed bg-transparent text-white fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">Что такое AI-персонализация?</button></h2><div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div className="accordion-body text-white-50">Наша нейросеть изучает профиль человека и генерирует уникальное первое сообщение, повышая конверсию в ответ в 3-4 раза.</div></div></div>
            <div className="accordion-item glass-card"><h2 className="accordion-header"><button className="accordion-button collapsed bg-transparent text-white fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">Как я буду получать лидов?</button></h2><div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div class="accordion-body text-white-50">В рассылаемом сообщении мы указываем ссылку на ваш Telegram или сайт. Заинтересованные пользователи переходят по ней и связываются с вами напрямую.</div></div></div>
            <div className="accordion-item glass-card"><h2 className="accordion-header"><button className="accordion-button collapsed bg-transparent text-white fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">Какие способы оплаты?</button></h2><div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div class="accordion-body text-white-50">Мы принимаем оплату через СБП, а также по безопасной сделке на Kwork.</div></div></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
