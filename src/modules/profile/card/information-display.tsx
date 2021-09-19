import React, { useCallback } from "react";

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import PhoneEnabledOutlinedIcon from '@material-ui/icons/PhoneEnabledOutlined';
import EditIcon from "@material-ui/icons/Edit";

import { Grid, IconButton, makeStyles, Typography } from "@material-ui/core";

import { IconTypography } from "../../typography/icon-typography";

import { ProfileCardProps } from "./card";
import { ProfileAddressDisplay } from "./address-display";
import { ProfileCompanyDisplay } from "./company-display";

const useStyles = makeStyles((theme) => ({
  informationDisplayContainer: {
    padding: theme.spacing(2),
  },
  bold: {
    fontWeight: 600,
  },
}));

export interface ProfileInformationDisplayProps extends ProfileCardProps {
}

export function ProfileInformationDisplay(props: ProfileInformationDisplayProps) {
  const { profile, onEdit } = props;
  const { firstName, lastName, email, phone, website } = profile;

  const { bold, informationDisplayContainer } = useStyles();

  const onEditClick = useCallback(() => {
    onEdit(profile);
  }, [onEdit, profile]);

  return (
    <Grid container direction="column" spacing={2} className={informationDisplayContainer}>
      <Grid container item spacing={1}>
        <Grid container item alignItems="center" justifyContent="space-between" xs={12}>
          <Grid item>
            <Typography variant="h4" className={bold}>{firstName} {lastName}</Typography>
          </Grid>
          <Grid item>
            <IconButton color="primary" aria-label="edit" onClick={onEditClick}>
              <EditIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <IconTypography icon={MailOutlineIcon} displayText={email} />
        </Grid>
        <Grid item xs={12}>
          <ProfileAddressDisplay address={profile.address} />
        </Grid>
        <Grid item xs={12}>
          <IconTypography icon={PhoneEnabledOutlinedIcon} displayText={phone} />
        </Grid>
        <Grid item xs={12}>
          <IconTypography icon={LanguageOutlinedIcon} displayText={website} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <ProfileCompanyDisplay profile={profile} />
      </Grid>
    </Grid>
  );
}