import { createContext, useContext, useReducer } from "react";
import { PropertyAppreducer,  instialState } from "../Reducer/PropertyAppReducer";


const PropertyAppContext = createContext();

const PropertyAppProvider = ({ children }) => {

    const [ state ,dispatch ] = useReducer( PropertyAppreducer , instialState);

    return (
        <PropertyAppContext.Provider value={{ state ,dispatch}}>
            { children }
        </PropertyAppContext.Provider>
    );
};

export default PropertyAppProvider;

export const usePropertyApp = () => useContext(PropertyAppContext);