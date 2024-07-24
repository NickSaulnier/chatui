import MenuIcon from '@mui/icons-material/Menu';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import React, { useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';

const listStrings = ['Conversations', 'Settings'];
const listIcons = [QuestionAnswerIcon, SettingsIcon];

const getIconAsNode = (index: number) => {
  const Icon = listIcons[index];

  return <Icon sx={{ color: 'primary.dark' }} />;
};

export function AppMenu() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const list = (
    <Box
      sx={{ width: '250px' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {listStrings.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{getIconAsNode(index)}</ListItemIcon>
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  color: theme.palette.text.secondary,
                  fontSize: '16px',
                  fontWeight: 500,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <MenuIcon
        sx={{ color: 'background.default', height: '35px', width: '35px', margin: '10px' }}
        onClick={toggleDrawer(true)}
      />
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </React.Fragment>
  );
}
