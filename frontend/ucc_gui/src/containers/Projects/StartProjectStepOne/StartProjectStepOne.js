import React from "react";
import "./StartProjectStepOne.css";
import axios from "axios";
import ProjectBanner from "../../../components/Project/ProjectBanner";
import ProjectInfo from "../../../components/Project/ProjectDetails/ProjectInfo";
import ProjectContent from "../../../components/Project/ProjectStepOne/ProjectContent";
import cookie from "react-cookies";
import Button from "react-bootstrap/Button";


class StartProjectStepOne extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            ProjectId: this.props.match.params.id,
            ProjectBadge : '',
            ProjectBanner : '',
            ProjectName : '',
            ProjectCategory : '',
            ProjectVideo : '',
            ProjectMission: '',
            ProjectGoal: '',
            ProjectVideoName: '',
            ProjectDateStarted: 'Date Started',
            UserProjectVideo: '',
            UserEmailId: cookie.load('user_emailid')
        }
     }  

     videoHandler(event){
      this.setState({
            UserProjectVideo : event.target.files[0]
        });
     }

     moveToStepTwoHandler(event)
     {
        let form_data = new FormData();
            form_data.append('ProjectId', this.state.ProjectId);
            form_data.append('Email', this.state.UserEmailId);
            form_data.append('ProjectVideo', this.state.UserProjectVideo, this.state.UserProjectVideo.name);

        axios.defaults.withCredentials = true;
        axios.defaults.xsrfHeaderName = "X-CSRFToken";
        console.log(form_data)
        axios.put(`http://127.0.0.1:8000/charityproject/invitationVideo`, form_data,
        {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        .then(res => console.log(res))
        .catch(error => console.log(error))
     }

    componentDidMount () {
        const project_id = this.props.match.params.id;
        axios.get(`http://127.0.0.1:8000/charityproject/${project_id}`)
      .then(res => {
              this.setState({
                  ProjectName : res.data["project_name"],
                  ProjectBanner : res.data["project_banner"],
                  ProjectBadge : res.data["project_badge"],
                  ProjectCategory: res.data["project_category"],
                  ProjectMission: res.data["project_mission"],

              });
          console.log(res.data)
      }).catch(error => console.log(error))
    }

    render() {
      return(
            <div style={{margin:"10px"}}>
                <ProjectBanner image={this.state.ProjectBanner}/>
                <ProjectInfo id={this.state.ProjectId} />
                <ProjectContent videoHandler={this.videoHandler.bind(this)}
                                userProjectVideo={this.state.UserProjectVideo}/>
                    <Button className = "backButton" variant="light" size="lg"> BACK </Button>
                      <Button className = "nextButton" variant="success" size="lg" onClick={this.moveToStepTwoHandler.bind(this)}> NEXT </Button>
            </div>
        )
    }
  }

export default StartProjectStepOne;