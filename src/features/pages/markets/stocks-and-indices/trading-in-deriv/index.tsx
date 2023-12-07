import React from 'react'
import { Features } from '@deriv-com/blocks'
import { cards } from '../../forex/trading-in-deriv/data'
import { localize } from 'components/localization'

const TradingInDeriv = () => {
    const filteredCards = cards.filter((card) => card.header !== localize('_t_Options_t_'))
    return (
        <>
            <Features.Card
                className="!bg-background-primary-base"
                title={localize('_t_Trading stocks & indices on Deriv_t_')}
                cards={filteredCards}
                cols="three"
            />
        </>
    )
}
export default TradingInDeriv
