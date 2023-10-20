import styled from 'styled-components'

const Container = styled.span`
    font-family: Unbounded;
    font-size: 32px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
    }
`

const Kyse = () => <Container>kyse</Container>

export default Kyse
