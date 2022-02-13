# Regex Dict

## 概要
正規表現で5文字の英単語を検索できます。
- 検索できるのは5文字の単語のみです。
- 結果は最大100件まで表示されます。
- 検索時、自動で先頭に^が付加されます。
- 代表的な正規表現
  - `.` → 任意の1文字
  - `[abc], [a-c]` → a, b, cのうち1文字
  - `[^abc], [^a-c]` → a, b, c以外の1文字

## 使用したデータ
- 単語リスト [github.com/cwackerfuss/react-wordle](https://github.com/cwackerfuss/react-wordle/blob/main/src/constants/wordlist.ts)
- 単語説明 [github.com/kujirahand/EJDict](https://github.com/kujirahand/EJDict)
