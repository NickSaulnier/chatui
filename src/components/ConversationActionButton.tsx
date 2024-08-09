import { Button, Tooltip, useTheme } from '@mui/material';

type ConversationActionButtonProps = {
  tooltipTitle: string;
  Icon: React.ElementType;
};

export function ConversationActionButton({ tooltipTitle, Icon }: ConversationActionButtonProps) {
  const theme = useTheme();

  return (
    <Tooltip title={tooltipTitle}>
      <Button
        sx={{
          minWidth: '30px',
          width: '30px',
          height: '30px',
          border: 'solid 1px transparent',
          borderRadius: '16px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent',
        }}
        // Inline style to remove the default hover effect
        style={{ backgroundColor: 'transparent' }}
      >
        <Icon
          sx={{
            color: theme.palette.text.secondary,
            '&:hover': {
              color: theme.palette.primary.dark,
            },
          }}
        />
      </Button>
    </Tooltip>
  );
}
