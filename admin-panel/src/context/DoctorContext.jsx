import { createContext } from "react";

export const DoctorContext = createContext();

const DoctorContextProvider = (props) => {

    const value = {
        // Your state, functions, or data go here
    };

    return (
        <DoctorContext.Provider value={value}>
            {props.children}
        </DoctorContext.Provider>
    );
};

export default DoctorContextProvider;