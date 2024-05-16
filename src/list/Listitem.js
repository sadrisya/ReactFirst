import React from 'react';
import Label from './Label';

function ListItem({title,descri,isActive}) {
    return (
        <div className='list-item'>
            <hr />
            <div className='list-title'>
                <h4>{title}</h4>
            </div>
            <div className='list-descr'>
                {descri}
            </div>
            <div className='list-label'>
                <Label onAction={()=>{
                    console.log("Parent Clicked")
                }} isActive={isActive}/>
               
            </div>
            <hr />
        </div>
    );
}
export default ListItem;