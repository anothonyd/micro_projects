/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: () => ({
        'login-signup-bg': "url('/public/assets/sign-bg.png')"
      })
    },
  },
  plugins: [],
}

