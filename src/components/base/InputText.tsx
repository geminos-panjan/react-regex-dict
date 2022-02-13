import { ChangeEvent } from "react"

type Props = {
  className: string
  label: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
};

export const InputText = ({
  value,
  className,
  label,
  onChange,
}: Props) => {
  return (
    <div className={className}>
      <div className="label">
        <label htmlFor={className}>{label}</label>
      </div>
      <div>
        <input type="text" name={className}
          value={value} onChange={onChange} />
      </div>
    </div>
  );
};
