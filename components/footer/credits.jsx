import { jsx } from 'theme-ui';
import React from 'react';
import DeskCredits from './desktop-credits';
import MobCredits from './mobile-credits';
import { useMediaQuery } from "react-responsive";

export default function Credits() {

    const isMobile = useMediaQuery({ query: "(max-width: 639px)" });

    if (isMobile) return <MobCredits />;

    else return <DeskCredits />;
}