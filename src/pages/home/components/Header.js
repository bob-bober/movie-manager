import { useCntxt } from "../../../Context";

export default function Header() {
    const {darkTheme, setDarkTheme, styleSwitcher} = useCntxt();

    const handleClick = () => setDarkTheme(!darkTheme);

    return (
        <div>
            <h1>Our Movielist</h1>
            <button onClick={handleClick}>Switch to {darkTheme ? "light Theme" : "dark Theme"} </button>
        </div>
    );
};