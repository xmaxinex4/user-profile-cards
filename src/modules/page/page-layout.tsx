import React, { ReactNode } from "react";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    padding: theme.spacing(3),
  }
}));

export function PageLayout(props: { children: ReactNode }): React.ReactElement {
  const { children } = props;

  const { pageContainer } = useStyles();

  return (
    <div className={pageContainer}>
      {children}
    </div>
  );
}
