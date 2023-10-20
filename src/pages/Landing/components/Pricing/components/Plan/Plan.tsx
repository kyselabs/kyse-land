import { Button, Badge } from 'antd'
import styled from 'styled-components'

import Feature from './Feature'

interface PlanProps {
    ribbon?: string
    name: string
    price: string
    buttonText: string
    features: FeatureDict[]
}

const StyledPlan = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    background-image: linear-gradient(to bottom right, #2d3436, #636e72);
    color: #b2bec3;
    border-radius: 8px;
    padding: 18px;
    width: 320px;
    min-height: 400px;
`

const Name = styled.span`
    font-size: 20px;
    font-weight: 400;
    color: #b2bec3;
`

const Price = styled.span`
    font-size: 32px;
    font-weight: bold;
    color: white;
`

const Features = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-top: 24px;
`

const Plan = ({ ribbon, name, price, buttonText, features }: PlanProps) => {
    const component = (
        <StyledPlan>
            <Name>{name}</Name>
            <Price>{price}</Price>
            <Features>
                {features.map(({ icon, name, text, disabled }, i) => (
                    <Feature key={i} disabled={disabled} icon={icon} name={name} value={text} />
                ))}
            </Features>
            <Button type="primary" size="large">
                {buttonText}
            </Button>
        </StyledPlan>
    )

    return ribbon ? (
        <Badge.Ribbon color="green" text={ribbon}>
            {component}
        </Badge.Ribbon>
    ) : (
        component
    )
}

export default Plan
