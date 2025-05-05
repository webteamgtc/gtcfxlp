import React from 'react';
import { createTranslator } from "next-intl";
import GoldLandingPage from '../pages/GoldLandingPage';

export async function generateMetadata({ params: { locale } }) {
    const messages = (await import(`../../../messages/en.json`)).default;
    const t = createTranslator({ locale, messages });
    const url =
    locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/en/thank-you`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/thank-you`;

    return {
        title: 'Maximize Profits Every Time You Trade With GOLD',
        description: 'Trade gold with tight spreads, fast execution, and top-tier conditions built for serious traders. Take advantage of powerful platforms and pro-level tools. Stay ahead with reliable insights designed for gold trading success.',
        alternates: {
            canonical: url,
          },
    };
}
const page = () => {
  
    return (
        <GoldLandingPage/>
    )
}

export default page;