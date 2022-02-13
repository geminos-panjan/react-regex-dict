import { Button } from "../base/Button"

type Props = {
  label: string
  onClick: () => void
};

export const ShowDescriptionButton = ({
  label,
  onClick,
}: Props) => {
  return (
    <Button className="show-description-button" label={label} onClick={onClick} />
  )
};
