import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    listItem: {
        borderRadius: '6px',
        color: 'black',

        "&:hover,&:focus": {
            background: '#ddd',
            opacity: '0.4',

            boxShadow: 'inset 5px 5px 10px #163535, inset -5px -5px 10px #4eb7b7',


        },
    },
  avatar: {

  padding: theme.spacing(2),
    background: 'transparent',

    boxShadow: '-2px 6px 2px 1px rgba(0,0,0,0.75)',
    color: '#000',

   "&:hover,&:focus": {
        color: 'white',
        boxShadow: 'inset 5px 5px 10px #163535, inset -5px -5px 10px #4eb7b7',
                       }

  },
  listItemText: {
    color: 'white',
  }

}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default function InteractiveListItem(props) {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  const { icon, text } = props;

  return (

            <ListItem button className={classes.listItem}>
              <ListItemAvatar className={classes.listItemAvatar}>
                <Avatar className={classes.avatar}>
                  <props.icon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={text}
                secondary={secondary ? 'Secondary text' : null}
                className={classes.listItemText}
              />
            </ListItem>

  );
}
