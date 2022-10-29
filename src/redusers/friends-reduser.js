let initialState = [
    {id: 1, name: 'Sasha', avatar: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg'},
    {
        id: 2,
        name: 'Alena',
        avatar: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg'
    },
    {id: 3, name: 'Lada', avatar: 'https://proza.ru/pics/2014/01/12/2133.jpg'}]
const friendsReduser = (state = initialState,action) => {
    let stateCopy = [...state]
    return stateCopy;
}
export default friendsReduser