import React, { type FC } from 'react';
import './franchise-why-us.css';
import franchiseWhyUs from '../../assets/images/franchise/franchise-why-us-demo.png';

const WhyUs: FC = () => {
  return (
    <section className="franchise-why-us__container">
      <h2 className="franchise-why-us__title">Почему именно мы?</h2>
      <div className="franchise-why-us__textblock">
        <div>
          <img src={franchiseWhyUs} className="franchise-why-us__img"></img>
        </div>
        <div className="franchise-why-us__text-container">
          <h3 className="franchise-why-us__subtitle">Уникальность</h3>
          <p className="franchise-why-us__text">
            Сейчас, чтобы удивлять людей, просто интересных вопросов совершенно недостаточно, а от
            «заумных» мероприятий их уже просто тошнит.
          </p>
          <br />
          <p className="franchise-why-us__text">
            Поэтому «Отгадай Мелодию» как глоток свежего воздуха: уникальный формат, интересные
            задания, полное продюсирование мероприятий и высший менеджмент на всех этапах
            производства. Именно эти факторы привлекают людей и выделяют «Отгадай Мелодию» из всех
            подобных проектов.
          </p>
        </div>
      </div>
      <div className="franchise-why-us__textblock">
        <div className="franchise-why-us__text-container">
          <h3 className="franchise-why-us__subtitle">Музыка - беспроигрышный вариант</h3>
          <p className="franchise-why-us__text">
            За годы своей работы в event-сфере можем сказать, что мероприятия музыкального формата
            всегда увереннее держаться на фоне конкурентов. Это отличный способ отвлечься от
            повседневной рутины, интересно провести вечер в компании друзей и коллег, а также
            интересный тимбилдинг компаний, наполненный кучей эмоций и драйва.
          </p>
          <br />
          <p className="franchise-why-us__text">Ну и самое главное: кто вообще не любит музыку?</p>
        </div>
        <div>
          <img src={franchiseWhyUs} className="franchise-why-us__img"></img>
        </div>
      </div>
      <div className="franchise-why-us__textblock">
        <div>
          <img src={franchiseWhyUs} className="franchise-why-us__img"></img>
        </div>
        <div className="franchise-why-us__text-container">
          <h3 className="franchise-why-us__subtitle">Честность</h3>
          <p className="franchise-why-us__text">
            Мы настолько уверены в том, что делаем, что не скрываем live-истории в соц. сетях,
            собирая хайлайты игроков со всех наших игр.
          </p>
          <br />
          <p className="franchise-why-us__text">
            На них Вы сможете увидеть, как проходят игры нашими глазами и глазами наших игроков. А
            если и этого Вам будет мало, то посмотрите два видеоотчет с наших мероприятий.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
