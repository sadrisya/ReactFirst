import React from "react";
import ListItem from "./Listitem";
import Tools from "../components/Tools";

const arr=[
    {
        title:"Appointment for December",
        descri:"the patient is rescheduled to october",
        isActive:false
    },{
        title:"Appointment for November",
        descri:"the patient is rescheduled to october",
        isActive:true
    },{
        title:"Appointment for October",
        descri:"the patient is rescheduled to october",
        isActive:false
    }
]

class List extends React.Component{
constructor(props){
    super(props);
    this.state={
        data:arr
    }
}

    onListChange=(evt) =>{
        const value=evt.target.value;
       const newList= arr.filter((item)=>{
if(value==='all'){
    return true;
}if(value==='active'){
    return item.isActive===true;
}if(value==='non-active'){
    return item.isActive===false;
}
return false;
       });
       console.log(newList);
this.setState({
    data:newList
});
    }
    render(){
        return(
            <Tools onAction={this.onListChange}>
            <div className='app-list'>
                {
                    this.state.data.map((obj)=>{
                        return  <ListItem title={obj.title} descri={obj.descri} isActive={obj.isActive}/>
                    })
                }
           
           
            
                  </div></Tools>
        );
    }
}
export default List;