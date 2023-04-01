
import React from 'react';
import classes from './pages.module.css'
import ModalImage from "react-modal-image";
import inform_img from './pages_img/inform_img.png'

const About = () => {


    return (

        <div className="container">
            <div className={classes.page_content}>
                <div id="page_window1" className={classes.page_window}>
                    <div id="page_window_text1 " className={classes.page_window_text}>
                        <p> Начало своей истории обитель берет <b>9 июня 1890 года,</b><br /> когда по инициативе священника
                            <br /><b>Стефана
                                Луканина</b> был воздвигнут первый поклонный крест. <br /> <br /><b>20 января 1897 года</b> Белогорский
                            монастырь был официально <br />утверждён штатным общежительным монастырём. Свое название получил по горе, на
                            которой возник. Первым настоятелем стал иеромонах <b>Варлаам (Коноплёв)</b>.
                        </p>
                        <div className={classes.inform_img_block}>
                            <ModalImage
                                showRotate={true}
                                className={'modal-img'}
                                small={inform_img}
                                large={inform_img}
                                alt="Изображение"
                                style={{ cursor: 'zoom-in' }}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;