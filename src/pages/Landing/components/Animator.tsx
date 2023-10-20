import styled from 'styled-components'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const AnimatorContainer = styled(Particles)`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
`

const Animator = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const particlesInit = async (main: any) => {
        await loadFull(main)
    }

    return (
        <AnimatorContainer
            init={particlesInit}
            options={{
                detectRetina: true,
                fpsLimit: 120,
                interactivity: {
                    detectsOn: 'canvas',
                    events: {
                        onHover: {
                            enable: false,
                            mode: 'bubble',
                        },
                        resize: true,
                    },
                    modes: {
                        bubble: {
                            distance: 40,
                            duration: 2,
                            opacity: 8,
                            size: 6,
                            speed: 3,
                        },
                    },
                },
                particles: {
                    color: {
                        value: '#ff0000',
                        animation: {
                            enable: true,
                            speed: 20,
                            sync: true,
                        },
                    },
                    lineLinked: {
                        blink: false,
                        color: 'random',
                        consent: false,
                        distance: 30,
                        enable: true,
                        opacity: 0.3,
                        width: 0.5,
                    },
                    move: {
                        attract: {
                            enable: false,
                            rotate: {
                                x: 600,
                                y: 1200,
                            },
                        },
                        bounce: false,
                        direction: 'none',
                        enable: true,
                        outMode: 'bounce',
                        random: true,
                        speed: 0.5,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: false,
                            area: 2000,
                        },
                        limit: 0,
                        value: 200,
                    },
                    opacity: {
                        animation: {
                            enable: true,
                            minimumValue: 0.05,
                            speed: 2,
                            sync: false,
                        },
                        random: false,
                        value: 1,
                    },
                    shape: {
                        type: 'circle',
                    },
                    size: {
                        animation: {
                            enable: false,
                            minimumValue: 0.1,
                            speed: 40,
                            sync: false,
                        },
                        random: true,
                        value: 1,
                    },
                },
                polygon: {
                    draw: {
                        enable: true,
                        lineColor: 'rgba(255,255,255,0.2)',
                        lineWidth: 0.3,
                    },
                    move: {
                        radius: 10,
                    },
                    inlineArrangement: 'equidistant',
                    scale: 0.5,
                    type: 'inline',
                },
            }}
        />
    )
}

export default Animator
