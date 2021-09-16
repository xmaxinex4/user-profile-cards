import React, { ReactNode } from "react";

import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    padding: theme.spacing( ),
  }
}));

export function PageLayout(props: { children: ReactNode }): React.ReactElement {
  const { children } = props;

  const { pageContainer } = useStyles();

  return (
    <Grid container alignItems="center" justifyContent="center" className={pageContainer}>
      {/* <Grid item> */}
        {children}
      {/* </Grid> */}
    </Grid>
  );
}
