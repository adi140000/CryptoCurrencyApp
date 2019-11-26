import React, { Component } from 'react';
import CheckImg from '../../../assets/checkImg/CheckImg'
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

    componentDidMount = async() => {
        const { id } = this.props.match.params;
        const response = await axios.get(` https://api.coinlore.com/api/ticker/?id=${id}`)
        const coin = response.data[0]
        this.setState({
            ...coin
        })        
        console.log(coin)
    }

   
    render() {
        const {symbol,price_usd,percent_change_1h,percent_change_24h,percent_change_7d}=this.state
        return (
            <section className='page'>
                <div className='page__logo'>
                    <CheckImg className='page__logo__img' symbol={symbol}/>
                </div>
                <div className='page__detalis'>
                    <div className='page__detalis__item'><span className='item__title'>Symbol:</span>{symbol}</div>
                    <div className='page__detalis__item'><span className='item__title'>Cena USD/{symbol}:</span>{price_usd}</div>
                    <div className='page__detalis__item'><span className='item__title'>Zmiana godzinowa:</span>{percent_change_1h}</div>
                    <div className='page__detalis__item'><span className='item__title'>Zmiana dobowa:</span>{percent_change_24h}</div>
                    <div className='page__detalis__item'><span className='item__title'>Zmiana tygodniowa:</span>{percent_change_7d}</div>
                </div>

            </section>);
    }
}

export default Page;