# JavaScript初心者講習会

- [Ginpei先生によるJavaScript初心者講習会 | Frog](https://frogagent.com/event/ginpei-js-workshop-for-beginner/)

## 推奨プラグイン

参考: [これからJavaScriptを始める人向けの環境 - Qiita](https://qiita.com/ginpei/items/26690f2d83fbafd562d8)

### Code Spell Checker

- https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker
- 英単語のtypoを防ぐ

### EditorConfig for VS Code

- https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
- 改行コードやインデントの設定

### ESLint

- https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
- 変な書き方を是正
- 別途プロジェクトごとに `npm install ...` が必要（以下）

```console
$ npm install --save-dev eslint eslint-config-airbnb-base eslint-plugin-import
```

## 推奨環境

### VS Code

- つよい

### Browsersync

- 開発用簡易サーバー
- `npm install browser-sync`

```console
$ npx browser-sync start --watch --server ./public
```
