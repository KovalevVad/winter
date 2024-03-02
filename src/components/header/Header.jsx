import './header.css'
import LOGO from './../../img/LOGO.svg'
import vector1 from './../../img/marker/vector1.svg'
import vector2 from './../../img/marker/vector2.svg'
import person from './../../img/marker/person.svg'
import star from './../../img/marker/star.svg'
import basket from './../../img/marker/basket.svg'
import lupa from './../../img/marker/lupa.svg'

import JsonRegion from '../JsonRegion'

function Header() {
  return (
    <>
      <div className='header__up'>
        <div>
          <div className='region'>
            <img src={vector1} alt="" width={14} height={20} />
            <div>
            Ваш регион доставки:
            <JsonRegion />
            </div>
            <img src={vector2} alt="" width={20} height={6}/>
          </div>
          <nav className='header__nav'>
            <ul>
              <a href=""><li>Магазины</li></a>
              <a href=""><li>Помощь</li></a>
              <a href=""><li>Блоги</li></a>
            </ul>
          </nav>
        </div>

        <nav className='header__nav'>
          <ul>
              <a href=""><li>Бесплатная доставка*</li></a>
              <a href=""><li>Оплата при получении</li></a>
              <a href=""><li>Возврат в течение 14 дней</li></a>
            </ul>
        </nav>
      </div>
      <div className='header__bottom'>
        <nav className='header__nav'>
          <ul className='nav__left'>
            <li><a href="">Мужчинам</a></li>
            <li><a href="">Женщинам</a></li>
            <li><a href="">Детям</a></li>
          </ul>
        </nav>
        <img src={LOGO} alt="" />
        <nav className='header__nav'>
          <ul>
            <li>
              <img src={person} alt="" />
              <a href=''>Войти</a>
            </li>
            <li>
              <img src={star} alt="" />
              <a href=''>Избранное</a>
            </li>
            <li>
              <img src={basket} alt="" />
              <a href=''>Корзина</a>
            </li>
            <li>
              <img src={lupa} alt="" />
              <a href=''>Поиск</a>
            </li>
          </ul>
        </nav>
      </div>
      <nav>
        <ul className='nav'>
          <a href="">
            <li>Новинки</li>
          </a>
          <a href="">
            <li>Сноуборд</li>
          </a>
          <a href="">
            <li>Лыжи</li>
          </a>
          <a href="">
            <li>Скейт</li>
          </a>
          <a href="">
            <li>Лонгборд</li>
          </a>
          <a href="">
            <li>Вейкборд</li>
          </a>
          <a href="">
            <li>Серф</li>
          </a>
          <a href="">
            <li>Sup</li>
          </a>
          <a href="">
            <li>Одежда</li>
          </a>
          <a href="">
            <li>Обувь</li>
          </a>
          <a href="">
            <li>Аксуссуары</li>
          </a>
          <a href="">
            <li>Бренды</li>
          </a>
          <a href="">
            <li>Распродажа</li>
          </a>
        </ul>
      </nav>
    </>
  )
}

export default Header;