import styled from 'styled-components'

interface VulnProps {
    severity: string
    summary: string
    info: string
    vuln: string
}

const Container = styled.div`
    color: ${({ theme }) => theme.colors.gray600};
`

const Scroller = styled.div`
    white-space: nowrap;
`

interface Colorable {
    color: string
}

const Severity = styled.div<Colorable>`
    color: ${(props) => props.color};
`

type ColorMap = {
    [key: string]: string
    Low: string
    Medium: string
    High: string
    Critical: string
}

const colors: ColorMap = {
    Low: '#b2bec3',
    Medium: '#fdcb6e',
    High: '#e17055',
    Critical: '#d63031',
}

const Vuln = ({ severity, summary, info, vuln }: VulnProps) => {
    const color = colors[severity] || 'inherit'

    return (
        <Container>
            <Scroller>
                <Severity color={color}>
                    [ {severity} ] {summary}
                </Severity>
            </Scroller>
            <Scroller>* Info: {info}</Scroller>
            <Scroller>* Vuln: {vuln}</Scroller>
        </Container>
    )
}

export default Vuln
