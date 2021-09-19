import React, { useCallback } from "react";

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import PhoneEnabledOutlinedIcon from '@material-ui/icons/PhoneEnabledOutlined';
import EditIcon from "@material-ui/icons/Edit";


import { Grid, IconButton, makeStyles, Typography } from "@material-ui/core";

import { ProfileCardProps } from "./card/card";
import { IconTypography } from "../typography/icon-typography";
import { Logo } from "./logo";

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
  const { profile, onEdit} = props;
  const { firstName, lastName, email, address, phone, website, companyName, companyCatchPhrase } = profile;

  const { bold, informationDisplayContainer } = useStyles();

  const onEditClick = useCallback(() => {
    onEdit(profile);
  }, [onEdit, profile]);

  return (
    <Grid container direction="column" spacing={4} className={informationDisplayContainer}>
      <Grid container item spacing={1}>
        <Grid container item alignItems="center" justifyContent="space-between" xs={12}>
          <Grid item>
            <Typography className={bold} variant="h6">{firstName} {lastName}</Typography>
          </Grid>
          <Grid item>
            <IconButton color="primary" aria-label="edit" onClick={onEditClick}>
              <EditIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <IconTypography icon={MailOutlineIcon} variant="subtitle2" iconSize={16} displayText={email} />
        </Grid>
        <Grid item xs={12}>
          <IconTypography icon={HomeOutlinedIcon} variant="subtitle2" iconSize={16} displayText={address} />
        </Grid>
        <Grid item xs={12}>
          <IconTypography icon={PhoneEnabledOutlinedIcon} variant="subtitle2" iconSize={16} displayText={phone} /> 
        </Grid>
        <Grid item xs={12}>
          <IconTypography icon={LanguageOutlinedIcon} variant="subtitle2" iconSize={16} displayText={website} />   
        </Grid>
      </Grid>
      <Grid container item alignItems="center" spacing={1}>
        <Grid item xs={2}>
          <Logo />
        </Grid>
        <Grid container item xs={10} direction="column">
          <Grid item>
            <Typography className={bold} variant="subtitle2">
              {companyName}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption">
              {companyCatchPhrase}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}