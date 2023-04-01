import React from "react";
import vk_logo from './footer_img/vk_logo.svg'
import classes from './Footer.module.css'

const Footer = () => {

    return (
        <footer className={classes.footer}>
            <div className="container">
                <div className={classes.footer_container}>
                    <div className={classes.footer_right}>
                        <div className={classes.footer_nav}>
                            <div className={classes.footer_nav_item}>
                                <a className={classes.footer_nav_element} href="https://vk.com/uralafonofficial">
                                    <img className={classes.footer_nav_element} src={vk_logo} alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div className={classes.footer_left}>
                        <p>Создано по благословению митрополита Пермского и Кунгурского Мефодия</p>
                        <b>
                            <p>© Белогорский Свято-Николаевский мужской монастырь</p>
                        </b>
                        <a href="https://metrika.yandex.ru/stat/?id=92830658&amp;from=informer"
                            target="_blank" rel="nofollow noreferrer">
                            <img src="https://informer.yandex.ru/informer/92830658/3_1_FFFFFFFF_EFEFEFFF_0_uniques"
                                alt="Яндекс.Метрика"
                                title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)"
                                className="ym-advanced-informer"
                                data-cid="92830658"
                                data-lang="ru"
                                style={{ width: '88px', height: '31px', border: '0px' }} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;