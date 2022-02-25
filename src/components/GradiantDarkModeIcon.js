import DarkModeIcon from '@mui/icons-material/DarkMode';

const GradientDarkModeIcon = () => {
    return(
        <>
            <svg width={0} height={0}>
                <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
                    <stop offset={0} stopColor="#2FB8FF" />
                    <stop offset={1} stopColor="#9EECD9" />
                </linearGradient>
            </svg>
            <DarkModeIcon sx={{ fill: "url(#linearColors)" }} />
        </>
    );
};

export default GradientDarkModeIcon;