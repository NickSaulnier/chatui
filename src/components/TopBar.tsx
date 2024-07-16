import { Box } from '@mui/material';

type TopBarProps = {
  Icon: React.ElementType;
};

export function TopBar({ Icon }: TopBarProps) {
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
      <Icon
        sx={{ color: 'background.default', height: '45px', width: '45px' }}
      />
    </Box>
  );
}
