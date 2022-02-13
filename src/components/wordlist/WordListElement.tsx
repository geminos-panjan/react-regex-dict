import { WORD_LIST } from "../../constants/wordlist"
import { WordElement } from "./WordElement"

type Props = {
  searchWord: string
};

export const WordListElement = ({
  searchWord,
}: Props) => {
  if (searchWord === '') {
    return (
      <div className="word-list"></div>
    );
  }
  try {
    const hitList = WORD_LIST.filter((w) => w.word.search(`^${searchWord}`) > -1);
    const outList = hitList.slice(0, 100).map((w) =>
    <WordElement word={w} key={w.wordid.toString()} />
    );
    return (
      <div className="word-list">{outList}</div>
      )
  } catch (e) {
    if (e instanceof SyntaxError) {
      return (
        <div className="word-list"></div>
      )
    } else {
      throw e;
    }
  };
};
