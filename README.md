# Inhouse Tokens

Inhouseを使用しているすべてのサービスのデザイントークンをプラットフォームごとに最適な形でビルドします。

## Getting Started

1. 新しいデザイントークンを作成します。`tokens/pepper`ディレクトリを複製・編集すると楽です。
2. Color、Size、Typographyなどのトークンの値をブランド独自の値に編集します。
    - 書き方は[Style DictionaryのTokensのドキュメント](https://amzn.github.io/style-dictionary/#/tokens)を参照してください。
3. `config/pepper.js`をコピーして新しいデザイントークンの設定ファイルを作成します。
    - プラットフォームごとにビルドの設定を記述します。
    - 書き方は[Style Dictionaryのドキュメント](https://amzn.github.io/style-dictionary/)を参照してください。
4. `$ npm run build`を実行します。プラットフォームごとに最適化されたデザイントークンが`/build/{custom-flavor}`に正しくビルドされたか確認してください。

## Documentation

### Sass

作成・ビルドしたデザイントークンは[Inhouse Components Web](https://github.com/pepabo/inhouse-components-web)から使用できます。

1. [inhouse/flavor](https://github.com/pepabo/inhouse-components-web/tree/main/packages/flavor)に`@pepabo-inhouse/tokens`をinstallします。

2. installした`@pepabo-inhouse/tokens`のSassのvariablesを、`_tokens.scss`にて再エクスポートします。

```scss
@forward "@pepabo-inhouse/tokens/build/{custom-flavor}/scss/variables";
```

3. 各サービスのアプリケーションなどの使う側で、`@pepabo-inhouse/flavor`としてinstallします。

```json
"dependencies": {
    "@pepabo-inhouse/flavor": "npm:{custom-flavor}@x.y.z",
}
```

### Figma (Variables)

WIP

### iOS

WIP

### Android

WIP
