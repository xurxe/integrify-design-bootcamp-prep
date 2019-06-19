import React from 'react';
import Helmet from 'react-helmet';

const HelmetComponent = () => {
    const jsx = (
        <Helmet>

            <html 
            lang='en'
            ></html>

{/*             <title>
                Xurxe Toivo García
            </title>

            <meta property="og:title" content="Xurxe Toivo García" />
            <meta property="og:description" content="Xurxe makes still, moving, and interactive things." />
            <meta property="og:image" content={contentfulSeo.image.fixed.src} />
            <meta property="og:url" content="http://xurxe.com/" />
            <meta name="twitter:card" content="summary_large_image" />

            <meta 
            property='og:image:width' 
            content='1200'
            />

            <meta 
            property='og:image:height' 
            content='630'
            />

            <meta
            name="description"
            content="Xurxe makes still, moving, and interactive things."
            />

            <meta 
            name="keywords"
            content="Xurxe, Xurxe Toivo, Xurxe Garcia, Xurxe Toivo García, web developer, web development, web designer, web design, illustration, animation, watercolor, Integrify, Finland, Helsinki"
            />

            <meta name="author" content="Xurxe Toivo Garcia" /> */}

            <link 
            rel='stylesheet' 
            href='https://use.fontawesome.com/releases/v5.8.2/css/all.css' 
            integrity='sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay' 
            crossorigin='anonymous' 
            />

            <link 
            rel="stylesheet" 
            href="https://fonts.googleapis.com/css?family=Baumans|Exo+2&display=swap" 
            />
        
        </Helmet>
    )

    return jsx;
}

export default HelmetComponent;
