import React from 'react';

function FAQSection() {
  return (
    <section id="faq" className="py-5">
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="text-center mb-5">
          <h2 className="fw-bold text-white">Остались вопросы?</h2>
        </div>
        <div className="accordion accordion-flush" id="faqAccordion">
          <div class="accordion-item glass-card mb-3"><h2 class="accordion-header"><button class="accordion-button collapsed bg-transparent text-white fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">Насколько это безопасно для моего аккаунта?</button></h2><div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div class="accordion-body text-white-50">Максимально. Мы не используем API TenChat, а эмулируем действия реального пользователя с уникальным "цифровым отпечатком" и умными задержками. Для соцсети это выглядит так, будто вы сами зашли в аккаунт и пишете сообщения.</div></div></div>
          <div class="accordion-item glass-card mb-3"><h2 class="accordion-header"><button class="accordion-button collapsed bg-transparent text-white fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">Что такое AI-персонализация?</button></h2><div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div class="accordion-body text-white-50">Наша нейросеть (на базе GPT-4) изучает профиль человека (описание, посты, опыт работы) и генерирует уникальное первое сообщение, которое учитывает этот контекст. Конверсия в ответ у таких сообщений в 3-4 раза выше, чем у шаблонных.</div></div></div>
          <div class="accordion-item glass-card mb-3"><h2 class="accordion-header"><button class="accordion-button collapsed bg-transparent text-white fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">Могу ли я отменить подписку в любой момент?</button></h2><div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div class="accordion-body text-white-50">Да, конечно. Вы можете отменить подписку в один клик в личном кабинете в любое время. Доступ к сервису сохранится до конца оплаченного периода.</div></div></div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
