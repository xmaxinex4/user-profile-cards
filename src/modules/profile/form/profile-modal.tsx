import React from "react";
import { Card, CardContent, Grid, makeStyles, Modal, Typography } from "@material-ui/core";

import { Profile } from "../types";

import { ProfileForm } from "./profile-form";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(4),
    maxHeight: 550,
  },
  modalCard: {
    width: 500,
    maxHeight: 550,
    overflowY: "auto",
  },
  cardContent: {
    padding: theme.spacing(3),
  },
  modalHeader: {
    paddingTop: theme.spacing(3),
  }
}));

export interface ProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    profile?: Profile;
}

export function ProfileModal(props: ProfileModalProps): React.ReactElement {
  const { isOpen, onClose, profile } = props;
  const { modal, modalCard, modalHeader, cardContent } = useStyles();

  return (
    <Modal className={modal} open={isOpen} onClose={onClose} aria-labelledby="edit-profile" aria-describedby="edits-profile">
      <Card className={modalCard}>
        <Grid container direction="column" alignItems="center" justifyContent="center">
          <Grid item className={modalHeader}>
            <Typography variant="h4">{profile ? "Edit" : "Add"} Profile</Typography>
          </Grid>
          <Grid item>
            <CardContent className={cardContent}>
              <ProfileForm profile={profile} onClose={onClose} />
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Modal>
  );
}
