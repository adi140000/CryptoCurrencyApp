import React, { Component } from 'react';
import CheckImg from '../../../assets/checkImg/CheckImg'
import Loader from '../../../components/main/loader/Loader';
import Refresh from '../../../assets/refresh/Refresh';
import './Page.scss';
import axios from 'axios';


class Page extends Component {
    state = {
        id: 0,
        rank: 0,
        name: '',
        symbol: '',
        percent_change_1h: 0,
        percent_change_7d: 0,
        percent_change_24h: 0,
        price_btc: 0,
        price_usd: 0
    }

    componentDidMount = async () => {
        const { id } = this.props.match.params;
        const response = await axios.get(` https://api.coinlore.com/api/ticker/?id=${id}`)
        const coin = response.data[0]
        this.setState({
            ...coin
        })
        console.log(coin)
    }


    render() {
        const { id, symbol, name, price_usd, percent_change_1h, percent_change_24h, percent_change_7d } = this.state
        return (
            <>
                <section className='page'>
                    <div className='page__logo'>

                        {id !== 0 ?
                            <>
                                <CheckImg className='page__logo__img' symbol={symbol} />
                                <div className='page__logo__name'>{name}</div>
                            </> :
                            <Loader />
                        }

                    </div>
                    <div className='page__detalis'>
                        <div className='page__detalis__item'>
                            <span className='item__title'>Symbol:</span >
                            <span className='item__property'>{id !== 0 ? symbol : ''}</span>
                        </div>
                        <div className='page__detalis__item'>
                            <span className='item__title'>Cena USD/{id !== 0 ? symbol : ''}:</span>
                            <span className='item__property'>{id !== 0 ? price_usd : ''}</span>
                        </div>
                        <div className='page__detalis__item'>
                            <span className='item__title'>Zmiana godzinowa:</span>
                            <span style={{
                                color: percent_change_1h > 0 ? '#35bd59' : '#c4122c'
                            }} className='item__property'>{id !== 0 ? percent_change_1h : ''}</span>
                        </div>
                        <div className='page__detalis__item'>
                            <span className='item__title'>Zmiana dobowa:</span>
                            <span style={{
                                color: percent_change_24h > 0 ? '#35bd59' : '#c4122c'
                            }} className='item__property'>{id !== 0 ? percent_change_24h : ''}</span>
                        </div>
                        <div className='page__detalis__item'>
                            <span className='item__title'>Zmiana tygodniowa:</span>
                            <span style={{
                                color: percent_change_7d > 0 ? '#35bd59' : '#c4122c'
                            }} className='item__property'>{id !== 0 ? percent_change_7d : ''}</span>
                        </div>
                    </div>
                </section>
                <section className='options'>
                    <div className='options__back'></div>
                    <Refresh/>
                </section>
            </>
        );
    }
}

export default Page;