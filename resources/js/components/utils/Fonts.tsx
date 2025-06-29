import { Global } from "@emotion/react"

function Fonts() {
    return (
        <Global styles={`
            @font-face {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: url('/fonts/Poppins-Bold.ttf');
            }
            @font-face {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 500;
                font-display: swap;
                src: url('/fonts/Poppins-Medium.ttf');
            }
            @font-face {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url('/fonts/Poppins-Regular.ttf');
            }
        `} />
    )
}

export default Fonts
