import React from 'react'
import { CardContent } from '@deriv-com/components'
import {
    DerivProductDerivBotBrandDarkLogoHorizontalIcon,
    DerivProductDerivGoBrandDarkLogoHorizontalIcon,
    DerivProductDerivTraderBrandDarkLogoHorizontalIcon,
    DerivProductDerivXBrandDarkLogoIcon,
    PartnersProductDerivCtraderBrandLightLogoHorizontalIcon,
    PartnersProductDerivMt5BrandLightLogoHorizontalIcon,
    // eslint-disable-next-line import/no-unresolved
} from '@deriv/quill-icons/Logo'
import { localize } from 'components/localization'

export const platformTabs = [
    { children: 'All' },
    { children: 'CFDs' },
    { children: 'Options' },
    { children: 'Bots' },
    { children: 'Social' },
]

export const RowCards: CardContent[] = [
    {
        id: 1,
        header: localize('_t_Deriv MT5_t_'),
        description: localize('_t_The most popular and comprehensive CFDs platform._t_'),
        icon: <PartnersProductDerivMt5BrandLightLogoHorizontalIcon width={48} height={48} />,
        size: 'md',
        align: 'start',
        color: 'light',
        link: {
            content: localize('_t_Learn more_t_'),
            href: '/dmt5',
        },
    },
    {
        id: 2,
        header: localize('_t_Deriv cTrader_t_'),
        description: localize('_t_Fast CFDs platform with inbuilt copy trading._t_'),
        icon: <PartnersProductDerivCtraderBrandLightLogoHorizontalIcon height="48" width="48" />,
        size: 'md',
        align: 'start',
        color: 'light',
        link: {
            content: localize('_t_Learn more_t_'),
            href: '/deriv-ctrader',
        },
    },
    {
        id: 3,
        header: localize('_t_Deriv X_t_'),
        description: localize('_t_User-friendly and customisable CFDs platform._t_'),
        icon: <DerivProductDerivXBrandDarkLogoIcon height="48" width="48" />,
        size: 'md',
        align: 'start',
        color: 'light',
        link: {
            content: localize('_t_Learn more_t_'),
            href: '/derivx',
        },
    },
    {
        id: 4,
        header: localize('_t_Deriv GO_t_'),
        description: localize('_t_Mobile app for multipliers trading on the go._t_'),
        icon: <DerivProductDerivGoBrandDarkLogoHorizontalIcon width={48} height={48} />,
        size: 'md',
        align: 'start',
        color: 'light',
        link: {
            content: localize('_t_Learn more_t_'),
            href: '/deriv-go',
        },
    },
    {
        id: 5,
        header: localize('_t_Deriv Trader_t_'),
        description: localize(
            '_t_Flagship options, accumulators, & multipliers trading platform._t_',
        ),
        icon: <DerivProductDerivTraderBrandDarkLogoHorizontalIcon height="48" width="48" />,
        size: 'md',
        align: 'start',
        color: 'light',
        link: {
            content: localize('_t_Learn more_t_'),
            href: '/dtrader',
        },
    },
    {
        id: 6,
        header: localize('_t_Deriv Bot_t_'),
        description: localize('_t_Automated trading. No coding required._t_'),
        icon: <DerivProductDerivBotBrandDarkLogoHorizontalIcon height="48" width="48" />,
        size: 'md',
        align: 'start',
        color: 'light',
        link: {
            content: localize('_t_Learn more_t_'),
            href: '/dbot',
        },
    },
]

export const EUCards: CardContent[] = [
    {
        id: 1,
        header: localize('_t_Deriv MT5_t_'),
        description: localize('_t_The most popular and comprehensive CFDs platform._t_'),
        icon: <PartnersProductDerivMt5BrandLightLogoHorizontalIcon width={48} height={48} />,
        size: 'md',
        align: 'start',
        color: 'light',
        link: {
            content: localize('_t_Learn more_t_'),
            href: '/dmt5',
        },
    },
    {
        id: 2,
        header: localize('_t_Deriv Trader_t_'),
        description: localize('_t_Flagship trading platform for multipliers._t_'),
        icon: <DerivProductDerivTraderBrandDarkLogoHorizontalIcon height="48" width="48" />,
        size: 'md',
        align: 'start',
        color: 'light',
        link: {
            content: localize('_t_Learn more_t_'),
            href: '/dtrader',
        },
    },
]
