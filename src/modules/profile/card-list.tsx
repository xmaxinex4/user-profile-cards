import React from "react";

import { Grid, makeStyles } from "@material-ui/core";

import { ProfileCard } from "./card";
import { Profile } from "./types";

const useStyles = makeStyles(() => ({
  gridItem: {
   maxWidth: 500,
  }
}));

export interface ProfileCardListProps {
  profiles: Profile[];
}

export function ProfleCardList(props: ProfileCardListProps): React.ReactElement {
  const { profiles } = props;
  const { gridItem } = useStyles();

  return (
    <Grid item container spacing={2} alignItems="center" justifyContent="center">
      {profiles.map(profile => (
        <Grid item className={gridItem} xs={12} md={6}>
          <ProfileCard profile={profile} />
        </Grid>
      ))}
    </Grid>
  );
}
