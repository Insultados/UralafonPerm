import React from 'react'
import classes from './pages.module.css'

const Schedule = () => {
    return (
        <div className="container">
            <div className={classes.page_content}>
                <div id="page_window2" className={classes.page_window}>
                    <div id="page_window_text2" className={classes.page_window_text}>
                        <p><b>Вседневное:</b> <br /><b>16:00</b> - Вечерня, утреня <br /><b>19:00</b> - Монашеское правило, малое
                            повечерие, трехканонник с акафистом, вечерние молитвы, пятисотница <br /><b>6:00</b> - Утренние молитвы,
                            братский молебен, полунощница <br /><b>9:00</b> - Божественная Литургия</p>
                    </div>
                    <div id="page_window_text3" className={classes.page_window_text}>
                        <p><b>Воскресенье:</b> <br /><b>16:00</b> - Всенощное бдение <br /><b>8:00</b> - Утренние молитвы, воскресная
                            полунощница <br /><b>9:00</b> - Молебен иконе Божией Матери "Иверская" с каноном и акафистом <br /><b>10:00</b>
                            - Божественная Литургия <br /><b>Расписание на каждый день публикуется в группе <a href="https://vk.com/uralafonofficial">Вконтакте</a></b> <br /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedule;