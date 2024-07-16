import { Box } from '@mui/material';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';

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
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <RequestQuoteIcon
        sx={{ color: 'background.default', height: '45px', width: '45px' }}
      />
    </Box>
  );
}
