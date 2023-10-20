import styled from 'styled-components'
import Cli from './components/Cli'

const Container = styled.div`
    grid-area: terminal;
    z-index: 0;
    margin-top: 64px;
`

const Terminal = () => {
    return (
        <Container>
            <Cli />
        </Container>
    )
}

export default Terminal
