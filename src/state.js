
const messageItemData = [
    {id: 1, name: 'Igor'},
    {id: 2, name: 'Sasha'},
    {id: 3, name: 'Anton'},
    {id: 4, name: 'Brandon'},
    {id: 5, name: 'Ilya'},
    {id: 6, name: 'Peter'},

];
const messageMessagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'My name is Sasha'},
    {id: 3, message: 'AVANOKEDAVRA'},
    {id: 4, message: 'ФЫВЧЯСЧЧы'},
    {id: 5, message: 'Приветик'},
    {id: 6, message: 'Hello'}
];
const postData = [
    {id: 1, message:'Hi', likescount:'14'},
    {id: 2, message:'This my first project', likescount:'123'},
    {id: 2, message:'This my first project', likescount:'123'},
    {id: 2, message:'This my first project', likescount:'123'}
]
let state = {
    messageMessagesData,messageItemData,postData
}
export default state