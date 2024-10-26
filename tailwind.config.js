import flowbitePlugin from 'flowbite/plugin'

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                // flowbite-svelte
                primary: {
                    50: '#FFF5F2',
                    100: '#FFF1EE',
                    200: '#FFE4DE',
                    300: '#FFD5CC',
                    400: '#FFBCAD',
                    500: '#FE795D',
                    600: '#EF562F',
                    700: '#EB4F27',
                    800: '#CC4522',
                    900: '#A5371B'
                },
                secondary: {
                    50: '#F2F2F2',
                    100: '#E6E6E6',
                    200: '#C2C2C2',
                    300: '#9E9E9E',
                    400: '#555555',
                    500: '#0C0C0C',
                    600: '#0B0B0B',
                    700: '#080808',
                    800: '#060606',
                    900: '#040404'
                },
            }
        }
    },
    plugins: [flowbitePlugin]
};
