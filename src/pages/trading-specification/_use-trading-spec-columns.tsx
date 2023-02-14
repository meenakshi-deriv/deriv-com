import { createColumnHelper } from '@tanstack/react-table'
import React, { useMemo } from 'react'
import { THeaders } from './_types'
import { TableCellGroup, TableCell, TableHeaderCell } from './components/_elements'
import { Localize } from 'components/localization'

const liveMarketColumnHelper = createColumnHelper<THeaders>()

const useLiveColumns = () => {
    const columns = useMemo(() => {
        return [
            liveMarketColumnHelper.accessor('instrument', {
                header: () => <TableHeaderCell text={<Localize translate_text="Instrument" />} />,
                cell: (info) => info.getValue() && <TableCellGroup data={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('contract_size', {
                header: () => (
                    <TableHeaderCell text={<Localize translate_text="Contract size" />} />
                ),
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('base_currency', {
                header: () => (
                    <TableHeaderCell text={<Localize translate_text="Base currency" />} />
                ),
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('minimum_size', {
                header: () => <TableHeaderCell text={<Localize translate_text="Minimum size" />} />,
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('minimum_spread', {
                header: () => (
                    <TableHeaderCell text={<Localize translate_text="Minimum Spread" />} />
                ),
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('target_spread', {
                header: () => (
                    <TableHeaderCell text={<Localize translate_text="Target Spread" />} />
                ),
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('max_effective_leverage', {
                header: () => (
                    <TableHeaderCell text={<Localize translate_text="Max effective leverage" />} />
                ),
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('margin_requirement', {
                header: () => (
                    <TableHeaderCell text={<Localize translate_text="Margin requirement" />} />
                ),
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('swap_long', {
                header: () => <TableHeaderCell text={<Localize translate_text="Swap long" />} />,
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('swap_short', {
                header: () => <TableHeaderCell text={<Localize translate_text="Swap short" />} />,
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
            liveMarketColumnHelper.accessor('trading_hours', {
                header: () => (
                    <TableHeaderCell text={<Localize translate_text="Trading hours" />} />
                ),
                cell: (info) => <TableCell text={info.getValue()} />,
            }),
        ]
    }, [])

    return columns
}

export default useLiveColumns
