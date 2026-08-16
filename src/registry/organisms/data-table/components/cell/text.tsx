interface DataTableTextCellProps {
  value: string
}

export default function DataTableTextCell({ value }: DataTableTextCellProps) {
  return <span>{value ?? '--'}</span>
}
