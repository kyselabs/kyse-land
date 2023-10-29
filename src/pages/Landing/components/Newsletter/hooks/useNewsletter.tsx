import axios from 'axios'

import useGeo from './useGeo'

const url = 'https://mqhg3jvnvl.execute-api.us-east-1.amazonaws.com/production/leads'

const waitFor = (seconds: number) =>
    new Promise((resolve: Function) => setTimeout(() => resolve(), seconds * 1000))

const useNewsletter = () => {
    const { getGeo } = useGeo()

    const signUp = async (email: string): Promise<boolean> => {
        if (!import.meta.env.PROD) {
            await waitFor(2)
            return true
        }

        const payload = { ...(await getGeo()), email, user_agent: navigator.userAgent }
        return await axios
            .post(url, payload, {
                headers: { 'Content-Type': 'application/json' },
            })
            .then(() => true)
            .catch(() => false)
    }

    return { signUp }
}

export default useNewsletter
