import { Word } from "../../entity/word"

type Props = {
  word: Word
};

export const WordElement = ({
  word,
}: Props) => {
  const meanList = word.means.map((m) =>
    <div key={m}>{m}</div>
  );

  return (
    <div className="word-element">
      <div className="word-name">{word.word}</div>
      <div>{meanList}</div>
    </div>
  );
};
