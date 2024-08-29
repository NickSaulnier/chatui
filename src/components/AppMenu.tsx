import MenuIcon from '@mui/icons-material/Menu';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIconTypeMap,
  useTheme,
} from '@mui/material';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LOGIN_ROUTE_ICONS,
  LOGIN_ROUTE_LINKS,
  LOGIN_ROUTE_STRINGS,
  ROUTE_ICONS,
  ROUTE_LINKS,
  ROUTE_STRINGS,
} from './constants';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { AuthenticationContext } from '../context/AuthenticationContextProvider';

const getStyledIcon = (
  Icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>> & {
    muiName: string;
  },
) => {
  return <Icon sx={{ color: 'primary.dark' }} />;
};

export function AppMenu() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const { currentUser } = useContext(AuthenticationContext);

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

  const renderRoute = (text: string, link: string, Icon: JSX.Element) => {
    return (
      <Link key={link} to={link} style={{ textDecoration: 'none' }}>
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>{Icon}</ListItemIcon>
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
      </Link>
    );
  };

  return (
    <React.Fragment>
      <MenuIcon
        sx={{ color: 'background.default', height: '35px', width: '35px', margin: '10px' }}
        onClick={toggleDrawer(true)}
      />
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: '250px' }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {ROUTE_STRINGS.map((text: string, index: number) =>
              renderRoute(text, ROUTE_LINKS[index], getStyledIcon(ROUTE_ICONS[index])),
            )}
            {/* Only render login route if the user is not logged in */}
            {!currentUser && <Divider />}
            {!currentUser &&
              LOGIN_ROUTE_STRINGS.map((text: string, index: number) =>
                renderRoute(
                  text,
                  LOGIN_ROUTE_LINKS[index],
                  getStyledIcon(LOGIN_ROUTE_ICONS[index]),
                ),
              )}
          </List>
        </Box>
      </Drawer>
    </React.Fragment>
  );
}
