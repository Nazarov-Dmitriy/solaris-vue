export function parseDateString(dateStr: string) {
  const [datePart, timePart] = dateStr.split(" ");
  const [day, month, year] = datePart.split(".").map(Number);
  const [hours, minutes, seconds] = timePart.split(":").map(Number);
  // Note: Month is 0-based in JavaScript Date (January = 0)
  return new Date(year, month - 1, day, hours, minutes, seconds);
}