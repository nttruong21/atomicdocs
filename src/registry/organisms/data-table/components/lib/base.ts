export function getNumberOrder(
  rowIndex: number,
  page: number,
  pageSize: number
): number {
  return rowIndex + 1 + (page - 1) * pageSize
}
