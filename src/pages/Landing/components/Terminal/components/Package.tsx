import styled from 'styled-components'
import { Green, White } from './Colors'

interface PackageProps {
    from: string
    to: string
}

const Container = styled.div`
    display: inline-flex;
    flex-direction: column;
    white-space: nowrap;
`

const Package = ({ from, to }: PackageProps) => {
    return (
        <Container>
            <div>
                <Green>[+] Upgrade</Green> <White>{from}</White> <Green>to</Green>{' '}
                <White>{to}</White>
            </div>
        </Container>
    )
}

export default Package
