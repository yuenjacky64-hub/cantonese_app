export interface Flashcard {
  id: string;
  cantonese: string;
  english: string;
  zhTW: string;
  zhCN: string;
  example?: {
    cantonese: string;
    english: string;
    zhTW: string;
    zhCN: string;
  };
}

export interface Category {
  id: string;
  title: string;
  titleKey: string;
  group: string;
  groupKey: string;
  cards: Flashcard[];
}

export const lessons: Category[] = [
  {
    id: 'greetings',
    title: 'Greetings',
    titleKey: 'topics.greetings',
    group: 'basics',
    groupKey: 'groups.basics',
    cards: [
      {
        id: '1',
        cantonese: 'Nei hou?',
        english: 'How are you?',
        zhTW: '你好嗎？',
        zhCN: '你好吗？',
        example: {
          cantonese: 'Nei hou ma?',
          english: 'How are you now?',
          zhTW: '你現在好嗎？',
          zhCN: '你现在好吗？'
        }
      },
      {
        id: '2',
        cantonese: 'Hou',
        english: 'Fine / Good',
        zhTW: '很好',
        zhCN: '很好',
        example: {
          cantonese: 'Ngo hou hou.',
          english: 'I am fine.',
          zhTW: '我很好。',
          zhCN: '我很好。'
        }
      },
      {
        id: '3',
        cantonese: 'Mgoi / Do ze',
        english: 'Thank you',
        zhTW: '謝謝',
        zhCN: '谢谢',
        example: {
          cantonese: 'Do ze nei ge bong mong.',
          english: 'Many thanks for the help.',
          zhTW: '非常感謝你的幫忙。',
          zhCN: '非常感谢你的帮忙。'
        }
      },
      {
        id: '4',
        cantonese: 'Mh sai hak hei',
        english: 'You\'re welcome',
        zhTW: '不客氣',
        zhCN: '不客气',
        example: {
          cantonese: 'bat1 haak3 hei3, pang4 jau5.',
          english: 'You are welcome, friend.',
          zhTW: '不客氣，朋友。',
          zhCN: '不客气，朋友。'
        }
      },
      {
        id: '5',
        cantonese: 'Jou san',
        english: 'Good morning',
        zhTW: '早安',
        zhCN: '早安',
        example: {
          cantonese: 'daai6 gaa1 zou2 on1.',
          english: 'Good morning to all of you.',
          zhTW: '大家早安。',
          zhCN: '大家早安。'
        }
      },
      {
        id: '6',
        cantonese: 'ng5 on1',
        english: 'Good afternoon',
        zhTW: '午安',
        zhCN: '午安',
        example: {
          cantonese: 'ng5 on1 (lai5 maau6).',
          english: 'Good afternoon (polite).',
          zhTW: '午安（禮貌）。',
          zhCN: '午安（礼貌）。'
        }
      },
      {
        id: '7',
        cantonese: 'maan5 on1',
        english: 'Good evening',
        zhTW: '晚安',
        zhCN: '晚安',
        example: {
          cantonese: 'maan5 on1, naai4 naai2.',
          english: 'Good evening, grandma.',
          zhTW: '晚安，奶奶。',
          zhCN: '晚安，奶奶。'
        }
      },
      {
        id: '8',
        cantonese: 'ng5 on1 (zung1 ng5)',
        english: 'Good noon',
        zhTW: '午安 (中午)',
        zhCN: '午安 (中午)',
        example: {
          cantonese: 'zuk1 nei5 mun4 zung1 ng5 jyu6 faai3.',
          english: 'Good noon to you.',
          zhTW: '祝你們中午愉快。',
          zhCN: '祝你们中午愉快。'
        }
      },
      {
        id: '9',
        cantonese: 'mei5 hou2 dik1 jat1 tin1',
        english: 'Good day',
        zhTW: '美好的一天',
        zhCN: '美好的一天',
        example: {
          cantonese: 'zuk1 nei5 jau5 mei5 hou2 dik1 jat1 tin1.',
          english: 'Good day (polite).',
          zhTW: '祝您有美好的一天。',
          zhCN: '祝您有美好的一天。'
        }
      },
      {
        id: '10',
        cantonese: 'zoi3 gin3',
        english: 'Goodbye',
        zhTW: '再見',
        zhCN: '再见',
        example: {
          cantonese: 'zoi3 gin3, haa6 ci3 gin3.',
          english: 'Goodbye, until next time.',
          zhTW: '再見，下次見。',
          zhCN: '再见，下次见。'
        }
      },
      {
        id: '11',
        cantonese: 'jau5 jan4 zoi6 maa1?',
        english: 'Is anybody home? / Knock knock',
        zhTW: '有人在嗎？',
        zhCN: '有人在吗？',
        example: {
          cantonese: 'jau5 jan4 zoi6 maa1? naa5 leoi5 jau5 jan4 maa1?',
          english: 'Hello! Is anybody there?',
          zhTW: '有人在嗎？那裡有人嗎？',
          zhCN: '有人在吗？那里有人吗？'
        }
      },
      {
        id: '12',
        cantonese: 'ceng2 zeon3',
        english: 'Please come in',
        zhTW: '請進',
        zhCN: '请进',
        example: {
          cantonese: 'ceng2 zeon3 loi4 ngo5 mun4 gaa1.',
          english: 'Please come in to our house.',
          zhTW: '請進來我們家。',
          zhCN: '请进来我们家。'
        }
      },
      {
        id: 'g13',
        cantonese: 'siu2 sam1 / bou2 zung6',
        english: 'Take care',
        zhTW: '小心 / 保重',
        zhCN: '小心 / 保重',
        example: {
          cantonese: 'leoi5 tou4 siu2 sam1.',
          english: 'Take care on your journey.',
          zhTW: '旅途小心。',
          zhCN: '旅途小心。'
        }
      },
      {
        id: 'g14',
        cantonese: 'maan6 seoi3 / fun1 jing4',
        english: 'Long live / Welcome',
        zhTW: '萬歲 / 歡迎',
        zhCN: '万岁 / 欢迎',
        example: {
          cantonese: 'fei1 leot6 ban1 maan6 seoi3!',
          english: 'Long live the Hong Kong!',
          zhTW: '菲律賓萬歲！',
          zhCN: '菲律宾万岁！'
        }
      },
      {
        id: 'g15',
        cantonese: 'deoi3 bat1 hei2 / pou5 hip3',
        english: 'Sorry / Excuse me',
        zhTW: '對不起 / 抱歉',
        zhCN: '对不起 / 抱歉',
        example: {
          cantonese: 'deoi3 bat1 hei2, ngo5 ci4 dou3 liu5.',
          english: 'Sorry, I am late.',
          zhTW: '對不起，我遲到了。',
          zhCN: '对不起，我迟到了。'
        }
      },
      {
        id: 'g16',
        cantonese: 'si6 / bat1 si6',
        english: 'Yes / No',
        zhTW: '是 / 不是',
        zhCN: '是 / 不是',
        example: {
          cantonese: 'si6 dik1, ngo5 wui5 heoi3. taa1 / taa1 bat1 loi4.',
          english: 'Yes, I will go. He/she is not coming.',
          zhTW: '是的，我會去。他/她不來。',
          zhCN: '是的，我会去。他/她不来。'
        }
      },
      {
        id: 'g17',
        cantonese: 'hou2 dik1 / ho2 ji5',
        english: 'Okay / Alright / Go ahead',
        zhTW: '好的 / 可以',
        zhCN: '好的 / 可以',
        example: {
          cantonese: 'hou2 dik1, doi6 wui6 gin3.',
          english: 'Alright, see you later.',
          zhTW: '好的，待會見。',
          zhCN: '好的，待会见。'
        }
      },
      {
        id: 'g18',
        cantonese: 'saau2 dang2 jat1 haa5',
        english: 'Just a moment',
        zhTW: '稍等一下',
        zhCN: '稍等一下',
        example: {
          cantonese: 'ceng2 saau2 dang2, ngo5 daa2 go3 din6 waa2.',
          english: 'Just a moment, I will call.',
          zhTW: '請稍等，我打個電話。',
          zhCN: '请稍等，我打个电话。'
        }
      },
      {
        id: 'g19',
        cantonese: 'gung1 hei2 / zuk1 ho6',
        english: 'Congratulations / Happy greetings',
        zhTW: '恭喜 / 祝賀',
        zhCN: '恭喜 / 祝贺',
        example: {
          cantonese: 'zuk1 nei5 saang1 jat6 faai3 lok6!',
          english: 'Happy birthday to you!',
          zhTW: '祝你生日快樂！',
          zhCN: '祝你生日快乐！'
        }
      },
      {
        id: 'g20',
        cantonese: 'hau6 wui6 jau5 kei4',
        english: 'Until we meet again',
        zhTW: '後會有期',
        zhCN: '后会有期',
        example: {
          cantonese: 'zoi3 gin3, hau6 wui6 jau5 kei4.',
          english: 'Goodbye, until we meet again.',
          zhTW: '再見，後會有期。',
          zhCN: '再见，后会有期。'
        }
      },
    ]
  },
  {
    id: 'numbers',
    title: 'Numbers',
    titleKey: 'topics.numbers',
    group: 'basics',
    groupKey: 'groups.basics',
    cards: [
      {
        id: 'n1',
        cantonese: 'jat1',
        english: 'One',
        zhTW: '一',
        zhCN: '一',
        example: {
          cantonese: 'ngo5 zi2 seoi1 jiu3 jat1 go3.',
          english: 'I only need one.',
          zhTW: '我只需要一個。',
          zhCN: '我只需要一个。'
        }
      },
      {
        id: 'n2',
        cantonese: 'ji6',
        english: 'Two',
        zhTW: '二',
        zhCN: '二',
        example: {
          cantonese: 'taa1 mun4 jau5 loeng5 go3 haai4 zi2.',
          english: 'They have two children.',
          zhTW: '他們有兩個孩子。',
          zhCN: '他们有两个孩子。'
        }
      },
      {
        id: 'n3',
        cantonese: 'saam1',
        english: 'Three',
        zhTW: '三',
        zhCN: '三',
        example: {
          cantonese: 'ngo5 mun4 zou2 leoi5 jau5 saam1 go3 jan4.',
          english: 'There are three of us in the group.',
          zhTW: '我們組裡有三個人。',
          zhCN: '我们组里有三个人。'
        }
      },
      {
        id: 'n4',
        cantonese: 'sei3',
        english: 'Four',
        zhTW: '四',
        zhCN: '四',
        example: {
          cantonese: 'hei3 ce1 jau5 sei3 go3 leon4 zi2.',
          english: 'The car has four wheels.',
          zhTW: '汽車有四個輪子。',
          zhCN: '汽车有四个轮子。'
        }
      },
      {
        id: 'n5',
        cantonese: 'ng5',
        english: 'Five',
        zhTW: '五',
        zhCN: '五',
        example: {
          cantonese: 'ji5 ging1 si6 haa6 ng5 ng5 dim2 liu5.',
          english: 'It is already five in the afternoon.',
          zhTW: '已經是下午五點了。',
          zhCN: '已经是下午五点了。'
        }
      },
      {
        id: 'n6',
        cantonese: 'luk6',
        english: 'Six',
        zhTW: '六',
        zhCN: '六',
        example: {
          cantonese: 'ji5 ging1 luk6 go3 jyut6 liu5.',
          english: 'It has been six months.',
          zhTW: '已經六個月了。',
          zhCN: '已经六个月了。'
        }
      },
      {
        id: 'n7',
        cantonese: 'cat1',
        english: 'Seven',
        zhTW: '七',
        zhCN: '七',
        example: {
          cantonese: 'jat1 zau1 jau5 cat1 tin1.',
          english: 'There are seven days in a week.',
          zhTW: '一週有七天。',
          zhCN: '一周有七天。'
        }
      },
      {
        id: 'n8',
        cantonese: 'baat3',
        english: 'Eight',
        zhTW: '八',
        zhCN: '八',
        example: {
          cantonese: 'ngo5 mun4 jau5 baat3 go3 hing1 dai6 zi2 mui2.',
          english: 'We are eight siblings.',
          zhTW: '我們有八個兄弟姊妹。',
          zhCN: '我们有八个兄弟姐妹。'
        }
      },
      {
        id: 'n9',
        cantonese: 'gau2',
        english: 'Nine',
        zhTW: '九',
        zhCN: '九',
        example: {
          cantonese: 'taa1 / taa1 gau2 seoi3.',
          english: 'He/She is nine years old.',
          zhTW: '他/她九歲。',
          zhCN: '他/她九岁。'
        }
      },
      {
        id: 'n10',
        cantonese: 'sap6',
        english: 'Ten',
        zhTW: '十',
        zhCN: '十',
        example: {
          cantonese: 'ngo5 jau5 sap6 go3 sau2 zi2.',
          english: 'I have ten fingers.',
          zhTW: '我有十個手指。',
          zhCN: '我有十个手指。'
        }
      },
      {
        id: 'n11',
        cantonese: 'sap6 jat1',
        english: 'Eleven',
        zhTW: '十一',
        zhCN: '十一',
        example: {
          cantonese: 'jau5 sap6 jat1 ming4 kau4 jyun4.',
          english: 'There are eleven players.',
          zhTW: '有十一名球員。',
          zhCN: '有十一名球员。'
        }
      },
      {
        id: 'n12',
        cantonese: 'sap6 ji6',
        english: 'Twelve',
        zhTW: '十二',
        zhCN: '十二',
        example: {
          cantonese: 'tok3 pun2 leoi5 jau5 sap6 ji6 go3 gai1 daan2.',
          english: 'There are twelve eggs in the tray.',
          zhTW: '托盤裡有十二個雞蛋。',
          zhCN: '托盘里有十二个鸡蛋。'
        }
      },
      {
        id: 'n13',
        cantonese: 'sap6 saam1',
        english: 'Thirteen',
        zhTW: '十三',
        zhCN: '十三',
        example: {
          cantonese: 'sap6 saam1 si6 taa1 / taa1 zeoi3 hei2 fun1 dik1 sou3 zi6.',
          english: 'Thirteen is his/her favorite number.',
          zhTW: '十三是他/她最喜歡的數字。',
          zhCN: '十三是他/她最喜欢的数字。'
        }
      },
      {
        id: 'n14',
        cantonese: 'sap6 sei3',
        english: 'Fourteen',
        zhTW: '十四',
        zhCN: '十四',
        example: {
          cantonese: 'ji5 ging1 gwo3 heoi3 sap6 sei3 tin1 liu5.',
          english: 'Fourteen days have passed.',
          zhTW: '已經過去十四天了。',
          zhCN: '已经过去十四天了。'
        }
      },
      {
        id: 'n15',
        cantonese: 'sap6 ng5',
        english: 'Fifteen',
        zhTW: '十五',
        zhCN: '十五',
        example: {
          cantonese: 'ngo5 mun4 baan1 jau5 sap6 ng5 go3 jan4.',
          english: 'We are fifteen in the class.',
          zhTW: '我們班有十五個人。',
          zhCN: '我们班有十五个人。'
        }
      },
      {
        id: 'n16',
        cantonese: 'sap6 luk6',
        english: 'Sixteen',
        zhTW: '十六',
        zhCN: '十六',
        example: {
          cantonese: 'taa1 / taa1 sap6 luk6 seoi3 liu5.',
          english: 'He/She is sixteen years old.',
          zhTW: '他/她十六歲了。',
          zhCN: '他/她十六岁了。'
        }
      },
      {
        id: 'n17',
        cantonese: 'sap6 cat1',
        english: 'Seventeen',
        zhTW: '十七',
        zhCN: '十七',
        example: {
          cantonese: 'niu5 dik1 sou3 loeng6 si6 sap6 cat1 zek3.',
          english: 'The number of birds is seventeen.',
          zhTW: '鳥的數量是十七隻。',
          zhCN: '鸟的数量是十七只。'
        }
      },
      {
        id: 'n18',
        cantonese: 'sap6 baat3',
        english: 'Eighteen',
        zhTW: '十八',
        zhCN: '十八',
        example: {
          cantonese: 'jau5 sap6 baat3 wai6 haak3 jan4.',
          english: 'There are eighteen guests.',
          zhTW: '有十八位客人。',
          zhCN: '有十八位客人。'
        }
      },
      {
        id: 'n19',
        cantonese: 'sap6 gau2',
        english: 'Nineteen',
        zhTW: '十九',
        zhCN: '十九',
        example: {
          cantonese: 'zi2 jiu3 sap6 gau2 pei1 sok3.',
          english: 'Only nineteen pesos.',
          zhTW: '只要十九披索。',
          zhCN: '只要十九披索。'
        }
      },
      {
        id: 'n20',
        cantonese: 'ji6 sap6',
        english: 'Twenty',
        zhTW: '二十',
        zhCN: '二十',
        example: {
          cantonese: 'jau5 ji6 sap6 ming4 hok6 saang1.',
          english: 'There are twenty students.',
          zhTW: '有二十名學生。',
          zhCN: '有二十名学生。'
        }
      },
      {
        id: 'n30',
        cantonese: 'saam1 sap6',
        english: 'Thirty',
        zhTW: '三十',
        zhCN: '三十',
        example: {
          cantonese: 'gau2 jyut6 jau5 saam1 sap6 tin1.',
          english: 'There are thirty days in September.',
          zhTW: '九月有三十天。',
          zhCN: '九月有三十天。'
        }
      },
      {
        id: 'n40',
        cantonese: 'sei3 sap6',
        english: 'Forty',
        zhTW: '四十',
        zhCN: '四十',
        example: {
          cantonese: 'taa1 / taa1 ji5 ging1 sei3 sap6 seoi3 liu5.',
          english: 'He/She is forty already.',
          zhTW: '他/她已經四十歲了。',
          zhCN: '他/她已经四十岁了。'
        }
      },
      {
        id: 'n50',
        cantonese: 'ng5 sap6',
        english: 'Fifty',
        zhTW: '五十',
        zhCN: '五十',
        example: {
          cantonese: 'ng5 sap6 si6 jat1 baak3 dik1 jat1 bun3.',
          english: 'Fifty is half of one hundred.',
          zhTW: '五十是一百的一半。',
          zhCN: '五十是一百的一半。'
        }
      },
      {
        id: 'n100',
        cantonese: 'jat1 baak3',
        english: 'One Hundred',
        zhTW: '一百',
        zhCN: '一百',
        example: {
          cantonese: 'baak3 fan6 zi1 baak3.',
          english: 'One hundred percent.',
          zhTW: '百分之百。',
          zhCN: '百分之百。'
        }
      },
      {
        id: 'n1000',
        cantonese: 'jat1 cin1',
        english: 'One Thousand',
        zhTW: '一千',
        zhCN: '一千',
        example: {
          cantonese: 'fai3 jung6 si6 jat1 cin1.',
          english: 'The payment is one thousand.',
          zhTW: '費用是一千。',
          zhCN: '费用是一千。'
        }
      },
    ]
  },
  {
    id: 'days-months',
    title: 'Days & Months',
    titleKey: 'topics.days-months',
    group: 'basics',
    groupKey: 'groups.basics',
    cards: [
      {
        id: 'dm1',
        cantonese: 'sing1 kei4 jat1',
        english: 'Monday',
        zhTW: '星期一',
        zhCN: '星期一',
        example: {
          cantonese: 'ngo5 mun4 sing1 kei4 jat1 gin3.',
          english: 'We will meet on Monday.',
          zhTW: '我們星期一見。',
          zhCN: '我们星期一见。'
        }
      },
      {
        id: 'dm2',
        cantonese: 'sing1 kei4 ji6',
        english: 'Tuesday',
        zhTW: '星期二',
        zhCN: '星期二',
        example: {
          cantonese: 'gam1 tin1 si6 sing1 kei4 ji6.',
          english: 'Today is Tuesday.',
          zhTW: '今天是星期二。',
          zhCN: '今天是星期二。'
        }
      },
      {
        id: 'dm3',
        cantonese: 'sing1 kei4 saam1',
        english: 'Wednesday',
        zhTW: '星期三',
        zhCN: '星期三',
        example: {
          cantonese: 'sing1 kei4 saam1 bat1 jung6 soeng5 fo3.',
          english: 'There is no class on Wednesday.',
          zhTW: '星期三不用上課。',
          zhCN: '星期三不用上课。'
        }
      },
      {
        id: 'dm4',
        cantonese: 'sing1 kei4 sei3',
        english: 'Thursday',
        zhTW: '星期四',
        zhCN: '星期四',
        example: {
          cantonese: 'taa1 / taa1 sing1 kei4 sei3 lei4 hoi1.',
          english: 'He/She is leaving on Thursday.',
          zhTW: '他/她星期四離開。',
          zhCN: '他/她星期四离开。'
        }
      },
      {
        id: 'dm5',
        cantonese: 'sing1 kei4 ng5',
        english: 'Friday',
        zhTW: '星期五',
        zhCN: '星期五',
        example: {
          cantonese: 'sing1 kei4 ng5 han2 faai3 lok6.',
          english: 'Friday is fun.',
          zhTW: '星期五很快樂。',
          zhCN: '星期五很快乐。'
        }
      },
      {
        id: 'dm6',
        cantonese: 'sing1 kei4 luk6',
        english: 'Saturday',
        zhTW: '星期六',
        zhCN: '星期六',
        example: {
          cantonese: 'ngo5 sing1 kei4 luk6 jiu3 jau1 sik1.',
          english: 'I will rest on Saturday.',
          zhTW: '我星期六要休息。',
          zhCN: '我星期六要休息。'
        }
      },
      {
        id: 'dm7',
        cantonese: 'sing1 kei4 jat6 / sing1 kei4',
        english: 'Sunday / Week',
        zhTW: '星期日 / 星期',
        zhCN: '星期日 / 星期',
        example: {
          cantonese: 'mui5 go3 sing1 kei4 jat6 heoi3 gaau3 tong2.',
          english: 'Night mass every Sunday.',
          zhTW: '每個星期日去教堂。',
          zhCN: '每个星期日去教堂。'
        }
      },
      {
        id: 'dm8',
        cantonese: 'jat1 jyut6',
        english: 'January',
        zhTW: '一月',
        zhCN: '一月',
        example: {
          cantonese: 'jat1 jyut6 si6 dai6 jat1 go3 jyut6.',
          english: 'January is the first month.',
          zhTW: '一月是第一個月。',
          zhCN: '一月是第一个月。'
        }
      },
      {
        id: 'dm9',
        cantonese: 'ji6 jyut6',
        english: 'February',
        zhTW: '二月',
        zhCN: '二月',
        example: {
          cantonese: 'ji6 jyut6 han2 dyun2.',
          english: 'The month of February is short.',
          zhTW: '二月很短。',
          zhCN: '二月很短。'
        }
      },
      {
        id: 'dm10',
        cantonese: 'saam1 jyut6',
        english: 'March',
        zhTW: '三月',
        zhCN: '三月',
        example: {
          cantonese: 'saam1 jyut6 han2 jit6.',
          english: 'It is hot in March.',
          zhTW: '三月很熱。',
          zhCN: '三月很热。'
        }
      },
      {
        id: 'dm11',
        cantonese: 'sei3 jyut6',
        english: 'April',
        zhTW: '四月',
        zhCN: '四月',
        example: {
          cantonese: 'taa1 / taa1 dik1 saang1 jat6 zoi6 sei3 jyut6.',
          english: 'His/Her birthday is in April.',
          zhTW: '他/她的生日在四月。',
          zhCN: '他/她的生日在四月。'
        }
      },
      {
        id: 'dm12',
        cantonese: 'ng5 jyut6',
        english: 'May',
        zhTW: '五月',
        zhCN: '五月',
        example: {
          cantonese: 'ng5 jyut6 jau5 han2 do1 zit3 jat6.',
          english: 'There are many festivals in May.',
          zhTW: '五月有很多節日。',
          zhCN: '五月有很多节日。'
        }
      },
      {
        id: 'dm13',
        cantonese: 'luk6 jyut6',
        english: 'June',
        zhTW: '六月',
        zhCN: '六月',
        example: {
          cantonese: 'luk6 jyut6 hoi1 hok6.',
          english: 'Back to school in June.',
          zhTW: '六月開學。',
          zhCN: '六月开学。'
        }
      },
      {
        id: 'dm14',
        cantonese: 'cat1 jyut6',
        english: 'July',
        zhTW: '七月',
        zhCN: '七月',
        example: {
          cantonese: 'cat1 jyut6 do1 jyu5.',
          english: 'July is rainy.',
          zhTW: '七月多雨。',
          zhCN: '七月多雨。'
        }
      },
      {
        id: 'dm15',
        cantonese: 'baat3 jyut6',
        english: 'August',
        zhTW: '八月',
        zhCN: '八月',
        example: {
          cantonese: 'baat3 jyut6 si6 jyu5 man4 jyut6.',
          english: 'August is the Month of Language.',
          zhTW: '八月是語文月。',
          zhCN: '八月是语文月。'
        }
      },
      {
        id: 'dm16',
        cantonese: 'gau2 jyut6',
        english: 'September',
        zhTW: '九月',
        zhCN: '九月',
        example: {
          cantonese: 'sing3 daan3 zit3 cung4 gau2 jyut6 hoi1 ci2.',
          english: 'Christmas starts in September.',
          zhTW: '聖誕節從九月開始。',
          zhCN: '圣诞节从九月开始。'
        }
      },
      {
        id: 'dm17',
        cantonese: 'sap6 jyut6',
        english: 'October',
        zhTW: '十月',
        zhCN: '十月',
        example: {
          cantonese: 'sap6 jyut6 hoi1 ci2 bin3 laang5 liu5.',
          english: 'It is getting cold in October.',
          zhTW: '十月開始變冷了。',
          zhCN: '十月开始变冷了。'
        }
      },
      {
        id: 'dm18',
        cantonese: 'sap6 jat1 jyut6',
        english: 'November',
        zhTW: '十一月',
        zhCN: '十一月',
        example: {
          cantonese: 'maan6 sing3 zit3 zoi6 sap6 jat1 jyut6.',
          english: 'Day of the Dead is in November.',
          zhTW: '萬聖節在十一月。',
          zhCN: '万圣节在十一月。'
        }
      },
      {
        id: 'dm19',
        cantonese: 'sap6 ji6 jyut6',
        english: 'December',
        zhTW: '十二月',
        zhCN: '十二月',
        example: {
          cantonese: 'sap6 ji6 jyut6 dik1 mei4 fung1 han2 laang5.',
          english: 'The breeze is cold in December.',
          zhTW: '十二月的微風很冷。',
          zhCN: '十二月的微风很冷。'
        }
      },
      {
        id: 'dm20',
        cantonese: 'tin1 / jat6 / taai3 joeng4',
        english: 'Day / Sun',
        zhTW: '天 / 日 / 太陽',
        zhCN: '天 / 日 / 太阳',
        example: {
          cantonese: 'mei5 hou2 dik1 jat1 tin1!',
          english: 'Good day!',
          zhTW: '美好的一天！',
          zhCN: '美好的一天！'
        }
      },
      {
        id: 'dm21',
        cantonese: 'jyut6 / jyut6 loeng6',
        english: 'Month / Moon',
        zhTW: '月 / 月亮',
        zhCN: '月 / 月亮',
        example: {
          cantonese: 'jat1 go3 jyut6 gwo3 heoi3 liu5.',
          english: 'One month has passed.',
          zhTW: '一個月過去了。',
          zhCN: '一个月过去了。'
        }
      },
      {
        id: 'dm22',
        cantonese: 'nin4',
        english: 'Year',
        zhTW: '年',
        zhCN: '年',
        example: {
          cantonese: 'san1 nin4 san1 hei1 mong6.',
          english: 'New year, new hope.',
          zhTW: '新年新希望。',
          zhCN: '新年新希望。'
        }
      }
    ]
  },
  {
    id: 'common-phrases',
    title: 'Common Phrases',
    titleKey: 'topics.common-phrases',
    group: 'basics',
    groupKey: 'groups.basics',
    cards: [
      {
        id: 'c1',
        cantonese: 'si6',
        english: 'Yes',
        zhTW: '是',
        zhCN: '是',
        example: {
          cantonese: 'si6 dik1, ngo5 ming4 baak6 liu5 (lai5 maau6).',
          english: 'Yes, I understand (polite).',
          zhTW: '是的，我明白了（禮貌）。',
          zhCN: '是的，我明白了（礼貌）。'
        }
      },
      {
        id: 'c2',
        cantonese: 'bat1',
        english: 'No',
        zhTW: '不',
        zhCN: '不',
        example: {
          cantonese: 'ngo5 bat1 zi1 dou3.',
          english: 'I do not know.',
          zhTW: '我不知道。',
          zhCN: '我不知道。'
        }
      },
      {
        id: 'c3',
        cantonese: 'ze5 si6 sam6 mo1?',
        english: 'What is this?',
        zhTW: '這是什麼？',
        zhCN: '这是什么？',
        example: {
          cantonese: 'ze5 si6 sam6 mo1? hou2 hek3 maa1?',
          english: 'What is this? Is it delicious?',
          zhTW: '這是什麼？好吃嗎？',
          zhCN: '这是什么？好吃吗？'
        }
      },
      {
        id: 'c4',
        cantonese: 'ze5 go3 do1 siu2 cin2?',
        english: 'How much is this?',
        zhTW: '這個多少錢？',
        zhCN: '这个多少钱？',
        example: {
          cantonese: 'ze5 go3 do1 siu2 cin2? pin4 ji2 maa1?',
          english: 'How much is this? Is it cheap?',
          zhTW: '這個多少錢？便宜嗎？',
          zhCN: '这个多少钱？便宜吗？'
        }
      },
      {
        id: 'c5',
        cantonese: 'hou2 hek3',
        english: 'Delicious',
        zhTW: '好吃',
        zhCN: '好吃',
        example: {
          cantonese: 'maa4 maa1 zou6 dik1 coi3 han2 hou2 hek3.',
          english: 'Mom\'s cooking is delicious.',
          zhTW: '媽媽做的菜很好吃。',
          zhCN: '妈妈做的菜很好吃。'
        }
      },
    ]
  },
  {
    id: 'family',
    title: 'Family',
    titleKey: 'topics.family',
    group: 'basics',
    groupKey: 'groups.basics',
    cards: [
      {
        id: 'f1',
        cantonese: 'fu6 can1',
        english: 'Father',
        zhTW: '父親',
        zhCN: '父亲',
        example: {
          cantonese: 'fu6 can1 zoi6 gung1 zok3.',
          english: 'Father is at work.',
          zhTW: '父親在工作。',
          zhCN: '父亲在工作。'
        }
      },
      {
        id: 'f2',
        cantonese: 'mou5 can1',
        english: 'Mother',
        zhTW: '母親',
        zhCN: '母亲',
        example: {
          cantonese: 'mou5 can1 zing3 zoi6 zou6 faan6.',
          english: 'Mother is cooking.',
          zhTW: '母親正在做飯。',
          zhCN: '母亲正在做饭。'
        }
      },
      {
        id: 'f3',
        cantonese: 'hing1 dai6 zi2 mui2',
        english: 'Sibling',
        zhTW: '兄弟姊妹',
        zhCN: '兄弟姐妹',
        example: {
          cantonese: 'nei5 jau5 gei2 go3 hing1 dai6 zi2 mui2?',
          english: 'How many siblings do you have?',
          zhTW: '你有幾個兄弟姊妹？',
          zhCN: '你有几个兄弟姐妹？'
        }
      },
      {
        id: 'f4',
        cantonese: 'go4 go1',
        english: 'Older Brother',
        zhTW: '哥哥',
        zhCN: '哥哥',
        example: {
          cantonese: 'go4 go1 ziu3 gu3 ngo5.',
          english: 'Older brother takes care of me.',
          zhTW: '哥哥照顧我。',
          zhCN: '哥哥照顾我。'
        }
      },
      {
        id: 'f5',
        cantonese: 'zi2 zi2',
        english: 'Older Sister',
        zhTW: '姊姊',
        zhCN: '姐姐',
        example: {
          cantonese: 'ngo5 dik1 zi2 zi2 han2 sin6 loeng4.',
          english: 'My older sister is kind.',
          zhTW: '我的姊姊很善良。',
          zhCN: '我的姐姐很善良。'
        }
      },
      {
        id: 'f6',
        cantonese: 'zou2 fu6 / ngoi6 zou2 fu6',
        english: 'Grandfather',
        zhTW: '祖父 / 外祖父',
        zhCN: '祖父 / 外祖父',
        example: {
          cantonese: 'ngo5 oi3 ngo5 dik1 zou2 fu6.',
          english: 'I love my grandfather.',
          zhTW: '我愛我的祖父。',
          zhCN: '我爱我的祖父。'
        }
      },
      {
        id: 'f7',
        cantonese: 'zou2 mou5 / ngoi6 zou2 mou5',
        english: 'Grandmother',
        zhTW: '祖母 / 外祖母',
        zhCN: '祖母 / 外祖母',
        example: {
          cantonese: 'naai4 naai2 zing3 zoi6 zou6 mei5 mei6 dik1 sik6 mat6.',
          english: 'Grandma is cooking delicious food.',
          zhTW: '奶奶正在做美味的食物。',
          zhCN: '奶奶正在做美味的食物。'
        }
      },
      {
        id: 'f8',
        cantonese: 'suk1 suk1 / baak3 baak3 / kau5 kau5',
        english: 'Uncle',
        zhTW: '叔叔 / 伯伯 / 舅舅',
        zhCN: '叔叔 / 伯伯 / 舅舅',
        example: {
          cantonese: 'ngo5 dik1 suk1 suk1 zoi6 gwok3 ngoi6.',
          english: 'My uncle is abroad.',
          zhTW: '我的叔叔在國外。',
          zhCN: '我的叔叔在国外。'
        }
      },
      {
        id: 'f9',
        cantonese: 'aa3 ji1 / gu1 gu1 / sam2 sam2',
        english: 'Aunt',
        zhTW: '阿姨 / 姑姑 / 嬸嬸',
        zhCN: '阿姨 / 姑姑 / 婶婶',
        example: {
          cantonese: 'aa3 ji1 kap1 liu5 ngo5 jat1 fan6 lai5 mat6.',
          english: 'Auntie gave me a gift.',
          zhTW: '阿姨給了我一份禮物。',
          zhCN: '阿姨给了我一份礼物。'
        }
      },
      {
        id: 'f10',
        cantonese: 'tong4 biu2 hing1 dai6 zi2 mui2',
        english: 'Cousin',
        zhTW: '堂表兄弟姊妹',
        zhCN: '堂表兄弟姐妹',
        example: {
          cantonese: 'ngo5 zing3 zoi6 wo4 ngo5 dik1 tong4 biu2 hing1 dai6 zi2 mui2 waan2.',
          english: 'I am playing with my cousin.',
          zhTW: '我正在和我的堂表兄弟姊妹玩。',
          zhCN: '我正在和我的堂表兄弟姐妹玩。'
        }
      },
      {
        id: 'f11',
        cantonese: 'haai4 zi2 / ji4 zi2 / neoi5 ji4',
        english: 'Child / Son / Daughter',
        zhTW: '孩子 / 兒子 / 女兒',
        zhCN: '孩子 / 儿子 / 女儿',
        example: {
          cantonese: 'taa1 mun4 dik1 haai4 zi2 han2 gwaai1.',
          english: 'Their child is kind.',
          zhTW: '他們的孩子很乖。',
          zhCN: '他们的孩子很乖。'
        }
      },
      {
        id: 'f12',
        cantonese: 'pui3 ngau5 (zoeng6 fu1 / cai1 zi2)',
        english: 'Spouse (Husband/Wife)',
        zhTW: '配偶 (丈夫/妻子)',
        zhCN: '配偶 (丈夫/妻子)',
        example: {
          cantonese: 'taa1 / taa1 oi3 taa1 / taa1 dik1 pui3 ngau5.',
          english: 'He/She loves his/her spouse.',
          zhTW: '他/她愛他/她的配偶。',
          zhCN: '他/她爱他/她的配偶。'
        }
      },
    ]
  },
  {
    id: 'colors',
    title: 'Colors',
    titleKey: 'topics.colors',
    group: 'basics',
    groupKey: 'groups.basics',
    cards: [
      {
        id: 'col1',
        cantonese: 'hung4 sik1',
        english: 'Red',
        zhTW: '紅色',
        zhCN: '红色',
        example: {
          cantonese: 'hung4 sik1 si6 ngo5 zeoi3 hei2 fun1 dik1 ngaan4 sik1.',
          english: 'Red is my favorite color.',
          zhTW: '紅色是我最喜歡的顏色。',
          zhCN: '红色是我最喜欢的颜色。'
        }
      },
      {
        id: 'col2',
        cantonese: 'laam4 sik1',
        english: 'Blue',
        zhTW: '藍色',
        zhCN: '蓝色',
        example: {
          cantonese: 'tin1 hung1 si6 laam4 sik1 dik1.',
          english: 'The sky is blue.',
          zhTW: '天空是藍色的。',
          zhCN: '天空是蓝色的。'
        }
      },
      {
        id: 'col3',
        cantonese: 'wong4 sik1',
        english: 'Yellow',
        zhTW: '黃色',
        zhCN: '黄色',
        example: {
          cantonese: 'taai3 joeng4 si6 wong4 sik1 dik1.',
          english: 'The sun is yellow.',
          zhTW: '太陽是黃色的。',
          zhCN: '太阳是黄色的。'
        }
      },
      {
        id: 'col4',
        cantonese: 'baak6 sik1',
        english: 'White',
        zhTW: '白色',
        zhCN: '白色',
        example: {
          cantonese: 'taa1 / taa1 dik1 ji1 fuk6 si6 baak6 sik1 dik1.',
          english: 'His/Her clothes are white.',
          zhTW: '他/她的衣服是白色的。',
          zhCN: '他/她的衣服是白色的。'
        }
      },
      {
        id: 'col5',
        cantonese: 'hak1 sik1',
        english: 'Black',
        zhTW: '黑色',
        zhCN: '黑色',
        example: {
          cantonese: 'naa5 zek3 maau1 si6 hak1 sik1 dik1.',
          english: 'The cat is black.',
          zhTW: '那隻貓是黑色的。',
          zhCN: '那只猫是黑色的。'
        }
      },
      {
        id: 'col6',
        cantonese: 'luk6 sik1',
        english: 'Green',
        zhTW: '綠色',
        zhCN: '绿色',
        example: {
          cantonese: 'jip6 zi2 si6 luk6 sik1 dik1.',
          english: 'The leaves are green.',
          zhTW: '葉子是綠色的。',
          zhCN: '叶子是绿色的。'
        }
      },
      {
        id: 'col7',
        cantonese: 'gwat1 sik1',
        english: 'Orange',
        zhTW: '橘色',
        zhCN: '橘色',
        example: {
          cantonese: 'gwat1 zi2 han2 hou2 hek3.',
          english: 'The orange fruit is delicious.',
          zhTW: '橘子很好吃。',
          zhCN: '橘子很好吃。'
        }
      },
      {
        id: 'col8',
        cantonese: 'zi2 sik1',
        english: 'Purple',
        zhTW: '紫色',
        zhCN: '紫色',
        example: {
          cantonese: 'ze5 do2 faa1 si6 zi2 sik1 dik1.',
          english: 'This flower is purple.',
          zhTW: '這朵花是紫色的。',
          zhCN: '这朵花是紫色的。'
        }
      },
      {
        id: 'col9',
        cantonese: 'zung1 sik1',
        english: 'Brown',
        zhTW: '棕色',
        zhCN: '棕色',
        example: {
          cantonese: 'fei1 leot6 ban1 jan4 dik1 pei4 fu1 si6 zung1 sik1 dik1.',
          english: 'Filipinos have brown skin.',
          zhTW: '菲律賓人的皮膚是棕色的。',
          zhCN: '菲律宾人的皮肤是棕色的。'
        }
      },
      {
        id: 'col10',
        cantonese: 'fan2 hung4 sik1',
        english: 'Pink',
        zhTW: '粉紅色',
        zhCN: '粉红色',
        example: {
          cantonese: 'taa1 hei2 fun1 fan2 hung4 sik1.',
          english: 'She likes the color pink.',
          zhTW: '她喜歡粉紅色。',
          zhCN: '她喜欢粉红色。'
        }
      },
      {
        id: 'col11',
        cantonese: 'fui1 sik1',
        english: 'Gray',
        zhTW: '灰色',
        zhCN: '灰色',
        example: {
          cantonese: 'wan4 si6 fui1 sik1 dik1.',
          english: 'The clouds are gray.',
          zhTW: '雲是灰色的。',
          zhCN: '云是灰色的。'
        }
      },
    ]
  },
  {
    id: 'food',
    title: 'Food',
    titleKey: 'topics.food',
    group: 'daily_life',
    groupKey: 'groups.daily_life',
    cards: [
      {
        id: 'fd1',
        cantonese: 'mai5 faan6',
        english: 'Rice',
        zhTW: '米飯',
        zhCN: '米饭',
        example: {
          cantonese: 'ngo5 soeng2 jiu3 mai5 faan6.',
          english: 'I want rice.',
          zhTW: '我想要米飯。',
          zhCN: '我想要米饭。'
        }
      },
      {
        id: 'fd2',
        cantonese: 'seoi2',
        english: 'Water',
        zhTW: '水',
        zhCN: '水',
        example: {
          cantonese: 'hot3 seoi2.',
          english: 'Drink water.',
          zhTW: '喝水。',
          zhCN: '喝水。'
        }
      },
      {
        id: 'fd3',
        cantonese: 'min6 baau1',
        english: 'Bread',
        zhTW: '麵包',
        zhCN: '面包',
        example: {
          cantonese: 'ngo5 maai5 liu5 min6 baau1.',
          english: 'I bought bread.',
          zhTW: '我買了麵包。',
          zhCN: '我买了面包。'
        }
      },
      {
        id: 'fd4',
        cantonese: 'gai1 juk6',
        english: 'Chicken',
        zhTW: '雞肉',
        zhCN: '鸡肉',
        example: {
          cantonese: 'coi3 ngaau4 si6 zaa3 gai1.',
          english: 'Fried chicken is the dish.',
          zhTW: '菜餚是炸雞。',
          zhCN: '菜肴是炸鸡。'
        }
      },
      {
        id: 'fd5',
        cantonese: 'jyu4',
        english: 'Fish',
        zhTW: '魚',
        zhCN: '鱼',
        example: {
          cantonese: 'ze5 jyu4 han2 san1 sin1.',
          english: 'The fish is fresh.',
          zhTW: '這魚很新鮮。',
          zhCN: '这鱼很新鲜。'
        }
      },
    ]
  },
  {
    id: 'pronouns',
    title: 'Pronouns',
    titleKey: 'topics.pronouns',
    group: 'grammar',
    groupKey: 'groups.grammar',
    cards: [
      {
        id: 'pro1',
        cantonese: 'ngo5',
        english: 'I',
        zhTW: '我',
        zhCN: '我',
        example: {
          cantonese: 'ngo5 si6 fei1 leot6 ban1 jan4.',
          english: 'I am Filipino.',
          zhTW: '我是菲律賓人。',
          zhCN: '我是菲律宾人。'
        }
      },
      {
        id: 'pro2',
        cantonese: 'nei5',
        english: 'You',
        zhTW: '你',
        zhCN: '你',
        example: {
          cantonese: 'si6 nei5 maa1?',
          english: 'Is that you?',
          zhTW: '是你嗎？',
          zhCN: '是你吗？'
        }
      },
      {
        id: 'pro3',
        cantonese: 'taa1 / taa1',
        english: 'He / She',
        zhTW: '他 / 她',
        zhCN: '他 / 她',
        example: {
          cantonese: 'taa1 / taa1 si6 ngo5 dik1 pang4 jau5.',
          english: 'He/She is my friend.',
          zhTW: '他/她是我的朋友。',
          zhCN: '他/她是我的朋友。'
        }
      },
      {
        id: 'pro4',
        cantonese: 'ngo5 dik1',
        english: 'My / by Me',
        zhTW: '我的',
        zhCN: '我的',
        example: {
          cantonese: 'ngo5 hei2 fun1 ze5 go3.',
          english: 'I like this (This is liked by me).',
          zhTW: '我喜歡這個。',
          zhCN: '我喜欢这个。'
        }
      },
      {
        id: 'pro5',
        cantonese: 'nei5 dik1',
        english: 'Your / by You',
        zhTW: '你的',
        zhCN: '你的',
        example: {
          cantonese: 'nei5 giu3 sam6 mo1 ming4 zi6?',
          english: 'What is your name?',
          zhTW: '你叫什麼名字？',
          zhCN: '你叫什么名字？'
        }
      },
      {
        id: 'pro6',
        cantonese: 'taa1 dik1 / taa1 dik1',
        english: 'His / Her / by Him',
        zhTW: '他的 / 她的',
        zhCN: '他的 / 她的',
        example: {
          cantonese: 'ze5 si6 taa1 / taa1 hek3 dik1.',
          english: 'This is what he/she ate.',
          zhTW: '这是他/她吃的。',
          zhCN: '这是他/她吃的。'
        }
      },
      {
        id: 'pro7',
        cantonese: 'deoi3 ngo5 loi4 syut3 / kap1 ngo5',
        english: 'To me',
        zhTW: '對我來說 / 給我',
        zhCN: '对我来说 / 给我',
        example: {
          cantonese: 'baa2 taa1 kap1 ngo5.',
          english: 'Give it to me.',
          zhTW: '把它給我。',
          zhCN: '把它给我。'
        }
      },
      {
        id: 'pro8',
        cantonese: 'deoi3 nei5 loi4 syut3 / kap1 nei5',
        english: 'To you',
        zhTW: '對你來說 / 給你',
        zhCN: '对你来说 / 给你',
        example: {
          cantonese: 'ze5 si6 kap1 nei5 dik1.',
          english: 'This is for you.',
          zhTW: '這是給你的。',
          zhCN: '这是给你的。'
        }
      }
    ]
  },
  {
    id: 'pseudo-verbs',
    title: 'Pseudo-Verbs',
    titleKey: 'topics.pseudo-verbs',
    group: 'grammar',
    groupKey: 'groups.grammar',
    cards: [
      {
        id: 'pv1',
        cantonese: 'soeng2 jiu3 / hei2 fun1',
        english: 'Want / Like',
        zhTW: '想要 / 喜歡',
        zhCN: '想要 / 喜欢',
        example: {
          cantonese: 'ngo5 soeng2 jiu3 gaa3 fe1.',
          english: 'I want coffee.',
          zhTW: '我想要咖啡。',
          zhCN: '我想要咖啡。'
        }
      },
      {
        id: 'pv2',
        cantonese: 'bat1 soeng2 jiu3 / bat1 hei2 fun1',
        english: 'Don\'t want',
        zhTW: '不想要 / 不喜歡',
        zhCN: '不想要 / 不喜欢',
        example: {
          cantonese: 'ngo5 bat1 soeng2 jiu3 ze5 go3.',
          english: 'I don\'t want this.',
          zhTW: '我不想要這個。',
          zhCN: '我不想要这个。'
        }
      },
      {
        id: 'pv3',
        cantonese: 'seoi1 jiu3',
        english: 'Need',
        zhTW: '需要',
        zhCN: '需要',
        example: {
          cantonese: 'ngo5 seoi1 jiu3 bong1 zo6.',
          english: 'I need help.',
          zhTW: '我需要幫助。',
          zhCN: '我需要帮助。'
        }
      },
      {
        id: 'pv4',
        cantonese: 'ho2 ji5',
        english: 'Can / Allowed',
        zhTW: '可以',
        zhCN: '可以',
        example: {
          cantonese: 'ho2 ji5 maa1?',
          english: 'Is it allowed?',
          zhTW: '可以嗎？',
          zhCN: '可以吗？'
        }
      }
    ]
  },
  {
    id: 'question-words',
    title: 'Common Question Words',
    titleKey: 'topics.question-words',
    group: 'basics',
    groupKey: 'groups.basics',
    cards: [
      {
        id: 'qw1',
        cantonese: 'sam6 mo1',
        english: 'What',
        zhTW: '什麼',
        zhCN: '什么',
        example: {
          cantonese: 'nei5 soeng2 jiu3 sam6 mo1?',
          english: 'What do you want?',
          zhTW: '你想要什麼？',
          zhCN: '你想要什么？'
        }
      },
      {
        id: 'qw2',
        cantonese: 'seoi4',
        english: 'Who',
        zhTW: '誰',
        zhCN: '谁',
        example: {
          cantonese: 'taa1 / taa1 si6 seoi4?',
          english: 'Who is he/she?',
          zhTW: '他/她是誰？',
          zhCN: '他/她是谁？'
        }
      },
      {
        id: 'qw3',
        cantonese: 'naa5 leoi5',
        english: 'Where',
        zhTW: '哪裡',
        zhCN: '哪里',
        example: {
          cantonese: 'nei5 jiu3 heoi3 naa5 leoi5?',
          english: 'Where are you going?',
          zhTW: '你要去哪裡？',
          zhCN: '你要去哪里？'
        }
      },
      {
        id: 'qw4',
        cantonese: 'sam6 mo1 si4 hau6',
        english: 'When',
        zhTW: '什麼時候',
        zhCN: '什么时候',
        example: {
          cantonese: 'nei5 dik1 saang1 jat6 si6 sam6 mo1 si4 hau6?',
          english: 'When is your birthday?',
          zhTW: '你的生日是什麼時候？',
          zhCN: '你的生日是什么时候？'
        }
      },
      {
        id: 'qw5',
        cantonese: 'zam2 mo1',
        english: 'How',
        zhTW: '怎麼',
        zhCN: '怎么',
        example: {
          cantonese: 'zam2 mo1 heoi3 naa5 leoi5?',
          english: 'How to go there?',
          zhTW: '怎麼去那裡？',
          zhCN: '怎么去那里？'
        }
      },
      {
        id: 'qw6',
        cantonese: 'wai6 sam6 mo1',
        english: 'Why',
        zhTW: '為什麼',
        zhCN: '为什么',
        example: {
          cantonese: 'nei5 wai6 sam6 mo1 naan4 gwo3?',
          english: 'Why are you sad?',
          zhTW: '你為什麼難過？',
          zhCN: '你为什么难过？'
        }
      },
      {
        id: 'qw7',
        cantonese: '... zoi6 naa5 leoi5?',
        english: 'Where is (object/person)?',
        zhTW: '...在哪裡？',
        zhCN: '...在哪里？',
        example: {
          cantonese: 'joek6 si4 zoi6 naa5 leoi5?',
          english: 'Where is the key?',
          zhTW: '鑰匙在哪裡？',
          zhCN: '钥匙在哪里？'
        }
      }
    ]
  },
  {
    id: 'connectors',
    title: 'Connector Particles',
    titleKey: 'topics.connectors',
    group: 'grammar',
    groupKey: 'groups.grammar',
    cards: [
      {
        id: 'con1',
        cantonese: 'daan6 si6',
        english: 'But',
        zhTW: '但是',
        zhCN: '但是',
        example: {
          cantonese: 'ngo5 soeng2, daan6 si6 ngo5 mut6 cin2.',
          english: 'I want to, but I have no money.',
          zhTW: '我想，但是我沒錢。',
          zhCN: '我想，但是我没钱。'
        }
      },
      {
        id: 'con2',
        cantonese: 'jan1 wai6',
        english: 'Because',
        zhTW: '因為',
        zhCN: '因为',
        example: {
          cantonese: 'ngo5 hek3 liu5, jan1 wai6 ngo5 ngo6 liu5.',
          english: 'I ate because I was hungry.',
          zhTW: '我吃了，因為我餓了。',
          zhCN: '我吃了，因为我饿了。'
        }
      },
      {
        id: 'con3',
        cantonese: 'jau4 jyu1',
        english: 'Because of',
        zhTW: '由於',
        zhCN: '由于',
        example: {
          cantonese: 'jan1 wai6 nei5, ngo5 han2 faai3 lok6.',
          english: 'I am happy because of you.',
          zhTW: '因為你，我很快樂。',
          zhCN: '因为你，我很快乐。'
        }
      },
      {
        id: 'con4',
        cantonese: 'jyu4 gwo2',
        english: 'If',
        zhTW: '如果',
        zhCN: '如果',
        example: {
          cantonese: 'jyu4 gwo2 nei5 jiu3 zau2, ngo5 wui5 gan1 nei5 jat1 hei2.',
          english: 'If you leave, I will come with you.',
          zhTW: '如果你要走，我會跟你一起。',
          zhCN: '如果你要走，我会跟你一起。'
        }
      },
      {
        id: 'con5',
        cantonese: 'so2 ji5',
        english: 'That\'s why / So',
        zhTW: '所以',
        zhCN: '所以',
        example: {
          cantonese: 'haa6 jyu5 liu5, so2 ji5 ngo5 mut6 ceot1 mun4.',
          english: 'It was raining, so I didn\'t go out.',
          zhTW: '下雨了，所以我沒出門。',
          zhCN: '下雨了，所以我没出门。'
        }
      },
      {
        id: 'con6',
        cantonese: 'jyun4 loi4',
        english: 'Oh, actually / realization',
        zhTW: '原來',
        zhCN: '原来',
        example: {
          cantonese: 'jyun4 loi4 si6 nei5!',
          english: 'Oh, it\'s you!',
          zhTW: '原來是你！',
          zhCN: '原来是你！'
        }
      }
    ]
  },
  {
    id: 'demonstrative-pronouns',
    title: 'Demonstrative Pronouns',
    titleKey: 'topics.demonstrative-pronouns',
    group: 'grammar',
    groupKey: 'groups.grammar',
    cards: [
      {
        id: 'dem1',
        cantonese: 'ze5 go3 (gan6)',
        english: 'This (near me)',
        zhTW: '這個 (近)',
        zhCN: '这个 (近)',
        example: {
          cantonese: 'ze5 si6 ngo5 dik1 fong4 zi2.',
          english: 'This is my house.',
          zhTW: '這是我的房子。',
          zhCN: '这是我的房子。'
        }
      },
      {
        id: 'dem2',
        cantonese: 'naa5 go3 (zung1)',
        english: 'That (near you)',
        zhTW: '那個 (中)',
        zhCN: '那个 (中)',
        example: {
          cantonese: 'naa5 si6 nei5 dik1 syu1 maa1?',
          english: 'Is that your book?',
          zhTW: '那是你的書嗎？',
          zhCN: '那是你的书吗？'
        }
      },
      {
        id: 'dem3',
        cantonese: 'naa5 go3 (jyun5)',
        english: 'That (far from both)',
        zhTW: '那個 (遠)',
        zhCN: '那个 (远)',
        example: {
          cantonese: 'naa5 si6 saan1.',
          english: 'That is the mountain.',
          zhTW: '那是山。',
          zhCN: '那是山。'
        }
      },
      {
        id: 'dem4',
        cantonese: 'ze2 leoi5 (gan6)',
        english: 'Here (near me)',
        zhTW: '這裡 (近)',
        zhCN: '这里 (近)',
        example: {
          cantonese: 'ngo5 zyu6 zoi6 ze2 leoi5.',
          english: 'I live here.',
          zhTW: '我住在這裡。',
          zhCN: '我住在这里。'
        }
      },
      {
        id: 'dem5',
        cantonese: 'naa5 leoi5 (zung1)',
        english: 'There (near you)',
        zhTW: '那裡 (中)',
        zhCN: '那里 (中)',
        example: {
          cantonese: 'baa2 taa1 fong3 zoi6 naa5 leoi5.',
          english: 'Put it there.',
          zhTW: '把它放在那裡。',
          zhCN: '把它放在那里。'
        }
      },
      {
        id: 'dem6',
        cantonese: 'naa5 leoi5 (jyun5)',
        english: 'Over there (far from both)',
        zhTW: '那裡 (遠)',
        zhCN: '那里 (远)',
        example: {
          cantonese: 'ngo5 mun4 heoi3 naa5 leoi5 baa6.',
          english: 'Let\'s go there.',
          zhTW: '我們去那裡吧。',
          zhCN: '我们去那里吧。'
        }
      }
    ]
  },
  {
    id: 'existence-possession',
    title: 'Existence & Possession',
    titleKey: 'topics.existence-possession',
    group: 'grammar',
    groupKey: 'groups.grammar',
    cards: [
      {
        id: 'ep1',
        cantonese: 'jau5',
        english: 'There is / I have',
        zhTW: '有',
        zhCN: '有',
        example: {
          cantonese: 'jau5 seoi2 maa1?',
          english: 'Is there water?',
          zhTW: '有水嗎？',
          zhCN: '有水吗？'
        }
      },
      {
        id: 'ep2',
        cantonese: 'mut6 jau5',
        english: 'None / I don\'t have',
        zhTW: '沒有',
        zhCN: '没有',
        example: {
          cantonese: 'mut6 jau5 seoi2.',
          english: 'No water.',
          zhTW: '沒有水。',
          zhCN: '没有水。'
        }
      },
      {
        id: 'ep3',
        cantonese: 'ngo5 jau5',
        english: 'I have (it)',
        zhTW: '我有',
        zhCN: '我有',
        example: {
          cantonese: 'ngo5 jau5 cin2.',
          english: 'I have money.',
          zhTW: '我有錢。',
          zhCN: '我有钱。'
        }
      },
      {
        id: 'ep4',
        cantonese: 'ngo5 mut6 jau5',
        english: 'I don\'t have (it)',
        zhTW: '我沒有',
        zhCN: '我没有',
        example: {
          cantonese: 'ngo5 mut6 jau5 si4 gaan3.',
          english: 'I don\'t have time.',
          zhTW: '我沒有時間。',
          zhCN: '我没有时间。'
        }
      }
    ]
  },
  {
    id: 'negation',
    title: 'Negation',
    titleKey: 'topics.negation',
    group: 'grammar',
    groupKey: 'groups.grammar',
    cards: [
      {
        id: 'neg1',
        cantonese: 'bat1 (jing4 jung4 ci4 / dung6 ci4)',
        english: 'Not',
        zhTW: '不 (形容詞/動詞)',
        zhCN: '不 (形容词/动词)',
        example: {
          cantonese: 'bat1 hou2 hek3.',
          english: 'Not delicious.',
          zhTW: '不好吃。',
          zhCN: '不好吃。'
        }
      },
      {
        id: 'neg2',
        cantonese: 'mut6 jau5 / bat1 zoi6',
        english: 'None / Absent',
        zhTW: '沒有 / 不在',
        zhCN: '没有 / 不在',
        example: {
          cantonese: 'maa5 hak1 bat1 zoi6 ze2 leoi5.',
          english: 'Mark is not here.',
          zhTW: '馬克不在這裡。',
          zhCN: '马克不在这里。'
        }
      },
      {
        id: 'neg3',
        cantonese: 'bat1 jiu3 (ming6 ling6)',
        english: 'Don\'t',
        zhTW: '不要 (命令)',
        zhCN: '不要 (命令)',
        example: {
          cantonese: 'bat1 jiu3 caau2.',
          english: 'Don\'t be noisy.',
          zhTW: '不要吵。',
          zhCN: '不要吵。'
        }
      }
    ]
  },
  {
    id: 'enclitic-particles',
    title: 'Enclitic Particles',
    titleKey: 'topics.enclitic-particles',
    group: 'grammar',
    groupKey: 'groups.grammar',
    cards: [
      {
        id: 'enc1',
        cantonese: 'ji5 ging1',
        english: 'Already / Now',
        zhTW: '已經',
        zhCN: '已经',
        example: {
          cantonese: 'ji5 ging1 jyun4 sing4 liu5.',
          english: 'Finished already.',
          zhTW: '已經完成了。',
          zhCN: '已经完成了。'
        }
      },
      {
        id: 'enc2',
        cantonese: 'waan4 / zoi3',
        english: 'Still / Yet / More',
        zhTW: '還 / 再',
        zhCN: '还 / 再',
        example: {
          cantonese: 'zoi3 loi4 jat1 go3.',
          english: 'One more.',
          zhTW: '再來一個。',
          zhCN: '再来一个。'
        }
      },
      {
        id: 'enc3',
        cantonese: 'zi2 si6 / zi2 jau5',
        english: 'Just / Only',
        zhTW: '只是 / 只有',
        zhCN: '只是 / 只有',
        example: {
          cantonese: 'zi2 jau5 ngo5.',
          english: 'Just me.',
          zhTW: '只有我。',
          zhCN: '只有我。'
        }
      },
      {
        id: 'enc4',
        cantonese: 'jaa5',
        english: 'Also / Too',
        zhTW: '也',
        zhCN: '也',
        example: {
          cantonese: 'ngo5 jaa5 si6.',
          english: 'Me too.',
          zhTW: '我也是。',
          zhCN: '我也是。'
        }
      },
      {
        id: 'enc5',
        cantonese: 'ne1 / ceng2',
        english: 'On the other hand / Please',
        zhTW: '呢 / 請',
        zhCN: '呢 / 请',
        example: {
          cantonese: 'wun6 nei5 liu5 / nei5 ne1?',
          english: 'Your turn / How about you?',
          zhTW: '換你了 / 你呢？',
          zhCN: '换你了 / 你呢？'
        }
      }
    ]
  },
  {
    id: 'respect-markers',
    title: 'Respect Markers',
    titleKey: 'topics.respect-markers',
    group: 'grammar',
    groupKey: 'groups.grammar',
    cards: [
      {
        id: 'rm1',
        cantonese: 'nei5 (ging3 jyu5)',
        english: 'Sir / Ma\'am (Respect particle)',
        zhTW: '您 (敬語)',
        zhCN: '您 (敬语)',
        example: {
          cantonese: 'ze6 ze6 nei5.',
          english: 'Thank you (polite).',
          zhTW: '謝謝您。',
          zhCN: '谢谢您。'
        }
      },
      {
        id: 'rm2',
        cantonese: 'si6 (ging3 jyu5)',
        english: 'Yes (Respectful)',
        zhTW: '是 (敬語)',
        zhCN: '是 (敬语)',
        example: {
          cantonese: 'si6 dik1, maa4 maa1.',
          english: 'Yes, mom.',
          zhTW: '是的，媽媽。',
          zhCN: '是的，妈妈。'
        }
      },
      {
        id: 'rm3',
        cantonese: 'bat1 (ging3 jyu5)',
        english: 'No (Respectful)',
        zhTW: '不 (敬語)',
        zhCN: '不 (敬语)',
        example: {
          cantonese: 'ngo5 mut6 jau5 hek3 (lai5 maau6).',
          english: 'I did not eat (polite).',
          zhTW: '我沒有吃 (禮貌)。',
          zhCN: '我没有吃 (礼貌)。'
        }
      }
    ]
  },
  {
    id: 'linkers',
    title: 'Linkers (Ligatures)',
    titleKey: 'topics.linkers',
    group: 'grammar',
    groupKey: 'groups.grammar',
    cards: [
      {
        id: 'lnk1',
        cantonese: 'lin4 zip3 ci4 (mou5 jam1 hau6)',
        english: 'Linker (after vowel)',
        zhTW: '連接詞 (母音後)',
        zhCN: '连接词 (元音后)',
        example: {
          cantonese: 'san1 nin4.',
          english: 'New year.',
          zhTW: '新年。',
          zhCN: '新年。'
        }
      },
      {
        id: 'lnk2',
        cantonese: 'lin4 zip3 ci4 (Wifi hau6)',
        english: 'Linker (after n)',
        zhTW: '連接詞 (n後)',
        zhCN: '连接词 (n后)',
        example: {
          cantonese: 'daai6 jyu5.',
          english: 'Strong rain.',
          zhTW: '大雨。',
          zhCN: '大雨。'
        }
      },
      {
        id: 'lnk3',
        cantonese: 'lin4 zip3 ci4 (zi2 jam1 hau6)',
        english: 'Linker (after consonant)',
        zhTW: '連接詞 (子音後)',
        zhCN: '连接词 (辅音后)',
        example: {
          cantonese: 'hou2 hek3 dik1 sik6 mat6.',
          english: 'Delicious food.',
          zhTW: '好吃的食物。',
          zhCN: '好吃的食物。'
        }
      }
    ]
  },
  {
    id: 'locators',
    title: 'Specific Location Markers',
    titleKey: 'topics.locators',
    group: 'grammar',
    groupKey: 'groups.grammar',
    cards: [
      {
        id: 'loc1',
        cantonese: 'zoi6',
        english: 'Located at/on/in',
        zhTW: '在',
        zhCN: '在',
        example: {
          cantonese: 'syu1 zoi6 coek3 zi2 soeng6.',
          english: 'The book is on the table.',
          zhTW: '書在桌子上。',
          zhCN: '书在桌子上。'
        }
      },
      {
        id: 'loc2',
        cantonese: 'zoi6 naa5 leoi5?',
        english: 'Where is (it)?',
        zhTW: '在哪裡？',
        zhCN: '在哪里？',
        example: {
          cantonese: 'joek6 si4 zoi6 naa5 leoi5?',
          english: 'Where is the key?',
          zhTW: '鑰匙在哪裡？',
          zhCN: '钥匙在哪里？'
        }
      },
      {
        id: 'loc3',
        cantonese: 'zoi6 ngo5 ze2 leoi5',
        english: 'It is with me',
        zhTW: '在我這裡',
        zhCN: '在我这里',
        example: {
          cantonese: 'cin2 zoi6 ngo5 ze2 leoi5.',
          english: 'The money is with me.',
          zhTW: '錢在我這裡。',
          zhCN: '钱在我这里。'
        }
      },
      {
        id: 'loc4',
        cantonese: 'zoi6 ngoi6 min6',
        english: 'It is outside',
        zhTW: '在外面',
        zhCN: '在外面',
        example: {
          cantonese: 'baa4 baa1 zoi6 ngoi6 min6.',
          english: 'Father is outside.',
          zhTW: '爸爸在外面。',
          zhCN: '爸爸在外面。'
        }
      },
      {
        id: 'loc5',
        cantonese: 'zoi6 leoi5 min6',
        english: 'It is inside',
        zhTW: '在裡面',
        zhCN: '在里面',
        example: {
          cantonese: 'zoi6 fong4 zi2 leoi5.',
          english: 'Inside the house.',
          zhTW: '在房子裡。',
          zhCN: '在房子里。'
        }
      }
    ]
  },
  {
    id: 'numbers-spanish',
    title: 'Numbers (Spanish)',
    titleKey: 'topics.numbers-spanish',
    group: 'basics',
    groupKey: 'groups.basics',
    cards: [
      {
        id: 'ns1',
        cantonese: 'jat1 (si4 gaan3 / gam1 cin4)',
        english: 'One (Time/Money)',
        zhTW: '一 (時間/金錢)',
        zhCN: '一 (时间/金钱)',
        example: {
          cantonese: 'jat1 dim2 liu5.',
          english: 'It\'s one o\'clock.',
          zhTW: '一點了。',
          zhCN: '一点了。'
        }
      },
      {
        id: 'ns2',
        cantonese: 'ji6 (si4 gaan3 / gam1 cin4)',
        english: 'Two (Time/Money)',
        zhTW: '二 (時間/金錢)',
        zhCN: '二 (时间/金钱)',
        example: {
          cantonese: 'zi2 jiu3 loeng5 pei1 sok3.',
          english: 'Only two pesos.',
          zhTW: '只要兩披索。',
          zhCN: '只要两披索。'
        }
      },
      {
        id: 'ns3',
        cantonese: 'saam1 (si4 gaan3 / gam1 cin4)',
        english: 'Three (Time/Money)',
        zhTW: '三 (時間/金錢)',
        zhCN: '三 (时间/金钱)',
        example: {
          cantonese: 'haa6 ng5 saam1 dim2.',
          english: 'Three in the afternoon.',
          zhTW: '下午三點。',
          zhCN: '下午三点。'
        }
      },
      {
        id: 'ns4',
        cantonese: 'sap6 ji6 dim2',
        english: 'Twelve o\'clock',
        zhTW: '十二點',
        zhCN: '十二点',
        example: {
          cantonese: 'ngo5 mun4 sap6 ji6 dim2 jaak3 faan6 baa6.',
          english: 'Let\'s eat at twelve.',
          zhTW: '我們十二點吃飯吧。',
          zhCN: '我们十二点吃饭吧。'
        }
      },
      {
        id: 'ns5',
        cantonese: 'ji6 sap6',
        english: 'Twenty',
        zhTW: '二十',
        zhCN: '二十',
        example: {
          cantonese: 'ze5 si6 ji6 sap6 pei1 sok3.',
          english: 'This is twenty pesos.',
          zhTW: '這是二十披索。',
          zhCN: '这是二十披索。'
        }
      },
      {
        id: 'ns6',
        cantonese: 'ng5 sap6',
        english: 'Fifty',
        zhTW: '五十',
        zhCN: '五十',
        example: {
          cantonese: 'taa1 / taa1 ji5 ging1 ng5 sap6 seoi3 liu5.',
          english: 'He/She is fifty years old.',
          zhTW: '他/她已經五十歲了。',
          zhCN: '他/她已经五十岁了。'
        }
      }
    ]
  },
  {
    id: 'social-scripts',
    title: 'Social Scripts',
    titleKey: 'topics.social-scripts',
    group: 'social',
    groupKey: 'groups.social',
    cards: [
      {
        id: 'ss1',
        cantonese: 'Nei hou?',
        english: 'How are you?',
        zhTW: '你好嗎？',
        zhCN: '你好吗？',
        example: {
          cantonese: 'nei5 hou2 maa1, pang4 jau5?',
          english: 'How are you, friend?',
          zhTW: '你好嗎，朋友？',
          zhCN: '你好吗，朋友？'
        }
      },
      {
        id: 'ss2',
        cantonese: 'ngo5 han2 hou2 / mut6 si6',
        english: 'I\'m okay / It\'s fine',
        zhTW: '我很好 / 沒事',
        zhCN: '我很好 / 没事',
        example: {
          cantonese: 'ngo5 han2 hou2.',
          english: 'I\'m okay.',
          zhTW: '我很好。',
          zhCN: '我很好。'
        }
      },
      {
        id: 'ss3',
        cantonese: 'bou2 zung6 / zoi3 gin3',
        english: 'Take care / Goodbye',
        zhTW: '保重 / 再見',
        zhCN: '保重 / 再见',
        example: {
          cantonese: 'ceng2 bou2 zung6.',
          english: 'Take care always.',
          zhTW: '請保重。',
          zhCN: '请保重。'
        }
      },
      {
        id: 'ss4',
        cantonese: 'hou2 dik1 / gai3 zuk6 / zoi3 gin3',
        english: 'Okay / Go ahead / Bye',
        zhTW: '好的 / 繼續 / 再見',
        zhCN: '好的 / 继续 / 再见',
        example: {
          cantonese: 'hou2 dik1, ngo5 jiu3 zau2 liu5.',
          english: 'Okay, I\'m leaving now.',
          zhTW: '好的，我要走了。',
          zhCN: '好的，我要走了。'
        }
      },
      {
        id: 'ss5',
        cantonese: 'pou5 hip3',
        english: 'Sorry',
        zhTW: '抱歉',
        zhCN: '抱歉',
        example: {
          cantonese: 'pou5 hip3 daa2 jiu2 liu5.',
          english: 'Sorry for the disturbance.',
          zhTW: '抱歉打擾了。',
          zhCN: '抱歉打扰了。'
        }
      }
    ]
  },
  {
    id: 'transportation',
    title: 'Transportation (Commuting)',
    titleKey: 'topics.transportation',
    group: 'daily_life',
    groupKey: 'groups.daily_life',
    cards: [
      {
        id: 'trans1',
        cantonese: 'ze5 si6 ce1 fai3',
        english: 'Here is my payment',
        zhTW: '這是車費',
        zhCN: '这是车费',
        example: {
          cantonese: 'ze5 si6 zou2 soeng6 dik1 ce1 fai3.',
          english: 'Here is my payment (morning).',
          zhTW: '這是早上的車費。',
          zhCN: '这是早上的车费。'
        }
      },
      {
        id: 'trans2',
        cantonese: 'ting4 ce1',
        english: 'Stop / Pull over',
        zhTW: '停車',
        zhCN: '停车',
        example: {
          cantonese: 'ceng2 zoi6 lou6 bin1 ting4.',
          english: 'Please stop at the side.',
          zhTW: '請在路邊停。',
          zhCN: '请在路边停。'
        }
      },
      {
        id: 'trans3',
        cantonese: 'zau6 zoi6 pong4 bin1',
        english: 'Just at the side',
        zhTW: '就在旁邊',
        zhCN: '就在旁边',
        example: {
          cantonese: 'ngo5 zau6 zoi6 pong4 bin1 haa6 ce1.',
          english: 'I will get off just at the side.',
          zhTW: '我就在旁邊下車。',
          zhCN: '我就在旁边下车。'
        }
      },
      {
        id: 'trans4',
        cantonese: 'zaau2 ling4',
        english: 'Change / Coins back',
        zhTW: '找零',
        zhCN: '找零',
        example: {
          cantonese: 'ceng2 dai6 jat1 haa5 zaau2 ling4.',
          english: 'Please pass the change.',
          zhTW: '請遞一下找零。',
          zhCN: '请递一下找零。'
        }
      },
      {
        id: 'trans5',
        cantonese: 'zo2',
        english: 'Left',
        zhTW: '左',
        zhCN: '左',
        example: {
          cantonese: 'zoi6 lou6 hau2 zo2 zyun2.',
          english: 'Turn left at the corner.',
          zhTW: '在路口左轉。',
          zhCN: '在路口左转。'
        }
      },
      {
        id: 'trans6',
        cantonese: 'jau6',
        english: 'Right',
        zhTW: '右',
        zhCN: '右',
        example: {
          cantonese: 'jin4 hau6 jau6 zyun2.',
          english: 'Turn right afterwards.',
          zhTW: '然後右轉。',
          zhCN: '然后右转。'
        }
      },
      {
        id: 'trans7',
        cantonese: 'zik6 zau2',
        english: 'Straight',
        zhTW: '直走',
        zhCN: '直走',
        example: {
          cantonese: 'ze5 tiu4 lou6 si6 zik6 dik1.',
          english: 'The road is just straight.',
          zhTW: '這條路是直的。',
          zhCN: '这条路是直的。'
        }
      }
    ]
  },
  {
    id: 'time-scheduling',
    title: 'Time & Scheduling',
    titleKey: 'topics.time-scheduling',
    group: 'daily_life',
    groupKey: 'groups.daily_life',
    cards: [
      {
        id: 'time1',
        cantonese: 'jin6 zoi6 / gam1 tin1',
        english: 'Now / Today',
        zhTW: '現在 / 今天',
        zhCN: '现在 / 今天',
        example: {
          cantonese: 'ngo5 jin6 zoi6 jiu3 zau2 liu5.',
          english: 'I am leaving now.',
          zhTW: '我現在要走了。',
          zhCN: '我现在要走了。'
        }
      },
      {
        id: 'time2',
        cantonese: 'ming4 tin1',
        english: 'Tomorrow',
        zhTW: '明天',
        zhCN: '明天',
        example: {
          cantonese: 'ming4 tin1 zoi3 syut3 baa6.',
          english: 'Let\'s just do it tomorrow.',
          zhTW: '明天再說吧。',
          zhCN: '明天再说吧。'
        }
      },
      {
        id: 'time3',
        cantonese: 'zok3 tin1',
        english: 'Yesterday',
        zhTW: '昨天',
        zhCN: '昨天',
        example: {
          cantonese: 'taa1 / taa1 zok3 tin1 dou3 liu5.',
          english: 'He/She arrived yesterday.',
          zhTW: '他/她昨天到了。',
          zhCN: '他/她昨天到了。'
        }
      },
      {
        id: 'time4',
        cantonese: 'saau2 hau6',
        english: 'Later',
        zhTW: '稍後',
        zhCN: '稍后',
        example: {
          cantonese: 'ngo5 maan5 dim2 zoi3 hek3.',
          english: 'I will eat later.',
          zhTW: '我晚點再吃。',
          zhCN: '我晚点再吃。'
        }
      },
      {
        id: 'time5',
        cantonese: 'gong1 coi4',
        english: 'Earlier',
        zhTW: '剛才',
        zhCN: '刚才',
        example: {
          cantonese: 'ngo5 gong1 coi4 hon3 dou3 taa1 / taa1 liu5.',
          english: 'I saw him/her earlier.',
          zhTW: '我剛才看到他/她了。',
          zhCN: '我刚才看到他/她了。'
        }
      },
      {
        id: 'time6',
        cantonese: 'laap6 hak1',
        english: 'Immediately',
        zhTW: '立刻',
        zhCN: '立刻',
        example: {
          cantonese: 'laap6 hak1 daa2 din6 waa2.',
          english: 'Call immediately.',
          zhTW: '立刻打電話。',
          zhCN: '立刻打电话。'
        }
      }
    ]
  },
  {
    id: 'common-adjectives',
    title: 'Common Adjectives (Opposites)',
    titleKey: 'topics.common-adjectives',
    group: 'daily_life',
    groupKey: 'groups.daily_life',
    cards: [
      {
        id: 'adj1',
        cantonese: 'daai6',
        english: 'Big',
        zhTW: '大',
        zhCN: '大',
        example: {
          cantonese: 'fong4 zi2 han2 daai6.',
          english: 'The house is big.',
          zhTW: '房子很大。',
          zhCN: '房子很大。'
        }
      },
      {
        id: 'adj2',
        cantonese: 'siu2',
        english: 'Small',
        zhTW: '小',
        zhCN: '小',
        example: {
          cantonese: 'naa5 zek3 gau2 han2 siu2.',
          english: 'The dog is small.',
          zhTW: '那隻狗很小。',
          zhCN: '那只狗很小。'
        }
      },
      {
        id: 'adj3',
        cantonese: 'jit6',
        english: 'Hot',
        zhTW: '熱',
        zhCN: '热',
        example: {
          cantonese: 'gaa3 fe1 han2 jit6.',
          english: 'The coffee is hot.',
          zhTW: '咖啡很熱。',
          zhCN: '咖啡很热。'
        }
      },
      {
        id: 'adj4',
        cantonese: 'laang5',
        english: 'Cold',
        zhTW: '冷',
        zhCN: '冷',
        example: {
          cantonese: 'tin1 hei3 han2 laang5.',
          english: 'The weather is cold.',
          zhTW: '天氣很冷。',
          zhCN: '天气很冷。'
        }
      },
      {
        id: 'adj5',
        cantonese: 'pin4 ji2',
        english: 'Cheap',
        zhTW: '便宜',
        zhCN: '便宜',
        example: {
          cantonese: 'ze2 leoi5 dik1 dung1 sai1 han2 pin4 ji2.',
          english: 'Goods are cheap here.',
          zhTW: '這裡的東西很便宜。',
          zhCN: '这里的东西很便宜。'
        }
      },
      {
        id: 'adj6',
        cantonese: 'gwai3',
        english: 'Expensive',
        zhTW: '貴',
        zhCN: '贵',
        example: {
          cantonese: 'ze5 loeng6 ce1 han2 gwai3.',
          english: 'The car is expensive.',
          zhTW: '這輛車很貴。',
          zhCN: '这辆车很贵。'
        }
      },
      {
        id: 'adj7',
        cantonese: 'hou2 hek3',
        english: 'Delicious',
        zhTW: '好吃',
        zhCN: '好吃',
        example: {
          cantonese: 'nei5 zou6 dik1 coi3 han2 hou2 hek3.',
          english: 'Your cooking is delicious.',
          zhTW: '你做的菜很好吃。',
          zhCN: '你做的菜很好吃。'
        }
      },
      {
        id: 'adj8',
        cantonese: 'bat1 hou2 hek3',
        english: 'Not delicious',
        zhTW: '不好吃',
        zhCN: '不好吃',
        example: {
          cantonese: 'ze5 dou6 coi3 bat1 hou2 hek3.',
          english: 'The dish is not delicious.',
          zhTW: '這道菜不好吃。',
          zhCN: '这道菜不好吃。'
        }
      },
      {
        id: 'adj9',
        cantonese: 'leoi6',
        english: 'Tired',
        zhTW: '累',
        zhCN: '累',
        example: {
          cantonese: 'ngo5 haa6 baan1 hau6 han2 leoi6.',
          english: 'I am tired from work.',
          zhTW: '我下班後很累。',
          zhCN: '我下班后很累。'
        }
      }
    ]
  },
  {
    id: 'money-bargaining',
    title: 'Money & Bargaining',
    titleKey: 'topics.money-bargaining',
    group: 'daily_life',
    groupKey: 'groups.daily_life',
    cards: [
      {
        id: 'mon1',
        cantonese: 'do1 siu2 cin2?',
        english: 'How much?',
        zhTW: '多少錢？',
        zhCN: '多少钱？',
        example: {
          cantonese: 'ze5 go3 do1 siu2 cin2?',
          english: 'How much is this?',
          zhTW: '這個多少錢？',
          zhCN: '这个多少钱？'
        }
      },
      {
        id: 'mon2',
        cantonese: 'zit3 kau3 / saat3 gaa3',
        english: 'Discount / Haggle',
        zhTW: '折扣 / 殺價',
        zhCN: '折扣 / 杀价',
        example: {
          cantonese: 'mut6 jau5 zit3 kau3 maa1?',
          english: 'No discount?',
          zhTW: '沒有折扣嗎？',
          zhCN: '没有折扣吗？'
        }
      },
      {
        id: 'mon3',
        cantonese: 'gwai3',
        english: 'Expensive',
        zhTW: '貴',
        zhCN: '贵',
        example: {
          cantonese: 'taai3 gwai3 liu5.',
          english: 'Too expensive.',
          zhTW: '太貴了。',
          zhCN: '太贵了。'
        }
      },
      {
        id: 'mon4',
        cantonese: 'pin4 ji2',
        english: 'Cheap',
        zhTW: '便宜',
        zhCN: '便宜',
        example: {
          cantonese: 'naa5 leoi5 han2 pin4 ji2.',
          english: 'It is cheap there.',
          zhTW: '那裡很便宜。',
          zhCN: '那里很便宜。'
        }
      },
      {
        id: 'mon5',
        cantonese: 'ling4 cin4',
        english: 'Loose change / Coins',
        zhTW: '零錢',
        zhCN: '零钱',
        example: {
          cantonese: 'ngo5 mut6 jau5 ling4 cin4.',
          english: 'I don\'t have loose change.',
          zhTW: '我沒有零錢。',
          zhCN: '我没有零钱。'
        }
      },
      {
        id: 'mon6',
        cantonese: 'jin6 gam1 / din6 zi2 cin4 baau1',
        english: 'Cash / Digital Wallet',
        zhTW: '現金 / 電子錢包',
        zhCN: '现金 / 电子钱包',
        example: {
          cantonese: 'ho2 ji5 jung6 G-Cash maa1?',
          english: 'Is G-Cash accepted?',
          zhTW: '可以用 G-Cash 嗎？',
          zhCN: '可以用 G-Cash 吗？'
        }
      }
    ]
  },
  {
    id: 'ordering-dining',
    title: 'Ordering & Dining',
    titleKey: 'topics.ordering-dining',
    group: 'daily_life',
    groupKey: 'groups.daily_life',
    cards: [
      {
        id: 'din1',
        cantonese: 'ceng2 kap1 ngo5',
        english: 'Please give me / Can I have',
        zhTW: '請給我',
        zhCN: '请给我',
        example: {
          cantonese: 'ceng2 kap1 ngo5 seoi2.',
          english: 'Water please.',
          zhTW: '請給我水。',
          zhCN: '请给我水。'
        }
      },
      {
        id: 'din2',
        cantonese: 'zoi3 loi4 jat1 go3',
        english: 'One more',
        zhTW: '再來一個',
        zhCN: '再来一个',
        example: {
          cantonese: 'ceng2 zoi3 loi4 jat1 fan6 faan6.',
          english: 'One more rice please.',
          zhTW: '請再來一份飯。',
          zhCN: '请再来一份饭。'
        }
      },
      {
        id: 'din3',
        cantonese: 'baau2',
        english: 'Full',
        zhTW: '飽',
        zhCN: '饱',
        example: {
          cantonese: 'ngo5 ji5 ging1 baau2 liu5.',
          english: 'I am full already.',
          zhTW: '我已經飽了。',
          zhCN: '我已经饱了。'
        }
      },
      {
        id: 'din4',
        cantonese: 'ngo6',
        english: 'Hungry',
        zhTW: '餓',
        zhCN: '饿',
        example: {
          cantonese: 'ngo5 ji5 ging1 ngo6 liu5.',
          english: 'I am hungry already.',
          zhTW: '我已經餓了。',
          zhCN: '我已经饿了。'
        }
      },
      {
        id: 'din5',
        cantonese: 'maai5 daan1',
        english: 'Can I have the check?',
        zhTW: '買單',
        zhCN: '买单',
        example: {
          cantonese: 'ceng2 maai5 daan1.',
          english: 'Check please.',
          zhTW: '請買單。',
          zhCN: '请买单。'
        }
      },
      {
        id: 'din6',
        cantonese: 'ngoi6 daai3 / noi6 jung6',
        english: 'To go / Eat here',
        zhTW: '外帶 / 內用',
        zhCN: '外带 / 内用',
        example: {
          cantonese: 'ceng2 ngoi6 daai3.',
          english: 'To go please.',
          zhTW: '請外帶。',
          zhCN: '请外带。'
        }
      }
    ]
  },
  {
    id: 'health-emergencies',
    title: 'Health & Emergencies',
    titleKey: 'topics.health-emergencies',
    group: 'daily_life',
    groupKey: 'groups.daily_life',
    cards: [
      {
        id: 'hlt1',
        cantonese: 'bong1 mong4 / gau3 meng6',
        english: 'Help',
        zhTW: '幫忙 / 救命',
        zhCN: '帮忙 / 救命',
        example: {
          cantonese: 'gau3 meng6! bong1 bong1 ngo5.',
          english: 'Help! Help me.',
          zhTW: '救命！幫幫我。',
          zhCN: '救命！帮帮我。'
        }
      },
      {
        id: 'hlt2',
        cantonese: 'tung3',
        english: 'Painful',
        zhTW: '痛',
        zhCN: '痛',
        example: {
          cantonese: 'ngo5 tau4 tung3.',
          english: 'My head hurts.',
          zhTW: '我頭痛。',
          zhCN: '我头痛。'
        }
      },
      {
        id: 'hlt3',
        cantonese: 'joek6',
        english: 'Medicine',
        zhTW: '藥',
        zhCN: '药',
        example: {
          cantonese: 'ngo5 seoi1 jiu3 joek6.',
          english: 'I need medicine.',
          zhTW: '我需要藥。',
          zhCN: '我需要药。'
        }
      },
      {
        id: 'hlt4',
        cantonese: 'tau4',
        english: 'Head',
        zhTW: '頭',
        zhCN: '头',
        example: {
          cantonese: 'tau4 tung3.',
          english: 'Head is painful.',
          zhTW: '頭痛。',
          zhCN: '头痛。'
        }
      },
      {
        id: 'hlt5',
        cantonese: 'tou5 zi2',
        english: 'Stomach',
        zhTW: '肚子',
        zhCN: '肚子',
        example: {
          cantonese: 'ngo5 tou5 zi2 tung3.',
          english: 'My stomach hurts.',
          zhTW: '我肚子痛。',
          zhCN: '我肚子痛。'
        }
      },
      {
        id: 'hlt6',
        cantonese: 'faat3 siu1',
        english: 'Fever',
        zhTW: '發燒',
        zhCN: '发烧',
        example: {
          cantonese: 'haai4 zi2 faat3 siu1 liu5.',
          english: 'The child has a fever.',
          zhTW: '孩子發燒了。',
          zhCN: '孩子发烧了。'
        }
      },
      {
        id: 'hlt7',
        cantonese: 'ji1 jyun2',
        english: 'Hospital',
        zhTW: '醫院',
        zhCN: '医院',
        example: {
          cantonese: 'sung3 dou3 ji1 jyun2.',
          english: 'Bring to the hospital.',
          zhTW: '送到醫院。',
          zhCN: '送到医院。'
        }
      }
    ]
  },
  {
    id: 'family-social',
    title: 'Family & Introductions',
    titleKey: 'topics.family-social',
    group: 'social',
    groupKey: 'groups.social',
    cards: [
      {
        id: 'fam1',
        cantonese: 'nei5 gei2 seoi3 liu5?',
        english: 'How old are you?',
        zhTW: '你幾歲了？',
        zhCN: '你几岁了？',
        example: {
          cantonese: 'nei5 jin6 zoi6 gei2 seoi3 liu5?',
          english: 'How old are you now?',
          zhTW: '你現在幾歲了？',
          zhCN: '你现在几岁了？'
        }
      },
      {
        id: 'fam2',
        cantonese: 'daan1 san1 naam4 zi2 / daan1 san1 neoi5 zi2',
        english: 'Single Man / Single Woman',
        zhTW: '單身男子 / 單身女子',
        zhCN: '单身男子 / 单身女子',
        example: {
          cantonese: 'taa1 waan4 si6 daan1 san1.',
          english: 'She is still single.',
          zhTW: '她還是單身。',
          zhCN: '她还是单身。'
        }
      },
      {
        id: 'fam3',
        cantonese: 'ji5 fan1',
        english: 'Married / Have a spouse',
        zhTW: '已婚',
        zhCN: '已婚',
        example: {
          cantonese: 'ngo5 ji5 ging1 git3 fan1 liu5.',
          english: 'I am already married.',
          zhTW: '我已經結婚了。',
          zhCN: '我已经结婚了。'
        }
      },
      {
        id: 'fam4',
        cantonese: 'hing1 dai6 zi2 mui2',
        english: 'Sibling',
        zhTW: '兄弟姊妹',
        zhCN: '兄弟姐妹',
        example: {
          cantonese: 'nei5 jau5 gei2 go3 hing1 dai6 zi2 mui2?',
          english: 'How many siblings do you have?',
          zhTW: '你有幾個兄弟姊妹？',
          zhCN: '你有几个兄弟姐妹？'
        }
      },
      {
        id: 'fam5',
        cantonese: 'haai4 zi2',
        english: 'Child',
        zhTW: '孩子',
        zhCN: '孩子',
        example: {
          cantonese: 'ngo5 oi3 ngo5 dik1 haai4 zi2.',
          english: 'I love my child.',
          zhTW: '我愛我的孩子。',
          zhCN: '我爱我的孩子。'
        }
      },
      {
        id: 'fam6',
        cantonese: 'nei5 si6 naa5 leoi5 jan4?',
        english: 'Where are you from?',
        zhTW: '你是哪裡人？',
        zhCN: '你是哪里人？',
        example: {
          cantonese: 'nei5 zoi6 fei1 leot6 ban1 naa5 leoi5?',
          english: 'Where are you from in the Hong Kong?',
          zhTW: '你在菲律賓哪裡？',
          zhCN: '你在菲律宾哪里？'
        }
      }
    ]
  },
  {
    id: 'housing-utilities',
    title: 'Housing & Utilities',
    titleKey: 'topics.housing-utilities',
    group: 'daily_life',
    groupKey: 'groups.daily_life',
    cards: [
      {
        id: 'house1',
        cantonese: 'waai6 liu5',
        english: 'Broken',
        zhTW: '壞了',
        zhCN: '坏了',
        example: {
          cantonese: 'laang5 hei3 waai6 liu5.',
          english: 'The aircon is broken.',
          zhTW: '冷氣壞了。',
          zhCN: '冷气坏了。'
        }
      },
      {
        id: 'house2',
        cantonese: 'hoi1',
        english: 'Open / On',
        zhTW: '開',
        zhCN: '开',
        example: {
          cantonese: 'dang1 hoi1 zoek6.',
          english: 'The light is on.',
          zhTW: '燈開著。',
          zhCN: '灯开着。'
        }
      },
      {
        id: 'house3',
        cantonese: 'gwaan1',
        english: 'Closed / Off',
        zhTW: '關',
        zhCN: '关',
        example: {
          cantonese: 'mun4 gwaan1 zoek6.',
          english: 'The door is closed.',
          zhTW: '門關著。',
          zhCN: '门关着。'
        }
      },
      {
        id: 'house4',
        cantonese: 'dang1',
        english: 'Light',
        zhTW: '燈',
        zhCN: '灯',
        example: {
          cantonese: 'ceng2 hoi1 dang1.',
          english: 'Please turn on the light.',
          zhTW: '請開燈。',
          zhCN: '请开灯。'
        }
      },
      {
        id: 'house5',
        cantonese: 'seoi2',
        english: 'Water / Tap',
        zhTW: '水',
        zhCN: '水',
        example: {
          cantonese: 'seoi2 lung4 tau4 mei6 seoi2.',
          english: 'No water from the tap.',
          zhTW: '水龍頭沒水。',
          zhCN: '水龙头没水。'
        }
      },
      {
        id: 'house6',
        cantonese: 'din6',
        english: 'Electricity / Power',
        zhTW: '電',
        zhCN: '电',
        example: {
          cantonese: 'jin6 zoi6 ting4 din6.',
          english: 'No electricity now (Brownout).',
          zhTW: '現在停電。',
          zhCN: '现在停电。'
        }
      }
    ]
  },
  {
    id: 'hygiene-comfort',
    title: 'Hygiene & Comfort',
    titleKey: 'topics.hygiene-comfort',
    group: 'daily_life',
    groupKey: 'groups.daily_life',
    cards: [
      {
        id: 'hyg1',
        cantonese: 'ci3 so2 zoi6 naa5 leoi5?',
        english: 'Where is the bathroom?',
        zhTW: '廁所在哪裡？',
        zhCN: '厕所在哪里？',
        example: {
          cantonese: 'bat1 hou2 ji3 si1, ceng2 man6 ci3 so2 zoi6 naa5 leoi5?',
          english: 'Excuse me, where is the bathroom?',
          zhTW: '不好意思，請問廁所在哪裡？',
          zhCN: '不好意思，请问厕所在哪里？'
        }
      },
      {
        id: 'hyg2',
        cantonese: 'jau5 wai6 sang1 zi2 maa1?',
        english: 'Is there toilet paper?',
        zhTW: '有衛生紙嗎？',
        zhCN: '有卫生纸吗？',
        example: {
          cantonese: 'leoi5 min6 jau5 wai6 sang1 zi2 maa1?',
          english: 'Is there toilet paper inside?',
          zhTW: '裡面有衛生紙嗎？',
          zhCN: '里面有卫生纸吗？'
        }
      },
      {
        id: 'hyg3',
        cantonese: 'cau3',
        english: 'Smelly / Stinky',
        zhTW: '臭',
        zhCN: '臭',
        example: {
          cantonese: 'laap6 saap3 han2 cau3.',
          english: 'The trash is smelly.',
          zhTW: '垃圾很臭。',
          zhCN: '垃圾很臭。'
        }
      },
      {
        id: 'hyg4',
        cantonese: 'hoeng1',
        english: 'Fragrant / Smells good',
        zhTW: '香',
        zhCN: '香',
        example: {
          cantonese: 'ze5 do2 faa1 han2 hoeng1.',
          english: 'The flower smells good.',
          zhTW: '這朵花很香。',
          zhCN: '这朵花很香。'
        }
      },
      {
        id: 'hyg5',
        cantonese: 'zong1',
        english: 'Dirty',
        zhTW: '髒',
        zhCN: '脏',
        example: {
          cantonese: 'dei6 baan2 han2 zong1.',
          english: 'The floor is dirty.',
          zhTW: '地板很髒。',
          zhCN: '地板很脏。'
        }
      },
      {
        id: 'hyg6',
        cantonese: 'gon1 zeng6',
        english: 'Clean',
        zhTW: '乾淨',
        zhCN: '干净',
        example: {
          cantonese: 'fong4 gaan1 ji5 ging1 gon1 zeng6 liu5.',
          english: 'The room is already clean.',
          zhTW: '房間已經乾淨了。',
          zhCN: '房间已经干净了。'
        }
      }
    ]
  },
  {
    id: 'digital-survival',
    title: 'Digital Survival',
    titleKey: 'topics.digital-survival',
    group: 'daily_life',
    groupKey: 'groups.daily_life',
    cards: [
      {
        id: 'dig1',
        cantonese: 'ngo5 soeng2 cyu5 zik6 din6 waa2 fai3',
        english: 'I would like to buy phone credits',
        zhTW: '我想儲值電話費',
        zhCN: '我想充值电话费',
        example: {
          cantonese: 'ceng2 bong1 ngo5 cyu5 zik6 Wifi pei1 sok3.',
          english: 'I would like to buy 50 pesos load.',
          zhTW: '請幫我儲值 50 披索。',
          zhCN: '请帮我充值 50 披索。'
        }
      },
      {
        id: 'dig2',
        cantonese: 'mut6 jau5 seon3 hou6',
        english: 'No signal',
        zhTW: '沒有訊號',
        zhCN: '没有信号',
        example: {
          cantonese: 'saan1 soeng6 ze2 leoi5 mut6 jau5 seon3 hou6.',
          english: 'There is no signal here in the mountain.',
          zhTW: '山上這裡沒有訊號。',
          zhCN: '山上这里没有信号。'
        }
      },
      {
        id: 'dig3',
        cantonese: 'mut6 din6 liu5',
        english: 'Low battery',
        zhTW: '沒電了',
        zhCN: '没电了',
        example: {
          cantonese: 'ngo5 sau2 gei1 faai3 mut6 din6 liu5.',
          english: 'My battery is low.',
          zhTW: '我手機快沒電了。',
          zhCN: '我手机快没电了。'
        }
      },
      {
        id: 'dig4',
        cantonese: 'cung1 din6 hei3',
        english: 'Charger',
        zhTW: '充電器',
        zhCN: '充电器',
        example: {
          cantonese: 'nei5 jau5 daai3 cung1 din6 hei3 maa1?',
          english: 'Do you have a charger with you?',
          zhTW: '你有帶充電器嗎？',
          zhCN: '你有带充电器吗？'
        }
      },
      {
        id: 'dig5',
        cantonese: 'mat6 maa5',
        english: 'Password',
        zhTW: '密碼',
        zhCN: '密码',
        example: {
          cantonese: 'Wifi mat6 maa5 si6 do1 siu2?',
          english: 'What is the wifi password?',
          zhTW: 'Wifi 密碼是多少？',
          zhCN: 'Wifi 密码是多少？'
        }
      }
    ]
  },
  {
    id: 'weather',
    title: 'Weather',
    titleKey: 'topics.weather',
    group: 'daily_life',
    groupKey: 'groups.daily_life',
    cards: [
      {
        id: 'wth1',
        cantonese: 'taai3 jit6 liu5!',
        english: 'It\'s too hot!',
        zhTW: '太熱了！',
        zhCN: '太热了！',
        example: {
          cantonese: 'gam1 tin1 ngoi6 min6 taai3 jit6 liu5.',
          english: 'It\'s too hot outside today.',
          zhTW: '今天外面太熱了。',
          zhCN: '今天外面太热了。'
        }
      },
      {
        id: 'wth2',
        cantonese: 'haa6 jyu5 liu5',
        english: 'It is raining',
        zhTW: '下雨了',
        zhCN: '下雨了',
        example: {
          cantonese: 'jyu5 haa6 dak1 han2 daai6.',
          english: 'It is raining hard.',
          zhTW: '雨下得很大。',
          zhCN: '雨下得很大。'
        }
      },
      {
        id: 'wth3',
        cantonese: 'toi4 fung1 / fung1 bou6',
        english: 'Typhoon / Storm',
        zhTW: '颱風 / 風暴',
        zhCN: '台风 / 风暴',
        example: {
          cantonese: 'ming4 tin1 jau5 toi4 fung1 maa1?',
          english: 'Is there a storm tomorrow?',
          zhTW: '明天有颱風嗎？',
          zhCN: '明天有台风吗？'
        }
      },
      {
        id: 'wth4',
        cantonese: 'jim1 seoi2',
        english: 'Flood',
        zhTW: '淹水',
        zhCN: '淹水',
        example: {
          cantonese: 'maa5 lou6 jim1 seoi2 liu5.',
          english: 'The street is flooded.',
          zhTW: '馬路淹水了。',
          zhCN: '马路淹水了。'
        }
      },
      {
        id: 'wth5',
        cantonese: 'jyu5 saan3',
        english: 'Umbrella',
        zhTW: '雨傘',
        zhCN: '雨伞',
        example: {
          cantonese: 'ngo5 wui5 daai3 ngo5 dik1 jyu5 saan3.',
          english: 'I will bring my umbrella.',
          zhTW: '我會帶我的雨傘。',
          zhCN: '我会带我的雨伞。'
        }
      }
    ]
  },
  {
    id: 'city-navigation',
    title: 'City Navigation',
    titleKey: 'topics.city-navigation',
    group: 'daily_life',
    groupKey: 'groups.daily_life',
    cards: [
      {
        id: 'nav1',
        cantonese: 'lou6 hau2 / zyun3 gok3',
        english: 'Corner',
        zhTW: '路口 / 轉角',
        zhCN: '路口 / 转角',
        example: {
          cantonese: 'zau6 zoi6 lou6 hau2.',
          english: 'Just at the corner.',
          zhTW: '就在路口。',
          zhCN: '就在路口。'
        }
      },
      {
        id: 'nav2',
        cantonese: 'cin4 min6',
        english: 'Front',
        zhTW: '前面',
        zhCN: '前面',
        example: {
          cantonese: 'zoi6 Wifi cin4 min6.',
          english: 'In front of Jollibee.',
          zhTW: '在 Jollibee 前面。',
          zhCN: '在 Jollibee 前面。'
        }
      },
      {
        id: 'nav3',
        cantonese: 'hau6 min6',
        english: 'Back / Behind',
        zhTW: '後面',
        zhCN: '后面',
        example: {
          cantonese: 'zoi6 fong4 zi2 hau6 min6.',
          english: 'Behind the house.',
          zhTW: '在房子後面。',
          zhCN: '在房子后面。'
        }
      },
      {
        id: 'nav4',
        cantonese: 'kiu4',
        english: 'Bridge',
        zhTW: '橋',
        zhCN: '桥',
        example: {
          cantonese: 'ngo5 mun4 wui5 gwo3 kiu2.',
          english: 'We will cross the bridge.',
          zhTW: '我們會過橋。',
          zhCN: '我们会过桥。'
        }
      },
      {
        id: 'nav5',
        cantonese: 'baan1 maa5 sin3 / tin1 kiu4',
        english: 'Crosswalk / Overpass',
        zhTW: '斑馬線 / 天橋',
        zhCN: '斑马线 / 天桥',
        example: {
          cantonese: 'si2 jung6 baan1 maa5 sin3 / tin1 kiu4.',
          english: 'Use the crosswalk/overpass.',
          zhTW: '使用斑馬線/天橋。',
          zhCN: '使用斑马线/天桥。'
        }
      },
      {
        id: 'nav6',
        cantonese: 'gaau3 tong2',
        english: 'Church',
        zhTW: '教堂',
        zhCN: '教堂',
        example: {
          cantonese: 'kaau3 gan6 gaau3 tong2.',
          english: 'Near the church.',
          zhTW: '靠近教堂。',
          zhCN: '靠近教堂。'
        }
      }
    ]
  },
  {
    id: 'emotions-feelings',
    title: 'Emotions & Feelings',
    titleKey: 'topics.emotions-feelings',
    group: 'social',
    groupKey: 'groups.social',
    cards: [
      {
        id: 'emo1',
        cantonese: 'faai3 lok6',
        english: 'Happy',
        zhTW: '快樂',
        zhCN: '快乐',
        example: {
          cantonese: 'ngo5 gam1 tin1 han2 faai3 lok6.',
          english: 'I am happy today.',
          zhTW: '我今天很快樂。',
          zhCN: '我今天很快乐。'
        }
      },
      {
        id: 'emo2',
        cantonese: 'naan4 gwo3',
        english: 'Sad',
        zhTW: '難過',
        zhCN: '难过',
        example: {
          cantonese: 'nei5 wai6 sam6 mo1 naan4 gwo3?',
          english: 'Why are you sad?',
          zhTW: '你為什麼難過？',
          zhCN: '你为什么难过？'
        }
      },
      {
        id: 'emo3',
        cantonese: 'sang1 hei3',
        english: 'Angry',
        zhTW: '生氣',
        zhCN: '生气',
        example: {
          cantonese: 'bat1 jiu3 sang1 hei3.',
          english: 'Don\'t be angry.',
          zhTW: '不要生氣。',
          zhCN: '不要生气。'
        }
      },
      {
        id: 'emo4',
        cantonese: 'ngo6',
        english: 'Hungry',
        zhTW: '餓',
        zhCN: '饿',
        example: {
          cantonese: 'ngo5 ngo6 liu5.',
          english: 'I am getting hungry.',
          zhTW: '我餓了。',
          zhCN: '我饿了。'
        }
      },
      {
        id: 'emo5',
        cantonese: 'soeng2 seoi6',
        english: 'Sleepy',
        zhTW: '想睡',
        zhCN: '想睡',
        example: {
          cantonese: 'ngo5 soeng5 fo3 soeng2 seoi6 gaau3.',
          english: 'I am sleepy in class.',
          zhTW: '我上課想睡覺。',
          zhCN: '我上课想睡觉。'
        }
      },
      {
        id: 'emo6',
        cantonese: 'sam1 dung6',
        english: 'Romantic excitement',
        zhTW: '心動',
        zhCN: '心动',
        example: {
          cantonese: 'ngo5 deoi3 taa1 mun4 gam2 dou3 sam1 dung6.',
          english: 'I feel romantic excitement for them.',
          zhTW: '我對他們感到心動。',
          zhCN: '我对他们感到心动。'
        }
      }
    ]
  },
  {
    id: 'taglish-fillers',
    title: 'Taglish Fillers (Conyo Starter Pack)',
    titleKey: 'topics.taglish-fillers',
    group: 'social',
    groupKey: 'groups.social',
    cards: [
      {
        id: 'tag1',
        cantonese: 'zan1 dik1 maa1?',
        english: 'Really?',
        zhTW: '真的嗎？',
        zhCN: '真的吗？',
        example: {
          cantonese: 'zan1 dik1 maa1? bat1 si6 baa6?',
          english: 'Really? Is that so?',
          zhTW: '真的嗎？不是吧？',
          zhCN: '真的吗？不是吧？'
        }
      },
      {
        id: 'tag2',
        cantonese: 'waa1 / taai3 kwaa1 zoeng1',
        english: 'Wow / Extreme',
        zhTW: '哇 / 太誇張',
        zhCN: '哇 / 太夸张',
        example: {
          cantonese: 'jit6 dak1 taai3 kwaa1 zoeng1 liu5!',
          english: 'The heat is extreme!',
          zhTW: '熱得太誇張了！',
          zhCN: '热得太夸张了！'
        }
      },
      {
        id: 'tag3',
        cantonese: 'jaa5 heoi2',
        english: 'Maybe',
        zhTW: '也許',
        zhCN: '也许',
        example: {
          cantonese: 'jaa5 heoi2 taa1 / taa1 wui5 loi4.',
          english: 'Maybe he/she will arrive.',
          zhTW: '也許他/她會來。',
          zhCN: '也许他/她会来。'
        }
      },
      {
        id: 'tag4',
        cantonese: 'zi2 jiu3 / faan2 zing3',
        english: 'Just because / As long as',
        zhTW: '只要 / 反正',
        zhCN: '只要 / 反正',
        example: {
          cantonese: 'zi2 jiu3 si6 nei5, zau6 ho2 ji5.',
          english: 'As long as it\'s you, it\'s okay.',
          zhTW: '只要是你，就可以。',
          zhCN: '只要是你，就可以。'
        }
      },
      {
        id: 'tag5',
        cantonese: 'ho2 sik1 / long6 fai3',
        english: 'What a waste / pity',
        zhTW: '可惜 / 浪費',
        zhCN: '可惜 / 浪费',
        example: {
          cantonese: 'sik6 mat6 long6 fai3 liu5.',
          english: 'The food is wasted.',
          zhTW: '食物浪費了。',
          zhCN: '食物浪费了。'
        }
      }
    ]
  },
  {
    id: 'making-plans',
    title: 'Making Plans (The "Tara" Pack)',
    titleKey: 'topics.making-plans',
    group: 'social',
    groupKey: 'groups.social',
    cards: [
      {
        id: 'plan1',
        cantonese: 'zau2 baa6!',
        english: 'Let\'s go!',
        zhTW: '走吧！',
        zhCN: '走吧！',
        example: {
          cantonese: 'ngo5 mun4 heoi3 kau3 mat6 zung1 sam1 baa6.',
          english: 'Let\'s go to the mall now.',
          zhTW: '我們去購物中心吧。',
          zhCN: '我们去购物中心吧。'
        }
      },
      {
        id: 'plan2',
        cantonese: 'nei5 jiu3 jat1 hei2 loi4 maa1?',
        english: 'Are you coming with us?',
        zhTW: '你要一起來嗎？',
        zhCN: '你要一起来吗？',
        example: {
          cantonese: 'ngo5 mun4 jiu3 heoi3 jaak3 faan6, nei5 jiu3 jat1 hei2 maa1?',
          english: 'We are going to eat, are you coming?',
          zhTW: '我們要去吃飯，你要一起嗎？',
          zhCN: '我们要去吃饭，你要一起吗？'
        }
      },
      {
        id: 'plan3',
        cantonese: 'ngo5 ceng2 haak3',
        english: 'My treat / I\'ll pay for you',
        zhTW: '我請客',
        zhCN: '我请客',
        example: {
          cantonese: 'zau2 baa6, ngo5 ceng2 nei5 hot3 gaa3 fe1.',
          english: 'Let\'s go, I\'ll treat you to coffee.',
          zhTW: '走吧，我請你喝咖啡。',
          zhCN: '走吧，我请你喝咖啡。'
        }
      },
      {
        id: 'plan4',
        cantonese: 'gok3 fu6 gok3 dik1',
        english: 'Dutch Treat / Split the bill',
        zhTW: '各付各的',
        zhCN: '各付各的',
        example: {
          cantonese: 'ngo5 mun4 gok3 fu6 gok3 dik1, hou2 maa1?',
          english: 'We split the bill, okay?',
          zhTW: '我們各付各的，好嗎？',
          zhCN: '我们各付各的，好吗？'
        }
      },
      {
        id: 'plan5',
        cantonese: 'jau5 sam6 mo1 gai3 waak6? / faat3 sang1 sam6 mo1 si6?',
        english: 'What\'s the plan? / What\'s happening?',
        zhTW: '有什麼計畫？ / 發生什麼事？',
        zhCN: '有什么计划？ / 发生什么事？',
        example: {
          cantonese: 'doi6 wui5 jau5 sam6 mo1 gai3 waak6?',
          english: 'What\'s the plan later?',
          zhTW: '待會有什麼計畫？',
          zhCN: '待会有什么计划？'
        }
      }
    ]
  },
  {
    id: 'compliments-flattery',
    title: 'Compliments & Flattery',
    titleKey: 'topics.compliments-flattery',
    group: 'social',
    groupKey: 'groups.social',
    cards: [
      {
        id: 'bol1',
        cantonese: 'nei5 zan1 piu3 loeng6',
        english: 'You are so beautiful',
        zhTW: '你真漂亮',
        zhCN: '你真漂亮',
        example: {
          cantonese: 'nei5 gam1 tin1 zan1 piu3 loeng6.',
          english: 'You are so beautiful today.',
          zhTW: '你今天真漂亮。',
          zhCN: '你今天真漂亮。'
        }
      },
      {
        id: 'bol2',
        cantonese: 'seoi3',
        english: 'Handsome',
        zhTW: '帥',
        zhCN: '帅',
        example: {
          cantonese: 'nei5 zan1 dik1 han2 seoi3.',
          english: 'You are really handsome.',
          zhTW: '你真的很帥。',
          zhCN: '你真的很帅。'
        }
      },
      {
        id: 'bol3',
        cantonese: 'han2 sik1 hap6 nei5',
        english: 'That suits/fits you well',
        zhTW: '很適合你',
        zhCN: '很适合你',
        example: {
          cantonese: 'ze5 gin6 ji1 fuk6 han2 sik1 hap6 nei5.',
          english: 'The dress suits you well.',
          zhTW: '這件衣服很適合你。',
          zhCN: '这件衣服很适合你。'
        }
      },
      {
        id: 'bol4',
        cantonese: 'tim4 jin4 mat6 jyu5 dik1 jan4',
        english: 'Flatterer / Smooth talker',
        zhTW: '甜言蜜語的人',
        zhCN: '甜言蜜语的人',
        example: {
          cantonese: 'bit6 soeng1 seon3 taa1, taa1 han2 wui5 tim4 jin4 mat6 jyu5.',
          english: 'Don\'t believe him, he\'s a smooth talker.',
          zhTW: '別相信他，他很會甜言蜜語。',
          zhCN: '别相信他，他很会甜言蜜语。'
        }
      },
      {
        id: 'bol5',
        cantonese: 'waa1! / hou2 lei6 hoi6!',
        english: 'Wow! / Impressive!',
        zhTW: '哇！/ 好厲害！',
        zhCN: '哇！/ 好厉害！',
        example: {
          cantonese: 'waa1! nei5 zan1 paang5.',
          english: 'Wow! You are so good.',
          zhTW: '哇！你真棒。',
          zhCN: '哇！你真棒。'
        }
      }
    ]
  },
  {
    id: 'opinions-uncertainty',
    title: 'Opinions & Uncertainty',
    titleKey: 'topics.opinions-uncertainty',
    group: 'social',
    groupKey: 'groups.social',
    cards: [
      {
        id: 'ewan1',
        cantonese: 'ngo5 gok3 dak1... / zoi6 ngo5 hon3 loi4...',
        english: 'I think... / In my opinion...',
        zhTW: '我覺得... / 在我看來...',
        zhCN: '我觉得... / 在我看来...',
        example: {
          cantonese: 'ngo5 gok3 dak1 nei5 si6 deoi3 dik1.',
          english: 'I think you are right.',
          zhTW: '我覺得你是對的。',
          zhCN: '我觉得你是对的。'
        }
      },
      {
        id: 'ewan2',
        cantonese: 'ngo5 bat1 zi1 dou3',
        english: 'I don\'t know',
        zhTW: '我不知道',
        zhCN: '我不知道',
        example: {
          cantonese: 'ngo5 bat1 zi1 dou3 taa1 / taa1 zoi6 naa5 leoi5.',
          english: 'I don\'t know where he/she is.',
          zhTW: '我不知道他/她在哪裡。',
          zhCN: '我不知道他/她在哪裡。'
        }
      },
      {
        id: 'ewan3',
        cantonese: 'ceoi4 bin2 laa1 / ting3 tin1 jau4 ming6',
        english: 'Come what may / I\'ll leave it to fate',
        zhTW: '隨便啦 / 聽天由命',
        zhCN: '随便啦 / 听天由命',
        example: {
          cantonese: 'gaau1 kap1 ming6 wan6 baa6 (pin1 fuk1 hap6).',
          english: 'Leave it to fate (Batman).',
          zhTW: '交給命運吧（蝙蝠俠）。',
          zhCN: '交给命运吧（蝙蝠侠）。'
        }
      },
      {
        id: 'ewan4',
        cantonese: 'hon3 cing4 fong3',
        english: 'It depends',
        zhTW: '看情況',
        zhCN: '看情况',
        example: {
          cantonese: 'hon3 tin1 hei3 ji4 ding6.',
          english: 'It depends on the weather.',
          zhTW: '看天氣而定。',
          zhCN: '看天气而定。'
        }
      },
      {
        id: 'ewan5',
        cantonese: 'nei5 kok3 ding6 maa1?',
        english: 'Are you sure?',
        zhTW: '你確定嗎？',
        zhCN: '你确定吗？',
        example: {
          cantonese: 'nei5 kok3 ding6 nei5 dik1 daap3 on3 maa1?',
          english: 'Are you sure about your answer?',
          zhTW: '你確定你的答案嗎？',
          zhCN: '你确定你的答案吗？'
        }
      }
    ]
  },
  {
    id: 'hobbies-interests',
    title: 'Hobbies & Interests',
    titleKey: 'topics.hobbies-interests',
    group: 'social',
    groupKey: 'groups.social',
    cards: [
      {
        id: 'hob1',
        cantonese: 'nei5 hei2 fun1... maa1?',
        english: 'Are you fond of...? / Do you like...?',
        zhTW: '你喜歡...嗎？',
        zhCN: '你喜欢...吗？',
        example: {
          cantonese: 'nei5 hei2 fun1 kaa1 laai1 Wifi maa1?',
          english: 'Do you like Karaoke?',
          zhTW: '你喜歡卡拉OK嗎？',
          zhCN: '你喜欢卡拉OK吗？'
        }
      },
      {
        id: 'hob2',
        cantonese: 'nei5 soeng2 zou6 sam6 mo1?',
        english: 'What do you want to do?',
        zhTW: '你想做什麼？',
        zhCN: '你想做什么？',
        example: {
          cantonese: 'nei5 ming4 tin1 soeng2 zou6 sam6 mo1?',
          english: 'What do you want to do tomorrow?',
          zhTW: '你明天想做什麼？',
          zhCN: '你明天想做什么？'
        }
      },
      {
        id: 'hob3',
        cantonese: 'leoi5 hang4',
        english: 'To travel',
        zhTW: '旅行',
        zhCN: '旅行',
        example: {
          cantonese: 'ngo5 soeng2 heoi3 baa1 laai1 mong6 leoi5 hang4.',
          english: 'I want to travel to Palawan.',
          zhTW: '我想去巴拉望旅行。',
          zhCN: '我想去巴拉望旅行。'
        }
      },
      {
        id: 'hob4',
        cantonese: 'hon3 Netflix/ din6 jing2',
        english: 'Watch Netflix/Movies',
        zhTW: '看 Netflix/電影',
        zhCN: '看 Netflix/电影',
        example: {
          cantonese: 'ngo5 mun4 heoi3 hon3 din6 jing2 baa6.',
          english: 'Let\'s watch a movie.',
          zhTW: '我們去看電影吧。',
          zhCN: '我们去看电影吧。'
        }
      },
      {
        id: 'hob5',
        cantonese: 'hek3',
        english: 'Eat',
        zhTW: '吃',
        zhCN: '吃',
        example: {
          cantonese: 'ngo5 hei2 fun1 hek3.',
          english: 'I love to eat.',
          zhTW: '我喜歡吃。',
          zhCN: '我喜欢吃。'
        }
      }
    ]
  },
  {
    id: 'modern-slang',
    title: 'Modern Slang (The "Street" Pack)',
    titleKey: 'topics.modern-slang',
    group: 'social',
    groupKey: 'groups.social',
    cards: [
      {
        id: 'slang1',
        cantonese: 'hoi1 waan4 siu3 dik1!',
        english: 'Just kidding!',
        zhTW: '開玩笑的！',
        zhCN: '开玩笑的！',
        example: {
          cantonese: 'ngo5 zan1 piu3 loeng6, hoi1 waan4 siu3 dik1!',
          english: 'I\'m beautiful, just kidding!',
          zhTW: '我真漂亮，開玩笑的！',
          zhCN: '我真漂亮，开玩笑的！'
        }
      },
      {
        id: 'slang2',
        cantonese: 'baat3 gwaa3 / gu3 si6',
        english: 'Gossip / Story',
        zhTW: '八卦 / 故事',
        zhCN: '八卦 / 故事',
        example: {
          cantonese: 'zeoi3 gan6 jau5 sam6 mo1 baat3 gwaa3?',
          english: 'What\'s the latest gossip?',
          zhTW: '最近有什麼八卦？',
          zhCN: '最近有什么八卦？'
        }
      },
      {
        id: 'slang3',
        cantonese: 'ngau5 zoeng6',
        english: 'Idol / Someone you admire',
        zhTW: '偶像',
        zhCN: '偶像',
        example: {
          cantonese: 'nei5 si6 ngo5 dik1 ngau5 zoeng6.',
          english: 'You are my idol.',
          zhTW: '你是我的偶像。',
          zhCN: '你是我的偶像。'
        }
      },
      {
        id: 'slang4',
        cantonese: 'lei6 hoi6 / maang5',
        english: 'Amazing / Extreme',
        zhTW: '厲害 / 猛',
        zhCN: '厉害 / 猛',
        example: {
          cantonese: 'nei5 tiu3 mou5 han2 lei6 hoi6.',
          english: 'Your dancing is amazing.',
          zhTW: '你跳舞很厲害。',
          zhCN: '你跳舞很厉害。'
        }
      },
      {
        id: 'slang5',
        cantonese: 'gwai1 mat6 / hing1 dai6',
        english: 'Friend / Bestie terms',
        zhTW: '閨蜜 / 兄弟',
        zhCN: '闺蜜 / 兄弟',
        example: {
          cantonese: 'nei5 hou2 maa1, gwai1 mat6?',
          english: 'How are you bestie?',
          zhTW: '你好嗎，閨蜜？',
          zhCN: '你好吗，闺蜜？'
        }
      }
    ]
  },
  {
    id: 'work-school',
    title: 'Work & School (Introduction Expansion)',
    titleKey: 'topics.work-school',
    group: 'daily_life',
    groupKey: 'groups.daily_life',
    cards: [
      {
        id: 'work1',
        cantonese: 'nei5 dik1 gung1 zok3 si6 sam6 mo1?',
        english: 'What is your job?',
        zhTW: '你的工作是什麼？',
        zhCN: '你的工作是什么？',
        example: {
          cantonese: 'nei5 zoi6 maa5 nei4 laai1 zou6 sam6 mo1 gung1 zok3?',
          english: 'What is your job in Manila?',
          zhTW: '你在馬尼拉做什麼工作？',
          zhCN: '你在马尼拉做什么工作？'
        }
      },
      {
        id: 'work2',
        cantonese: 'hok6 saang1',
        english: 'Student',
        zhTW: '學生',
        zhCN: '学生',
        example: {
          cantonese: 'ngo5 waan4 zi2 si6 go3 hok6 saang1.',
          english: 'I am just a student.',
          zhTW: '我還只是個學生。',
          zhCN: '我还只是个学生。'
        }
      },
      {
        id: 'work3',
        cantonese: 'baan6 gung1 sat1',
        english: 'Office',
        zhTW: '辦公室',
        zhCN: '办公室',
        example: {
          cantonese: 'ngo5 jin6 zoi6 zoi6 baan6 gung1 sat1.',
          english: 'I am at the office now.',
          zhTW: '我現在在辦公室。',
          zhCN: '我现在在办公室。'
        }
      },
      {
        id: 'work4',
        cantonese: 'leoi6',
        english: 'Tired',
        zhTW: '累',
        zhCN: '累',
        example: {
          cantonese: 'ngo5 gung1 zok3 han2 leoi6.',
          english: 'I\'m tired from work.',
          zhTW: '我工作很累。',
          zhCN: '我工作很累。'
        }
      },
      {
        id: 'work5',
        cantonese: 'gaa3 kei4 / dou6 gaa3',
        english: 'Vacation',
        zhTW: '假期 / 度假',
        zhCN: '假期 / 度假',
        example: {
          cantonese: 'ngo5 seoi1 jiu3 jau1 gaa3.',
          english: 'I need a vacation.',
          zhTW: '我需要休假。',
          zhCN: '我需要休假。'
        }
      }
    ]
  },
  {
    id: 'love-dating',
    title: 'Love & Dating (The "Kilig" Pack)',
    titleKey: 'topics.love-dating',
    group: 'social',
    groupKey: 'groups.social',
    cards: [
      {
        id: 'luv1',
        cantonese: 'ngo5 am3 lyun2 nei5',
        english: 'I have a crush on you',
        zhTW: '我暗戀你',
        zhCN: '我暗恋你',
        example: {
          cantonese: 'nei5 zi1 dou3 maa1, ngo5 am3 lyun2 nei5?',
          english: 'Do you know, I have a crush on you?',
          zhTW: '你知道嗎，我暗戀你？',
          zhCN: '你知道吗，我暗恋你？'
        }
      },
      {
        id: 'luv2',
        cantonese: 'sam1 dung6 / siu2 luk6 lyun6 zong6',
        english: 'Romantic excitement / butterflies',
        zhTW: '心動 / 小鹿亂撞',
        zhCN: '心动 / 小鹿乱撞',
        example: {
          cantonese: 'jan1 wai6 nei5, ngo5 gam2 dou3 sam1 dung6.',
          english: 'I\'m feeling giddy because of you.',
          zhTW: '因為你，我感到心動。',
          zhCN: '因为你，我感到心动。'
        }
      },
      {
        id: 'luv3',
        cantonese: 'ngo5 soeng2 nei5 liu5',
        english: 'I miss you already',
        zhTW: '我想你了',
        zhCN: '我想你了',
        example: {
          cantonese: 'faai3 wui4 gaa1 baa6, ngo5 soeng2 nei5 liu5.',
          english: 'Come home now, I miss you.',
          zhTW: '快回家吧，我想你了。',
          zhCN: '快回家吧，我想你了。'
        }
      },
      {
        id: 'luv4',
        cantonese: 'nei5 daan1 san1 maa1?',
        english: 'Are you single?',
        zhTW: '你單身嗎？',
        zhCN: '你单身吗？',
        example: {
          cantonese: 'nei5 daan1 san1 waan4 si6 jau5 naam4 pang4 jau5 liu5?',
          english: 'Are you single or do you have a boyfriend?',
          zhTW: '你單身還是有男朋友了？',
          zhCN: '你单身还是有男朋友了？'
        }
      },
      {
        id: 'luv5',
        cantonese: 'ngo5 mun4 heoi3 joek3 wui6 baa6?',
        english: 'Let\'s go on a date?',
        zhTW: '我們去約會吧？',
        zhCN: '我们去约会吧？',
        example: {
          cantonese: 'ho2 ji5 maa1, ngo5 mun4 ming4 tin1 heoi3 joek3 wui6?',
          english: 'Is it okay, let\'s go on a date tomorrow?',
          zhTW: '可以嗎，我們明天去約會？',
          zhCN: '可以吗，我们明天去约会？'
        }
      }
    ]
  },
  {
    id: 'conflict-reconciliation',
    title: 'Conflict & Reconciliation (The "Tampo" Pack)',
    titleKey: 'topics.conflict-reconciliation',
    group: 'social',
    groupKey: 'groups.social',
    cards: [
      {
        id: 'confl1',
        cantonese: 'nei5 zoi6 saang1 mun6 hei3 maa1?',
        english: 'Are you sulking/upset with me?',
        zhTW: '你在生悶氣嗎？',
        zhCN: '你在生闷气吗？',
        example: {
          cantonese: 'wai6 sam6 mo1 nei5 ze2 mo1 on1 zing6? nei5 zoi6 saang1 mun6 hei3 maa1?',
          english: 'Why are you quiet? Are you sulking?',
          zhTW: '為什麼你這麼安靜？你在生悶氣嗎？',
          zhCN: '为什么你这么安静？你在生闷气吗？'
        }
      },
      {
        id: 'confl2',
        cantonese: 'nei5 sang1 hei3 liu5 maa1?',
        english: 'Are you angry?',
        zhTW: '你生氣了嗎？',
        zhCN: '你生气了吗？',
        example: {
          cantonese: 'nei5 zoi6 saang1 ngo5 dik1 hei3 maa1?',
          english: 'Are you angry with me?',
          zhTW: '你在生我的氣嗎？',
          zhCN: '你在生我的气吗？'
        }
      },
      {
        id: 'confl3',
        cantonese: 'ngo5 mun4 wo4 hou2 baa6',
        english: 'Let\'s make up / Let\'s be friends again',
        zhTW: '我們和好吧',
        zhCN: '我们和好吧',
        example: {
          cantonese: 'hou2 liu5 laa1, ngo5 mun4 wo4 hou2 baa6.',
          english: 'Come on, let\'s make up.',
          zhTW: '好了啦，我們和好吧。',
          zhCN: '好了啦，我们和好吧。'
        }
      },
      {
        id: 'confl4',
        cantonese: 'deoi3 bat1 hei2 laa1',
        english: 'I\'m sorry / Come on, forgive me',
        zhTW: '對不起啦',
        zhCN: '对不起啦',
        example: {
          cantonese: 'deoi3 bat1 hei2 laa1, ngo5 bat1 si6 gu3 ji3 dik1.',
          english: 'I\'m sorry, I didn\'t mean it.',
          zhTW: '對不起啦，我不是故意的。',
          zhCN: '对不起啦，我不是故意的。'
        }
      },
      {
        id: 'confl5',
        cantonese: 'saat3 giu1 / hung3',
        english: 'Affection / Coaxing',
        zhTW: '撒嬌 / 哄',
        zhCN: '撒娇 / 哄',
        example: {
          cantonese: 'zi2 jiu3 saau2 mei4 hung3 jat1 haa5, taa1 / taa1 zau6 wui5 hou2 liu5.',
          english: 'Just a little coaxing, he/she will be okay.',
          zhTW: '只要稍微哄一下，他/她就會好了。',
          zhCN: '只要稍微哄一下，他/她就会好了。'
        }
      }
    ]
  },
  {
    id: 'drinking-celebrations',
    title: 'Drinking & Celebrations (The "Tagay" Pack)',
    titleKey: 'topics.drinking-celebrations',
    group: 'social',
    groupKey: 'groups.social',
    cards: [
      {
        id: 'drink1',
        cantonese: 'gon1 bui1! / wun6 nei5 hot3 liu5',
        english: 'Cheers! / Your turn to drink',
        zhTW: '乾杯！/ 換你喝了',
        zhCN: '干杯！/ 换你喝了',
        example: {
          cantonese: 'gon1 bui1! wun6 nei5 hot3 liu5.',
          english: 'Cheers! It\'s your turn to drink.',
          zhTW: '乾杯！換你喝了。',
          zhCN: '干杯！换你喝了。'
        }
      },
      {
        id: 'drink2',
        cantonese: 'haa6 zau2 coi3',
        english: 'Food eaten while drinking',
        zhTW: '下酒菜',
        zhCN: '下酒菜',
        example: {
          cantonese: 'Wifi han2 hou2 hek3, sik1 hap6 dong1 haa6 zau2 coi3.',
          english: 'Sisig is delicious as food for drinking.',
          zhTW: 'Sisig 很好吃，適合當下酒菜。',
          zhCN: 'Sisig 很好吃，适合当下酒菜。'
        }
      },
      {
        id: 'drink3',
        cantonese: 'ngo5 zeoi3 liu5',
        english: 'I\'m drunk already',
        zhTW: '我醉了',
        zhCN: '我醉了',
        example: {
          cantonese: 'gau3 liu5, ngo5 ji5 ging1 zeoi3 liu5.',
          english: 'Enough, I\'m drunk already.',
          zhTW: '夠了，我已經醉了。',
          zhCN: '够了，我已经醉了。'
        }
      },
      {
        id: 'drink4',
        cantonese: 'jat1 dim2 dim2 zau6 hou2',
        english: 'Just a little bit',
        zhTW: '一點點就好',
        zhCN: '一点点就好',
        example: {
          cantonese: 'kap1 ngo5 jat1 dim2 be1 zau2, jat1 dim2 dim2 zau6 hou2.',
          english: 'Give me beer, just a little bit.',
          zhTW: '給我一點啤酒，一點點就好。',
          zhCN: '给我一点啤酒，一点点就好。'
        }
      },
      {
        id: 'drink5',
        cantonese: 'saang1 jat6 faai3 lok6! / zuk1 ho6!',
        english: 'Happy Birthday / Greetings!',
        zhTW: '生日快樂！/ 祝賀！',
        zhCN: '生日快乐！/ 祝贺！',
        example: {
          cantonese: 'zuk1 nei5 saang1 jat6 faai3 lok6!',
          english: 'Happy greetings on your birthday!',
          zhTW: '祝你生日快樂！',
          zhCN: '祝你生日快乐！'
        }
      }
    ]
  },
  {
    id: 'storytelling-connectors',
    title: 'Storytelling Connectors (The "Kwento" Pack)',
    titleKey: 'topics.storytelling-connectors',
    group: 'social',
    groupKey: 'groups.social',
    cards: [
      {
        id: 'story1',
        cantonese: 'nei5 zi1 dou3 maa1...',
        english: 'Do you know... / Guess what...',
        zhTW: '你知道嗎...',
        zhCN: '你知道吗...',
        example: {
          cantonese: 'nei5 zi1 dou3 zok3 tin1 faat3 sang1 liu5 sam6 mo1 si6 maa1?',
          english: 'Do you know what happened yesterday?',
          zhTW: '你知道昨天發生了什麼事嗎？',
          zhCN: '你知道昨天发生了什么事吗？'
        }
      },
      {
        id: 'story2',
        cantonese: 'jin4 hau6...',
        english: 'And then...',
        zhTW: '然後...',
        zhCN: '然后...',
        example: {
          cantonese: 'ngo5 mun4 hek3 liu5 faan6, jin4 hau6 hon3 liu5 din6 jing2.',
          english: 'We ate, and then watched a movie.',
          zhTW: '我們吃了飯，然後看了電影。',
          zhCN: '我们吃了饭，然后看了电影。'
        }
      },
      {
        id: 'story3',
        cantonese: 'dat6 jin4...',
        english: 'Suddenly...',
        zhTW: '突然...',
        zhCN: '突然...',
        example: {
          cantonese: 'taa1 / taa1 dat6 jin4 lei4 hoi1 liu5.',
          english: 'He/She suddenly left.',
          zhTW: '他/她突然離開了。',
          zhCN: '他/她突然离开了。'
        }
      },
      {
        id: 'story4',
        cantonese: 'goi1 sei2! (cou1 zuk6)',
        english: 'Damn it! (Vulgar)',
        zhTW: '該死！(粗俗)',
        zhCN: '该死！(粗俗)',
        example: {
          cantonese: 'goi1 sei2! ngo5 mong4 liu5 joek6 si4.',
          english: 'Damn it! I forgot the key.',
          zhTW: '該死！我忘了鑰匙。',
          zhCN: '该死！我忘了钥匙。'
        }
      },
      {
        id: 'story5',
        cantonese: 'zan1 dik1 maa1? / bat1 wui5 baa6?',
        english: 'For real? / No way?',
        zhTW: '真的嗎？ / 不會吧？',
        zhCN: '真的吗？ / 不会吧？',
        example: {
          cantonese: 'taa1 / taa1 jeng4 liu5? zan1 dik1 maa1?',
          english: 'He/She won? For real?',
          zhTW: '他/她贏了？真的嗎？',
          zhCN: '他/她赢了？真的吗？'
        }
      }
    ]
  },
  {
    id: 'animals',
    title: 'Animals',
    titleKey: 'topics.animals',
    group: 'daily_life',
    groupKey: 'groups.daily_life',
    cards: [
      {
        id: 'ani1',
        cantonese: 'gau2',
        english: 'Dog',
        zhTW: '狗',
        zhCN: '狗',
        example: {
          cantonese: 'gau2 gau2 han2 gwaai1.',
          english: 'The dog is kind.',
          zhTW: '狗狗很乖。',
          zhCN: '狗狗很乖。'
        }
      },
      {
        id: 'ani2',
        cantonese: 'maau1',
        english: 'Cat',
        zhTW: '貓',
        zhCN: '猫',
        example: {
          cantonese: 'maau1 zoi6 seoi6 gaau3.',
          english: 'The cat is sleeping.',
          zhTW: '貓在睡覺。',
          zhCN: '猫在睡觉。'
        }
      },
      {
        id: 'ani3',
        cantonese: 'niu5',
        english: 'Bird',
        zhTW: '鳥',
        zhCN: '鸟',
        example: {
          cantonese: 'niu5 zoi6 fei1.',
          english: 'The bird is flying.',
          zhTW: '鳥在飛。',
          zhCN: '鸟在飞。'
        }
      },
      {
        id: 'ani4',
        cantonese: 'zyu1',
        english: 'Pig',
        zhTW: '豬',
        zhCN: '猪',
        example: {
          cantonese: 'zyu1 han2 bun6.',
          english: 'The pig is fat.',
          zhTW: '豬很胖。',
          zhCN: '猪很胖。'
        }
      },
      {
        id: 'ani5',
        cantonese: 'ngau4',
        english: 'Cow',
        zhTW: '牛',
        zhCN: '牛',
        example: {
          cantonese: 'ngau4 zoi6 hek3 cou2.',
          english: 'The cow is eating grass.',
          zhTW: '牛在吃草。',
          zhCN: '牛在吃草。'
        }
      },
      {
        id: 'ani6',
        cantonese: 'seoi2 ngau4',
        english: 'Carabao / Water Buffalo',
        zhTW: '水牛',
        zhCN: '水牛',
        example: {
          cantonese: 'seoi2 ngau4 han2 kan4 lou4.',
          english: 'The carabao is hardworking.',
          zhTW: '水牛很勤勞。',
          zhCN: '水牛很勤劳。'
        }
      },
      {
        id: 'ani7',
        cantonese: 'se4',
        english: 'Snake',
        zhTW: '蛇',
        zhCN: '蛇',
        example: {
          cantonese: 'se4 han2 ho2 paa3.',
          english: 'The snake is scary.',
          zhTW: '蛇很可怕。',
          zhCN: '蛇很可怕。'
        }
      },
      {
        id: 'ani8',
        cantonese: 'lou5 syu2',
        english: 'Mouse / Rat',
        zhTW: '老鼠',
        zhCN: '老鼠',
        example: {
          cantonese: 'lou5 syu2 paau2 dak1 han2 faai3.',
          english: 'The mouse runs fast.',
          zhTW: '老鼠跑得很快。',
          zhCN: '老鼠跑得很快。'
        }
      },
      {
        id: 'ani9',
        cantonese: 'man1 zi2',
        english: 'Mosquito',
        zhTW: '蚊子',
        zhCN: '蚊子',
        example: {
          cantonese: 'zok6 maan5 jau5 han2 do1 man1 zi2.',
          english: 'There were many mosquitoes last night.',
          zhTW: '昨晚有很多蚊子。',
          zhCN: '昨晚有很多蚊子。'
        }
      },
      {
        id: 'ani10',
        cantonese: 'zoeng1 long4',
        english: 'Cockroach',
        zhTW: '蟑螂',
        zhCN: '蟑螂',
        example: {
          cantonese: 'baa2 zoeng1 long4 daa2 sei1.',
          english: 'Kill the cockroach.',
          zhTW: '把蟑螂打死。',
          zhCN: '把蟑螂打死。'
        }
      },
      {
        id: 'ani11',
        cantonese: 'hau4 zi2',
        english: 'Monkey',
        zhTW: '猴子',
        zhCN: '猴子',
        example: {
          cantonese: 'hau4 zi2 han2 tiu4 pei4.',
          english: 'The monkey is naughty.',
          zhTW: '猴子很調皮。',
          zhCN: '猴子很调皮。'
        }
      },
      {
        id: 'ani12',
        cantonese: 'saan1 joeng4',
        english: 'Goat',
        zhTW: '山羊',
        zhCN: '山羊',
        example: {
          cantonese: 'tin4 leoi5 jau5 saan1 joeng4.',
          english: 'There is a goat in the farm.',
          zhTW: '田裡有山羊。',
          zhCN: '田里有山羊。'
        }
      }
    ]
  },
  {
    id: 'body-parts',
    title: 'Body Parts',
    titleKey: 'topics.body-parts',
    group: 'basics',
    groupKey: 'groups.basics',
    cards: [
      {
        id: 'bp1',
        cantonese: 'tau4',
        english: 'Head',
        zhTW: '頭',
        zhCN: '头',
        example: {
          cantonese: 'ngo5 dik1 tau4 han2 tung3.',
          english: 'My head hurts.',
          zhTW: '我的頭很痛。',
          zhCN: '我的头很痛。'
        }
      },
      {
        id: 'bp2',
        cantonese: 'ngaan5 zing1',
        english: 'Eye',
        zhTW: '眼睛',
        zhCN: '眼睛',
        example: {
          cantonese: 'bai3 soeng5 nei5 dik1 ngaan5 zing1.',
          english: 'Close your eyes.',
          zhTW: '閉上你的眼睛。',
          zhCN: '闭上你的眼睛。'
        }
      },
      {
        id: 'bp3',
        cantonese: 'bei6 zi2',
        english: 'Nose',
        zhTW: '鼻子',
        zhCN: '鼻子',
        example: {
          cantonese: 'taa1 / taa1 dik1 bei6 zi2 han2 ting5.',
          english: 'His/her nose is pointed.',
          zhTW: '他/她的鼻子很挺。',
          zhCN: '他/她的鼻子很挺。'
        }
      },
      {
        id: 'bp4',
        cantonese: 'zeoi2 baa1',
        english: 'Mouth',
        zhTW: '嘴巴',
        zhCN: '嘴巴',
        example: {
          cantonese: 'taa1 / taa1 dik1 zeoi2 baa1 zoeng1 hoi1 zoek6.',
          english: 'His/her mouth is open.',
          zhTW: '他/她的嘴巴張開著。',
          zhCN: '他/她的嘴巴张开着。'
        }
      },
      {
        id: 'bp5',
        cantonese: 'ji5 do2',
        english: 'Ear',
        zhTW: '耳朵',
        zhCN: '耳朵',
        example: {
          cantonese: 'taa1 / taa1 dik1 ji5 do2 han2 daai6.',
          english: 'His/her ears are big.',
          zhTW: '他/她的耳朵很大。',
          zhCN: '他/她的耳朵很大。'
        }
      },
      {
        id: 'bp6',
        cantonese: 'tau4 faat3',
        english: 'Hair',
        zhTW: '頭髮',
        zhCN: '头发',
        example: {
          cantonese: 'taa1 dik1 tau4 faat3 han2 coeng4.',
          english: 'Her hair is long.',
          zhTW: '她的頭髮很長。',
          zhCN: '她的头发很长。'
        }
      },
      {
        id: 'bp7',
        cantonese: 'sau2',
        english: 'Hand',
        zhTW: '手',
        zhCN: '手',
        example: {
          cantonese: 'sai2 sai2 nei5 dik1 sau2.',
          english: 'Wash your hands.',
          zhTW: '洗洗你的手。',
          zhCN: '洗洗你的手。'
        }
      },
      {
        id: 'bp8',
        cantonese: 'goek3',
        english: 'Foot',
        zhTW: '腳',
        zhCN: '脚',
        example: {
          cantonese: 'ngo5 dik1 goek3 han2 daai6.',
          english: 'My feet are big.',
          zhTW: '我的腳很大。',
          zhCN: '我的脚很大。'
        }
      },
      {
        id: 'bp9',
        cantonese: 'gin1 bong2',
        english: 'Shoulder',
        zhTW: '肩膀',
        zhCN: '肩膀',
        example: {
          cantonese: 'ngo5 dik1 gin1 bong2 tung3.',
          english: 'My shoulder hurts.',
          zhTW: '我的肩膀痛。',
          zhCN: '我的肩膀痛。'
        }
      },
      {
        id: 'bp10',
        cantonese: 'tou5 zi2',
        english: 'Stomach',
        zhTW: '肚子',
        zhCN: '肚子',
        example: {
          cantonese: 'ngo5 dik1 tou5 zi2 ngo6 liu5.',
          english: 'My stomach is hungry.',
          zhTW: '我的肚子餓了。',
          zhCN: '我的肚子饿了。'
        }
      }
    ]
  },
  {
    id: 'idioms-proverbs',
    title: 'Idioms & Proverbs',
    titleKey: 'topics.idioms-proverbs',
    group: 'social',
    groupKey: 'groups.social',
    cards: [
      {
        id: 'idm1',
        cantonese: 'mut6 cin2 / po3 caan2 (hau2 doi6 po3 dung6)',
        english: 'No money / Broke (Hole in the pocket)',
        zhTW: '沒錢 / 破產 (口袋破洞)',
        zhCN: '没钱 / 破产 (口袋破洞)',
        example: {
          cantonese: 'ngo5 jin6 zoi6 san1 mou4 fan1 man4.',
          english: 'I have no money right now.',
          zhTW: '我現在身無分文。',
          zhCN: '我现在身无分文。'
        }
      },
      {
        id: 'idm2',
        cantonese: 'gei3 zyu6 ngo5 dik1 waa6 / tit3 baan2 deng1 deng1',
        english: 'Mark my words (Cast in stone)',
        zhTW: '記住我的話 / 鐵板釘釘',
        zhCN: '记住我的话 / 铁板钉钉',
        example: {
          cantonese: 'gei3 zyu6 ngo5 dik1 waa6, ngo5 wui5 wui4 loi4 dik1.',
          english: 'Mark my words, I will return.',
          zhTW: '記住我的話，我會回來的。',
          zhCN: '记住我的话，我会回来的。'
        }
      },
      {
        id: 'idm3',
        cantonese: 'syut3 waa6 haak1 bok6 / duk6 sit3',
        english: 'Sharp-tongued / Speaks harshly',
        zhTW: '說話刻薄 / 毒舌',
        zhCN: '说话刻薄 / 毒舌',
        example: {
          cantonese: 'ngo5 mun4 leon4 geoi1 syut3 waa6 han2 haak1 bok6.',
          english: 'Our neighbor is sharp-tongued.',
          zhTW: '我們鄰居說話很刻薄。',
          zhCN: '我们邻居说话很刻薄。'
        }
      },
      {
        id: 'idm4',
        cantonese: 'saam1 fan1 zung1 jit6 dou6',
        english: 'Diligent only at the beginning',
        zhTW: '三分鐘熱度',
        zhCN: '三分钟热度',
        example: {
          cantonese: 'hok6 zaap6 bat1 jiu3 zi2 jau5 saam1 fan1 zung1 jit6 dou6.',
          english: 'Do not be diligent only at the beginning in your studies.',
          zhTW: '學習不要只有三分鐘熱度。',
          zhCN: '学习不要只有三分钟热度。'
        }
      },
      {
        id: 'idm5',
        cantonese: 'min5 koeng5 wu4 hau2 / zaan6 jat1 tin1 hek3 jat1 tin1',
        english: 'Living hand-to-mouth / Surviving day by day',
        zhTW: '勉強糊口 / 賺一天吃一天',
        zhCN: '勉强糊口 / 赚一天吃一天',
        example: {
          cantonese: 'taa1 mun4 gwo3 zoek6 min5 koeng5 wu4 hau2 dik1 sang1 wut6.',
          english: 'They are living hand-to-mouth.',
          zhTW: '他們過著勉強糊口的生活。',
          zhCN: '他们过着勉强糊口的生活。'
        }
      },
      {
        id: 'idm6',
        cantonese: 'ping3 ming6 gung1 zok3 / zoeng6 ngau4 jat1 joeng6 gung1 zok3',
        english: 'Hardworking (Working like a carabao)',
        zhTW: '拼命工作 / 像牛一樣工作',
        zhCN: '拼命工作 / 像牛一样工作',
        example: {
          cantonese: 'taa1 / taa1 wai6 liu5 gaa1 ting4 ping3 ming6 gung1 zok3.',
          english: 'He/She works very hard for the family.',
          zhTW: '他/她為了家庭拼命工作。',
          zhCN: '他/她为了家庭拼命工作。'
        }
      },
      {
        id: 'idm7',
        cantonese: 'jung4 ji6 soeng1 cyu3 / tou2 jan4 hei2 fun1',
        english: 'Easy to get along with (Light blood)',
        zhTW: '容易相處 / 討人喜歡',
        zhCN: '容易相处 / 讨人喜欢',
        example: {
          cantonese: 'ngo5 han2 jung4 ji6 wo4 taa1 / taa1 soeng1 cyu3.',
          english: 'I easily get along with him/her.',
          zhTW: '我很容易和他/她相處。',
          zhCN: '我很容易和他/她相处。'
        }
      },
      {
        id: 'idm8',
        cantonese: 'mou5 can1 (gaa1 ting4 zi1 gwong1)',
        english: 'Mother (Light of the home)',
        zhTW: '母親 (家庭之光)',
        zhCN: '母亲 (家庭之光)',
        example: {
          cantonese: 'ngo5 mun4 oi3 gaa1 ting4 dik1 mou5 can1.',
          english: 'We love the mother of the home.',
          zhTW: '我們愛家庭的母親。',
          zhCN: '我们爱家庭的母亲。'
        }
      },
      {
        id: 'idm9',
        cantonese: 'fu6 can1 (gaa1 ting4 dik1 zi1 cyu5)',
        english: 'Father (Pillar of the home)',
        zhTW: '父親 (家庭的支柱)',
        zhCN: '父亲 (家庭的支柱)',
        example: {
          cantonese: 'fu6 can1 han2 kan4 lou4.',
          english: 'The father is hardworking.',
          zhTW: '父親很勤勞。',
          zhCN: '父亲很勤劳。'
        }
      },
      {
        id: 'idm10',
        cantonese: 'man5 gam2 / bo1 lei1 sam1 (joeng4 cung1 pei4)',
        english: 'Sensitive / Easily hurt (Onion-skinned)',
        zhTW: '敏感 / 玻璃心 (洋蔥皮)',
        zhCN: '敏感 / 玻璃心 (洋葱皮)',
        example: {
          cantonese: 'ngo5 dik1 pang4 jau5 han2 man5 gam2.',
          english: 'My friend is very sensitive.',
          zhTW: '我的朋友很敏感。',
          zhCN: '我的朋友很敏感。'
        }
      },
      {
        id: 'idm11',
        cantonese: 'siu2 tau1 / jung4 ji6 tau1 dung1 sai1 (sau2 joeng5)',
        english: 'Thief / Prone to stealing (Itchy hands)',
        zhTW: '小偷 / 容易偷東西 (手癢)',
        zhCN: '小偷 / 容易偷东西 (手痒)',
        example: {
          cantonese: 'siu2 sam1, taa1 / taa1 wui5 tau1 dung1 sai1.',
          english: 'Be careful, he/she is a thief.',
          zhTW: '小心，他/她會偷東西。',
          zhCN: '小心，他/她会偷东西。'
        }
      },
      {
        id: 'idm12',
        cantonese: 'zong1 lung4 zok3 aa2 (wo1 ji5 do2)',
        english: 'Pretending not to hear (Wok ears)',
        zhTW: '裝聾作啞 (鍋耳朵)',
        zhCN: '装聋作哑 (锅耳朵)',
        example: {
          cantonese: 'bat1 jiu3 zong1 lung4 zok3 aa2.',
          english: 'Do not pretend not to hear.',
          zhTW: '不要裝聾作啞。',
          zhCN: '不要装聋作哑。'
        }
      },
      {
        id: 'idm13',
        cantonese: 'bat1 ho2 nang4 faat3 sang1 dik1 si6 (dong1 wu1 aa1 bin3 baak6)',
        english: 'When pigs fly / Highly unlikely (When the crow turns white)',
        zhTW: '不可能發生的事 (當烏鴉變白)',
        zhCN: '不可能发生的事 (当乌鸦变白)',
        example: {
          cantonese: 'dang2 taai3 joeng4 cung4 sai1 bin1 ceot1 loi4 ngo5 zoi3 waan4 nei5 cin2.',
          english: 'I will pay you when pigs fly.',
          zhTW: '等太陽從西邊出來我再還你錢。',
          zhCN: '等太阳从西边出来我再还你钱。'
        }
      },
      {
        id: 'idm14',
        cantonese: 'hong2 koi3 / lok6 jyu1 zo6 jan4 (zoeng1 hoi1 sau2 zoeng2)',
        english: 'Generous (Open-palmed)',
        zhTW: '慷慨 / 樂於助人 (張開手掌)',
        zhCN: '慷慨 / 乐于助人 (张开手掌)',
        example: {
          cantonese: 'taa1 / taa1 deoi3 kung4 jan4 han2 hong2 koi3.',
          english: 'He/She is generous to the poor.',
          zhTW: '他/她對窮人很慷慨。',
          zhCN: '他/她对穷人很慷慨。'
        }
      },
      {
        id: 'idm15',
        cantonese: 'hau5 ngaan4 mou4 ci2 (lim5 pei4 hau5)',
        english: 'Shameless (Thick-faced)',
        zhTW: '厚顏無恥 (臉皮厚)',
        zhCN: '厚颜无耻 (脸皮厚)',
        example: {
          cantonese: 'taa1 / taa1 jau6 loi4 ze3 cin2, zan1 si6 hau5 ngaan4 mou4 ci2.',
          english: 'He/She is shameless to borrow money again.',
          zhTW: '他/她又來借錢，真是厚顏無恥。',
          zhCN: '他/她又来借钱，真是厚颜无耻。'
        }
      }
    ]
  },
  {
    id: 'hotel',
    title: 'Hotel & Accommodation',
    titleKey: 'topics.hotel',
    group: 'travel',
    groupKey: 'groups.travel',
    cards: [
      {
        id: 'htl1',
        cantonese: 'zau2 dim3 zoi6 naa5 leoi5?',
        english: 'Where is the hotel?',
        zhTW: '酒店在哪裡？',
        zhCN: '酒店在哪里？',
        example: {
          cantonese: 'ceng2 man6 zau2 dim3 zoi6 naa5 leoi5?',
          english: 'Where is the hotel (polite)?',
          zhTW: '請問酒店在哪裡？',
          zhCN: '请问酒店在哪里？'
        }
      },
      {
        id: 'htl2',
        cantonese: 'ngo5 jiu3 ze5 go3',
        english: 'I will take it',
        zhTW: '我要這個',
        zhCN: '我要这个',
        example: {
          cantonese: 'hou2 dik1, ngo5 jiu3 ze5 go3.',
          english: 'OK, I\'ll take it.',
          zhTW: '好的，我要這個。',
          zhCN: '好的，我要这个。'
        }
      },
      {
        id: 'htl3',
        cantonese: 'ngo5 zoeng1 ting4 lau4',
        english: 'I will stay',
        zhTW: '我將停留',
        zhCN: '我将停留',
        example: {
          cantonese: 'ngo5 wui5 zyu6 loeng5 go3 maan5 soeng6.',
          english: 'I will stay for two nights.',
          zhTW: '我會住兩個晚上。',
          zhCN: '我会住两个晚上。'
        }
      },
      {
        id: 'htl4',
        cantonese: 'jau5 bou2 him2 soeng1 maa1?',
        english: 'Do you have a safe?',
        zhTW: '有保險箱嗎？',
        zhCN: '有保险箱吗？',
        example: {
          cantonese: 'ceng2 man6 nei5 mun4 jau5 bou2 him2 soeng1 maa1?',
          english: 'Do you have a safe (polite)?',
          zhTW: '請問你們有保險箱嗎？',
          zhCN: '请问你们有保险箱吗？'
        }
      },
      {
        id: 'htl5',
        cantonese: 'baau1 ham4 zou2 caan1 maa1?',
        english: 'Is breakfast included?',
        zhTW: '包含早餐嗎？',
        zhCN: '包含早餐吗？',
        example: {
          cantonese: 'ceng2 man6 baau1 ham4 zou2 caan1 maa1?',
          english: 'Is breakfast included (polite)?',
          zhTW: '請問包含早餐嗎？',
          zhCN: '请问包含早餐吗？'
        }
      },
      {
        id: 'htl6',
        cantonese: 'ceng2 daa2 sou3 fong4 gaan1',
        english: 'Please clean the room',
        zhTW: '請打掃房間',
        zhCN: '请打扫房间',
        example: {
          cantonese: 'ceng2 daa2 sou3 ngo5 dik1 fong4 gaan1.',
          english: 'Please clean my room.',
          zhTW: '請打掃我的房間。',
          zhCN: '请打扫我的房间。'
        }
      }
    ]
  },
  {
    id: 'airport',
    title: 'Airport & Flights',
    titleKey: 'topics.airport',
    group: 'travel',
    groupKey: 'groups.travel',
    cards: [
      {
        id: 'air1',
        cantonese: 'gei1 coeng4',
        english: 'Airport',
        zhTW: '機場',
        zhCN: '机场',
        example: {
          cantonese: 'gei1 coeng4 zoi6 naa5 leoi5?',
          english: 'Where is the airport?',
          zhTW: '機場在哪裡？',
          zhCN: '机场在哪里？'
        }
      },
      {
        id: 'air2',
        cantonese: 'fei1 gei1',
        english: 'Airplane',
        zhTW: '飛機',
        zhCN: '飞机',
        example: {
          cantonese: 'fei1 gei1 han2 daai6.',
          english: 'The airplane is big.',
          zhTW: '飛機很大。',
          zhCN: '飞机很大。'
        }
      },
      {
        id: 'air3',
        cantonese: 'hang4 lei5',
        english: 'Luggage / Baggage',
        zhTW: '行李',
        zhCN: '行李',
        example: {
          cantonese: 'ze5 si6 ngo5 dik1 hang4 lei5.',
          english: 'This is my luggage.',
          zhTW: '這是我的行李。',
          zhCN: '这是我的行李。'
        }
      },
      {
        id: 'air4',
        cantonese: 'gei1 piu3 / piu3',
        english: 'Ticket',
        zhTW: '機票 / 票',
        zhCN: '机票 / 票',
        example: {
          cantonese: 'nei5 dik1 gei1 piu3 zoi6 naa5 leoi5?',
          english: 'Where is your ticket?',
          zhTW: '你的機票在哪裡？',
          zhCN: '你的机票在哪里？'
        }
      },
      {
        id: 'air5',
        cantonese: 'wu6 ziu3',
        english: 'Passport',
        zhTW: '護照',
        zhCN: '护照',
        example: {
          cantonese: 'ngo5 seoi1 jiu3 nei5 dik1 wu6 ziu3.',
          english: 'I need your passport.',
          zhTW: '我需要你的護照。',
          zhCN: '我需要你的护照。'
        }
      }
    ]
  },
  {
    id: 'directions',
    title: 'Directions & Navigation',
    titleKey: 'topics.directions',
    group: 'travel',
    groupKey: 'groups.travel',
    cards: [
      {
        id: 'dir1',
        cantonese: 'zam2 mo1 heoi3...?',
        english: 'How to go to...?',
        zhTW: '怎麼去...？',
        zhCN: '怎么去...？',
        example: {
          cantonese: 'zam2 mo1 heoi3 zau2 dim3?',
          english: 'How to go to the hotel?',
          zhTW: '怎麼去酒店？',
          zhCN: '怎么去酒店？'
        }
      },
      {
        id: 'dir2',
        cantonese: 'jyun5 maa1?',
        english: 'Is it far?',
        zhTW: '遠嗎？',
        zhCN: '远吗？',
        example: {
          cantonese: 'gei1 coeng4 jyun5 maa1?',
          english: 'Is the airport far?',
          zhTW: '機場遠嗎？',
          zhCN: '机场远吗？'
        }
      },
      {
        id: 'dir3',
        cantonese: 'han2 gan6',
        english: 'It is near',
        zhTW: '很近',
        zhCN: '很近',
        example: {
          cantonese: 'kau3 mat6 zung1 sam1 han2 gan6.',
          english: 'The mall is near.',
          zhTW: '購物中心很近。',
          zhCN: '购物中心很近。'
        }
      },
      {
        id: 'dir4',
        cantonese: 'zyun3 waan1',
        english: 'Turn',
        zhTW: '轉彎',
        zhCN: '转弯',
        example: {
          cantonese: 'hoeng3 jau6 zyun2.',
          english: 'Turn right.',
          zhTW: '向右轉。',
          zhCN: '向右转。'
        }
      },
      {
        id: 'dir5',
        cantonese: 'zik6 zau2',
        english: 'Just go straight',
        zhTW: '直走',
        zhCN: '直走',
        example: {
          cantonese: 'ceng2 zik6 zau2.',
          english: 'Just go straight (polite).',
          zhTW: '請直走。',
          zhCN: '请直走。'
        }
      }
    ]
  },
  {
    id: 'sightseeing',
    title: 'Sightseeing & Activities',
    titleKey: 'topics.sightseeing',
    group: 'travel',
    groupKey: 'groups.travel',
    cards: [
      {
        id: 'see1',
        cantonese: 'kwaang3 kwaang3 / gun1 gwong1',
        english: 'To stroll / Sightsee',
        zhTW: '逛逛 / 觀光',
        zhCN: '逛逛 / 观光',
        example: {
          cantonese: 'ngo5 soeng2 heoi3 kwaang3 kwaang3.',
          english: 'I want to stroll/sightsee.',
          zhTW: '我想去逛逛。',
          zhCN: '我想去逛逛。'
        }
      },
      {
        id: 'see2',
        cantonese: 'mei5 lai6',
        english: 'Beautiful',
        zhTW: '美麗',
        zhCN: '美丽',
        example: {
          cantonese: 'fung1 ging2 han2 mei5.',
          english: 'The view is beautiful.',
          zhTW: '風景很美。',
          zhCN: '风景很美。'
        }
      },
      {
        id: 'see3',
        cantonese: 'ziu3 pin2',
        english: 'Photo / Picture',
        zhTW: '照片',
        zhCN: '照片',
        example: {
          cantonese: 'ho2 ji5 paak3 ziu3 maa1?',
          english: 'Can I take a picture?',
          zhTW: '可以拍照嗎？',
          zhCN: '可以拍照吗？'
        }
      },
      {
        id: 'see4',
        cantonese: 'hoi1 fong3 / jing4 jip6',
        english: 'Open',
        zhTW: '開放 / 營業',
        zhCN: '开放 / 营业',
        example: {
          cantonese: 'bok3 mat6 gun2 jau5 hoi1 fong3 maa1?',
          english: 'Is the museum open?',
          zhTW: '博物館有開放嗎？',
          zhCN: '博物馆有开放吗？'
        }
      },
      {
        id: 'see5',
        cantonese: 'gwaan1 bai3 / jau1 sik1',
        english: 'Closed',
        zhTW: '關閉 / 休息',
        zhCN: '关闭 / 休息',
        example: {
          cantonese: 'taa1 mun4 ji5 ging1 jau1 sik1 liu5.',
          english: 'They are already closed.',
          zhTW: '他們已經休息了。',
          zhCN: '他们已经休息了。'
        }
      }
    ]
  },
  {
    id: 'immigration',
    title: 'Immigration & Customs',
    titleKey: 'topics.immigration',
    group: 'travel',
    groupKey: 'groups.travel',
    cards: [
      {
        id: 'imm1',
        cantonese: 'wu6 ziu3',
        english: 'Passport',
        zhTW: '護照',
        zhCN: '护照',
        example: {
          cantonese: 'ceng2 ceot1 si6 nei5 dik1 wu6 ziu3.',
          english: 'Let me see your passport.',
          zhTW: '請出示你的護照。',
          zhCN: '请出示你的护照。'
        }
      },
      {
        id: 'imm2',
        cantonese: 'cim1 zing3',
        english: 'Visa',
        zhTW: '簽證',
        zhCN: '签证',
        example: {
          cantonese: 'nei5 seoi1 jiu3 cim1 zing3 maa1?',
          english: 'Do you need a visa?',
          zhTW: '你需要簽證嗎？',
          zhCN: '你需要签证吗？'
        }
      },
      {
        id: 'imm3',
        cantonese: 'jau4 haak3',
        english: 'Tourist',
        zhTW: '遊客',
        zhCN: '游客',
        example: {
          cantonese: 'ngo5 zi2 si6 ze2 leoi5 dik1 jau4 haak3.',
          english: 'I am just a tourist here.',
          zhTW: '我只是這裡的遊客。',
          zhCN: '我只是这里的游客。'
        }
      },
      {
        id: 'imm4',
        cantonese: 'san1 bou3',
        english: 'Declaration',
        zhTW: '申報',
        zhCN: '申报',
        example: {
          cantonese: 'nei5 jau5 seoi1 jiu3 san1 bou3 dik1 maa1?',
          english: 'Do you have anything to declare?',
          zhTW: '你有需要申報的嗎？',
          zhCN: '你有需要申报的吗？'
        }
      },
      {
        id: 'imm5',
        cantonese: 'han2 gau2 / ting4 lau4 si4 gaan3',
        english: 'Long time / Duration',
        zhTW: '很久 / 停留時間',
        zhCN: '很久 / 停留时间',
        example: {
          cantonese: 'nei5 wui5 zoi6 ze2 leoi5 ting4 lau4 do1 gau2?',
          english: 'How long will you stay here?',
          zhTW: '你會在這裡停留多久？',
          zhCN: '你会在这里停留多久？'
        }
      }
    ]
  },
  {
    id: 'beach-resort',
    title: 'Beach & Resort',
    titleKey: 'topics.beach-resort',
    group: 'travel',
    groupKey: 'groups.travel',
    cards: [
      {
        id: 'bch1',
        cantonese: 'hoi2 / saa1 taan1',
        english: 'Sea / Ocean / Beach',
        zhTW: '海 / 沙灘',
        zhCN: '海 / 沙滩',
        example: {
          cantonese: 'ngo5 mun4 heoi3 hoi2 bin1 baa6.',
          english: 'Let\'s go to the beach.',
          zhTW: '我們去海邊吧。',
          zhCN: '我们去海边吧。'
        }
      },
      {
        id: 'bch2',
        cantonese: 'saa1',
        english: 'Sand',
        zhTW: '沙',
        zhCN: '沙',
        example: {
          cantonese: 'ze2 leoi5 dik1 saa1 si6 baak6 sik1 dik1.',
          english: 'The sand here is white.',
          zhTW: '這裡的沙是白色的。',
          zhCN: '这里的沙是白色的。'
        }
      },
      {
        id: 'bch3',
        cantonese: 'jau4 wing6',
        english: 'To swim',
        zhTW: '游泳',
        zhCN: '游泳',
        example: {
          cantonese: 'nei5 wui5 jau4 wing6 maa1?',
          english: 'Do you know how to swim?',
          zhTW: '你會游泳嗎？',
          zhCN: '你会游泳吗？'
        }
      },
      {
        id: 'bch4',
        cantonese: 'taai3 joeng4',
        english: 'Sun',
        zhTW: '太陽',
        zhCN: '太阳',
        example: {
          cantonese: 'gam1 tin1 taai3 joeng4 han2 daai6.',
          english: 'The sun is hot today.',
          zhTW: '今天太陽很大。',
          zhCN: '今天太阳很大。'
        }
      },
      {
        id: 'bch5',
        cantonese: 'syun4',
        english: 'Boat',
        zhTW: '船',
        zhCN: '船',
        example: {
          cantonese: 'ngo5 mun4 wui5 daap3 syun4.',
          english: 'We will ride a boat.',
          zhTW: '我們會搭船。',
          zhCN: '我们会搭船。'
        }
      }
    ]
  },
  {
    id: 'shopping-souvenirs',
    title: 'Shopping & Souvenirs',
    titleKey: 'topics.shopping-souvenirs',
    group: 'travel',
    groupKey: 'groups.travel',
    cards: [
      {
        id: 'shp1',
        cantonese: 'bun6 sau2 lai5',
        english: 'Souvenir / Gift (brought back)',
        zhTW: '伴手禮',
        zhCN: '伴手礼',
        example: {
          cantonese: 'ngo5 jiu3 maai5 bun6 sau2 lai5.',
          english: 'I will buy souvenirs.',
          zhTW: '我要買伴手禮。',
          zhCN: '我要买伴手礼。'
        }
      },
      {
        id: 'shp2',
        cantonese: 'si5 coeng4',
        english: 'Market',
        zhTW: '市場',
        zhCN: '市场',
        example: {
          cantonese: 'ngo5 mun4 heoi3 si5 coeng4 baa6.',
          english: 'Let\'s go to the market.',
          zhTW: '我們去市場吧。',
          zhCN: '我们去市场吧。'
        }
      },
      {
        id: 'shp3',
        cantonese: 'maai5',
        english: 'Buy',
        zhTW: '買',
        zhCN: '买',
        example: {
          cantonese: 'ngo5 soeng2 maai5 ze5 go3.',
          english: 'I want to buy this.',
          zhTW: '我想買這個。',
          zhCN: '我想买这个。'
        }
      },
      {
        id: 'shp4',
        cantonese: 'zit3 kau3',
        english: 'Discount',
        zhTW: '折扣',
        zhCN: '折扣',
        example: {
          cantonese: 'ho2 ji5 daa2 zit3 maa1?',
          english: 'Can I get a discount?',
          zhTW: '可以打折嗎？',
          zhCN: '可以打折吗？'
        }
      },
      {
        id: 'shp5',
        cantonese: 'zaau2 ling4',
        english: 'Change (money)',
        zhTW: '找零',
        zhCN: '找零',
        example: {
          cantonese: 'ze5 si6 nei5 dik1 zaau2 ling4.',
          english: 'Here is your change.',
          zhTW: '這是你的找零。',
          zhCN: '这是你的找零。'
        }
      }
    ]
  },
  {
    id: 'booking-reservations',
    title: 'Booking & Reservations',
    titleKey: 'topics.booking-reservations',
    group: 'travel',
    groupKey: 'groups.travel',
    cards: [
      {
        id: 'bkg1',
        cantonese: 'jyu6 ding6',
        english: 'Reservation',
        zhTW: '預訂',
        zhCN: '预订',
        example: {
          cantonese: 'ngo5 jau5 jyu6 ding6.',
          english: 'I have a reservation.',
          zhTW: '我有預訂。',
          zhCN: '我有预订。'
        }
      },
      {
        id: 'bkg2',
        cantonese: 'ming4 zi6',
        english: 'Name',
        zhTW: '名字',
        zhCN: '名字',
        example: {
          cantonese: 'nei5 dik1 ming4 zi6 si6 sam6 mo1?',
          english: 'What is your name?',
          zhTW: '你的名字是什麼？',
          zhCN: '你的名字是什么？'
        }
      },
      {
        id: 'bkg3',
        cantonese: 'fong4 gaan1',
        english: 'Room',
        zhTW: '房間',
        zhCN: '房间',
        example: {
          cantonese: 'ngo5 soeng2 jiu3 jat1 gaan1 daai6 fong4 gaan1.',
          english: 'I want a big room.',
          zhTW: '我想要一間大房間。',
          zhCN: '我想要一间大房间。'
        }
      },
      {
        id: 'bkg4',
        cantonese: 'fu6 fun2',
        english: 'Payment',
        zhTW: '付款',
        zhCN: '付款',
        example: {
          cantonese: 'zoi6 naa5 leoi5 fu6 fun2?',
          english: 'Where is the payment?',
          zhTW: '在哪裡付款？',
          zhCN: '在哪里付款？'
        }
      },
      {
        id: 'bkg5',
        cantonese: 'ceoi2 siu1',
        english: 'To cancel',
        zhTW: '取消',
        zhCN: '取消',
        example: {
          cantonese: 'ngo5 soeng2 ceoi2 siu1 ze5 go3.',
          english: 'I want to cancel this.',
          zhTW: '我想取消這個。',
          zhCN: '我想取消这个。'
        }
      }
    ]
  },
  {
    id: 'currency-exchange',
    title: 'Currency Exchange',
    titleKey: 'topics.currency-exchange',
    group: 'travel',
    groupKey: 'groups.travel',
    cards: [
      {
        id: 'cur1',
        cantonese: 'wui6 leot2 / deoi3 wun6',
        english: 'Exchange rate / Exchange',
        zhTW: '匯率 / 兌換',
        zhCN: '汇率 / 兑换',
        example: {
          cantonese: 'naa5 leoi5 jau5 wun6 cin2 dik1 dei6 fong1?',
          english: 'Where is the money exchange?',
          zhTW: '哪裡有換錢的地方？',
          zhCN: '哪里有换钱的地方？'
        }
      },
      {
        id: 'cur2',
        cantonese: 'cin2',
        english: 'Money',
        zhTW: '錢',
        zhCN: '钱',
        example: {
          cantonese: 'ngo5 mut6 jau5 cin2.',
          english: 'I don\'t have money.',
          zhTW: '我沒有錢。',
          zhCN: '我没有钱。'
        }
      },
      {
        id: 'cur3',
        cantonese: 'mei5 jyun4',
        english: 'Dollar',
        zhTW: '美元',
        zhCN: '美元',
        example: {
          cantonese: 'nei5 mun4 sau1 mei5 jyun4 maa1?',
          english: 'Do you accept dollars?',
          zhTW: '你們收美元嗎？',
          zhCN: '你们收美元吗？'
        }
      },
      {
        id: 'cur4',
        cantonese: 'pei1 sok3 (fei1 leot6 ban1 fo3 bai6)',
        english: 'Peso (Philippine currency)',
        zhTW: '披索 (菲律賓貨幣)',
        zhCN: '披索 (菲律宾货币)',
        example: {
          cantonese: 'ze5 si6 jat1 baak3 pei1 sok3.',
          english: 'This is one hundred pesos.',
          zhTW: '這是一百披索。',
          zhCN: '这是一百披索。'
        }
      },
      {
        id: 'cur5',
        cantonese: 'ngaang6 bai6 / ling4 cin4',
        english: 'Coins / Small change',
        zhTW: '硬幣 / 零錢',
        zhCN: '硬币 / 零钱',
        example: {
          cantonese: 'nei5 jau5 ling4 cin4 maa1?',
          english: 'Do you have small change?',
          zhTW: '你有零錢嗎？',
          zhCN: '你有零钱吗？'
        }
      }
    ]
  },
  {
    id: 'clothes-accessories',
    title: 'Clothes & Accessories',
    titleKey: 'topics.clothes-accessories',
    group: 'daily_life',
    groupKey: 'groups.daily_life',
    cards: [
      {
        id: 'cloth1',
        cantonese: 'ji1 fuk6',
        english: 'Clothes',
        zhTW: '衣服',
        zhCN: '衣服',
        example: {
          cantonese: 'ngo5 dik1 ji1 fuk6 si6 san1 dik1.',
          english: 'My clothes are new.',
          zhTW: '我的衣服是新的。',
          zhCN: '我的衣服是新的。'
        }
      },
      {
        id: 'cloth2',
        cantonese: 'haai4 zi2',
        english: 'Shoes',
        zhTW: '鞋子',
        zhCN: '鞋子',
        example: {
          cantonese: 'taa1 / taa1 dik1 haai4 zi2 han2 daai6.',
          english: 'His/her shoes are big.',
          zhTW: '他/她的鞋子很大。',
          zhCN: '他/她的鞋子很大。'
        }
      },
      {
        id: 'cloth3',
        cantonese: 'mou2 zi2',
        english: 'Hat',
        zhTW: '帽子',
        zhCN: '帽子',
        example: {
          cantonese: 'daai3 soeng6 mou2 zi2.',
          english: 'Wear the hat.',
          zhTW: '戴上帽子。',
          zhCN: '戴上帽子。'
        }
      },
      {
        id: 'cloth4',
        cantonese: 'ngaan5 geng2 / geng3 zi2',
        english: 'Glasses / Mirror',
        zhTW: '眼鏡 / 鏡子',
        zhCN: '眼镜 / 镜子',
        example: {
          cantonese: 'ngo5 dik1 ngaan5 geng2 zoi6 naa5 leoi5?',
          english: 'Where are my glasses?',
          zhTW: '我的眼鏡在哪裡？',
          zhCN: '我的眼镜在哪里？'
        }
      },
      {
        id: 'cloth5',
        cantonese: 'fu3 zi2',
        english: 'Pants',
        zhTW: '褲子',
        zhCN: '裤子',
        example: {
          cantonese: 'fu3 zi2 han2 coeng4.',
          english: 'The pants are long.',
          zhTW: '褲子很長。',
          zhCN: '裤子很长。'
        }
      }
    ]
  },
  {
    id: 'professions',
    title: 'Professions',
    titleKey: 'topics.professions',
    group: 'daily_life',
    groupKey: 'groups.daily_life',
    cards: [
      {
        id: 'prof1',
        cantonese: 'lou5 si1',
        english: 'Teacher',
        zhTW: '老師',
        zhCN: '老师',
        example: {
          cantonese: 'ngo5 mun4 dik1 lou5 si1 han2 hou2.',
          english: 'Our teacher is kind.',
          zhTW: '我們的老師很好。',
          zhCN: '我们的老师很好。'
        }
      },
      {
        id: 'prof2',
        cantonese: 'ji1 sang1',
        english: 'Doctor',
        zhTW: '醫生',
        zhCN: '医生',
        example: {
          cantonese: 'ngo5 seoi1 jiu3 ji1 sang1.',
          english: 'I need a doctor.',
          zhTW: '我需要醫生。',
          zhCN: '我需要医生。'
        }
      },
      {
        id: 'prof3',
        cantonese: 'ging2 caat3',
        english: 'Police',
        zhTW: '警察',
        zhCN: '警察',
        example: {
          cantonese: 'giu3 ging2 caat3.',
          english: 'Call the police.',
          zhTW: '叫警察。',
          zhCN: '叫警察。'
        }
      },
      {
        id: 'prof4',
        cantonese: 'wu6 si6',
        english: 'Nurse',
        zhTW: '護士',
        zhCN: '护士',
        example: {
          cantonese: 'wu6 si6 han2 kan4 lou4.',
          english: 'The nurse is hardworking.',
          zhTW: '護士很勤勞。',
          zhCN: '护士很勤劳。'
        }
      },
      {
        id: 'prof5',
        cantonese: 'gung1 cing4 si1',
        english: 'Engineer',
        zhTW: '工程師',
        zhCN: '工程师',
        example: {
          cantonese: 'taa1 si6 jat1 ming4 gung1 cing4 si1.',
          english: 'He is an engineer.',
          zhTW: '他是一名工程師。',
          zhCN: '他是一名工程师。'
        }
      }
    ]
  },
  {
    id: 'nature',
    title: 'Nature',
    titleKey: 'topics.nature',
    group: 'basics',
    groupKey: 'groups.basics',
    cards: [
      {
        id: 'nat1',
        cantonese: 'saan1',
        english: 'Mountain',
        zhTW: '山',
        zhCN: '山',
        example: {
          cantonese: 'saan1 han2 gou1.',
          english: 'The mountain is high.',
          zhTW: '山很高。',
          zhCN: '山很高。'
        }
      },
      {
        id: 'nat2',
        cantonese: 'ho4 lau4',
        english: 'River',
        zhTW: '河流',
        zhCN: '河流',
        example: {
          cantonese: 'ho4 seoi2 han2 cing1 cit3.',
          english: 'The river is clear.',
          zhTW: '河水很清澈。',
          zhCN: '河水很清澈。'
        }
      },
      {
        id: 'nat3',
        cantonese: 'hoi2',
        english: 'Sea / Ocean',
        zhTW: '海',
        zhCN: '海',
        example: {
          cantonese: 'ngo5 mun4 heoi3 hoi2 bin1 baa6.',
          english: 'Let\'s go to the sea.',
          zhTW: '我們去海邊吧。',
          zhCN: '我们去海边吧。'
        }
      },
      {
        id: 'nat4',
        cantonese: 'syu6',
        english: 'Tree',
        zhTW: '樹',
        zhCN: '树',
        example: {
          cantonese: 'ze5 fo2 syu6 han2 daai6.',
          english: 'The tree is big.',
          zhTW: '這棵樹很大。',
          zhCN: '这棵树很大。'
        }
      },
      {
        id: 'nat5',
        cantonese: 'faa1',
        english: 'Flower',
        zhTW: '花',
        zhCN: '花',
        example: {
          cantonese: 'ze5 do2 faa1 han2 hoeng1.',
          english: 'The flower smells good.',
          zhTW: '這朵花很香。',
          zhCN: '这朵花很香。'
        }
      }
    ]
  },
  {
    id: 'house-rooms',
    title: 'House & Rooms',
    titleKey: 'topics.house-rooms',
    group: 'daily_life',
    groupKey: 'groups.daily_life',
    cards: [
      {
        id: 'hrm1',
        cantonese: 'fong4 zi2',
        english: 'House',
        zhTW: '房子',
        zhCN: '房子',
        example: {
          cantonese: 'ze5 si6 ngo5 mun4 dik1 fong4 zi2.',
          english: 'This is our house.',
          zhTW: '這是我們的房子。',
          zhCN: '这是我们的房子。'
        }
      },
      {
        id: 'hrm2',
        cantonese: 'fong4 gaan1 / ngo6 sat1',
        english: 'Room / Bedroom',
        zhTW: '房間 / 臥室',
        zhCN: '房间 / 卧室',
        example: {
          cantonese: 'fong4 gaan1 han2 gon1 zeng6.',
          english: 'The room is clean.',
          zhTW: '房間很乾淨。',
          zhCN: '房间很干净。'
        }
      },
      {
        id: 'hrm3',
        cantonese: 'cyu4 fong2',
        english: 'Kitchen',
        zhTW: '廚房',
        zhCN: '厨房',
        example: {
          cantonese: 'taa1 / taa1 zing3 zoi6 cyu4 fong2 zou6 faan6.',
          english: 'He/she is cooking in the kitchen.',
          zhTW: '他/她正在廚房做飯。',
          zhCN: '他/她正在厨房做饭。'
        }
      },
      {
        id: 'hrm4',
        cantonese: 'juk6 sat1 / ci3 so2',
        english: 'Bathroom',
        zhTW: '浴室 / 廁所',
        zhCN: '浴室 / 厕所',
        example: {
          cantonese: 'juk6 sat1 zoi6 naa5 leoi5?',
          english: 'Where is the bathroom?',
          zhTW: '浴室在哪裡？',
          zhCN: '浴室在哪里？'
        }
      },
      {
        id: 'hrm5',
        cantonese: 'haak3 teng1',
        english: 'Living Room',
        zhTW: '客廳',
        zhCN: '客厅',
        example: {
          cantonese: 'ngo5 mun4 zoi6 haak3 teng1 hon3 din6 si6.',
          english: 'We watched TV in the living room.',
          zhTW: '我們在客廳看電視。',
          zhCN: '我们在客厅看电视。'
        }
      }
    ]
  },
  {
    id: 'action-verbs',
    title: 'Action Verbs',
    titleKey: 'topics.action-verbs',
    group: 'grammar',
    groupKey: 'groups.grammar',
    cards: [
      {
        id: 'act1',
        cantonese: 'hek3',
        english: 'Eat',
        zhTW: '吃',
        zhCN: '吃',
        example: {
          cantonese: 'nei5 hek3 liu5 maa1?',
          english: 'Have you eaten?',
          zhTW: '你吃了嗎？',
          zhCN: '你吃了吗？'
        }
      },
      {
        id: 'act2',
        cantonese: 'seoi6 gaau3',
        english: 'Sleep',
        zhTW: '睡覺',
        zhCN: '睡觉',
        example: {
          cantonese: 'ngo5 jin6 zoi6 soeng2 seoi6 gaau3 liu5.',
          english: 'I want to sleep now.',
          zhTW: '我現在想睡覺了。',
          zhCN: '我现在想睡觉了。'
        }
      },
      {
        id: 'act3',
        cantonese: 'paau2',
        english: 'Run',
        zhTW: '跑',
        zhCN: '跑',
        example: {
          cantonese: 'taa1 / taa1 paau2 dak1 han2 faai3.',
          english: 'He/she ran fast.',
          zhTW: '他/她跑得很快。',
          zhCN: '他/她跑得很快。'
        }
      },
      {
        id: 'act4',
        cantonese: 'zau2',
        english: 'Walk',
        zhTW: '走',
        zhCN: '走',
        example: {
          cantonese: 'ngo5 mun4 zoi6 gung1 jyun2 saan3 bou6 baa6.',
          english: 'Let\'s walk in the park.',
          zhTW: '我們在公園散步吧。',
          zhCN: '我们在公园散步吧。'
        }
      },
      {
        id: 'act5',
        cantonese: 'duk6 / hon3 (syu1)',
        english: 'Read',
        zhTW: '讀 / 看 (書)',
        zhCN: '读 / 看 (书)',
        example: {
          cantonese: 'hon3 syu1 baa6.',
          english: 'Read a book.',
          zhTW: '看書吧。',
          zhCN: '看书吧。'
        }
      }
    ]
  }

,  {
    id: 'fruits',
    title: 'Fruits',
    titleKey: 'topics.fruits',
    group: 'basics',
    groupKey: 'groups.basics',
    cards: [
      {
        id: 'fr1',
        cantonese: 'ping4 gwo2',
        english: 'Apple',
        zhTW: '蘋果',
        zhCN: '苹果',
        example: {
          cantonese: 'ping4 gwo2 han2 tim4.',
          english: 'The apple is sweet.',
          zhTW: '蘋果很甜。',
          zhCN: '苹果很甜。'
        }
      },
      {
        id: 'fr2',
        cantonese: 'hoeng1 ziu1',
        english: 'Banana',
        zhTW: '香蕉',
        zhCN: '香蕉',
        example: {
          cantonese: 'taa1 / taa1 hek3 liu5 jat1 gan1 hoeng1 ziu1.',
          english: 'He/She ate a banana.',
          zhTW: '他/她吃了一根香蕉。',
          zhCN: '他/她吃了一根香蕉。'
        }
      },
      {
        id: 'fr3',
        cantonese: 'mong1 gwo2',
        english: 'Mango',
        zhTW: '芒果',
        zhCN: '芒果',
        example: {
          cantonese: 'mong1 gwo2 si6 ngo5 dik1 zeoi3 oi3.',
          english: 'Mango is my favorite.',
          zhTW: '芒果是我的最愛。',
          zhCN: '芒果是我的最爱。'
        }
      },
      {
        id: 'fr4',
        cantonese: 'fung6 lei4',
        english: 'Pineapple',
        zhTW: '鳳梨',
        zhCN: '菠萝',
        example: {
          cantonese: 'fung6 lei4 han2 syun1.',
          english: 'The pineapple is sour.',
          zhTW: '鳳梨很酸。',
          zhCN: '菠萝很酸。'
        }
      },
      {
        id: 'fr5',
        cantonese: 'sai1 gwaa1',
        english: 'Watermelon',
        zhTW: '西瓜',
        zhCN: '西瓜',
        example: {
          cantonese: 'haa6 tin1 hek3 sai1 gwaa1 han2 hou2 hek3.',
          english: 'Watermelon is delicious in summer.',
          zhTW: '夏天吃西瓜很好吃。',
          zhCN: '夏天吃西瓜很好吃。'
        }
      }
    ]
  },
  {
    id: 'vegetables',
    title: 'Vegetables',
    titleKey: 'topics.vegetables',
    group: 'basics',
    groupKey: 'groups.basics',
    cards: [
      {
        id: 'veg1',
        cantonese: 'faan1 ke2',
        english: 'Tomato',
        zhTW: '番茄',
        zhCN: '番茄',
        example: {
          cantonese: 'faan1 ke2 si6 hung4 sik1 dik1.',
          english: 'The tomato is red.',
          zhTW: '番茄是紅色的。',
          zhCN: '番茄是红色的。'
        }
      },
      {
        id: 'veg2',
        cantonese: 'joeng4 cung1',
        english: 'Onion',
        zhTW: '洋蔥',
        zhCN: '洋葱',
        example: {
          cantonese: 'ngo5 maai5 liu5 joeng4 cung1.',
          english: 'I bought onions.',
          zhTW: '我買了洋蔥。',
          zhCN: '我买了洋葱。'
        }
      },
      {
        id: 'veg3',
        cantonese: 'daai6 syun3',
        english: 'Garlic',
        zhTW: '大蒜',
        zhCN: '大蒜',
        example: {
          cantonese: 'ngo5 mun4 seoi1 jiu3 daai6 syun3.',
          english: 'We need garlic.',
          zhTW: '我們需要大蒜。',
          zhCN: '我们需要大蒜。'
        }
      },
      {
        id: 'veg4',
        cantonese: 'maa5 ling4 syu4',
        english: 'Potato',
        zhTW: '馬鈴薯',
        zhCN: '土豆',
        example: {
          cantonese: 'ngo5 hei2 fun1 zaa3 maa5 ling4 syu4.',
          english: 'I like fried potatoes.',
          zhTW: '我喜歡炸馬鈴薯。',
          zhCN: '我喜欢炸土豆。'
        }
      },
      {
        id: 'veg5',
        cantonese: 'ke2 zi2',
        english: 'Eggplant',
        zhTW: '茄子',
        zhCN: '茄子',
        example: {
          cantonese: 'ke2 zi2 zin1 daan2 han2 hou2 hek3.',
          english: 'Eggplant omelet is delicious.',
          zhTW: '茄子煎蛋很好吃。',
          zhCN: '茄子煎蛋很好吃。'
        }
      }
    ]
  },
  {
    id: 'shapes',
    title: 'Shapes',
    titleKey: 'topics.shapes',
    group: 'basics',
    groupKey: 'groups.basics',
    cards: [
      {
        id: 'shape1',
        cantonese: 'jyun4 jing4',
        english: 'Circle / Round',
        zhTW: '圓形',
        zhCN: '圆形',
        example: {
          cantonese: 'jyut6 loeng6 si6 jyun4 dik1.',
          english: 'The moon is round.',
          zhTW: '月亮是圓的。',
          zhCN: '月亮是圆的。'
        }
      },
      {
        id: 'shape2',
        cantonese: 'zing3 fong1 jing4',
        english: 'Square',
        zhTW: '正方形',
        zhCN: '正方形',
        example: {
          cantonese: 'ze5 go3 hap6 zi2 si6 zing3 fong1 jing4 dik1.',
          english: 'The box is square.',
          zhTW: '這個盒子是正方形的。',
          zhCN: '这个盒子是正方形的。'
        }
      },
      {
        id: 'shape3',
        cantonese: 'saam1 gok3 jing4',
        english: 'Triangle',
        zhTW: '三角形',
        zhCN: '三角形',
        example: {
          cantonese: 'uk1 deng2 si6 saam1 gok3 jing4 dik1.',
          english: 'The roof is triangular.',
          zhTW: '屋頂是三角形的。',
          zhCN: '屋顶是三角形的。'
        }
      },
      {
        id: 'shape4',
        cantonese: 'coeng4 fong1 jing4',
        english: 'Rectangle',
        zhTW: '長方形',
        zhCN: '长方形',
        example: {
          cantonese: 'mun4 si6 coeng4 fong1 jing4 dik1.',
          english: 'The door is rectangular.',
          zhTW: '門是長方形的。',
          zhCN: '门是长方形的。'
        }
      },
      {
        id: 'shape5',
        cantonese: 'sing1 sing1',
        english: 'Star',
        zhTW: '星星',
        zhCN: '星星',
        example: {
          cantonese: 'tin1 hung1 jau5 han2 do1 sing1 sing1.',
          english: 'There are many stars in the sky.',
          zhTW: '天空有很多星星。',
          zhCN: '天空有很多星星。'
        }
      }
    ]
  },
  {
    id: 'technology',
    title: 'Technology & Internet',
    titleKey: 'topics.technology',
    group: 'daily_life',
    groupKey: 'groups.daily_life',
    cards: [
      {
        id: 'tech1',
        cantonese: 'din6 nou5',
        english: 'Computer',
        zhTW: '電腦',
        zhCN: '电脑',
        example: {
          cantonese: 'ngo5 dik1 din6 nou5 waai6 liu5.',
          english: 'My computer is broken.',
          zhTW: '我的電腦壞了。',
          zhCN: '我的电脑坏了。'
        }
      },
      {
        id: 'tech2',
        cantonese: 'seon3 sik1',
        english: 'Message',
        zhTW: '訊息',
        zhCN: '信息',
        example: {
          cantonese: 'nei5 jau5 jat1 tiu4 seon3 sik1.',
          english: 'You have a message.',
          zhTW: '你有一條訊息。',
          zhCN: '你有一条信息。'
        }
      },
      {
        id: 'tech3',
        cantonese: 'mong5 zai3 mong5 lou6',
        english: 'Internet',
        zhTW: '網際網路',
        zhCN: '互联网',
        example: {
          cantonese: 'mong5 lou6 han2 maan6.',
          english: 'The internet is slow.',
          zhTW: '網路很慢。',
          zhCN: '网络很慢。'
        }
      },
      {
        id: 'tech4',
        cantonese: 'gin6 pun2',
        english: 'Keyboard',
        zhTW: '鍵盤',
        zhCN: '键盘',
        example: {
          cantonese: 'ngo5 dik1 gin6 pun2 si6 san1 dik1.',
          english: 'My keyboard is new.',
          zhTW: '我的鍵盤是新的。',
          zhCN: '我的键盘是新的。'
        }
      },
      {
        id: 'tech5',
        cantonese: 'jing4 mok6',
        english: 'Screen',
        zhTW: '螢幕',
        zhCN: '屏幕',
        example: {
          cantonese: 'din6 si6 jing4 mok6 han2 daai6.',
          english: 'The TV screen is big.',
          zhTW: '電視螢幕很大。',
          zhCN: '电视屏幕很大。'
        }
      }
    ]
  },
  {
    id: 'sports',
    title: 'Sports & Activities',
    titleKey: 'topics.sports',
    group: 'social',
    groupKey: 'groups.social',
    cards: [
      {
        id: 'spt1',
        cantonese: 'laam4 kau4',
        english: 'Basketball',
        zhTW: '籃球',
        zhCN: '篮球',
        example: {
          cantonese: 'taa1 mun4 zoi6 daa2 laam4 kau4.',
          english: 'They are playing basketball.',
          zhTW: '他們在打籃球。',
          zhCN: '他们在打篮球。'
        }
      },
      {
        id: 'spt2',
        cantonese: 'paau2 bou6',
        english: 'Running',
        zhTW: '跑步',
        zhCN: '跑步',
        example: {
          cantonese: 'taa1 / taa1 hei2 fun1 paau2 bou6.',
          english: 'He/She likes running.',
          zhTW: '他/她喜歡跑步。',
          zhCN: '他/她喜欢跑步。'
        }
      },
      {
        id: 'spt3',
        cantonese: 'jau4 wing6',
        english: 'Swimming',
        zhTW: '游泳',
        zhCN: '游泳',
        example: {
          cantonese: 'ngo5 hei2 fun1 jau4 wing6.',
          english: 'I like swimming.',
          zhTW: '我喜歡游泳。',
          zhCN: '我喜欢游泳。'
        }
      },
      {
        id: 'spt4',
        cantonese: 'kau4',
        english: 'Ball',
        zhTW: '球',
        zhCN: '球',
        example: {
          cantonese: 'baa2 kau4 cyun4 gwo3 loi4.',
          english: 'Pass the ball.',
          zhTW: '把球傳過來。',
          zhCN: '把球传过来。'
        }
      },
      {
        id: 'spt5',
        cantonese: 'kyun4 gik1',
        english: 'Boxing',
        zhTW: '拳擊',
        zhCN: '拳击',
        example: {
          cantonese: 'ngo5 mun4 hon3 liu5 kyun4 gik1 bei2 coi3.',
          english: 'We watched boxing.',
          zhTW: '我們看了拳擊比賽。',
          zhCN: '我们看了拳击比赛。'
        }
      }
    ]
  },
  {
    id: 'prepositions',
    title: 'Positions',
    titleKey: 'topics.prepositions',
    group: 'grammar',
    groupKey: 'groups.grammar',
    cards: [
      {
        id: 'prep1',
        cantonese: 'zoi6 soeng6 min6',
        english: 'On top / Above',
        zhTW: '在上面',
        zhCN: '在上面',
        example: {
          cantonese: 'zoi6 coek3 zi2 soeng6 min6.',
          english: 'It is on top of the table.',
          zhTW: '在桌子上面。',
          zhCN: '在桌子上面。'
        }
      },
      {
        id: 'prep2',
        cantonese: 'zoi6 haa6 min6',
        english: 'Under / Below',
        zhTW: '在下面',
        zhCN: '在下面',
        example: {
          cantonese: 'zoi6 cong4 dai2 haa6.',
          english: 'It is under the bed.',
          zhTW: '在床底下。',
          zhCN: '在床底下。'
        }
      },
      {
        id: 'prep3',
        cantonese: 'zoi6 leoi5 min6',
        english: 'Inside',
        zhTW: '在裡面',
        zhCN: '在里面',
        example: {
          cantonese: 'zeon3 dou3 leoi5 min6.',
          english: 'Go inside.',
          zhTW: '進到裡面。',
          zhCN: '进到里面。'
        }
      },
      {
        id: 'prep4',
        cantonese: 'zoi6 ngoi6 min6',
        english: 'Outside',
        zhTW: '在外面',
        zhCN: '在外面',
        example: {
          cantonese: 'zoi6 ngoi6 min6 dang2.',
          english: 'Wait outside.',
          zhTW: '在外面等。',
          zhCN: '在外面等。'
        }
      },
      {
        id: 'prep5',
        cantonese: 'zoi6 pong4 bin1',
        english: 'Beside',
        zhTW: '在旁邊',
        zhCN: '在旁边',
        example: {
          cantonese: 'zo6 zoi6 ngo5 pong4 bin1.',
          english: 'Sit beside me.',
          zhTW: '坐在我旁邊。',
          zhCN: '坐在我旁边。'
        }
      }
    ]
  }

];

// Pre-calculate flattened list of all cards once at the data level
export const allCards = lessons.flatMap(l => l.cards);
