---
title: CSS組版の基本仕様 CSS Paged Media 入門のススメ
author:
  - 村上真雄
---

## はじめに

[「Vivliostyle ユーザーと開発者の集い 2021春」](https://vivliostyle.connpass.com/event/208401/)で、[「Vivliostyle.js (Core)における CSS Paged Media の実装」](http://bit.ly/vivliostyle202104)の話をしました。その中で「CSS組版に必要なCSS仕様は？」として、「Webブラウザで標準で使える基本的なCSS仕様」と「ページメディア用のCSS仕様」の両方をあげました。前者については [MDNのCSS入門](https://developer.mozilla.org/ja/docs/Learn/CSS) など学習するための材料が豊富ですが、後者（ページメディア用のCSS仕様）については、それほど知られていないというのが現状でしょう。そこでこの記事で、ページメディア用CSS仕様の入門のための情報をまとめることにします。

## CSS組版業界標準としての CSS Paged Media Level 3 および関連仕様

ページメディア（paged media: 紙の本やPDFのようにページ概念のあるメディア）のためのCSS仕様は、ほかのCSS仕様と同じく[W3C (World Wide Web Consortium)](https://www.w3.org/)で標準化が進められているものです。以下の仕様があります：

- [CSS Paged Media Module Level 3 (W3C Working Draft)](https://www.w3.org/TR/css-page-3/)
  - ページメディア用CSS基本仕様。ページ余白、ページサイズと向き、ページヘッダー／フッター、ページ番号など
- [CSS Generated Content for Paged Media Module (W3C Working Draft)](https://www.w3.org/TR/css-gcpm-3/)
  - ページメディア用の生成コンテンツ仕様。柱（ページヘッダーに表示する章タイトルなど）、脚注、クロスリファレンス（ページ番号参照）など
- [CSS Fragmentation Module Level 3 (W3C Candidate Recommendation)](https://www.w3.org/TR/css-break-3/)
  - 改ページの制御などの仕様。（「Fragmentation」とはコンテンツをページやカラムで分割すること）
  - ページだけでなく段組（[CSS Multi-column Layout](https://www.w3.org/TR/css-multicol-1/)）での段の分割も扱うのでこの仕様はページメディア専用ではない
- [CSS Page Floats (W3C Working Draft)](https://www.w3.org/TR/css-page-floats-3/)
  - ページフロート仕様。図版などを本のページの上部や下部に配置

これらの仕様で「W3C Working Draft」とあるものは、まだ未完成のドラフト仕様です。ページメディア用CSSの基本仕様 CSS Paged Media Module Level 3 も Working Draft 状態であり未完成なのですが、この仕様は2004年にほぼ完成した仕様といえる Candidate Recommendation（勧告候補）まで進んだあとに Working Draft に戻されて今にいたっているので、かなり前からほぼ完成しているともみなせます。そして Vivliostyle を含むいくつものCSS組版エンジンは共通してこの仕様を実装しているので、CSS Paged Media Module Level 3はCSS組版の業界標準仕様といえます。

## 意外に古くから実用化されているCSS組版

Vivliostyleプロジェクトのスタートは2014年ですが、その当時、すでに先行しているCSS組版エンジンは世界にいくつかあり、有名な出版社で本格的に利用されている事例も公開されていました。

### CSS組版で本を作っている世界の有名出版社の例

- 米オライリー社（組版エンジンは AH Formatter）
  - 参考記事: https://blog.antenna.co.jp/ILSoft2/archives/820
- 米アシェット社（組版エンジンは Prince）
  - 参考記事: https://www.xml.com/articles/2017/02/20/beyond-xml-making-books-html/

上記アシェット社の事例（CSS組版エンジン Prince を使用）についての参考記事によると、この記事が書かれた2017年2月の時点ですでに7年間HTML+CSSで本を作っていたということなので、2010年ごろにはCSS組版は実用化されていたといえます。

アンテナハウス社の組版エンジンAH Formatter（私がかつて開発に携わっていた）でCSS組版をサポートしたのは2009年です。AH FormatterでのCSS組版によって、縦書きやルビや約物の処理など日本語組版に必要な機能も実現されていました。

### Vivliostyleの新しいところはオープンソースでWebブラウザベース

PrinceやAH Formatterは、本格的な商業出版にも利用できる実用的な組版エンジンですが、これらはオープンソースではなく商用ソフトウェアであり、個人が気軽に使えるようなものではありません。また、その当時も[WeasyPrint](https://weasyprint.org/)というオープンソースで開発されているCSS組版エンジンはありましたが、サポートされているCSS機能は限られていました（ただし現在ではだいぶ開発が進んでいるようです）。

そこで、オープンソースで、だれでも使えるWebブラウザベースで動く新しいCSS組版エンジンを作ることで、もっとCSS組版を普及させられるはずだと考えて、Vivliostyleプロジェクトをスタートしたのでした。

## VivliostyleだけでないCSS組版エンジンのまとめ

非オープンソース・商用CSS組版エンジンでは次の３つが有名です：

- [Prince](https://www.princexml.com/)
- [PDFreactor](https://www.pdfreactor.com/)
- [AH Formatter](https://www.antenna.co.jp/AHF/)

これらはどれも独自開発された本格的な組版エンジンであり、PDF生成についてはPDF/A、PDF/X、PDF/UAの各PDF規格をサポートし、プロフェッショナルなニーズに対応するものです。

オープンソースのCSS組版エンジンとして、Vivliostyle以外に次の２つが有名です：

- [WeasyPrint](http://www.weasyprint.org)
  - 2011年に開発スタート。Pythonで書かれている。PDF生成にはCairoライブラリが使われている。
- [Paged.js](https://pagedjs.org)
  - 2018年に開発スタート。Vivliostyleと同様にWebブラウザで動くJavaScriptライブラリとして作られている。

後発であるPaged.jsが実現しようとしていることはVivliostyleと似ています。2018年にVivliostyleプロジェクトは今の形で再始動したのですが、その前は開発が停滞してCSS Paged Mediaの実装も中途半端で止まっていたために、新たなオープンソース・プロジェクトが必要だと考えた人たちが立ち上げたのが Paged.js です。その後Vivliostyleもコミュニティベースでの開発を進めることができているので、互いによい競争相手といえます。

### 複数のCSS組版エンジンを比較できるWebサイト PrintCSS.live など

[「Vivliostyle ユーザーと開発者の集い 2021春」](https://vivliostyle.connpass.com/event/208401/)でのAndreas Zettl氏の講演「Introduction to the PrintCSS Playground and PrintCSS Cloud」で紹介されている PrintCSS.live など、複数のCSS組版エンジンを比較するのに役に立つサイトがあります：

- [PrintCSS.live - The PrintCSS Playground](https://printcss.live/)
  - HTMLとCSSを指定して、組版エンジンを以下から選んで組版結果を確認できる:
    - AH Formatter, DocRaptor, paged.js, PDFreactor, Prince, typeset.sh, Vivliostyle, WeasyPrint
- [print-css.rocks - Introduction to PrintCSS and CSS Paged Media](https://print-css.rocks/)
  - それぞれのCSS組版ツールの紹介やCSS Paged Mediaの入門など

### Vivliostyle以外にも複数の実装があることのメリット

Vivliostyle以外にも複数の CSS Paged Media 実装があるということは、ユーザーにとってもVivliostyleにとってもメリットがあることです。

- CSS組版を学ぶ材料がそれだけいろいろある
- 複数の実装があることで、CSS仕様の標準化が進むことになる
  - W3CのCSS仕様が正式な仕様（W3C勧告）になるための条件として実装が複数あることが必須
  - CSS仕様への提案をするのに複数の実装で協力できる
- 実装するときに互いに参考になる
  - CSS機能を実装するとき、他の実装でどのように動作するか、またどのような問題があるかを見ることで学べることがある
- ユーザーにとっては選択肢があること
  - 現状はどのCSS組版エンジンも一長一短あり、ほかのものと比較検討して最適なツールを選ぶことができるということはユーザーにとってメリット
- 競争があることで進歩
  - ほかのCSS組版エンジンの開発が進んでいるのにVivliostyleの開発が止まっていたのでは存在価値がなくなってしまうというプレッシャー
  - そのようなプレッシャーを他の実装に与えられるくらいになりたい

## CSS組版入門のために

前項「Vivliostyle以外にも複数の実装があることのメリット」のひとつとして「CSS組版を学ぶ材料がそれだけいろいろある」をあげました。「PrintCSS」や「CSS Paged Media」を検索すると、Vivliostyleに限らないCSS組版の情報がいろいろ見つかります。

### 『CSSページ組版入門』（アンテナハウス）

CSS組版についてのまとまった入門書として『CSSページ組版入門』（アンテナハウス）があります。PDF版もそのCSS組版ソースファイル（HTML+CSSなどデータ）
も公開されているので、それ自体がCSS組版のサンプルとして参考になります。

- [アンテナハウス CSSページ組版入門 第4版](https://www.antenna.co.jp/AHF/ahf_publication/#CSSPrint)

この『CSSページ組版入門』は「『AH Formatter』の CSS組版機能をご利用いただくための解説書」として公開されているものですが、独自拡張の機能を除けば CSS Paged Media などCSS仕様には基本的に共通なので、AH Formatter以外でのCSS組版にも役に立つはずです。

ただし、CSS組版エンジンによってサポートされているCSS機能に違いがあるため、あるCSS組版エンジン用のサンプルが別のCSS組版エンジンで組版したとき期待通りの結果にならないということはあります。

### VivliostyleのサポートするCSS機能

VivliostyleでのCSS組版の機能を使いこなすためには、Vivliostyleが現状でどのようなCSSの機能をサポートしているか把握することが必要です。そのためのVivliostyleのドキュメントとして「サポートするCSS機能」を参照してください。

- [サポートするCSS機能 - Vivliostyle Docs](https://docs.vivliostyle.org/#/ja/supported-css-features)

このドキュメントはVivliostyleで利用できるすべてのCSS機能をリストアップしたものですが、少し分かりにくいかもしれません。そこで以下に、ページメディア用CSS仕様に限って、サポート状況を簡潔にまとめます。

| CSSモジュール | Vivliostyleでのサポート状況
|-------------|-----------------------
| [CSS Paged Media Level 3](https://www.w3.org/TR/css-page-3/) | ほぼフルサポート |
| [CSS Generated Content for Paged Media](https://www.w3.org/TR/css-gcpm-3/) | 以下の機能をサポート: <br>1.1 Named strings, <br>2 Footnotes, <br>3.1 Page Selectors: :nth(An+B), <br>5.1 The target-counter() function, <br>5.2 The target-counters() function
| [CSS Fragmentation Level 3](https://www.w3.org/TR/css-break-3/) | ほぼフルサポート |
| [CSS Page Floats](https://www.w3.org/TR/css-page-floats-3/) |  以下の機能をサポート: <br>3.1 The float-reference property, <br>3.2 The float property, <br>4 The clear property

この「サポート状況」での「ほぼフルサポート」は、定義されているCSSプロパティをすべてサポートしているが細かな動作に問題が残っていることを意味します。

VivliostyleでのCSSサポートでの問題点や要望は [Vivliostyle.js の GitHub issues](https://github.com/vivliostyle/vivliostyle.js/issues) にいろいろと登録されています。登録されていない問題に気がついた方は、ぜひissue登録などで報告お願いします。
