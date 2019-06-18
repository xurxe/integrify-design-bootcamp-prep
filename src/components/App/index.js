import React from 'react';
import './styles.css';

import HelmetComponent from '../Helmet';
import Nav from '../Nav';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

const App = ({ data }) => {

    const { contentfulIndex } = data;
    const { name, headerTitle, headerSubtitle, headerPill, main } = contentfulIndex;
    const header = {
        title: headerTitle,
        subtitle: headerSubtitle,
        pill: headerPill,
        // image: image (TODO: add to schema)
    }

    const jsx = (
        <div className='App'>

            <HelmetComponent></HelmetComponent>

            <Nav></Nav>

            <Header 
            name={name}
            header={header}
            ></Header>

            {main &&
            <Main
            name={name}
            main={main}
            ></Main>}

            <Footer></Footer>

        </div>
    )

    return jsx;
}

export default App;
