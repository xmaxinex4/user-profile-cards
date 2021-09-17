import React, { useCallback, useMemo, useState } from "react";

import { slice } from "lodash";

import { Button, Grid, makeStyles } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

import { ProfileCard } from "./card";
import { Profile } from "./types";


const useStyles = makeStyles({
  profileCard: {
   maxWidth: 600,
  },
  profileCardContainer: {
    maxWidth: 1200,
  }
});

export interface ProfileCardListProps {
  profiles: Profile[];
  pageSize: number;
}

export function ProfleCardList(props: ProfileCardListProps): React.ReactElement {
  const { profiles, pageSize } = props; // should get profiles from store
  const { profileCard, profileCardContainer } = useStyles();

  const [profilesToShow, setProfilesToShow] = useState(
    slice(profiles, 0, profiles?.length < pageSize ? profiles.length : pageSize)
  );
  
  const onPageChange = useCallback((event: object, page: number) => {
    const lowRangeSlice = pageSize * (page - 1);
    const highRangeSlice = pageSize * page;

     setProfilesToShow(slice(profiles, lowRangeSlice, highRangeSlice));
  }, []);

  const pageCount = useMemo(() => {
    let count = Math.floor(profiles.length / pageSize);

    if (profiles.length % pageSize != 0) {
      count++; // We need an extra page for the remainder of profiles
    }

    return count || 1;
  }, [profiles]);
  

  return (
    <Grid container direction="column" alignItems="center" spacing={4}>
      <Grid item>
        <Button variant="contained" color="secondary">Add Profile</Button>
      </Grid>
      <Grid item container className={profileCardContainer} spacing={2} alignItems="center" justifyContent="center">
        {profilesToShow.map(profile => (
          <Grid item className={profileCard} xs={12} md={6}>
            <ProfileCard profile={profile} />
          </Grid>
        ))}
      </Grid>
      <Grid item>
        <Pagination onChange={onPageChange} count={pageCount} size="large" color="secondary" showFirstButton showLastButton />
      </Grid>
    </Grid>
  );
}
