import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';

export const SidebarData = [

    {
        titles: "Home",
        icon: <FontAwesomeIcon icon={faHouse} />,
        link: "/home"
    },

    {
        titles: "Mailbox",
        icon: <FontAwesomeIcon icon={faEnvelope} />,
        link: "/mailbox"
    },

    {
        titles: "Analytics",
        icon: <FontAwesomeIcon icon={faChartSimple} />,
        link: "/analytics"
    },

    {
        titles: "Friends",
        icon: <FontAwesomeIcon icon={faUserGroup} />,
        link: "/friends"
    },

    {
        titles: "Images",
        icon: <FontAwesomeIcon icon={faImage} />,
        link: "/images"
    }
]

