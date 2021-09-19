import React from "react";

import { Grid, makeStyles, Typography } from "@material-ui/core";

import { Logo } from "../logo";
import { Profile } from "../types";

const useStyles = makeStyles((theme) => ({
  icon: {
    padding: theme.spacing(1),
    paddingLeft: 0,
  },
  companyNameStyle: {
    fontWeight: "bold",
  },
  companySloganStyle: {
    fontStyle: "italic",
  },
}));

export interface ProfileCompanyDisplayProps {
  profile: Profile;
}

export function ProfileCompanyDisplay(props: ProfileCompanyDisplayProps) {
  const { companyName, companyCatchPhrase } = props.profile;
  const { icon, companyNameStyle, companySloganStyle } = useStyles();

  return (
    <Grid container alignItems="center">
      <Grid item className={icon} xs={2}>
        <Logo />
      </Grid>
      <Grid container direction="column" item xs={10}>
        <Grid item>
          <Typography variant="caption" className={companyNameStyle}>{companyName}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption" className={companySloganStyle}>{companyCatchPhrase}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}