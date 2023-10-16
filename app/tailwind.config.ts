import plugin from 'tailwindcss/plugin'

import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [
        plugin(({ addUtilities }) => {
            addUtilities({
                '.absolute-center': {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                },
                '.drag-none': {
                    '-webkit-user-drag': 'none',
                    '-khtml-user-drag': 'none',
                    '-moz-user-drag': 'none',
                    '-o-user-drag': 'none',
                    'user-drag': 'none',
                },
            })
        }),
    ],
}
export default config
