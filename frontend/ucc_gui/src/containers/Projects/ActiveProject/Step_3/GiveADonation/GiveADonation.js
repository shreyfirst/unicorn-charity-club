import React from "react";
import GiveDonationDetails from "../../../../../components/Project/ActiveProject/Step_3/GiveADonation/GiveDonationDetails"
import {Container} from "@material-ui/core";
import cookie from "react-cookies";
import AxiosConfig from "../../../../../axiosConfig";

class GiveADonation extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        projectId: this.props.match.params.id,
        userEmail: cookie.load('user_email'),
        description :'',
        video :'',
        finalVideo :'',
        name :'',
        address :'',
        city :'',
        stateName : '',
        website :''
    }
 }

 onSubmit(event, action_type) {
     let formData = new FormData();
     console.log(this.state.name)
     console.log(this.state.finalVideo)
        try {
            formData.append('user_email', this.state.userEmail);
            formData.append('project_id', this.state.projectId);
            formData.append('organisation_name', this.state.name);
            formData.append('organisation_address', this.state.address);
            formData.append('organisation_city', this.state.city);
            formData.append('website', this.state.website);
            formData.append('organisation_state', this.state.stateName);
            formData.append('details', this.state.description);
            formData.append('action_type', action_type );
            formData.append('exp_video', this.state.finalVideo);
        } catch (err) {
            console.log(err)
        }

                AxiosConfig.post('charityproject/giveDonation', formData,
                    {
                        headers: {
                            'content-type': 'multipart/form-data'
                        }
                    })
                    .then(res => console.log(res))
                    .catch(error => console.log(error))
 }

defaultIfEmpty(value){
        return value === "" ? "":value;
    }

 changeHandler = (event) =>{
        this.setState({
           [event.target.name]:event.target.value
        })
    };

    videoHandler = (event) =>{
        this.setState({
            video: URL.createObjectURL(event.target.files[0]),
            finalVideo: event.target.files[0]
        });
    };

    render() {
      return(
                  <div>
                    <Container>
                        <GiveDonationDetails id={this.props.match.params.id}
                        name = {this.state.name}
                        address = {this.state.address}
                        city = {this.state.city}
                        stateName = {this.state.stateName}
                        website = {this.state.website}
                        changeHandler = {this.changeHandler.bind(this)}
                        description = {this.state.description}
                        defaultIfEmpty = {this.defaultIfEmpty.bind(this)}
                        onSubmit = {this.onSubmit.bind(this)}
                        videoHandler={this.videoHandler.bind(this)}
                        video = {this.state.video}/>
                    </Container>
                  </div>
        )
    }
}

export default GiveADonation;