import React from 'react';

class Example2 extends React.Component{
    render(){

        const testProp = this.props.testProp;
        const testProp2 = this.props.testProp2;
        let data;

        if(testProp==='text'){
            data= <p>Hi,Vlad</p>
        }
        else{
            data= <p>Hello,Vlad</p>
        }
        return(
            <div>
                {data}
                {!testProp2? <p>Hello</p>:<p> and {testProp2}</p>}
            </div>
        )

    }
}
export default Example2;