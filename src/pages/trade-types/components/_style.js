import styled from 'styled-components'
import { Container, Flex } from 'components/containers'
import device from 'themes/device'
import Patterns from 'images/common/trade-types/trade-patterns.png'

const SmallContainer = styled(Container)`
    width: 60%;
    max-width: 62.5rem;

    @media ${device.desktop} {
        max-width: 800px;
    }
    @media ${device.laptopL} {
        width: 60%;
    }
    @media ${device.desktopL} {
        max-width: 1000px;
    }
    @media ${device.tabletL} {
        width: 90%;
        padding-left: 0;
        padding-right: 0;
    }
`

const Hero = styled(Flex)`
    height: 40rem;
    background: var(--color-black);
    background-image: url(${Patterns});
    background-size: cover;
`

const Ul = styled.ul`
    list-style-type: disc;
    font-size: var(--text-size-s);
    padding-left: 1.8rem;

    & > li {
        margin-bottom: 0.8rem;
    }
    & > li:last-child {
        margin-bottom: 0;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 4rem;
`

const OptionGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2.3rem;
    grid-row-gap: 1.6rem;
    margin-bottom: 2.4rem;
`

const OptionGridSecondary = styled(OptionGrid)`
    grid-row-gap: 2.4rem;
`

const Card = styled.article`
    position: relative;
    overflow: hidden;
    border-radius: 16px;
    box-shadow: 0 4px 8px 0 rgba(14, 14, 14, 0.1);
    background-color: var(--color-white);
    height: 29.6rem;
    padding: 2.4rem;
    max-width: 28.2rem;
`

export { SmallContainer, Hero, Ul, Grid, Card, OptionGrid, OptionGridSecondary }
