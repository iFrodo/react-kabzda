import classes from'./Header.module.css'
const Header = () => {
    return <header className={classes.header}>
    <img className={classes.header.img}  src='https://avatars.mds.yandex.net/i?id=f9088f6c4beb9db464130628b56af047-5226376-images-thumbs&n=13'></img>
    <a>  it-kamasutra.com</a></header>
}
export default Header;