import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Menu = ({containerClassName,listClassName}) => {
    return (
        <ul className={`${containerClassName} text-black dark:text-white hidden lg:flex gap-10`}>
            <li> <HashLink smooth className={`${listClassName} nav-link`} to="#hero"> home </HashLink> </li>
            <li> <HashLink smooth className="nav-link" to="#resume"> resume </HashLink> </li>
            <li> <HashLink smooth className="nav-link" to="#skill"> skill </HashLink> </li>
            <li> <HashLink smooth className="nav-link" to="#project"> project </HashLink> </li>
            <li> <HashLink smooth className="nav-link" to="#testimonial"> testimonial </HashLink> </li>
            <li> <HashLink smooth className="nav-link" to="#contact"> contact </HashLink> </li>
        </ul>
    );
};

export default Menu;