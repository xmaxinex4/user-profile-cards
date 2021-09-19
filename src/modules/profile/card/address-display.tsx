import React from "react";

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

import { Grid, makeStyles, Typography } from "@material-ui/core";

import { Address } from "../types";

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: theme.spacing(2.5),
  },
  addressTextContainer: {
    width: "unset",
  }
}));

export interface ProfileAddressDisplayProps {
  address: Address
}

export function ProfileAddressDisplay(props: ProfileAddressDisplayProps) {
  const { address } = props;
  const { icon, addressTextContainer } = useStyles();

  return (
    <Grid container alignItems="center" spacing={1}>
      <Grid item>
        <HomeOutlinedIcon className={icon} />
      </Grid>
      <Grid container direction="column" className={addressTextContainer} item>
        <Grid item>
          <Typography variant="h6">{address.street}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">{address.city}, {address.state} {address.zipCode}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}