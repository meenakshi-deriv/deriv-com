import { TMarketButtons } from './_types'
import Forex from 'images/svg/home/forex-live-table.svg'
import Derived from 'images/svg/home/derived-live-table.svg'
import Stocks from 'images/svg/home/stocks-live-table.svg'
import Crypto from 'images/svg/home/crypto-live-table.svg'
import Commodities from 'images/svg/home/commodites-live-table.svg'

export const market_buttons: TMarketButtons[] = [
    {
        id: 0,
        src: Forex,
        button_text: 'Forex',
        market_name: 'forex',
        market_description:
            '_t_Benefit from round-the-clock trading hours (Monday to Friday), high liquidity, low barriers to entry, a wide range of offerings, and opportunities to trade on world events._t_',
        to: 'markets/forex/',
    },
    {
        id: 1,
        src: Derived,
        button_text: 'Derived',
        market_name: 'derived',
        market_description:
            '_t_Trade on asset prices derived from real-world or simulated markets. Manage your exposure by selecting the volatility level to suit your risk appetite. Choose from our 24/7 synthetics, derived FX, and baskets._t_',
        to: 'markets/synthetic/',
    },
    {
        id: 2,
        src: Stocks,
        button_text: 'Stock & Indices',
        market_name: 'indices',
        market_description:
            '_t_Trade global stocks of your favourite household brands and international stock market indices on Deriv. Our stocks & indices offer competitively priced equities and asset baskets that you can trade outside the regular hours of major stock markets._t_',
        to: 'markets/stock/',
    },
    {
        id: 3,
        src: Crypto,
        button_text: 'Cryptocurrencies',
        market_name: 'cryptocurrency',
        market_description:
            "_t_Take advantage of a highly liquid market with round-the-clock trading. Profit from correctly predicting the movement of world's most popular cryptocurrencies._t_",
        to: 'markets/cryptocurrencies/',
    },
    {
        id: 4,
        src: Commodities,
        button_text: 'Commodities',
        market_name: 'commodities',
        market_description:
            '_t_Speculate on the price movements of silver, gold, oil and more. Profit from the price difference when the market moves in the direction that you have predicted._t_',
        to: 'markets/commodities/',
    },
]
