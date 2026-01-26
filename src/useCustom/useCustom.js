
import { useState } from "react"
import { useContext_ } from "../useContext/UseContext"
import { v4 as uuidv4 } from 'uuid';


const useCustom=()=>{

 
 const [input,setInput]=useState({
     name:"",
     categori:"",
     date:null,  
     amount:"",
     iscompleta:false
   })
   
 const {label_,setLabel_}=useContext_()
 
 
    
function text_(e){
  const {name,value}=e.target
  setInput({
    ...input,[name]:value
  })

}

function date_(newDate){
  setInput({ 
    ...input,date:newDate
  })
}

function add_(){
 const newdata={
  ...input,
  id:uuidv4(),
  type:"expense"
 };
 if(!input.name && !input.amount){
  return;
 }
 else setLabel_([...label_,newdata])
 console.log(label_)
}

function delete_(id){
  const delete_ = label_.filter((t)=>{
    return t.id !== id
  }) 
  setLabel_(delete_)
}

function isCom(id){
  const com = label_.map(c=>
    c.id === id ? {...c,iscompleta:!c.iscompleta}:c
  )
 setLabel_(com)
console.log(com)


}
console.log(label_)
    return{
        input,
        label_,
        text_,
        date_,
        add_,
        delete_,
        isCom,
    }
}
export default useCustom