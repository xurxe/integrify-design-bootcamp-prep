import React from 'react';
import './styles.css';

import Data from '../../data';
import Nav from '../Nav';
import Header from '../Header';

const App = ({ pageName }) => {

    const page = Data.pages.filter(object => object.name == pageName)[0];

    const jsx = (
        <div className='App'>

            <Nav></Nav>

            <Header 
            header={page.header}
            ></Header>

        </div>
    )

    return jsx;
}

export default App;
