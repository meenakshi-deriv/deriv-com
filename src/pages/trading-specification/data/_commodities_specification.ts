import { TSpecification } from '../_types'

const commodities_specification: TSpecification = {
    market: 'commodities',
    data: [
        {
            is_row: true,
            symbol: 'XAGEUR',
            instrument: 'XAGEUR',
            contract_size: '5000 oz',
            base_currency: 'XAG',
            minimum_size: 0.01,
            minimum_spread: 0.01,
            target_spread: 0.017,
            max_effective_leverage: 500,
            margin_requirement: 0.2,
            swap_long: -1.278,
            swap_short: 0.635,
            trading_hours: 'Sun 23:05 - Fri 21:45 Daily Break: 22:00 - 23:00 GMT',
        },
        {
            is_row: true,
            symbol: 'XAGUSD',
            instrument: 'XAGUSD',
            contract_size: '5000 oz',
            base_currency: 'XAG',
            minimum_size: 0.01,
            minimum_spread: 0.011,
            target_spread: 0.02,
            max_effective_leverage: 500,
            margin_requirement: 0.2,
            swap_long: -3.348,
            swap_short: 1.657,
            trading_hours: 'Sun 23:05 - Fri 21:45 Daily Break: 22:00 - 23:00 GMT',
        },
        {
            is_row: true,
            symbol: 'XALUSD',
            instrument: 'XALUSD',
            contract_size: '100 ton',
            base_currency: 'XAL',
            minimum_size: 0.01,
            minimum_spread: 2.27,
            target_spread: 4.87,
            max_effective_leverage: 500,
            margin_requirement: 0.2,
            swap_long: -44.252,
            swap_short: 28.483,
            trading_hours: 'Mon - Fri 01:05 - 19:00 GMT',
        },
        {
            is_row: true,
            symbol: 'XAUEUR',
            instrument: 'XAUEUR',
            contract_size: '100 oz',
            base_currency: 'XAU',
            minimum_size: 0.01,
            minimum_spread: 0.22,
            target_spread: 0.44,
            max_effective_leverage: 500,
            margin_requirement: 0.2,
            swap_long: -11.348,
            swap_short: 3.586,
            trading_hours: 'Sun 23:05 - Fri 21:45 Daily Break: 22:00 - 23:00 GMT',
        },
        {
            is_row: true,
            symbol: 'XAUUSD',
            instrument: 'XAUUSD',
            contract_size: '100 oz',
            base_currency: 'XAU',
            minimum_size: 0.01,
            minimum_spread: 0.19,
            target_spread: 0.26,
            max_effective_leverage: 500,
            margin_requirement: 0.2,
            swap_long: -18.36,
            swap_short: 12.1,
            trading_hours: 'Sun 23:05 - Fri 21:45 Daily Break: 22:00 - 23:00 GMT',
        },
        {
            is_row: true,
            symbol: 'XCUUSD',
            instrument: 'XCUUSD',
            contract_size: '100 ton',
            base_currency: 'XCU',
            minimum_size: 0.01,
            minimum_spread: 3.92,
            target_spread: 8.06,
            max_effective_leverage: 500,
            margin_requirement: 0.2,
            swap_long: -29.635,
            swap_short: 12.104,
            trading_hours: 'Mon - Fri 01:05 - 19:00 GMT',
        },
        {
            is_row: true,
            symbol: 'XNIUSD',
            instrument: 'XNIUSD',
            contract_size: '100 ton',
            base_currency: 'XNI',
            minimum_size: 0.01,
            minimum_spread: 9.65,
            target_spread: 66.5,
            max_effective_leverage: 500,
            margin_requirement: 0.2,
            swap_long: -318.676,
            swap_short: 199.648,
            trading_hours: 'Mon - Fri 01:05 - 19:00 GMT',
        },
        {
            is_row: true,
            symbol: 'XPBUSD',
            instrument: 'XPBUSD',
            contract_size: '100 ton',
            base_currency: 'XPB',
            minimum_size: 0.01,
            minimum_spread: 2.51,
            target_spread: 4.08,
            max_effective_leverage: 500,
            margin_requirement: 0.2,
            swap_long: -19.918,
            swap_short: 10.778,
            trading_hours: 'Mon - Fri 01:05 - 19:00 GMT',
        },
        {
            is_row: true,
            symbol: 'XPDUSD',
            instrument: 'XPDUSD',
            contract_size: '100 oz',
            base_currency: 'XPD',
            minimum_size: 0.01,
            minimum_spread: 0.33,
            target_spread: 13.38,
            max_effective_leverage: 500,
            margin_requirement: 0.2,
            swap_long: -18.205,
            swap_short: 10.965,
            trading_hours: 'Sun 23:05 - Fri 21:45 Daily Break: 22:00 - 23:00 GMT',
        },
        {
            is_row: true,
            symbol: 'XPTUSD',
            instrument: 'XPTUSD',
            contract_size: '100 oz',
            base_currency: 'XPT',
            minimum_size: 0.01,
            minimum_spread: 0.16,
            target_spread: 2.94,
            max_effective_leverage: 500,
            margin_requirement: 0.2,
            swap_long: -18.446,
            swap_short: 4.938,
            trading_hours: 'Sun 23:05 - Fri 21:45 Daily Break: 22:00 - 23:00 GMT',
        },
        {
            is_row: true,
            symbol: 'XZNUSD',
            instrument: 'XZNUSD',
            contract_size: '100 ton',
            base_currency: 'XZN',
            minimum_size: 0.01,
            minimum_spread: 2.84,
            target_spread: 4.36,
            max_effective_leverage: 500,
            margin_requirement: 0.2,
            swap_long: 8.644,
            swap_short: -18.205,
            trading_hours: 'Mon - Fri 01:05 - 19:00 GMT',
        },
        {
            is_row: true,
            symbol: 'CL_BRENT',
            instrument: 'CL_BRENT',
            contract_size: '1 barrel',
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.05,
            target_spread: 0.069,
            max_effective_leverage: 50,
            margin_requirement: 2.0,
            swap_long: -7.464,
            swap_short: 3.553,
            trading_hours: 'Mon Friday 01:00 - 22:00 GMT',
        },
        {
            is_row: true,
            symbol: 'WTI_OIL',
            instrument: 'WTI_OIL',
            contract_size: '1 barrel',
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.051,
            target_spread: 0.068,
            max_effective_leverage: 50,
            margin_requirement: 2.0,
            swap_long: -5.313,
            swap_short: 2.023,
            trading_hours: 'Sun 23:00 - Fri 22:00 Daily Break: 22:00 - 23:00 GMT',
        },
    ],
}
export default commodities_specification
