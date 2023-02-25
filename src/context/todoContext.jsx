import React, { createContext, useContext, useReducer } from "react";
export const TodoLayerContext = createContext();
// yeni bir context oluşturduk


export const TodoLayer = ({ initialState, reducer, children }) => (
    <TodoLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </TodoLayerContext.Provider>
    // TodoLayer adında yeni bir provider olusturduk
    // bu provider ise oluşturulan context'i bize sağlayan şey  ve 
    // o context'i kullanmak isteyen diğer comp TodoLayer içerisinde tutmamız lazım. 
)

export const useTodoLayerValue = () => useContext(TodoLayerContext);
// bu provideri kullankam yada tüketmek icin bir yöntem sağladık.