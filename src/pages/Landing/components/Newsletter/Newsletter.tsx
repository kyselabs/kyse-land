import styled from 'styled-components'

import { useEffect, useState } from 'react'
import { Button, Input, Spin } from 'antd'
import { useTranslation } from 'react-i18next'

import { useEmail, useNewsletter } from './hooks'

const EmailInput = styled(Input)`
    width: 320px;
    background-color: ${({ theme }) => theme.colors.purple600};
    border-color: #5040c8;
    color: ${({ theme }) => theme.colors.gray400};
    border-radius: 80px;
    height: 48px;
    padding: 0 1.5rem;

    &:disabled:hover {
        background-color: ${({ theme }) => theme.colors.gray800};
        color: inherit;
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.gray800};
        color: ${({ theme }) => theme.colors.gray400};
    }

    &:focus {
        background-color: ${({ theme }) => theme.colors.gray800};
        color: ${({ theme }) => theme.colors.gray400};
    }

    &:disabled {
        background-color: ${({ theme }) => theme.colors.gray800};
        opacity: 0.5;
    }

    @media (max-width: ${({ theme }) => theme.devices.mobile}) {
        width: 260px;
    }
`

const SignUpButton = styled(Button)`
    border-radius: 80px;
    height: 46px;

    background-color: ${({ theme }) => theme.colors.gray800};

    &:disabled {
        background-color: ${({ theme }) => theme.colors.gray800};
        opacity: 0.5;
    }
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
    width: 100dvi;

    @media (max-width: ${({ theme }) => theme.devices.mobile}) {
        margin-top: 64px;
    }
`

const Title = styled.h1`
    color: ${({ theme }) => theme.colors.white};
`

const Tip = styled.p`
    display: flex;

    align-items: center;
    text-align: center;
    height: 32px;

    @media (max-width: ${({ theme }) => theme.devices.mobile}) {
        width: 340px;
    }
`

const Body = styled.div`
    display: flex;
    gap: 12px;

    @media (max-width: ${({ theme }) => theme.devices.mobile}) {
        margin-top: 14px;
    }
`

const Signed = styled.span`
    color: ${({ theme }) => theme.colors.green600};
`

const Spinner = styled(Spin)`
    border-radius: 90px;
`

const EmojiParty = () => <>&#127881;</>

const Newsletter = () => {
    const { t } = useTranslation()

    const { isValid } = useEmail()
    const { signUp } = useNewsletter()

    const [email, setEmail] = useState('')
    const [signed, setSigned] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

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
                    <Signed>
                        <EmojiParty /> {t('newsletter signed up')}
                    </Signed>
                )}
            </Tip>

            <Body>
                <EmailInput
                    type="email"
                    size="large"
                    value={email}
                    disabled={isLoading}
                    placeholder={t('newsletter your email')}
                    onChange={({ target }) => setEmail(target.value)}
                />
                <SignUpButton
                    type="default"
                    disabled={isLoading || !isValid(email)}
                    onClick={async () => {
                        setIsLoading(true)

                        if (await signUp(email)) {
                            setEmail('')
                            setSigned(true)
                        }

                        setIsLoading(false)
                    }}
                >
                    <Spinner spinning={isLoading}>{t('newsletter sign up')}</Spinner>
                </SignUpButton>
            </Body>
        </Container>
    )
}

export default Newsletter
