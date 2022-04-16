

import classes from './profileInfo.module.css'
import MyProfile from "./myProfile";
import {useSelector} from "react-redux";


const ProfileInfoContainer = () => {
    const profileInfo = useSelector(state =>  state.profilePage.profileInfo)
  /*  const myProfileElements = props.profileInfo.reduce(profile => <MyProfile key={profile.id} name={profile.name} from={profile.id}
    birthday={profile.birthday}/>)*/
    return (<div className={classes.profile}><img alt='' className={classes.main_theme} src='http://orelgnezdo.ru/assets/gallery/29/131.jpg'/>
    <div >
        <MyProfile name={profileInfo[0].name} from={profileInfo[1].from}
                   birthday={profileInfo[2].birthday} family={profileInfo[3].family}/>
      </div>
      
      </div>)
}
export default ProfileInfoContainer