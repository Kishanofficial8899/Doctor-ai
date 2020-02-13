import React from "react";
import {
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";

import { Header } from "Components";
import useStyles from "./style";

const Layout = props => {
  const classes = useStyles();
  return (
    <div>
      <Header title="Hospitals" />
      <div className={classes.addbutton}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() => props.history.push("/")}>
          BACK
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}>
          ADD HOSPITAL
        </Button>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Hospital Name</TableCell>
            <TableCell style={{ width: "10%", fontSize: "1rem" }}>
              Mobile No
            </TableCell>
            <TableCell style={{ fontSize: "1rem" }}>City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow className={classes.listContainer}>
            <TableCell>Appollo Hospital</TableCell>
            <TableCell>9106962809</TableCell>
            <TableCell>Ahemedabad</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Layout;
