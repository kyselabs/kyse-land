import axios from 'axios'

const url = 'https://json.geoiplookup.io'

const useGeo = () => {
    const getGeo = () => axios.get(url).then(({ data }) => data)
    return { getGeo }
}

export default useGeo
