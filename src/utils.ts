export const isValid = (date: any): boolean =>
  date instanceof Date && !isNaN(date.valueOf());
