import classes from'./Nav.module.css'

import FriendsImagesItem from "./friendsImagesItem";
import NavData from "./navData";


const Nav = (props) => {
const navElements= props.navData.map (nav => <NavData id={nav.id} name={nav.name} />)
const friendsElement = props.friends.map (images => <FriendsImagesItem id={images.id} friends={images.avatar} name={images.name} />)

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
