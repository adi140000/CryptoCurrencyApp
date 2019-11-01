import React, { Component } from 'react';
import './Page.scss';
import axios from 'axios';


class Page extends Component {
    state = {
        
    }

    componentDidMount = async() => {
        const { id } = this.props.match.params;
        const response = await axios.get(` https://api.coinlore.com/api/ticker/?id=${id}`)
        const coin = response.data[0]
        this.setState({
            ...coin
        })        
      
    }

    componentDidUpdate = () => {
        console.log(this.state)
    }
   
    render() {
        return (
            <section className='page'>
                <div className='page_logo'>
                   
                </div>
                <div className='detalis_logo'>

                </div>

            </section>);
    }
}

export default Page;