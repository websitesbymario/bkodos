import React from 'react';

const NavigationFooter = () => {
    const handleUpClick = () => {
        window.scrollTo(0, 0);
    };

    const getLeftArrow = () => (
        <svg viewBox="0 0 320 512"><path fill="#FFFFFF" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" /></svg>
    );

    const getRightArrow = () => (
        <svg viewBox="0 0 320 512"><path fill="#FFFFFF" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>
    );

    const goBackUrl = document.getElementById('config-gobackurl').value;
    const goBackLabel = document.getElementById('config-gobacklabel').value;
    const goNextUrl = document.getElementById('config-gonexturl').value;
    const goNextLabel = document.getElementById('config-gonextlabel').value;

    return (
        <div className='footer-nav-container clear'>
            <div className='footer-back-wrapper'>
                {getLeftArrow()}
                <a href={goBackUrl} className='footer-back-link'>{goBackLabel}</a>
            </div>
            <div className='footer-up-wrapper' onClick={() => { handleUpClick() }}>
                <i className='footer-up-link'>
                    {getLeftArrow()}
                </i>
            </div>
            <div className='footer-next-wrapper'>
                <a href={goNextUrl} className='footer-next-link'>{goNextLabel}</a>
                {getRightArrow()}
            </div>
        </div>
    );
};

export default NavigationFooter;
