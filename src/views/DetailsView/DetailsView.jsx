import React from "react";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";

const DetailsView = () => {
  return (
    <div>
      <Typography variant="h6">Nombre: R2D2</Typography>
      <List dense>
        <ListItem>
          <ListItemText primary="Año de nacimiento" secondary="19 BBY" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Color de ojos" secondary="Blue" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Color de pelo" secondary="Blond" />
        </ListItem>
      </List>
    </div>
  );
};

export default DetailsView;
