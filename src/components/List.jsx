import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const ListView = ({ data }) => {
  const renderItems = (data) => {
    return data.map((item) => (
      <ListItem button divider>
        <ListItemText primary={item.name} />
        <Icon edge="end" aria-label="delete">
          <NavigateNextIcon />
        </Icon>
      </ListItem>
    ));
  };

  return (
    <List dense={false} disablePadding>
      {renderItems(data)}
    </List>
  );
};

export default ListView;
