import React, { Component } from 'react';
import axios from 'axios';

class Ranking extends Component {
    state = {
        crypto:[]
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
        const{ crypto } = this.state;       
        const rows = crypto.map(item => {
            const { rank, symbol,price_usd } = item;
            return (<tr className='ranking__table__body__items' key={rank}>
                <td>{rank}</td>
                <td>{symbol}</td>
                <td>{symbol}</td>
                <td>{price_usd}</td>
           </tr>)
        })
        return (
            <table className='ranking__table'>
                <thead className='ranking__table__head'>
                    <tr  className='ranking__table__head__items'>
                        <th>Lp</th>
                        <th>Logo</th>
                        <th>Nazwa</th>
                        <th>Kurs (USD)</th>
                    </tr>
                </thead>
                <tbody className='ranking__table__body'>
                    {rows}
                </tbody>
            </table>

        );
    }
}

export default Ranking;