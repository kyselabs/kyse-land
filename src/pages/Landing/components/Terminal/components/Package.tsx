import { Green, White } from './Colors'

interface PackageProps {
    from: string
    to: string
}

const Package = ({ from, to }: PackageProps) => {
    return (
        <div>
            <div>
                <Green>[+] Upgrade</Green> <White>{from}</White> <Green>to</Green>{' '}
                <White>{to}</White>
            </div>
        </div>
    )
}

export default Package
