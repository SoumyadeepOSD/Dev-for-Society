import { MyContext } from "../context/context";

export const MyState = (props) => {
    const state = 
    {
        "switch":"on",
        "gender":"male",
        "cart":"yes"
    };
    return(
    <MyContext.Provider value={state}>
        {props.children}
    </MyContext.Provider>);
}