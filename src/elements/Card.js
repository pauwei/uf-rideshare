import { IconSteeringWheel, IconUser } from '@tabler/icons';
import '../styles/Card.css';

const Card = (props) => {
    const {name, msg, type, tags} = props;

    return (
        <li className="ridepost">
            <article className="ridearticle">
                <div className="person">
                    <h3>{name}</h3>
                    <p>{msg}</p>
                </div>
                <div className="tags">
                    {/* {console.log(tags.length)} */}
                    {tags.length !== 0 && tags.map(tag => (
                        <p className="tag">{tag}</p>
                    ))}
                </div>
                <div className="icon">
                    {type === "Driver" && 
                        <IconSteeringWheel
                            size={30}
                        />}
                    {type === "Rider" &&
                        <IconUser
                            size={30}
                        />
                    }
                </div>

            </article>
        </li>
    );
}

export default Card;