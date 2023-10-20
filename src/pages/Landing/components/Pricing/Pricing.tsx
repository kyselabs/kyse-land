import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import Plan, { FeaturePackage, FeatureContainer, FeatureSource } from './components/Plan'

const Container = styled.div`
    grid-area: pricing;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;
    z-index: 0;
    margin-top: 64px;

    @media (max-width: ${({ theme }) => theme.devices.mobile}) {
        flex-direction: column;
    }
`

const Pricing = () => {
    const { t } = useTranslation()

    return (
        <Container>
            <Plan
                name="Free"
                price="R$ 0"
                buttonText={t('pricing free')}
                features={[
                    FeaturePackage(`200 ${t('pricing tests')}`),
                    FeatureContainer(`200 ${t('pricing tests')}`),
                    FeatureSource(t('pricing soon')),
                ]}
            />

            <Plan
                ribbon={t('pricing popular')}
                name="Team"
                price="R$ 79"
                buttonText={t('pricing buy')}
                features={[
                    FeaturePackage(t('pricing unlimited')),
                    FeatureContainer(`200 ${t('pricing tests')}`),
                    FeatureSource(t('pricing soon')),
                ]}
            />

            <Plan
                name="Enterprise"
                price={t('pricing custom')}
                buttonText={t('pricing contact')}
                features={[
                    FeaturePackage(t('pricing custom')),
                    FeatureContainer(t('pricing custom')),
                    FeatureSource(t('pricing soon')),
                ]}
            />
        </Container>
    )
}

export default Pricing
