import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


const Card = (props) => {

    const heart = <FontAwesomeIcon icon={faHeart} beat style={{ "color": "red" }} />;

    return (
        <div className="card  m-5" style={{ "width": 250, "height": 300 }} >
            <div className="card-header">
                <div className="name"><h4 >{props.name} </h4></div>
                <div className="life text-end"> <h4>{heart} {props.life}</h4></div>

            </div>
            <div className="card-body d-flex justify-content-center">
                <img src={props.img} style={{ "width": "12Rem" }} />
            </div>
            <div className="card-footer">
                <div className="attack"><h5 >Attack </h5></div>
                <div className="poder text-end"> <h4>{props.attack}</h4></div>

            </div>
        </div>
    )
}

export default Card;