import React , {Component} from 'react';
import '../../scss/homePage.css';
class homePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            hideDetailedScroll : false,
            clickedLevel : "Jan 2014 - Jan 2017",
            experienceData : {
                "Jan 2014 - Jan 2017" : {"Company": "Cognizant" , "Logo" : "cts_logo.png" , "Skills Acquired" : "Mainframes , JCL , Cobol , Java , Spring , Hibernate" ,
                    "Projects" : [{"Title" : "Walmart Finance Sne" , "Duration" : "Jan 2014 - Apr 2015" , "Role" : "Mainframes Developer" , "Programming Languages" : "COBOL , JCL" , "Team Size" : 20 },
                    {"Title" : "3M Visitor Management" , "Duration" : "Apr 2015 - Jan 2017" , "Role" : "Java Developer" , "Programming Languages" : "Java, spring, Hibernate, WebServices(RestFull), SQL, Stored Procedure" , "Team Size" : "09" }
                    ]},
                "Feb 2017 - Mar 2018" : {"Company": "Cognizant" , "Logo" : "cts_logo.png" , "Skills Acquired" : "Mainframes , JCL , Cobol , Java , Spring , Hibernate" ,
                    "Projects" : [{"Title" : "Walmart Finance Sne" , "Duration" : "Jan 2014 - Apr 2015" , "Role" : "Mainframes Developer" , "Programming Languages" : "COBOL , JCL" , "Team Size" : 20 },
                    {"Title" : "3M Visitor Management" , "Duration" : "Apr 2015 - Jan 2017" , "Role" : "Java Developer" , "Programming Languages" : "Java, spring, Hibernate, WebServices(RestFull), SQL, Stored Procedure" , "Team Size" : "09" }
                    ]}
            }
            
        }
        this.timelineClicked = this.timelineClicked.bind(this);
    }

    componentDidMount(){
        window.addEventListener('scroll' , ()=>{
            // console.log(window.scrollY);
            if(!this.state.hideDetailedScroll && window.scrollY >= 40){
                document.getElementById("scroll").classList.toggle("fadeOut");
                document.getElementById("identityInfo").classList.toggle("fadeOut");
                document.getElementById("overview").classList.toggle("fadeOut");
                document.getElementById("header").classList.toggle("fadeIn");
                document.getElementById("timeline").classList.toggle("timelineActive");
                
                //BELOW CODE SHOULD HELP IN ANIMATING ONE AFTER THE OTHER
                const eachline = document.querySelectorAll('.timeline li');
                console.log(eachline);
                eachline.forEach((li , index) => {
                    li.style.animation = `timelineFadein 2s ease forwards ${index / 9}s`
                });
                this.setState({hideDetailedScroll : true});
            }

            if(this.state.hideDetailedScroll && window.scrollY === 0){
                console.log(window.scrollY);
                document.getElementById("scroll").classList.toggle("fadeOut");
                document.getElementById("identityInfo").classList.toggle("fadeOut");
                document.getElementById("overview").classList.toggle("fadeOut");
                document.getElementById("header").classList.toggle("fadeIn");
                document.getElementById("timeline").classList.toggle("timelineActive");
                this.setState({hideDetailedScroll : false});
            }
        })
    }

    timelineClicked(eachLevel){
        this.setState({clickedLevel : eachLevel});
        document.getElementById("timeline").classList.toggle("timelineClicked");
        document.getElementById("detailsPanel").classList.toggle("detailsPanelClicked");
    }

    render(){
        return <div className="profileContainer">
            <div id = "header" className="header">
                <section>
                    < div id = "headerInfo" className="headerInfo">
                        <div className="headerDP">
                            <img className="headerImage" src = "/images/profilepic.jpg" alt=""/>
                        </div>
                        <h1 className="headerName">Chaitanya Chinta</h1>
                    </div>
                </section>
            </div>
            <div className="profileInfo">
                <section>
                    <div id = "identityInfo" className="identityInfo">
                        <div className="profileDP">
                            <img className="dPImage" src = "/images/profilepic.jpg" alt=""/>
                        </div>
                        <h1 className="fullname">Chaitanya Chinta</h1>
                    </div>
                </section>
                
                <h4 id = "scroll" className="scroll">Scroll for Detailed Info</h4>

                <div id = "overview" className="overview">
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
                <div id = "timeline" className="timeline">
                    <ul>
                        {
                            Object.keys(this.state.experienceData).map(eachLevel => (
                                <li onClick = {() => this.timelineClicked(eachLevel)} >{eachLevel}</li>
                            ))
                        }
                        {/* <li>Jun 2019...</li>
                        <li>Mar 2018 - Jun 2019</li>
                        <li>Feb 2017 - Mar 2018</li>
                        <li onClick = {() => this.timelineClicked()} >Jan 2014 - Jan 2017</li> */}
                    </ul>
                </div>
                <div id = "detailsPanel" className="detailsPanel">
                    <div className="firstcomp">
                        <div>
                            <img src = {"/images/"+this.state.experienceData[this.state.clickedLevel].Logo} alt="" className="firstlogo"></img>
                            <div className="closeDetais" onClick = {() => this.timelineClicked()}>X</div>
                        </div>
                        {/* <div className="skillAcquired">Skill Acquired : Mainframes , JCL , Cobol , Java , Spring , Hibernate</div> */}
                        {Object.keys(this.state.experienceData[this.state.clickedLevel]).map(eachData => (
                            "Projects" !== eachData && "Logo" !== eachData && "Company" !== eachData ?
                            <p>{eachData} : {this.state.experienceData[this.state.clickedLevel][eachData]}</p>
                            :
                            "Projects" === eachData ?
                            
                            <p>{eachData} : {this.state.experienceData[this.state.clickedLevel][eachData].map(eachProject => (
                                Object.keys(eachProject).map( each => (
                                    <p>{each} : {eachProject[each]}</p>
                                ))
                            ))}</p>
                            :
                            <></>
                        ))}
                    </div>
                </div>
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