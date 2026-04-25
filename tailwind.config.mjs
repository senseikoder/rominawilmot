/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#1798e3',
        'secondary': '#ea8c12',
        'accent-orange': '#FF8C33',
        'on-background': '#1A1A1A',
        surface: '#F8FAFC',
        'surface-container': '#F1F5F9',
        'surface-dim': '#dcd9d9',
        'on-primary-container': '#002c47',
        'surface-container-low': '#f6f3f2',
        'primary-container': '#1798e3',
        'secondary-fixed-dim': '#ffb86d',
        'surface-container-high': '#eae7e7',
        'tertiary-fixed-dim': '#c8c6c6',
        'secondary-container': '#fda130',
        'surface': '#fbf9f8',
        'tertiary-container': '#757474',
        'primary-fixed': '#cde5ff',
        'background': '#fbf9f8',
        'tertiary-fixed': '#e4e2e1',
        'primary-fixed-dim': '#93ccff',
        'outline': '#6f7882',
        'on-secondary-fixed-variant': '#683c00',
        'on-primary-fixed': '#001d32',
        'on-error-container': '#93000a',
        'inverse-on-surface': '#f3f0f0',
        'on-background': '#1b1c1c',
        'on-tertiary-fixed-variant': '#474747',
        'on-tertiary-fixed': '#1b1c1c',
        'surface-variant': '#e4e2e1',
        'surface-tint': '#006398',
        'inverse-surface': '#303030',
        'outline-variant': '#bfc7d2',
        'surface-container-highest': '#e4e2e1',
        'on-error': '#ffffff',
        'error': '#ba1a1a',
        'on-secondary-fixed': '#2c1600',
        'tertiary': '#5c5c5c',
        'error-container': '#ffdad6',
        'surface-container': '#f0eded',
        'surface-bright': '#fbf9f8',
        'on-primary-fixed-variant': '#004b74',
        'on-secondary': '#ffffff',
        'secondary-fixed': '#ffdcbd',
   
        'inverse-primary': '#93ccff',

        'on-tertiary-container': '#fffcfb',
        'surface-container-lowest': '#ffffff',
        'on-surface-variant': '#3f4851',
        'on-surface': '#1b1c1c',
        'on-secondary-container': '#693d00',
        'on-tertiary': '#ffffff',
        'on-primary': '#ffffff'
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px'
      },
      fontFamily: {
        headline: ['Montserrat', 'Epilogue', 'sans-serif'],
        body: ['Open Sans', 'Inter', 'sans-serif'],
        label: ['Montserrat', 'Manrope', 'sans-serif'],
        accent: ['Oregano', 'sans-serif']
      },
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-md': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'label-md': ['0.875rem', { fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.15em' }]
      }
    },
  },
  plugins: [],
}