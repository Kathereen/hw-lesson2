import React from 'react';

class Example1 extends React.Component{
    render(){
        const obj = {
            sayHi: 'Hello',
            name:"Vlad",
            callText:'We came with peace'
        }
        function helloFunction(obj){
            return obj.sayHi + '  '+ obj.name +'!'+'  '+ obj.callText
        }
        return(
            <div>
                    {helloFunction(obj)}
            </div>
        )
        
    }
};
export default Example1;