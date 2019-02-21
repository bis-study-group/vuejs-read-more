# Vue.js でもっと見る機能を作ろう

## 課題

後述する仕様の通りに動作するように `index.html` および `app.js` を編集しましょう。

穴埋めになっているので、以下の箇所にコードを足してください。

- `Insert code here...`
- `Insert gif-list component here...`
- `Insert gif component here...`

CSS は出来ているので変更しません。

## 仕様

- 「もっと見る」ボタンをクリックすると、猫の GIF が1行に3枚表示されます。
- 表示できる GIF がなくなったら「もっと見る」ボタンを非表示にします。

GIF 画像取得 API（`/api/list`）は以下の形式の JSON を返却します。
返却できる GIF がなくなると、`last` が `true` になります。

```json
{
  "items": [
    { "url": string },
    { "url": string },
    { "url": string }
  ],
  "last": boolean
}
```

## キーワード

`axios` を利用します。VanillaJS 編で紹介した [Promise](https://github.com/bis-study-group/vanillajs-gacha#promise) の説明がここでもヒントになるでしょう。

## 提出方法

`solution/{your name}` のルールでブランチを作成してください。

```console
$ git clone git@github.com:bis-study-group/vuejs-read-more.git
$ git checkout -b solution/name
```

解き終わったらリモートリポジトリにプッシュしてください。

```console
$ git push origin solution/name
```
