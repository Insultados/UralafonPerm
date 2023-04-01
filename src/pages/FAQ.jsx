
import React, { useRef, useEffect } from 'react'
import classes from './pages.module.css'

const FAQ = () => {

    const currentUrl = window.location.hash;
    const scrollRef = useRef(currentUrl);

    const scrollToMyRef = () => {
        if (scrollRef.current !== '') {
            document.querySelector(scrollRef.current).scrollIntoView()
            document.querySelector(scrollRef.current).firstChild.style.backgroundColor = '#abc8f8'
        }
        setTimeout(
            () => {
                document.querySelector(scrollRef.current).firstChild.style.backgroundColor = '#ffff'
            },
            3 * 1000
        );
    }


    useEffect(scrollToMyRef)


    return (

        <div className="container">
            <div className={classes.page_content}>
                <div className={classes.page_window}>
                    <div id='question-1' className={classes.page_window_text}>
                        <h3 >1. "Открыт ли монастырь для посещений?"</h3>
                        <p> Монастырь открыт для посещений каждый день с 7:00-19:00.
                            Службы также проходят каждый день. Расписание можно посмотреть <a href='/schedule'>здесь</a> на нашем сайте или в официальной группе. </p>
                    </div>
                    <div id='question-2' className={classes.page_window}>
                        <h3>2. "Как добраться до монастыря?"</h3>
                        <p> Белогорский монастырь приглашает вас посетить нашу обитель.
                            Из Перми вы можете приехать на автобусе, следующем по маршруту: "Пермь-Калинино".
                            Автобус отправляется с Южной автостанции в 7-45 и 14-50. Из Калинино до монастыря 12 км. Этот путь вы можете преодолеть на такси, попутной машине.
                            Из Калинино в Пермь автобус отправляется в 10-35 и 17-35. </p>
                    </div>
                    <div id='question-3' className={classes.page_window}>
                        <h3>3. "Работает ли трапезная?"</h3>
                        <p> Потрапезничать в монастыре можно с 9-00 до 18-00. Можно заказать комплексный обед, если вы едете группой. Пожертвование за комплексный обед 350 руб.
                            Кон. тел. по трапезной <a href='tel:89504502520'>89504502520</a></p>
                    </div>
                    <div id='question-4' className={classes.page_window}>
                        <h3>4."Есть ли безналичный расчет?"</h3>
                        <p> Трапезная и церковная лавка поддерживают любой способ оплаты. </p>
                    </div>
                    <div id='question-5' className={classes.page_window}>
                        <h3>5. "Проводится ли у нас таинство крещения и венчания?"</h3>
                        <p> Да, таинство крещения проводится по субботам в 12:00.
                            На крещение должен быть крестик, крестильная рубашка, полотенце. Всё это можно приобрести у нас или привезти с собой. Свидетельство о рождении и хотя бы один крестный.
                            В летний период на крещение предварительная запись по телефону.<br />
                            <b>Венчание по воскресеньям</b>. Предварительная запись по телефону. Обязательное условие для венчания - супруги должны быть уже зарегистрированы в ЗАГСе. 
                            <b>В пост не венчают</b>. </p>
                    </div>
                    <div id='question-6' className={classes.page_window}>
                        <h3>6. "Как заказать поминовение?"</h3>
                        <p> Всю информацию про поминовения можете прочесть здесь: <a href='https://vk.com/topic-195494027_44538022'>https://vk.com/topic-195494027_44538022</a>, а
                            также на нашем сайте здесь: <a href='/trebi'>https://uralafonperm.ru/trebi</a><br />
                            Также, если Вы проживаете в Перми, можете подать записки в часовне на Пермской,36 (<a href='https://vk.com/wall-195494027_2923'>https://vk.com/wall-195494027_2923</a>) </p>
                    </div>
                    <div id='question-7' className={classes.page_window}>
                        <h3>7. "Как оплатить поминовения?"</h3>
                        <p> Вся необходимая информация есть на нашем официальном сайте здесь: <a href='/donations'>https://www.uralafonperm.ru/donations</a>. 
                            Просим вас быть осторожными и не нарваться на мошенников, которые выдают себя «волонтёрами» монастыря.
                            Другим лицам не переводить деньги, у нас один счёт. И карты оформленной на человека нету! </p>
                    </div>
                    <div id='question-8' className={classes.page_window}>
                        <h3>8. "Можно ли переночевать в монастыре?"</h3>
                        <p> В монастыре есть кельи для паломников.
                            Условия: общее житие, разделение на мужские и женские.
                            Телефон для связи - <a href='89082756694'>89082756694</a> <span style={{ color: 'red' }}> (обращаться в рабочее время в мессенджерах)</span>. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ;