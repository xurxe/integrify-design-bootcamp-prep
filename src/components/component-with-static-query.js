import React from 'react';
import './styles.css';

import { StaticQuery, graphql } from 'gatsby';

const Component = ({ data, props }) => {

    const { site } = data;
    
    const jsx = (
        <div 
        props={props}
        >
            {site}
        </div>
    )

    return jsx;
}

export default props => (
    <StaticQuery
        query={query}
        render={data => <Component data={data} {...props}></Component>}
    />
)

export const query = graphql`
{
    site {
        id
    }
}
`