export interface Flashcard {
  id: string;
  tagalog: string;
  english: string;
  zhTW: string;
  zhCN: string;
  example?: {
    tagalog: string;
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
        tagalog: 'Kumusta?',
        english: 'How are you?',
        zhTW: '你好嗎？',
        zhCN: '你好吗？',
        example: {
          tagalog: 'Kumusta ka na?',
          english: 'How are you now?',
          zhTW: '你現在好嗎？',
          zhCN: '你现在好吗？'
        }
      },
      {
        id: '2',
        tagalog: 'Mabuti',
        english: 'Fine / Good',
        zhTW: '很好',
        zhCN: '很好',
        example: {
          tagalog: 'Mabuti naman ako.',
          english: 'I am fine.',
          zhTW: '我很好。',
          zhCN: '我很好。'
        }
      },
      {
        id: '3',
        tagalog: 'Salamat',
        english: 'Thank you',
        zhTW: '謝謝',
        zhCN: '谢谢',
        example: {
          tagalog: 'Maraming salamat sa tulong.',
          english: 'Many thanks for the help.',
          zhTW: '非常感謝你的幫忙。',
          zhCN: '非常感谢你的帮忙。'
        }
      },
      {
        id: '4',
        tagalog: 'Walang anuman',
        english: 'You\'re welcome',
        zhTW: '不客氣',
        zhCN: '不客气',
        example: {
          tagalog: 'Walang anuman, kaibigan.',
          english: 'You are welcome, friend.',
          zhTW: '不客氣，朋友。',
          zhCN: '不客气，朋友。'
        }
      },
      {
        id: '5',
        tagalog: 'Magandang umaga',
        english: 'Good morning',
        zhTW: '早安',
        zhCN: '早安',
        example: {
          tagalog: 'Magandang umaga sa inyong lahat.',
          english: 'Good morning to all of you.',
          zhTW: '大家早安。',
          zhCN: '大家早安。'
        }
      },
      {
        id: '6',
        tagalog: 'Magandang hapon',
        english: 'Good afternoon',
        zhTW: '午安',
        zhCN: '午安',
        example: {
          tagalog: 'Magandang hapon po.',
          english: 'Good afternoon (polite).',
          zhTW: '午安（禮貌）。',
          zhCN: '午安（礼貌）。'
        }
      },
      {
        id: '7',
        tagalog: 'Magandang gabi',
        english: 'Good evening',
        zhTW: '晚安',
        zhCN: '晚安',
        example: {
          tagalog: 'Magandang gabi, lola.',
          english: 'Good evening, grandma.',
          zhTW: '晚安，奶奶。',
          zhCN: '晚安，奶奶。'
        }
      },
      {
        id: '8',
        tagalog: 'Magandang tanghali',
        english: 'Good noon',
        zhTW: '午安 (中午)',
        zhCN: '午安 (中午)',
        example: {
          tagalog: 'Magandang tanghali sa inyo.',
          english: 'Good noon to you.',
          zhTW: '祝你們中午愉快。',
          zhCN: '祝你们中午愉快。'
        }
      },
      {
        id: '9',
        tagalog: 'Magandang araw',
        english: 'Good day',
        zhTW: '美好的一天',
        zhCN: '美好的一天',
        example: {
          tagalog: 'Magandang araw po.',
          english: 'Good day (polite).',
          zhTW: '祝您有美好的一天。',
          zhCN: '祝您有美好的一天。'
        }
      },
      {
        id: '10',
        tagalog: 'Paalam',
        english: 'Goodbye',
        zhTW: '再見',
        zhCN: '再见',
        example: {
          tagalog: 'Paalam, hanggang sa muli.',
          english: 'Goodbye, until next time.',
          zhTW: '再見，下次見。',
          zhCN: '再见，下次见。'
        }
      },
      {
        id: '11',
        tagalog: 'Tao po',
        english: 'Is anybody home? / Knock knock',
        zhTW: '有人在嗎？',
        zhCN: '有人在吗？',
        example: {
          tagalog: 'Tao po! May tao ba dyan?',
          english: 'Hello! Is anybody there?',
          zhTW: '有人在嗎？那裡有人嗎？',
          zhCN: '有人在吗？那里有人吗？'
        }
      },
      {
        id: '12',
        tagalog: 'Tuloy po kayo',
        english: 'Please come in',
        zhTW: '請進',
        zhCN: '请进',
        example: {
          tagalog: 'Tuloy po kayo sa aming bahay.',
          english: 'Please come in to our house.',
          zhTW: '請進來我們家。',
          zhCN: '请进来我们家。'
        }
      },
      {
        id: 'g13',
        tagalog: 'Ingat',
        english: 'Take care',
        zhTW: '小心 / 保重',
        zhCN: '小心 / 保重',
        example: {
          tagalog: 'Ingat ka sa paglalakbay.',
          english: 'Take care on your journey.',
          zhTW: '旅途小心。',
          zhCN: '旅途小心。'
        }
      },
      {
        id: 'g14',
        tagalog: 'Mabuhay',
        english: 'Long live / Welcome',
        zhTW: '萬歲 / 歡迎',
        zhCN: '万岁 / 欢迎',
        example: {
          tagalog: 'Mabuhay ang Pilipinas!',
          english: 'Long live the Philippines!',
          zhTW: '菲律賓萬歲！',
          zhCN: '菲律宾万岁！'
        }
      },
      {
        id: 'g15',
        tagalog: 'Pasensya na',
        english: 'Sorry / Excuse me',
        zhTW: '對不起 / 抱歉',
        zhCN: '对不起 / 抱歉',
        example: {
          tagalog: 'Pasensya na po, late ako.',
          english: 'Sorry, I am late.',
          zhTW: '對不起，我遲到了。',
          zhCN: '对不起，我迟到了。'
        }
      },
      {
        id: 'g16',
        tagalog: 'Oo / Hindi',
        english: 'Yes / No',
        zhTW: '是 / 不是',
        zhCN: '是 / 不是',
        example: {
          tagalog: 'Oo, pupunta ako. Hindi siya kasama.',
          english: 'Yes, I will go. He/she is not coming.',
          zhTW: '是的，我會去。他/她不來。',
          zhCN: '是的，我会去。他/她不来。'
        }
      },
      {
        id: 'g17',
        tagalog: 'Sige',
        english: 'Okay / Alright / Go ahead',
        zhTW: '好的 / 可以',
        zhCN: '好的 / 可以',
        example: {
          tagalog: 'Sige, kita tayo mamaya.',
          english: 'Alright, see you later.',
          zhTW: '好的，待會見。',
          zhCN: '好的，待会见。'
        }
      },
      {
        id: 'g18',
        tagalog: 'Sandali lang',
        english: 'Just a moment',
        zhTW: '稍等一下',
        zhCN: '稍等一下',
        example: {
          tagalog: 'Sandali lang po, tatawag ako.',
          english: 'Just a moment, I will call.',
          zhTW: '請稍等，我打個電話。',
          zhCN: '请稍等，我打个电话。'
        }
      },
      {
        id: 'g19',
        tagalog: 'Maligayang bati',
        english: 'Congratulations / Happy greetings',
        zhTW: '恭喜 / 祝賀',
        zhCN: '恭喜 / 祝贺',
        example: {
          tagalog: 'Maligayang bati sa iyong kaarawan!',
          english: 'Happy birthday to you!',
          zhTW: '祝你生日快樂！',
          zhCN: '祝你生日快乐！'
        }
      },
      {
        id: 'g20',
        tagalog: 'Hanggang sa muli',
        english: 'Until we meet again',
        zhTW: '後會有期',
        zhCN: '后会有期',
        example: {
          tagalog: 'Paalam na, hanggang sa muli.',
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
        tagalog: 'Isa',
        english: 'One',
        zhTW: '一',
        zhCN: '一',
        example: {
          tagalog: 'Isa lang ang kailangan ko.',
          english: 'I only need one.',
          zhTW: '我只需要一個。',
          zhCN: '我只需要一个。'
        }
      },
      {
        id: 'n2',
        tagalog: 'Dalawa',
        english: 'Two',
        zhTW: '二',
        zhCN: '二',
        example: {
          tagalog: 'Dalawa ang anak nila.',
          english: 'They have two children.',
          zhTW: '他們有兩個孩子。',
          zhCN: '他们有两个孩子。'
        }
      },
      {
        id: 'n3',
        tagalog: 'Tatlo',
        english: 'Three',
        zhTW: '三',
        zhCN: '三',
        example: {
          tagalog: 'Tatlo kami sa grupo.',
          english: 'There are three of us in the group.',
          zhTW: '我們組裡有三個人。',
          zhCN: '我们组里有三个人。'
        }
      },
      {
        id: 'n4',
        tagalog: 'Apat',
        english: 'Four',
        zhTW: '四',
        zhCN: '四',
        example: {
          tagalog: 'May apat na gulong ang kotse.',
          english: 'The car has four wheels.',
          zhTW: '汽車有四個輪子。',
          zhCN: '汽车有四个轮子。'
        }
      },
      {
        id: 'n5',
        tagalog: 'Lima',
        english: 'Five',
        zhTW: '五',
        zhCN: '五',
        example: {
          tagalog: 'Alas-singko na ng hapon.',
          english: 'It is already five in the afternoon.',
          zhTW: '已經是下午五點了。',
          zhCN: '已经是下午五点了。'
        }
      },
      {
        id: 'n6',
        tagalog: 'Anim',
        english: 'Six',
        zhTW: '六',
        zhCN: '六',
        example: {
          tagalog: 'Anim na buwan na.',
          english: 'It has been six months.',
          zhTW: '已經六個月了。',
          zhCN: '已经六个月了。'
        }
      },
      {
        id: 'n7',
        tagalog: 'Pito',
        english: 'Seven',
        zhTW: '七',
        zhCN: '七',
        example: {
          tagalog: 'Pito ang araw sa isang linggo.',
          english: 'There are seven days in a week.',
          zhTW: '一週有七天。',
          zhCN: '一周有七天。'
        }
      },
      {
        id: 'n8',
        tagalog: 'Walo',
        english: 'Eight',
        zhTW: '八',
        zhCN: '八',
        example: {
          tagalog: 'Walo kaming magkakapatid.',
          english: 'We are eight siblings.',
          zhTW: '我們有八個兄弟姊妹。',
          zhCN: '我们有八个兄弟姐妹。'
        }
      },
      {
        id: 'n9',
        tagalog: 'Siyam',
        english: 'Nine',
        zhTW: '九',
        zhCN: '九',
        example: {
          tagalog: 'Siyam na taong gulang siya.',
          english: 'He/She is nine years old.',
          zhTW: '他/她九歲。',
          zhCN: '他/她九岁。'
        }
      },
      {
        id: 'n10',
        tagalog: 'Sampu',
        english: 'Ten',
        zhTW: '十',
        zhCN: '十',
        example: {
          tagalog: 'Sampu ang daliri ko.',
          english: 'I have ten fingers.',
          zhTW: '我有十個手指。',
          zhCN: '我有十个手指。'
        }
      },
      {
        id: 'n11',
        tagalog: 'Labing-isa',
        english: 'Eleven',
        zhTW: '十一',
        zhCN: '十一',
        example: {
          tagalog: 'Labing-isa ang manlalaro.',
          english: 'There are eleven players.',
          zhTW: '有十一名球員。',
          zhCN: '有十一名球员。'
        }
      },
      {
        id: 'n12',
        tagalog: 'Labindalawa',
        english: 'Twelve',
        zhTW: '十二',
        zhCN: '十二',
        example: {
          tagalog: 'Labindalawa ang itlog sa tray.',
          english: 'There are twelve eggs in the tray.',
          zhTW: '托盤裡有十二個雞蛋。',
          zhCN: '托盘里有十二个鸡蛋。'
        }
      },
      {
        id: 'n13',
        tagalog: 'Labintatlo',
        english: 'Thirteen',
        zhTW: '十三',
        zhCN: '十三',
        example: {
          tagalog: 'Labintatlo ang paborito niyang numero.',
          english: 'Thirteen is his/her favorite number.',
          zhTW: '十三是他/她最喜歡的數字。',
          zhCN: '十三是他/她最喜欢的数字。'
        }
      },
      {
        id: 'n14',
        tagalog: 'Labing-apat',
        english: 'Fourteen',
        zhTW: '十四',
        zhCN: '十四',
        example: {
          tagalog: 'Labing-apat na araw na ang nakalipas.',
          english: 'Fourteen days have passed.',
          zhTW: '已經過去十四天了。',
          zhCN: '已经过去十四天了。'
        }
      },
      {
        id: 'n15',
        tagalog: 'Labinlima',
        english: 'Fifteen',
        zhTW: '十五',
        zhCN: '十五',
        example: {
          tagalog: 'Labinlima kami sa klase.',
          english: 'We are fifteen in the class.',
          zhTW: '我們班有十五個人。',
          zhCN: '我们班有十五个人。'
        }
      },
      {
        id: 'n16',
        tagalog: 'Labing-anim',
        english: 'Sixteen',
        zhTW: '十六',
        zhCN: '十六',
        example: {
          tagalog: 'Labing-anim na taong gulang na siya.',
          english: 'He/She is sixteen years old.',
          zhTW: '他/她十六歲了。',
          zhCN: '他/她十六岁了。'
        }
      },
      {
        id: 'n17',
        tagalog: 'Labimpito',
        english: 'Seventeen',
        zhTW: '十七',
        zhCN: '十七',
        example: {
          tagalog: 'Labimpito ang bilang ng mga ibon.',
          english: 'The number of birds is seventeen.',
          zhTW: '鳥的數量是十七隻。',
          zhCN: '鸟的数量是十七只。'
        }
      },
      {
        id: 'n18',
        tagalog: 'Labingwalo',
        english: 'Eighteen',
        zhTW: '十八',
        zhCN: '十八',
        example: {
          tagalog: 'Labingwalo ang bisita.',
          english: 'There are eighteen guests.',
          zhTW: '有十八位客人。',
          zhCN: '有十八位客人。'
        }
      },
      {
        id: 'n19',
        tagalog: 'Labinsiyam',
        english: 'Nineteen',
        zhTW: '十九',
        zhCN: '十九',
        example: {
          tagalog: 'Labinsiyam na piso lang.',
          english: 'Only nineteen pesos.',
          zhTW: '只要十九披索。',
          zhCN: '只要十九披索。'
        }
      },
      {
        id: 'n20',
        tagalog: 'Dalawampu',
        english: 'Twenty',
        zhTW: '二十',
        zhCN: '二十',
        example: {
          tagalog: 'Dalawampu ang estudyante.',
          english: 'There are twenty students.',
          zhTW: '有二十名學生。',
          zhCN: '有二十名学生。'
        }
      },
      {
        id: 'n30',
        tagalog: 'Tatlumpu',
        english: 'Thirty',
        zhTW: '三十',
        zhCN: '三十',
        example: {
          tagalog: 'Tatlumpu ang araw sa Setyembre.',
          english: 'There are thirty days in September.',
          zhTW: '九月有三十天。',
          zhCN: '九月有三十天。'
        }
      },
      {
        id: 'n40',
        tagalog: 'Apatnapu',
        english: 'Forty',
        zhTW: '四十',
        zhCN: '四十',
        example: {
          tagalog: 'Apatnapu na siya.',
          english: 'He/She is forty already.',
          zhTW: '他/她已經四十歲了。',
          zhCN: '他/她已经四十岁了。'
        }
      },
      {
        id: 'n50',
        tagalog: 'Limampu',
        english: 'Fifty',
        zhTW: '五十',
        zhCN: '五十',
        example: {
          tagalog: 'Limampu ang kalahati ng sandaan.',
          english: 'Fifty is half of one hundred.',
          zhTW: '五十是一百的一半。',
          zhCN: '五十是一百的一半。'
        }
      },
      {
        id: 'n100',
        tagalog: 'Sandaan',
        english: 'One Hundred',
        zhTW: '一百',
        zhCN: '一百',
        example: {
          tagalog: 'Sandaang porsyento.',
          english: 'One hundred percent.',
          zhTW: '百分之百。',
          zhCN: '百分之百。'
        }
      },
      {
        id: 'n1000',
        tagalog: 'Isang Libo',
        english: 'One Thousand',
        zhTW: '一千',
        zhCN: '一千',
        example: {
          tagalog: 'Isang libo ang bayad.',
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
        tagalog: 'Lunes',
        english: 'Monday',
        zhTW: '星期一',
        zhCN: '星期一',
        example: {
          tagalog: 'Sa Lunes tayo magkikita.',
          english: 'We will meet on Monday.',
          zhTW: '我們星期一見。',
          zhCN: '我们星期一见。'
        }
      },
      {
        id: 'dm2',
        tagalog: 'Martes',
        english: 'Tuesday',
        zhTW: '星期二',
        zhCN: '星期二',
        example: {
          tagalog: 'Martes ngayon.',
          english: 'Today is Tuesday.',
          zhTW: '今天是星期二。',
          zhCN: '今天是星期二。'
        }
      },
      {
        id: 'dm3',
        tagalog: 'Miyerkules',
        english: 'Wednesday',
        zhTW: '星期三',
        zhCN: '星期三',
        example: {
          tagalog: 'Walang pasok sa Miyerkules.',
          english: 'There is no class on Wednesday.',
          zhTW: '星期三不用上課。',
          zhCN: '星期三不用上课。'
        }
      },
      {
        id: 'dm4',
        tagalog: 'Huwebes',
        english: 'Thursday',
        zhTW: '星期四',
        zhCN: '星期四',
        example: {
          tagalog: 'Aalis siya sa Huwebes.',
          english: 'He/She is leaving on Thursday.',
          zhTW: '他/她星期四離開。',
          zhCN: '他/她星期四离开。'
        }
      },
      {
        id: 'dm5',
        tagalog: 'Biyernes',
        english: 'Friday',
        zhTW: '星期五',
        zhCN: '星期五',
        example: {
          tagalog: 'Masaya ang Biyernes.',
          english: 'Friday is fun.',
          zhTW: '星期五很快樂。',
          zhCN: '星期五很快乐。'
        }
      },
      {
        id: 'dm6',
        tagalog: 'Sabado',
        english: 'Saturday',
        zhTW: '星期六',
        zhCN: '星期六',
        example: {
          tagalog: 'Magpapahinga ako sa Sabado.',
          english: 'I will rest on Saturday.',
          zhTW: '我星期六要休息。',
          zhCN: '我星期六要休息。'
        }
      },
      {
        id: 'dm7',
        tagalog: 'Linggo',
        english: 'Sunday / Week',
        zhTW: '星期日 / 星期',
        zhCN: '星期日 / 星期',
        example: {
          tagalog: 'Simbang gabi tuwing Linggo.',
          english: 'Night mass every Sunday.',
          zhTW: '每個星期日去教堂。',
          zhCN: '每个星期日去教堂。'
        }
      },
      {
        id: 'dm8',
        tagalog: 'Enero',
        english: 'January',
        zhTW: '一月',
        zhCN: '一月',
        example: {
          tagalog: 'Enero ang unang buwan.',
          english: 'January is the first month.',
          zhTW: '一月是第一個月。',
          zhCN: '一月是第一个月。'
        }
      },
      {
        id: 'dm9',
        tagalog: 'Pebrero',
        english: 'February',
        zhTW: '二月',
        zhCN: '二月',
        example: {
          tagalog: 'Maikli ang buwan ng Pebrero.',
          english: 'The month of February is short.',
          zhTW: '二月很短。',
          zhCN: '二月很短。'
        }
      },
      {
        id: 'dm10',
        tagalog: 'Marso',
        english: 'March',
        zhTW: '三月',
        zhCN: '三月',
        example: {
          tagalog: 'Mainit sa Marso.',
          english: 'It is hot in March.',
          zhTW: '三月很熱。',
          zhCN: '三月很热。'
        }
      },
      {
        id: 'dm11',
        tagalog: 'Abril',
        english: 'April',
        zhTW: '四月',
        zhCN: '四月',
        example: {
          tagalog: 'Abril ang kaarawan niya.',
          english: 'His/Her birthday is in April.',
          zhTW: '他/她的生日在四月。',
          zhCN: '他/她的生日在四月。'
        }
      },
      {
        id: 'dm12',
        tagalog: 'Mayo',
        english: 'May',
        zhTW: '五月',
        zhCN: '五月',
        example: {
          tagalog: 'Maraming piyesta sa Mayo.',
          english: 'There are many festivals in May.',
          zhTW: '五月有很多節日。',
          zhCN: '五月有很多节日。'
        }
      },
      {
        id: 'dm13',
        tagalog: 'Hunyo',
        english: 'June',
        zhTW: '六月',
        zhCN: '六月',
        example: {
          tagalog: 'Balik eskwela sa Hunyo.',
          english: 'Back to school in June.',
          zhTW: '六月開學。',
          zhCN: '六月开学。'
        }
      },
      {
        id: 'dm14',
        tagalog: 'Hulyo',
        english: 'July',
        zhTW: '七月',
        zhCN: '七月',
        example: {
          tagalog: 'Maulan ang Hulyo.',
          english: 'July is rainy.',
          zhTW: '七月多雨。',
          zhCN: '七月多雨。'
        }
      },
      {
        id: 'dm15',
        tagalog: 'Agosto',
        english: 'August',
        zhTW: '八月',
        zhCN: '八月',
        example: {
          tagalog: 'Buwan ng Wika ang Agosto.',
          english: 'August is the Month of Language.',
          zhTW: '八月是語文月。',
          zhCN: '八月是语文月。'
        }
      },
      {
        id: 'dm16',
        tagalog: 'Setyembre',
        english: 'September',
        zhTW: '九月',
        zhCN: '九月',
        example: {
          tagalog: 'Magsisimula ang Pasko sa Setyembre.',
          english: 'Christmas starts in September.',
          zhTW: '聖誕節從九月開始。',
          zhCN: '圣诞节从九月开始。'
        }
      },
      {
        id: 'dm17',
        tagalog: 'Oktubre',
        english: 'October',
        zhTW: '十月',
        zhCN: '十月',
        example: {
          tagalog: 'Malamig na sa Oktubre.',
          english: 'It is getting cold in October.',
          zhTW: '十月開始變冷了。',
          zhCN: '十月开始变冷了。'
        }
      },
      {
        id: 'dm18',
        tagalog: 'Nobyembre',
        english: 'November',
        zhTW: '十一月',
        zhCN: '十一月',
        example: {
          tagalog: 'Araw ng mga Patay sa Nobyembre.',
          english: 'Day of the Dead is in November.',
          zhTW: '萬聖節在十一月。',
          zhCN: '万圣节在十一月。'
        }
      },
      {
        id: 'dm19',
        tagalog: 'Disyembre',
        english: 'December',
        zhTW: '十二月',
        zhCN: '十二月',
        example: {
          tagalog: 'Malamig ang simoy ng hangin sa Disyembre.',
          english: 'The breeze is cold in December.',
          zhTW: '十二月的微風很冷。',
          zhCN: '十二月的微风很冷。'
        }
      },
      {
        id: 'dm20',
        tagalog: 'Araw',
        english: 'Day / Sun',
        zhTW: '天 / 日 / 太陽',
        zhCN: '天 / 日 / 太阳',
        example: {
          tagalog: 'Magandang araw!',
          english: 'Good day!',
          zhTW: '美好的一天！',
          zhCN: '美好的一天！'
        }
      },
      {
        id: 'dm21',
        tagalog: 'Buwan',
        english: 'Month / Moon',
        zhTW: '月 / 月亮',
        zhCN: '月 / 月亮',
        example: {
          tagalog: 'Isang buwan na ang nakalipas.',
          english: 'One month has passed.',
          zhTW: '一個月過去了。',
          zhCN: '一个月过去了。'
        }
      },
      {
        id: 'dm22',
        tagalog: 'Taon',
        english: 'Year',
        zhTW: '年',
        zhCN: '年',
        example: {
          tagalog: 'Bagong taon, bagong pag-asa.',
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
        tagalog: 'Opo / Oo',
        english: 'Yes',
        zhTW: '是',
        zhCN: '是',
        example: {
          tagalog: 'Opo, naiintindihan ko.',
          english: 'Yes, I understand (polite).',
          zhTW: '是的，我明白了（禮貌）。',
          zhCN: '是的，我明白了（礼貌）。'
        }
      },
      {
        id: 'c2',
        tagalog: 'Hindi',
        english: 'No',
        zhTW: '不',
        zhCN: '不',
        example: {
          tagalog: 'Hindi ko alam.',
          english: 'I do not know.',
          zhTW: '我不知道。',
          zhCN: '我不知道。'
        }
      },
      {
        id: 'c3',
        tagalog: 'Ano ito?',
        english: 'What is this?',
        zhTW: '這是什麼？',
        zhCN: '这是什么？',
        example: {
          tagalog: 'Ano ito? Masarap ba?',
          english: 'What is this? Is it delicious?',
          zhTW: '這是什麼？好吃嗎？',
          zhCN: '这是什么？好吃吗？'
        }
      },
      {
        id: 'c4',
        tagalog: 'Magkano ito?',
        english: 'How much is this?',
        zhTW: '這個多少錢？',
        zhCN: '这个多少钱？',
        example: {
          tagalog: 'Magkano ito? Mura lang ba?',
          english: 'How much is this? Is it cheap?',
          zhTW: '這個多少錢？便宜嗎？',
          zhCN: '这个多少钱？便宜吗？'
        }
      },
      {
        id: 'c5',
        tagalog: 'Masarap',
        english: 'Delicious',
        zhTW: '好吃',
        zhCN: '好吃',
        example: {
          tagalog: 'Masarap ang luto ni Nanay.',
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
        tagalog: 'Tatay',
        english: 'Father',
        zhTW: '父親',
        zhCN: '父亲',
        example: {
          tagalog: 'Nasa trabaho ang tatay.',
          english: 'Father is at work.',
          zhTW: '父親在工作。',
          zhCN: '父亲在工作。'
        }
      },
      {
        id: 'f2',
        tagalog: 'Nanay',
        english: 'Mother',
        zhTW: '母親',
        zhCN: '母亲',
        example: {
          tagalog: 'Nagluluto si Nanay.',
          english: 'Mother is cooking.',
          zhTW: '母親正在做飯。',
          zhCN: '母亲正在做饭。'
        }
      },
      {
        id: 'f3',
        tagalog: 'Kapatid',
        english: 'Sibling',
        zhTW: '兄弟姊妹',
        zhCN: '兄弟姐妹',
        example: {
          tagalog: 'Ilan ang kapatid mo?',
          english: 'How many siblings do you have?',
          zhTW: '你有幾個兄弟姊妹？',
          zhCN: '你有几个兄弟姐妹？'
        }
      },
      {
        id: 'f4',
        tagalog: 'Kuya',
        english: 'Older Brother',
        zhTW: '哥哥',
        zhCN: '哥哥',
        example: {
          tagalog: 'Si Kuya ang nag-aalaga sa akin.',
          english: 'Older brother takes care of me.',
          zhTW: '哥哥照顧我。',
          zhCN: '哥哥照顾我。'
        }
      },
      {
        id: 'f5',
        tagalog: 'Ate',
        english: 'Older Sister',
        zhTW: '姊姊',
        zhCN: '姐姐',
        example: {
          tagalog: 'Mabait ang ate ko.',
          english: 'My older sister is kind.',
          zhTW: '我的姊姊很善良。',
          zhCN: '我的姐姐很善良。'
        }
      },
      {
        id: 'f6',
        tagalog: 'Lolo',
        english: 'Grandfather',
        zhTW: '祖父 / 外祖父',
        zhCN: '祖父 / 外祖父',
        example: {
          tagalog: 'Mahal ko ang aking lolo.',
          english: 'I love my grandfather.',
          zhTW: '我愛我的祖父。',
          zhCN: '我爱我的祖父。'
        }
      },
      {
        id: 'f7',
        tagalog: 'Lola',
        english: 'Grandmother',
        zhTW: '祖母 / 外祖母',
        zhCN: '祖母 / 外祖母',
        example: {
          tagalog: 'Nagluluto si Lola ng masarap na pagkain.',
          english: 'Grandma is cooking delicious food.',
          zhTW: '奶奶正在做美味的食物。',
          zhCN: '奶奶正在做美味的食物。'
        }
      },
      {
        id: 'f8',
        tagalog: 'Tito',
        english: 'Uncle',
        zhTW: '叔叔 / 伯伯 / 舅舅',
        zhCN: '叔叔 / 伯伯 / 舅舅',
        example: {
          tagalog: 'Nasa abroad ang tito ko.',
          english: 'My uncle is abroad.',
          zhTW: '我的叔叔在國外。',
          zhCN: '我的叔叔在国外。'
        }
      },
      {
        id: 'f9',
        tagalog: 'Tita',
        english: 'Aunt',
        zhTW: '阿姨 / 姑姑 / 嬸嬸',
        zhCN: '阿姨 / 姑姑 / 婶婶',
        example: {
          tagalog: 'Binigyan ako ng regalo ni Tita.',
          english: 'Auntie gave me a gift.',
          zhTW: '阿姨給了我一份禮物。',
          zhCN: '阿姨给了我一份礼物。'
        }
      },
      {
        id: 'f10',
        tagalog: 'Pinsan',
        english: 'Cousin',
        zhTW: '堂表兄弟姊妹',
        zhCN: '堂表兄弟姐妹',
        example: {
          tagalog: 'Kalaro ko ang aking pinsan.',
          english: 'I am playing with my cousin.',
          zhTW: '我正在和我的堂表兄弟姊妹玩。',
          zhCN: '我正在和我的堂表兄弟姐妹玩。'
        }
      },
      {
        id: 'f11',
        tagalog: 'Anak',
        english: 'Child / Son / Daughter',
        zhTW: '孩子 / 兒子 / 女兒',
        zhCN: '孩子 / 儿子 / 女儿',
        example: {
          tagalog: 'Mabait ang anak nila.',
          english: 'Their child is kind.',
          zhTW: '他們的孩子很乖。',
          zhCN: '他们的孩子很乖。'
        }
      },
      {
        id: 'f12',
        tagalog: 'Asawa',
        english: 'Spouse (Husband/Wife)',
        zhTW: '配偶 (丈夫/妻子)',
        zhCN: '配偶 (丈夫/妻子)',
        example: {
          tagalog: 'Mahal niya ang kanyang asawa.',
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
        tagalog: 'Pula',
        english: 'Red',
        zhTW: '紅色',
        zhCN: '红色',
        example: {
          tagalog: 'Pula ang paborito kong kulay.',
          english: 'Red is my favorite color.',
          zhTW: '紅色是我最喜歡的顏色。',
          zhCN: '红色是我最喜欢的颜色。'
        }
      },
      {
        id: 'col2',
        tagalog: 'Asul',
        english: 'Blue',
        zhTW: '藍色',
        zhCN: '蓝色',
        example: {
          tagalog: 'Ang langit ay asul.',
          english: 'The sky is blue.',
          zhTW: '天空是藍色的。',
          zhCN: '天空是蓝色的。'
        }
      },
      {
        id: 'col3',
        tagalog: 'Dilaw',
        english: 'Yellow',
        zhTW: '黃色',
        zhCN: '黄色',
        example: {
          tagalog: 'Dilaw ang araw.',
          english: 'The sun is yellow.',
          zhTW: '太陽是黃色的。',
          zhCN: '太阳是黄色的。'
        }
      },
      {
        id: 'col4',
        tagalog: 'Puti',
        english: 'White',
        zhTW: '白色',
        zhCN: '白色',
        example: {
          tagalog: 'Puti ang damit niya.',
          english: 'His/Her clothes are white.',
          zhTW: '他/她的衣服是白色的。',
          zhCN: '他/她的衣服是白色的。'
        }
      },
      {
        id: 'col5',
        tagalog: 'Itim',
        english: 'Black',
        zhTW: '黑色',
        zhCN: '黑色',
        example: {
          tagalog: 'Itim ang pusa.',
          english: 'The cat is black.',
          zhTW: '那隻貓是黑色的。',
          zhCN: '那只猫是黑色的。'
        }
      },
      {
        id: 'col6',
        tagalog: 'Luntian / Berde',
        english: 'Green',
        zhTW: '綠色',
        zhCN: '绿色',
        example: {
          tagalog: 'Luntian ang mga dahon.',
          english: 'The leaves are green.',
          zhTW: '葉子是綠色的。',
          zhCN: '叶子是绿色的。'
        }
      },
      {
        id: 'col7',
        tagalog: 'Kahel',
        english: 'Orange',
        zhTW: '橘色',
        zhCN: '橘色',
        example: {
          tagalog: 'Masarap ang prutas na kahel.',
          english: 'The orange fruit is delicious.',
          zhTW: '橘子很好吃。',
          zhCN: '橘子很好吃。'
        }
      },
      {
        id: 'col8',
        tagalog: 'Lila',
        english: 'Purple',
        zhTW: '紫色',
        zhCN: '紫色',
        example: {
          tagalog: 'Lila ang bulaklak na ito.',
          english: 'This flower is purple.',
          zhTW: '這朵花是紫色的。',
          zhCN: '这朵花是紫色的。'
        }
      },
      {
        id: 'col9',
        tagalog: 'Kayumanggi',
        english: 'Brown',
        zhTW: '棕色',
        zhCN: '棕色',
        example: {
          tagalog: 'Kayumanggi ang balat ng Pilipino.',
          english: 'Filipinos have brown skin.',
          zhTW: '菲律賓人的皮膚是棕色的。',
          zhCN: '菲律宾人的皮肤是棕色的。'
        }
      },
      {
        id: 'col10',
        tagalog: 'Rosas',
        english: 'Pink',
        zhTW: '粉紅色',
        zhCN: '粉红色',
        example: {
          tagalog: 'Gusto niya ng kulay rosas.',
          english: 'She likes the color pink.',
          zhTW: '她喜歡粉紅色。',
          zhCN: '她喜欢粉红色。'
        }
      },
      {
        id: 'col11',
        tagalog: 'Abo / Kulay-abo',
        english: 'Gray',
        zhTW: '灰色',
        zhCN: '灰色',
        example: {
          tagalog: 'Kulay-abo ang ulap.',
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
        tagalog: 'Kanin',
        english: 'Rice',
        zhTW: '米飯',
        zhCN: '米饭',
        example: {
          tagalog: 'Gusto ko ng kanin.',
          english: 'I want rice.',
          zhTW: '我想要米飯。',
          zhCN: '我想要米饭。'
        }
      },
      {
        id: 'fd2',
        tagalog: 'Tubig',
        english: 'Water',
        zhTW: '水',
        zhCN: '水',
        example: {
          tagalog: 'Uminom ka ng tubig.',
          english: 'Drink water.',
          zhTW: '喝水。',
          zhCN: '喝水。'
        }
      },
      {
        id: 'fd3',
        tagalog: 'Tinapay',
        english: 'Bread',
        zhTW: '麵包',
        zhCN: '面包',
        example: {
          tagalog: 'Bumili ako ng tinapay.',
          english: 'I bought bread.',
          zhTW: '我買了麵包。',
          zhCN: '我买了面包。'
        }
      },
      {
        id: 'fd4',
        tagalog: 'Manok',
        english: 'Chicken',
        zhTW: '雞肉',
        zhCN: '鸡肉',
        example: {
          tagalog: 'Pritong manok ang ulam.',
          english: 'Fried chicken is the dish.',
          zhTW: '菜餚是炸雞。',
          zhCN: '菜肴是炸鸡。'
        }
      },
      {
        id: 'fd5',
        tagalog: 'Isda',
        english: 'Fish',
        zhTW: '魚',
        zhCN: '鱼',
        example: {
          tagalog: 'Sariwa ang isda.',
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
        tagalog: 'Ako',
        english: 'I',
        zhTW: '我',
        zhCN: '我',
        example: {
          tagalog: 'Ako ay Pilipino.',
          english: 'I am Filipino.',
          zhTW: '我是菲律賓人。',
          zhCN: '我是菲律宾人。'
        }
      },
      {
        id: 'pro2',
        tagalog: 'Ikaw / Ka',
        english: 'You',
        zhTW: '你',
        zhCN: '你',
        example: {
          tagalog: 'Ikaw ba yan?',
          english: 'Is that you?',
          zhTW: '是你嗎？',
          zhCN: '是你吗？'
        }
      },
      {
        id: 'pro3',
        tagalog: 'Siya',
        english: 'He / She',
        zhTW: '他 / 她',
        zhCN: '他 / 她',
        example: {
          tagalog: 'Siya ang kaibigan ko.',
          english: 'He/She is my friend.',
          zhTW: '他/她是我的朋友。',
          zhCN: '他/她是我的朋友。'
        }
      },
      {
        id: 'pro4',
        tagalog: 'Ko',
        english: 'My / by Me',
        zhTW: '我的',
        zhCN: '我的',
        example: {
          tagalog: 'Gusto ko ito.',
          english: 'I like this (This is liked by me).',
          zhTW: '我喜歡這個。',
          zhCN: '我喜欢这个。'
        }
      },
      {
        id: 'pro5',
        tagalog: 'Mo',
        english: 'Your / by You',
        zhTW: '你的',
        zhCN: '你的',
        example: {
          tagalog: 'Ano ang pangalan mo?',
          english: 'What is your name?',
          zhTW: '你叫什麼名字？',
          zhCN: '你叫什么名字？'
        }
      },
      {
        id: 'pro6',
        tagalog: 'Niya',
        english: 'His / Her / by Him',
        zhTW: '他的 / 她的',
        zhCN: '他的 / 她的',
        example: {
          tagalog: 'Kain niya ito.',
          english: 'This is what he/she ate.',
          zhTW: '这是他/她吃的。',
          zhCN: '这是他/她吃的。'
        }
      },
      {
        id: 'pro7',
        tagalog: 'Sa akin',
        english: 'To me',
        zhTW: '對我來說 / 給我',
        zhCN: '对我来说 / 给我',
        example: {
          tagalog: 'Ibigay mo sa akin.',
          english: 'Give it to me.',
          zhTW: '把它給我。',
          zhCN: '把它给我。'
        }
      },
      {
        id: 'pro8',
        tagalog: 'Sa iyo',
        english: 'To you',
        zhTW: '對你來說 / 給你',
        zhCN: '对你来说 / 给你',
        example: {
          tagalog: 'Para sa iyo ito.',
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
        tagalog: 'Gusto',
        english: 'Want / Like',
        zhTW: '想要 / 喜歡',
        zhCN: '想要 / 喜欢',
        example: {
          tagalog: 'Gusto ko ng kape.',
          english: 'I want coffee.',
          zhTW: '我想要咖啡。',
          zhCN: '我想要咖啡。'
        }
      },
      {
        id: 'pv2',
        tagalog: 'Ayaw',
        english: 'Don\'t want',
        zhTW: '不想要 / 不喜歡',
        zhCN: '不想要 / 不喜欢',
        example: {
          tagalog: 'Ayaw ko nito.',
          english: 'I don\'t want this.',
          zhTW: '我不想要這個。',
          zhCN: '我不想要这个。'
        }
      },
      {
        id: 'pv3',
        tagalog: 'Kailangan',
        english: 'Need',
        zhTW: '需要',
        zhCN: '需要',
        example: {
          tagalog: 'Kailangan ko ng tulong.',
          english: 'I need help.',
          zhTW: '我需要幫助。',
          zhCN: '我需要帮助。'
        }
      },
      {
        id: 'pv4',
        tagalog: 'Pwede',
        english: 'Can / Allowed',
        zhTW: '可以',
        zhCN: '可以',
        example: {
          tagalog: 'Pwede ba?',
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
        tagalog: 'Ano',
        english: 'What',
        zhTW: '什麼',
        zhCN: '什么',
        example: {
          tagalog: 'Ano ang gusto mo?',
          english: 'What do you want?',
          zhTW: '你想要什麼？',
          zhCN: '你想要什么？'
        }
      },
      {
        id: 'qw2',
        tagalog: 'Sino',
        english: 'Who',
        zhTW: '誰',
        zhCN: '谁',
        example: {
          tagalog: 'Sino siya?',
          english: 'Who is he/she?',
          zhTW: '他/她是誰？',
          zhCN: '他/她是谁？'
        }
      },
      {
        id: 'qw3',
        tagalog: 'Saan',
        english: 'Where',
        zhTW: '哪裡',
        zhCN: '哪里',
        example: {
          tagalog: 'Saan ka pupunta?',
          english: 'Where are you going?',
          zhTW: '你要去哪裡？',
          zhCN: '你要去哪里？'
        }
      },
      {
        id: 'qw4',
        tagalog: 'Kailan',
        english: 'When',
        zhTW: '什麼時候',
        zhCN: '什么时候',
        example: {
          tagalog: 'Kailan ang kaarawan mo?',
          english: 'When is your birthday?',
          zhTW: '你的生日是什麼時候？',
          zhCN: '你的生日是什么时候？'
        }
      },
      {
        id: 'qw5',
        tagalog: 'Paano',
        english: 'How',
        zhTW: '怎麼',
        zhCN: '怎么',
        example: {
          tagalog: 'Paano pumunta doon?',
          english: 'How to go there?',
          zhTW: '怎麼去那裡？',
          zhCN: '怎么去那里？'
        }
      },
      {
        id: 'qw6',
        tagalog: 'Bakit',
        english: 'Why',
        zhTW: '為什麼',
        zhCN: '为什么',
        example: {
          tagalog: 'Bakit ka malungkot?',
          english: 'Why are you sad?',
          zhTW: '你為什麼難過？',
          zhCN: '你为什么难过？'
        }
      },
      {
        id: 'qw7',
        tagalog: 'Nasaan',
        english: 'Where is (object/person)?',
        zhTW: '...在哪裡？',
        zhCN: '...在哪里？',
        example: {
          tagalog: 'Nasaan ang susi?',
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
        tagalog: 'Pero',
        english: 'But',
        zhTW: '但是',
        zhCN: '但是',
        example: {
          tagalog: 'Gusto ko, pero wala akong pera.',
          english: 'I want to, but I have no money.',
          zhTW: '我想，但是我沒錢。',
          zhCN: '我想，但是我没钱。'
        }
      },
      {
        id: 'con2',
        tagalog: 'Kasi',
        english: 'Because',
        zhTW: '因為',
        zhCN: '因为',
        example: {
          tagalog: 'Kumain ako kasi gutom ako.',
          english: 'I ate because I was hungry.',
          zhTW: '我吃了，因為我餓了。',
          zhCN: '我吃了，因为我饿了。'
        }
      },
      {
        id: 'con3',
        tagalog: 'Dahil',
        english: 'Because of',
        zhTW: '由於',
        zhCN: '由于',
        example: {
          tagalog: 'Masaya ako dahil sa iyo.',
          english: 'I am happy because of you.',
          zhTW: '因為你，我很快樂。',
          zhCN: '因为你，我很快乐。'
        }
      },
      {
        id: 'con4',
        tagalog: 'Kung',
        english: 'If',
        zhTW: '如果',
        zhCN: '如果',
        example: {
          tagalog: 'Kung aalis ka, sasama ako.',
          english: 'If you leave, I will come with you.',
          zhTW: '如果你要走，我會跟你一起。',
          zhCN: '如果你要走，我会跟你一起。'
        }
      },
      {
        id: 'con5',
        tagalog: 'Kaya',
        english: 'That\'s why / So',
        zhTW: '所以',
        zhCN: '所以',
        example: {
          tagalog: 'Umuulan, kaya hindi ako lumabas.',
          english: 'It was raining, so I didn\'t go out.',
          zhTW: '下雨了，所以我沒出門。',
          zhCN: '下雨了，所以我没出门。'
        }
      },
      {
        id: 'con6',
        tagalog: 'Pala',
        english: 'Oh, actually / realization',
        zhTW: '原來',
        zhCN: '原来',
        example: {
          tagalog: 'Ikaw pala!',
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
        tagalog: 'Ito',
        english: 'This (near me)',
        zhTW: '這個 (近)',
        zhCN: '这个 (近)',
        example: {
          tagalog: 'Ito ang bahay ko.',
          english: 'This is my house.',
          zhTW: '這是我的房子。',
          zhCN: '这是我的房子。'
        }
      },
      {
        id: 'dem2',
        tagalog: 'Iyan',
        english: 'That (near you)',
        zhTW: '那個 (中)',
        zhCN: '那个 (中)',
        example: {
          tagalog: 'Iyan ba ang libro mo?',
          english: 'Is that your book?',
          zhTW: '那是你的書嗎？',
          zhCN: '那是你的书吗？'
        }
      },
      {
        id: 'dem3',
        tagalog: 'Iyon',
        english: 'That (far from both)',
        zhTW: '那個 (遠)',
        zhCN: '那个 (远)',
        example: {
          tagalog: 'Iyon ang bundok.',
          english: 'That is the mountain.',
          zhTW: '那是山。',
          zhCN: '那是山。'
        }
      },
      {
        id: 'dem4',
        tagalog: 'Dito',
        english: 'Here (near me)',
        zhTW: '這裡 (近)',
        zhCN: '这里 (近)',
        example: {
          tagalog: 'Dito ako nakatira.',
          english: 'I live here.',
          zhTW: '我住在這裡。',
          zhCN: '我住在这里。'
        }
      },
      {
        id: 'dem5',
        tagalog: 'Diyan',
        english: 'There (near you)',
        zhTW: '那裡 (中)',
        zhCN: '那里 (中)',
        example: {
          tagalog: 'Ilagay mo diyan.',
          english: 'Put it there.',
          zhTW: '把它放在那裡。',
          zhCN: '把它放在那里。'
        }
      },
      {
        id: 'dem6',
        tagalog: 'Doon',
        english: 'Over there (far from both)',
        zhTW: '那裡 (遠)',
        zhCN: '那里 (远)',
        example: {
          tagalog: 'Pumunta tayo doon.',
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
        tagalog: 'May / Meron',
        english: 'There is / I have',
        zhTW: '有',
        zhCN: '有',
        example: {
          tagalog: 'May tubig ba?',
          english: 'Is there water?',
          zhTW: '有水嗎？',
          zhCN: '有水吗？'
        }
      },
      {
        id: 'ep2',
        tagalog: 'Wala',
        english: 'None / I don\'t have',
        zhTW: '沒有',
        zhCN: '没有',
        example: {
          tagalog: 'Walang tubig.',
          english: 'No water.',
          zhTW: '沒有水。',
          zhCN: '没有水。'
        }
      },
      {
        id: 'ep3',
        tagalog: 'Meron ako',
        english: 'I have (it)',
        zhTW: '我有',
        zhCN: '我有',
        example: {
          tagalog: 'Meron akong pera.',
          english: 'I have money.',
          zhTW: '我有錢。',
          zhCN: '我有钱。'
        }
      },
      {
        id: 'ep4',
        tagalog: 'Wala ako',
        english: 'I don\'t have (it)',
        zhTW: '我沒有',
        zhCN: '我没有',
        example: {
          tagalog: 'Wala akong oras.',
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
        tagalog: 'Hindi',
        english: 'Not',
        zhTW: '不 (形容詞/動詞)',
        zhCN: '不 (形容词/动词)',
        example: {
          tagalog: 'Hindi masarap.',
          english: 'Not delicious.',
          zhTW: '不好吃。',
          zhCN: '不好吃。'
        }
      },
      {
        id: 'neg2',
        tagalog: 'Wala',
        english: 'None / Absent',
        zhTW: '沒有 / 不在',
        zhCN: '没有 / 不在',
        example: {
          tagalog: 'Wala si Mark.',
          english: 'Mark is not here.',
          zhTW: '馬克不在這裡。',
          zhCN: '马克不在这里。'
        }
      },
      {
        id: 'neg3',
        tagalog: 'Huwag',
        english: 'Don\'t',
        zhTW: '不要 (命令)',
        zhCN: '不要 (命令)',
        example: {
          tagalog: 'Huwag kang maingay.',
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
        tagalog: 'Na',
        english: 'Already / Now',
        zhTW: '已經',
        zhCN: '已经',
        example: {
          tagalog: 'Tapos na.',
          english: 'Finished already.',
          zhTW: '已經完成了。',
          zhCN: '已经完成了。'
        }
      },
      {
        id: 'enc2',
        tagalog: 'Pa',
        english: 'Still / Yet / More',
        zhTW: '還 / 再',
        zhCN: '还 / 再',
        example: {
          tagalog: 'Isa pa.',
          english: 'One more.',
          zhTW: '再來一個。',
          zhCN: '再来一个。'
        }
      },
      {
        id: 'enc3',
        tagalog: 'Lang',
        english: 'Just / Only',
        zhTW: '只是 / 只有',
        zhCN: '只是 / 只有',
        example: {
          tagalog: 'Ako lang.',
          english: 'Just me.',
          zhTW: '只有我。',
          zhCN: '只有我。'
        }
      },
      {
        id: 'enc4',
        tagalog: 'Din / Rin',
        english: 'Also / Too',
        zhTW: '也',
        zhCN: '也',
        example: {
          tagalog: 'Ako rin.',
          english: 'Me too.',
          zhTW: '我也是。',
          zhCN: '我也是。'
        }
      },
      {
        id: 'enc5',
        tagalog: 'Naman',
        english: 'On the other hand / Please',
        zhTW: '呢 / 請',
        zhCN: '呢 / 请',
        example: {
          tagalog: 'Ikaw naman.',
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
        tagalog: 'Po',
        english: 'Sir / Ma\'am (Respect particle)',
        zhTW: '您 (敬語)',
        zhCN: '您 (敬语)',
        example: {
          tagalog: 'Salamat po.',
          english: 'Thank you (polite).',
          zhTW: '謝謝您。',
          zhCN: '谢谢您。'
        }
      },
      {
        id: 'rm2',
        tagalog: 'Opo',
        english: 'Yes (Respectful)',
        zhTW: '是 (敬語)',
        zhCN: '是 (敬语)',
        example: {
          tagalog: 'Opo, nanay.',
          english: 'Yes, mom.',
          zhTW: '是的，媽媽。',
          zhCN: '是的，妈妈。'
        }
      },
      {
        id: 'rm3',
        tagalog: 'Hindi po',
        english: 'No (Respectful)',
        zhTW: '不 (敬語)',
        zhCN: '不 (敬语)',
        example: {
          tagalog: 'Hindi po ako kumain.',
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
        tagalog: '-ng',
        english: 'Linker (after vowel)',
        zhTW: '連接詞 (母音後)',
        zhCN: '连接词 (元音后)',
        example: {
          tagalog: 'Bagong taon.',
          english: 'New year.',
          zhTW: '新年。',
          zhCN: '新年。'
        }
      },
      {
        id: 'lnk2',
        tagalog: '-g',
        english: 'Linker (after n)',
        zhTW: '連接詞 (n後)',
        zhCN: '连接词 (n后)',
        example: {
          tagalog: 'Ulang malakas.',
          english: 'Strong rain.',
          zhTW: '大雨。',
          zhCN: '大雨。'
        }
      },
      {
        id: 'lnk3',
        tagalog: 'Na',
        english: 'Linker (after consonant)',
        zhTW: '連接詞 (子音後)',
        zhCN: '连接词 (辅音后)',
        example: {
          tagalog: 'Masarap na pagkain.',
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
        tagalog: 'Nasa',
        english: 'Located at/on/in',
        zhTW: '在',
        zhCN: '在',
        example: {
          tagalog: 'Ang libro ay nasa mesa.',
          english: 'The book is on the table.',
          zhTW: '書在桌子上。',
          zhCN: '书在桌子上。'
        }
      },
      {
        id: 'loc2',
        tagalog: 'Nasaan',
        english: 'Where is (it)?',
        zhTW: '在哪裡？',
        zhCN: '在哪里？',
        example: {
          tagalog: 'Nasaan ang susi?',
          english: 'Where is the key?',
          zhTW: '鑰匙在哪裡？',
          zhCN: '钥匙在哪里？'
        }
      },
      {
        id: 'loc3',
        tagalog: 'Nasa akin',
        english: 'It is with me',
        zhTW: '在我這裡',
        zhCN: '在我这里',
        example: {
          tagalog: 'Nasa akin ang pera.',
          english: 'The money is with me.',
          zhTW: '錢在我這裡。',
          zhCN: '钱在我这里。'
        }
      },
      {
        id: 'loc4',
        tagalog: 'Nasa labas',
        english: 'It is outside',
        zhTW: '在外面',
        zhCN: '在外面',
        example: {
          tagalog: 'Nasa labas si Tatay.',
          english: 'Father is outside.',
          zhTW: '爸爸在外面。',
          zhCN: '爸爸在外面。'
        }
      },
      {
        id: 'loc5',
        tagalog: 'Nasa loob',
        english: 'It is inside',
        zhTW: '在裡面',
        zhCN: '在里面',
        example: {
          tagalog: 'Nasa loob ng bahay.',
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
        tagalog: 'Uno',
        english: 'One (Time/Money)',
        zhTW: '一 (時間/金錢)',
        zhCN: '一 (时间/金钱)',
        example: {
          tagalog: 'Ala-una na.',
          english: 'It\'s one o\'clock.',
          zhTW: '一點了。',
          zhCN: '一点了。'
        }
      },
      {
        id: 'ns2',
        tagalog: 'Dos',
        english: 'Two (Time/Money)',
        zhTW: '二 (時間/金錢)',
        zhCN: '二 (时间/金钱)',
        example: {
          tagalog: 'Dos pesos lang.',
          english: 'Only two pesos.',
          zhTW: '只要兩披索。',
          zhCN: '只要两披索。'
        }
      },
      {
        id: 'ns3',
        tagalog: 'Tres',
        english: 'Three (Time/Money)',
        zhTW: '三 (時間/金錢)',
        zhCN: '三 (时间/金钱)',
        example: {
          tagalog: 'Alas-tres ng hapon.',
          english: 'Three in the afternoon.',
          zhTW: '下午三點。',
          zhCN: '下午三点。'
        }
      },
      {
        id: 'ns4',
        tagalog: 'Alas-dose',
        english: 'Twelve o\'clock',
        zhTW: '十二點',
        zhCN: '十二点',
        example: {
          tagalog: 'Kumain tayo ng alas-dose.',
          english: 'Let\'s eat at twelve.',
          zhTW: '我們十二點吃飯吧。',
          zhCN: '我们十二点吃饭吧。'
        }
      },
      {
        id: 'ns5',
        tagalog: 'Bente',
        english: 'Twenty',
        zhTW: '二十',
        zhCN: '二十',
        example: {
          tagalog: 'Bente pesos ito.',
          english: 'This is twenty pesos.',
          zhTW: '這是二十披索。',
          zhCN: '这是二十披索。'
        }
      },
      {
        id: 'ns6',
        tagalog: 'Singkwenta',
        english: 'Fifty',
        zhTW: '五十',
        zhCN: '五十',
        example: {
          tagalog: 'Singkwenta anyos na siya.',
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
        tagalog: 'Kumusta?',
        english: 'How are you?',
        zhTW: '你好嗎？',
        zhCN: '你好吗？',
        example: {
          tagalog: 'Kumusta ka, kaibigan?',
          english: 'How are you, friend?',
          zhTW: '你好嗎，朋友？',
          zhCN: '你好吗，朋友？'
        }
      },
      {
        id: 'ss2',
        tagalog: 'Ayos lang',
        english: 'I\'m okay / It\'s fine',
        zhTW: '我很好 / 沒事',
        zhCN: '我很好 / 没事',
        example: {
          tagalog: 'Ayos lang ako.',
          english: 'I\'m okay.',
          zhTW: '我很好。',
          zhCN: '我很好。'
        }
      },
      {
        id: 'ss3',
        tagalog: 'Ingat',
        english: 'Take care / Goodbye',
        zhTW: '保重 / 再見',
        zhCN: '保重 / 再见',
        example: {
          tagalog: 'Ingat ka palagi.',
          english: 'Take care always.',
          zhTW: '請保重。',
          zhCN: '请保重。'
        }
      },
      {
        id: 'ss4',
        tagalog: 'Sige',
        english: 'Okay / Go ahead / Bye',
        zhTW: '好的 / 繼續 / 再見',
        zhCN: '好的 / 继续 / 再见',
        example: {
          tagalog: 'Sige, aalis na ako.',
          english: 'Okay, I\'m leaving now.',
          zhTW: '好的，我要走了。',
          zhCN: '好的，我要走了。'
        }
      },
      {
        id: 'ss5',
        tagalog: 'Pasensya na',
        english: 'Sorry',
        zhTW: '抱歉',
        zhCN: '抱歉',
        example: {
          tagalog: 'Pasensya na sa abala.',
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
        tagalog: 'Bayad po',
        english: 'Here is my payment',
        zhTW: '這是車費',
        zhCN: '这是车费',
        example: {
          tagalog: 'Bayad po sa umaga.',
          english: 'Here is my payment (morning).',
          zhTW: '這是早上的車費。',
          zhCN: '这是早上的车费。'
        }
      },
      {
        id: 'trans2',
        tagalog: 'Para',
        english: 'Stop / Pull over',
        zhTW: '停車',
        zhCN: '停车',
        example: {
          tagalog: 'Para po sa tabi.',
          english: 'Please stop at the side.',
          zhTW: '請在路邊停。',
          zhCN: '请在路边停。'
        }
      },
      {
        id: 'trans3',
        tagalog: 'Sa tabi lang',
        english: 'Just at the side',
        zhTW: '就在旁邊',
        zhCN: '就在旁边',
        example: {
          tagalog: 'Bababa ako sa tabi lang.',
          english: 'I will get off just at the side.',
          zhTW: '我就在旁邊下車。',
          zhCN: '我就在旁边下车。'
        }
      },
      {
        id: 'trans4',
        tagalog: 'Sukli',
        english: 'Change / Coins back',
        zhTW: '找零',
        zhCN: '找零',
        example: {
          tagalog: 'Abot po ng sukli.',
          english: 'Please pass the change.',
          zhTW: '請遞一下找零。',
          zhCN: '请递一下找零。'
        }
      },
      {
        id: 'trans5',
        tagalog: 'Kaliwa',
        english: 'Left',
        zhTW: '左',
        zhCN: '左',
        example: {
          tagalog: 'Kumaliwa ka sa kanto.',
          english: 'Turn left at the corner.',
          zhTW: '在路口左轉。',
          zhCN: '在路口左转。'
        }
      },
      {
        id: 'trans6',
        tagalog: 'Kanan',
        english: 'Right',
        zhTW: '右',
        zhCN: '右',
        example: {
          tagalog: 'Kumanan ka pagkatapos.',
          english: 'Turn right afterwards.',
          zhTW: '然後右轉。',
          zhCN: '然后右转。'
        }
      },
      {
        id: 'trans7',
        tagalog: 'Diretso',
        english: 'Straight',
        zhTW: '直走',
        zhCN: '直走',
        example: {
          tagalog: 'Diretso lang ang daan.',
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
        tagalog: 'Ngayon',
        english: 'Now / Today',
        zhTW: '現在 / 今天',
        zhCN: '现在 / 今天',
        example: {
          tagalog: 'Aalis ako ngayon.',
          english: 'I am leaving now.',
          zhTW: '我現在要走了。',
          zhCN: '我现在要走了。'
        }
      },
      {
        id: 'time2',
        tagalog: 'Bukas',
        english: 'Tomorrow',
        zhTW: '明天',
        zhCN: '明天',
        example: {
          tagalog: 'Bukas na lang.',
          english: 'Let\'s just do it tomorrow.',
          zhTW: '明天再說吧。',
          zhCN: '明天再说吧。'
        }
      },
      {
        id: 'time3',
        tagalog: 'Kahapon',
        english: 'Yesterday',
        zhTW: '昨天',
        zhCN: '昨天',
        example: {
          tagalog: 'Dumating siya kahapon.',
          english: 'He/She arrived yesterday.',
          zhTW: '他/她昨天到了。',
          zhCN: '他/她昨天到了。'
        }
      },
      {
        id: 'time4',
        tagalog: 'Mamaya',
        english: 'Later',
        zhTW: '稍後',
        zhCN: '稍后',
        example: {
          tagalog: 'Mamaya na ako kakain.',
          english: 'I will eat later.',
          zhTW: '我晚點再吃。',
          zhCN: '我晚点再吃。'
        }
      },
      {
        id: 'time5',
        tagalog: 'Kanina',
        english: 'Earlier',
        zhTW: '剛才',
        zhCN: '刚才',
        example: {
          tagalog: 'Nakita ko siya kanina.',
          english: 'I saw him/her earlier.',
          zhTW: '我剛才看到他/她了。',
          zhCN: '我刚才看到他/她了。'
        }
      },
      {
        id: 'time6',
        tagalog: 'Agad',
        english: 'Immediately',
        zhTW: '立刻',
        zhCN: '立刻',
        example: {
          tagalog: 'Tumawag ka agad.',
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
        tagalog: 'Malaki',
        english: 'Big',
        zhTW: '大',
        zhCN: '大',
        example: {
          tagalog: 'Malaki ang bahay.',
          english: 'The house is big.',
          zhTW: '房子很大。',
          zhCN: '房子很大。'
        }
      },
      {
        id: 'adj2',
        tagalog: 'Maliit',
        english: 'Small',
        zhTW: '小',
        zhCN: '小',
        example: {
          tagalog: 'Maliit lang ang aso.',
          english: 'The dog is small.',
          zhTW: '那隻狗很小。',
          zhCN: '那只狗很小。'
        }
      },
      {
        id: 'adj3',
        tagalog: 'Mainit',
        english: 'Hot',
        zhTW: '熱',
        zhCN: '热',
        example: {
          tagalog: 'Mainit ang kape.',
          english: 'The coffee is hot.',
          zhTW: '咖啡很熱。',
          zhCN: '咖啡很热。'
        }
      },
      {
        id: 'adj4',
        tagalog: 'Malamig',
        english: 'Cold',
        zhTW: '冷',
        zhCN: '冷',
        example: {
          tagalog: 'Malamig ang panahon.',
          english: 'The weather is cold.',
          zhTW: '天氣很冷。',
          zhCN: '天气很冷。'
        }
      },
      {
        id: 'adj5',
        tagalog: 'Mura',
        english: 'Cheap',
        zhTW: '便宜',
        zhCN: '便宜',
        example: {
          tagalog: 'Mura ang bilihin dito.',
          english: 'Goods are cheap here.',
          zhTW: '這裡的東西很便宜。',
          zhCN: '这里的东西很便宜。'
        }
      },
      {
        id: 'adj6',
        tagalog: 'Mahal',
        english: 'Expensive',
        zhTW: '貴',
        zhCN: '贵',
        example: {
          tagalog: 'Mahal ang kotse.',
          english: 'The car is expensive.',
          zhTW: '這輛車很貴。',
          zhCN: '这辆车很贵。'
        }
      },
      {
        id: 'adj7',
        tagalog: 'Masarap',
        english: 'Delicious',
        zhTW: '好吃',
        zhCN: '好吃',
        example: {
          tagalog: 'Masarap ang luto mo.',
          english: 'Your cooking is delicious.',
          zhTW: '你做的菜很好吃。',
          zhCN: '你做的菜很好吃。'
        }
      },
      {
        id: 'adj8',
        tagalog: 'Hindi masarap',
        english: 'Not delicious',
        zhTW: '不好吃',
        zhCN: '不好吃',
        example: {
          tagalog: 'Hindi masarap ang ulam.',
          english: 'The dish is not delicious.',
          zhTW: '這道菜不好吃。',
          zhCN: '这道菜不好吃。'
        }
      },
      {
        id: 'adj9',
        tagalog: 'Pagod',
        english: 'Tired',
        zhTW: '累',
        zhCN: '累',
        example: {
          tagalog: 'Pagod ako galing trabaho.',
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
        tagalog: 'Magkano?',
        english: 'How much?',
        zhTW: '多少錢？',
        zhCN: '多少钱？',
        example: {
          tagalog: 'Magkano ito?',
          english: 'How much is this?',
          zhTW: '這個多少錢？',
          zhCN: '这个多少钱？'
        }
      },
      {
        id: 'mon2',
        tagalog: 'Tawad',
        english: 'Discount / Haggle',
        zhTW: '折扣 / 殺價',
        zhCN: '折扣 / 杀价',
        example: {
          tagalog: 'Wala bang tawad?',
          english: 'No discount?',
          zhTW: '沒有折扣嗎？',
          zhCN: '没有折扣吗？'
        }
      },
      {
        id: 'mon3',
        tagalog: 'Mahal',
        english: 'Expensive',
        zhTW: '貴',
        zhCN: '贵',
        example: {
          tagalog: 'Masyadong mahal.',
          english: 'Too expensive.',
          zhTW: '太貴了。',
          zhCN: '太贵了。'
        }
      },
      {
        id: 'mon4',
        tagalog: 'Mura',
        english: 'Cheap',
        zhTW: '便宜',
        zhCN: '便宜',
        example: {
          tagalog: 'Doon ay mura.',
          english: 'It is cheap there.',
          zhTW: '那裡很便宜。',
          zhCN: '那里很便宜。'
        }
      },
      {
        id: 'mon5',
        tagalog: 'Barya',
        english: 'Loose change / Coins',
        zhTW: '零錢',
        zhCN: '零钱',
        example: {
          tagalog: 'Wala akong barya.',
          english: 'I don\'t have loose change.',
          zhTW: '我沒有零錢。',
          zhCN: '我没有零钱。'
        }
      },
      {
        id: 'mon6',
        tagalog: 'Cash / G-Cash',
        english: 'Cash / Digital Wallet',
        zhTW: '現金 / 電子錢包',
        zhCN: '现金 / 电子钱包',
        example: {
          tagalog: 'Pwede ba ang G-Cash?',
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
        tagalog: 'Pahingi',
        english: 'Please give me / Can I have',
        zhTW: '請給我',
        zhCN: '请给我',
        example: {
          tagalog: 'Pahingi ng tubig.',
          english: 'Water please.',
          zhTW: '請給我水。',
          zhCN: '请给我水。'
        }
      },
      {
        id: 'din2',
        tagalog: 'Isa pa',
        english: 'One more',
        zhTW: '再來一個',
        zhCN: '再来一个',
        example: {
          tagalog: 'Isa pa pong kanin.',
          english: 'One more rice please.',
          zhTW: '請再來一份飯。',
          zhCN: '请再来一份饭。'
        }
      },
      {
        id: 'din3',
        tagalog: 'Busog',
        english: 'Full',
        zhTW: '飽',
        zhCN: '饱',
        example: {
          tagalog: 'Busog na ako.',
          english: 'I am full already.',
          zhTW: '我已經飽了。',
          zhCN: '我已经饱了。'
        }
      },
      {
        id: 'din4',
        tagalog: 'Gutom',
        english: 'Hungry',
        zhTW: '餓',
        zhCN: '饿',
        example: {
          tagalog: 'Gutom na ako.',
          english: 'I am hungry already.',
          zhTW: '我已經餓了。',
          zhCN: '我已经饿了。'
        }
      },
      {
        id: 'din5',
        tagalog: 'Bill out',
        english: 'Can I have the check?',
        zhTW: '買單',
        zhCN: '买单',
        example: {
          tagalog: 'Bill out na po.',
          english: 'Check please.',
          zhTW: '請買單。',
          zhCN: '请买单。'
        }
      },
      {
        id: 'din6',
        tagalog: 'Take out / Dine in',
        english: 'To go / Eat here',
        zhTW: '外帶 / 內用',
        zhCN: '外带 / 内用',
        example: {
          tagalog: 'Take out po.',
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
        tagalog: 'Tulong',
        english: 'Help',
        zhTW: '幫忙 / 救命',
        zhCN: '帮忙 / 救命',
        example: {
          tagalog: 'Tulong! Tulungan mo ako.',
          english: 'Help! Help me.',
          zhTW: '救命！幫幫我。',
          zhCN: '救命！帮帮我。'
        }
      },
      {
        id: 'hlt2',
        tagalog: 'Masakit',
        english: 'Painful',
        zhTW: '痛',
        zhCN: '痛',
        example: {
          tagalog: 'Masakit ang ulo ko.',
          english: 'My head hurts.',
          zhTW: '我頭痛。',
          zhCN: '我头痛。'
        }
      },
      {
        id: 'hlt3',
        tagalog: 'Gamot',
        english: 'Medicine',
        zhTW: '藥',
        zhCN: '药',
        example: {
          tagalog: 'Kailangan ko ng gamot.',
          english: 'I need medicine.',
          zhTW: '我需要藥。',
          zhCN: '我需要药。'
        }
      },
      {
        id: 'hlt4',
        tagalog: 'Ulo',
        english: 'Head',
        zhTW: '頭',
        zhCN: '头',
        example: {
          tagalog: 'Masakit ang ulo.',
          english: 'Head is painful.',
          zhTW: '頭痛。',
          zhCN: '头痛。'
        }
      },
      {
        id: 'hlt5',
        tagalog: 'Tiyan',
        english: 'Stomach',
        zhTW: '肚子',
        zhCN: '肚子',
        example: {
          tagalog: 'Masakit ang tiyan ko.',
          english: 'My stomach hurts.',
          zhTW: '我肚子痛。',
          zhCN: '我肚子痛。'
        }
      },
      {
        id: 'hlt6',
        tagalog: 'Lagnat',
        english: 'Fever',
        zhTW: '發燒',
        zhCN: '发烧',
        example: {
          tagalog: 'May lagnat ang bata.',
          english: 'The child has a fever.',
          zhTW: '孩子發燒了。',
          zhCN: '孩子发烧了。'
        }
      },
      {
        id: 'hlt7',
        tagalog: 'Ospital',
        english: 'Hospital',
        zhTW: '醫院',
        zhCN: '医院',
        example: {
          tagalog: 'Dalhin sa ospital.',
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
        tagalog: 'Ilang taon ka na?',
        english: 'How old are you?',
        zhTW: '你幾歲了？',
        zhCN: '你几岁了？',
        example: {
          tagalog: 'Ilang taon ka na ngayon?',
          english: 'How old are you now?',
          zhTW: '你現在幾歲了？',
          zhCN: '你现在几岁了？'
        }
      },
      {
        id: 'fam2',
        tagalog: 'Binata / Dalaga',
        english: 'Single Man / Single Woman',
        zhTW: '單身男子 / 單身女子',
        zhCN: '单身男子 / 单身女子',
        example: {
          tagalog: 'Siya ay dalaga pa.',
          english: 'She is still single.',
          zhTW: '她還是單身。',
          zhCN: '她还是单身。'
        }
      },
      {
        id: 'fam3',
        tagalog: 'May asawa',
        english: 'Married / Have a spouse',
        zhTW: '已婚',
        zhCN: '已婚',
        example: {
          tagalog: 'May asawa na ako.',
          english: 'I am already married.',
          zhTW: '我已經結婚了。',
          zhCN: '我已经结婚了。'
        }
      },
      {
        id: 'fam4',
        tagalog: 'Kapatid',
        english: 'Sibling',
        zhTW: '兄弟姊妹',
        zhCN: '兄弟姐妹',
        example: {
          tagalog: 'Ilan ang kapatid mo?',
          english: 'How many siblings do you have?',
          zhTW: '你有幾個兄弟姊妹？',
          zhCN: '你有几个兄弟姐妹？'
        }
      },
      {
        id: 'fam5',
        tagalog: 'Anak',
        english: 'Child',
        zhTW: '孩子',
        zhCN: '孩子',
        example: {
          tagalog: 'Mahal ko ang aking anak.',
          english: 'I love my child.',
          zhTW: '我愛我的孩子。',
          zhCN: '我爱我的孩子。'
        }
      },
      {
        id: 'fam6',
        tagalog: 'Taga-saan ka?',
        english: 'Where are you from?',
        zhTW: '你是哪裡人？',
        zhCN: '你是哪里人？',
        example: {
          tagalog: 'Taga-saan ka sa Pilipinas?',
          english: 'Where are you from in the Philippines?',
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
        tagalog: 'Sira',
        english: 'Broken',
        zhTW: '壞了',
        zhCN: '坏了',
        example: {
          tagalog: 'Sira ang aircon.',
          english: 'The aircon is broken.',
          zhTW: '冷氣壞了。',
          zhCN: '冷气坏了。'
        }
      },
      {
        id: 'house2',
        tagalog: 'Bukas',
        english: 'Open / On',
        zhTW: '開',
        zhCN: '开',
        example: {
          tagalog: 'Bukas ang ilaw.',
          english: 'The light is on.',
          zhTW: '燈開著。',
          zhCN: '灯开着。'
        }
      },
      {
        id: 'house3',
        tagalog: 'Sarado',
        english: 'Closed / Off',
        zhTW: '關',
        zhCN: '关',
        example: {
          tagalog: 'Sarado ang pinto.',
          english: 'The door is closed.',
          zhTW: '門關著。',
          zhCN: '门关着。'
        }
      },
      {
        id: 'house4',
        tagalog: 'Ilaw',
        english: 'Light',
        zhTW: '燈',
        zhCN: '灯',
        example: {
          tagalog: 'Pakibukas ang ilaw.',
          english: 'Please turn on the light.',
          zhTW: '請開燈。',
          zhCN: '请开灯。'
        }
      },
      {
        id: 'house5',
        tagalog: 'Tubig',
        english: 'Water / Tap',
        zhTW: '水',
        zhCN: '水',
        example: {
          tagalog: 'Walang tubig sa gripo.',
          english: 'No water from the tap.',
          zhTW: '水龍頭沒水。',
          zhCN: '水龙头没水。'
        }
      },
      {
        id: 'house6',
        tagalog: 'Kuryente',
        english: 'Electricity / Power',
        zhTW: '電',
        zhCN: '电',
        example: {
          tagalog: 'Walang kuryente ngayon.',
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
        tagalog: 'Nasaan ang C.R.?',
        english: 'Where is the bathroom?',
        zhTW: '廁所在哪裡？',
        zhCN: '厕所在哪里？',
        example: {
          tagalog: 'Excuse me, nasaan ang C.R.?',
          english: 'Excuse me, where is the bathroom?',
          zhTW: '不好意思，請問廁所在哪裡？',
          zhCN: '不好意思，请问厕所在哪里？'
        }
      },
      {
        id: 'hyg2',
        tagalog: 'May tissue?',
        english: 'Is there toilet paper?',
        zhTW: '有衛生紙嗎？',
        zhCN: '有卫生纸吗？',
        example: {
          tagalog: 'May tissue ba sa loob?',
          english: 'Is there toilet paper inside?',
          zhTW: '裡面有衛生紙嗎？',
          zhCN: '里面有卫生纸吗？'
        }
      },
      {
        id: 'hyg3',
        tagalog: 'Mabaho',
        english: 'Smelly / Stinky',
        zhTW: '臭',
        zhCN: '臭',
        example: {
          tagalog: 'Mabaho ang basura.',
          english: 'The trash is smelly.',
          zhTW: '垃圾很臭。',
          zhCN: '垃圾很臭。'
        }
      },
      {
        id: 'hyg4',
        tagalog: 'Mabango',
        english: 'Fragrant / Smells good',
        zhTW: '香',
        zhCN: '香',
        example: {
          tagalog: 'Mabango ang bulaklak.',
          english: 'The flower smells good.',
          zhTW: '這朵花很香。',
          zhCN: '这朵花很香。'
        }
      },
      {
        id: 'hyg5',
        tagalog: 'Madumi',
        english: 'Dirty',
        zhTW: '髒',
        zhCN: '脏',
        example: {
          tagalog: 'Madumi ang sahig.',
          english: 'The floor is dirty.',
          zhTW: '地板很髒。',
          zhCN: '地板很脏。'
        }
      },
      {
        id: 'hyg6',
        tagalog: 'Malinis',
        english: 'Clean',
        zhTW: '乾淨',
        zhCN: '干净',
        example: {
          tagalog: 'Malinis na ang kwarto.',
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
        tagalog: 'Pa-load po',
        english: 'I would like to buy phone credits',
        zhTW: '我想儲值電話費',
        zhCN: '我想充值电话费',
        example: {
          tagalog: 'Pa-load po ng 50 pesos.',
          english: 'I would like to buy 50 pesos load.',
          zhTW: '請幫我儲值 50 披索。',
          zhCN: '请帮我充值 50 披索。'
        }
      },
      {
        id: 'dig2',
        tagalog: 'Walang signal',
        english: 'No signal',
        zhTW: '沒有訊號',
        zhCN: '没有信号',
        example: {
          tagalog: 'Walang signal dito sa bundok.',
          english: 'There is no signal here in the mountain.',
          zhTW: '山上這裡沒有訊號。',
          zhCN: '山上这里没有信号。'
        }
      },
      {
        id: 'dig3',
        tagalog: 'Lowbat',
        english: 'Low battery',
        zhTW: '沒電了',
        zhCN: '没电了',
        example: {
          tagalog: 'Lowbat na ako.',
          english: 'My battery is low.',
          zhTW: '我手機快沒電了。',
          zhCN: '我手机快没电了。'
        }
      },
      {
        id: 'dig4',
        tagalog: 'Charger',
        english: 'Charger',
        zhTW: '充電器',
        zhCN: '充电器',
        example: {
          tagalog: 'May charger ka bang dala?',
          english: 'Do you have a charger with you?',
          zhTW: '你有帶充電器嗎？',
          zhCN: '你有带充电器吗？'
        }
      },
      {
        id: 'dig5',
        tagalog: 'Password',
        english: 'Password',
        zhTW: '密碼',
        zhCN: '密码',
        example: {
          tagalog: 'Anong password ng wifi?',
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
        tagalog: 'Sobrang init!',
        english: 'It\'s too hot!',
        zhTW: '太熱了！',
        zhCN: '太热了！',
        example: {
          tagalog: 'Sobrang init ngayon sa labas.',
          english: 'It\'s too hot outside today.',
          zhTW: '今天外面太熱了。',
          zhCN: '今天外面太热了。'
        }
      },
      {
        id: 'wth2',
        tagalog: 'Umuulan',
        english: 'It is raining',
        zhTW: '下雨了',
        zhCN: '下雨了',
        example: {
          tagalog: 'Umuulan nang malakas.',
          english: 'It is raining hard.',
          zhTW: '雨下得很大。',
          zhCN: '雨下得很大。'
        }
      },
      {
        id: 'wth3',
        tagalog: 'Bagyo',
        english: 'Typhoon / Storm',
        zhTW: '颱風 / 風暴',
        zhCN: '台风 / 风暴',
        example: {
          tagalog: 'May bagyo ba bukas?',
          english: 'Is there a storm tomorrow?',
          zhTW: '明天有颱風嗎？',
          zhCN: '明天有台风吗？'
        }
      },
      {
        id: 'wth4',
        tagalog: 'Baha',
        english: 'Flood',
        zhTW: '淹水',
        zhCN: '淹水',
        example: {
          tagalog: 'Baha sa kalsada.',
          english: 'The street is flooded.',
          zhTW: '馬路淹水了。',
          zhCN: '马路淹水了。'
        }
      },
      {
        id: 'wth5',
        tagalog: 'Payong',
        english: 'Umbrella',
        zhTW: '雨傘',
        zhCN: '雨伞',
        example: {
          tagalog: 'Dadalhin ko ang payong ko.',
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
        tagalog: 'Kanto',
        english: 'Corner',
        zhTW: '路口 / 轉角',
        zhCN: '路口 / 转角',
        example: {
          tagalog: 'Sa kanto lang po.',
          english: 'Just at the corner.',
          zhTW: '就在路口。',
          zhCN: '就在路口。'
        }
      },
      {
        id: 'nav2',
        tagalog: 'Harap',
        english: 'Front',
        zhTW: '前面',
        zhCN: '前面',
        example: {
          tagalog: 'Sa harap ng Jollibee.',
          english: 'In front of Jollibee.',
          zhTW: '在 Jollibee 前面。',
          zhCN: '在 Jollibee 前面。'
        }
      },
      {
        id: 'nav3',
        tagalog: 'Likod',
        english: 'Back / Behind',
        zhTW: '後面',
        zhCN: '后面',
        example: {
          tagalog: 'Sa likod ng bahay.',
          english: 'Behind the house.',
          zhTW: '在房子後面。',
          zhCN: '在房子后面。'
        }
      },
      {
        id: 'nav4',
        tagalog: 'Tulay',
        english: 'Bridge',
        zhTW: '橋',
        zhCN: '桥',
        example: {
          tagalog: 'Tatawid tayo sa tulay.',
          english: 'We will cross the bridge.',
          zhTW: '我們會過橋。',
          zhCN: '我们会过桥。'
        }
      },
      {
        id: 'nav5',
        tagalog: 'Tawiran',
        english: 'Crosswalk / Overpass',
        zhTW: '斑馬線 / 天橋',
        zhCN: '斑马线 / 天桥',
        example: {
          tagalog: 'Gamitin ang tawiran.',
          english: 'Use the crosswalk/overpass.',
          zhTW: '使用斑馬線/天橋。',
          zhCN: '使用斑马线/天桥。'
        }
      },
      {
        id: 'nav6',
        tagalog: 'Simbahan',
        english: 'Church',
        zhTW: '教堂',
        zhCN: '教堂',
        example: {
          tagalog: 'Malapit sa simbahan.',
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
        tagalog: 'Masaya',
        english: 'Happy',
        zhTW: '快樂',
        zhCN: '快乐',
        example: {
          tagalog: 'Masaya ako ngayon.',
          english: 'I am happy today.',
          zhTW: '我今天很快樂。',
          zhCN: '我今天很快乐。'
        }
      },
      {
        id: 'emo2',
        tagalog: 'Malungkot',
        english: 'Sad',
        zhTW: '難過',
        zhCN: '难过',
        example: {
          tagalog: 'Bakit ka malungkot?',
          english: 'Why are you sad?',
          zhTW: '你為什麼難過？',
          zhCN: '你为什么难过？'
        }
      },
      {
        id: 'emo3',
        tagalog: 'Galit',
        english: 'Angry',
        zhTW: '生氣',
        zhCN: '生气',
        example: {
          tagalog: 'Huwag kang galit.',
          english: 'Don\'t be angry.',
          zhTW: '不要生氣。',
          zhCN: '不要生气。'
        }
      },
      {
        id: 'emo4',
        tagalog: 'Nagugutom',
        english: 'Hungry',
        zhTW: '餓',
        zhCN: '饿',
        example: {
          tagalog: 'Nagugutom na ako.',
          english: 'I am getting hungry.',
          zhTW: '我餓了。',
          zhCN: '我饿了。'
        }
      },
      {
        id: 'emo5',
        tagalog: 'Inaantok',
        english: 'Sleepy',
        zhTW: '想睡',
        zhCN: '想睡',
        example: {
          tagalog: 'Inaantok ako sa klase.',
          english: 'I am sleepy in class.',
          zhTW: '我上課想睡覺。',
          zhCN: '我上课想睡觉。'
        }
      },
      {
        id: 'emo6',
        tagalog: 'Kilig',
        english: 'Romantic excitement',
        zhTW: '心動',
        zhCN: '心动',
        example: {
          tagalog: 'Kinikilig ako sa kanila.',
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
        tagalog: 'Talaga?',
        english: 'Really?',
        zhTW: '真的嗎？',
        zhCN: '真的吗？',
        example: {
          tagalog: 'Talaga? Hindi nga?',
          english: 'Really? Is that so?',
          zhTW: '真的嗎？不是吧？',
          zhCN: '真的吗？不是吧？'
        }
      },
      {
        id: 'tag2',
        tagalog: 'Grabe',
        english: 'Wow / Extreme',
        zhTW: '哇 / 太誇張',
        zhCN: '哇 / 太夸张',
        example: {
          tagalog: 'Grabe ang init!',
          english: 'The heat is extreme!',
          zhTW: '熱得太誇張了！',
          zhCN: '热得太夸张了！'
        }
      },
      {
        id: 'tag3',
        tagalog: 'Siguro',
        english: 'Maybe',
        zhTW: '也許',
        zhCN: '也许',
        example: {
          tagalog: 'Siguro darating siya.',
          english: 'Maybe he/she will arrive.',
          zhTW: '也許他/她會來。',
          zhCN: '也许他/她会来。'
        }
      },
      {
        id: 'tag4',
        tagalog: 'Basta',
        english: 'Just because / As long as',
        zhTW: '只要 / 反正',
        zhCN: '只要 / 反正',
        example: {
          tagalog: 'Basta ikaw, okay lang.',
          english: 'As long as it\'s you, it\'s okay.',
          zhTW: '只要是你，就可以。',
          zhCN: '只要是你，就可以。'
        }
      },
      {
        id: 'tag5',
        tagalog: 'Sayang',
        english: 'What a waste / pity',
        zhTW: '可惜 / 浪費',
        zhCN: '可惜 / 浪费',
        example: {
          tagalog: 'Sayang ang pagkain.',
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
        tagalog: 'Tara!',
        english: 'Let\'s go!',
        zhTW: '走吧！',
        zhCN: '走吧！',
        example: {
          tagalog: 'Tara na sa mall.',
          english: 'Let\'s go to the mall now.',
          zhTW: '我們去購物中心吧。',
          zhCN: '我们去购物中心吧。'
        }
      },
      {
        id: 'plan2',
        tagalog: 'Sama ka?',
        english: 'Are you coming with us?',
        zhTW: '你要一起來嗎？',
        zhCN: '你要一起来吗？',
        example: {
          tagalog: 'Kakain kami, sama ka?',
          english: 'We are going to eat, are you coming?',
          zhTW: '我們要去吃飯，你要一起嗎？',
          zhCN: '我们要去吃饭，你要一起吗？'
        }
      },
      {
        id: 'plan3',
        tagalog: 'Libre kita',
        english: 'My treat / I\'ll pay for you',
        zhTW: '我請客',
        zhCN: '我请客',
        example: {
          tagalog: 'Tara, libre kita ng kape.',
          english: 'Let\'s go, I\'ll treat you to coffee.',
          zhTW: '走吧，我請你喝咖啡。',
          zhCN: '走吧，我请你喝咖啡。'
        }
      },
      {
        id: 'plan4',
        tagalog: 'KKB (Kanya-Kanyang Bayad)',
        english: 'Dutch Treat / Split the bill',
        zhTW: '各付各的',
        zhCN: '各付各的',
        example: {
          tagalog: 'KKB tayo ha?',
          english: 'We split the bill, okay?',
          zhTW: '我們各付各的，好嗎？',
          zhCN: '我们各付各的，好吗？'
        }
      },
      {
        id: 'plan5',
        tagalog: 'Anong ganap?',
        english: 'What\'s the plan? / What\'s happening?',
        zhTW: '有什麼計畫？ / 發生什麼事？',
        zhCN: '有什么计划？ / 发生什么事？',
        example: {
          tagalog: 'Anong ganap mamaya?',
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
        tagalog: 'Ang ganda mo naman',
        english: 'You are so beautiful',
        zhTW: '你真漂亮',
        zhCN: '你真漂亮',
        example: {
          tagalog: 'Ang ganda mo naman ngayon.',
          english: 'You are so beautiful today.',
          zhTW: '你今天真漂亮。',
          zhCN: '你今天真漂亮。'
        }
      },
      {
        id: 'bol2',
        tagalog: 'Pogi',
        english: 'Handsome',
        zhTW: '帥',
        zhCN: '帅',
        example: {
          tagalog: 'Ang pogi mo talaga.',
          english: 'You are really handsome.',
          zhTW: '你真的很帥。',
          zhCN: '你真的很帅。'
        }
      },
      {
        id: 'bol3',
        tagalog: 'Bagay sa iyo',
        english: 'That suits/fits you well',
        zhTW: '很適合你',
        zhCN: '很适合你',
        example: {
          tagalog: 'Bagay sa iyo ang damit.',
          english: 'The dress suits you well.',
          zhTW: '這件衣服很適合你。',
          zhCN: '这件衣服很适合你。'
        }
      },
      {
        id: 'bol4',
        tagalog: 'Bolero',
        english: 'Flatterer / Smooth talker',
        zhTW: '甜言蜜語的人',
        zhCN: '甜言蜜语的人',
        example: {
          tagalog: 'Huwag kang maniwala, bolero yan.',
          english: 'Don\'t believe him, he\'s a smooth talker.',
          zhTW: '別相信他，他很會甜言蜜語。',
          zhCN: '别相信他，他很会甜言蜜语。'
        }
      },
      {
        id: 'bol5',
        tagalog: 'Naks!',
        english: 'Wow! / Impressive!',
        zhTW: '哇！/ 好厲害！',
        zhCN: '哇！/ 好厉害！',
        example: {
          tagalog: 'Naks! Ang galing mo.',
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
        tagalog: 'Sa tingin ko...',
        english: 'I think... / In my opinion...',
        zhTW: '我覺得... / 在我看來...',
        zhCN: '我觉得... / 在我看来...',
        example: {
          tagalog: 'Sa tingin ko tama ka.',
          english: 'I think you are right.',
          zhTW: '我覺得你是對的。',
          zhCN: '我觉得你是对的。'
        }
      },
      {
        id: 'ewan2',
        tagalog: 'Ewan ko',
        english: 'I don\'t know',
        zhTW: '我不知道',
        zhCN: '我不知道',
        example: {
          tagalog: 'Ewan ko kung nasaan siya.',
          english: 'I don\'t know where he/she is.',
          zhTW: '我不知道他/她在哪裡。',
          zhCN: '我不知道他/她在哪裡。'
        }
      },
      {
        id: 'ewan3',
        tagalog: 'Bahala na',
        english: 'Come what may / I\'ll leave it to fate',
        zhTW: '隨便啦 / 聽天由命',
        zhCN: '随便啦 / 听天由命',
        example: {
          tagalog: 'Bahala na si Batman.',
          english: 'Leave it to fate (Batman).',
          zhTW: '交給命運吧（蝙蝠俠）。',
          zhCN: '交给命运吧（蝙蝠侠）。'
        }
      },
      {
        id: 'ewan4',
        tagalog: 'Depende',
        english: 'It depends',
        zhTW: '看情況',
        zhCN: '看情况',
        example: {
          tagalog: 'Depende sa panahon.',
          english: 'It depends on the weather.',
          zhTW: '看天氣而定。',
          zhCN: '看天气而定。'
        }
      },
      {
        id: 'ewan5',
        tagalog: 'Sigurado ka?',
        english: 'Are you sure?',
        zhTW: '你確定嗎？',
        zhCN: '你确定吗？',
        example: {
          tagalog: 'Sigurado ka ba sa sagot mo?',
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
        tagalog: 'Mahilig ka ba sa...?',
        english: 'Are you fond of...? / Do you like...?',
        zhTW: '你喜歡...嗎？',
        zhCN: '你喜欢...吗？',
        example: {
          tagalog: 'Mahilig ka ba sa Karaoke?',
          english: 'Do you like Karaoke?',
          zhTW: '你喜歡卡拉OK嗎？',
          zhCN: '你喜欢卡拉OK吗？'
        }
      },
      {
        id: 'hob2',
        tagalog: 'Anong gusto mong gawin?',
        english: 'What do you want to do?',
        zhTW: '你想做什麼？',
        zhCN: '你想做什么？',
        example: {
          tagalog: 'Anong gusto mong gawin bukas?',
          english: 'What do you want to do tomorrow?',
          zhTW: '你明天想做什麼？',
          zhCN: '你明天想做什么？'
        }
      },
      {
        id: 'hob3',
        tagalog: 'Mag-travel',
        english: 'To travel',
        zhTW: '旅行',
        zhCN: '旅行',
        example: {
          tagalog: 'Gusto kong mag-travel sa Palawan.',
          english: 'I want to travel to Palawan.',
          zhTW: '我想去巴拉望旅行。',
          zhCN: '我想去巴拉望旅行。'
        }
      },
      {
        id: 'hob4',
        tagalog: 'Manood ng Netflix/Sine',
        english: 'Watch Netflix/Movies',
        zhTW: '看 Netflix/電影',
        zhCN: '看 Netflix/电影',
        example: {
          tagalog: 'Manood tayo ng sine.',
          english: 'Let\'s watch a movie.',
          zhTW: '我們去看電影吧。',
          zhCN: '我们去看电影吧。'
        }
      },
      {
        id: 'hob5',
        tagalog: 'Kumain',
        english: 'Eat',
        zhTW: '吃',
        zhCN: '吃',
        example: {
          tagalog: 'Mahilig akong kumain.',
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
        tagalog: 'Charot',
        english: 'Just kidding!',
        zhTW: '開玩笑的！',
        zhCN: '开玩笑的！',
        example: {
          tagalog: 'Ang ganda ko, charot!',
          english: 'I\'m beautiful, just kidding!',
          zhTW: '我真漂亮，開玩笑的！',
          zhCN: '我真漂亮，开玩笑的！'
        }
      },
      {
        id: 'slang2',
        tagalog: 'Chika',
        english: 'Gossip / Story',
        zhTW: '八卦 / 故事',
        zhCN: '八卦 / 故事',
        example: {
          tagalog: 'Anong chika ngayon?',
          english: 'What\'s the latest gossip?',
          zhTW: '最近有什麼八卦？',
          zhCN: '最近有什么八卦？'
        }
      },
      {
        id: 'slang3',
        tagalog: 'Lodi',
        english: 'Idol / Someone you admire',
        zhTW: '偶像',
        zhCN: '偶像',
        example: {
          tagalog: 'Ikaw ang lodi ko.',
          english: 'You are my idol.',
          zhTW: '你是我的偶像。',
          zhCN: '你是我的偶像。'
        }
      },
      {
        id: 'slang4',
        tagalog: 'Petmalu',
        english: 'Amazing / Extreme',
        zhTW: '厲害 / 猛',
        zhCN: '厉害 / 猛',
        example: {
          tagalog: 'Petmalu ang sayaw mo.',
          english: 'Your dancing is amazing.',
          zhTW: '你跳舞很厲害。',
          zhCN: '你跳舞很厉害。'
        }
      },
      {
        id: 'slang5',
        tagalog: 'Bes / Mars / Pards',
        english: 'Friend / Bestie terms',
        zhTW: '閨蜜 / 兄弟',
        zhCN: '闺蜜 / 兄弟',
        example: {
          tagalog: 'Kamusta ka na bes?',
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
        tagalog: 'Anong trabaho mo?',
        english: 'What is your job?',
        zhTW: '你的工作是什麼？',
        zhCN: '你的工作是什么？',
        example: {
          tagalog: 'Anong trabaho mo sa Maynila?',
          english: 'What is your job in Manila?',
          zhTW: '你在馬尼拉做什麼工作？',
          zhCN: '你在马尼拉做什么工作？'
        }
      },
      {
        id: 'work2',
        tagalog: 'Estudyante',
        english: 'Student',
        zhTW: '學生',
        zhCN: '学生',
        example: {
          tagalog: 'Estudyante pa lang ako.',
          english: 'I am just a student.',
          zhTW: '我還只是個學生。',
          zhCN: '我还只是个学生。'
        }
      },
      {
        id: 'work3',
        tagalog: 'Opisina',
        english: 'Office',
        zhTW: '辦公室',
        zhCN: '办公室',
        example: {
          tagalog: 'Nasa opisina ako ngayon.',
          english: 'I am at the office now.',
          zhTW: '我現在在辦公室。',
          zhCN: '我现在在办公室。'
        }
      },
      {
        id: 'work4',
        tagalog: 'Pagod',
        english: 'Tired',
        zhTW: '累',
        zhCN: '累',
        example: {
          tagalog: 'Pagod ako sa work.',
          english: 'I\'m tired from work.',
          zhTW: '我工作很累。',
          zhCN: '我工作很累。'
        }
      },
      {
        id: 'work5',
        tagalog: 'Bakasyon',
        english: 'Vacation',
        zhTW: '假期 / 度假',
        zhCN: '假期 / 度假',
        example: {
          tagalog: 'Kailangan ko ng bakasyon.',
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
        tagalog: 'Crush kita',
        english: 'I have a crush on you',
        zhTW: '我暗戀你',
        zhCN: '我暗恋你',
        example: {
          tagalog: 'Alam mo ba, crush kita?',
          english: 'Do you know, I have a crush on you?',
          zhTW: '你知道嗎，我暗戀你？',
          zhCN: '你知道吗，我暗恋你？'
        }
      },
      {
        id: 'luv2',
        tagalog: 'Kilig',
        english: 'Romantic excitement / butterflies',
        zhTW: '心動 / 小鹿亂撞',
        zhCN: '心动 / 小鹿乱撞',
        example: {
          tagalog: 'Kinikilig ako sa iyo.',
          english: 'I\'m feeling giddy because of you.',
          zhTW: '因為你，我感到心動。',
          zhCN: '因为你，我感到心动。'
        }
      },
      {
        id: 'luv3',
        tagalog: 'Miss na kita',
        english: 'I miss you already',
        zhTW: '我想你了',
        zhCN: '我想你了',
        example: {
          tagalog: 'Umuwi ka na, miss na kita.',
          english: 'Come home now, I miss you.',
          zhTW: '快回家吧，我想你了。',
          zhCN: '快回家吧，我想你了。'
        }
      },
      {
        id: 'luv4',
        tagalog: 'Single ka ba?',
        english: 'Are you single?',
        zhTW: '你單身嗎？',
        zhCN: '你单身吗？',
        example: {
          tagalog: 'Single ka ba o may boyfriend na?',
          english: 'Are you single or do you have a boyfriend?',
          zhTW: '你單身還是有男朋友了？',
          zhCN: '你单身还是有男朋友了？'
        }
      },
      {
        id: 'luv5',
        tagalog: 'Date tayo?',
        english: 'Let\'s go on a date?',
        zhTW: '我們去約會吧？',
        zhCN: '我们去约会吧？',
        example: {
          tagalog: 'Pwede ba, date tayo bukas?',
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
        tagalog: 'Nagtatampo ka ba?',
        english: 'Are you sulking/upset with me?',
        zhTW: '你在生悶氣嗎？',
        zhCN: '你在生闷气吗？',
        example: {
          tagalog: 'Bakit tahimik ka? Nagtatampo ka ba?',
          english: 'Why are you quiet? Are you sulking?',
          zhTW: '為什麼你這麼安靜？你在生悶氣嗎？',
          zhCN: '为什么你这么安静？你在生闷气吗？'
        }
      },
      {
        id: 'confl2',
        tagalog: 'Galit ka ba?',
        english: 'Are you angry?',
        zhTW: '你生氣了嗎？',
        zhCN: '你生气了吗？',
        example: {
          tagalog: 'Galit ka ba sa akin?',
          english: 'Are you angry with me?',
          zhTW: '你在生我的氣嗎？',
          zhCN: '你在生我的气吗？'
        }
      },
      {
        id: 'confl3',
        tagalog: 'Bati na tayo',
        english: 'Let\'s make up / Let\'s be friends again',
        zhTW: '我們和好吧',
        zhCN: '我们和好吧',
        example: {
          tagalog: 'Sige na, bati na tayo.',
          english: 'Come on, let\'s make up.',
          zhTW: '好了啦，我們和好吧。',
          zhCN: '好了啦，我们和好吧。'
        }
      },
      {
        id: 'confl4',
        tagalog: 'Sorry na',
        english: 'I\'m sorry / Come on, forgive me',
        zhTW: '對不起啦',
        zhCN: '对不起啦',
        example: {
          tagalog: 'Sorry na, hindi ko sinasadya.',
          english: 'I\'m sorry, I didn\'t mean it.',
          zhTW: '對不起啦，我不是故意的。',
          zhCN: '对不起啦，我不是故意的。'
        }
      },
      {
        id: 'confl5',
        tagalog: 'Lambing',
        english: 'Affection / Coaxing',
        zhTW: '撒嬌 / 哄',
        zhCN: '撒娇 / 哄',
        example: {
          tagalog: 'Kunting lambing lang, okay na siya.',
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
        tagalog: 'Tagay!',
        english: 'Cheers! / Your turn to drink',
        zhTW: '乾杯！/ 換你喝了',
        zhCN: '干杯！/ 换你喝了',
        example: {
          tagalog: 'Tagay na! Ikaw na ang iinom.',
          english: 'Cheers! It\'s your turn to drink.',
          zhTW: '乾杯！換你喝了。',
          zhCN: '干杯！换你喝了。'
        }
      },
      {
        id: 'drink2',
        tagalog: 'Pulutan',
        english: 'Food eaten while drinking',
        zhTW: '下酒菜',
        zhCN: '下酒菜',
        example: {
          tagalog: 'Masarap ang sisig bilang pulutan.',
          english: 'Sisig is delicious as food for drinking.',
          zhTW: 'Sisig 很好吃，適合當下酒菜。',
          zhCN: 'Sisig 很好吃，适合当下酒菜。'
        }
      },
      {
        id: 'drink3',
        tagalog: 'Lasing na ako',
        english: 'I\'m drunk already',
        zhTW: '我醉了',
        zhCN: '我醉了',
        example: {
          tagalog: 'Tama na, lasing na ako.',
          english: 'Enough, I\'m drunk already.',
          zhTW: '夠了，我已經醉了。',
          zhCN: '够了，我已经醉了。'
        }
      },
      {
        id: 'drink4',
        tagalog: 'Konti lang',
        english: 'Just a little bit',
        zhTW: '一點點就好',
        zhCN: '一点点就好',
        example: {
          tagalog: 'Pahingi ng beer, konti lang.',
          english: 'Give me beer, just a little bit.',
          zhTW: '給我一點啤酒，一點點就好。',
          zhCN: '给我一点啤酒，一点点就好。'
        }
      },
      {
        id: 'drink5',
        tagalog: 'Maligayang Bati!',
        english: 'Happy Birthday / Greetings!',
        zhTW: '生日快樂！/ 祝賀！',
        zhCN: '生日快乐！/ 祝贺！',
        example: {
          tagalog: 'Maligayang bati sa iyong kaarawan!',
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
        tagalog: 'Alam mo ba...',
        english: 'Do you know... / Guess what...',
        zhTW: '你知道嗎...',
        zhCN: '你知道吗...',
        example: {
          tagalog: 'Alam mo ba ang nangyari kahapon?',
          english: 'Do you know what happened yesterday?',
          zhTW: '你知道昨天發生了什麼事嗎？',
          zhCN: '你知道昨天发生了什么事吗？'
        }
      },
      {
        id: 'story2',
        tagalog: 'Tapos...',
        english: 'And then...',
        zhTW: '然後...',
        zhCN: '然后...',
        example: {
          tagalog: 'Kumain kami, tapos nanood ng sine.',
          english: 'We ate, and then watched a movie.',
          zhTW: '我們吃了飯，然後看了電影。',
          zhCN: '我们吃了饭，然后看了电影。'
        }
      },
      {
        id: 'story3',
        tagalog: 'Bigla...',
        english: 'Suddenly...',
        zhTW: '突然...',
        zhCN: '突然...',
        example: {
          tagalog: 'Bigla siyang umalis.',
          english: 'He/She suddenly left.',
          zhTW: '他/她突然離開了。',
          zhCN: '他/她突然离开了。'
        }
      },
      {
        id: 'story4',
        tagalog: 'Punyeta',
        english: 'Damn it! (Vulgar)',
        zhTW: '該死！(粗俗)',
        zhCN: '该死！(粗俗)',
        example: {
          tagalog: 'Punyeta! Nakalimutan ko ang susi.',
          english: 'Damn it! I forgot the key.',
          zhTW: '該死！我忘了鑰匙。',
          zhCN: '该死！我忘了钥匙。'
        }
      },
      {
        id: 'story5',
        tagalog: 'Di nga?',
        english: 'For real? / No way?',
        zhTW: '真的嗎？ / 不會吧？',
        zhCN: '真的吗？ / 不会吧？',
        example: {
          tagalog: 'Nanalo siya? Di nga?',
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
        tagalog: 'Aso',
        english: 'Dog',
        zhTW: '狗',
        zhCN: '狗',
        example: {
          tagalog: 'Mabait ang aso.',
          english: 'The dog is kind.',
          zhTW: '狗狗很乖。',
          zhCN: '狗狗很乖。'
        }
      },
      {
        id: 'ani2',
        tagalog: 'Pusa',
        english: 'Cat',
        zhTW: '貓',
        zhCN: '猫',
        example: {
          tagalog: 'Natutulog ang pusa.',
          english: 'The cat is sleeping.',
          zhTW: '貓在睡覺。',
          zhCN: '猫在睡觉。'
        }
      },
      {
        id: 'ani3',
        tagalog: 'Ibon',
        english: 'Bird',
        zhTW: '鳥',
        zhCN: '鸟',
        example: {
          tagalog: 'Lumilipad ang ibon.',
          english: 'The bird is flying.',
          zhTW: '鳥在飛。',
          zhCN: '鸟在飞。'
        }
      },
      {
        id: 'ani4',
        tagalog: 'Baboy',
        english: 'Pig',
        zhTW: '豬',
        zhCN: '猪',
        example: {
          tagalog: 'Mataba ang baboy.',
          english: 'The pig is fat.',
          zhTW: '豬很胖。',
          zhCN: '猪很胖。'
        }
      },
      {
        id: 'ani5',
        tagalog: 'Baka',
        english: 'Cow',
        zhTW: '牛',
        zhCN: '牛',
        example: {
          tagalog: 'Kumakain ng damo ang baka.',
          english: 'The cow is eating grass.',
          zhTW: '牛在吃草。',
          zhCN: '牛在吃草。'
        }
      },
      {
        id: 'ani6',
        tagalog: 'Kalabaw',
        english: 'Carabao / Water Buffalo',
        zhTW: '水牛',
        zhCN: '水牛',
        example: {
          tagalog: 'Ang kalabaw ay masipag.',
          english: 'The carabao is hardworking.',
          zhTW: '水牛很勤勞。',
          zhCN: '水牛很勤劳。'
        }
      },
      {
        id: 'ani7',
        tagalog: 'Ahas',
        english: 'Snake',
        zhTW: '蛇',
        zhCN: '蛇',
        example: {
          tagalog: 'Nakakatakot ang ahas.',
          english: 'The snake is scary.',
          zhTW: '蛇很可怕。',
          zhCN: '蛇很可怕。'
        }
      },
      {
        id: 'ani8',
        tagalog: 'Daga',
        english: 'Mouse / Rat',
        zhTW: '老鼠',
        zhCN: '老鼠',
        example: {
          tagalog: 'Mabilis tumakbo ang daga.',
          english: 'The mouse runs fast.',
          zhTW: '老鼠跑得很快。',
          zhCN: '老鼠跑得很快。'
        }
      },
      {
        id: 'ani9',
        tagalog: 'Lamok',
        english: 'Mosquito',
        zhTW: '蚊子',
        zhCN: '蚊子',
        example: {
          tagalog: 'Maraming lamok kagabi.',
          english: 'There were many mosquitoes last night.',
          zhTW: '昨晚有很多蚊子。',
          zhCN: '昨晚有很多蚊子。'
        }
      },
      {
        id: 'ani10',
        tagalog: 'Ipis',
        english: 'Cockroach',
        zhTW: '蟑螂',
        zhCN: '蟑螂',
        example: {
          tagalog: 'Patayin mo ang ipis.',
          english: 'Kill the cockroach.',
          zhTW: '把蟑螂打死。',
          zhCN: '把蟑螂打死。'
        }
      },
      {
        id: 'ani11',
        tagalog: 'Unggoy',
        english: 'Monkey',
        zhTW: '猴子',
        zhCN: '猴子',
        example: {
          tagalog: 'Makulit ang unggoy.',
          english: 'The monkey is naughty.',
          zhTW: '猴子很調皮。',
          zhCN: '猴子很调皮。'
        }
      },
      {
        id: 'ani12',
        tagalog: 'Kambing',
        english: 'Goat',
        zhTW: '山羊',
        zhCN: '山羊',
        example: {
          tagalog: 'May kambing sa bukid.',
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
        tagalog: 'Ulo',
        english: 'Head',
        zhTW: '頭',
        zhCN: '头',
        example: {
          tagalog: 'Masakit ang ulo ko.',
          english: 'My head hurts.',
          zhTW: '我的頭很痛。',
          zhCN: '我的头很痛。'
        }
      },
      {
        id: 'bp2',
        tagalog: 'Mata',
        english: 'Eye',
        zhTW: '眼睛',
        zhCN: '眼睛',
        example: {
          tagalog: 'Pikit ang iyong mga mata.',
          english: 'Close your eyes.',
          zhTW: '閉上你的眼睛。',
          zhCN: '闭上你的眼睛。'
        }
      },
      {
        id: 'bp3',
        tagalog: 'Ilong',
        english: 'Nose',
        zhTW: '鼻子',
        zhCN: '鼻子',
        example: {
          tagalog: 'Matangos ang kanyang ilong.',
          english: 'His/her nose is pointed.',
          zhTW: '他/她的鼻子很挺。',
          zhCN: '他/她的鼻子很挺。'
        }
      },
      {
        id: 'bp4',
        tagalog: 'Bibig',
        english: 'Mouth',
        zhTW: '嘴巴',
        zhCN: '嘴巴',
        example: {
          tagalog: 'Bukas ang kanyang bibig.',
          english: 'His/her mouth is open.',
          zhTW: '他/她的嘴巴張開著。',
          zhCN: '他/她的嘴巴张开着。'
        }
      },
      {
        id: 'bp5',
        tagalog: 'Tainga',
        english: 'Ear',
        zhTW: '耳朵',
        zhCN: '耳朵',
        example: {
          tagalog: 'Malaki ang kanyang tainga.',
          english: 'His/her ears are big.',
          zhTW: '他/她的耳朵很大。',
          zhCN: '他/她的耳朵很大。'
        }
      },
      {
        id: 'bp6',
        tagalog: 'Buhok',
        english: 'Hair',
        zhTW: '頭髮',
        zhCN: '头发',
        example: {
          tagalog: 'Mahaba ang kanyang buhok.',
          english: 'Her hair is long.',
          zhTW: '她的頭髮很長。',
          zhCN: '她的头发很长。'
        }
      },
      {
        id: 'bp7',
        tagalog: 'Kamay',
        english: 'Hand',
        zhTW: '手',
        zhCN: '手',
        example: {
          tagalog: 'Hugasan mo ang iyong kamay.',
          english: 'Wash your hands.',
          zhTW: '洗洗你的手。',
          zhCN: '洗洗你的手。'
        }
      },
      {
        id: 'bp8',
        tagalog: 'Paa',
        english: 'Foot',
        zhTW: '腳',
        zhCN: '脚',
        example: {
          tagalog: 'Malaki ang aking paa.',
          english: 'My feet are big.',
          zhTW: '我的腳很大。',
          zhCN: '我的脚很大。'
        }
      },
      {
        id: 'bp9',
        tagalog: 'Balikat',
        english: 'Shoulder',
        zhTW: '肩膀',
        zhCN: '肩膀',
        example: {
          tagalog: 'Masakit ang aking balikat.',
          english: 'My shoulder hurts.',
          zhTW: '我的肩膀痛。',
          zhCN: '我的肩膀痛。'
        }
      },
      {
        id: 'bp10',
        tagalog: 'Tiyan',
        english: 'Stomach',
        zhTW: '肚子',
        zhCN: '肚子',
        example: {
          tagalog: 'Gutom na ang aking tiyan.',
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
        tagalog: 'Butas ang bulsa',
        english: 'No money / Broke (Hole in the pocket)',
        zhTW: '沒錢 / 破產 (口袋破洞)',
        zhCN: '没钱 / 破产 (口袋破洞)',
        example: {
          tagalog: 'Butas ang bulsa ko ngayon.',
          english: 'I have no money right now.',
          zhTW: '我現在身無分文。',
          zhCN: '我现在身无分文。'
        }
      },
      {
        id: 'idm2',
        tagalog: 'Itaga sa bato',
        english: 'Mark my words (Cast in stone)',
        zhTW: '記住我的話 / 鐵板釘釘',
        zhCN: '记住我的话 / 铁板钉钉',
        example: {
          tagalog: 'Itaga mo sa bato, babalik ako.',
          english: 'Mark my words, I will return.',
          zhTW: '記住我的話，我會回來的。',
          zhCN: '记住我的话，我会回来的。'
        }
      },
      {
        id: 'idm3',
        tagalog: 'Matalim ang dila',
        english: 'Sharp-tongued / Speaks harshly',
        zhTW: '說話刻薄 / 毒舌',
        zhCN: '说话刻薄 / 毒舌',
        example: {
          tagalog: 'Matalim ang dila ng kapitbahay namin.',
          english: 'Our neighbor is sharp-tongued.',
          zhTW: '我們鄰居說話很刻薄。',
          zhCN: '我们邻居说话很刻薄。'
        }
      },
      {
        id: 'idm4',
        tagalog: 'Ningas kugon',
        english: 'Diligent only at the beginning',
        zhTW: '三分鐘熱度',
        zhCN: '三分钟热度',
        example: {
          tagalog: 'Huwag maging ningas kugon sa pag-aaral.',
          english: 'Do not be diligent only at the beginning in your studies.',
          zhTW: '學習不要只有三分鐘熱度。',
          zhCN: '学习不要只有三分钟热度。'
        }
      },
      {
        id: 'idm5',
        tagalog: 'Isang kahig, isang tuka',
        english: 'Living hand-to-mouth / Surviving day by day',
        zhTW: '勉強糊口 / 賺一天吃一天',
        zhCN: '勉强糊口 / 赚一天吃一天',
        example: {
          tagalog: 'Sila ay isang kahig, isang tuka.',
          english: 'They are living hand-to-mouth.',
          zhTW: '他們過著勉強糊口的生活。',
          zhCN: '他们过着勉强糊口的生活。'
        }
      },
      {
        id: 'idm6',
        tagalog: 'Kayod kalabaw',
        english: 'Hardworking (Working like a carabao)',
        zhTW: '拼命工作 / 像牛一樣工作',
        zhCN: '拼命工作 / 像牛一样工作',
        example: {
          tagalog: 'Kayod kalabaw siya para sa pamilya.',
          english: 'He/She works very hard for the family.',
          zhTW: '他/她為了家庭拼命工作。',
          zhCN: '他/她为了家庭拼命工作。'
        }
      },
      {
        id: 'idm7',
        tagalog: 'Magaan ang dugo',
        english: 'Easy to get along with (Light blood)',
        zhTW: '容易相處 / 討人喜歡',
        zhCN: '容易相处 / 讨人喜欢',
        example: {
          tagalog: 'Magaan ang dugo ko sa kanya.',
          english: 'I easily get along with him/her.',
          zhTW: '我很容易和他/她相處。',
          zhCN: '我很容易和他/她相处。'
        }
      },
      {
        id: 'idm8',
        tagalog: 'Ilaw ng tahanan',
        english: 'Mother (Light of the home)',
        zhTW: '母親 (家庭之光)',
        zhCN: '母亲 (家庭之光)',
        example: {
          tagalog: 'Mahal natin ang ilaw ng tahanan.',
          english: 'We love the mother of the home.',
          zhTW: '我們愛家庭的母親。',
          zhCN: '我们爱家庭的母亲。'
        }
      },
      {
        id: 'idm9',
        tagalog: 'Haligi ng tahanan',
        english: 'Father (Pillar of the home)',
        zhTW: '父親 (家庭的支柱)',
        zhCN: '父亲 (家庭的支柱)',
        example: {
          tagalog: 'Masipag ang haligi ng tahanan.',
          english: 'The father is hardworking.',
          zhTW: '父親很勤勞。',
          zhCN: '父亲很勤劳。'
        }
      },
      {
        id: 'idm10',
        tagalog: 'Balat-sibuyas',
        english: 'Sensitive / Easily hurt (Onion-skinned)',
        zhTW: '敏感 / 玻璃心 (洋蔥皮)',
        zhCN: '敏感 / 玻璃心 (洋葱皮)',
        example: {
          tagalog: 'Balat-sibuyas ang kaibigan ko.',
          english: 'My friend is very sensitive.',
          zhTW: '我的朋友很敏感。',
          zhCN: '我的朋友很敏感。'
        }
      },
      {
        id: 'idm11',
        tagalog: 'Makati ang kamay',
        english: 'Thief / Prone to stealing (Itchy hands)',
        zhTW: '小偷 / 容易偷東西 (手癢)',
        zhCN: '小偷 / 容易偷东西 (手痒)',
        example: {
          tagalog: 'Mag-ingat, makati ang kamay niya.',
          english: 'Be careful, he/she is a thief.',
          zhTW: '小心，他/她會偷東西。',
          zhCN: '小心，他/她会偷东西。'
        }
      },
      {
        id: 'idm12',
        tagalog: 'Taingang-kawali',
        english: 'Pretending not to hear (Wok ears)',
        zhTW: '裝聾作啞 (鍋耳朵)',
        zhCN: '装聋作哑 (锅耳朵)',
        example: {
          tagalog: 'Huwag kang mag-taingang-kawali.',
          english: 'Do not pretend not to hear.',
          zhTW: '不要裝聾作啞。',
          zhCN: '不要装聋作哑。'
        }
      },
      {
        id: 'idm13',
        tagalog: 'Kapag pumuti ang uwak',
        english: 'When pigs fly / Highly unlikely (When the crow turns white)',
        zhTW: '不可能發生的事 (當烏鴉變白)',
        zhCN: '不可能发生的事 (当乌鸦变白)',
        example: {
          tagalog: 'Babayaran kita kapag pumuti ang uwak.',
          english: 'I will pay you when pigs fly.',
          zhTW: '等太陽從西邊出來我再還你錢。',
          zhCN: '等太阳从西边出来我再还你钱。'
        }
      },
      {
        id: 'idm14',
        tagalog: 'Bukas ang palad',
        english: 'Generous (Open-palmed)',
        zhTW: '慷慨 / 樂於助人 (張開手掌)',
        zhCN: '慷慨 / 乐于助人 (张开手掌)',
        example: {
          tagalog: 'Bukas ang palad niya sa mga mahihirap.',
          english: 'He/She is generous to the poor.',
          zhTW: '他/她對窮人很慷慨。',
          zhCN: '他/她对穷人很慷慨。'
        }
      },
      {
        id: 'idm15',
        tagalog: 'Makapal ang mukha',
        english: 'Shameless (Thick-faced)',
        zhTW: '厚顏無恥 (臉皮厚)',
        zhCN: '厚颜无耻 (脸皮厚)',
        example: {
          tagalog: 'Makapal ang mukha niyang umutang ulit.',
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
        tagalog: 'Saan ang hotel?',
        english: 'Where is the hotel?',
        zhTW: '酒店在哪裡？',
        zhCN: '酒店在哪里？',
        example: {
          tagalog: 'Saan po ang hotel?',
          english: 'Where is the hotel (polite)?',
          zhTW: '請問酒店在哪裡？',
          zhCN: '请问酒店在哪里？'
        }
      },
      {
        id: 'htl2',
        tagalog: 'Kukunin ko',
        english: 'I will take it',
        zhTW: '我要這個',
        zhCN: '我要这个',
        example: {
          tagalog: 'Sige, kukunin ko.',
          english: 'OK, I\'ll take it.',
          zhTW: '好的，我要這個。',
          zhCN: '好的，我要这个。'
        }
      },
      {
        id: 'htl3',
        tagalog: 'Mananatili ako',
        english: 'I will stay',
        zhTW: '我將停留',
        zhCN: '我将停留',
        example: {
          tagalog: 'Mananatili ako ng dalawang gabi.',
          english: 'I will stay for two nights.',
          zhTW: '我會住兩個晚上。',
          zhCN: '我会住两个晚上。'
        }
      },
      {
        id: 'htl4',
        tagalog: 'May safe ba?',
        english: 'Do you have a safe?',
        zhTW: '有保險箱嗎？',
        zhCN: '有保险箱吗？',
        example: {
          tagalog: 'Meron po ba kayong safe?',
          english: 'Do you have a safe (polite)?',
          zhTW: '請問你們有保險箱嗎？',
          zhCN: '请问你们有保险箱吗？'
        }
      },
      {
        id: 'htl5',
        tagalog: 'Kasama ba ang almusal?',
        english: 'Is breakfast included?',
        zhTW: '包含早餐嗎？',
        zhCN: '包含早餐吗？',
        example: {
          tagalog: 'Kasama po ba ang almusal?',
          english: 'Is breakfast included (polite)?',
          zhTW: '請問包含早餐嗎？',
          zhCN: '请问包含早餐吗？'
        }
      },
      {
        id: 'htl6',
        tagalog: 'Pakilinisan ang kwarto',
        english: 'Please clean the room',
        zhTW: '請打掃房間',
        zhCN: '请打扫房间',
        example: {
          tagalog: 'Pakilinisan po ang aking kwarto.',
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
        tagalog: 'Paliparan',
        english: 'Airport',
        zhTW: '機場',
        zhCN: '机场',
        example: {
          tagalog: 'Saan ang paliparan?',
          english: 'Where is the airport?',
          zhTW: '機場在哪裡？',
          zhCN: '机场在哪里？'
        }
      },
      {
        id: 'air2',
        tagalog: 'Eroplano',
        english: 'Airplane',
        zhTW: '飛機',
        zhCN: '飞机',
        example: {
          tagalog: 'Malaki ang eroplano.',
          english: 'The airplane is big.',
          zhTW: '飛機很大。',
          zhCN: '飞机很大。'
        }
      },
      {
        id: 'air3',
        tagalog: 'Bagahe',
        english: 'Luggage / Baggage',
        zhTW: '行李',
        zhCN: '行李',
        example: {
          tagalog: 'Ito ang aking bagahe.',
          english: 'This is my luggage.',
          zhTW: '這是我的行李。',
          zhCN: '这是我的行李。'
        }
      },
      {
        id: 'air4',
        tagalog: 'Tiket',
        english: 'Ticket',
        zhTW: '機票 / 票',
        zhCN: '机票 / 票',
        example: {
          tagalog: 'Nasaan ang iyong tiket?',
          english: 'Where is your ticket?',
          zhTW: '你的機票在哪裡？',
          zhCN: '你的机票在哪里？'
        }
      },
      {
        id: 'air5',
        tagalog: 'Pasaporte',
        english: 'Passport',
        zhTW: '護照',
        zhCN: '护照',
        example: {
          tagalog: 'Kailangan ko ang pasaporte mo.',
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
        tagalog: 'Paano pumunta sa...?',
        english: 'How to go to...?',
        zhTW: '怎麼去...？',
        zhCN: '怎么去...？',
        example: {
          tagalog: 'Paano pumunta sa hotel?',
          english: 'How to go to the hotel?',
          zhTW: '怎麼去酒店？',
          zhCN: '怎么去酒店？'
        }
      },
      {
        id: 'dir2',
        tagalog: 'Malayo ba?',
        english: 'Is it far?',
        zhTW: '遠嗎？',
        zhCN: '远吗？',
        example: {
          tagalog: 'Malayo ba ang paliparan?',
          english: 'Is the airport far?',
          zhTW: '機場遠嗎？',
          zhCN: '机场远吗？'
        }
      },
      {
        id: 'dir3',
        tagalog: 'Malapit lang',
        english: 'It is near',
        zhTW: '很近',
        zhCN: '很近',
        example: {
          tagalog: 'Malapit lang ang mall.',
          english: 'The mall is near.',
          zhTW: '購物中心很近。',
          zhCN: '购物中心很近。'
        }
      },
      {
        id: 'dir4',
        tagalog: 'Lumiko',
        english: 'Turn',
        zhTW: '轉彎',
        zhCN: '转弯',
        example: {
          tagalog: 'Lumiko sa kanan.',
          english: 'Turn right.',
          zhTW: '向右轉。',
          zhCN: '向右转。'
        }
      },
      {
        id: 'dir5',
        tagalog: 'Diretso lang',
        english: 'Just go straight',
        zhTW: '直走',
        zhCN: '直走',
        example: {
          tagalog: 'Diretso lang po.',
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
        tagalog: 'Mamasyal',
        english: 'To stroll / Sightsee',
        zhTW: '逛逛 / 觀光',
        zhCN: '逛逛 / 观光',
        example: {
          tagalog: 'Gusto kong mamasyal.',
          english: 'I want to stroll/sightsee.',
          zhTW: '我想去逛逛。',
          zhCN: '我想去逛逛。'
        }
      },
      {
        id: 'see2',
        tagalog: 'Maganda',
        english: 'Beautiful',
        zhTW: '美麗',
        zhCN: '美丽',
        example: {
          tagalog: 'Maganda ang tanawin.',
          english: 'The view is beautiful.',
          zhTW: '風景很美。',
          zhCN: '风景很美。'
        }
      },
      {
        id: 'see3',
        tagalog: 'Litrato',
        english: 'Photo / Picture',
        zhTW: '照片',
        zhCN: '照片',
        example: {
          tagalog: 'Pwede bang kumuha ng litrato?',
          english: 'Can I take a picture?',
          zhTW: '可以拍照嗎？',
          zhCN: '可以拍照吗？'
        }
      },
      {
        id: 'see4',
        tagalog: 'Bukas',
        english: 'Open',
        zhTW: '開放 / 營業',
        zhCN: '开放 / 营业',
        example: {
          tagalog: 'Bukas ba ang museo?',
          english: 'Is the museum open?',
          zhTW: '博物館有開放嗎？',
          zhCN: '博物馆有开放吗？'
        }
      },
      {
        id: 'see5',
        tagalog: 'Sarado',
        english: 'Closed',
        zhTW: '關閉 / 休息',
        zhCN: '关闭 / 休息',
        example: {
          tagalog: 'Sarado na sila.',
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
        tagalog: 'Pasaporte',
        english: 'Passport',
        zhTW: '護照',
        zhCN: '护照',
        example: {
          tagalog: 'Patingin ng pasaporte mo.',
          english: 'Let me see your passport.',
          zhTW: '請出示你的護照。',
          zhCN: '请出示你的护照。'
        }
      },
      {
        id: 'imm2',
        tagalog: 'Bisa',
        english: 'Visa',
        zhTW: '簽證',
        zhCN: '签证',
        example: {
          tagalog: 'Kailangan mo ba ng bisa?',
          english: 'Do you need a visa?',
          zhTW: '你需要簽證嗎？',
          zhCN: '你需要签证吗？'
        }
      },
      {
        id: 'imm3',
        tagalog: 'Turista',
        english: 'Tourist',
        zhTW: '遊客',
        zhCN: '游客',
        example: {
          tagalog: 'Turista lang ako dito.',
          english: 'I am just a tourist here.',
          zhTW: '我只是這裡的遊客。',
          zhCN: '我只是这里的游客。'
        }
      },
      {
        id: 'imm4',
        tagalog: 'Deklarasyon',
        english: 'Declaration',
        zhTW: '申報',
        zhCN: '申报',
        example: {
          tagalog: 'Mayroon ka bang deklarasyon?',
          english: 'Do you have anything to declare?',
          zhTW: '你有需要申報的嗎？',
          zhCN: '你有需要申报的吗？'
        }
      },
      {
        id: 'imm5',
        tagalog: 'Matagal',
        english: 'Long time / Duration',
        zhTW: '很久 / 停留時間',
        zhCN: '很久 / 停留时间',
        example: {
          tagalog: 'Gaano katagal ka dito?',
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
        tagalog: 'Dagat',
        english: 'Sea / Ocean / Beach',
        zhTW: '海 / 沙灘',
        zhCN: '海 / 沙滩',
        example: {
          tagalog: 'Pumunta tayo sa dagat.',
          english: 'Let\'s go to the beach.',
          zhTW: '我們去海邊吧。',
          zhCN: '我们去海边吧。'
        }
      },
      {
        id: 'bch2',
        tagalog: 'Buhangin',
        english: 'Sand',
        zhTW: '沙',
        zhCN: '沙',
        example: {
          tagalog: 'Puti ang buhangin dito.',
          english: 'The sand here is white.',
          zhTW: '這裡的沙是白色的。',
          zhCN: '这里的沙是白色的。'
        }
      },
      {
        id: 'bch3',
        tagalog: 'Lumangoy',
        english: 'To swim',
        zhTW: '游泳',
        zhCN: '游泳',
        example: {
          tagalog: 'Marunong ka bang lumangoy?',
          english: 'Do you know how to swim?',
          zhTW: '你會游泳嗎？',
          zhCN: '你会游泳吗？'
        }
      },
      {
        id: 'bch4',
        tagalog: 'Araw',
        english: 'Sun',
        zhTW: '太陽',
        zhCN: '太阳',
        example: {
          tagalog: 'Mainit ang araw ngayon.',
          english: 'The sun is hot today.',
          zhTW: '今天太陽很大。',
          zhCN: '今天太阳很大。'
        }
      },
      {
        id: 'bch5',
        tagalog: 'Bangka',
        english: 'Boat',
        zhTW: '船',
        zhCN: '船',
        example: {
          tagalog: 'Sasakay tayo ng bangka.',
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
        tagalog: 'Pasalubong',
        english: 'Souvenir / Gift (brought back)',
        zhTW: '伴手禮',
        zhCN: '伴手礼',
        example: {
          tagalog: 'Bibili ako ng pasalubong.',
          english: 'I will buy souvenirs.',
          zhTW: '我要買伴手禮。',
          zhCN: '我要买伴手礼。'
        }
      },
      {
        id: 'shp2',
        tagalog: 'Pamilihan',
        english: 'Market',
        zhTW: '市場',
        zhCN: '市场',
        example: {
          tagalog: 'Pumunta tayo sa pamilihan.',
          english: 'Let\'s go to the market.',
          zhTW: '我們去市場吧。',
          zhCN: '我们去市场吧。'
        }
      },
      {
        id: 'shp3',
        tagalog: 'Bili',
        english: 'Buy',
        zhTW: '買',
        zhCN: '买',
        example: {
          tagalog: 'Gusto kong bumili nito.',
          english: 'I want to buy this.',
          zhTW: '我想買這個。',
          zhCN: '我想买这个。'
        }
      },
      {
        id: 'shp4',
        tagalog: 'Tawad',
        english: 'Discount',
        zhTW: '折扣',
        zhCN: '折扣',
        example: {
          tagalog: 'Pwede bang tumawad?',
          english: 'Can I get a discount?',
          zhTW: '可以打折嗎？',
          zhCN: '可以打折吗？'
        }
      },
      {
        id: 'shp5',
        tagalog: 'Sukli',
        english: 'Change (money)',
        zhTW: '找零',
        zhCN: '找零',
        example: {
          tagalog: 'Ito ang sukli mo.',
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
        tagalog: 'Pareserba',
        english: 'Reservation',
        zhTW: '預訂',
        zhCN: '预订',
        example: {
          tagalog: 'May pareserba ako.',
          english: 'I have a reservation.',
          zhTW: '我有預訂。',
          zhCN: '我有预订。'
        }
      },
      {
        id: 'bkg2',
        tagalog: 'Pangalan',
        english: 'Name',
        zhTW: '名字',
        zhCN: '名字',
        example: {
          tagalog: 'Anong pangalan mo?',
          english: 'What is your name?',
          zhTW: '你的名字是什麼？',
          zhCN: '你的名字是什么？'
        }
      },
      {
        id: 'bkg3',
        tagalog: 'Kwarto',
        english: 'Room',
        zhTW: '房間',
        zhCN: '房间',
        example: {
          tagalog: 'Gusto ko ng malaking kwarto.',
          english: 'I want a big room.',
          zhTW: '我想要一間大房間。',
          zhCN: '我想要一间大房间。'
        }
      },
      {
        id: 'bkg4',
        tagalog: 'Bayad',
        english: 'Payment',
        zhTW: '付款',
        zhCN: '付款',
        example: {
          tagalog: 'Saan ang bayad?',
          english: 'Where is the payment?',
          zhTW: '在哪裡付款？',
          zhCN: '在哪里付款？'
        }
      },
      {
        id: 'bkg5',
        tagalog: 'Kanselahin',
        english: 'To cancel',
        zhTW: '取消',
        zhCN: '取消',
        example: {
          tagalog: 'Gusto kong kanselahin ito.',
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
        tagalog: 'Palitan',
        english: 'Exchange rate / Exchange',
        zhTW: '匯率 / 兌換',
        zhCN: '汇率 / 兑换',
        example: {
          tagalog: 'Saan ang palitan ng pera?',
          english: 'Where is the money exchange?',
          zhTW: '哪裡有換錢的地方？',
          zhCN: '哪里有换钱的地方？'
        }
      },
      {
        id: 'cur2',
        tagalog: 'Pera',
        english: 'Money',
        zhTW: '錢',
        zhCN: '钱',
        example: {
          tagalog: 'Wala akong pera.',
          english: 'I don\'t have money.',
          zhTW: '我沒有錢。',
          zhCN: '我没有钱。'
        }
      },
      {
        id: 'cur3',
        tagalog: 'Dolyar',
        english: 'Dollar',
        zhTW: '美元',
        zhCN: '美元',
        example: {
          tagalog: 'Tumatanggap ba kayo ng dolyar?',
          english: 'Do you accept dollars?',
          zhTW: '你們收美元嗎？',
          zhCN: '你们收美元吗？'
        }
      },
      {
        id: 'cur4',
        tagalog: 'Piso',
        english: 'Peso (Philippine currency)',
        zhTW: '披索 (菲律賓貨幣)',
        zhCN: '披索 (菲律宾货币)',
        example: {
          tagalog: 'Isang daang piso ito.',
          english: 'This is one hundred pesos.',
          zhTW: '這是一百披索。',
          zhCN: '这是一百披索。'
        }
      },
      {
        id: 'cur5',
        tagalog: 'Barya',
        english: 'Coins / Small change',
        zhTW: '硬幣 / 零錢',
        zhCN: '硬币 / 零钱',
        example: {
          tagalog: 'May barya ka ba?',
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
        tagalog: 'Damit',
        english: 'Clothes',
        zhTW: '衣服',
        zhCN: '衣服',
        example: {
          tagalog: 'Bago ang damit ko.',
          english: 'My clothes are new.',
          zhTW: '我的衣服是新的。',
          zhCN: '我的衣服是新的。'
        }
      },
      {
        id: 'cloth2',
        tagalog: 'Sapatos',
        english: 'Shoes',
        zhTW: '鞋子',
        zhCN: '鞋子',
        example: {
          tagalog: 'Malaki ang sapatos niya.',
          english: 'His/her shoes are big.',
          zhTW: '他/她的鞋子很大。',
          zhCN: '他/她的鞋子很大。'
        }
      },
      {
        id: 'cloth3',
        tagalog: 'Sumbrero',
        english: 'Hat',
        zhTW: '帽子',
        zhCN: '帽子',
        example: {
          tagalog: 'Isuot mo ang sumbrero.',
          english: 'Wear the hat.',
          zhTW: '戴上帽子。',
          zhCN: '戴上帽子。'
        }
      },
      {
        id: 'cloth4',
        tagalog: 'Salamin',
        english: 'Glasses / Mirror',
        zhTW: '眼鏡 / 鏡子',
        zhCN: '眼镜 / 镜子',
        example: {
          tagalog: 'Nasaan ang salamin ko?',
          english: 'Where are my glasses?',
          zhTW: '我的眼鏡在哪裡？',
          zhCN: '我的眼镜在哪里？'
        }
      },
      {
        id: 'cloth5',
        tagalog: 'Pantalon',
        english: 'Pants',
        zhTW: '褲子',
        zhCN: '裤子',
        example: {
          tagalog: 'Mahaba ang pantalon.',
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
        tagalog: 'Guro',
        english: 'Teacher',
        zhTW: '老師',
        zhCN: '老师',
        example: {
          tagalog: 'Mabait ang aming guro.',
          english: 'Our teacher is kind.',
          zhTW: '我們的老師很好。',
          zhCN: '我们的老师很好。'
        }
      },
      {
        id: 'prof2',
        tagalog: 'Doktor',
        english: 'Doctor',
        zhTW: '醫生',
        zhCN: '医生',
        example: {
          tagalog: 'Kailangan ko ng doktor.',
          english: 'I need a doctor.',
          zhTW: '我需要醫生。',
          zhCN: '我需要医生。'
        }
      },
      {
        id: 'prof3',
        tagalog: 'Pulis',
        english: 'Police',
        zhTW: '警察',
        zhCN: '警察',
        example: {
          tagalog: 'Tumawag ka ng pulis.',
          english: 'Call the police.',
          zhTW: '叫警察。',
          zhCN: '叫警察。'
        }
      },
      {
        id: 'prof4',
        tagalog: 'Nars',
        english: 'Nurse',
        zhTW: '護士',
        zhCN: '护士',
        example: {
          tagalog: 'Masipag ang nars.',
          english: 'The nurse is hardworking.',
          zhTW: '護士很勤勞。',
          zhCN: '护士很勤劳。'
        }
      },
      {
        id: 'prof5',
        tagalog: 'Inhinyero',
        english: 'Engineer',
        zhTW: '工程師',
        zhCN: '工程师',
        example: {
          tagalog: 'Siya ay isang inhinyero.',
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
        tagalog: 'Bundok',
        english: 'Mountain',
        zhTW: '山',
        zhCN: '山',
        example: {
          tagalog: 'Mataas ang bundok.',
          english: 'The mountain is high.',
          zhTW: '山很高。',
          zhCN: '山很高。'
        }
      },
      {
        id: 'nat2',
        tagalog: 'Ilog',
        english: 'River',
        zhTW: '河流',
        zhCN: '河流',
        example: {
          tagalog: 'Malinaw ang ilog.',
          english: 'The river is clear.',
          zhTW: '河水很清澈。',
          zhCN: '河水很清澈。'
        }
      },
      {
        id: 'nat3',
        tagalog: 'Dagat',
        english: 'Sea / Ocean',
        zhTW: '海',
        zhCN: '海',
        example: {
          tagalog: 'Pumunta tayo sa dagat.',
          english: 'Let\'s go to the sea.',
          zhTW: '我們去海邊吧。',
          zhCN: '我们去海边吧。'
        }
      },
      {
        id: 'nat4',
        tagalog: 'Puno',
        english: 'Tree',
        zhTW: '樹',
        zhCN: '树',
        example: {
          tagalog: 'Malaki ang puno.',
          english: 'The tree is big.',
          zhTW: '這棵樹很大。',
          zhCN: '这棵树很大。'
        }
      },
      {
        id: 'nat5',
        tagalog: 'Bulaklak',
        english: 'Flower',
        zhTW: '花',
        zhCN: '花',
        example: {
          tagalog: 'Mabango ang bulaklak.',
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
        tagalog: 'Bahay',
        english: 'House',
        zhTW: '房子',
        zhCN: '房子',
        example: {
          tagalog: 'Ito ang aming bahay.',
          english: 'This is our house.',
          zhTW: '這是我們的房子。',
          zhCN: '这是我们的房子。'
        }
      },
      {
        id: 'hrm2',
        tagalog: 'Kwarto',
        english: 'Room / Bedroom',
        zhTW: '房間 / 臥室',
        zhCN: '房间 / 卧室',
        example: {
          tagalog: 'Malinis ang kwarto.',
          english: 'The room is clean.',
          zhTW: '房間很乾淨。',
          zhCN: '房间很干净。'
        }
      },
      {
        id: 'hrm3',
        tagalog: 'Kusina',
        english: 'Kitchen',
        zhTW: '廚房',
        zhCN: '厨房',
        example: {
          tagalog: 'Nagluluto siya sa kusina.',
          english: 'He/she is cooking in the kitchen.',
          zhTW: '他/她正在廚房做飯。',
          zhCN: '他/她正在厨房做饭。'
        }
      },
      {
        id: 'hrm4',
        tagalog: 'Banyo',
        english: 'Bathroom',
        zhTW: '浴室 / 廁所',
        zhCN: '浴室 / 厕所',
        example: {
          tagalog: 'Nasaan ang banyo?',
          english: 'Where is the bathroom?',
          zhTW: '浴室在哪裡？',
          zhCN: '浴室在哪里？'
        }
      },
      {
        id: 'hrm5',
        tagalog: 'Sala',
        english: 'Living Room',
        zhTW: '客廳',
        zhCN: '客厅',
        example: {
          tagalog: 'Nanood kami ng TV sa sala.',
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
        tagalog: 'Kain',
        english: 'Eat',
        zhTW: '吃',
        zhCN: '吃',
        example: {
          tagalog: 'Kumain ka na ba?',
          english: 'Have you eaten?',
          zhTW: '你吃了嗎？',
          zhCN: '你吃了吗？'
        }
      },
      {
        id: 'act2',
        tagalog: 'Tulog',
        english: 'Sleep',
        zhTW: '睡覺',
        zhCN: '睡觉',
        example: {
          tagalog: 'Gusto ko nang matulog.',
          english: 'I want to sleep now.',
          zhTW: '我現在想睡覺了。',
          zhCN: '我现在想睡觉了。'
        }
      },
      {
        id: 'act3',
        tagalog: 'Takbo',
        english: 'Run',
        zhTW: '跑',
        zhCN: '跑',
        example: {
          tagalog: 'Tumakbo siya nang mabilis.',
          english: 'He/she ran fast.',
          zhTW: '他/她跑得很快。',
          zhCN: '他/她跑得很快。'
        }
      },
      {
        id: 'act4',
        tagalog: 'Lakad',
        english: 'Walk',
        zhTW: '走',
        zhCN: '走',
        example: {
          tagalog: 'Maglakad tayo sa parke.',
          english: 'Let\'s walk in the park.',
          zhTW: '我們在公園散步吧。',
          zhCN: '我们在公园散步吧。'
        }
      },
      {
        id: 'act5',
        tagalog: 'Basa',
        english: 'Read',
        zhTW: '讀 / 看 (書)',
        zhCN: '读 / 看 (书)',
        example: {
          tagalog: 'Magbasa ka ng libro.',
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
        tagalog: 'Mansanas',
        english: 'Apple',
        zhTW: '蘋果',
        zhCN: '苹果',
        example: {
          tagalog: 'Matamis ang mansanas.',
          english: 'The apple is sweet.',
          zhTW: '蘋果很甜。',
          zhCN: '苹果很甜。'
        }
      },
      {
        id: 'fr2',
        tagalog: 'Saging',
        english: 'Banana',
        zhTW: '香蕉',
        zhCN: '香蕉',
        example: {
          tagalog: 'Kumain siya ng saging.',
          english: 'He/She ate a banana.',
          zhTW: '他/她吃了一根香蕉。',
          zhCN: '他/她吃了一根香蕉。'
        }
      },
      {
        id: 'fr3',
        tagalog: 'Mangga',
        english: 'Mango',
        zhTW: '芒果',
        zhCN: '芒果',
        example: {
          tagalog: 'Paborito ko ang mangga.',
          english: 'Mango is my favorite.',
          zhTW: '芒果是我的最愛。',
          zhCN: '芒果是我的最爱。'
        }
      },
      {
        id: 'fr4',
        tagalog: 'Pinya',
        english: 'Pineapple',
        zhTW: '鳳梨',
        zhCN: '菠萝',
        example: {
          tagalog: 'Maasim ang pinya.',
          english: 'The pineapple is sour.',
          zhTW: '鳳梨很酸。',
          zhCN: '菠萝很酸。'
        }
      },
      {
        id: 'fr5',
        tagalog: 'Pakwan',
        english: 'Watermelon',
        zhTW: '西瓜',
        zhCN: '西瓜',
        example: {
          tagalog: 'Masarap ang pakwan sa tag-init.',
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
        tagalog: 'Kamatis',
        english: 'Tomato',
        zhTW: '番茄',
        zhCN: '番茄',
        example: {
          tagalog: 'Pula ang kamatis.',
          english: 'The tomato is red.',
          zhTW: '番茄是紅色的。',
          zhCN: '番茄是红色的。'
        }
      },
      {
        id: 'veg2',
        tagalog: 'Sibuyas',
        english: 'Onion',
        zhTW: '洋蔥',
        zhCN: '洋葱',
        example: {
          tagalog: 'Bumili ako ng sibuyas.',
          english: 'I bought onions.',
          zhTW: '我買了洋蔥。',
          zhCN: '我买了洋葱。'
        }
      },
      {
        id: 'veg3',
        tagalog: 'Bawang',
        english: 'Garlic',
        zhTW: '大蒜',
        zhCN: '大蒜',
        example: {
          tagalog: 'Kailangan natin ng bawang.',
          english: 'We need garlic.',
          zhTW: '我們需要大蒜。',
          zhCN: '我们需要大蒜。'
        }
      },
      {
        id: 'veg4',
        tagalog: 'Patatas',
        english: 'Potato',
        zhTW: '馬鈴薯',
        zhCN: '土豆',
        example: {
          tagalog: 'Gusto ko ng pritong patatas.',
          english: 'I like fried potatoes.',
          zhTW: '我喜歡炸馬鈴薯。',
          zhCN: '我喜欢炸土豆。'
        }
      },
      {
        id: 'veg5',
        tagalog: 'Talong',
        english: 'Eggplant',
        zhTW: '茄子',
        zhCN: '茄子',
        example: {
          tagalog: 'Masarap ang tortang talong.',
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
        tagalog: 'Bilog',
        english: 'Circle / Round',
        zhTW: '圓形',
        zhCN: '圆形',
        example: {
          tagalog: 'Bilog ang buwan.',
          english: 'The moon is round.',
          zhTW: '月亮是圓的。',
          zhCN: '月亮是圆的。'
        }
      },
      {
        id: 'shape2',
        tagalog: 'Parisukat',
        english: 'Square',
        zhTW: '正方形',
        zhCN: '正方形',
        example: {
          tagalog: 'Parisukat ang kahon.',
          english: 'The box is square.',
          zhTW: '這個盒子是正方形的。',
          zhCN: '这个盒子是正方形的。'
        }
      },
      {
        id: 'shape3',
        tagalog: 'Tatsulok',
        english: 'Triangle',
        zhTW: '三角形',
        zhCN: '三角形',
        example: {
          tagalog: 'Tatsulok ang bubong.',
          english: 'The roof is triangular.',
          zhTW: '屋頂是三角形的。',
          zhCN: '屋顶是三角形的。'
        }
      },
      {
        id: 'shape4',
        tagalog: 'Parihaba',
        english: 'Rectangle',
        zhTW: '長方形',
        zhCN: '长方形',
        example: {
          tagalog: 'Parihaba ang pinto.',
          english: 'The door is rectangular.',
          zhTW: '門是長方形的。',
          zhCN: '门是长方形的。'
        }
      },
      {
        id: 'shape5',
        tagalog: 'Bituin',
        english: 'Star',
        zhTW: '星星',
        zhCN: '星星',
        example: {
          tagalog: 'Maraming bituin sa langit.',
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
        tagalog: 'Kompyuter',
        english: 'Computer',
        zhTW: '電腦',
        zhCN: '电脑',
        example: {
          tagalog: 'Sira ang kompyuter ko.',
          english: 'My computer is broken.',
          zhTW: '我的電腦壞了。',
          zhCN: '我的电脑坏了。'
        }
      },
      {
        id: 'tech2',
        tagalog: 'Mensahe',
        english: 'Message',
        zhTW: '訊息',
        zhCN: '信息',
        example: {
          tagalog: 'May mensahe ka.',
          english: 'You have a message.',
          zhTW: '你有一條訊息。',
          zhCN: '你有一条信息。'
        }
      },
      {
        id: 'tech3',
        tagalog: 'Internet',
        english: 'Internet',
        zhTW: '網際網路',
        zhCN: '互联网',
        example: {
          tagalog: 'Mabagal ang internet.',
          english: 'The internet is slow.',
          zhTW: '網路很慢。',
          zhCN: '网络很慢。'
        }
      },
      {
        id: 'tech4',
        tagalog: 'Teklado',
        english: 'Keyboard',
        zhTW: '鍵盤',
        zhCN: '键盘',
        example: {
          tagalog: 'Bago ang teklado ko.',
          english: 'My keyboard is new.',
          zhTW: '我的鍵盤是新的。',
          zhCN: '我的键盘是新的。'
        }
      },
      {
        id: 'tech5',
        tagalog: 'Screen',
        english: 'Screen',
        zhTW: '螢幕',
        zhCN: '屏幕',
        example: {
          tagalog: 'Malaki ang screen ng TV.',
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
        tagalog: 'Basketbol',
        english: 'Basketball',
        zhTW: '籃球',
        zhCN: '篮球',
        example: {
          tagalog: 'Naglalaro sila ng basketbol.',
          english: 'They are playing basketball.',
          zhTW: '他們在打籃球。',
          zhCN: '他们在打篮球。'
        }
      },
      {
        id: 'spt2',
        tagalog: 'Pagtakbo',
        english: 'Running',
        zhTW: '跑步',
        zhCN: '跑步',
        example: {
          tagalog: 'Mahilig siya sa pagtakbo.',
          english: 'He/She likes running.',
          zhTW: '他/她喜歡跑步。',
          zhCN: '他/她喜欢跑步。'
        }
      },
      {
        id: 'spt3',
        tagalog: 'Paglangoy',
        english: 'Swimming',
        zhTW: '游泳',
        zhCN: '游泳',
        example: {
          tagalog: 'Gusto ko ng paglangoy.',
          english: 'I like swimming.',
          zhTW: '我喜歡游泳。',
          zhCN: '我喜欢游泳。'
        }
      },
      {
        id: 'spt4',
        tagalog: 'Bola',
        english: 'Ball',
        zhTW: '球',
        zhCN: '球',
        example: {
          tagalog: 'Ipasa mo ang bola.',
          english: 'Pass the ball.',
          zhTW: '把球傳過來。',
          zhCN: '把球传过来。'
        }
      },
      {
        id: 'spt5',
        tagalog: 'Boksing',
        english: 'Boxing',
        zhTW: '拳擊',
        zhCN: '拳击',
        example: {
          tagalog: 'Nanood kami ng boksing.',
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
        tagalog: 'Sa ibabaw',
        english: 'On top / Above',
        zhTW: '在上面',
        zhCN: '在上面',
        example: {
          tagalog: 'Nasa ibabaw ng mesa.',
          english: 'It is on top of the table.',
          zhTW: '在桌子上面。',
          zhCN: '在桌子上面。'
        }
      },
      {
        id: 'prep2',
        tagalog: 'Sa ilalim',
        english: 'Under / Below',
        zhTW: '在下面',
        zhCN: '在下面',
        example: {
          tagalog: 'Nasa ilalim ng kama.',
          english: 'It is under the bed.',
          zhTW: '在床底下。',
          zhCN: '在床底下。'
        }
      },
      {
        id: 'prep3',
        tagalog: 'Sa loob',
        english: 'Inside',
        zhTW: '在裡面',
        zhCN: '在里面',
        example: {
          tagalog: 'Pumasok ka sa loob.',
          english: 'Go inside.',
          zhTW: '進到裡面。',
          zhCN: '进到里面。'
        }
      },
      {
        id: 'prep4',
        tagalog: 'Sa labas',
        english: 'Outside',
        zhTW: '在外面',
        zhCN: '在外面',
        example: {
          tagalog: 'Maghintay ka sa labas.',
          english: 'Wait outside.',
          zhTW: '在外面等。',
          zhCN: '在外面等。'
        }
      },
      {
        id: 'prep5',
        tagalog: 'Sa tabi',
        english: 'Beside',
        zhTW: '在旁邊',
        zhCN: '在旁边',
        example: {
          tagalog: 'Umupo ka sa tabi ko.',
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
