const useEmail = () => {
    const isValid = (email: string) => {
        const pattern = /^[\w.-]+@[\w.-]+\.[a-zA-Z0-9]{2,4}$/
        return pattern.test(email)
    }
    return { isValid }
}

export default useEmail
