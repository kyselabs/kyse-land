import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const Container = styled.div`
    grid-area: footer;
    display: flex;
    justify-content: center;
    height: 48px;
    margin-top: 64px;

    @media (max-width: ${({ theme }) => theme.devices.mobile}) {
        height: 72px;
    }
`

const Footer = () => {
    const { t } = useTranslation()

    return (
        <Container>
            © {new Date().getFullYear()} {t('copyright')}
        </Container>
    )
}

export default Footer
