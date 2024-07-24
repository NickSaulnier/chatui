import { Box } from '@mui/material';
import { AppMenu } from './AppMenu';

export function TopBar() {
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
    </Box>
  );
}
