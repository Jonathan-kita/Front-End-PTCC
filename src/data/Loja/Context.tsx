import React, { createContext, useState } from 'react'


interface AuthContextData {
    IdLoja: Object;
    GetId(id): void;
    GetContext(context): void;
    Context: String;
}

const LojaContext = createContext({} as AuthContextData);
export const LojaProvider = ({ children }) => {

    const [idLoja, setidLoja] = useState();
    const [context, setContex] = useState('0');
    async function GetId(id) {

        setidLoja(id)

    }
    async function GetContext(Context) {

        setContex(Context)

    }

    return (<>
        <LojaContext.Provider value={{ IdLoja: idLoja, GetId, GetContext, Context: context }}>

            {children}

        </LojaContext.Provider>
    </>)
}

export default LojaContext;
