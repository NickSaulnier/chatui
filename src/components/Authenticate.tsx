import { Box, Button, Snackbar } from '@mui/material';
import { useCallback, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LabeledTextInput } from './LabeledTextInput';
import { AuthenticationContext } from '../context/AuthenticationContextProvider';

const EMAIL_REGEX =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const PASSWORD_COMPLEXITY_REGEX =
  /^(?:(?=.*[a-z])(?:(?=.*[A-Z])(?=.*[\d\W])|(?=.*\W)(?=.*\d))|(?=.*\W)(?=.*[A-Z])(?=.*\d)).{8,}$/i;

export function Authenticate() {
  const [loginView, setLoginView] = useState(true);
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(true);
  const [verifyPassword, setVerifyPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const { createUser, login } = useContext(AuthenticationContext);
  const navigate = useNavigate();

  const onAuthenticate = useCallback(async () => {
    try {
      if (loginView) {
        await login(email, password);
      } else {
        await createUser(email, password);
      }

      setSnackbarMessage(loginView ? 'Logged in successfully' : 'User created successfully');
      setSnackbarOpen(true);
      navigate('/');
    } catch (error) {
      setSnackbarMessage(`${error}`);
      setSnackbarOpen(true);
      console.error(error);
    }
  }, [
    loginView,
    navigate,
    login,
    email,
    password,
    createUser,
    setSnackbarMessage,
    setSnackbarOpen,
  ]);

  const onSnackbarClose = useCallback(() => {
    setSnackbarOpen(false);
    setSnackbarMessage('');
  }, [setSnackbarOpen, setSnackbarMessage]);

  const onViewChange = useCallback(() => {
    setEmail('');
    setPassword('');
    setVerifyPassword('');
    setEmailValid(true);
    setPasswordsMatch(true);
    setPasswordValid(true);
    setLoginView(!loginView);
  }, [
    loginView,
    setEmail,
    setPassword,
    setVerifyPassword,
    setEmailValid,
    setPasswordsMatch,
    setPasswordValid,
    setLoginView,
  ]);

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <LabeledTextInput
        label="Email Address"
        value={email}
        error={!emailValid}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const emailValue = event.target.value;
          setEmail(emailValue);
          setEmailValid(EMAIL_REGEX.test(emailValue));
        }}
      />
      <LabeledTextInput
        label="Password"
        value={password}
        error={!passwordValid}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const passwordValue = event.target.value;
          setPassword(passwordValue);
          if (!loginView) {
            setPasswordValid(PASSWORD_COMPLEXITY_REGEX.test(passwordValue));
          }
        }}
        type="password"
      />
      {!loginView && (
        <LabeledTextInput
          label="Verify Password"
          value={verifyPassword}
          error={!passwordsMatch && verifyPassword !== ''}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const verifyPasswordValue = event.target.value;
            setVerifyPassword(verifyPasswordValue);
            setPasswordsMatch(verifyPasswordValue === password);
          }}
          type="password"
        />
      )}
      <Button
        variant="contained"
        sx={(theme) => ({ margin: theme.spacing(2), color: theme.palette.text.primary })}
        disabled={
          loginView
            ? !emailValid || !password || !email
            : !emailValid || !passwordsMatch || !password || !verifyPassword || !email
        }
        onClick={onAuthenticate}
      >
        {loginView ? 'Login' : 'Submit'}
      </Button>
      <Button
        variant="text"
        sx={(theme) => ({
          '&:hover': { color: theme.palette.primary.dark, backgroundColor: 'transparent' },
        })}
        onClick={onViewChange}
      >
        {loginView ? 'No Account? Sign Up.' : 'Already have an account? Login.'}
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        message={snackbarMessage}
        autoHideDuration={3500}
        onClose={onSnackbarClose}
        open={snackbarOpen}
        ContentProps={{
          sx: {
            display: 'block',
            textAlign: 'center',
            fontSize: '15px',
          },
        }}
      />
    </Box>
  );
}
