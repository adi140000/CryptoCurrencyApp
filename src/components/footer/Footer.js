import React from 'react';
import Bitcoin from '../../img/bitcoin.png'
import './Footer.scss'

const Footer = () => {
  return (<footer className='footer'>
    <div className='footer__up'>
      <div className='footer__up__logo'>
        <img className='footer__up__logo__img' src={Bitcoin} alt='bitcoin' />
      </div>
      <div className='footer__up__desc'>
        <div>
          Powyższe wyniki są przedstawione tylko w celach pokazowych. Strona ta przedstawia tylko ogólne wyniki dotyczace kursów
          kryptowalut dlatego bazując tylko na tych wynikach nie ma możliwości dokonania pełnej analizy.
          Podczas tworzenia strony skożystałem z API :
          </div>
      </div>

    </div>

    <div className='footer__down'>
      <span>Wszelkie prawa zastrzeżone &copy Adrian Żmuda</span>
    </div>
  </footer >);
}

export default Footer;