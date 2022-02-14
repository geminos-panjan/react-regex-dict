import { useState } from "react";
import { ShowDescriptionButton } from "./ShowDescriptionButton"

export const Description = () => {
  const [isVisible, setIsVisible] = useState(false)

  const getLabel = (): string => {
    if (isVisible === false) {
      return '説明を表示';
    } else {
      return '説明を非表示';
    }
  };

  const getContentsClass = (): string => {
    if (isVisible === false) {
      return 'description-contents invisible';
    } else {
      return 'description-contents';
    }
  };

  return (
    <div className="description">
      <ShowDescriptionButton label={getLabel()} onClick={() => { setIsVisible(!isVisible) }} />
      <div className={getContentsClass()}>
        正規表現で5文字の英単語を検索できます。
        <ul>
          <li>検索できるのは5文字の単語のみです。</li>
          <li>結果は最大100件まで表示されます。</li>
          <li>検索時、自動で先頭に<code>^</code>が付加されます。</li>
          <li>代表的な正規表現
            <ul>
              <li><code>.</code> → 任意の1文字</li>
              <li><code>[abc], [a-c]</code> → a, b, cのうち1文字</li>
              <li><code>[^abc], [^a-c]</code> → a, b, c以外の1文字</li>
            </ul>
          </li>
        </ul>
        使用したデータ
        <ul>
          <li>
            <div className="description-url-container">
              <div>単語リスト&nbsp;</div>
              <div>
                <a
                  href="https://github.com/cwackerfuss/react-wordle/blob/main/src/constants/wordlist.ts"
                  target="_blank" rel="noopener noreferrer"
                >
                  github.com/cwackerfuss/react-wordle
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="description-url-container">
              <div>単語説明&nbsp;</div>
              <div>
                <a
                  href="https://github.com/kujirahand/EJDict"
                  target="_blank" rel="noopener noreferrer"
                >
                  github.com/kujirahand/EJDict
                </a></div>
              </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
