import { useState, useEffect } from 'react';
import Card from '../elements/Card';
import postData from '../data/Posts.json';
import '../styles/List.css';

const List = (props) => {
    const { query, date, user } = props;

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [list, setList] = useState([]);
    const [posts, setPosts] = useState([]);
    
    const updateQuery = (array) => {
        const updatePosts = array.filter((post) => {
            if (post.Name.toLowerCase().includes(query.toLowerCase())) {
                return true;
            }

            if (post.Msg.toLowerCase().includes(query.toLowerCase())) {
                return true;
            }

            return false;
        });

        return updatePosts;
    }

    const sort_by_key = (array, field, reverse=false) => {
        return array.sort( (a, b) => {
            const x = a[field]; const y = b[field];

            if (reverse) {
                return ((x > y) ? -1 : ((x < y) ? 1 : 0));
            } else {
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            }
        });
    }

    const updateFilterDate = (array, field, reverse) => {
        const updatePosts = sort_by_key(array, field, reverse);

        return updatePosts;
    }

    const updateFilterUser = (array) => {
        const updatePosts = array.filter((post) => {
            if (post.Type === user) {
                return true;
            }

            return false;
        });

        return updatePosts;
    }

    useEffect(() => {
        //Checked when first mounting
        if (!isLoaded) {
            setPosts(postData);
            setList(postData);
            setIsLoaded(true);
        }

        let update = null;

        //Query updates
        if (!query || query.length !== 0) {
            update = updateQuery(list);
        }

        //Filtering updates for sort date
        if (date !== "none") {
            if (date === "new") {
                update = updateFilterDate(update, "Hours", false);
            } else if (date === "old" ) {
                update = updateFilterDate(update, "Hours", true);
            }
        }

        //Filtering updates for user
        if (user !== "none" && user.length > 0) {
            update = updateFilterUser(update);
        }

        //Set update array
        if (update) {
            setPosts(update);
        } else {
            setPosts(list);
        }

    }, [query, date, user, list])

    if (error) {
        return <>{error.message}</>;
    }
    else if (!isLoaded) {
        return <div>Loading ...</div>
    } else {
        return (
            <div className="forumlist">
                <ul className="postitems">
                    <article>
                        {posts.length !== 0 && posts.map(post => (
                            <Card name={post.Name} msg={post.Msg} type={post.Type} tags={post.Tags}/>
                        ))}
                        {posts.length === 0 && 
                            <p>No posts matched the search terms.</p>
                        }
                    </article>
                </ul>
            </div>
        );
    }
}

export default List;