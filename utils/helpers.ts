// Convert time to hours and minutes
export const calcTime = (time: number): string => {
  const hours: number = Math.floor(time / 60);
  const mins: number = time % 60;
  return `${hours}h ${mins}m`;
};
// Convert a number to money formatting
export const convertMoney = (money: number): string => {
  const formatter: Intl.NumberFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    notation: 'compact',
    compactDisplay: 'short',
  });
  return formatter.format(money);
};
// Truncate text data
export const truncateString = (text: string, characterLength: number) => {
  if (text?.length > characterLength) {
    return text.slice(0, characterLength) + '...';
  } else {
    return text;
  }
};

// List of days
export const navigationDays = () => {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();

  const days = {
    '1': 'mon',
    '2': 'tue',
    '3': 'wed',
    '4': 'thu',
    '5': 'fri',
    '6': 'sat',
    '0': 'sun',
  };

  const mapOfDays = new Map(
    Object.entries(days).map(([key, value]) => [parseInt(key), value])
  );

  const findCurrentDayName = (currentDay: number) => mapOfDays.get(currentDay);

  const currentDayName = findCurrentDayName(currentDay);

  return { mapOfDays, currentDay, currentDayName };
};
