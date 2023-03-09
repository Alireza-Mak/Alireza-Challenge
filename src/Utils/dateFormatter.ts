export const dateFormatter = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };
  const date: Date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
};
