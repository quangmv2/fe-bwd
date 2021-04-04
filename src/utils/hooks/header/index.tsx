import React, { createContext, useContext, useState } from 'react';

interface HeaderContextProps {
    visible: boolean,
    setVisible: Function
}

export const HeaderContext = createContext<HeaderContextProps>({
    visible: true,
    setVisible: (v?: boolean) => {}
})

export const HeaderProvider = ({
    children
}) => {

    const [visible, setVisible] = useState<boolean>(true);


    return (
        <HeaderContext.Provider 
            value={{
                visible,
                setVisible
            }}
        >
            {
                children
            }
        </HeaderContext.Provider>
    )
}

const useHeader = () => useContext(HeaderContext);

export {
    useHeader
};