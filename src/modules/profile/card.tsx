import React, { useMemo } from "react";
import { Avatar, Card, Grid, makeStyles } from "@material-ui/core";

import { Profile } from "./types";
import { ProfileInformationDisplay } from "./information-display";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
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
}));

export interface ProfileCardProps {
  profile: Profile;
}

export function ProfileCard(props: ProfileCardProps): React.ReactElement {
  const { profile } = props;

  const { avatar, avatarContainer, card } = useStyles();

  const nameInitials = useMemo(() => {
    return profile.firstName.charAt(0).toUpperCase() + profile.lastName.charAt(0).toUpperCase();
  }, [profile.firstName, profile.lastName])

  return (
    <Card className={card}>
      <Grid container>
        <Grid className={avatarContainer} container justifyContent="center" alignItems="center" item xs={12} md={4}>
          <Grid item>
            {profile?.imageUrl
              ? <Avatar className={avatar} src={profile.imageUrl} />
              : <Avatar className={avatar}>{nameInitials}</Avatar>
            }
          </Grid>
        </Grid>
        <Grid item xs={12} sm={8}>
          <ProfileInformationDisplay profile={profile} />
        </Grid>
      </Grid>
    </Card>
  );
}
