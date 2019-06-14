import React from 'react';
import './styles.css';

import Data from '../../data';
import Nav from '../Nav';
import Header from '../Header';
import Main from '../Main';
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

            <Main
            main={page.main}
            ></Main>

            <Footer></Footer>

        </div>
    )

    return jsx;
}

export default App;
