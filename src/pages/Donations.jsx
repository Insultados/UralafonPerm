
import React from 'react'
import classes from './pages.module.css'
import ModalImage from "react-modal-image";
import qr_code from './pages_img/qrcode.png'

const Donations = () => {
    return (

        <div className="container">
            <div className={classes.page_content}>
                <div id="page_window4" className={classes.page_window}>
                    <div className={classes.page_window_text}>
                        <ModalImage
                            showRotate={true}
                            className={'modal-img'}
                            small={qr_code}
                            large={qr_code}
                            alt="Изображение"
                            style={{ cursor: 'zoom-in' }}
                        />
                    </div>
                    <div className={classes.page_window_text}>
                        <div className={classes.donations_img_block1}></div>
                        <h3>Религиозная организация &quot;Белогорский Свято- <br />Николаевский миссионерский мужской монастырь
                            <br />Пермской Епархии Русской Православной Церкви <br />(Московский Патриархат)</h3>
                        <p><b>ИНН:</b> 5940504398 <br /><b>КПП:</b> 591701001<br /><b>ОГРН:</b> 1025900002875 <br /><b>Расчетный счет:</b>
                            40703810403000001284 <br /><b>Банк:</b> ПРИВОЛЖСКИЙ Ф-Л ПАО &quot;ПРОМСВЯЗЬБАНК&quot; <br /><b>БИК:</b>
                            042202803 <br /><b>Корр. счет:</b> 30101810700000000803 <br /> <br /><b>Назначение платежа:</b> Пожертвование на
                            Уставную деятельность <br /> <br /><b>Юридический адрес:</b> 617442, Пермский край, Кунгурский муниципальный
                            район, Сельское поселение Калининское, Белая Гора д,Монастырская ул, дом 1<br /><b>Телефон:</b> 2120955
                            <br /><b>Ф.И.О. наместника:</b> ИГУМЕН МЕФОДИЙ (НЕМЦОВ)<br /><b>И.О. </b> ИЕРОМОНАХ ГУРИЙ (УСАЧЕВ)</p>
                    </div>
                    <div className={classes.page_window_text}>
                        <p><b>Расчетный счет:</b> 40703810900000001230 <br /><b>Банк:</b> Банк Пермь(АО) г.Пермь <br /><b>БИК:</b> 045773756
                            <br /><b>Корр. счет:</b> 30101810200000000756 <br /><br /><b>Назначение платежа:</b> Пожертвование на Уставную
                            деятельность</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donations;