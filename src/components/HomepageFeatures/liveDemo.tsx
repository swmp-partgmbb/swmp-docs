import React, { useEffect } from 'react';

const StorylaneEmbed = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://js.storylane.io/js/v2/storylane.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div
            className="sl-embed"
            style={{
                position: 'relative',
                paddingBottom: 'calc(49.67% + 25px)',
                width: '100%',
                height: 0,
                transform: 'scale(1)',
            }}
        >
            <iframe
                loading="lazy"
                className="sl-demo"
                src="https://app.storylane.io/demo/yiirenvshmea?embed=inline"
                name="sl-embed"
                allow="fullscreen"
                allowFullScreen
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: '1px solid rgba(63,95,172,0.35)',
                    boxShadow: '0px 0px 18px rgba(26, 19, 72, 0.15)',
                    borderRadius: '10px',
                    boxSizing: 'border-box',
                }}
            />
        </div>
    );
};

export default StorylaneEmbed;