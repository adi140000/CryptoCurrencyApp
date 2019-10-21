import React, { Component } from 'react';

class Ranking extends Component {
    state = {}
    render() {
        return (

            <table className='ranking__table'>
                <thead className='ranking__table__head'>
                    <tr>
                        <th>Lp</th>
                        <th>Logo</th>
                        <th>Nazwa</th>
                        <th>Kurs</th>
                    </tr>
                </thead>
                <tbody className='ranking__table__body'>
                    <tr>

                    </tr>
                </tbody>
            </table>

        );
    }
}

export default Ranking;