module.exports = {
  title: 'Vivliostyle で本を作ろう Vol. 5', // populated into 'publication.json', default to 'title' of the first entry or 'name' in 'package.json'.
  author: 'Vivliostyle ユーザー会', // default to 'author' in 'package.json' or undefined
  language: 'ja',
  size: 'A4',
  // theme: '', // .css or local dir or npm package. default to undefined
  entry: [
    'content/index.html',
    'content/yamasy/index.md',
    'content/spring-raining/index.md',
    'content/akabeko/index.md',
    'content/ogwata/index.md',
    'content/shinyu/index.md',
  ], // 'entry' can be 'string' or 'object' if there's only single markdown file
  // entryContext: './manuscripts', // default to '.' (relative to 'vivliostyle.config.js')
  output: [
    // path to generate draft file(s). default to '{title}.pdf'
    './vivliostyle-vol-5.pdf',
    {
      path: 'dist',
      format: 'webpub',
    },
  ],
  // workspaceDir: '.vivliostyle', // directory which is saved intermediate files.
  // toc: true, // whether generate and include ToC HTML or not, default to 'false'.
  // cover: './cover.png', // cover image. default to undefined.
  // vfm: { // options of VFM processor
  //   hardLineBreaks: true, // converts line breaks of VFM to <br> tags. default to 'false'.
  //   disableFormatHtml: true, // disables HTML formatting. default to 'false'.
  // },
};
