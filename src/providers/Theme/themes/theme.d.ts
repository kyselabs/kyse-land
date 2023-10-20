import devices from '../devices'
import color from './dark/color'
import colors from './dark/colors'

interface Tones {
    base: string
}

interface Theme {
    name: string
    devices: { [key in keyof typeof devices]: string }
    color: { [key in keyof typeof color]: Tones }
    colors: { [key in keyof typeof colors]: string }
}

type Color = keyof typeof colors

declare module 'styled-components' {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface DefaultTheme extends Theme {}
}

export { Theme, Color }
