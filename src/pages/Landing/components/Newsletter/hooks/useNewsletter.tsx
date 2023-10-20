import axios from 'axios'

import useGeo from './useGeo'

const url = 'https://mqhg3jvnvl.execute-api.us-east-1.amazonaws.com/production/leads'

const useNewsletter = () => {
    const { getGeo } = useGeo()

    const signUp = async (email: string): Promise<boolean> => {
        if (!import.meta.env.PROD) return true

        const payload = { ...(await getGeo()), email, user_agent: navigator.userAgent }
        const response = await axios.post(url, payload, {
            headers: { 'Content-Type': 'application/json' },
        })
        return response.status == 201
    }

    return { signUp }
}

export default useNewsletter
