import React from "react";
import "./ActiveProjectInfo.css";
import EachActiveProject from "./EachActiveProject";


class ActiveProjectInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      ProjectId : this.props.projectId,     
      ProjectName : '',
      ProjectJoinDate : 'Not Available' 
    }
 }

renderList (type) {
    if("Planning" === type) {
      return (
          <div>                    
              {this.props.projectList              
                .map((elem, index) => (
                  <div className="ProjectInfo_MainDiv" key={index} >
                    <div className="ProjectInfo_Container">    
                      <EachActiveProject 
                        key={index} projectId={elem.project_id} 
                        project_status = {elem.planning_status} 
                        type = {type}
                        project_start_date = {elem.project_start_date}
                      /> 
                    </div>
                  </div>
              ))}                    
        </div>
      );
    }else if ("Active" === type){
      return (
        <div>                    
            {this.props.projectList              
              .map((elem, index) => (
                <div className="ProjectInfo_MainDiv" key={index} >
                  <div className="ProjectInfo_Container">    
                    <EachActiveProject 
                      key={index} projectId={elem.project_id} 
                      challenge_status = {elem.challenge_status} 
                      type = {type}                       
                      project_start_date = {elem.project_join_date}
                    /> 
                  </div>
                </div>
            ))}                
        </div>
      );
    }

}


    render() {
      return (
        <div>
          {this.renderList(this.props.list_type)}    
        </div>        
      )        
    }
}

export default ActiveProjectInfo;  