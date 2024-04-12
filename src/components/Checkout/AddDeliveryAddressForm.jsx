import React from "react";
import { Grid, Button,Box } from "@mui/material";
import Order from "./Order";

function AddDeliveryAddressForm() {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <div className="border rounded-md shadow-md h-80 overflow-y-scroll p-5">
            <div className="p-18 border-b cursor-pointer">
              <Order />
              <Button
                sx={{ mt: 2, bgcolor: "step1" }}
                size="large"
                variant="contained"
              >
                Deliver Here
              </Button>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className='border rounded-s-md shadow-md p-5'></Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default AddDeliveryAddressForm;
