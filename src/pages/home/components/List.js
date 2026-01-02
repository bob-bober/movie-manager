import { useState } from "react";
import { useCntxt } from "../../../Context";

export default function List() {
    console.log("re-render")
    const {filmList, setFilmList} = useCntxt();
    const [filterGenre, setFilterGenre] = useState("");
    const [filterWatchAgain, setFilterWatchAgain] = useState("all");
    const [sortBy, setSortBy] = useState("");
    const [sortOrder, setSortOrder] = useState(true);
    
    const getArray = () => {
        let result = [...filmList];

        if (filterGenre !== "") {
            result = result.filter(film => film.genre === filterGenre);
        };

        if (filterWatchAgain === "yes") {
           result = result.filter(film => film.watchAgain)
        } else if (filterWatchAgain === "no") {
           result = result.filter(film => !film.watchAgain)
        };

        if (sortBy === "title") {
            sortOrder ? result.sort((a, b) => a.title.localeCompare(b.title)) : result.sort((a, b) => b.title.localeCompare(a.title))
        } else if (sortBy === "rating") {
            sortOrder ? result.sort((a, b) => a.rating - b.rating) : result.sort((a, b) => b.rating - a.rating)
        }

        return result;
    };

    const rmvMovie = (rmvID) => {
        setFilmList(filmList.filter(film => film.id !== rmvID))
    };
    
    return (
        <div>
            <form>
                <fieldset>
                    <div>
                        <label>Filter Genre</label>
                        <select value={filterGenre} onChange={e => setFilterGenre(e.target.value)}>
                            <option value="" selected>View all</option>
                            <option value="Action">Action</option>
                            <option value="Crime">Crime</option>
                            <option value="Mystery">Mystery</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Kids">Kids</option>
                        </select>
                    </div>
                    <div> 
                        <label>Filter for Watch again</label>
                        <select value={filterWatchAgain} onChange={e => setFilterWatchAgain(e.target.value)}>
                            <option value="all">View all</option>
                            <option value="yes">Watch again</option>
                            <option value="no">Don't watch again</option>
                        </select>
                    </div>
                </fieldset>
            </form>
            <table>
                <thead>
                    <tr>
                        <th scope="col"><button onClick={() => {setSortBy("title"); setSortOrder(!sortOrder)}}>Title</button></th>
                        <th scope="col">Genre</th>
                        <th scope="col"> <button onClick={() => {setSortBy("rating"); setSortOrder(!sortOrder)}}>Rating</button></th>
                        <th scope="col">Watch again</th>
                    </tr>
                </thead>
                <tbody>
                    {getArray().map(film => <tr key={film.id}>
                        <td>{film.title}</td>
                        <td>{film.genre}</td>
                        <td>{film.rating}</td>
                        <td>{film.watchAgain ? "Yes" : "No"}</td>
                        <button onClick={() => rmvMovie(film.id)}>remove movie</button>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
};
