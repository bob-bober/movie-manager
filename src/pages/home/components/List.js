import { useState } from "react";
import { useCntxt } from "../../../Context";

export default function List() {
    const {filmList, setFilmList} = useCntxt();
    const [filterGenre, setFilterGenre] = useState("");
    
    const getArray = () => {
        if (filterGenre === "Action") {
            <li></li>
        } else if (filterGenre === "Crime") {

        } else if (filterGenre === "Mistery") {

        } else if (filterGenre === "Comedy") {

        } else if (filterGenre === "Kids") {

        } else {

        };
    };

    
    return (
        <div>
            <form>
                <fieldset>
                    <div>
                        <label>Filter Genre</label>
                        <select value={filterGenre} onChange={(e) => setFilterGenre(e.target.value)}>
                            <option value="" disabled selected>Pick one</option>
                            <option value="Action">Action</option>
                            <option value="Crime">Crime</option>
                            <option value="Mistery">Mistery</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Kids">Kids</option>
                        </select>
                    </div>
                </fieldset>
            </form>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Watch again</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Grinch</td>
                        <td>Kids</td>
                        <td>5</td>
                        <td>Yes</td>
                    </tr>
                </tbody>
                {getArray()}
            </table>
        </div>
    );
};