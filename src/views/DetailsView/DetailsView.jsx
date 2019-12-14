import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import capitalize from "lodash/capitalize";
import replace from "lodash/replace";

const DetailsView = ({ url = "https://swapi.co/api/people/54/" }) => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(async (response) => {
        setInfo({
          ...response,
        });
      });
  }, [url]);

  const renderItems = () => {
    const keys = Object.keys(info);

    return keys.map((key) => {
      return (
        <ListItem>
          <ListItemText
            primary={replace(capitalize(key), "_", " ")}
            secondary={info[key]}
          />
        </ListItem>
      );
    });
  };

  return (
    <div>
      <Typography variant="h6">Nombre: {info.name}</Typography>
      <List dense>{renderItems()}</List>
    </div>
  );
};

export default DetailsView;
