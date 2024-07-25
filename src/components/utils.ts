const monthIndexToMonth = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

export function formatTimestamp(timestamp: number) {
  const date = new Date(timestamp);
  return `${monthIndexToMonth[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`;
}

export function truncateString(str: string, numChars = 30) {
  if (str.length <= numChars) {
    return str;
  }
  return str.slice(0, numChars) + '...';
}
