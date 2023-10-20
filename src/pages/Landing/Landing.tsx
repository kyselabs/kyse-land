import Animator from './components/Animator'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import Terminal from './components/Terminal'
import Pricing from './components/Pricing'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

const Landing = () => {
    return (
        <>
            <Animator />

            <Navbar />
            <Introduction />
            <Terminal />
            <Pricing />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Landing
