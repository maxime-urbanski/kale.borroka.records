import { makeStyles } from "@material-ui/core/styles";
import LaunchIcon from "@material-ui/icons/Launch";
import * as React from "react";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
  },
  icon: {
    width: "1em",
    paddingLeft: 6,
  },
});

const MyUrlField = ({ record = {}, source }) => {
  const classes = useStyles();
  return (
    <a href={record[source]} className={classes.link}>
      {record[source]}
      <LaunchIcon className={classes.icon} />
    </a>
  );
};

export default MyUrlField;
