import { Box, Button } from '@mui/material';
import { useState } from 'react';

import { LabeledTextInput } from './LabeledTextInput';

const EMAIL_REGEX =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export function Authenticate() {
  const [loginView, setLoginView] = useState(true);
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

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
      {loginView ? (
        <>
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
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(event.target.value)
            }
          />
          <Button
            variant="contained"
            sx={(theme) => ({ margin: theme.spacing(2), color: theme.palette.text.primary })}
            disabled={!emailValid || !password || !email}
          >
            Login
          </Button>
          <Button
            variant="text"
            sx={(theme) => ({
              '&:hover': { color: theme.palette.primary.dark, backgroundColor: 'transparent' },
            })}
            onClick={() => {
              setEmail('');
              setPassword('');
              setVerifyPassword('');
              setLoginView(false);
            }}
          >
            No Account? Sign Up.
          </Button>
        </>
      ) : (
        <>
          <LabeledTextInput
            label="Email Address"
            value={email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
          />
          <LabeledTextInput
            label="Password"
            value={password}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(event.target.value)
            }
          />
          <LabeledTextInput
            label="Verify Password"
            value={verifyPassword}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const verifyPasswordValue = event.target.value;
              setVerifyPassword(verifyPasswordValue);
              setPasswordsMatch(verifyPasswordValue === password);
            }}
          />
          <Button
            variant="contained"
            sx={(theme) => ({ margin: theme.spacing(2), color: theme.palette.text.primary })}
            disabled={!emailValid || !passwordsMatch || !password || !verifyPassword || !email}
          >
            Submit
          </Button>
          <Button
            variant="text"
            sx={(theme) => ({
              '&:hover': { color: theme.palette.primary.dark, backgroundColor: 'transparent' },
            })}
            onClick={() => {
              setEmail('');
              setPassword('');
              setVerifyPassword('');
              setLoginView(true);
            }}
          >
            Already have an account? Login.
          </Button>
        </>
      )}
    </Box>
  );
}
