import './FAQList.css'


function FAQList() {


    
    return (
        <div style={{ margin: '0 20px' }}>
            <div>
                <h3>Частые вопросы</h3>
            </div>
            <ul className="FAQ-list" >
                <li><a className="FAQ-list-item" href='/FAQ#question-1'>Открыт ли монастырь для посещений?</a></li>
                <li><a className="FAQ-list-item" href='/FAQ#question-2'>Как добраться до монастыря?</a></li>
                <li><a className="FAQ-list-item" href='/FAQ#question-3'>Работает ли трапезная?</a></li>
                <li><a className="FAQ-list-item" href='/FAQ#question-4'>Есть ли безналичный расчет?</a></li>
                <li><a className="FAQ-list-item" href='/FAQ#question-5'>Проводится ли у нас таинство крещения?</a></li>
                <li><a className="FAQ-list-item" href='/FAQ#question-6'>Как заказать поминовение?</a></li>
                <li><a className="FAQ-list-item" href='/FAQ#question-7'>Как оплатить поминовение?</a></li>
                <li><a className="FAQ-list-item" href='/FAQ#question-8'>Можно ли переночевать в монастыре?</a></li>
            </ul>
        </div>
    );
}

export default FAQList;