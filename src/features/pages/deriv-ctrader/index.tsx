import React from 'react'
import { ctrader_data } from './data'
import CTraderTradeDescription from './trade-description'
import { hero_content_data } from './hero/data'
import CTraderNumbers from './numbers'
import {
    TradingPlatformHowToStart,
    TradingPlatformNumbers,
    TradingPlatformWhatHave,
    TradingPlatformWhyTrade,
} from 'features/components/templates/trading-platform'
import Hero from 'features/components/molecules/deriv-products-hero'
import MainNav from 'features/components/templates/navigation/main-nav'
import Footer from 'features/components/templates/footer/'
import Layout from 'features/components/templates/layout'
import { SEO } from 'components/containers'
import { localize, WithIntl } from 'components/localization'

const DerivCTrader = () => {
    const {
        trading_platform_hero,
        trading_platform_numbers,
        trading_platform_what_have,
        trading_platform_why_trade,
        trading_platform_start,
        trading_platform_other,
    } = ctrader_data
    return (
        <Layout>
            <MainNav />
            <SEO
                title={localize('_t_cTrader – a CFD trading platform | Deriv_t_')}
                description={localize(
                    '_t_cTrader is our intuitive CFD trading platform where you can trade forex, commodities, stocks & indices, cryptocurrencies, and derived indices._t_',
                )}
            />
            {/*need provide new*/}
            <Hero contentData={hero_content_data} />
            {/*<TradingPlatformHero trading_platform_hero={trading_platform_hero} />*/}
            {/*<TradingPlatformNumbers trading_platform_numbers={trading_platform_numbers} />*/}
            <CTraderNumbers />
            <CTraderTradeDescription />

            <TradingPlatformWhyTrade trading_platform_why_trade={trading_platform_why_trade} />
            <TradingPlatformWhatHave trading_platform_what_have={trading_platform_what_have} />
            <TradingPlatformHowToStart trading_platform_start={trading_platform_start} />
            {/*need to complete*/}
            {/*<TradingPlatformOther trading_platform_other={trading_platform_other} />*/}
            <Footer />
        </Layout>
    )
}

export default WithIntl()(DerivCTrader)
