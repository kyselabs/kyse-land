import styled from 'styled-components'

interface PackageProps {
    from: string
    to: string
}

const Container = styled.div`
    display: inline-flex;
    flex-direction: column;
    white-space: nowrap;
`

const Upgrade = styled.span`
    color: ${({ theme }) => theme.colors.green400};
`

const PackageName = styled.span`
    color: ${({ theme }) => theme.colors.white};
`

const Package = ({ from, to }: PackageProps) => {
    return (
        <Container>
            <div>
                <Upgrade>
                    [+] Upgrade <PackageName>{from}</PackageName> to
                </Upgrade>{' '}
                <PackageName>{to}</PackageName>
            </div>
        </Container>
    )
}

export default Package
