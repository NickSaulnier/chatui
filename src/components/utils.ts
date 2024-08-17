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

export function formatTimestamp(timestamp: number): string {
  const date = new Date(timestamp);
  return `${monthIndexToMonth[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}
