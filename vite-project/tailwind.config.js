export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
            // 'your-custom-color': '#HEXCODE',
            blue:{
                200:"#44a4b4",
                700:"#3995a6",
            },
            gray:{
                200:"#3995a6"
            }
            
        },
        },
    },
        plugins: [
      // Add your Tailwind CSS plugins here.
    ],
};