import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react'
function App() {
  const [credits, setCredits] = useState(0)
  const [interestRate, setInterestRate] = useState(0)
  const [termLoan, setTermLoan] = useState(0)

  return (
    <div className="container">
      <h1 className="my-3 bl">Кредитный калькулятор</h1>
      <p>Кредитный калькулятор позволяет онлайн рассчитать и сравнить размер ежемесячного платежа, сумму переплаты и
        процентной ставки по интересующему вас кредиту.</p>
      <div className="row d-flex mortgage">
        <div className="col-md-6">
          <form id="mortgage-form">
            <div className="border-input">
              <label>Сумма кредита</label>
              <input type="number" name="s" id="sum" placeholder="2 000 000  ₽" autoComplete="off" value={credits} onChange={
                (e) => setCredits(e.target.value)
              } />
            </div>
            <div className="d-flex justify-content-between">
              <p>1000 ₽</p>
              <p>200 000 000 ₽</p>
            </div>
            <div className="border-input">
              <label>Ставка</label>
              <input type="text" name="p" placeholder="21% " autoComplete="off" value={interestRate} onChange={() => {
                setInterestRate(e.target.value)
              }} />
            </div>
            <div className="">
              <p>Ключевая ставка Банка России</p>
            </div>
            <div className="border-input">
              <label>Срок кредита</label>
              <input type="text" name="n" placeholder="5" autoComplete="off" />
            </div>
          </form>
        </div>
        <div className="col-md-6 payment">
          <h3 className="bl mb-4">Результаты просчета</h3>
          <div className="d-flex justify-content-between my-2">
            <label>Ежемесячный платеж</label>
            <strong className="bl" id="result">0 ₽</strong>
          </div>
          <div className="d-flex justify-content-between my-2">
            <label>Сумма кредита:</label>
            <strong className="bl" id="result">0 ₽</strong>
          </div>
          <div className="d-flex justify-content-between my-2">
            <label>Переплата:</label>
            <strong className="bl" id="overpayments">0 ₽</strong>
          </div>
          <div className="my-2">Общая сумма займа</div>
          <hr className="line" />
          <div className="d-flex my-2">
            <img width="24px" src="./img/calendar.svg" alt="Иконка" />
            <span className="bl">График платежей</span>
          </div>
          <h3 className="my-3 bl">Получите реальные условия от банков</h3>
          <p>Начните оформление заявки сейчас</p>
          <a href="#">Заполнить анкету</a>
        </div>
      </div>
    </div>
  );
}

export default App;
