import React from "react";
import Grid from "@material-ui/core/Grid";
import ImgMediaCard from "../ImageCard";

class GiftGrid extends React.Component {
    giftSelectedHandler(value) {
        // window.open('Projects/'+value,"_self");
    }

  render() {
    return (
      <div style={{ flexGrow: 1 }}>
        <Grid container spacing={2} direction="row" justify="flex-start" alignItems="flex-start" style={{paddingLeft: "20px", paddingRight: "20px", paddingTop: "20px"}}>

          {/* Need to create a grid here */}
          {/* Need to call Imagecard component here as well */}
        </Grid>
      </div>
    );
  }
}

export default GiftGrid;