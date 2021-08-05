export const ContactosReducer = (state = [] , action) => {
    //state = [] : es para que me tome las funciones de javascripts por ej map , filter
    switch (action.type) {
        case "add":
            return [...state, action.payload]
         
        case "delete":
            return state.filter(actual => actual.id !== action.payload);
           
            //[...state, action.payload]
    
        default:
            return state;
    }
}
