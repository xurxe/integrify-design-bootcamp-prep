import React from 'react';
import Helmet from 'react-helmet';

const HelmetComponent = ({ contentfulSeo }) => {

    const { title, description, image, url, keywords, author } = contentfulSeo;
    
    const jsx = (
        <Helmet>

            <html 
            lang='en'
            ></html>

            <title>
                {title}
            </title>

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`https:${image.file.url}`} />
            <meta property="og:url" content={url} />
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
            content={description}
            />

            <meta 
            name="keywords"
            content={keywords}
            />

            <meta name="author" content={author} />

            <link 
            rel='stylesheet' 
            href='https://use.fontawesome.com/releases/v5.8.2/css/all.css' 
            integrity='sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay' 
            crossorigin='anonymous' 
            />

            <link 
            rel="stylesheet" 
            href="https://fonts.googleapis.com/css?family=Baumans|Exo+2|Exo+2+Thin|Exo+2+Extra-Light|Exo+2+Light|Exo+2+Regular|Exo+2+Medium|Exo+2+Semi-Bold|Exo+2+Bold|Exo+2+Extra-Bold|Exo+2+Black&display=swap" 
            />
        
        </Helmet>
    )

    return jsx;
}

export default HelmetComponent;
