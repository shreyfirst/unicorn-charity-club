import React from "react";
import Button from "react-bootstrap/Button";
import "./ActiveProjectChallenge1.css";
import ProgressStepper from "../../../../components/Project/ProgressStepper";
import ProjectBanner from "../../../../components/Project/ProjectBanner";
import AxiosConfig from '../../../../axiosConfig'
import { Player } from 'video-react';
import ProjectInfo from "../../../../components/Project/Details/ProjectInfo";
import TextWhite from "../../../../components/General/Text/TextWhite";
import TextBlueHeading from "../../../../components/General/Text/TextBlueHeading";
import TextBlackSubHeading from "../../../../components/General/Text/TextBlackSubHeading";
import TextBlack from "../../../../components/General/Text/TextBlack";

class ActiveProjectChallenge1 extends React.Component {
    constructor(props) {
        super(props);    
        this.state = {
            projectID : this.props.match.params.id,
            projectName : '',
            projectBanner : '',
            projectVideoName : '',
            projectVideo : '',
            projectMission : ''
        }
     }

     componentDidMount () {        
        AxiosConfig.get(`charityproject/${this.state.projectID}/`)
      .then(res => {
              this.setState({
                  projectName : res.data["name"],
                  projectBanner : res.data["banner"],
                  projectVideo: res.data["video"],
                  projectVideoName: res.data["project_video_name"],
                  projectMission : res.data["mission"]
              });
          console.log(res.data)
      }).catch(error => console.log(error))
    }

    buttonHandler() {
        AxiosConfig.put(`charityproject/update/Challenge/`, {
            "project_id" : this.props.match.params.id           
        })
        .then(this.props.history.push(`/Projects/${this.props.match.params.id}/ActiveProjectChallenge2`))
        .catch(error => console.log(error))

    }

    render() {
      return(
             <div style={{margin:"15px"}}>
                <div className="header_step_banner_common">
                    <div className="stepper_common" >
                        <ProgressStepper currentStep="0" />
                    </div>
                    <div className="banner_common">
                        <ProjectBanner image={this.state.projectBanner}  />
                    </div>
                </div>

                <div className="content_project_info_vertical">
                    <ProjectInfo vertical={true} id = {this.state.projectID}/>
                </div>
                        
                
                <div className="content_section">
                    <div className="content_project_info">
                        <ProjectInfo vertical={false} id = {this.state.projectID}/>
                    </div>
                    
                    <br/>
                    <TextBlueHeading message="CHALLENGE 1: Exploration"/><br/>
                    <TextBlackSubHeading message = "PRESENTATION"/>
                    <TextBlackSubHeading message = "Prep for Success Exploration Presentation"/>
                        <div>                            
                            <Player
                            playsInline                      
                            src={this.state.projectVideo}
                            />
                        </div>

                        <br/>
                        <div className="insideContent">
                        <TextBlack message = {this.state.projectMission}/>
                        </div>    
                                       
                </div>
                {/* <hr style={{height: "1px", background:"#333"}}/> */}
                
                <div className="exploreLink content_section">
                    <div className = "inside-content">
                    <a href="https://www.pinterest.com/" target="_blank">
                    <h5 className="textHeader">
                        <span>Explore More</span>
                    </h5>     
                    </a>
                    </div>
                </div>

                <Button className="buttonStyle" variant="success"
                        size="lg" onClick={this.buttonHandler.bind(this)}>
                    <b><TextWhite message={"NEXT"}/></b>
                </Button>

            </div>
        )
    }
}

export default ActiveProjectChallenge1;  