import styled from 'styled-components'
import ReactTyped from 'react-typed'
import { useTranslation } from 'react-i18next'

const Meaning = styled.h1`
    color: #e84393;
    background: linear-gradient(140deg, #e84393, #fab1a0);
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

    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 350px;
        font-size: 30px;
    }
`

const TypeDiv = styled.div`
    font-size: 22px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
    }
`

const Language = styled(ReactTyped)`
    color: white;
`

const Container = styled.div`
    grid-area: intro;

    @media (max-width: ${({ theme }) => theme.mobile}) {
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
