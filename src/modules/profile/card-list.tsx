import React from "react";

import { Grid, makeStyles } from "@material-ui/core";

import { ProfileCard } from "./card";
import { Profile } from "./types";

const useStyles = makeStyles((theme) => ({
  cardListContainer: {
    padding: theme.spacing(6),
  }
}));

export interface ProfileCardListProps {
  profiles: Profile[];
}

export function ProfleCardList(props: ProfileCardListProps): React.ReactElement {
  const { profiles } = props;

  const { cardListContainer } = useStyles();

  return (
    <Grid container alignItems="center" justifyContent="center" className={cardListContainer}>
      <Grid container item spacing={2} alignItems="center" justifyContent="center">
        {profiles.map(profile => (
          <Grid item>
            <ProfileCard profile={profile} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
