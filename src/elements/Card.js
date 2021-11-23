import Button from 'react-bootstrap/Button';
import { IconSteeringWheel, IconUser } from '@tabler/icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Card.css';

const Card = (props) => {
    const {name, msg, type, tags, profileURL, postURL} = props;

    return (
        <li className="ridepost">
            <article className="ridearticle">
                <div className="info">
                    <div className="post">
                        <div className="person">
                            <h3 className="name">{name}</h3>
                            <div className="tags">
                                {tags.length !== 0 && tags.map(tag => (
                                    <p className="tag">{tag}</p>
                                ))}
                            </div>
                        </div>
                        <div className="msg">
                            <p>{msg}</p>
                        </div>
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
                </div>
                    
                <div className="btns">
                    <Button variant="primary" href={profileURL}>View {type}</Button>
                    {' '}
                    <Button variant="primary" href={postURL}>Reply Post</Button>
                    {' '}
                </div>
                

            </article>
        </li>
    );
}

export default Card;


{/* <li className="ridepost">
            <article className="ridearticle">
                <div className="person">
                    <h3>{name}</h3>
                    <p>{msg}</p>
                </div>
                <div className="tags">
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
        </li> */}