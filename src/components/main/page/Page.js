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
        const {symbol}=this.state
        return (
            <section className='page'>
                <div className='page_logo'>
                    <CheckImg symbol={symbol}/>
                </div>
                <div className='detalis_logo'>

                </div>

            </section>);
    }
}

export default Page;