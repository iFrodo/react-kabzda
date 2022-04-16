import classes from'./Nav.module.css'

import FriendsImagesItem from "./friendsImagesItem";
import NavData from "./navData";
import {useSelector} from "react-redux";


const Nav = () => {

let state = useSelector(state => state )

const navElements= state.navData.map (nav => <NavData id={nav.id} name={nav.name} />)
const friendsElement = state.friends.map (images => <FriendsImagesItem id={images.id} friends={images.avatar} name={images.name} />)

    return <nav className={classes.nav}>
        {navElements}
        <div ><p>Friends</p></div>
        <div className={classes.friends}>
            {friendsElement}


        </div>
    </nav>
}
export default Nav
/*
className={`${classes.item} `${classes.active}`}*/
