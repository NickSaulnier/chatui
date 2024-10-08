import LoginIcon from '@mui/icons-material/Login';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SettingsIcon from '@mui/icons-material/Settings';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';

export const INPUT_BORDER_RADIUS = 16;
export const MIN_INPUT_HEIGHT = 32;

// ROUTE_STRINGS and ROUTE_ICONS are aligned arrays
export const ROUTE_STRINGS = ['Current Chat', 'Conversations', 'Settings'];
export const ROUTE_LINKS = ['', '/conversations', '/settings', '/authenticate'];
export const ROUTE_ICONS = [QuestionAnswerIcon, SpeakerNotesIcon, SettingsIcon];

// Keep the login route data separate for conditional rendering
export const LOGIN_ROUTE_STRINGS = ['Login'];
export const LOGIN_ROUTE_LINKS = ['/authenticate'];
export const LOGIN_ROUTE_ICONS = [LoginIcon];
