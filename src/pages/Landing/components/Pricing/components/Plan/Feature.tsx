import styled from 'styled-components'
import { t } from 'i18next'
import { FiBox as DockerIcon, FiLayers as PackageIcon, FiCode as SourceIcon } from 'react-icons/fi'

interface FeatureProps {
    disabled?: boolean
    icon: JSX.Element
    name: string
    value: string
    period?: string
}

interface Disableable {
    disabled?: boolean
}

const FeaturePackage = (value: string): FeatureDict => ({
    icon: <PackageIcon size={22} color="#74b9ff" />,
    name: t('pricing packages'),
    text: value,
})

const FeatureContainer = (value: string): FeatureDict => ({
    icon: <DockerIcon size={22} color="#e17055" />,
    name: t('pricing containers'),
    text: value,
})

const FeatureSource = (value: string): FeatureDict => ({
    icon: <SourceIcon size={22} color="#00cec9" />,
    name: t('pricing source'),
    text: value,
    disabled: true,
})

const Feature = ({ icon, name, value, period, disabled = false }: FeatureProps) => {
    return (
        <StyledFeature disabled={disabled}>
            <Div>
                <>{icon}</>
                <>{name}</>
            </Div>
            <Div>
                {value} {period}
            </Div>
        </StyledFeature>
    )
}

const StyledFeature = styled.div<Disableable>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`

const Div = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

export { FeaturePackage, FeatureContainer, FeatureSource }
export default Feature
