import gator from '../images/florida-gator.jpg';
import '../styles/Search.css';


const Search = (props) => {
    const {query, setQuery} = props;

    return (
        <div className="navbar">
            <img className="logo"
                src={gator}
                alt="Gator Logo"
            />
            <h2 className="rideboard-title">Gator Rideboard</h2>
            <input
                type="search"
                name="search-form"
                id="search-form"
                className="search-input"
                placeholder="Search rides . . ."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    );
}

export default Search;