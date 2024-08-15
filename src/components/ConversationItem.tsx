import { ListItem } from '@mui/material';

type ConversationItemProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  clickHandler: () => void;
};

export function ConversationItem({ children, clickHandler }: ConversationItemProps) {
  return (
    <ListItem
      sx={(theme) => ({
        width: 'auto',
        margin: theme.spacing(1),
        border: `2px solid ${theme.palette.primary.light}`,
        borderRadius: '20px',
        '&:hover': {
          backgroundColor: theme.palette.primary.light,
          cursor: 'pointer',
        },
      })}
      onClick={clickHandler}
    >
      {children}
    </ListItem>
  );
}
