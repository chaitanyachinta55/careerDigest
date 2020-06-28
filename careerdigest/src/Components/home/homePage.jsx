import React , {Component} from 'react';
import '../../scss/homePage.css';
class homePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            hideDetailedScroll : false
        }
    }

    componentDidMount(){
        window.addEventListener('scroll' , ()=>{
            // console.log(window.scrollY);
            if(!this.state.hideDetailedScroll && window.scrollY >= 40){
                document.getElementById("scroll").classList.toggle("fadeOut");
                document.getElementById("identityInfo").classList.toggle("fadeOut");
                document.getElementById("header").classList.toggle("fadeIn");
                this.setState({hideDetailedScroll : true});
            }

            if(this.state.hideDetailedScroll && window.scrollY == 0){
                console.log(window.scrollY);
                document.getElementById("scroll").classList.toggle("fadeOut");
                document.getElementById("identityInfo").classList.toggle("fadeOut");
                document.getElementById("header").classList.toggle("fadeIn");
                this.setState({hideDetailedScroll : false});
            }
        })
    }

    render(){
        return <div className="profileContainer">
            <div id = "header" className="header">
                <section>
                    < div id = "headerInfo" className="headerInfo">
                        <div className="headerDP">
                            <img className="headerImage" src = "/images/profilepic.jpg"/>
                        </div>
                        <h1 className="headerName">Chaitanya Chinta</h1>
                    </div>
                </section>
            </div>
            <div className="profileInfo">
                <section>
                    <div id = "identityInfo" className="identityInfo">
                        <div className="profileDP">
                            <img className="dPImage" src = "/images/profilepic.jpg"/>
                        </div>
                        <h1 className="fullname">Chaitanya Chinta</h1>
                    </div>
                </section>
                        <h4 id = "scroll" className="scroll">Scroll for Detailed Info</h4>

                    <div className="overview">
                        <ul>
                            <li>6.5 Years Experience</li>
                            <li>Current Organization : Hitachi Consulting</li>
                            <li>Current Designation : Sr Software Engineer</li>
                            <li>Skill Set : <p> JAVA , SPRING , HIBERNATE , SQL , STORED PROCEEDURES , <br/> 
                                REACTJS , NODEJS , EXPRESS , ANGULARJS , SMART COMMUNICATIONS</p></li>
                        </ul>
                    </div>
            </div>
            <div className="detailedInfo">

            </div>
            
            <div className="footer">
                <a href="tel:+91-8143292624">+91-8143292624</a>
                <a href="mailto:chaitanyachinta55@gmail.com">chaitanyachinta55@gmail.com</a>
                <a href="https://www.linkedin.com/in/chaitanya-chinta-799aaa44">linkedin</a>
            </div>
        </div>
    }
}

export default homePage;