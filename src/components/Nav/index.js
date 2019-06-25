import React from 'react';
import './styles.css';

import { Component } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import ReactResizeDetector from 'react-resize-detector';

class Nav extends Component {

    state = {
        desktop: true,
        closed: true,
        classNameNav: 'Nav Nav___desktop',
        classNameCenter: 'Nav_center Nav_center___desktop',
    };

    renderDesktop = () => {
        this.setState(() => ({
            desktop: true,
            closed: true,
            classNameNav: 'Nav Nav___desktop',
            classNameCenter: 'Nav_center Nav_center___desktop',
        }));
    };

    renderClosed = () => {
        this.setState(() => ({
            desktop: false,
            closed: true,
            classNameNav: 'Nav Nav___closed',
            classNameCenter: 'Nav_center Nav_center___closed',
        }));
    };

    renderOpen = () => {
        this.setState(() => ({
            desktop: false,
            closed: false,
            classNameNav: 'Nav Nav___open',
            classNameCenter: 'Nav_center Nav_center___open',
        }));
    };

    componentDidMount = () => {
        if (window.matchMedia('(max-width: 600px)').matches) {
            this.renderClosed();
        }

        else {
            this.renderDesktop();
        }
    };

    handleWindowResize = () => {

        if (
            this.state.desktop
            && window.matchMedia('(max-width: 600px)').matches
        ) {
            this.renderClosed();
        }

        else if (
            !this.state.desktop 
            && !window.matchMedia('(max-width: 600px)').matches
        ) {
            this.renderDesktop();
        }
    };

    handleClick = () => {

        if (
            !this.state.desktop 
            && this.state.closed
        ) {
            this.renderOpen();
        }

        if (
            !this.state.desktop 
            && !this.state.closed
        ) {
            this.renderClosed();
        };
    };

    render() {
        const { contentfulNavigationBar } = this.props.data;
        const { logoLeft, linksCenter, linkRight } = contentfulNavigationBar;

        const jsx = (

            <ReactResizeDetector
            handleWidth
            onResize={this.handleWindowResize}
            refreshMode='throttle'
            refreshRate={100}
            >

                <nav 
                className={this.state.classNameNav}
                >
                    <div 
                    className='Nav_box'
                    >
                        <button 
                        className='Nav_button hvr-outline-out___nav'
                        onClick={this.handleClick}
                        >
                            <Img
                            fixed={logoLeft.fixed}
                            ></Img>

                        </button>
                    </div>

                    <div 
                    className={`Nav_box ${this.state.classNameCenter}`}
                    >
                        {linksCenter.map(link => (
                            <Link 
                            key={link.id}
                            className='Nav_link hvr-underline-out___nav' 
                            to={link.slug ? `/${link.slug}` : '/'}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
            
                    <div 
                    className='Nav_box'
                    >
                        <Link  
                        className='Nav_link Nav_link___right hvr-underline-out___nav' 
                        to={`/${linkRight.slug}`}
                        >
                            {linkRight.name}
                        </Link>
                    </div>
                </nav>
            </ReactResizeDetector>
        )

        return jsx;
    }
    
}

export default props => (
    <StaticQuery
        query={query}
        render={data => <Nav data={data} {...props}></Nav>}
    />
)

export const query = graphql`
{
    contentfulNavigationBar {
        logoLeft {
            fixed (width: 40){
                aspectRatio
                width
                height
                src
                srcSet
                srcWebp
                srcSetWebp
            }
        }
        linksCenter {
            __typename
            ... on ContentfulIndex {
                id
                name
            }
            ... on ContentfulPage {
                id
                name
                slug
            }
        }
        linkRight {
            name
            slug
        }
    }
}
`
