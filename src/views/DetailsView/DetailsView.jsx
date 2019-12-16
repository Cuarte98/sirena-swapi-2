import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  CircularProgress,
  Container,
} from "@material-ui/core";
import capitalize from "lodash/capitalize";
import replace from "lodash/replace";

const DetailsView = (props) => {
  const [info, setInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://swapi.co/api/people/" + props.match.params.id)
      .then((response) => response.json())
      .then(
        async ({
          name,
          height,
          mass,
          hair_color,
          skin_color,
          eye_color,
          birth_year,
          gender,
        }) => {
          setInfo({
            name,
            height,
            mass,
            hair_color,
            skin_color,
            eye_color,
            birth_year,
            gender,
          });
          setIsLoading(false);
        }
      );
  }, [props.match.params.id]);

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
    <Container>
      {!isLoading ? (
        <div>
          <Typography variant="h6">{info.name}</Typography>
          <List dense>{renderItems()}</List>
        </div>
      ) : (
        <CircularProgress />
      )}
    </Container>
  );
};

export default DetailsView;
