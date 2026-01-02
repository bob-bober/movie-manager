import { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

export default function ContextProvider({children}) {
    const [filmList, setFilmList] = useState(() => {
        const saved = localStorage.getItem("filmList");

        if (saved) {
            return  JSON.parse(saved)
        } else {
            return [
                { id: 1, title: "Léon: The Professional", rating: 8.5, genre: "Action", watchAgain: true },
                { id: 2, title: "Pulp Fiction", rating: 8.9, genre: "Crime", watchAgain: true },
                { id: 3, title: "Fight Club", rating: 8.8, genre: "Drama", watchAgain: true },
                { id: 4, title: "The Prestige", rating: 8.5, genre: "Mystery", watchAgain: true },
                { id: 5, title: "Inception", rating: 8.8, genre: "SciFi", watchAgain: false },
                { id: 6, title: "The Matrix", rating: 8.7, genre: "SciFi", watchAgain: true },
                { id: 7, title: "Memento", rating: 8.4, genre: "Mystery", watchAgain: true },
                { id: 8, title: "The Departed", rating: 8.5, genre: "Crime", watchAgain: true },
                { id: 9, title: "Django Unchained", rating: 8.5, genre: "Western", watchAgain: true },
                { id: 10, title: "Inglourious Basterds", rating: 8.4, genre: "War", watchAgain: false },
                { id: 11, title: "Snatch", rating: 8.2, genre: "Crime", watchAgain: true },
                { id: 12, title: "Lock Stock and Two Smoking Barrels", rating: 8.1, genre: "Crime", watchAgain: true },
                { id: 13, title: "V for Vendetta", rating: 8.2, genre: "Action", watchAgain: true },
                { id: 14, title: "The Usual Suspects", rating: 8.5, genre: "Crime", watchAgain: false },
                { id: 15, title: "Drive", rating: 7.8, genre: "Action", watchAgain: true }
            ]
        }
    }); 


    useEffect(() => {
        localStorage.setItem("filmList", JSON.stringify(filmList))
    }, [filmList])

    const [darkTheme, setDarkTheme] = useState(false);
    const styleSwitcher = () => (
        darkTheme ? {backgroundColor: "#212121", color: "#F5F5F5"} : {backgroundColor: "#F5F5F5", color: "#212121"} 
    );

    return(
        <Context.Provider value={{filmList, setFilmList, darkTheme, setDarkTheme, styleSwitcher}}>
            {children}
        </Context.Provider>
    );
};

export const useCntxt = () => useContext(Context);
