import styled from 'styled-components'

import { useEffect, useState } from 'react'
import { Button, Input } from 'antd'
import { useTranslation } from 'react-i18next'

import { useEmail, useNewsletter } from './hooks'

const EmailInput = styled(Input)`
    width: 320px;
    background-color: #a29bfe;
    border-color: #5040c8;
    color: white;
    border-radius: 80px;
    height: 48px;
    padding: 0 1.5rem;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 260px;
    }
`

const SignUpButton = styled(Button)`
    border-radius: 80px;
    height: 46px;
`

const Container = styled.div`
    grid-area: newsletter;
    z-index: 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    justify-content: center;
    background-color: #5040c8;
    min-height: 220px;
    margin-top: 64px;
    padding: 24px 0;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin-top: 32px;
    }
`

const Title = styled.h1`
    color: white;
`

const Tip = styled.p`
    height: 32px;
`

const Body = styled.div`
    display: flex;
    gap: 12px;
`

const Signed = styled.span`
    color: #55efc4;
`

const Newsletter = () => {
    const { t } = useTranslation()

    const { isValid } = useEmail()
    const { signUp } = useNewsletter(false)

    const [email, setEmail] = useState('')
    const [signed, setSigned] = useState(false)

    useEffect(() => {
        if (email) setSigned(false)
    }, [email])

    return (
        <Container>
            <Title>{t('newsletter')}</Title>
            <Tip>
                {!signed ? (
                    t('newsletter tip')
                ) : (
                    <Signed>&#127881; {t('newsletter signed up')}</Signed>
                )}
            </Tip>

            <Body>
                <EmailInput
                    type="email"
                    size="large"
                    value={email}
                    placeholder={t('newsletter your email')}
                    onChange={({ target }) => setEmail(target.value)}
                />
                <SignUpButton
                    type="default"
                    disabled={!isValid(email)}
                    onClick={async () => {
                        if (await signUp(email)) {
                            setEmail('')
                            setSigned(true)
                        }
                    }}
                >
                    {t('newsletter sign up')}
                </SignUpButton>
            </Body>
        </Container>
    )
}

export default Newsletter
