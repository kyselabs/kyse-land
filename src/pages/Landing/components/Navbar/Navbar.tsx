import styled from 'styled-components'

import { Kyse } from 'components'
import { useTranslation } from 'react-i18next'

const TryForFree = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    width: 220px;
    height: 48px;
    background-color: ${({ theme }) => theme.colors.purple400};
    border-radius: 24px;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.purple200};
    }

    @media (max-width: ${({ theme }) => theme.devices.mobile}) {
        width: 180px;
        height: 32px;
        font-size: 16px;
    }
`

const Container = styled.div`
    grid-area: navbar;
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.white};
    height: 48px;
    padding: 32px 0;

    @media (max-width: ${({ theme }) => theme.devices.mobile}) {
        padding-top: 20px;
    }
`

const Navbar = () => {
    const { t } = useTranslation()

    return (
        <Container>
            <Kyse />
            <div>
                <TryForFree>{t('try for free')}</TryForFree>
            </div>
        </Container>
    )
}

export default Navbar
