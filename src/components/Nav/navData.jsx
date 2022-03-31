
import {NavLink} from "react-router-dom";
import classes from "./Nav.module.css";

const NavData = (props) => {
    return(
        <div className={classes.item}>
            <NavLink to={props.id} className = { navData => navData.isActive ? classes.active : classes.item }>{props.name}</NavLink>
        </div>)
}

export default NavData;
