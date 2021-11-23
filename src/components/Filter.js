import DatePicker from "react-datepicker";
import '../styles/Filter.css';

import "react-datepicker/dist/react-datepicker.css";

const Filter = (props) => {
    const { setDate, setUser, city, setCity, startDate, setStartDate, expire, setExpire } = props;

    return(
        <div className="filterpanel">
            <div>
                <h2>Filter Panel</h2>
            </div>
            <div className="sort-by-date">
                <p>Sort by Date: </p>
                <select
                    className="sort-date"
                    onChange={(e) => setDate(e.target.value)}
                >
                    <option value="none">None</option>
                    <option value="new">From Most Recent</option>
                    <option value="old">From Least Recent</option>
                </select>
            </div>
            <div className="sort-by-user">
                <p>Sort by User: </p>
                <select
                    className="sort-user"
                    onChange={(e) => setUser(e.target.value)}
                >
                    <option value="none">None</option>
                    <option value="Rider">Rider</option>
                    <option value="Driver">Driver</option>
                </select>
            </div>
            <div className="sort-by-city">
                <p>Search by City: </p>
                <input
                    type="search"
                    name="search-city"
                    id="search-city"
                    className="search-city"
                    placeholder="Search city . . ."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </div>
            <div className="search-by-date">
                <p>Search by Date: </p>
                <div className="search-date">
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                    />
                </div>

            </div>
            <div className="sort-by-expire">
                <p>Sort by Expired: </p>
                <input
                    name="sort-expire"
                    type="checkbox"
                    checked={expire}
                    onChange={(e) => setExpire(e.target.checked)}
                />
            </div>
        </div>
    );
}

export default Filter;