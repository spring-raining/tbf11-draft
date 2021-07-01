---
title: "Vivliostyle Foundation 2020 年度の活動まとめ"
author: "小形克宏"
---

# Vivliostyle Foundation 2020 年度の活動まとめ

<div class="doc-author">
小形克宏
<span class="footnote">Vivliostyle Foundation 理事</span>
</div>

## はじめに

Vivliostyle Foundation（一般社団法人ビブリオスタイル）はオープンソース･プロジェクトとしての Vivliostyle の保守／発展／普及を通し、Web／出版／アクセシビリティの発展に努めることを目的に設立された法人だ。利益の分配は目的にしておらず、法人税法では非営利型法人に分類される。

本稿は Vivliostyle Foundation が、第 3 期（2020 年度）決算にともなって制作した事業報告書だ。第 3 期は 2020 年 4 月 1 日〜2021 年 3 月 31 日であり、したがって本稿における「現在」は期末である 2021 年 3 月 31 日を指す。本稿と実際の事業報告書の違いは、本誌が刊行される頃にはサイトで公開される決算報告と理事名簿をそっくり削除したこと、それにともなって節、項を章、節に置換したこと、ハイパーリンクを脚注に変更したこと、そして本章を加えた程度で本質的な違いはない。

執筆に当たっては各種の内部資料を収集、参照して、村上代表理事と小形とでアウトラインを作成、それを元に小形が執筆、村上代表理事が校閲して完成させた。本誌の体裁上、署名は個人名になっているが、主語、そして著作権者は Vivliostyle Foundation であることをお断りする。

このようなプロセスを経た本稿は、当事者が書いた故の主観性は排除できないが、この期間の当法人の活動を最もよく記録した文章ではないかと思う。どうかご一読ください。


## 1. 開発者／ユーザーイベントの開催

当法人は、Vivliostyle を広くユーザーや開発者に知っていただく場として、開発者／ユーザーイベントを年 2 回開催することにしている。本年度も以下のように開催できた。

- 2020 年 4 月 4 日：[Vivliostyle ユーザーと開発者の集い 2020 春（オンライン）](https://vivliostyle.connpass.com/event/170939/)
- 2020 年 10 月 24 日：[Vivliostyle ユーザーと開発者の集い 2020 秋（オンライン）](https://vivliostyle.connpass.com/event/189940/)

前者の春イベントは、いわゆるコロナ禍に重なった。当初は日本印刷技術協会（JAGAT）を会場に開催予定だったが、3 密回避が至上命題となりつつある状況の中、オンライン配信に切り替えることで乗り切ることができた。同種のイベントの多くが中止になった中で、ありがたいことに参加申込は 142 名にも達した。内容的にも当時アルファ版の開発真っ最中だった Vivliostyle Pub の報告を中心に、当法人のリアルな動きをお知らせできたように思う。

他方、秋イベントは CSS 組版を主題とするセミナーとして、じっくり取り組めたように思える。たとえばドイツ国立科学図書館オープン・サイエンス・ラボの [Simon Worthington 氏](https://www.force11.org/users/simon-worthington)による COVID-19 に対する公衆衛生教科書の迅速な出版のレポートや、コントリビュータ [akabeko 氏](https://github.com/akabekobeko)による Vivliostyle の競合である [Paged.js](https://www.pagedmedia.org/paged-js/) の使用レポートなど、Vivliostyle に留まらない CSS 組版の魅力を、幅広く伝えることができたのではないだろうか。

## 2. 公式ウェブサイトのリニューアル

[前期の事業報告書](https://vivliostyle.org/ja/about-us/#2019%E5%B9%B4%E5%BA%A6%E4%BA%8B%E6%A5%AD%E5%A0%B1%E5%91%8A%E6%9B%B8)でも簡単に触れたが、当法人の創設以来、公式サイトのデザインは 2 年あまりも変わらないままだった。これを一新するべく、開発者会議で討議を重ねて以下の方針を定め、2019 年 12 月から [yamasy1549 氏](https://github.com/yamasy1549)にお願いして作業にとりかかった。

- モバイル環境に対応したシングルカラムレイアウト
- トップページに「Vivliostyle とはなにか」が直感できるアニメを配置
- 各ページの目立つところに GitHub リポジトリのリンクを配置
- ユーザーの利便性のため、以下のページを新設
    - プロダクトの概要をまとめた「使ってみる」
    - ユーザーガイドやチュートリアルガイド等の詳細な開発ドキュメント
    - ユーザーの疑問を解決する FAQ

平行して開発者／ユーザーイベント（前章参照）の準備をすすめなければならなかったが、なんとかイベント前日の 4 月 3 日にリニューアルオープンさせることができた。その後も、以下のような情報を追加していった。

- 4 月 10 日：ドイツ国立科学技術図書館が Vivliostyle を使って COVID-19 対策の教科書を出版したことを知らせる
- 4 月 29 日：GitHub Sponsors による支援を公式サイトで呼びかける
- 6 月 11 日：2019 年度事業報告書を公式サイトで公開
- 8 月 19 日：Create Book のチュートリアルを特集企画として公開
- 8 月 29 日：円建てクレジットカード決済（Robot Payment）によるスポンサー募集を公式サイトで開始

中でも寄付による支援の呼びかけは、営利を目的としない（利益の分配をしない）一般社団法人として重要なもので、実際に今期は全部で 61,209 円の寄付金を集めることができた（<a data-ref="fig" href="#fig-1"></a>）。これは経常収益全体の約 4%にあたる。今はまだ決して多いとは言えないが、今後も当法人の活動に賛同してくださる人々の受け皿として、大事に育てていきたいと考えている。

![今期決算における経常収益の内訳](./img/fig-1.png){#fig-1 width=50%}

## 3. プロダクトの開発状況

本章では、プロダクトごとに今期の開発状況を説明する。

### [Vivliostyle Core / Viewer（vivliostyle.js）](https://github.com/vivliostyle/vivliostyle.js)

プロダクト全体の基盤でもある Vivliostyle Core と Vivliostyle Viewer（vivliostyle.js）は、今期多くの機能追加ができた。この結果、これまで十分とは言えなかった [CSS Paged Media](https://www.w3.org/TR/css-page-3/) への対応をすすめることができた。

 - ページ移動用のスライドバーの実装、マウスホイールのサポート（v2.2.0 / 11 月 26 日）
- EPUB の見開き表示指定に対応（v2.3.0 / 12 月 7 日）
- ヘッダーやフッター等を実現する名前付き文字列のサポート[v2.4.0 / 12 月 28 日）
- n 番目ページセレクターのサポート（v2.5.0 / 2 月 26 日）
- 印刷ボタンの追加（v2.6.0 / 3 月 14 日）

### [Vivliostyle CLI](https://github.com/vivliostyle/vivliostyle-cli)

これはコマンドライン・インターフェイスで CSS 組版ができるコンバーターである。今期 Markdown 形式の入力をサポートしたことにより、活用の幅が一気に広がった。また、プレビュー画面が Vivliostyle Viewer に統合されたことで、単に組版結果を確認できるだけでなく「長文を読める」プロダクトに成長したと言える。後述するが、これは将来の Vivliostyle Pub v1 にも良い影響を及ぼすことが期待できる。リリースごとの詳細は下記の通りだ。

- プレビューの UI を Vivliostyle Viewer に置き換えた（v3.2.0 / 3 月 29 日）
- Markdown をはじめ様々なファイル形式の入力をサポート、Themes（後述）のサポート、Web ブックをはじめ複数の出力をサポート、URL による外部 Web ページの読み込みをサポート（v3.0.0 / 2 月 7 日）

### [Vivliostyle Flavored Markdown (VFM)](https://github.com/vivliostyle/vfm)

これはルビ、画像サイズ、キャプション、脚注などを実現した、書籍組版のための Markdown 方言である。最も普及している Markdown 仕様、GitHub Flavored Markdown（GFM）の上位互換だ。Vivliostyle CLI v3.0 の原稿作成用に開発されており、6 月 13 日に v1.0.0-alpha.0 をリリースし、今期末時点で v1.0.0-alpha.17 をリリースし、継続して開発中である。

### [Themes](https://github.com/vivliostyle/themes)

これは Vivliostyle CLI で CSS 組版をするためのスタイルシートを、パッケージとして公開／再利用するための仕組みだ。7 月 1 日に最初の公式 Theme がリリースされ、今期末時点で以下の 3 つのテーマがリリースされている。引き続き拡張していきたい。

- theme-slide（スライド）
- theme-bunko（縦組書籍）
- theme-techbook（技術書）

### [Create Book](https://github.com/vivliostyle/create-book)

これは Vivliostyle CLI を使った書籍制作用の環境をローカルに構築するインストーラーであり、Vivliostyle Pub のローカル版という一面もある。後述する未踏アドバンスト事業落選を契機に、[uetchy 氏](https://github.com/uetchy)によって作られた。今期末時点で v0.1.6 がリリースされている。詳細は、公式サイトに掲載した以下の記事を参照してほしい。

- [特集企画：Create Book で同人誌を作ろう！](https://vivliostyle.org/ja/make-books-with-create-book/)

### [Vivliostyle Pub](https://github.com/vivliostyle/vivliostyle-pub)

当法人プロダクトの集大成ともいえるのが Vivliostyle Pub だ。そこで開発の経緯について、少し詳しく本節で説明する。その出発点はブラウザ上で動作するオンラインエディタ “Viola” である。その作者である [spring-raining 氏](https://github.com/spring-raining)は、これを当法人に移譲するので、コントリビュータが協力して作り直してはどうかと申し出てくれた。その後、月例の開発者会議の中で村上代表理事により “Vivliostyle Pub” というプロジェクト名が与えられ、正式に開発が開始された。このことは前期事業報告書でも述べた。

前期末の時点で、最大の懸案は開発資金の確保であり、開発者会議でその解決策が話し合われた。そこでコントリビュータから提案されたのが、Vivliostyle Pub の開発をテーマにして[未踏アドバンスト事業](https://www.ipa.go.jp/jinzai/advanced/2020/koubo_index.html)に応募することだった。

皆で検討した結果「挑戦してみよう」と決まる。規定により法人は応募できないため、以下の個人の集まりという形で、4月2日に応募を終えた。

- [spring-raining](https://github.com/spring-raining) （代表）
- [youchan](https://github.com/youchan)
- [takanakahiko](https://github.com/takanakahiko)
- [uetchy](https://github.com/uetchy)
- [yamasy1549](https://github.com/yamasy1549)
- [MurakamiShinyu](https://github.com/MurakamiShinyu)

そこからチームは一丸となり、連携しながらVivliostyle Pubの開発にのめり込んでいった。目指すのは 5 月中旬に予定されている 2 次審査である。この時点のバージョン（アルファ版）の概要は下記の通りだ。

- クラウド上にデプロイされた Vivliostyle CLI には、VFM のごく初期のパーサーが実装されている
- Vivliostyle CLI は CSS 組版した結果をブラウザに出力できる
- 同じくエクスポートメニューから PDF をダウンロードできる
- エディタで保存すると、GitHub 上のファイルが更新される
- こうした結果、ウェブブラウザ画面左のエディタで Markdown を書くと、組版結果が画面右で即座に表示される

以下は当時 takanakahiko 氏が作業用に作った、Vivliostyle Pub のフローチャート（<a data-ref="fig" href="#fig-2"></a>）だ。

![開発初期の Vivliostyle Pub フローチャート（作図：@takanakahiko 氏）](./img/fig-2.png){#fig-2 width=80%}

5 月 15 日には無事に第 1 次審査を通過。翌 16 日に第 2 次審査に臨んだものの、残念ながら 6 月 10 日に落選通知を受け取ることとなった。その後、Vivliostyle Pub はごくマイナーなアップデートはされたが、今期末の時点で動いている Vivliostyle Pub は、アルファ版からあまり変わってはいない。現在のスクリーンショットを示す。

![現在の Vivliostyle Pub](./img/fig-3.png){#fig-3 width=80%}

開発がほぼ止まった Vivliostyle Pub をよそに、その部品とも位置づけられる VFM、Themes、Vivliostyle CLI、そして Vivliostyle Core / Viewer の方は、その後大きく進化させることができた。しかしそのためには、まず未踏アドバンスト事業落選のインパクトを乗り越える必要があった。その指針となったのが、村上代表理事による下記の文書である。

- [Vivliostyle Pub v1 Req (11/9)](https://github.com/vivliostyle/community/wiki/Vivliostyle-Pub-v1-Req)
- [Vivliostyle CLI v3.0 new spec (11/9〜2/9)](https://github.com/vivliostyle/community/wiki/Vivliostyle-CLI-v3.0-new-spec)

こうして開発が進んだ VFM、Themes、Vivliostyle CLI を組み込めば、無事に Vivliostyle Pub v1 がリリースできる。それこそが次期の課題となるはずだ。それを果たすために、2021 年 8 月末にベータ版公開、同年 12 月末ローンチを目指して開発が進められることになった。

## 4. Vivliostyle と連携する外部組織との協働

前期の事業収入は 0 円であった。しかし前掲図 1 にあるとおり、今期は 1,503,721 円の事業収入を上げることができた。とくに大きかったのは、以前から村上代表理事が関係してきた外部企業からの受託開発だ。じつは、前章 Vivliostyle Core / Viewer の節で挙げた開発成果は、多くがこの外部企業からの報酬によるものだ。

また、村上代表理事は第 1 章でふれた Simon Worthington 氏と、その後も議論をつづけることで彼等の開発にコミットし続けた。これにより彼等から開発受注が発生して事業収入を得ることができた。このように、外部組織との協働がそのまま Vivliostyle の開発につながり、さらにその結果として課題だった CSS Paged Media への対応も進めることができた。これは大変ありがたいことだった。
