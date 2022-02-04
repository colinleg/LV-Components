module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.vue', './index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        minHeight: {
            '10vh': '10vh',
            '20vh': '20vh',
            '25vh': '25vh',
            '30vh': '30vh',
            '40vh': '40vh',
            '50vh': '50vh',
            '60vh': '60vh',
            '70vh': '70vh',
            '80vh': '80vh',
            '90vh': '90vh',
            '1r': '1rem',
            '2r': '2rem',
            '3r': '3rem',
            '4r': '4rem',
            '5r': '5rem',
            '6r': '6rem',
            '7r': '7rem',
            '8r': '8rem',
            '9r': '9rem',
            '10r': '10rem',
            '15r': '15rem',
            '24r': '24rem',
            '48r': '48rem'
        },

        borderWidth: {
            DEFAULT: '1px',
            0: '0px',
            2: '2px',
            4: '4px',
            8: '8px',
            '.1r': '.1rem',
            '.2r': '.2rem',
            '.3r': '.3rem',
            '.4r': '.4rem',
            '.5r': '.5rem',
            '.6r': '.6rem',
            '.7r': '.7rem',
            '.8r': '.8rem',
            '.9r': '.9rem',
            '1r': '1rem',
            '2r': '2rem',
            '3r': '3rem',
            '4r': '4rem',
            '5r': '5rem',
            '6r': '6rem',
            '7r': '7rem',
            '8r': '8rem',
            '9r': '9rem',
            '10r': '10rem',
            '11r': '11rem',
            '12r': '12rem',
            '13r': '13rem',
            '14r': '14rem',
            '15r': '15rem',
        },
        zIndex: {
            '1000': '1000',
            '2000': '2000',
            '3000': '3000',
            '4000': '4000',
            '5000': '5000',
            '6000': '6000',
            '7000': '7000',
            '8000': '8000',
            '9000': '9000',
            '10000': '10000',
            '11000': '11000',

        },
        extend: {
            // Ma palette de couleur
            colors: {
                myDark: {
                    100: '#141516',
                    200: '#1D1F20',
                    300: '#27292B',
                    400: '#303336',
                    500: '#2c3135'
                },
                myWhite: 'whitesmoke',
                myGray: {
                    500: '#e7e4df'
                },
                myRed: {
                    500: '#bd1e51',
                    600: '#9a1841'
                },
                myYellow: {
                    500: '#f1b814',
                    600: '#D4A111'
                },
                myGreen: {
                    500: '#95d978',
                    600: '#62aa43'
                },
                myBlue: {
                    500: '#4893bd',
                    600: '#337AA2',
                    900: '#0B171E'
                }
            },
            maxHeight: {
                '2screen': '200vh',
                '3screen': '300vh',
            },
            // Les spacers perso notemment vh vw
            spacing: {
                '10vh': '10vh',
                '20vh': '20vh',
                '25vh': '25vh',
                '30vh': '30vh',
                '40vh': '40vh',
                '50vh': '50vh',
                '60vh': '60vh',
                '70vh': '70vh',
                '80vh': '80vh',
                '90vh': '90vh',
                'headmin': 'calc(100vh - 6rem)',
                'headmin+': 'calc(100vh - 4.75rem)',
                '100+': 'calc(100% + 1%)',
                'screen+': 'calc(100vh + 2rem)'
            }
        },
    },
    plugins: [],
}