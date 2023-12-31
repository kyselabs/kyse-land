import styled from 'styled-components'
import ReactTyped from 'react-typed'
import { useTranslation } from 'react-i18next'

const Meaning = styled.h1`
    color: ${({ theme }) => theme.colors.pink400};
    background: linear-gradient(
        140deg,
        ${({ theme }) => theme.colors.pink400},
        ${({ theme }) => theme.colors.pink800}
    );
    background-clip: text;
    box-decoration-break: clone;
    -moz-background-clip: text;
    -webkit-background-clip: text;
    -webkit-box-decoration-break: clone;
    -webkit-text-fill-color: transparent;
    letter-spacing: 0.06rem;
    line-height: 3rem;
    font-size: 36px;
    width: 500px;

    @media (max-width: ${({ theme }) => theme.devices.mobile}) {
        width: 350px;
        font-size: 30px;
    }
`

const TypeDiv = styled.div`
    font-size: 22px;

    @media (max-width: ${({ theme }) => theme.devices.mobile}) {
    }
`

const Language = styled(ReactTyped)`
    color: ${({ theme }) => theme.colors.white};
`

const Container = styled.div`
    grid-area: intro;
    display: flex;
    flex-direction: column;

    margin-top: 32px;

    @media (max-width: ${({ theme }) => theme.devices.mobile}) {
        margin-top: 16px;
    }
`

const Introduction = () => {
    const { t } = useTranslation()

    return (
        <Container>
            <Meaning>{t('intro')}</Meaning>
            <br />
            <TypeDiv>
                {t('analyzer')}{' '}
                <Language
                    loop
                    typeSpeed={140}
                    backSpeed={120}
                    strings={['JavaScript', 'Python', 'Go', 'Java', 'Ruby', 'Rust', 'C#', 'PHP']}
                    smartBackspace
                    shuffle={false}
                    backDelay={2000}
                    fadeOut={false}
                    fadeOutDelay={1000}
                    loopCount={0}
                    showCursor
                    cursorChar="|"
                />
            </TypeDiv>
        </Container>
    )
}

export default Introduction
