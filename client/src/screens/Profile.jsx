import React from "react";

class Profile extends React.Component {
    constructor()
    {
        super();
        this.state={
            title:"Mobile Phone",
            price:999,
            Qit:1,
            img:''
        }
    }
    increseQ=()=>{
        //stateform1
        //this.setState({
       //     Qit: this.Qit + 1
       // });
       this.setState((prevState)=>{
           return{
               Qit: prevState.Qit + 1
           }
       },()=>{
           console.log('this.state',this.state);
        });//callback for asycronus programming
    }
    decreseQ=()=>{
        const {Qit}=this.state;

        if(Qit===0)
        {
            return;
        }

        this.setState((prevState)=>{
            return{
                Qit: prevState.Qit -1
            }
        },()=>{ 
            console.log("test",this.state);
        }
    
        );
    }
    deleteQ=()=>{
        console.log("test",this.state);
    }
    render(){
        const {price,title,Qit}=this.state;
        return(
         <div className="cart-item">
            <div className="left-block">
                <img style={styles.image}/>
            </div>
            <div className="right-block">
                <div style={{fontSize:25}}>{title}</div>
                <div style={{color:'#777'}}>rs : {price} </div>
                <div style={{color:'#777'}}>Qty : {Qit}</div>
                <div className="cart-item-actions">
                    {/* buttons*/}
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                        alt="decrese" 
                        className="action-icons"
                        onClick={this.decreseQ}
                    />
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png" 
                        alt="increse" 
                        className="action-icons"
                        onClick={this.increseQ}
                    />
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/1345/1345874.png"
                        className="action-icons"
                        onClick={this.deleteQ}
                    />

                </div>
            </div>

         </div>
        );
    }
}

const styles={
    image:{
        margin:5,
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default Profile;