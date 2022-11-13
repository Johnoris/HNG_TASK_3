import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({children}) => {
    const [ walletModalActive, setWalletModalActive ] = useState(false);
    return(
        <AppContext.Provider value={{walletModalActive, setWalletModalActive}}>
            {children}
        </AppContext.Provider>
    )
}
export default AppProvider