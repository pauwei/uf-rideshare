import '../styles/Search.css';


const Search = (props) => {
    const {query, setQuery} = props;

    return (
        <div>
            <input
                type="search"
                name="search-form"
                id="search-form"
                className="search-input"
                placeholder="Search rides ..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    );
}

export default Search;