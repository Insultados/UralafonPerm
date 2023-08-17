
import React from 'react'
import classes from './pages.module.css'


const Trebi = () => {
    return (
        <div className="container">
            <div className={classes.page_content}>
                <div className={classes.page_window_text}>
                    <p style={{ fontSize: '20px' }}>


                        <b>Поминовение на Литургии</b> <br />
                    <b>Требы:</b> о здравии и об упокоении за 1 имя <br />
                        разовая - 5р <br />
                        40 дней - 150р <br />
                        3 мес - 200р <br />
                        6 мес - 400р <br />
                        1 год - 700р <br />
                        10 лет - 8000р <br />

                        <br />

                        Крещение - 1200р <br />

                        Венчание - 3100р <br />

                        Отпевание - 3100р <br />

                        <br />
                        <b>Сугубая Ектения:</b> 1 имя 50р <br />
                        - Благодарственная <br />
                        - На всякое благое дело <br />
                        - За болящего <br />
                        - О путешествующих <br />


                        <br />
                        <b>Молебны:</b> <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}> - иконе Божией Матери "Еверская" <br />
                                 - Пмрч Варлааму Белогорскокому </span><br />
                        Записка на 1 молебен до 10 имен - 50р <br />

                        <br />
                        <b>Панихида:</b> записка до 10 имен - 50р <br />


                    </p>
                </div>
            </div>
        </div>
    )
}

export default Trebi;