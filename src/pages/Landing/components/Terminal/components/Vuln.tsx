import styled from 'styled-components'

interface VulnProps {
    severity: string
    summary: string
    info: string
    vuln: string
}

const Container = styled.div``

const Scroller = styled.div`
    overflow-x: scroll;
`

const Vuln = ({ severity, summary, info, vuln }: VulnProps) => {
    return (
        <Container>
            <div>
                [ {severity} ] {summary}
            </div>
            <Scroller>Info: {info}</Scroller>
            <Scroller>Vuln: {vuln}</Scroller>
        </Container>
    )
}

export default Vuln
