import React, { useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { slice } from "lodash";

import { Button, Grid, makeStyles } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

import { ProfileModal } from "./form/profile-modal";

import { ProfileCard } from "./card";
import { selectProfiles } from "./slice";

const useStyles = makeStyles({
  profileCard: {
   maxWidth: 600,
  },
  profileCardContainer: {
    maxWidth: 1200,
  }
});

export interface ProfileCardListProps {
  pageSize: number;
}

export function ProfleCardList(props: ProfileCardListProps): React.ReactElement {
  const profiles = useSelector(selectProfiles);

  const { pageSize } = props;
  const { profileCard, profileCardContainer } = useStyles();

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [profilesToShow, setProfilesToShow] = useState(
    slice(profiles, 0, profiles?.length < pageSize ? profiles.length : pageSize)
  );
  
  const onPageChange = useCallback((event: object, page: number) => {
    const lowRangeSlice = pageSize * (page - 1);
    const highRangeSlice = pageSize * page;

    setProfilesToShow(slice(profiles, lowRangeSlice, highRangeSlice));
  }, [pageSize, profiles]);

  const pageCount = useMemo(() => {
    let count = Math.floor(profiles.length / pageSize);

    if (profiles.length % pageSize != 0) {
      count++; // We need an extra page for the remainder of profiles
    }

    return count || 1;
  }, [profiles]);

  const onAddProfile = useCallback(() => {
    // TODO: Dispatch Add Profile
  }, []);

  const openAddProfileModal = useCallback(() => {
    setIsAddModalOpen(true);
  }, [setIsAddModalOpen]);

  const closeAddProfileModal = useCallback(() => {
    setIsAddModalOpen(false);
  }, [setIsAddModalOpen]);

  return (
    <Grid container direction="column" alignItems="center" spacing={4}>
      <Grid item>
        <Button variant="contained" color="secondary" onClick={openAddProfileModal}>Add Profile</Button>
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
      <ProfileModal isOpen={isAddModalOpen} onClose={closeAddProfileModal} />
    </Grid>
  );
}
