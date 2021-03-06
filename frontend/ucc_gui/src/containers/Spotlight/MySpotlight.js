import React from "react";
import "./MySpotlight.css";
import "../ProjectCommon.css"
import ProfileInfo from "../../components/Spotlight/ProfileInfo";
import ProfileDetails from "../../components/Spotlight/ProfileDetails";
import SocialImpact from "../../components/Spotlight/SocialImpact";
import CompletedProjects from "../../components/Spotlight/CompletedProjects";
import TreasureTrove from "../../components/Spotlight/TreasureTrove";
import { Container } from "@material-ui/core";

class MySpotlight extends React.Component {
  render() {
    return (
        <div className="SpotlightPage">
            <Container>
                <ProfileInfo />
                
                <ProfileDetails />
                
                <SocialImpact />
                             
                <CompletedProjects />
                
                <TreasureTrove />           
            </Container> 
        </div>
    );
  }
}

export default MySpotlight;