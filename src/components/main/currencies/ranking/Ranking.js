import React, { Component } from 'react';
import Loader from '../../loader/Loader';
import './Ranking.scss';
import { Link } from "react-router-dom";
import axios from 'axios';

class Ranking extends Component {
    state = {
        crypto: [],
        
    }
    componentDidMount=async() => {
        const res = await axios.get('https://api.coinlore.com/api/tickers/');
        const { data } = res.data;
        const crypto=data.sort((a,b)=>b.price_usd-a.price_usd)
        this.setState({
            crypto
        })
    }
    render() {
        let i = 1;
        const{ crypto } = this.state;       
        const rows = crypto.map(item => {
            const { id, symbol,name , price_usd, percent_change_24h } = item;
            const isIncrease=percent_change_24h>0?'#35bd59':'#c4122c'
            return (<Link to={`/page/${id}`} className='ranking__table__body' key={id}>                
                    <div className='ranking__table__body__item  body'>{i++}</div>
                    <div className='ranking__table__body__item  body'>
                        <img className='ranking__table__body__item__img' alt={symbol}
                        src={`https://assets.coinlayer.com/icons/${symbol}.png`} />
                    </div>
                    <div className='ranking__table__body__item  body'>{name}</div>
                    <div style={{ color: isIncrease }} className='ranking__table__body__item  body'>{price_usd}</div>                
                </Link>)
        })
        return (
            <ul className='ranking__table'>
                <li className='ranking__table__head'>
                    <div  className='ranking__table__head__item head'>Lp</div>                        
                    <div className='ranking__table__head__item head' >Logo</div>
                    <div className='ranking__table__head__item head'>Nazwa</div>
                    <div className='ranking__table__head__item head'>Kurs (USD)</div>                    
                </li>
                {rows.length > 0 ? rows : <Loader />}
            </ul>

        );
    }
}

export default Ranking;