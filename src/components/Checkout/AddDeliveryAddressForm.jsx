import React from "react";
import { Grid, Button, Box, TextField } from "@mui/material";
import Order from "./Order";

function AddDeliveryAddressForm() {

  const handelSubmit=(e)=>{
    e.preventDefault();
    const data=new FormData(e.currentTarget);

    const allData={
      firtname:data.get("firstname"),
      Lastname:data.get("lastname"),
      Address:data.get("address"),
      ZipCode:data.get("zip"),
      PhoneNumber:data.get("phonenumber"),
      State:data.get("state"),
      City:data.get("city")

    }

    console.log("addres",allData);
  }

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
          <Box className="border rounded-s-md shadow-md p-5">
            <form onClick={handelSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="firstname"
                    label="First name"
                    name="firstname"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    id="Lastname"
                    label="Last name"
                    name="lastname"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    id="address"
                    label="Address"
                    name="address"
                    fullWidth
                    autoComplete="given-name"
                    rows={4}
                    multiline
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="City"
                    label="City"
                    name="city"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="State"
                    label="State"
                    name="state"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    id="Zip Code"
                    label="Zip Code"
                    name="zip"
                    fullWidth
                    autoComplete="pincode"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="Phone Number"
                    label="Phone Number"
                    name="phonenumber"
                    fullWidth
                    autoComplete="given-name"
                  />

<Grid  xs={12}>
<Button  
                    sx={{ mt: 2, bgcolor: "step1" }}
                    size="large"
                    variant="contained"
                    type="Submit"
                  >
                    Deliver Here
                  </Button>
  
</Grid>
                 
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default AddDeliveryAddressForm;
