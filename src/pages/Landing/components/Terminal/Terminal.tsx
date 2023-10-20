import styled from 'styled-components'
import Cli from './components/Cli'

const Container = styled.div`
    grid-area: terminal;
    z-index: 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 32px;

    @media (max-width: ${({ theme }) => theme.devices.mobile}) {
        margin-top: 64px;
    }
`

const Terminal = () => {
    return (
        <Container>
            <Cli />
        </Container>
    )
}

export default Terminal
