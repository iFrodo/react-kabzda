let initialState = [{id: '/profile', name: 'Profile'},
    {id: '/messages', name: 'Messages'},
    {id: '/news', name: 'News'},
    {id: '/music', name: 'Music'},
    {id: '/settings', name: 'Settings'}
]
const navDataReduser = (state = initialState,action) => {
    return state;
}
export default navDataReduser