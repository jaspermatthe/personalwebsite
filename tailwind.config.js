/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'white-scrollbar': 'rgba(249,249,249,0.4)',
      },
      fontFamily: {
        'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        'serif': ['DM Serif Text', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif']
      },
      typography: (theme) => ({
        DEFAULT: {
            css: {
                p: {
                    fontSize: '1.125rem',
                },
                ul: {
                    fontSize: '1.125rem',
                },
                table: {
                    fontSize: '1.125rem',
                },
                pre: {
                    color: theme('colors.gray.800'),
                    backgroundColor: theme('colors.gray.200'),
                },
            },
        },
        dark: {
          css: [
            {
              color: theme('colors.gray.300'),
              '[class~="lead"]': {
                color: theme('colors.gray.300'),
              },
              a: {
                color: theme('colors.white'),
              },
              strong: {
                color: theme('colors.white'),
              },
              'ol > li::before': {
                color: theme('colors.gray.300'),
              },
              'ul > li::before': {
                backgroundColor: theme('colors.gray.600'),
              },
              hr: {
                borderColor: theme('colors.gray.200'),
              },
              blockquote: {
                color: theme('colors.gray.200'),
                borderLeftColor: theme('colors.gray.600'),
              },
              h1: {
                color: theme('colors.white'),
              },
              h2: {
                color: theme('colors.white'),
              },
              h3: {
                color: theme('colors.white'),
              },
              h4: {
                color: theme('colors.white'),
              },
              'figure figcaption': {
                color: theme('colors.gray.300'),
              },
              code: {
                color: theme('colors.white'),
              },
              'a code': {
                color: theme('colors.white'),
              },
              pre: {
                color: theme('colors.gray.200'),
                backgroundColor: theme('colors.gray.800'),
              },
              thead: {
                color: theme('colors.white'),
                borderBottomColor: theme('colors.gray.300'),
              },
              'thead th': {
                color: theme('colors.white'),
                borderBottomColor: theme('colors.gray.300'),
              },
              'tbody tr': {
                borderBottomColor: theme('colors.gray.600'),
              },
            },
          ],
        },
      }),
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-filters')
  ],
}
