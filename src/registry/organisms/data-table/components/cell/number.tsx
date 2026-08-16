interface DataTableNumberCellProps {
  value: number
}

export default function DataTableNumberCell({
  value,
}: DataTableNumberCellProps) {
  return <span>{value ? value.toLocaleString() : '--'}</span>
}
