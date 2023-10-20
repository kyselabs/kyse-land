import styled from 'styled-components'

import Vuln from './Vuln'
import Package from './Package'

import { Blue, Navy } from './Colors'

const Container = styled.div`
    background-image: linear-gradient(to right bottom, rgb(34, 37, 42), rgb(25, 27, 31));
    border-radius: 8px;
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
        monospace;
    font-size: 14px;
    padding: 20px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 12px;
        overflow-x: scroll;
    }
`

const Cli = () => {
    return (
        <Container>
            $ kyse test
            <br />
            <br />
            <p>
                Vendor: <Blue>PyPI</Blue> (<Navy>requirements.txt</Navy>)
            </p>
            <br />
            <Package from="cryptography@41.0.2" to="cryptography@41.0.4" />
            <Vuln
                severity="Low"
                summary="pyca/cryptography's wheels include vulnerable OpenSSL"
                info="pyca/cryptography's wheels include a statically linked copy of OpenSSL."
                vuln="GHSA-jm77-qphf-c4w8 - [https://vuln.kyse.io/fdd96a]"
            />
            <br />
            <Vuln
                severity="Low"
                summary="Vulnerable OpenSSL included in cryptography wheels"
                info="pyca/cryptography's wheels include a statically linked copy of OpenSSL."
                vuln="GHSA-v8gr-m533-ghj9 - [https://vuln.kyse.io/e35479]"
            />
            <br />
            <br />
            <Package from="flask@2.2.3" to="flask@2.3.2" />
            <Vuln
                severity="High"
                summary="Flask vulnerable to possible disclosure of permanent session cookie"
                info="When all of the following conditions are met, a response containing data intended for..."
                vuln="GHSA-m2qf-hxjv-5gpq - [https://vuln.kyse.io/cca097]"
            />
            <br />
        </Container>
    )
}

export default Cli
