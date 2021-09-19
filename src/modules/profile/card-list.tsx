import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { slice } from "lodash";

import AddIcon from "@material-ui/icons/Add";
import { Button, Grid, makeStyles } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

import { ProfileModal } from "./form/profile-modal";

import { ProfileCard } from "./card";
import { selectProfiles } from "./slice";
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
  pageSize: number;
}

export function ProfileCardList(props: ProfileCardListProps): React.ReactElement {
  const profiles = useSelector(selectProfiles);

  const { pageSize } = props;
  const { profileCard, profileCardContainer } = useStyles();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [profilesToShow, setProfilesToShow] = useState(
    slice(profiles, 0, pageSize)
  );

  const [editingProfile, setEditingProfile] = useState<Profile>();

  // States to handle page navigation
  const [page, setPage] = useState(1);

  // Logic for handling which profiles to show given page and pageSize as profile list or page change
  useEffect(() => {
    const lowRangeSlice = pageSize * (page - 1);
    const highRangeSlice = pageSize * page;

    setProfilesToShow(slice(profiles, lowRangeSlice, highRangeSlice))    
  }, [profiles, page, pageSize]);

  const onPageChange = useCallback((event: object, page: number) => {
    setPage(page);
  }, [setPage]);

  const pageCount = useMemo(() => {
    let count = Math.floor(profiles.length / pageSize);

    if (profiles.length % pageSize !== 0) {
      count++; // We need an extra page for the remainder of profiles
    }

    return count || 1;
  }, [profiles, pageSize]);

  const onProfileEdit = useCallback((profile: Profile) => {
    setEditingProfile(profile);
    setIsModalOpen(true);
  }, []);

  const openAddProfileModal = useCallback(() => {
    setIsModalOpen(true);
  }, [setIsModalOpen]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setEditingProfile(undefined);
  }, [setIsModalOpen]);

  return (
    <Grid container direction="column" alignItems="center" spacing={4}>
      <Grid item>
        <Button startIcon={<AddIcon />} variant="contained" color="secondary" onClick={openAddProfileModal}>Add Profile</Button>
      </Grid>
      <Grid item container className={profileCardContainer} spacing={2} alignItems="center" justifyContent="center">
        {profilesToShow.map(profile => (
          <Grid item className={profileCard} xs={12} md={6} key={profile.id}>
            <ProfileCard onEdit={onProfileEdit} profile={profile} />
          </Grid>
        ))}
      </Grid>
      <Grid item>
        <Pagination onChange={onPageChange} count={pageCount} size="large" color="secondary" showFirstButton showLastButton />
      </Grid>
      <ProfileModal profile={editingProfile} isOpen={isModalOpen} onClose={closeModal} />
    </Grid>
  );
}
