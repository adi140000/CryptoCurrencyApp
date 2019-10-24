import React, { Component } from 'react';
import './Page.scss'

class Page extends Component {
    state = {
        coin:null
    }

    componentDidMount = () => {
        console.log(this.props)
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