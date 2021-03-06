import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({
    menuItem,
    pathName
}) => {
    const getMenuClass = () => {
        if (pathName === '/') {
            if (menuItem.url.indexOf('#') > -1) {
                return 'menu-link selected';
            }
        }
        const testPath = pathName.length > 1 ? pathName : 'zzz';

        return menuItem.url.indexOf(testPath) > -1 ? 'menu-link selected' : 'menu-link';
    };

    return (
        <li className='menu-item'>
            <a className={getMenuClass()} href={menuItem.url}>
                {menuItem.name}
            </a>
        </li>
    );
};

MenuItem.propTypes = {
    menuItem: PropTypes.shape({}).isRequired,
    pathName: PropTypes.string.isRequired
};

export default MenuItem;
