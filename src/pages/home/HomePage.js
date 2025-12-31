import { useCntxt } from "../../Context";

import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";

export default function HomePage() {
    const {darkTheme, setDarkTheme, styleSwitcher} = useCntxt();

    return (
        <div>
            <Header />
            <Form /> 
            <List />
        </div>
    );
};