import React, { Component } from 'react';


        const tipsList = ['Stay motivated.','Sell Yourself.','Don’t Limit Yourself to Online Applications.','Be Yourself.', 'Stay Positive.', 'Networking is an essential component of successful job hunting.', 'It’s acceptable to apply for the same job more than once.','Learn the STAR method.','Don’t stop applying for jobs.'];


class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            tips:['Don’t stop applying for jobs.']
        }
    }
    componentWillMount(){
        let tipsPos = 0;
        setInterval(() => {
            if(tipsList.length - 1 > tipsPos){
                this.setState({
                    tips: tipsList[tipsPos]
                })
                tipsPos++;
            }
            else{
                this.setState({
                    tips: tipsList[tipsPos]
                })
                tipsPos = 0;
            }
        },3000);
        
    }
    render(){
        return(
            <div className="header-container">
                <h1> JobHunter</h1>
                <p>{this.state.tips}</p>
            </div>
        );
    }
}

export default Header;