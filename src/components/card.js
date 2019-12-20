import React from 'react'
import './card.css'

class card extends React.Component{
    state={
        username:{value:'',msg:''},
        uesercardnumber:{value:'',msg:''},
        usercarddate:{value:'',msg:''},
        usercarddateh:'',
        usercarddateb:false,

        regnumber: new RegExp('\\D '),
        regchar: new RegExp('[^a-zA-Z]'),
        
    }
    usernamevalidation=(e)=>{
        
        if(this.state.regchar.test(e.target.value)){
            this.setState({username:{value:this.state.username.value,msg:'Please enter a valid name'}})
            e.target.value=this.state.username.value
        }
        else{
            this.setState({username:{value:e.target.value,msg:''}})
            
        }
    }
    usercardvalidation=(e)=>{
        let regnumb = /^[0-9 ]*$/g;
        if(e.target.value.match(regnumb)){
            this.setState({
                uesercardnumber : {value:e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim(),msg:''}})   
                  
            
        }
        else {
            this.setState({uesercardnumber:{value:this.state.uesercardnumber.value,msg:'Please enter only number!'}})
         
            
        }

    }
    usercarddatevalidation=(e)=>{
        let regdate = /^(((0)[0-9])|((1)[0-2]))(\/)\d{2}$/i;
        let regmth =/^(((0)[0-9])|((1)[0-2]))/
        
        if(this.state.usercarddateh.length<6){
            
            this.setState({usercarddateh:e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{2})/g, '$1/').trim().slice(0, 5)})
            if(e.target.value.match(regmth)){
                
                if(e.target.value.length>3&this.state.usercarddateb){
                    
                        this.setState({
                            usercarddate:{value:e.target.value,msg:''},
                            usercarddateh:e.target.value
                        }) 
            }
                else {this.setState({
                    usercarddate : {value:this.state.usercarddateh,msg:''},
                    usercarddateb:true
                })}
                
                
            }else {
                if(this.state.usercarddateh.length===3 & (!this.state.usercarddateb)){
                    this.setState({
                        usercarddate : {value:this.state.usercarddate.value,msg:'Please enter a corect month!'},
                        usercarddateh:''
                        
                    })
                }

             }
                

        }
        
    }

    render(){return(
        <div className='card'>
            <div className='creditcard'>
                <div className='cardnumber'>
                    <p>{this.state.uesercardnumber.value.padEnd(19, '*')}</p>
                </div>
                <div className='carddate'>
                    <p>{this.state.usercarddate.value.padEnd(5,'*')}</p>
                </div>
                <div className='username'>
                    <p>{this.state.username.value.toUpperCase()}</p>
                </div>
            </div>
            <div className='input'>
                <span>{this.state.username.msg}</span>
                <input type='text' name='username' maxLength='20' onChange={this.usernamevalidation}/>
                <span>{this.state.usercarddate.msg}</span>
                <input type='text' name='date' maxLength='5' value={this.state.usercarddateh} onChange={this.usercarddatevalidation}/>
                <span>{this.state.uesercardnumber.msg}</span>
                <input type='text' name='cardnumber' maxLength='19' value={this.state.uesercardnumber.value} onChange={this.usercardvalidation}/>
            </div>
            
        </div>
    )}
        
    

}
export default card