import { Button, Grid, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <div>
      <Grid
        className=" bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" varient="h6">
            Company
          </Typography>

     <div>
     <Button className="pb-5" varient="h6" gutterBottom>
            About
          </Button>
     </div>
     <div>
     <Button className="pb-5" varient="h6" gutterBottom>
            Blog
          </Button>
     </div>
     <div>
     <Button className="pb-5 text-white" varient="h6" gutterBottom>
            Jobs 
          </Button>
     </div>
     <div>
     <Button className="pb-5" varient="h6" gutterBottom>
            Partners
          </Button>
     </div>
     <div>
     <Button className="pb-5" varient="h6" gutterBottom>
            Contact
          </Button>
     </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" varient="h6">
            Company
          </Typography>

     <div>
     <Button className="pb-5" varient="h6" gutterBottom>
            About
          </Button>
     </div>
     <div>
     <Button className="pb-5" varient="h6" gutterBottom>
            Blog
          </Button>
     </div>
     <div>
     <Button className="pb-5 text-white" varient="h6" gutterBottom>
            Jobs 
          </Button>
     </div>
     <div>
     <Button className="pb-5" varient="h6" gutterBottom>
            Partners
          </Button>
     </div>
     <div>
     <Button className="pb-5" varient="h6" gutterBottom>
            Contact
          </Button>
     </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" varient="h6">
            Company
          </Typography>

     <div>
     <Button className="pb-5" varient="h6" gutterBottom>
            About
          </Button>
     </div>
     <div>
     <Button className="pb-5" varient="h6" gutterBottom>
            Blog
          </Button>
     </div>
     <div>
     <Button className="pb-5 text-white" varient="h6" gutterBottom>
            Jobs 
          </Button>
     </div>
     <div>
     <Button className="pb-5" varient="h6" gutterBottom>
            Partners
          </Button>
     </div>
     <div>
     <Button className="pb-5" varient="h6" gutterBottom>
            Contact
          </Button>
     </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" varient="h6">
            Company
          </Typography>

     <div>
     <Button className="pb-5" varient="h6" gutterBottom>
            About
          </Button>
     </div>
     <div>
     <Button className="pb-5" varient="h6" gutterBottom>
            Blog
          </Button>
     </div>
     <div>
     <Button className="pb-5 text-white" varient="h6" gutterBottom>
            Jobs 
          </Button>
     </div>
     <div>
     <Button className="pb-5" varient="h6" gutterBottom>
            Partners
          </Button>
     </div>
     <div>
     <Button className="pb-5" varient="h6" gutterBottom>
            Contact
          </Button>
     </div>
        </Grid>

        <Grid className="pt-20" item xs={12}>
        <Typography variant="body2" component='p' align="center">All Rights reserved</Typography>
        </Grid>        
      </Grid>
    </div>
  );
}

export default Footer;
