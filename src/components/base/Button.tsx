type Props = {
  label: string
  className: string
  onClick: () => void
}

export const Button = ({
  label,
  className,
  onClick,
}: Props) => {
  return (
    <div className={className}>
      <button onClick={onClick}>{label}</button>
    </div>
  )
}
