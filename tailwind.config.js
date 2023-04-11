/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.tsx"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "primary-graient": "linear-gradient(to top right, #f19d0b, #fd137d)"
      }
    },
  },
  plugins: [],
}

