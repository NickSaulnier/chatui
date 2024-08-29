import { Box, Button, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppMenu } from './AppMenu';
import { AuthenticationContext } from '../context/AuthenticationContextProvider';

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
          <IconButton>
            <AccountCircleIcon
              fontSize="large"
              sx={(theme) => ({ color: theme.palette.text.primary })}
            />
          </IconButton>
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
