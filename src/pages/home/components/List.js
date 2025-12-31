import { useCntxt } from "../../../Context";

export default function List() {
    const {filmList, setFilmList} = useCntxt();
    
    return (
        <div>
            <ul>
                {filmList.map(film => <li key={film.id}>{film.title}</li>)}
            </ul>
        </div>
    );
};