    import { createContext, useContext, useState, useEffect } from "react";

    const UseContext = createContext();

    export function UseContextProvider({ children }) { 
    
    const [label,setLabel]= useState(()=>{
        const save= localStorage.getItem("label")
        return(save ? JSON.parse(save) : [])
    })
    
    
    useEffect(()=>{
        localStorage.setItem("label", JSON.stringify(label))
    },[label])
    
    const [label_, setLabel_] = useState(() => {
    const save = localStorage.getItem("label_");
    return save ? JSON.parse(save) : [];
  });

  useEffect(() => {
    localStorage.setItem("label_", JSON.stringify(label_));
  }, [label_]);

    
    const sum=label.filter(t=>t.type ==="income")
    .reduce((sum_,t)=>sum_+Number(t.amount),0)
    
    const exp = label_.filter(t=> t.type==="expense")
    .reduce((exp_,t)=>exp_+Number(t.amount),0)
    
    const result = sum-exp
    

    
        return(
            <>
            <UseContext.Provider  value={{label,setLabel,sum,exp,result,label_,setLabel_}}>
            {children}
            </UseContext.Provider>
            </>
        )
    }

    export const useContext_ = () => useContext(UseContext);