import React, { useMemo } from "react";
import { Avatar, Card, Grid, makeStyles, Typography } from "@material-ui/core";

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import PhoneEnabledOutlinedIcon from '@material-ui/icons/PhoneEnabledOutlined';

import { Profile } from "./types";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 500,
    minHeight: 150,
    filter: "drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.05))",
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    color: "#FFFFFF",
    backgroundColor: theme.palette.primary.dark,
  },
  avatarContainer: {
    minHeight: 150,
    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  },
  informationDisplay: {
    padding: theme.spacing(2),
  },
  h6: {
    fontWeight: 600,
  },
  bold: {
    fontWeight: 600,
  },
}));

export interface ProfileCardProps {
  profile: Profile;
}

export function ProfileCard(props: ProfileCardProps): React.ReactElement {
  const { profile } = props;

  const { avatar, avatarContainer, bold, card, informationDisplay } = useStyles();

  const nameInitials = useMemo(() => {
    return profile.firstName.charAt(0).toUpperCase() + profile.lastName.charAt(0).toUpperCase();
  }, [profile.firstName, profile.lastName])

  return (
    <Card className={card}>
      <Grid container>
        <Grid className={avatarContainer} container justifyContent="center" alignItems="center" item xs={12} sm={4}>
          <Grid item>
            {profile?.imageUrl
              ? <Avatar className={avatar} src={profile.imageUrl} />
              : <Avatar className={avatar}>{nameInitials}</Avatar>
            }
          </Grid>
        </Grid>
        <Grid container spacing={1} className={informationDisplay} item xs={12} sm={8}>
          <Grid item xs={12}>
            <Typography className={bold} variant="h6">{profile.firstName} {profile.lastName}</Typography>
          </Grid>
          <Grid container item alignItems="center" spacing={1} xs={12}>
            <Grid item>
              <MailOutlineIcon style={{ fontSize: 16 }} />
            </Grid>
            <Grid item>
              <Typography variant="subtitle2">{profile.email}</Typography>
            </Grid>
          </Grid>
          <Grid container item alignItems="center" spacing={1} xs={12}>
            <Grid item>
              <HomeOutlinedIcon style={{ fontSize: 16 }} />
            </Grid>
            <Grid item>
              <Typography variant="subtitle2">{profile.address}</Typography>
            </Grid>
          </Grid>
          <Grid container item alignItems="center" spacing={1} xs={12}>
            <Grid item>
              <PhoneEnabledOutlinedIcon style={{ fontSize: 16 }} />
            </Grid>
            <Grid item>
              <Typography variant="subtitle2">{profile.phone}</Typography>
            </Grid>
          </Grid>
          <Grid container item alignItems="center" spacing={1} xs={12}>
            <Grid item>
              <LanguageOutlinedIcon style={{ fontSize: 16 }} />
            </Grid>
            <Grid item>
              <Typography variant="subtitle2">{profile.website}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
