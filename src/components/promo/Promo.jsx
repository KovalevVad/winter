import './promo.css'
import listCompany from '../../img/promo/listCompany.svg'
import snowbordOne from '../../img/promo/snowbordOne.svg'
import snowbordTwo from '../../img/promo/snowbordTwo.svg'

const Promo = () => {
  return (
    <section className='promo'>
      <img src={listCompany} alt="" />
      <div className="promo__list">
        <div className="promo__item">
          <img src={snowbordOne} alt="" />
          <div className="promo__text">НАЗВАНИЕ АКЦИИ №1</div>
        </div>
        <div className="promo__item">
          <img src={snowbordTwo} alt="" />
          <div className="promo__text">НАЗВАНИЕ АКЦИИ №2</div>
        </div>
      </div>
    </section>
  );
}

export default Promo;