import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const ListView = ({ renderedList }) => {
  const renderItems = (data) => {
    return data.map((item, key) => {
      return (
        <Link to={`/details/people/${key}`}>
          <ListItem button divider>
            <ListItemText primary={item.name} />
            <Icon edge="end" aria-label="delete">
              <NavigateNextIcon />
            </Icon>
          </ListItem>
        </Link>
      );
    });
  };

  return (
    <List dense={false} disablePadding>
      {renderItems(renderedList)}
    </List>
  );
};

export default ListView;
