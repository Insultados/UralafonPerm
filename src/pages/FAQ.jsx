
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
                    <div id='question-0' className={classes.page_window_text}>
                        <p><b>Контакты: </b> <br />
                            <b>Канцелярия</b> <br />
                            ЗВОНИТЬ СТРОГО С 10:00 ДО 16:00 <br />
                            8 (34 271) 5-75-35 <br />
                            8-958-143-20-87 <br />
                            <b>Трапезная</b> <br />
                            8-958-143-20-74 <br />
                            <b>Электронная почта</b> <br />
                            uralafon@yandex.ru</p>
                    </div>
                    <div id='question-1' className={classes.page_window_text}>
                        <h3 >1. "Открыт ли монастырь для посещений?"</h3>
                        <p> Монастырь открыт для посещений каждый день с 7:00-19:00.
                            Службы также проходят каждый день. <br />
                            Лавка в верхнем храме работает с 8:30 до 18:00.
Остальные лавки с 9 до 17 часов
Расписание можно посмотреть <a href='/schedule'>здесь</a> на нашем сайте или в официальной группе. </p>
                    </div>
                    <div id='question-2' className={classes.page_window}>
                        <h3>2. "Как добраться до монастыря?"</h3>
                        <p> Из Перми Вы можете приехать на автобусе, следующем по маршруту: "Пермь-Калинино" <a href="https://t.rasp.yandex.ru/bus/perm--kalinino-perm-district">(ссылка)</a>.
                         <br />
                         <a href="https://rasp.yandex.ru/bus/kungur--kalinino-perm-district"> Пермь - Кунгур</a> <br />
                            Из Калинино до монастыря 12 км. Этот путь вы можете преодолеть на такси, попутной машине.
                            Из Калинино в Пермь автобус отправляется в 10-35 и 17-35 <a href="https://t.rasp.yandex.ru/bus/kalinino-perm-district--perm">(ссылка)</a>.
                            Также совсем недавно открылся новый маршут Пермь - Белая Гора <b>(Маршрут актуален только летом)</b><a href="https://t.rasp.yandex.ru/bus/perm--belaia-gora">(ссылка)</a> </p>
                    </div>
                    <div id='question-3' className={classes.page_window}>
                        <h3>3. "Работает ли трапезная?"</h3>
                        <p> Потрапезничать в монастыре можно с 9-00 до 18-00. Можно заказать комплексный обед, если вы едете группой. Пожертвование за комплексный обед 350 руб.
                            Кон. тел. по трапезной <a href='tel:89581432074'>89504502520</a></p>
                    </div>
                    <div id='question-4' className={classes.page_window}>
                        <h3>4."Есть ли безналичный расчет?"</h3>
                        <p> Трапезная и церковная лавка поддерживают любой способ оплаты. </p>
                    </div>
                    <div id='question-5' className={classes.page_window}>
                        <h3>5. "Проводится ли у нас таинство крещения и венчания?"</h3>
                        <p> Да, таинство крещения проводится по субботам в 12:30. На крещение должен быть крестик, крестильная рубашка, полотенце. Всё это можно приобрести у нас или привезти с собой. Также необходимо Свидетельство о рождении и хотя бы один крестный. 
Без крестных (для несовершеннолетних) крещение не проводится. Если у вас будет крестная мать и крестный отец, то они не могут быть супругами на момент крещения  и не могут вступать в брак в дальнейшем. 
В летний период на крещение предварительная запись по телефону.
<br />
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
                        <p> Если вы приехали в наш монастырь как  паломник, и решили остаться с ночевой, то вас разместят в кельях. Одиночных келий нет. Есть мужские и женские кельи. 
                             Для регистрации вас в монастыре необходимо иметь паспорт. В кельях не благословляется ходить в уличной обуви, поэтому возьмите с собой тапочки. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ;