/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  safelist: [
    // รักษา classes ที่ remote อาจใช้
    {
      pattern: /bg-(red|green|blue|yellow|purple|pink|indigo)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /text-(red|green|blue|yellow|purple|pink|indigo)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /p-(0|1|2|3|4|5|6|8|10|12|16|20|24)/,
    },
    {
      pattern: /m-(0|1|2|3|4|5|6|8|10|12|16|20|24)/,
    },
    // เพิ่ม patterns ตามที่ต้องการ
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

