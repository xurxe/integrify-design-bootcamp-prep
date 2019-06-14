import React from 'react';
import './styles.css';

import Data from '../../data';
import Nav from '../Nav';
import Header from '../Header';
import Footer from '../Footer';
import HelmetComponent from '../Helmet';

const App = ({ pageName }) => {

    const page = Data.pages.filter(object => object.name === pageName)[0];

    const jsx = (
        <div className='App'>

            <HelmetComponent></HelmetComponent>

            <Nav></Nav>

            <Header 
            header={page.header}
            ></Header>

            <Footer></Footer>

        </div>
    )

    return jsx;
}

export default App;