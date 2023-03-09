export const numberFormatter = (num?: number): number | undefined => {
  if (num) {
    const unit = 1024 * 1024;
    const number = num / unit;
    const roundedNumber = number.toFixed(1);

    return Number(roundedNumber);
  } else {
    return undefined;
  }
};
