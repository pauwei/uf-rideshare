import '../styles/Filter.css';

const Filter = (props) => {
    const { setDate } = props;

    return(
        <div className="filterpanel">
            <div>
                <h2>Filter Panel</h2>
            </div>
            <div className="sort-by-date">
                <p>Sort by Date: </p>
                <select
                    onChange={(e) => setDate(e.target.value)}
                >
                    <option value="none">None</option>
                    <option value="new">From Most Recent</option>
                    <option value="old">From Least Recent</option>
                </select>
            </div>
        </div>
    );
}

export default Filter;