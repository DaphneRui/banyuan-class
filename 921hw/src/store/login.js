const login = {
 namespaced: true,
 state: {
    list:{
        name: '',
        age: '',
        gender: '',
        school: '', 
    }
 },
 mutations: {
    loginMessage(state, list) { 
        state.list = list;
    }
 }
}
 


export default login