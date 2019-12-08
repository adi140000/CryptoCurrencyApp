import React, { Component } from 'react';
import CheckImg from '../../../assets/checkImg/CheckImg'
import Loader from '../../../components/main/loader/Loader';
import Buttons from '../../../assets/buttons/Buttons';
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



    getDateToAPI = async (url) => {
        const response = await axios.get(url)
        const coin = response.data[0]
        this.setState({
            ...coin
        })
        
    }

    componentDidMount = () => {
        const { id } = this.props.match.params;
        const url = ` https://api.coinlore.com/api/ticker/?id=${id}`
        this.getDateToAPI(url)

    }


    render() {
        const { id, symbol, name, price_usd, percent_change_1h, percent_change_24h, percent_change_7d } = this.state
        return (
            <>
                <section className='page'>
                    <div   className='page__logo'>

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
                <Buttons url={`https://api.coinlore.com/api/ticker/?id=${id}`} getDate={this.getDateToAPI} />
            </>
        );
    }
}

export default Page;