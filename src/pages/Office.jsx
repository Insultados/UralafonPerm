import React from 'react'
import classes from './pages.module.css'
import ModalImage from "react-modal-image";
import office_img1 from './pages_img/office_img1.jpg'
import office_img2 from './pages_img/office_img2.jpg'

const Office = () => {
    return (
        <div className="container">
            <div className={classes.page_content}>
                <div id="page_window3" className={classes.page_window}>
                    <div>
                        <div id="page_window_text4" className={classes.page_window_text}>
                            <p><b>Дорогие братья и сестры!</b> Для тех, у кого нет возможности <br />посетить Белогорскую обитель, в Перми
                                функционирует подворье <br />Белогорского монастыря, оно же - часовня в честь Преподобномученика
                                <br />Варлаама Белогорского. <br /><b>Адрес:</b> ул.Пермская 36 <br /></p>
                        </div>
                        <div id="page_window_text4" className={classes.page_window_text}>
                            <p><br /><b>График работы:</b> <br /><b>Пн:</b> 9:00 - 17:00 <br /><b>Вт:</b> 9:00 - 17:00 <br /><b>Ср:</b> 9:00 -
                                17:00 <br /><b>Чт:</b> 9:00 - 17:00 <br /><b>Пт:</b> 9:00 - 17:00 <br /><b>Сб:</b> Выходной <br /><b>Вс:</b>
                                Выходной <br /><br /></p>
                            <div className={classes.office_img_block1}>
                                <ModalImage
                                    showRotate={true}
                                    className={'modal-img'}
                                    small={office_img1}
                                    large={office_img1}
                                    alt="Изображение"
                                    style={{ cursor: 'zoom-in' }}
                                /></div>
                        </div>
                    </div>
                    <div>
                        <div id="page_window_text5" className={classes.page_window_text}>
                            <p>В часовне функционирует <b>церковная лавка</b>, где можно заказать требы <br />и поминовения, которые будут
                                отправлены в Белогорскую обитель <br /></p>
                            <div className={classes.office_img_block2}>
                                <ModalImage
                                    showRotate={true}
                                    className={'modal-img'}
                                    small={office_img2}
                                    large={office_img2}
                                    alt="Изображение"
                                    style={{ cursor: 'zoom-in' }}
                                /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Office;