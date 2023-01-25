export const isValid = (date: any) =>
  date instanceof Date && !isNaN(date.valueOf());
