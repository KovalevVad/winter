import './slider.css'
import { useState } from 'react';

import img0 from '../../img/slider/img0.png'
import img1 from '../../img/slider/img1.svg'
import img2 from '../../img/slider/img2.png'
import left from '../../img/slider/leftArrow.svg'
import rigth from '../../img/slider/rightArrow.svg'
import { isElementType } from '@testing-library/user-event/dist/utils';

const listSlider = [
  // {
  //   text: 'WINTER SALE ДО -70%',
  //   url: img0
  // },
  {
    text: 'WINTER SALE ДО -70%',
    url: img1
  },
  // {
  //   text: 'WINTER SALE ДО -70%',
  //   url: img2
  // }
]


const Promo = () => {
  const [index, setIndex] = useState(1);
  let list = listSlider

  function leftClick() {
    setIndex(index - 1);
    list[0] = listSlider[1]
    list[1] = listSlider[0]
  }

  function rightClick() {
    setIndex(index + 1);
    list[1] = listSlider[2]
    list[2] = listSlider[1]
  }

  return (
  <section className="slider">
    <div className="controls">
      <button onClick={leftClick}><img src={left} alt="" /></button>
      <button onClick={rightClick}><img src={rigth} alt="" /></button>
    </div>
    {
      listSlider.map(element => {
        return (
          <div className="slider__content">
            <div className="slider__text">{element.text}</div>
            <img src={element.url} alt="" />
          </div>
        )
      })
    }
  </section> );
}

export default Promo;