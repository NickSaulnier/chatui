import { Box, Button } from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppMenu } from './AppMenu';
import { AuthenticationContext } from '../context/AuthenticationContextProvider';
import { LoggedInMenu } from './LoggedInMenu';

export function TopBar() {
  const { currentUser } = useContext(AuthenticationContext);
  const navigate = useNavigate();

  return (
    <Box
      className="box"
      sx={{
        height: '64px',
        minHeight: '64px',
        width: '100%',
        backgroundColor: 'primary.dark',
        marginBottom: 'auto',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <AppMenu />
      <Box
        sx={(theme) => ({
          marginRight: theme.spacing(2),
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%',
        })}
      >
        {currentUser ? (
          <LoggedInMenu />
        ) : (
          <Button
            variant="text"
            sx={(theme) => ({ color: theme.palette.text.primary })}
            onClick={() => navigate('/authenticate')}
          >
            Login
          </Button>
        )}
      </Box>
    </Box>
  );
}
