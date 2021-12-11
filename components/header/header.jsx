import { jsx } from 'theme-ui';
import React from 'react';
import DeskHeader from './desktop-header';
import MobHeader from './mobile-header';
import { useMediaQuery } from "react-responsive";

export default function Header() {

    const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

    if (isMobile) return <MobHeader />;

    else return <DeskHeader />;
}