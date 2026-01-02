import React from 'react';

const SocialLink = ({ href, icon }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={"social-link"}
        >
            {icon}

        </a>
    );
};

export default SocialLink;