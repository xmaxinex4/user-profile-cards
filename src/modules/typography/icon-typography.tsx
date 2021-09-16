import React from "react";

import { Grid, makeStyles, SvgIconTypeMap, Theme, Typography, TypographyVariant } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

const useStyles = makeStyles<Theme, {iconSize: number}>((theme) => ({
    icon: ({ iconSize }) => ({
        fontSize: iconSize,
    }),
}));

export interface IconTypographyProps {
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    iconSize: number;
    variant: TypographyVariant;
    displayText: string;
}

export function IconTypography(props: IconTypographyProps) {
const { icon: Icon, iconSize, displayText, variant } = props;

const { icon } = useStyles({iconSize});

return (
    <Grid container alignItems="center" spacing={1}>
      <Grid item>
        <Icon className={icon} />
      </Grid>
      <Grid item>
        <Typography variant={variant}>{displayText}</Typography>
      </Grid>
    </Grid>
  );
}