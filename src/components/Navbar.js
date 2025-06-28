import React from 'react';

function Navbar() {
  return (
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
            <li className="nav-item"><a className="nav-link" href="#video-demo">Демо</a></li>
            <li className="nav-item"><a className="nav-link" href="#pricing">Тарифы</a></li>
            <li className="nav-item"><a className="nav-link" href="#reviews">Отзывы</a></li>
            <li className="nav-item"><a className="nav-link" href="#faq">FAQ</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Контакты</a></li>
          </ul>
          <a href="#pricing" className="btn btn-outline-light rounded-pill">Начать работу</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
