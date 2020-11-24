import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  // title: '', // e.g: 'Name | Developer'
  // lang: '', // e.g: en, es, fr, jp
  // description: '', // e.g: Welcome to my website
  title: 'いっちのページ',
  lang: 'ja',
  description: 'いっちの自己紹介ページへようこそ',
};

// HERO DATA
export const heroData = {
  // title: '',
  // name: '',
  // subtitle: '',
  // cta: '',
  // icon: '',
  // alt: '',
  subtitle: 'ようこそ',
  name: 'いっち',
  title: 'ツール配布ページへ',
  cta: '自己紹介',
};

// ABOUT DATA
export const aboutData = {
  title: '自己紹介',
  img: 'dog.jpg',
  paragraphOne:
    '僕は普段プログラミングと全く関係ない仕事をしています。プログラミングは趣味で２年程やってます。',
  paragraphTwo: `３年程前、メンタリストDaiGo氏のニコ動で
    IfThenPlanningを知りました。IfThenPlanningでPython(プログラミング)
    を身につけてから、学習のコツ、学習の楽しさを知りました。
    その後React.jsやGCP周りを学んでプロダクトを作っています。`,
  paragraphThree: `IfThenPlanningと学ぶ事の楽しさを知った事は、
    人生が変わるぐらい素晴らしい出来事でした。僕の行動を通して
    IfThenの凄さや学ぶ事の楽しさを伝えられたらな、って思っています。
    主にTwitterで活動してます。DM開放していますので、してほしい事、
    質問等、気軽にDM下さい。`,
  resume: '', // if no resume, the button will not show up
};

export const projectsData = {
  projectsTitle: 'contents',
  datas: [
    {
      id: nanoid(),
      img: 'evernote-twitter-howto.png',
      title: 'ツイートのしかた勉強ノート',
      info: `僕がTwitterをはじめてから付けている勉強ノートです。
        主にnoteやツイートから参考になるものを抜き出して箇条書きにまとめています。
        都度更新しています。`,
      info2: '配布資料：　Evernoteノート',
      cta: 'Evernoteリンク',
      url: 'https://www.evernote.com/l/Asno4PjIngrmdSPoIyOpuV9GMupAY39Mi1M/',
      repo: '', // if no repo, the button will not show up
    },
    {
      id: nanoid(),
      img: 'evernote-twitter-rewrite1.png',
      title: 'セルフリライト履歴',
      info: `僕が自分のツイートをリライトした履歴です。
        下が一番古いもの。上に行くほど新しくなります。
        インプの情報も写真で逐次上げていく予定です。`,
      info2: '配布資料：　Evernoteノート',
      cta: 'Evernoteリンク',
      url: 'https://www.evernote.com/l/AsklOpe1l5WLNJRrBZIqOfXLeLTD2pRcFw0/',
      repo: '', // if no repo, the button will not show up
    },
    // {
    //   id: nanoid(),
    //   img: 'project.jpg',
    //   title: '',
    //   info: '',
    //   info2: '',
    //   url: '',
    //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
    // },
  ],
};

// CONTACT DATA
export const contactData = {
  cta: 'お問合せはこちらから',
  btn: 'DM',
  // email: 'if.then.planning@gmail.com',
  url: 'https://twitter.com/messages/compose?recipient_id=1283306833084473345&ref_src=twsrc%5Etfw',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/IfThenMaker',
    },
    {
      id: nanoid(),
      name: 'youtube',
      url: 'https://www.youtube.com/watch?v=j9ca15xzfbs',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/?hl=ja',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'linkedin',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'github',
    //   url: '',
    // },
  ],
};

export const youTubeData = {
  videoId: 'j9ca15xzfbs',
  id: nanoid(),
};
