import classes from "./profileInfo.module.css";


const MyProfile = (props) => {

    return (<div className={classes.avatar_profile}>
        <div className={classes.avatar}>
            <img
                src='https://sun9-42.userapi.com/impf/NDF6qrFENlPoGriAnQk8mxs2Ks0S7H3xRrJfAA/tlhsekuV2js.jpg?size=810x1080&quality=96&sign=b3c573437e0e8d4e92a32080131c45fe&type=album'/>
        </div>
        <div className={classes.discription}>
            <div><h3>{props.name}</h3></div>
            <div>{props.birthday}</div>
            <div>{props.from}</div>
            <div>{props.family}</div>


        </div>

    </div>)
}
export default MyProfile;