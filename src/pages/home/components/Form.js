import { useCntxt } from "../../../Context";    
import { useState } from "react";

export default function Form() {
    const {filmList, setFilmList} = useCntxt();

    const [filmName, setFilmName] = useState("");
    const [filmRating, setFilmRating] = useState("?");
    const [filmGenre, setFilmGenre] = useState("");
    const [filmWatchAgain, setFilmWatchAgain] = useState(null);

    const getIsFormValid = () => {
        return (
            filmName &&
            filmRating !== "?" &&
            filmGenre /* &&
            filmWatchAgain */
        );
    };

    const clearForm = () => {
        setFilmName("");
        setFilmRating("?");
        setFilmGenre("");
        setFilmWatchAgain("");
    };

    const addMovie = (e) => {
        e.preventDefault()

        const newMovie = {
            id: filmList.length + 1, 
            title: filmName, 
            rating: filmRating, 
            genre: filmGenre, 
            watchAgain: filmWatchAgain
        };

        setFilmList([...filmList, newMovie]);
        console.log(filmList)
        clearForm();
    };

    return(
        <form onSubmit={addMovie}>
            <fieldset>
                <div>
                    <label>Name of Film</label>
                    <input type="text" placeholder="Super Awesome Movie Pt. 3" value={filmName} onChange={(e) => setFilmName(e.target.value)} />
                </div>
                <div>
                    <label>Rating: {filmRating} out of 5</label>
                    <div>
                        <p>1</p>
                        <input type="range" min="1" max="5" step="1" value={filmRating} onChange={(e) => setFilmRating(e.target.value)} />
                        <p>5</p>
                    </div>
                </div>
                <div>
                    <label>Genre</label>
                    <select value={filmGenre} onChange={(e) => setFilmGenre(e.target.value)}>
                        <option value="" disabled selected>Pick one</option>
                        <option value="Action">Action</option>
                        <option value="Crime">Crime</option>
                        <option value="Mistery">Mistery</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Kids">Kids</option>
                    </select>
                </div>
                <div>
                    <fieldset>
                        <legend>Watch again?</legend>
                        <label>
                            <input type="radio" name="watchAgain" value="yes" onChange={() => setFilmWatchAgain(true)} /* onSelect={() => setFilmWatchAgain(true)} */  /> Yes
                        </label>
                        <label>
                            <input type="radio" name="watchAgain" value="no" onChange={() => setFilmWatchAgain(false)} /* onSelect={() => setFilmWatchAgain(false)} */ /> No 
                        </label>
                    </fieldset>
                </div>
                <button type="submit" disabled={!getIsFormValid()} >Add Movie</button>
            </fieldset>
        </form>
    );
};