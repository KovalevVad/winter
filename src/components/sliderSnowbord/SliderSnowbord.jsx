import './sliderSnowbord.css'

import left from './../../img/sliderSnowbord/leftArrow.svg'
import right from './../../img/sliderSnowbord/rightArrow.svg'
import img1 from './../../img/sliderSnowbord/one.svg'
import img2 from './../../img/sliderSnowbord/two.svg'
import img3 from './../../img/sliderSnowbord/three.svg'
import img4 from './../../img/sliderSnowbord/four.svg'


import { useState } from 'react';

const listSnowbord = [
  {
    name: 'LIB TECH',
    detail: 'Мужской сноуборд',
    price: '34392 ₽',
    url: img1
  },
  {
    name: 'LIB TECH',
    detail: 'Мужской сноуборд',
    price: '34392 ₽',
    url: img2
  },
  {
    name: 'LIB TECH',
    detail: 'Мужской сноуборд',
    price: '654392 ₽',
    url: img3
  },
  {
    name: 'LIB TECH',
    detail: 'Мужской сноуборд',
    price: '56788 ₽',
    url: img4
  },
  {
    name: 'LIB TECH',
    detail: 'Мужской сноуборд',
    price: '34392 ₽',
    url: img1
  },
  {
    name: 'LIB TECH',
    detail: 'Мужской сноуборд',
    price: '34392 ₽',
    url: img2
  },
]


const SliderSnowbord = () => {
  const [index, setIndex] = useState(2);

  function leftClick() {
    setIndex(index - 1);
  }

  function rightClick() {
    setIndex(index + 1);
  }

  let list = listSnowbord.slice(index, index + 4);

  console.log(list)
  return (
    <section>
      <h2>Новинки</h2>
      <div className="listItems">
        {
        list.map((item) => {
        return (
          <div className="item">
            <div className="item__background-img">
              <img src={item.url} alt="" />
            </div>
            <h3>{item.name}</h3>
            <div className="item__detail">{item.detail}</div>
            <div className="item__price">{item.price}</div>
          </div>
          )
        })
      }
      </div>
      <button className='sliderSnowbord__button'>Показать больше</button>
      <div className="slideSnowbord__arrows">
        <button onClick={leftClick}><img src={left} alt="" /></button>
        <button onClick={rightClick}><img src={right} alt="" /></button>
      </div>

    </section>
   );
}

export default SliderSnowbord;