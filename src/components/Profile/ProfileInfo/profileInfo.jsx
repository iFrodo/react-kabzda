

import classes from './profileInfo.module.css'
import MyProfile from "./myProfile";


const ProfileInfo = (props) => {

  /*  const myProfileElements = props.profileInfo.reduce(profile => <MyProfile key={profile.id} name={profile.name} from={profile.id}
    birthday={profile.birthday}/>)*/
    return (<div className={classes.profile}><img alt='' className={classes.main_theme} src='http://orelgnezdo.ru/assets/gallery/29/131.jpg'/>
    <div >
        <MyProfile name={props.profileInfo[0].name} from={props.profileInfo[1].from}
                   birthday={props.profileInfo[2].birthday} family={props.profileInfo[3].family}/>
      </div>
      
      </div>)
}
export default ProfileInfo