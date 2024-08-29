import { IconButton, Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useCallback, useContext, useState } from 'react';
import { AuthenticationContext } from '../context/AuthenticationContextProvider';

export function LoggedInMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { logout } = useContext(AuthenticationContext);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    },
    [setAnchorEl],
  );

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, [setAnchorEl]);

  const handleLogout = useCallback(() => {
    logout();
    handleClose();
  }, [handleClose, logout]);

  const isMenuOpen = Boolean(anchorEl);

  return (
    <>
      <IconButton onClick={handleClick}>
        <AccountCircleIcon
          fontSize="large"
          sx={(theme) => ({ color: theme.palette.text.primary })}
        />
      </IconButton>
      <Menu anchorEl={anchorEl} open={isMenuOpen} onClose={handleClose}>
        <MenuItem sx={(theme) => ({ color: theme.palette.text.secondary })} onClick={handleLogout}>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
