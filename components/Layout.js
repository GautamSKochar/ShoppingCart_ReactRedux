import React from 'react';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../routes/Routes';

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Routes />
                <footer>
                    <div style={{ backgroundColor: 'black' }}></div>
                </footer>
            </div>
        );
    }
}