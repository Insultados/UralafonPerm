
import React from 'react'
import classes from './pages.module.css'


const Trebi = () => {
    return (
        <div className="container">
            <div className={classes.page_content}>
                <div className={classes.page_window_text}>
                    <p style={{ fontSize: '20px' }}>
                        <b>Поминовение на Литургии</b> <br />
                        о здравии и об упокоении за 1 имя <br />
                        40 дней - 150р <br />
                        3 мес - 200р <br />
                        6 мес - 400р <br />
                        1 год - 700р <br />
                        <br />
                        Заказная записка 1 имя - 5р <br />
                        (с выниманием частицы) <br />
                        <br />
                        Молебен записка до 10 имен - 50р <br />
                        <br />
                        Сугубая ектения 1 имя 50р <br />
                        - Благодарственная <br />
                        - На всякое благое дело <br />
                        - За болящего <br />
                        - О путешествующих <br />
                        <br />
                        Панихида записка до 10 имен - 50р <br />

                        Крещение - 1100р <br />

                        Венчание - 3100р <br />

                        Отпевание - 3100р <br />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Trebi;