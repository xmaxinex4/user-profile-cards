import React from "react";

import { Grid, Link, makeStyles, SvgIconTypeMap, Theme, Typography, TypographyVariant } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

const useStyles = makeStyles<Theme, { iconSize?: number }>((theme) => ({
  icon: ({ iconSize }) => ({
    fontSize: iconSize || theme.spacing(2.5),
    paddingTop: theme.spacing(1),
  }),
}));

export interface IconTypographyProps {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  iconSize?: number;
  variant?: TypographyVariant;
  displayText: string;
  linkUrl?: string;
}

export function IconTypography(props: IconTypographyProps) {
  const { icon: Icon, iconSize, displayText, variant, linkUrl } = props;

  const { icon } = useStyles({ iconSize });

  return (
    <Grid container alignItems="center" spacing={1}>
      <Grid item>
        <Icon className={icon} />
      </Grid>
      <Grid item>
        <Typography variant={variant || "h6"}>
          {linkUrl
            ? <Link href={linkUrl} >{displayText}</Link>
            : displayText
          }
        </Typography>
      </Grid>
    </Grid>
  );
}