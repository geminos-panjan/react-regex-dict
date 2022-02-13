import { ChangeEvent } from "react";
import { InputText } from "../base/InputText";

type Props = {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
};

export const SearchWordInputText = ({
  value,
  onChange,
}: Props) => {
  return (
    <InputText className="search-word-input-text" label="検索" value={value} onChange={onChange} />
  );
};