export const characterLimiter = (title: string, limit: number = 16): string => {
  const titleArray: string[] = [];
  for (let i = 0; i < title.length; i++) {
    titleArray.push(title[i]);
  }
  const newTitle: string[] = [];
  if (titleArray.length > limit) {
    titleArray.reduce((num, currentTitle) => {
      if (num + currentTitle.length <= limit) {
        newTitle.push(currentTitle);
      }
      return num + currentTitle.length;
    }, 0);
    return `${newTitle.join('')}...`;
  }
  return title;
};
