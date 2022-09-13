import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url({${process.env.PUBLIC_URL + '/img/LGfront.png'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover';
  },
}));


export default function () {
  const classes = useStyles();
  return
    <div className={classes.root}>
      <CssBaseline />
    </div>;
}
