export const initialState = {
    todos: [],
    // boş bir aray tanımladık
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {

        // action dediğimiz şey bir obje
        // bu objenin içerisinde her zaman bir
        // type olmak zorunda
        case "ADD_TODO":
            return {
                ...state,
                todos: [action.payload, ...state.todos]
            };
            case 'REMOVE_TODO':
                return {
                    ...state,
                    todos:[...state.todos].filter(todo=> todo.id !== action.payload)
                };
            case 'COMPLETE_TODO':
                return{
                    ...state,
                    todos: state.todos.map(todo => {
                        if (todo.id !== action.payload){
                            return todo;
                        }
                        return{
                            ...todo,
                            isCompeted: !todo.isCompeted,
                        }
                    })
    }
            case 'UPDATE_TODO':
                return{
                    ...state,
                    todos: state.todos.map((todo) => {
                        if (todo.id !== action.payload.todoId){
                            return todo ;
                        }
                        return {
                            ...todo,
                            content: action.payload.newValue,
                        }
                    }),
                };
        default:
            return {
                ...state,
            }
    }
}
export default reducer;