import styled from 'styled-components'

const StyledGrid = styled.div`
    height: 100dvh;
    display: grid;
    grid-template-columns: 1fr auto auto 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        '. navbar navbar .'
        '. intro terminal .'
        '. pricing pricing .'
        'newsletter newsletter newsletter newsletter'
        '. footer footer .';

    @media only screen and (max-width: ${({ theme }) => theme.devices.mobile}) {
        grid-template-columns: 1fr auto 1fr;
        grid-template-rows: auto 1fr auto;
        grid-template-areas:
            '. navbar .'
            '. intro .'
            '. terminal .'
            '. pricing .'
            'newsletter newsletter newsletter'
            '. footer .';
    }
`

const Grid = ({ children }: React.PropsWithChildren) => {
    return <StyledGrid>{children}</StyledGrid>
}

export default Grid
