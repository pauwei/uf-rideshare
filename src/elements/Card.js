import { IconSteeringWheel, IconUser } from '@tabler/icons';
import '../styles/Card.css';

const Card = (props) => {
    const {name, msg, type} = props;

    return (
        <li className="ridepost">
            <article className="ridearticle">
                <div className="person">
                    <h3>{name}</h3>
                    {type === "Driver" && 
                        <IconSteeringWheel
                            size={24}
                        />}
                    {type === "Rider" &&
                        <IconUser
                            size={24}
                        />
                    }
                </div>
                <p>{msg}</p>
            </article>
        </li>
    );
}

export default Card;