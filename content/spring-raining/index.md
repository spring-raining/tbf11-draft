# Markdown を拡張する MDX はドキュメント作成の新たな可能性？

はじめましてこんにちは、spring-raining です。今回の記事では、またしても CSS 組版とは直接関係ないものの、個人的にお気に入りの OSS プロジェクト「MDX」を紹介します。

## MDX = Markdown + JSX

MDX (https://mdxjs.com/) の名前の由来は Markdown + JSX なので、MDX を理解するためには まず JSX について知る必要があります。

JSX とは JavaScript の拡張構文の一つで、元々 React のために考え出されたものです。Web アプリケーションの開発の経験がないと前提知識が多く難しい内容ですが、React とは Web アプリケーションを作成するための有名なライブラリで、ざっくり言うと JavaScript のソースコードの中で HTML (XML) タグを扱いやすくしたものがJSXです。

この JSX を Markdown に埋め込んだものが MDX です。上記の成り立ちの通り、MDX は一見すると Markdown に HTML が埋め込れたもののように見えます。(この例の `style` 属性のように、本来の XML とは全然違う構文ももちろんありますが、JSX の詳細についてはこの記事では割愛します)

```mdx
# Hello, *world*!

Below is an example of JSX embedded in Markdown.

<div style={{ padding: '20px', backgroundColor: 'tomato' }}>
  <h3>This is JSX</h3>
</div>
```

CSS 組版のような用途では、最終的に Markdown を HTML に変換するため、直接 Markdown 中に HTML を書けばわざわざ MDX を使わなくても良さそうです。それでは、MDX を使うメリットとは何でしょうか？

## MDX を使うメリット

### 簡単に独自コンポーネントを使える

JSX (とReact) では一つの要素の単位をコンポーネントと呼んでおり、MDXでは通常のHTMLタグと同じようにユーザーの作ったコンポーネントを使えます。この点では他のテンプレートエンジンと近い機能を備えていますが、ベースとなるテキストがMarkdownであることはドキュメントの記法として有利です。

### 直接 JavaScript として読み込める

MDXを使うことで、原稿として書かれたMarkdownは上記のJSXを通して直接JavaScriptとしてみなすことができます。これは、Reactのようなライブラリを使ったWebアプリケーションの上で扱う際に非常に便利です。

例えば、あるドキュメントを紙媒体とWebページ両方に掲載したい状況を考えます。原稿がHTMLであれば、もちろんブラウザに表示させることができますが、MDXは一つのコンポーネントとして扱うことができるので、ページの一部分に配置したり、並べて掲載したりすることがとても簡単です。また、フォントやテキスト色を変えるなど、外部からの装飾も既存のCSSにとらわれずに制御することができます。

## MDX の始めかた

MDXの公式サイトでは、MDXを使う方法について詳しく書かれています (https://mdxjs.com/getting-started/)。MDX自体はテキスト変換のためのライブラリを提供しているだけなので、他のWebアプリケーション作成フレームワークと組み合わせて使います。JSXをベースとする都合上、基本的にReactを採用したフレームワークを使うほうが良いでしょう。今回は、**Gatsby**というフレームワークと組み合わせて使う例を紹介します。

プロジェクトファイルの作成自体はとても簡単です。Node.jsが使用できる環境で、以下のコマンドを実行します。

```
npm init mdx gatsby
```

これを実行すると、`gatsby-mdx` というディレクトリに空のGatsbyプロジェクトにMDXプラグインをインストールした状態でセットアップしてくれます。作られたファイルを見てみましょう。

![](https://i.imgur.com/uIsh5ft.png)

`src` ディレクトリの中の `pages/index.mdx` が実際にページとして表示されるMDXファイルです。また、`components/Layout.js` というファイルは各ページで共通して読み込まれるレイアウトコンポーネントで、中身を見てみると外部のスタイルシートが読み込まれているようです。

それでは、`gatsby-mdx`ディレクトリに移動して開発サーバーを起動してみます。以下のコマンドを実行してください。

```
npm run start
```

少し待ったあと、`http://localhost:8000`にアクセスするように表示されます。このページを開くと、「Hello, world!」と表示されており、`pages/index.mdx`の内容がそのまま表示されていることがわかります。

### 独自コンポーネントを作成する

次に、少しCSS組版っぽいコンポーネントを作成する例を紹介します。

「縦中横」は、縦書きの文章中に横組みでテキストを挿入する処理のことで、日本語では数桁の数字を縦中横で組むことがあります。このレイアウトは、CSSでは `text-combine-upright` というプロパティで指定しますが、仕様で定められているもののうち実際にブラウザが実装しているものは `none` と `all` のみで、桁数に応じて自動で切り替えてくれる `digits <integer>?` は提供されていません。この問題を、独自コンポーネントで解決してみます。

![](https://i.imgur.com/UR8ww7o.png)


まず、`src/components` ディレクトリに `Tcy.js`ファイル (一般的にJSXファイルは通常のJavaScriptと区別するために`.jsx`という拡張子を使う慣習がありますが、Gatsbyではどちらでも良いようです) を作成し、以下のようなコードを書きます。

```jsx
import React from 'react';

export const Tcy = ({ number, digits = 2 }) => {
  const textCombineUpright =
    Number.isFinite(number)
    && `${number}`.length <= digits
    ? 'all' : 'none';
  return (
    <span style={{ textCombineUpright }}>
      {number}
    </span>
  );
};
```

上記の例では、`Tcy` という名前のコンポーネントを作成しています。`number` が正しい数字で、テキストで表した際の文字数が `digits` 以下のとき、`text-combine-upright` に `all` を設定するようにしています。

このコンポーネントをMDXファイルで使用するためには、次のように書きます。

```markdown
import { Tcy } from '../components/Tcy';

# Hello, world!

<Tcy number={2021} />年
<Tcy number={7} />月
<Tcy number={11} />日
```

外部のコンポーネントをインポートするときは、JavaScriptと同じように `import` 文を使います。そして、先ほど作成した `Tcy` コンポーネントに `number` プロパティを与えます。`digits` プロパティは省略していますが、同じように与えることができます。

ブラウザーの開発ツールで見てみると、目的通り「7」と「11」にだけ `text-combine-upright: all` が設定されていることが確認できます。

![](https://i.imgur.com/RVD8vM5.png)

## MDX のしくみ

MDXで書かれた文章を解釈するためのパーサーは、**Remark**というライブラリを使って実装されています（最近ではRemarkの作者であるwooorm氏もMDXの開発に積極的に関わっているので、最近ではむしろMDXのための機能拡張がRemarkに取り入れられるということも多いです）。Remarkとは、MarkdownをHTMLなど様々な形式に変換するためのライブラリで、テキストを抽象構文木 (AST) に変換して処理することが特徴です。Remarkについては、過去に「[Vivilostyleで本を作ろう vol.2](https://vivliostyle.org/ja/blog/2019/09/25/make-books-with-vivliostyle-vol2/)」で紹介した記事もあるので、そちらもぜひご覧ください。

実際にMDXが拡張構文をパースする部分は、Remarkのプラグインとして実装されています。そして、生成されたASTに従って目的の形式に出力されます。注意したい点は、MDXはRemarkとは異なり、入力されたMDXファイルをHTMLではなくJavaScript (もしくはJSX) のコードとして出力される点です。MDXを最終的にHTMLの原稿として扱いたい場合は、Reactなどの処理系を通してHTMLにレンダリングする必要があります。

![](https://i.imgur.com/jZsfIV3.png)

本来の用途であれば、このJavaScriptはブラウザが読み込むことで動的にDOMが構築されるので、HTMLに変換する必要はありません。しかし、Vivliostyleは静的なHTMLのみを読み込むため、このまま原稿として使うには不便です。そこで、フロントエンドの世界で**スタティックサイトジェネレート** (SSG) と呼ばれる技術 (類似のテクニックにサーバーサイドレンダリング (SSR) があります。どのタイミングでレンダリングするかの違いだけなので、今回の例では本質的な違いはありません。) を使い、原稿として読み込めるHTMLへの変換を試みます。

### 原稿をSSGで生成する

大げさな前置きを書いた手前で恐縮ですが、前の章で紹介したGatsbyを使っている場合、実はコマンド一つで生成できます。

```
npm run build
```

コマンド実行後、`public` というディレクトリが作成され、この中の `index.html` というファイルが生成されたドキュメントになります。このディレクトリをそのままVivliostyleに与えてあげれば、PDFに変換されます。簡単ですね！

ただし、制約がまったく無いわけではありません。Vivliostyleはドキュメント中のJavaScriptを解釈しないので、HTMLに埋め込みたいものはすべてビルド時に依存関係を解決させる必要があります。Dynamic importなども使えないので、外部のライブラリを使ったり自分で実装する際は注意が必要です。

## MDX v2 の新機能

MDX は現在新しいバージョンが開発中で、この記事の執筆時点では `v2.0.0-next.9` として公開されています。一見見ただけでもかなり大幅な変更がありそうなので、現時点での変更内容について少しだけ見てみようと思います。

### Expression 記法

ドキュメントとしては書き起こされていませんが、MDX v2では新たに **Expression** の文法が導入されています。JSXでは、中括弧 (`{}`) で囲われた部分をJavaScriptの式として評価する文法がありますが、従来これをMDXで使うためには `<div></div>` のようにJSXタグで囲われた部分でしか使えませんでした。v2では、通常のMarkdownの文脈でも直接 `{}` で囲うことによって、その部分が式として評価されるようになります。これは、インラインのMarkdownでも同じように解釈されます。

例えば、以下のようなMDXがあった場合、

```markdown
# Hello, {1 + 1}

{
  'mdx'.toUpperCase()
}
```

JSXとして見るとこのように解釈されます。

```jsx
<h1>Hello, {1 + 1}</h1>
<p>{'mdx'.toUpperCase()}</p>
```

これがJSXの処理系でレンダリングされると、以下のようになります。

```html
<h1>Hello, 2</h1>
<p>MDX</p>
```

MDXをドキュメント作成として使う場合、これまでは外部のライブラリはコンポーネントとしてしか読み込めなかったので、使い勝手はあまり良くなかったです。この変更により、インラインでJavaScriptの便利な機能を埋め込めるようになるので使い道がぐっと広がっています！

### MDASTの変更

上記の変更も含めて、MDXをパースした時に生成されるMDAST (Markdown AST) の構造が大きく変わっています。MDX v1では、MDASTに以下のようなタイプ名のノードが拡張されていました。

`jsx` `import` `export`

一方で、v2では以下のようなタイプが定義されています。

`mdxJsxFlowElement` `mdxJsxTextElement` `mdxjsEsm` `mdxFlowExpression` `mdxTextExpression`

内部的には以下の3つのパーサーに分けて実装されているので、それぞれについて見てみます。

#### mdast-util-mdx-jsx: `mdxJsxFlowElement` `mdxJsxTextElement`

MDX中のJSXタグをパースします。ブロックとしてJSXが出現した場合`mdxJsxFlowElement`、インラインでJSXが出現した場合`mdxJsxTextElement`というタイプで出力されます。

以下はこのパーサーが出力するASTです。注目すべきはattributesの内容で、これまではJSXの中身まではパースされなかったものが、attributeについてもしっかりパースされているのがわかります。また、`estree`という要素が追加されていますが、この内容はJavaScriptのASTの仕様であるESTreeに従ってパースされたものです。

```jsx
<MyComponent {...props}/>

<abbr title="Hypertext Markup Language">HTML</abbr> is a lovely language.
```

```javascript
{
  type: 'root',
  children: [
    {
      type: 'mdxJsxFlowElement',
      name: 'MyComponent',
      attributes: [
        {
          type: 'mdxJsxExpressionAttribute',
          value: '...props',
          data: {
            estree: {
              type: 'Program',
              body: [
                {
                  type: 'ExpressionStatement',
                  expression: {
                    type: 'ObjectExpression',
                    properties: [
                      {
                        type: 'SpreadElement',
                        argument: {type: 'Identifier', name: 'props'}
                      }
                    ]
                  }
                }
              ],
              sourceType: 'module'
            }
          }
        }
      ],
      children: []
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'mdxJsxTextElement',
          name: 'abbr',
          attributes: [
            {
              type: 'mdxJsxAttribute',
              name: 'title',
              value: 'Hypertext Markup Language'
            }
          ],
          children: [{type: 'text', value: 'HTML'}]
        },
        {type: 'text', value: ' is a lovely language.'}
      ]
    }
  ]
}
```

#### mdast-util-mdxjs-esm: `mdxjsEsm`

MDX中に登場するESM形式のimport/export文をパースします。importもexportもまとめて `mdxjsEsm` タイプとして出力されます。

#### mdast-util-mdx-expression: `mdxFlowExpression` `mdxTextExpression`

MDX中のExpressionをパースします。ブロックとして出現した場合`mdxFlowExpression`、インラインでJSXが出現した場合`mdxTextExpression`というタイプで出力されます。

## まとめ

エンジニアではない書き手にとっては、MDXを使うためにJSXを習得する必要があるため決してハードルが低いものではありません。しかし、ドキュメントの管理者という目線では、独自記法を提供するためのパーサーなどを用意する手間なく文章を拡張できるためとても魅力的です。また、JSXを使わず通常のMarkdownを扱う際でも、MDXを使うことでMarkdownをJavaScriptのエコシステムに組み込むことができます。

このような特徴を考えると、ドキュメントをMDXを使って書くことは、文章をPDFだけでなくReact (あるいはJSXを扱える他のフレームワーク) を使ったWebサイトに埋め込みたい場合、Markdownに便利な拡張をバリバリ加えて大規模なドキュメントを作りたい場合、周りにフロントエンドエンジニアがいる場合にぴったりな選択肢だと思います。
