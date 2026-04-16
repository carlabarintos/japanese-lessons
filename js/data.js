// ============================================================
//  NIHONGO FUN! — Data
// ============================================================

// ── HIRAGANA ─────────────────────────────────────────────────
const HIRAGANA = [
  // Vowels
  { char:'あ', romaji:'a',   row:'vowel', example:'あめ (ame) - rain 🌧️' },
  { char:'い', romaji:'i',   row:'vowel', example:'いぬ (inu) - dog 🐕' },
  { char:'う', romaji:'u',   row:'vowel', example:'うみ (umi) - sea 🌊' },
  { char:'え', romaji:'e',   row:'vowel', example:'えき (eki) - station 🚉' },
  { char:'お', romaji:'o',   row:'vowel', example:'おかね (okane) - money 💰' },
  // K
  { char:'か', romaji:'ka',  row:'k', example:'かさ (kasa) - umbrella ☂️' },
  { char:'き', romaji:'ki',  row:'k', example:'きつね (kitsune) - fox 🦊' },
  { char:'く', romaji:'ku',  row:'k', example:'くも (kumo) - cloud ☁️' },
  { char:'け', romaji:'ke',  row:'k', example:'けいたい (keitai) - mobile phone 📱' },
  { char:'こ', romaji:'ko',  row:'k', example:'こども (kodomo) - child 👶' },
  // S
  { char:'さ', romaji:'sa',  row:'s', example:'さくら (sakura) - cherry blossom 🌸' },
  { char:'し', romaji:'shi', row:'s', example:'しろ (shiro) - castle 🏯' },
  { char:'す', romaji:'su',  row:'s', example:'すし (sushi) - sushi 🍣' },
  { char:'せ', romaji:'se',  row:'s', example:'せんせい (sensei) - teacher 👩‍🏫' },
  { char:'そ', romaji:'so',  row:'s', example:'そら (sora) - sky 🌤️' },
  // T
  { char:'た', romaji:'ta',  row:'t', example:'たこ (tako) - octopus 🐙' },
  { char:'ち', romaji:'chi', row:'t', example:'ちず (chizu) - map 🗺️' },
  { char:'つ', romaji:'tsu', row:'t', example:'つき (tsuki) - moon 🌙' },
  { char:'て', romaji:'te',  row:'t', example:'てがみ (tegami) - letter ✉️' },
  { char:'と', romaji:'to',  row:'t', example:'とり (tori) - bird 🐦' },
  // N
  { char:'な', romaji:'na',  row:'na', example:'なつ (natsu) - summer ☀️' },
  { char:'に', romaji:'ni',  row:'na', example:'にほん (nihon) - Japan 🗾' },
  { char:'ぬ', romaji:'nu',  row:'na', example:'ぬいぐるみ (nuigurumi) - stuffed toy 🧸' },
  { char:'ね', romaji:'ne',  row:'na', example:'ねこ (neko) - cat 🐱' },
  { char:'の', romaji:'no',  row:'na', example:'のり (nori) - seaweed 🌿' },
  // H
  { char:'は', romaji:'ha',  row:'h', example:'はな (hana) - flower 🌺' },
  { char:'ひ', romaji:'hi',  row:'h', example:'ひと (hito) - person 🧑' },
  { char:'ふ', romaji:'fu',  row:'h', example:'ふゆ (fuyu) - winter ❄️' },
  { char:'へ', romaji:'he',  row:'h', example:'へや (heya) - room 🏠' },
  { char:'ほ', romaji:'ho',  row:'h', example:'ほん (hon) - book 📚' },
  // M
  { char:'ま', romaji:'ma',  row:'m', example:'まち (machi) - town 🏙️' },
  { char:'み', romaji:'mi',  row:'m', example:'みず (mizu) - water 💧' },
  { char:'む', romaji:'mu',  row:'m', example:'むし (mushi) - insect 🐛' },
  { char:'め', romaji:'me',  row:'m', example:'めがね (megane) - glasses 👓' },
  { char:'も', romaji:'mo',  row:'m', example:'もり (mori) - forest 🌳' },
  // Y
  { char:'や', romaji:'ya',  row:'y', example:'やま (yama) - mountain ⛰️' },
  { char:'ゆ', romaji:'yu',  row:'y', example:'ゆき (yuki) - snow 🌨️' },
  { char:'よ', romaji:'yo',  row:'y', example:'よる (yoru) - night 🌙' },
  // R
  { char:'ら', romaji:'ra',  row:'r', example:'らいねん (rainen) - next year 📅' },
  { char:'り', romaji:'ri',  row:'r', example:'りんご (ringo) - apple 🍎' },
  { char:'る', romaji:'ru',  row:'r', example:'るーむ (ruumu) - room 🛋️' },
  { char:'れ', romaji:'re',  row:'r', example:'れっしゃ (ressha) - train 🚂' },
  { char:'ろ', romaji:'ro',  row:'r', example:'ろうそく (rousoku) - candle 🕯️' },
  // W
  { char:'わ', romaji:'wa',  row:'w', example:'わたし (watashi) - I / me 😊' },
  { char:'を', romaji:'wo',  row:'w', example:'Object-marker particle を' },
  // N final
  { char:'ん', romaji:'n',   row:'n_final', example:'にほん (nihon) - Japan 🗾' },
];

// Dakuten (voiced) extensions shown on the chart
const HIRAGANA_DAKUTEN = [
  { char:'が',romaji:'ga'  }, { char:'ぎ',romaji:'gi'  }, { char:'ぐ',romaji:'gu'  }, { char:'げ',romaji:'ge'  }, { char:'ご',romaji:'go'  },
  { char:'ざ',romaji:'za'  }, { char:'じ',romaji:'ji'  }, { char:'ず',romaji:'zu'  }, { char:'ぜ',romaji:'ze'  }, { char:'ぞ',romaji:'zo'  },
  { char:'だ',romaji:'da'  }, { char:'ぢ',romaji:'ji'  }, { char:'づ',romaji:'zu'  }, { char:'で',romaji:'de'  }, { char:'ど',romaji:'do'  },
  { char:'ば',romaji:'ba'  }, { char:'び',romaji:'bi'  }, { char:'ぶ',romaji:'bu'  }, { char:'べ',romaji:'be'  }, { char:'ぼ',romaji:'bo'  },
  { char:'ぱ',romaji:'pa'  }, { char:'ぴ',romaji:'pi'  }, { char:'ぷ',romaji:'pu'  }, { char:'ぺ',romaji:'pe'  }, { char:'ぽ',romaji:'po'  },
];

// ── KATAKANA ──────────────────────────────────────────────────
const KATAKANA = [
  { char:'ア', romaji:'a',   row:'vowel', example:'アイス (aisu) - ice cream 🍦' },
  { char:'イ', romaji:'i',   row:'vowel', example:'イギリス (igirisu) - England 🇬🇧' },
  { char:'ウ', romaji:'u',   row:'vowel', example:'ウサギ (usagi) - rabbit 🐇' },
  { char:'エ', romaji:'e',   row:'vowel', example:'エレベーター (erebeetaa) - elevator' },
  { char:'オ', romaji:'o',   row:'vowel', example:'オレンジ (orenji) - orange 🍊' },
  { char:'カ', romaji:'ka',  row:'k', example:'カメラ (kamera) - camera 📷' },
  { char:'キ', romaji:'ki',  row:'k', example:'キウイ (kiui) - kiwi 🥝' },
  { char:'ク', romaji:'ku',  row:'k', example:'クッキー (kukkii) - cookie 🍪' },
  { char:'ケ', romaji:'ke',  row:'k', example:'ケーキ (keeki) - cake 🎂' },
  { char:'コ', romaji:'ko',  row:'k', example:'コーヒー (koohii) - coffee ☕' },
  { char:'サ', romaji:'sa',  row:'s', example:'サッカー (sakkaa) - soccer ⚽' },
  { char:'シ', romaji:'shi', row:'s', example:'シャツ (shatsu) - shirt 👕' },
  { char:'ス', romaji:'su',  row:'s', example:'スポーツ (supootsu) - sports 🏃' },
  { char:'セ', romaji:'se',  row:'s', example:'セーター (seetaa) - sweater 🧥' },
  { char:'ソ', romaji:'so',  row:'s', example:'ソファ (sofa) - sofa 🛋️' },
  { char:'タ', romaji:'ta',  row:'t', example:'タクシー (takushii) - taxi 🚕' },
  { char:'チ', romaji:'chi', row:'t', example:'チーズ (chiizu) - cheese 🧀' },
  { char:'ツ', romaji:'tsu', row:'t', example:'ツアー (tsuaa) - tour 🗺️' },
  { char:'テ', romaji:'te',  row:'t', example:'テレビ (terebi) - TV 📺' },
  { char:'ト', romaji:'to',  row:'t', example:'トマト (tomato) - tomato 🍅' },
  { char:'ナ', romaji:'na',  row:'na', example:'ナイフ (naifu) - knife 🔪' },
  { char:'ニ', romaji:'ni',  row:'na', example:'ニュース (nyuusu) - news 📰' },
  { char:'ヌ', romaji:'nu',  row:'na', example:'ヌードル (nuudoru) - noodles 🍜' },
  { char:'ネ', romaji:'ne',  row:'na', example:'ネクタイ (nekutai) - necktie 👔' },
  { char:'ノ', romaji:'no',  row:'na', example:'ノート (nooto) - notebook 📓' },
  { char:'ハ', romaji:'ha',  row:'h', example:'ハンバーガー (hanbaagaa) - hamburger 🍔' },
  { char:'ヒ', romaji:'hi',  row:'h', example:'ヒーター (hiitaa) - heater 🔥' },
  { char:'フ', romaji:'fu',  row:'h', example:'フルーツ (furuutsu) - fruits 🍓' },
  { char:'ヘ', romaji:'he',  row:'h', example:'ヘルメット (herumetto) - helmet ⛑️' },
  { char:'ホ', romaji:'ho',  row:'h', example:'ホテル (hoteru) - hotel 🏨' },
  { char:'マ', romaji:'ma',  row:'m', example:'マンゴー (mangoo) - mango 🥭' },
  { char:'ミ', romaji:'mi',  row:'m', example:'ミルク (miruku) - milk 🥛' },
  { char:'ム', romaji:'mu',  row:'m', example:'ムービー (muubii) - movie 🎬' },
  { char:'メ', romaji:'me',  row:'m', example:'メニュー (menyuu) - menu 📋' },
  { char:'モ', romaji:'mo',  row:'m', example:'モデル (moderu) - model 👗' },
  { char:'ヤ', romaji:'ya',  row:'y', example:'ヤシ (yashi) - palm tree 🌴' },
  { char:'ユ', romaji:'yu',  row:'y', example:'ユニフォーム (yunifoomu) - uniform 👕' },
  { char:'ヨ', romaji:'yo',  row:'y', example:'ヨーグルト (yooguruto) - yogurt 🥛' },
  { char:'ラ', romaji:'ra',  row:'r', example:'ラーメン (raamen) - ramen 🍜' },
  { char:'リ', romaji:'ri',  row:'r', example:'リンゴ (ringo) - apple 🍎' },
  { char:'ル', romaji:'ru',  row:'r', example:'ルール (ruuru) - rule 📜' },
  { char:'レ', romaji:'re',  row:'r', example:'レモン (remon) - lemon 🍋' },
  { char:'ロ', romaji:'ro',  row:'r', example:'ロボット (robotto) - robot 🤖' },
  { char:'ワ', romaji:'wa',  row:'w', example:'ワイン (wain) - wine 🍷' },
  { char:'ヲ', romaji:'wo',  row:'w', example:'Object-marker (rare in katakana)' },
  { char:'ン', romaji:'n',   row:'n_final', example:'パン (pan) - bread 🍞' },
];

// ── KANJI ─────────────────────────────────────────────────────
// furigana field uses HTML <ruby> tags for hiragana-over-kanji display
const KANJI = [
  // Numbers
  { char:'一', reading:'ichi / hito',  meaning:'one 1',          category:'numbers', example:'一つ (hitotsu) - one thing',              furigana:'<ruby>一<rt>ひと</rt></ruby>つ' },
  { char:'二', reading:'ni / futa',    meaning:'two 2',          category:'numbers', example:'二人 (futari) - two people',              furigana:'<ruby>二人<rt>ふたり</rt></ruby>' },
  { char:'三', reading:'san / mit',    meaning:'three 3',        category:'numbers', example:'三月 (sangatsu) - March',                 furigana:'<ruby>三月<rt>さんがつ</rt></ruby>' },
  { char:'四', reading:'shi / yon',    meaning:'four 4',         category:'numbers', example:'四月 (shigatsu) - April',                 furigana:'<ruby>四月<rt>しがつ</rt></ruby>' },
  { char:'五', reading:'go / itsu',    meaning:'five 5',         category:'numbers', example:'五円 (goen) - 5 yen',                     furigana:'<ruby>五<rt>ご</rt></ruby>円' },
  { char:'六', reading:'roku / mut',   meaning:'six 6',          category:'numbers', example:'六時 (rokuji) - 6 o\'clock',              furigana:'<ruby>六時<rt>ろくじ</rt></ruby>' },
  { char:'七', reading:'shichi / nana',meaning:'seven 7',        category:'numbers', example:'七月 (shichigatsu) - July',               furigana:'<ruby>七月<rt>しちがつ</rt></ruby>' },
  { char:'八', reading:'hachi / yat',  meaning:'eight 8',        category:'numbers', example:'八月 (hachigatsu) - August',              furigana:'<ruby>八月<rt>はちがつ</rt></ruby>' },
  { char:'九', reading:'kyuu / kokono',meaning:'nine 9',         category:'numbers', example:'九時 (kuji) - 9 o\'clock',               furigana:'<ruby>九時<rt>くじ</rt></ruby>' },
  { char:'十', reading:'juu / too',    meaning:'ten 10',         category:'numbers', example:'十分 (juppun) - 10 minutes',              furigana:'<ruby>十分<rt>じゅっぷん</rt></ruby>' },
  { char:'百', reading:'hyaku',        meaning:'hundred 100',    category:'numbers', example:'百円 (hyakuen) - 100 yen',               furigana:'<ruby>百<rt>ひゃく</rt></ruby>円' },
  { char:'千', reading:'sen',          meaning:'thousand 1000',  category:'numbers', example:'千円 (senen) - 1000 yen',                furigana:'<ruby>千<rt>せん</rt></ruby>円' },
  { char:'万', reading:'man',          meaning:'ten-thousand',   category:'numbers', example:'一万円 (ichiman-en) - 10,000 yen',       furigana:'<ruby>一万<rt>いちまん</rt></ruby>円' },
  // Nature
  { char:'日', reading:'nichi / hi',   meaning:'sun / day ☀️',   category:'nature',  example:'今日 (kyou) - today',                    furigana:'<ruby>今日<rt>きょう</rt></ruby>' },
  { char:'月', reading:'getsu / tsuki',meaning:'moon / month 🌙', category:'nature',  example:'月曜日 (getsuyoubi) - Monday',           furigana:'<ruby>月曜日<rt>げつようび</rt></ruby>' },
  { char:'火', reading:'ka / hi',      meaning:'fire 🔥',        category:'nature',  example:'火曜日 (kayoubi) - Tuesday',             furigana:'<ruby>火曜日<rt>かようび</rt></ruby>' },
  { char:'水', reading:'sui / mizu',   meaning:'water 💧',       category:'nature',  example:'水曜日 (suiyoubi) - Wednesday',          furigana:'<ruby>水曜日<rt>すいようび</rt></ruby>' },
  { char:'木', reading:'moku / ki',    meaning:'tree / wood 🌳',  category:'nature',  example:'木曜日 (mokuyoubi) - Thursday',          furigana:'<ruby>木曜日<rt>もくようび</rt></ruby>' },
  { char:'金', reading:'kin / kana',   meaning:'gold / money 💛', category:'nature',  example:'金曜日 (kinyoubi) - Friday',             furigana:'<ruby>金曜日<rt>きんようび</rt></ruby>' },
  { char:'土', reading:'do / tsuchi',  meaning:'earth / soil 🌍', category:'nature',  example:'土曜日 (doyoubi) - Saturday',            furigana:'<ruby>土曜日<rt>どようび</rt></ruby>' },
  { char:'山', reading:'san / yama',   meaning:'mountain ⛰️',    category:'nature',  example:'富士山 (fujisan) - Mt. Fuji',            furigana:'<ruby>富士山<rt>ふじさん</rt></ruby>' },
  { char:'川', reading:'sen / kawa',   meaning:'river 🌊',        category:'nature',  example:'川 (kawa) - river',                     furigana:'<ruby>川<rt>かわ</rt></ruby>' },
  { char:'花', reading:'ka / hana',    meaning:'flower 🌸',       category:'nature',  example:'花見 (hanami) - flower viewing',         furigana:'<ruby>花見<rt>はなみ</rt></ruby>' },
  { char:'雨', reading:'u / ame',      meaning:'rain 🌧️',         category:'nature',  example:'雨の日 (ame no hi) - rainy day',        furigana:'<ruby>雨<rt>あめ</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>' },
  { char:'雪', reading:'setsu / yuki', meaning:'snow ❄️',         category:'nature',  example:'雪だるま (yukidaruma) - snowman',        furigana:'<ruby>雪<rt>ゆき</rt></ruby>だるま' },
  // People & Body
  { char:'人', reading:'jin / hito',   meaning:'person 🧑',      category:'people',  example:'日本人 (nihonjin) - Japanese person',    furigana:'<ruby>日本人<rt>にほんじん</rt></ruby>' },
  { char:'子', reading:'shi / ko',     meaning:'child 👶',        category:'people',  example:'子供 (kodomo) - child',                 furigana:'<ruby>子供<rt>こども</rt></ruby>' },
  { char:'女', reading:'jo / onna',    meaning:'woman 👩',        category:'people',  example:'女の子 (onnanoko) - girl',              furigana:'<ruby>女<rt>おんな</rt></ruby>の<ruby>子<rt>こ</rt></ruby>' },
  { char:'男', reading:'dan / otoko',  meaning:'man 👨',          category:'people',  example:'男の子 (otokonoko) - boy',              furigana:'<ruby>男<rt>おとこ</rt></ruby>の<ruby>子<rt>こ</rt></ruby>' },
  { char:'口', reading:'kou / kuchi',  meaning:'mouth 👄',        category:'people',  example:'入口 (iriguchi) - entrance',            furigana:'<ruby>入口<rt>いりぐち</rt></ruby>' },
  { char:'目', reading:'moku / me',    meaning:'eye 👁️',          category:'people',  example:'目玉 (medama) - eyeball',               furigana:'<ruby>目玉<rt>めだま</rt></ruby>' },
  { char:'耳', reading:'ji / mimi',    meaning:'ear 👂',          category:'people',  example:'耳鳴り (miminari) - ringing in ears',   furigana:'<ruby>耳鳴<rt>みみな</rt></ruby>り' },
  { char:'手', reading:'shu / te',     meaning:'hand ✋',          category:'people',  example:'手紙 (tegami) - letter',                furigana:'<ruby>手紙<rt>てがみ</rt></ruby>' },
  { char:'足', reading:'soku / ashi',  meaning:'foot / leg 🦶',   category:'people',  example:'足音 (ashioto) - footsteps',            furigana:'<ruby>足音<rt>あしおと</rt></ruby>' },
  // Size & Direction
  { char:'大', reading:'dai / oo',     meaning:'big / large 🔺',  category:'size',    example:'大学 (daigaku) - university',           furigana:'<ruby>大学<rt>だいがく</rt></ruby>' },
  { char:'小', reading:'shou / ko',    meaning:'small 🔹',        category:'size',    example:'小学校 (shougakkou) - elementary school',furigana:'<ruby>小学校<rt>しょうがっこう</rt></ruby>' },
  { char:'中', reading:'chuu / naka',  meaning:'middle / inside',  category:'size',    example:'中学校 (chuugakkou) - middle school',   furigana:'<ruby>中学校<rt>ちゅうがっこう</rt></ruby>' },
  { char:'上', reading:'jou / ue',     meaning:'up / above ⬆️',   category:'size',    example:'上手 (jouzu) - skillful',               furigana:'<ruby>上手<rt>じょうず</rt></ruby>' },
  { char:'下', reading:'ka / shita',   meaning:'down / below ⬇️',  category:'size',    example:'地下 (chika) - underground',            furigana:'<ruby>地下<rt>ちか</rt></ruby>' },
  { char:'左', reading:'sa / hidari',  meaning:'left ⬅️',          category:'size',    example:'左手 (hidarite) - left hand',           furigana:'<ruby>左手<rt>ひだりて</rt></ruby>' },
  { char:'右', reading:'u / migi',     meaning:'right ➡️',         category:'size',    example:'右手 (migite) - right hand',            furigana:'<ruby>右手<rt>みぎて</rt></ruby>' },
  // Common
  { char:'本', reading:'hon / moto',   meaning:'book / origin 📚', category:'common',  example:'日本 (nihon) - Japan',                  furigana:'<ruby>日本<rt>にほん</rt></ruby>' },
  { char:'学', reading:'gaku / mana',  meaning:'study / learn 📖', category:'common',  example:'大学 (daigaku) - university',           furigana:'<ruby>大学<rt>だいがく</rt></ruby>' },
  { char:'語', reading:'go / katari',  meaning:'language / words', category:'common',  example:'日本語 (nihongo) - Japanese language',  furigana:'<ruby>日本語<rt>にほんご</rt></ruby>' },
  { char:'食', reading:'shoku / ta',   meaning:'eat / food 🍽️',   category:'common',  example:'食べる (taberu) - to eat',              furigana:'<ruby>食<rt>た</rt></ruby>べる' },
  { char:'飲', reading:'in / no',      meaning:'drink 🥤',         category:'common',  example:'飲む (nomu) - to drink',                furigana:'<ruby>飲<rt>の</rt></ruby>む' },
  { char:'見', reading:'ken / mi',     meaning:'see / look 👀',    category:'common',  example:'見る (miru) - to see',                  furigana:'<ruby>見<rt>み</rt></ruby>る' },
  { char:'聞', reading:'bun / ki',     meaning:'hear / ask 👂',    category:'common',  example:'聞く (kiku) - to listen',               furigana:'<ruby>聞<rt>き</rt></ruby>く' },
  { char:'行', reading:'kou / i',      meaning:'go 🚶',            category:'common',  example:'行く (iku) - to go',                    furigana:'<ruby>行<rt>い</rt></ruby>く' },
  { char:'来', reading:'rai / ku',     meaning:'come 🤗',          category:'common',  example:'来る (kuru) - to come',                 furigana:'<ruby>来<rt>く</rt></ruby>る' },
  { char:'好', reading:'kou / su',     meaning:'like / fond of ❤️', category:'common',  example:'好き (suki) - to like',                furigana:'<ruby>好<rt>す</rt></ruby>き' },
];

// ── VOCABULARY ────────────────────────────────────────────────
const VOCAB = [
  // Greetings
  { jp:'おはよう',      kana:'ohayou',          en:'Good morning',      category:'greetings', emoji:'🌅' },
  { jp:'こんにちは',    kana:'konnichiwa',       en:'Hello / Good afternoon', category:'greetings', emoji:'👋' },
  { jp:'こんばんは',    kana:'konbanwa',         en:'Good evening',      category:'greetings', emoji:'🌆' },
  { jp:'おやすみ',      kana:'oyasumi',          en:'Good night',        category:'greetings', emoji:'🌙' },
  { jp:'さようなら',    kana:'sayounara',        en:'Goodbye',           category:'greetings', emoji:'👋' },
  { jp:'じゃあね',      kana:'jaa ne',           en:'See you later!',    category:'greetings', emoji:'✌️' },
  { jp:'ありがとう',    kana:'arigatou',         en:'Thank you',         category:'greetings', emoji:'🙏' },
  { jp:'すみません',    kana:'sumimasen',        en:'Excuse me / Sorry', category:'greetings', emoji:'😅' },
  { jp:'ごめんなさい',  kana:'gomen nasai',      en:'I\'m sorry',        category:'greetings', emoji:'😔' },
  { jp:'はい',          kana:'hai',              en:'Yes',               category:'greetings', emoji:'✅' },
  { jp:'いいえ',        kana:'iie',              en:'No',                category:'greetings', emoji:'❌' },
  // Numbers
  { jp:'ゼロ・零',      kana:'zero / rei',       en:'Zero (0)',          category:'numbers', emoji:'0️⃣' },
  { jp:'一',            kana:'ichi',             en:'One (1)',           category:'numbers', emoji:'1️⃣' },
  { jp:'二',            kana:'ni',               en:'Two (2)',           category:'numbers', emoji:'2️⃣' },
  { jp:'三',            kana:'san',              en:'Three (3)',         category:'numbers', emoji:'3️⃣' },
  { jp:'四',            kana:'shi / yon',        en:'Four (4)',          category:'numbers', emoji:'4️⃣' },
  { jp:'五',            kana:'go',               en:'Five (5)',          category:'numbers', emoji:'5️⃣' },
  { jp:'六',            kana:'roku',             en:'Six (6)',           category:'numbers', emoji:'6️⃣' },
  { jp:'七',            kana:'shichi / nana',    en:'Seven (7)',         category:'numbers', emoji:'7️⃣' },
  { jp:'八',            kana:'hachi',            en:'Eight (8)',         category:'numbers', emoji:'8️⃣' },
  { jp:'九',            kana:'ku / kyuu',        en:'Nine (9)',          category:'numbers', emoji:'9️⃣' },
  { jp:'十',            kana:'juu',              en:'Ten (10)',          category:'numbers', emoji:'🔟' },
  // Colors
  { jp:'あか',          kana:'aka',              en:'Red',               category:'colors', emoji:'🔴' },
  { jp:'あお',          kana:'ao',               en:'Blue',              category:'colors', emoji:'🔵' },
  { jp:'きいろ',        kana:'kiiro',            en:'Yellow',            category:'colors', emoji:'🟡' },
  { jp:'みどり',        kana:'midori',           en:'Green',             category:'colors', emoji:'🟢' },
  { jp:'しろ',          kana:'shiro',            en:'White',             category:'colors', emoji:'⚪' },
  { jp:'くろ',          kana:'kuro',             en:'Black',             category:'colors', emoji:'⚫' },
  { jp:'ももいろ',      kana:'momoiro',          en:'Pink',              category:'colors', emoji:'🩷' },
  { jp:'むらさき',      kana:'murasaki',         en:'Purple',            category:'colors', emoji:'🟣' },
  { jp:'ちゃいろ',      kana:'chairo',           en:'Brown',             category:'colors', emoji:'🟤' },
  { jp:'オレンジ',      kana:'orenji',           en:'Orange',            category:'colors', emoji:'🟠' },
  // Food & Drink
  { jp:'ごはん',        kana:'gohan',            en:'Rice / Meal',       category:'food', emoji:'🍚' },
  { jp:'パン',          kana:'pan',              en:'Bread',             category:'food', emoji:'🍞' },
  { jp:'みず',          kana:'mizu',             en:'Water',             category:'food', emoji:'💧' },
  { jp:'おちゃ',        kana:'ocha',             en:'Tea',               category:'food', emoji:'🍵' },
  { jp:'コーヒー',      kana:'koohii',           en:'Coffee',            category:'food', emoji:'☕' },
  { jp:'すし',          kana:'sushi',            en:'Sushi',             category:'food', emoji:'🍣' },
  { jp:'らーめん',      kana:'raamen',           en:'Ramen',             category:'food', emoji:'🍜' },
  { jp:'てんぷら',      kana:'tenpura',          en:'Tempura',           category:'food', emoji:'🍤' },
  { jp:'おにぎり',      kana:'onigiri',          en:'Rice ball',         category:'food', emoji:'🍙' },
  { jp:'たまご',        kana:'tamago',           en:'Egg',               category:'food', emoji:'🥚' },
  { jp:'さかな',        kana:'sakana',           en:'Fish',              category:'food', emoji:'🐟' },
  { jp:'にく',          kana:'niku',             en:'Meat',              category:'food', emoji:'🥩' },
  { jp:'やさい',        kana:'yasai',            en:'Vegetables',        category:'food', emoji:'🥦' },
  { jp:'くだもの',      kana:'kudamono',         en:'Fruit',             category:'food', emoji:'🍎' },
  // Animals
  { jp:'いぬ',          kana:'inu',              en:'Dog',               category:'animals', emoji:'🐕' },
  { jp:'ねこ',          kana:'neko',             en:'Cat',               category:'animals', emoji:'🐱' },
  { jp:'とり',          kana:'tori',             en:'Bird',              category:'animals', emoji:'🐦' },
  { jp:'さかな',        kana:'sakana',           en:'Fish',              category:'animals', emoji:'🐠' },
  { jp:'うさぎ',        kana:'usagi',            en:'Rabbit',            category:'animals', emoji:'🐇' },
  { jp:'くま',          kana:'kuma',             en:'Bear',              category:'animals', emoji:'🐻' },
  { jp:'ぞう',          kana:'zou',              en:'Elephant',          category:'animals', emoji:'🐘' },
  { jp:'さる',          kana:'saru',             en:'Monkey',            category:'animals', emoji:'🐒' },
  { jp:'へび',          kana:'hebi',             en:'Snake',             category:'animals', emoji:'🐍' },
  { jp:'うし',          kana:'ushi',             en:'Cow',               category:'animals', emoji:'🐄' },
  { jp:'うま',          kana:'uma',              en:'Horse',             category:'animals', emoji:'🐴' },
  { jp:'ぶた',          kana:'buta',             en:'Pig',               category:'animals', emoji:'🐷' },
  // Family
  { jp:'おとうさん',    kana:'otousan',          en:'Father (pol.)',      category:'family', emoji:'👨' },
  { jp:'おかあさん',    kana:'okaasan',          en:'Mother (pol.)',      category:'family', emoji:'👩' },
  { jp:'おにいさん',    kana:'oniisan',          en:'Older brother (pol.)',category:'family',emoji:'👦' },
  { jp:'おねえさん',    kana:'oneesan',          en:'Older sister (pol.)',category:'family', emoji:'👧' },
  { jp:'おとうと',      kana:'otouto',           en:'Younger brother',   category:'family', emoji:'👦' },
  { jp:'いもうと',      kana:'imouto',           en:'Younger sister',    category:'family', emoji:'👧' },
  { jp:'おじいさん',    kana:'ojiisan',          en:'Grandfather',       category:'family', emoji:'👴' },
  { jp:'おばあさん',    kana:'obaasan',          en:'Grandmother',       category:'family', emoji:'👵' },
  { jp:'かぞく',        kana:'kazoku',           en:'Family',            category:'family', emoji:'👨‍👩‍👧‍👦' },
  // Days & Time
  { jp:'げつようび',    kana:'getsuyoubi',       en:'Monday',            category:'time', emoji:'📅' },
  { jp:'かようび',      kana:'kayoubi',          en:'Tuesday',           category:'time', emoji:'📅' },
  { jp:'すいようび',    kana:'suiyoubi',         en:'Wednesday',         category:'time', emoji:'📅' },
  { jp:'もくようび',    kana:'mokuyoubi',        en:'Thursday',          category:'time', emoji:'📅' },
  { jp:'きんようび',    kana:'kin\'youbi',       en:'Friday',            category:'time', emoji:'📅' },
  { jp:'どようび',      kana:'doyoubi',          en:'Saturday',          category:'time', emoji:'🎉' },
  { jp:'にちようび',    kana:'nichiyoubi',       en:'Sunday',            category:'time', emoji:'☀️' },
  { jp:'きょう',        kana:'kyou',             en:'Today',             category:'time', emoji:'📌' },
  { jp:'きのう',        kana:'kinou',            en:'Yesterday',         category:'time', emoji:'⬅️' },
  { jp:'あした',        kana:'ashita',           en:'Tomorrow',          category:'time', emoji:'➡️' },
  { jp:'いま',          kana:'ima',              en:'Now',               category:'time', emoji:'⏰' },
  // Places
  { jp:'がっこう',      kana:'gakkou',           en:'School',            category:'places', emoji:'🏫' },
  { jp:'びょういん',    kana:'byouin',           en:'Hospital',          category:'places', emoji:'🏥' },
  { jp:'えき',          kana:'eki',              en:'Train station',     category:'places', emoji:'🚉' },
  { jp:'スーパー',      kana:'suupaa',           en:'Supermarket',       category:'places', emoji:'🛒' },
  { jp:'レストラン',    kana:'resutoran',        en:'Restaurant',        category:'places', emoji:'🍽️' },
  { jp:'うち',          kana:'uchi',             en:'Home / House',      category:'places', emoji:'🏠' },
  { jp:'こうえん',      kana:'kouen',            en:'Park',              category:'places', emoji:'🌳' },
  { jp:'ほんや',        kana:'honya',            en:'Bookstore',         category:'places', emoji:'📚' },
];

// ── PHRASES ───────────────────────────────────────────────────
const PHRASES = [
  // Introductions
  { jp:'はじめまして。',             romaji:'Hajimemashite.',             en:'Nice to meet you.',              category:'intro', note:'First-time greeting' },
  { jp:'わたしの なまえは ～ です。', romaji:'Watashi no namae wa ~ desu.',en:'My name is ~.',                 category:'intro', note:'Replace ~ with your name' },
  { jp:'どうぞよろしく。',           romaji:'Douzo yoroshiku.',           en:'Pleased to meet you. / Best regards.', category:'intro', note:'Casual version of よろしくおねがいします' },
  { jp:'よろしくおねがいします。',   romaji:'Yoroshiku onegaishimasu.',   en:'Please treat me well.',         category:'intro', note:'Formal & versatile — use for introductions and requests' },
  { jp:'おなまえは なんですか？',    romaji:'Onamae wa nan desu ka?',     en:'What is your name?',            category:'intro', note:'Polite form — お名前' },
  { jp:'～ から きました。',         romaji:'~ kara kimashita.',          en:'I am from ~.',                  category:'intro', note:'Replace ~ with your country/city' },
  { jp:'なんさい ですか？',          romaji:'Nan-sai desu ka?',           en:'How old are you?',              category:'intro', note:'Casual — avoid with elders' },
  // Daily Life
  { jp:'いただきます。',             romaji:'Itadakimasu.',               en:'(Said before eating)',          category:'daily', note:'Like "Let\'s eat!" — always say it!' },
  { jp:'ごちそうさまでした。',       romaji:'Gochisousama deshita.',      en:'(Said after eating)',           category:'daily', note:'Thank you for the meal' },
  { jp:'おじゃまします。',           romaji:'Ojama shimasu.',             en:'Pardon the intrusion.',         category:'daily', note:'Said when entering someone\'s home' },
  { jp:'ただいま。',                 romaji:'Tadaima.',                   en:'I\'m home!',                   category:'daily', note:'Said when returning home' },
  { jp:'おかえりなさい。',           romaji:'Okaeri nasai.',              en:'Welcome home!',                 category:'daily', note:'Response to ただいま' },
  { jp:'いってきます。',             romaji:'Itte kimasu.',               en:'I\'m heading out!',            category:'daily', note:'Said when leaving home' },
  { jp:'いってらっしゃい。',         romaji:'Itterasshai.',               en:'Have a good trip! / Take care.', category:'daily', note:'Response to いってきます' },
  // Questions
  { jp:'これは なんですか？',        romaji:'Kore wa nan desu ka?',       en:'What is this?',                category:'questions', note:'これ = this thing (near me)' },
  { jp:'それは いくらですか？',      romaji:'Sore wa ikura desu ka?',     en:'How much is that?',            category:'questions', note:'それ = that thing (near you)' },
  { jp:'トイレは どこですか？',      romaji:'Toire wa doko desu ka?',     en:'Where is the restroom?',       category:'questions', note:'Super useful while traveling!' },
  { jp:'えいご が わかりますか？',   romaji:'Eigo ga wakarimasu ka?',     en:'Do you understand English?',   category:'questions', note:'Lifesaver when lost!' },
  { jp:'もう いちど おねがいします。',romaji:'Mou ichido onegaishimasu.', en:'Please say that once more.',   category:'questions', note:'When you didn\'t catch it' },
  { jp:'ゆっくり はなして ください。',romaji:'Yukkuri hanashite kudasai.',en:'Please speak slowly.',         category:'questions', note:'Very useful for learners!' },
  { jp:'にほんご が すこし わかります。',romaji:'Nihongo ga sukoshi wakarimasu.',en:'I understand a little Japanese.',category:'questions',note:'Honest & appreciated!' },
  // Shopping
  { jp:'～ を ください。',           romaji:'~ wo kudasai.',              en:'Please give me ~.',            category:'shopping', note:'Most useful shopping phrase' },
  { jp:'これ を みせて ください。',   romaji:'Kore wo misete kudasai.',    en:'Please show me this.',         category:'shopping', note:'In a shop, pointing at an item' },
  { jp:'おすすめは なんですか？',    romaji:'Osusume wa nan desu ka?',    en:'What do you recommend?',      category:'shopping', note:'Works at restaurants too!' },
  { jp:'～ が あります か？',        romaji:'~ ga arimasu ka?',           en:'Do you have ~?',              category:'shopping', note:'Asking if something is in stock' },
  { jp:'けっこう です。',            romaji:'Kekkou desu.',               en:'No thank you. / That\'s fine.', category:'shopping', note:'Polite refusal' },
  // Feelings & Health
  { jp:'げんき ですか？',            romaji:'Genki desu ka?',             en:'How are you? / Are you well?', category:'feelings', note:'Common casual greeting' },
  { jp:'はい、げんき です。',        romaji:'Hai, genki desu.',           en:'Yes, I\'m fine.',              category:'feelings', note:'Standard positive response' },
  { jp:'だいじょうぶ ですか？',      romaji:'Daijoubu desu ka?',          en:'Are you okay?',               category:'feelings', note:'Use when someone seems hurt/upset' },
  { jp:'だいじょうぶ です。',        romaji:'Daijoubu desu.',             en:'I\'m okay. / It\'s fine.',     category:'feelings', note:'Very versatile phrase!' },
  { jp:'たのしい！',                 romaji:'Tanoshii!',                  en:'Fun! / Enjoyable!',            category:'feelings', note:'i-adjective — can say by itself' },
  { char:'かわいい！',               romaji:'Kawaii!',                    en:'Cute!',                        category:'feelings', note:'One of Japan\'s most famous words!' },
  { jp:'おいしい！',                 romaji:'Oishii!',                    en:'Delicious!',                   category:'feelings', note:'Essential at restaurants!' },
  { jp:'すごい！',                   romaji:'Sugoi!',                     en:'Amazing! / Wow!',              category:'feelings', note:'Universal expression of amazement' },
  { jp:'むずかしい…',               romaji:'Muzukashii...',              en:'Difficult...',                 category:'feelings', note:'Every language learner\'s word 😅' },
  // Classroom
  { jp:'もう一度いってください。',     romaji:'Mō ichido itte kudasai.',      en:'Please say it again.',           category:'classroom', note:'Essential in class!' },
  { jp:'ゆっくりはなしてください。',   romaji:'Yukkuri hanashite kudasai.',   en:'Please speak slowly.',           category:'classroom', note:'Ask your teacher anytime' },
  { jp:'わかりません。',               romaji:'Wakarimasen.',                 en:'I don\'t understand.',           category:'classroom', note:'It\'s okay to say this!' },
  { jp:'わかりました！',               romaji:'Wakarimashita!',               en:'I understand! / Got it!',        category:'classroom', note:'Show your teacher you got it' },
  { jp:'にほんごでなんといいますか？', romaji:'Nihongo de nan to iimasu ka?', en:'How do you say it in Japanese?', category:'classroom', note:'Ask anytime you\'re curious' },
  { jp:'もう一度かいてください。',     romaji:'Mō ichido kaite kudasai.',     en:'Please write it again.',         category:'classroom', note:'Helpful for reading practice' },
  { jp:'しつもんがあります。',         romaji:'Shitsumon ga arimasu.',        en:'I have a question.',             category:'classroom', note:'Raise your hand and say this' },
  { jp:'〜はえいごでなんですか？',     romaji:'~ wa eigo de nan desu ka?',    en:'What is ~ in English?',          category:'classroom', note:'Reverse question if you need it' },
  // Restaurant & Ordering
  { jp:'すみません！',                 romaji:'Sumimasen!',                   en:'Excuse me! (to get attention)',  category:'restaurant', note:'Use this to call a waiter/waitress' },
  { jp:'〜をください。',               romaji:'~ wo kudasai.',                en:'Please give me ~ / I\'ll have ~.',category:'restaurant', note:'Most useful ordering phrase' },
  { jp:'これをください。',             romaji:'Kore wo kudasai.',             en:'I\'ll have this, please.',        category:'restaurant', note:'Just point at the menu!' },
  { jp:'おすすめはなんですか？',       romaji:'Osusume wa nan desu ka?',      en:'What do you recommend?',         category:'restaurant', note:'Locals love when you ask this' },
  { jp:'これはなんですか？',           romaji:'Kore wa nan desu ka?',         en:'What is this?',                  category:'restaurant', note:'Point at the menu item' },
  { jp:'おいしいです！',               romaji:'Oishii desu!',                 en:'It\'s delicious!',               category:'restaurant', note:'Makes the chef very happy!' },
  { jp:'おかいけいをおねがいします。', romaji:'Okaikei wo onegai shimasu.',   en:'Check / bill, please.',          category:'restaurant', note:'Or just say "おかいけい" and wave' },
  { jp:'べつべつにおねがいします。',   romaji:'Betsu betsu ni onegai shimasu.',en:'Separate bills, please.',       category:'restaurant', note:'Splitting the bill' },
  { jp:'〜アレルギーがあります。',     romaji:'~ arerugī ga arimasu.',        en:'I have a ~ allergy.',            category:'restaurant', note:'Important for food safety!' },
];

// ── GRAMMAR ───────────────────────────────────────────────────
const GRAMMAR = [
  {
    title: 'Basic Sentence Order: SOV',
    icon: '📐',
    color: '#6c5ce7',
    explanation: `Japanese sentences follow <strong>Subject → Object → Verb</strong> order — the opposite of English!<br><br>
      <strong>English:</strong> I (S) eat (V) sushi (O).<br>
      <strong>Japanese:</strong> 私は (I-S) すしを (sushi-O) 食べます。(eat-V)`,
    examples: [
      { jp:'私は　りんごを　食べます。', romaji:'Watashi wa ringo wo tabemasu.', en:'I eat an apple.',
        breakdown:[
          {word:'私',    romaji:'watashi', role:'I / me',    type:'noun'},
          {word:'は',    romaji:'wa',      role:'topic',     type:'topic'},
          {word:'りんご',romaji:'ringo',   role:'apple',     type:'noun'},
          {word:'を',    romaji:'wo',      role:'object',    type:'object'},
          {word:'食べます',romaji:'tabemasu',role:'eat',     type:'verb'},
        ]},
      { jp:'ねこが　さかなを　食べます。', romaji:'Neko ga sakana wo tabemasu.', en:'The cat eats fish.',
        breakdown:[
          {word:'ねこ',  romaji:'neko',   role:'cat',    type:'noun'},
          {word:'が',    romaji:'ga',     role:'subject',type:'subject'},
          {word:'さかな',romaji:'sakana', role:'fish',   type:'noun'},
          {word:'を',    romaji:'wo',     role:'object', type:'object'},
          {word:'食べます',romaji:'tabemasu',role:'eat', type:'verb'},
        ]},
      { jp:'田中さんは　えいごを　はなします。', romaji:'Tanaka-san wa eigo wo hanashimasu.', en:'Tanaka speaks English.',
        breakdown:[
          {word:'田中さん',romaji:'Tanaka-san',role:'Tanaka', type:'noun'},
          {word:'は',    romaji:'wa',       role:'topic',   type:'topic'},
          {word:'えいご',romaji:'eigo',     role:'English', type:'noun'},
          {word:'を',    romaji:'wo',       role:'object',  type:'object'},
          {word:'はなします',romaji:'hanashimasu',role:'speaks',type:'verb'},
        ]},
    ]
  },
  {
    title: 'Particles: は · が · を · に · で · の',
    icon: '🔑',
    color: '#e84393',
    explanation: `Particles are small words after nouns that show their role in the sentence.`,
    particles: [
      { p:'は (wa)', role:'Topic marker', example:'私は学生です — As for me, I am a student.' },
      { p:'が (ga)', role:'Subject marker', example:'ねこが います — There IS a cat.' },
      { p:'を (wo)', role:'Object marker', example:'パンを食べます — I eat bread.' },
      { p:'に (ni)', role:'Direction / location / time', example:'学校に行きます — I go TO school.' },
      { p:'で (de)', role:'Location of action / means', example:'公園で遊びます — I play AT the park.' },
      { p:'の (no)', role:'Possessive ("\'s")', example:'私のねこ — MY cat.' },
      { p:'も (mo)', role:'Also / too', example:'私も学生です — I am ALSO a student.' },
      { p:'と (to)', role:'And / with', example:'ねこといぬ — cat AND dog.' },
    ]
  },
  {
    title: '～です / ～ます Polite Endings',
    icon: '🎩',
    color: '#00b894',
    explanation: `Japanese verbs and adjectives are conjugated at the END of the sentence.<br>
      <strong>です (desu)</strong> — polite "to be" (used with nouns & na-adjectives)<br>
      <strong>～ます (masu)</strong> — polite present / future verb ending`,
    examples: [
      { jp:'これはペンです。', romaji:'Kore wa pen desu.', en:'This is a pen.',
        breakdown:[
          {word:'これ', romaji:'kore', role:'this',    type:'noun'},
          {word:'は',   romaji:'wa',   role:'topic',   type:'topic'},
          {word:'ペン', romaji:'pen',  role:'pen',     type:'noun'},
          {word:'です', romaji:'desu', role:'polite "is"', type:'ending'},
        ]},
      { jp:'わたしは学生です。', romaji:'Watashi wa gakusei desu.', en:'I am a student.',
        breakdown:[
          {word:'わたし', romaji:'watashi',  role:'I / me',   type:'noun'},
          {word:'は',     romaji:'wa',       role:'topic',    type:'topic'},
          {word:'学生',   romaji:'gakusei',  role:'student',  type:'noun'},
          {word:'です',   romaji:'desu',     role:'polite "is"', type:'ending'},
        ]},
      { jp:'日本語を勉強します。', romaji:'Nihongo wo benkyou shimasu.', en:'I study Japanese.',
        breakdown:[
          {word:'日本語', romaji:'nihongo',    role:'Japanese',  type:'noun'},
          {word:'を',     romaji:'wo',         role:'object',    type:'object'},
          {word:'勉強します',romaji:'benkyou shimasu',role:'study (polite)',type:'verb'},
        ]},
    ]
  },
  {
    title: 'Adjectives: い vs な',
    icon: '🎨',
    color: '#fdcb6e',
    explanation: `Japanese has two types of adjectives:<br>
      <strong>い-adjectives</strong> end in い and modify directly: 大きい犬 (big dog)<br>
      <strong>な-adjectives</strong> need な before a noun: きれいな花 (beautiful flower)`,
    examples: [
      { jp:'このケーキはおいしい。', romaji:'Kono keeki wa oishii.', en:'This cake is delicious. (i-adj)',
        breakdown:[
          {word:'この',   romaji:'kono',   role:'this',       type:'noun'},
          {word:'ケーキ', romaji:'keeki',  role:'cake',       type:'noun'},
          {word:'は',     romaji:'wa',     role:'topic',      type:'topic'},
          {word:'おいしい',romaji:'oishii',role:'delicious',  type:'adj'},
        ]},
      { jp:'あの人はきれいです。', romaji:'Ano hito wa kirei desu.', en:'That person is beautiful. (na-adj)',
        breakdown:[
          {word:'あの人', romaji:'ano hito', role:'that person', type:'noun'},
          {word:'は',     romaji:'wa',       role:'topic',       type:'topic'},
          {word:'きれい', romaji:'kirei',    role:'beautiful',   type:'adj'},
          {word:'です',   romaji:'desu',     role:'polite "is"', type:'ending'},
        ]},
      { jp:'しずかな図書館です。', romaji:'Shizuka na toshokan desu.', en:'It is a quiet library. (na-adj + noun)',
        breakdown:[
          {word:'しずかな',romaji:'shizuka na',role:'quiet (na-adj)',type:'adj'},
          {word:'図書館', romaji:'toshokan',  role:'library',     type:'noun'},
          {word:'です',   romaji:'desu',      role:'polite "is"', type:'ending'},
        ]},
    ]
  },
  {
    title: 'Negative Form',
    icon: '🚫',
    color: '#e17055',
    explanation: `To negate:<br>
      <strong>です → じゃないです / ではありません</strong><br>
      <strong>～ます → ～ません</strong>`,
    examples: [
      { jp:'私は学生じゃないです。', romaji:'Watashi wa gakusei ja nai desu.', en:'I am NOT a student.',
        breakdown:[
          {word:'私',       romaji:'watashi',       role:'I / me',      type:'noun'},
          {word:'は',       romaji:'wa',            role:'topic',       type:'topic'},
          {word:'学生',     romaji:'gakusei',       role:'student',     type:'noun'},
          {word:'じゃないです',romaji:'ja nai desu',role:'am NOT (neg)',type:'neg'},
        ]},
      { jp:'日本語がわかりません。', romaji:'Nihongo ga wakarimasen.', en:'I don\'t understand Japanese.',
        breakdown:[
          {word:'日本語',    romaji:'nihongo',      role:'Japanese',        type:'noun'},
          {word:'が',        romaji:'ga',           role:'subject',         type:'subject'},
          {word:'わかりません',romaji:'wakarimasen',role:'don\'t understand',type:'neg'},
        ]},
      { jp:'肉は食べません。', romaji:'Niku wa tabemasen.', en:'I don\'t eat meat.',
        breakdown:[
          {word:'肉',       romaji:'niku',      role:'meat',         type:'noun'},
          {word:'は',       romaji:'wa',        role:'topic',        type:'topic'},
          {word:'食べません',romaji:'tabemasen', role:'don\'t eat',   type:'neg'},
        ]},
    ]
  },
  {
    title: 'Question Form',
    icon: '❓',
    color: '#74b9ff',
    explanation: `In Japanese, just add <strong>か (ka)</strong> to the end of a statement to make it a question! No word reordering needed.`,
    examples: [
      { jp:'これはペンですか？', romaji:'Kore wa pen desu ka?', en:'Is this a pen?',
        breakdown:[
          {word:'これ', romaji:'kore', role:'this',         type:'noun'},
          {word:'は',   romaji:'wa',   role:'topic',        type:'topic'},
          {word:'ペン', romaji:'pen',  role:'pen',          type:'noun'},
          {word:'です', romaji:'desu', role:'polite "is"',  type:'ending'},
          {word:'か',   romaji:'ka',   role:'? (question)', type:'question'},
        ]},
      { jp:'日本語がわかりますか？', romaji:'Nihongo ga wakarimasu ka?', en:'Do you understand Japanese?',
        breakdown:[
          {word:'日本語',    romaji:'nihongo',    role:'Japanese',    type:'noun'},
          {word:'が',        romaji:'ga',         role:'subject',     type:'subject'},
          {word:'わかります',romaji:'wakarimasu', role:'understand',  type:'verb'},
          {word:'か',        romaji:'ka',         role:'? (question)',type:'question'},
        ]},
      { jp:'明日、学校に行きますか？', romaji:'Ashita, gakkou ni ikimasu ka?', en:'Will you go to school tomorrow?' },
    ]
  },
  {
    title: 'ある vs いる: Existence Verbs',
    icon: '🌿',
    color: '#55efc4',
    explanation: `Japanese has two "there is / there are" verbs:<br>
      <strong>あります (arimasu)</strong> — for inanimate things (objects, places)<br>
      <strong>います (imasu)</strong> — for living things (people, animals)`,
    examples: [
      { jp:'つくえの上に本があります。', romaji:'Tsukue no ue ni hon ga arimasu.', en:'There is a book ON the desk.',
        breakdown:[
          {word:'つくえの上',romaji:'tsukue no ue',role:'on the desk',    type:'noun'},
          {word:'に',       romaji:'ni',          role:'location',       type:'direction'},
          {word:'本',       romaji:'hon',         role:'book',           type:'noun'},
          {word:'が',       romaji:'ga',          role:'subject',        type:'subject'},
          {word:'あります', romaji:'arimasu',     role:'exists (thing)', type:'verb'},
        ]},
      { jp:'公園に子供がいます。', romaji:'Kouen ni kodomo ga imasu.', en:'There are children IN the park.',
        breakdown:[
          {word:'公園',   romaji:'kouen',  role:'park',              type:'noun'},
          {word:'に',     romaji:'ni',     role:'location',          type:'direction'},
          {word:'子供',   romaji:'kodomo', role:'children',          type:'noun'},
          {word:'が',     romaji:'ga',     role:'subject',           type:'subject'},
          {word:'います', romaji:'imasu',  role:'exists (living)',   type:'verb'},
        ]},
      { jp:'冷蔵庫にジュースがありますか？', romaji:'Reizouko ni juusu ga arimasu ka?', en:'Is there juice in the fridge?' },
    ]
  },
  {
    title: 'Likes & Dislikes — すき / きらい',
    icon: '❤️',
    color: '#ff7675',
    explanation: `<strong>〜がすきです</strong> = I like ~.<br>
      <strong>〜がきらいです</strong> = I dislike ~.<br>
      <strong>〜がだいすきです</strong> = I love ~.<br>
      For activities, attach <strong>こと</strong> after the verb: ねること (sleeping), よむこと (reading).`,
    examples: [
      { jp:'すしがすきです。', romaji:'Sushi ga suki desu.', en:'I like sushi.',
        breakdown:[
          {word:'すし', romaji:'sushi', role:'sushi (the thing liked)', type:'noun'},
          {word:'が',   romaji:'ga',    role:'subject marker',          type:'subject'},
          {word:'すき', romaji:'suki',  role:'like / pleasing',         type:'adj'},
          {word:'です', romaji:'desu',  role:'polite ending',           type:'ending'},
        ]},
      { jp:'べんきょうがきらいです。', romaji:'Benkyō ga kirai desu.', en:'I dislike studying.',
        breakdown:[
          {word:'べんきょう',romaji:'benkyō', role:'studying',          type:'noun'},
          {word:'が',        romaji:'ga',     role:'subject marker',    type:'subject'},
          {word:'きらい',    romaji:'kirai',  role:'dislike / hate',    type:'adj'},
          {word:'です',      romaji:'desu',   role:'polite ending',     type:'ending'},
        ]},
      { jp:'ねることがだいすきです。', romaji:'Neru koto ga daisuki desu.', en:'I love sleeping.',
        breakdown:[
          {word:'ねる',  romaji:'neru',     role:'to sleep (verb)',       type:'verb'},
          {word:'こと',  romaji:'koto',     role:'"the act of" (nominaliser)', type:'noun'},
          {word:'が',    romaji:'ga',       role:'subject marker',        type:'subject'},
          {word:'だいすき',romaji:'daisuki',role:'love / really like',    type:'adj'},
          {word:'です',  romaji:'desu',     role:'polite ending',         type:'ending'},
        ]},
      { jp:'なにがすきですか？', romaji:'Nani ga suki desu ka?', en:'What do you like?',
        breakdown:[
          {word:'なに', romaji:'nani', role:'what',          type:'noun'},
          {word:'が',   romaji:'ga',   role:'subject marker',type:'subject'},
          {word:'すき', romaji:'suki', role:'like',          type:'adj'},
          {word:'です', romaji:'desu', role:'polite ending', type:'ending'},
          {word:'か',   romaji:'ka',   role:'? (question)',  type:'question'},
        ]},
      { jp:'どんな食べものがすきですか？', romaji:'Donna tabemono ga suki desu ka?', en:'What kind of food do you like?',
        breakdown:[
          {word:'どんな',   romaji:'donna',    role:'what kind of',  type:'noun'},
          {word:'食べもの', romaji:'tabemono', role:'food',          type:'noun'},
          {word:'が',       romaji:'ga',       role:'subject marker',type:'subject'},
          {word:'すき',     romaji:'suki',     role:'like',          type:'adj'},
          {word:'です',     romaji:'desu',     role:'polite ending', type:'ending'},
          {word:'か',       romaji:'ka',       role:'? (question)',  type:'question'},
        ]},
    ]
  },
  {
    title: 'Expressing Wants — ほしい & たい',
    icon: '✨',
    color: '#fdcb6e',
    explanation: `<strong>〜がほしいです</strong> = I want [a thing] (noun).<br>
      <strong>〜たいです</strong> = I want to [do something] — attach たい to the verb stem.<br>
      Negative: ほしくないです / 〜たくないです.`,
    examples: [
      { jp:'みずがほしいです。', romaji:'Mizu ga hoshii desu.', en:'I want water.',
        breakdown:[
          {word:'みず',   romaji:'mizu',   role:'water',        type:'noun'},
          {word:'が',     romaji:'ga',     role:'subject marker',type:'subject'},
          {word:'ほしい', romaji:'hoshii', role:'want (thing)',  type:'adj'},
          {word:'です',   romaji:'desu',   role:'polite ending', type:'ending'},
        ]},
      { jp:'にほんにいきたいです。', romaji:'Nihon ni ikitai desu.', en:'I want to go to Japan.',
        breakdown:[
          {word:'にほん',   romaji:'nihon',   role:'Japan',              type:'noun'},
          {word:'に',       romaji:'ni',      role:'direction (to)',     type:'direction'},
          {word:'いき',     romaji:'iki',     role:'go (verb stem)',     type:'verb'},
          {word:'たい',     romaji:'tai',     role:'want to',            type:'adj'},
          {word:'です',     romaji:'desu',    role:'polite ending',      type:'ending'},
        ]},
      { jp:'もっとべんきょうしたいです。', romaji:'Motto benkyō shitai desu.', en:'I want to study more.',
        breakdown:[
          {word:'もっと',     romaji:'motto',   role:'more',             type:'adverb'},
          {word:'べんきょう', romaji:'benkyō',  role:'study',            type:'noun'},
          {word:'し',         romaji:'shi',     role:'do (verb stem)',   type:'verb'},
          {word:'たい',       romaji:'tai',     role:'want to',          type:'adj'},
          {word:'です',       romaji:'desu',    role:'polite ending',    type:'ending'},
        ]},
      { jp:'なにかたべたいです。',  romaji:'Nanika tabetai desu.',    en:'I want to eat something.' },
      { jp:'ねたくないです。',      romaji:'Netakunai desu.',         en:'I don\'t want to sleep.' },
    ]
  },
  {
    title: 'Expressing Ability — できます',
    icon: '💪',
    color: '#00b894',
    explanation: `<strong>〜ができます</strong> = I can ~ (use with a noun or verb+こと).<br>
      Negative: <strong>〜ができません</strong> = I cannot ~.<br>
      This is one of the most useful patterns for talking about yourself!`,
    examples: [
      { jp:'にほんごができます。', romaji:'Nihongo ga dekimasu.', en:'I can [speak] Japanese.',
        breakdown:[
          {word:'にほんご',  romaji:'nihongo',   role:'Japanese',       type:'noun'},
          {word:'が',        romaji:'ga',        role:'subject marker', type:'subject'},
          {word:'できます',  romaji:'dekimasu',  role:'can do / able',  type:'verb'},
        ]},
      { jp:'およぐことができます。', romaji:'Oyogu koto ga dekimasu.', en:'I can swim.',
        breakdown:[
          {word:'およぐ',  romaji:'oyogu',    role:'swim (verb)',           type:'verb'},
          {word:'こと',    romaji:'koto',     role:'"the act of"',          type:'noun'},
          {word:'が',      romaji:'ga',       role:'subject marker',        type:'subject'},
          {word:'できます',romaji:'dekimasu', role:'can do / able',         type:'verb'},
        ]},
      { jp:'うんてんができません。', romaji:'Unten ga dekimasen.', en:'I cannot drive.',
        breakdown:[
          {word:'うんてん',   romaji:'unten',    role:'driving',              type:'noun'},
          {word:'が',         romaji:'ga',       role:'subject marker',       type:'subject'},
          {word:'できません', romaji:'dekimasen',role:'cannot (negative)',     type:'neg'},
        ]},
      { jp:'ギターをひくことができます。', romaji:'Gitā wo hiku koto ga dekimasu.', en:'I can play guitar.',
        breakdown:[
          {word:'ギター',  romaji:'gitā',     role:'guitar',              type:'noun'},
          {word:'を',      romaji:'wo',       role:'object',              type:'object'},
          {word:'ひく',    romaji:'hiku',     role:'play (instrument)',   type:'verb'},
          {word:'こと',    romaji:'koto',     role:'"the act of"',        type:'noun'},
          {word:'が',      romaji:'ga',       role:'subject marker',      type:'subject'},
          {word:'できます',romaji:'dekimasu', role:'can do / able',       type:'verb'},
        ]},
      { jp:'すこしにほんごがはなせます。', romaji:'Sukoshi nihongo ga hanasemasu.', en:'I can speak a little Japanese.' },
    ]
  },
  {
    title: 'Making Requests — てください',
    icon: '🙏',
    color: '#a29bfe',
    explanation: `Add <strong>てください</strong> to the て-form of a verb to make a polite request.<br>
      <em>Very useful in class, restaurants, shops, and daily life!</em><br>
      More polite: <strong>〜ていただけますか</strong> (Could you please ~?)`,
    examples: [
      { jp:'もう一度いってください。', romaji:'Mō ichido itte kudasai.', en:'Please say it again.',
        breakdown:[
          {word:'もう一度',  romaji:'mō ichido', role:'once more',       type:'adverb'},
          {word:'いって',    romaji:'itte',      role:'say (て-form)',   type:'verb'},
          {word:'ください',  romaji:'kudasai',   role:'please (request)',type:'ending'},
        ]},
      { jp:'ゆっくりはなしてください。', romaji:'Yukkuri hanashite kudasai.', en:'Please speak slowly.',
        breakdown:[
          {word:'ゆっくり',  romaji:'yukkuri',    role:'slowly',         type:'adverb'},
          {word:'はなして',  romaji:'hanashite',  role:'speak (て-form)',type:'verb'},
          {word:'ください',  romaji:'kudasai',    role:'please',         type:'ending'},
        ]},
      { jp:'かいてください。', romaji:'Kaite kudasai.', en:'Please write it.',
        breakdown:[
          {word:'かいて',   romaji:'kaite',   role:'write (て-form)', type:'verb'},
          {word:'ください', romaji:'kudasai', role:'please',          type:'ending'},
        ]},
      { jp:'まってください。', romaji:'Matte kudasai.', en:'Please wait.' },
      { jp:'みせてください。', romaji:'Misete kudasai.', en:'Please show me.' },
    ]
  },
  {
    title: 'Connecting Sentences — そして・でも・だから',
    icon: '🔗',
    color: '#74b9ff',
    explanation: `Link your ideas together to sound more natural:<br>
      <strong>そして</strong> = and / and then (adding information)<br>
      <strong>でも</strong> = but / however (contrasting)<br>
      <strong>だから</strong> = so / therefore (result)<br>
      <strong>それから</strong> = and then (sequence of actions)`,
    examples: [
      { jp:'すしがすきです。そして、ラーメンもすきです。',
        romaji:'Sushi ga suki desu. Soshite, rāmen mo suki desu.',
        en:'I like sushi. And I also like ramen.',
        breakdown:[
          {word:'すし',   romaji:'sushi',   role:'sushi',        type:'noun'},
          {word:'が',     romaji:'ga',      role:'subject',      type:'subject'},
          {word:'すき',   romaji:'suki',    role:'like',         type:'adj'},
          {word:'です。', romaji:'desu.',   role:'polite ending',type:'ending'},
          {word:'そして', romaji:'soshite', role:'and / also',   type:'connector'},
          {word:'ラーメン',romaji:'rāmen',  role:'ramen',        type:'noun'},
          {word:'も',     romaji:'mo',      role:'also / too',   type:'topic'},
          {word:'すき',   romaji:'suki',    role:'like',         type:'adj'},
          {word:'です',   romaji:'desu',    role:'polite ending',type:'ending'},
        ]},
      { jp:'にほんごをべんきょうします。でも、むずかしいです。',
        romaji:'Nihongo wo benkyō shimasu. Demo, muzukashii desu.',
        en:'I study Japanese. But it\'s difficult.',
        breakdown:[
          {word:'にほんご',   romaji:'nihongo',  role:'Japanese',     type:'noun'},
          {word:'を',         romaji:'wo',       role:'object',       type:'object'},
          {word:'べんきょうします',romaji:'benkyō shimasu',role:'study',type:'verb'},
          {word:'でも',       romaji:'demo',     role:'but / however',type:'connector'},
          {word:'むずかしい', romaji:'muzukashii',role:'difficult',   type:'adj'},
          {word:'です',       romaji:'desu',     role:'polite ending',type:'ending'},
        ]},
      { jp:'おなかがすきました。だから、たべます。',
        romaji:'Onaka ga sukimashita. Dakara, tabemasu.',
        en:'I\'m hungry. So I\'ll eat.',
        breakdown:[
          {word:'おなか',   romaji:'onaka',   role:'stomach',         type:'noun'},
          {word:'が',       romaji:'ga',      role:'subject',         type:'subject'},
          {word:'すきました',romaji:'sukimashita',role:'got empty (hungry)',type:'verb'},
          {word:'だから',   romaji:'dakara',  role:'so / therefore',  type:'connector'},
          {word:'たべます', romaji:'tabemasu',role:'(I\'ll) eat',     type:'verb'},
        ]},
      { jp:'あさごはんをたべました。それから、がっこうにいきました。',
        romaji:'Asagohan wo tabemashita. Sorekara, gakkō ni ikimashita.',
        en:'I ate breakfast. Then I went to school.' },
    ]
  },
];

// ── COMMUNICATION TIPS ───────────────────────────────────────
const COMM_TIPS = [
  {
    icon: '🗑️',
    title: 'Drop the subject — it\'s normal!',
    color: '#a29bfe',
    body: `In English you must say "I eat sushi." In Japanese, once the subject is clear, just drop it!<br>
      <em>すしをたべます。</em> = "(I) eat sushi." — totally natural and common.
      Start sentences without わたしは every time — it can sound unnatural if overused.`
  },
  {
    icon: '🎩',
    title: 'Always use ます/です with new people',
    color: '#00b894',
    body: `Japanese has different speech levels. For any new person — teacher, shopkeeper, stranger — always use the polite <strong>〜ます / です</strong> forms.
      Casual forms (like だ or dictionary verbs) are only for close friends and family.
      You'll never offend anyone by being too polite!`
  },
  {
    icon: '🔚',
    title: 'The verb always comes last',
    color: '#e17055',
    body: `Japanese sentences always end with the verb or adjective. This means you have to listen/read all the way to the end before you know what happened!<br>
      <em>わたしは、きのう、ともだちと、レストランで、すしを — <strong>たべました。</strong></em><br>
      (Yesterday, with a friend, at a restaurant, sushi — I ate.)`
  },
  {
    icon: '🔑',
    title: 'Particles are your best friends',
    color: '#fd79a8',
    body: `The little words after nouns — は, が, を, に, で, の — tell you the role of each word.
      Even if you don't know all the vocabulary, catching the particles helps you understand the structure.<br>
      Quick cheat: <strong>は/が</strong> = subject, <strong>を</strong> = object (action target), <strong>に</strong> = direction/time, <strong>で</strong> = place of action, <strong>の</strong> = possessive.`
  },
  {
    icon: '🔄',
    title: 'も (mo) = "also / too" — use it often!',
    color: '#fdcb6e',
    body: `Replace は or が with <strong>も</strong> to add "also/too" to any sentence — no extra words needed.<br>
      わたしはすしがすきです。→ <em>わたしもすきです。</em> = I like it too.<br>
      それもください。= I'll also have that, please.`
  },
  {
    icon: '❓',
    title: 'Questions are easy — just add か',
    color: '#74b9ff',
    body: `No word reordering needed for questions! Just say the sentence and add <strong>か</strong> at the end with a rising tone.<br>
      これはペンです。→ <em>これはペンですか？</em> = Is this a pen?<br>
      Casual speech: Replace か with a rising tone alone — <em>これはペン？</em>`
  },
  {
    icon: '🪞',
    title: 'Mirror the other person',
    color: '#55efc4',
    body: `A great shortcut: echo back what someone said with だいすきです or そうです at the end.<br>
      They say: にほんがすきですか？ (Do you like Japan?)<br>
      You say: はい、だいすきです！(Yes, I love it!) — short, natural, perfect.<br>
      Japanese conversation values short affirmations: うん、そう、なるほど、へえ～`
  },
  {
    icon: '📣',
    title: 'Say it out loud — every time',
    color: '#e84393',
    body: `The fastest way to remember Japanese is to speak it, not just read it. When you learn a new word or sentence, say it out loud 3 times.
      Japanese pronunciation is very consistent — once you know hiragana sounds, everything follows the same rules. There are no silent letters!`
  },
];

// ── LESSONS ───────────────────────────────────────────────────
const LESSONS = [
  {
    id: 'lesson-222',
    title: 'Colors, Family & これ/それ/あれ',
    date: '2/22',
    icon: '🎨',
    color: '#e17055',
    vocab: [
      { jp:'あかい',        romaji:'akai',         en:'red (adjective)',      emoji:'🔴' },
      { jp:'きいろい',      romaji:'kiiroi',        en:'yellow (adjective)',   emoji:'🟡' },
      { jp:'ももいろ',      romaji:'momo iro',      en:'pink',                 emoji:'🩷' },
      { jp:'くろい',        romaji:'kuroi',         en:'black',                emoji:'⚫' },
      { jp:'かぞく',        romaji:'kazoku',        en:'family',               emoji:'👪' },
      { jp:'だれ',          romaji:'dare',          en:'who',                  emoji:'❓' },
      { jp:'どこ',          romaji:'doko',          en:'where',                emoji:'📍' },
      { jp:'あかちゃん',    romaji:'akachan',       en:'baby',                 emoji:'👶' },
      { jp:'います',        romaji:'imasu',         en:'to exist (living)',    emoji:'🧑' },
      { jp:'すんでいます',  romaji:'sunde imasu',   en:'living in / residing', emoji:'🏠' },
      { jp:'きょうだい',    romaji:'kyōdai',        en:'siblings',             emoji:'👫' },
    ],
    patterns: [
      { pattern:'これは、〜です。',   romaji:'Kore wa, ~ desu.',  en:'This is ~.' },
      { pattern:'それは、〜です。',   romaji:'Sore wa ~ desu.',   en:'It is ~.' },
      { pattern:'あれは、〜です。',   romaji:'Are wa ~ desu.',    en:'That (over there) is ~.' },
      { pattern:'〜がいます。',       romaji:'~ ga imasu.',       en:'There is ~ / I have ~. (living things)' },
      { pattern:'〜にすんでいます。', romaji:'~ ni sunde imasu.', en:'[Someone] lives in ~.' },
    ],
    examples: [
      { jp:'わたしは、こどもがいます。', romaji:'Watashi wa kodomo ga imasu.', en:'I have kids.',
        breakdown:[
          {word:'わたし',   romaji:'watashi', role:'I / me',        type:'noun'},
          {word:'は',       romaji:'wa',      role:'topic',         type:'topic'},
          {word:'こども',   romaji:'kodomo',  role:'children',      type:'noun'},
          {word:'が',       romaji:'ga',      role:'subject',       type:'subject'},
          {word:'います',   romaji:'imasu',   role:'exist / have',  type:'verb'},
        ]},
      { jp:'フィリピンにきょうだいがいます。', romaji:'Firipin ni kyōdai ga imasu.', en:'I have a sibling in the Philippines.',
        breakdown:[
          {word:'フィリピン', romaji:'Firipin',  role:'Philippines',   type:'noun'},
          {word:'に',         romaji:'ni',       role:'location',      type:'direction'},
          {word:'きょうだい', romaji:'kyōdai',   role:'sibling',       type:'noun'},
          {word:'が',         romaji:'ga',       role:'subject',       type:'subject'},
          {word:'います',     romaji:'imasu',    role:'exist / have',  type:'verb'},
        ]},
      { jp:'おじいちゃんとおばあちゃんは、フィリピンにすんでいます。', romaji:'Ojiichan to obaachan wa, Firipin ni sunde imasu.', en:'My grandpa and grandma live in the Philippines.',
        breakdown:[
          {word:'おじいちゃん', romaji:'ojiichan',    role:'grandpa',      type:'noun'},
          {word:'と',           romaji:'to',          role:'and',          type:'connector'},
          {word:'おばあちゃん', romaji:'obaachan',    role:'grandma',      type:'noun'},
          {word:'は',           romaji:'wa',          role:'topic',        type:'topic'},
          {word:'フィリピン',   romaji:'Firipin',     role:'Philippines',  type:'noun'},
          {word:'に',           romaji:'ni',          role:'location',     type:'direction'},
          {word:'すんでいます', romaji:'sunde imasu', role:'live in',      type:'verb'},
        ]},
      { jp:'わたしが、いちばんしたのおとうとです。', romaji:'Watashi ga, ichiban shita no otōto desu.', en:'I am the youngest brother.',
        breakdown:[
          {word:'わたし',       romaji:'watashi',      role:'I / me',          type:'noun'},
          {word:'が',           romaji:'ga',           role:'subject',         type:'subject'},
          {word:'いちばんした', romaji:'ichiban shita', role:'youngest',       type:'adj'},
          {word:'の',           romaji:'no',           role:'possessive',      type:'connector'},
          {word:'おとうと',     romaji:'otōto',        role:'younger brother', type:'noun'},
          {word:'です',         romaji:'desu',         role:'is',              type:'ending'},
        ]},
    ],
    notes: [
      { title:'います vs あります', content:'<strong>います (imasu)</strong> = use for people & animals (living/moving things).<br><strong>あります (arimasu)</strong> = use for objects & places (non-living things).' },
    ],
  },
  {
    id: 'lesson-315',
    title: 'Shapes, Meals & Counting People',
    date: '3/15',
    icon: '🔷',
    color: '#6c5ce7',
    vocab: [
      { jp:'かたち',      romaji:'katachi',     en:'shape',               emoji:'🔷' },
      { jp:'まる',        romaji:'maru',        en:'circle',              emoji:'⭕' },
      { jp:'しかく',      romaji:'shikaku',     en:'square',              emoji:'◼️' },
      { jp:'さんかく',    romaji:'sankaku',     en:'triangle',            emoji:'🔺' },
      { jp:'ほし',        romaji:'hoshi',       en:'star',                emoji:'⭐' },
      { jp:'あさごはん',  romaji:'asa gohan',   en:'breakfast',           emoji:'🍳' },
      { jp:'ひるごはん',  romaji:'hiru gohan',  en:'lunch',               emoji:'🍱' },
      { jp:'よるごはん',  romaji:'yoru gohan',  en:'dinner',              emoji:'🍽️' },
      { jp:'よる',        romaji:'yoru',        en:'night',               emoji:'🌙' },
      { jp:'たまご',      romaji:'tamago',      en:'egg',                 emoji:'🥚' },
      { jp:'ふたり',      romaji:'futari',      en:'2 people',            emoji:'👫' },
      { jp:'よにん',      romaji:'yo nin',      en:'4 people (❌ yon nin)', emoji:'👨‍👩‍👧‍👦' },
      { jp:'なんこ',      romaji:'nanko',       en:'how many',            emoji:'🔢' },
      { jp:'きりん',      romaji:'kirin',       en:'giraffe',             emoji:'🦒' },
      { jp:'すいか',      romaji:'suika',       en:'watermelon',          emoji:'🍉' },
      { jp:'にんじん',    romaji:'ninjin',      en:'carrot',              emoji:'🥕' },
      { jp:'ぶどう',      romaji:'budō',        en:'grapes',              emoji:'🍇' },
      { jp:'きつね',      romaji:'kitsune',     en:'fox',                 emoji:'🦊' },
      { jp:'とまと',      romaji:'tomato',      en:'tomato',              emoji:'🍅' },
    ],
    patterns: [
      { pattern:'かたちは、なんですか？',  romaji:'Katachi wa, nan desu ka?',    en:'What is the shape?' },
      { pattern:'ふたり〜がいます。',      romaji:'Futari ~ ga imasu.',          en:'There are 2 [people].' },
    ],
    examples: [
      { jp:'これは、まるです。', romaji:'Kore wa, maru desu.', en:'This is a circle.',
        breakdown:[
          {word:'これ',   romaji:'kore',  role:'this',    type:'noun'},
          {word:'は',     romaji:'wa',    role:'topic',   type:'topic'},
          {word:'まる',   romaji:'maru',  role:'circle',  type:'noun'},
          {word:'です',   romaji:'desu',  role:'is',      type:'ending'},
        ]},
      { jp:'ふたりこどもがいます。', romaji:'Futari kodomo ga imasu.', en:'I have 2 children.',
        breakdown:[
          {word:'ふたり', romaji:'futari', role:'2 people',     type:'noun'},
          {word:'こども', romaji:'kodomo', role:'children',     type:'noun'},
          {word:'が',     romaji:'ga',     role:'subject',      type:'subject'},
          {word:'います', romaji:'imasu',  role:'exist / have', type:'verb'},
        ]},
      { jp:'あさごはんは、たまごです。', romaji:'Asa gohan wa, tamago desu.', en:'Breakfast is eggs.',
        breakdown:[
          {word:'あさごはん', romaji:'asa gohan', role:'breakfast', type:'noun'},
          {word:'は',         romaji:'wa',        role:'topic',     type:'topic'},
          {word:'たまご',     romaji:'tamago',    role:'eggs',      type:'noun'},
          {word:'です',       romaji:'desu',      role:'is',        type:'ending'},
        ]},
    ],
    notes: [
      { title:'Counting people', content:'Japanese uses special counters for people:<br><strong>ひとり (hitori)</strong> = 1 person, <strong>ふたり (futari)</strong> = 2 people, <strong>さんにん (san nin)</strong> = 3 people, <strong>よにん (yo nin)</strong> = 4 people — NOT "yon nin".' },
    ],
  },
  {
    id: 'lesson-326',
    title: 'Animals, Past Tense & I Like ~ing',
    date: '3/26',
    icon: '🐾',
    color: '#00b894',
    vocab: [
      { jp:'うさぎ',        romaji:'usagi',       en:'rabbit',    emoji:'🐇' },
      { jp:'さい',          romaji:'sai',         en:'rhinoceros',emoji:'🦏' },
      { jp:'うま',          romaji:'uma',         en:'horse',     emoji:'🐎' },
      { jp:'しまうま',      romaji:'shimauma',    en:'zebra',     emoji:'🦓' },
      { jp:'たけ',          romaji:'take',        en:'bamboo',    emoji:'🎋' },
      { jp:'ながいくび',    romaji:'nagai kubi',  en:'long neck', emoji:'🦒' },
      { jp:'みじかいしっぽ',romaji:'mijikai shippo',en:'short tail',emoji:'🐕' },
      { jp:'ぶた',          romaji:'buta',        en:'pig',       emoji:'🐷' },
      { jp:'ぶたにく',      romaji:'butaniku',    en:'pork meat', emoji:'🥩' },
      { jp:'さかな',        romaji:'sakana',      en:'fish',      emoji:'🐠' },
      { jp:'かば',          romaji:'kaba',        en:'hippo',     emoji:'🦛' },
      { jp:'ふわふわ',      romaji:'fuwafuwa',    en:'fluffy',    emoji:'☁️' },
      { jp:'け',            romaji:'ke',          en:'hair / fur',emoji:'💇' },
    ],
    patterns: [
      { pattern:'きょうは、なにをしましたか？', romaji:'Kyō wa, nani o shimashita ka?', en:'What did you do today?' },
      { pattern:'〜にいきました。',            romaji:'~ ni ikimashita.',               en:'I went to ~.' },
      { pattern:'なにをすることがすきですか？', romaji:'Nani o suru koto ga suki desu ka?', en:'What do you like to do?' },
      { pattern:'〜ことがすきです。',          romaji:'~ koto ga suki desu.',           en:'I like to ~ / I like ~ing.' },
    ],
    examples: [
      { jp:'がっこうにいきました。', romaji:'Gakkō ni ikimashita.', en:'I went to school.',
        breakdown:[
          {word:'がっこう',     romaji:'gakkō',      role:'school',     type:'noun'},
          {word:'に',           romaji:'ni',         role:'direction',  type:'direction'},
          {word:'いきました',   romaji:'ikimashita', role:'went',       type:'verb'},
        ]},
      { jp:'しごとにいきました。', romaji:'Shigoto ni ikimashita.', en:'I went to work.',
        breakdown:[
          {word:'しごと',     romaji:'shigoto',    role:'work',      type:'noun'},
          {word:'に',         romaji:'ni',         role:'direction', type:'direction'},
          {word:'いきました', romaji:'ikimashita', role:'went',      type:'verb'},
        ]},
      { jp:'ねることがすきです。', romaji:'Neru koto ga suki desu.', en:'I like sleeping.',
        breakdown:[
          {word:'ねること', romaji:'neru koto', role:'sleeping',   type:'noun'},
          {word:'が',       romaji:'ga',        role:'subject',    type:'subject'},
          {word:'すき',     romaji:'suki',      role:'like',       type:'adj'},
          {word:'です',     romaji:'desu',      role:'is',         type:'ending'},
        ]},
      { jp:'ほんをよむことがすきです。', romaji:'Hon wo yomu koto ga suki desu.', en:'I like reading books.',
        breakdown:[
          {word:'ほん',       romaji:'hon',       role:'book',      type:'noun'},
          {word:'を',         romaji:'wo',        role:'object',    type:'object'},
          {word:'よむこと',   romaji:'yomu koto', role:'reading',   type:'noun'},
          {word:'が',         romaji:'ga',        role:'subject',   type:'subject'},
          {word:'すき',       romaji:'suki',      role:'like',      type:'adj'},
          {word:'です',       romaji:'desu',      role:'is',        type:'ending'},
        ]},
      { jp:'ギターをひくことがすきです。', romaji:'Gitā wo hiku koto ga suki desu.', en:'I like playing guitar.',
        breakdown:[
          {word:'ギター',     romaji:'Gitā',      role:'guitar',    type:'noun'},
          {word:'を',         romaji:'wo',        role:'object',    type:'object'},
          {word:'ひくこと',   romaji:'hiku koto', role:'playing',   type:'noun'},
          {word:'が',         romaji:'ga',        role:'subject',   type:'subject'},
          {word:'すき',       romaji:'suki',      role:'like',      type:'adj'},
          {word:'です',       romaji:'desu',      role:'is',        type:'ending'},
        ]},
      { jp:'サッカーをすることがすきです。', romaji:'Sakkā wo suru koto ga suki desu.', en:'I like playing soccer.',
        breakdown:[
          {word:'サッカー',   romaji:'Sakkā',     role:'soccer',       type:'noun'},
          {word:'を',         romaji:'wo',        role:'object',       type:'object'},
          {word:'すること',   romaji:'suru koto', role:'doing/playing', type:'noun'},
          {word:'が',         romaji:'ga',        role:'subject',      type:'subject'},
          {word:'すき',       romaji:'suki',      role:'like',         type:'adj'},
          {word:'です',       romaji:'desu',      role:'is',           type:'ending'},
        ]},
    ],
    notes: [
      { title:'Past tense', content:'Add <strong>ました (mashita)</strong> instead of <strong>ます (masu)</strong> to make a verb past tense.<br>いきます → いきました (go → went)' },
    ],
  },
  {
    id: 'lesson-jiko',
    title: 'じこしょうかい — Introduce Yourself',
    date: 'Self-intro',
    icon: '🙋',
    color: '#fd79a8',
    vocab: [
      { jp:'じこしょうかい', romaji:'jiko shōkai',       en:'self-introduction',    emoji:'🙋' },
      { jp:'わたし',         romaji:'watashi',            en:'I / me',               emoji:'👤' },
      { jp:'なまえ',         romaji:'namae',              en:'name',                 emoji:'🏷️' },
      { jp:'しょうがく',     romaji:'shōgaku',            en:'elementary school',    emoji:'🏫' },
      { jp:'ねんせい',       romaji:'nensē',              en:'grade / year level',   emoji:'📚' },
      { jp:'しゅみ',         romaji:'shumi',              en:'hobby',                emoji:'🎯' },
      { jp:'りょうしん',     romaji:'ryōshin',            en:'parents',              emoji:'👨‍👩‍👦' },
      { jp:'よにんかぞく',   romaji:'yonin kazoku',       en:'family of 4',          emoji:'👨‍👩‍👧‍👦' },
      { jp:'すきなたべもの', romaji:'suki na tabemono',   en:'favorite food',        emoji:'🍱' },
    ],
    patterns: [
      { pattern:'わたしは、〜です。',              romaji:'Watashi wa ~ desu.',                en:'My name is ~.' },
      { pattern:'〜にすんでいます。',              romaji:'~ ni sunde imasu.',                 en:'I live in ~.' },
      { pattern:'わたしは、よにんかぞくです。',    romaji:'Watashi wa yonin kazoku desu.',      en:'I have a family of 4.' },
      { pattern:'しゅみは、〜することです。',      romaji:'Shumi wa ~ suru koto desu.',         en:'My hobby is ~ing.' },
      { pattern:'すきなたべものは、〜です。',      romaji:'Suki na tabemono wa ~ desu.',        en:'My favorite food is ~.' },
      { pattern:'よろしくおねがいします。',         romaji:'Yoroshiku onegai shimasu.',          en:'Nice to meet you.' },
    ],
    examples: [
      { jp:'こんにちは。はじめまして。', romaji:'Konnichiwa. Hajimemashite.', en:'Hello. Nice to meet you (for the first time).',
        breakdown:[
          {word:'こんにちは',   romaji:'konnichiwa',   role:'hello',            type:'noun'},
          {word:'はじめまして', romaji:'hajimemashite', role:'nice to meet you', type:'verb'},
        ]},
      { jp:'わたしは、カールです。', romaji:'Watashi wa Kāru desu.', en:'My name is Carl.',
        breakdown:[
          {word:'わたし', romaji:'watashi', role:'I / me',  type:'noun'},
          {word:'は',     romaji:'wa',      role:'topic',   type:'topic'},
          {word:'カール', romaji:'Kāru',    role:'Carl',    type:'noun'},
          {word:'です',   romaji:'desu',    role:'is',      type:'ending'},
        ]},
      { jp:'いまは、おーすとらりあにすんでいます。', romaji:'Ima wa, Ōsutoraria ni sunde imasu.', en:'I currently live in Australia.',
        breakdown:[
          {word:'いま',         romaji:'ima',         role:'now',        type:'adverb'},
          {word:'は',           romaji:'wa',          role:'topic',      type:'topic'},
          {word:'オーストラリア',romaji:'Ōsutoraria',  role:'Australia',  type:'noun'},
          {word:'に',           romaji:'ni',          role:'location',   type:'direction'},
          {word:'すんでいます', romaji:'sunde imasu', role:'live in',    type:'verb'},
        ]},
      { jp:'わたしは、よにんかぞくです。ふたりのこどもがいます。', romaji:'Watashi wa yonin kazoku desu. Futari no kodomo ga imasu.', en:'I have a family of 4. I have 2 children.',
        breakdown:[
          {word:'わたし',       romaji:'watashi',     role:'I / me',       type:'noun'},
          {word:'は',           romaji:'wa',          role:'topic',        type:'topic'},
          {word:'よにんかぞく', romaji:'yonin kazoku', role:'family of 4', type:'noun'},
          {word:'です',         romaji:'desu',        role:'is',           type:'ending'},
          {word:'ふたり',       romaji:'futari',      role:'2 people',     type:'noun'},
          {word:'の',           romaji:'no',          role:'possessive',   type:'connector'},
          {word:'こども',       romaji:'kodomo',      role:'children',     type:'noun'},
          {word:'が',           romaji:'ga',          role:'subject',      type:'subject'},
          {word:'います',       romaji:'imasu',       role:'exist / have', type:'verb'},
        ]},
      { jp:'しゅみは、にほんごのべんきょうをすることです。', romaji:'Shumi wa, nihongo no benkyō wo suru koto desu.', en:'My hobby is studying Japanese.',
        breakdown:[
          {word:'しゅみ',       romaji:'shumi',    role:'hobby',     type:'noun'},
          {word:'は',           romaji:'wa',       role:'topic',     type:'topic'},
          {word:'にほんご',     romaji:'nihongo',  role:'Japanese',  type:'noun'},
          {word:'の',           romaji:'no',       role:'possessive', type:'connector'},
          {word:'べんきょう',   romaji:'benkyō',   role:'study',     type:'noun'},
          {word:'を',           romaji:'wo',       role:'object',    type:'object'},
          {word:'すること',     romaji:'suru koto', role:'doing',   type:'noun'},
          {word:'です',         romaji:'desu',     role:'is',        type:'ending'},
        ]},
      { jp:'よろしくおねがいします。', romaji:'Yoroshiku onegai shimasu.', en:'Nice to meet you.',
        breakdown:[
          {word:'よろしく',       romaji:'yoroshiku',   role:'favorably',  type:'adverb'},
          {word:'おねがいします', romaji:'onegai shimasu', role:'I ask / please', type:'verb'},
        ]},
    ],
    notes: [
      { title:'こんにちは vs はじめまして', content:'<strong>こんにちは (konnichiwa)</strong> = Hello (general greeting).<br><strong>はじめまして (hajimemashite)</strong> = Nice to meet you — used specifically when meeting someone for the first time.' },
    ],
  },
  {
    id: 'lesson-donna',
    title: 'どんな人？— Personality Adjectives',
    date: 'Personality',
    icon: '😊',
    color: '#fdcb6e',
    vocab: [
      { jp:'やさしい',    romaji:'yasashii',    en:'kind',              emoji:'😊' },
      { jp:'おもしろい',  romaji:'omoshiroi',   en:'funny / interesting',emoji:'😄' },
      { jp:'まじめ',      romaji:'majime',      en:'serious',           emoji:'🤓' },
      { jp:'しずか',      romaji:'shizuka',     en:'quiet',             emoji:'🤫' },
      { jp:'あかるい',    romaji:'akarui',      en:'cheerful / bright', emoji:'🌟' },
      { jp:'こわい',      romaji:'kowai',       en:'scary',             emoji:'😨' },
      { jp:'へん',        romaji:'hen',         en:'strange / weird',   emoji:'🤪' },
      { jp:'しんせつ',    romaji:'shinsetsu',   en:'kind / helpful',    emoji:'🤝' },
      { jp:'おしゃべり',  romaji:'oshaberi',    en:'chatty / talkative',emoji:'💬' },
      { jp:'せいかく',    romaji:'seikaku',     en:'personality',       emoji:'🪞' },
    ],
    patterns: [
      { pattern:'〜は、〜です。',      romaji:'[name] wa [personality] desu.',       en:'[Name] is [personality].' },
      { pattern:'〜は、〜ですか？',    romaji:'[name] wa [personality] desu ka?',    en:'Is [name] [personality]?' },
      { pattern:'はい、そうです！',    romaji:'Hai, sō desu!',                        en:'Yes, that\'s right!' },
      { pattern:'いいえ、ちがいます。',romaji:'Iie, chigaimasu.',                     en:'No, that\'s not right.' },
    ],
    examples: [
      { jp:'ともだちは、やさしいです。', romaji:'Tomodachi wa, yasashii desu.', en:'My friend is kind.',
        breakdown:[
          {word:'ともだち', romaji:'tomodachi', role:'friend',  type:'noun'},
          {word:'は',       romaji:'wa',        role:'topic',   type:'topic'},
          {word:'やさしい', romaji:'yasashii',  role:'kind',    type:'adj'},
          {word:'です',     romaji:'desu',      role:'is',      type:'ending'},
        ]},
      { jp:'せんせいは、まじめですか？', romaji:'Sensei wa, majime desu ka?', en:'Is the teacher serious?',
        breakdown:[
          {word:'せんせい', romaji:'sensei',  role:'teacher',   type:'noun'},
          {word:'は',       romaji:'wa',      role:'topic',     type:'topic'},
          {word:'まじめ',   romaji:'majime',  role:'serious',   type:'adj'},
          {word:'です',     romaji:'desu',    role:'is',        type:'ending'},
          {word:'か',       romaji:'ka',      role:'? question', type:'question'},
        ]},
      { jp:'はい、そうです！', romaji:'Hai, sō desu!', en:'Yes, that\'s right!',
        breakdown:[
          {word:'はい',   romaji:'hai',  role:'yes',          type:'adverb'},
          {word:'そう',   romaji:'sō',   role:'that\'s right', type:'noun'},
          {word:'です',   romaji:'desu', role:'is',           type:'ending'},
        ]},
      { jp:'いいえ、ちがいます。おもしろいです。', romaji:'Iie, chigaimasu. Omoshiroi desu.', en:'No. [They are] funny.',
        breakdown:[
          {word:'いいえ',     romaji:'iie',        role:'no',     type:'adverb'},
          {word:'ちがいます', romaji:'chigaimasu', role:'not right', type:'verb'},
          {word:'おもしろい', romaji:'omoshiroi',  role:'funny',  type:'adj'},
          {word:'です',       romaji:'desu',       role:'is',     type:'ending'},
        ]},
    ],
    notes: [
      { title:'な-adjectives', content:'Most personality words (まじめ、しずか、しんせつ、おしゃべり) are <strong>な-adjectives</strong>. Before a noun, add な: e.g. <em>しずかな人</em> (a quiet person). い-adjectives (やさしい、おもしろい、こわい、あかるい) change before nouns too: e.g. <em>やさしい人</em>.' },
    ],
  },
  {
    id: 'lesson-yobi',
    title: 'ようび — Days & Time Words',
    date: 'Days/Time',
    icon: '📅',
    color: '#74b9ff',
    vocab: [
      { jp:'げつようび',  romaji:'getsuyōbi',  en:'Monday',   emoji:'1️⃣' },
      { jp:'かようび',    romaji:'kayōbi',     en:'Tuesday',  emoji:'2️⃣' },
      { jp:'すいようび',  romaji:'suiyōbi',    en:'Wednesday',emoji:'3️⃣' },
      { jp:'もくようび',  romaji:'mokuyōbi',   en:'Thursday', emoji:'4️⃣' },
      { jp:'きんようび',  romaji:'kinyōbi',    en:'Friday',   emoji:'5️⃣' },
      { jp:'どようび',    romaji:'doyōbi',     en:'Saturday', emoji:'6️⃣' },
      { jp:'にちようび',  romaji:'nichiyōbi',  en:'Sunday',   emoji:'7️⃣' },
      { jp:'しゅうまつ',  romaji:'shūmatsu',   en:'weekend',  emoji:'🎉' },
      { jp:'どにち',      romaji:'donichi',    en:'Sat. & Sun.',emoji:'🏖️' },
      { jp:'おととい',    romaji:'ototoi',     en:'day before yesterday', emoji:'⏮️' },
      { jp:'きのう',      romaji:'kinō',       en:'yesterday',            emoji:'◀️' },
      { jp:'きょう',      romaji:'kyō',        en:'today',                emoji:'📍' },
      { jp:'あした',      romaji:'ashita',     en:'tomorrow',             emoji:'▶️' },
      { jp:'あさって',    romaji:'asatte',     en:'day after tomorrow',   emoji:'⏭️' },
      { jp:'せんしゅう',  romaji:'senshū',     en:'last week',            emoji:'⬅️' },
      { jp:'こんしゅう',  romaji:'konshū',     en:'this week',            emoji:'📌' },
      { jp:'らいしゅう',  romaji:'raishū',     en:'next week',            emoji:'➡️' },
      { jp:'せんげつ',    romaji:'sengetsu',   en:'last month',           emoji:'⬅️' },
      { jp:'こんげつ',    romaji:'kongetsu',   en:'this month',           emoji:'📌' },
      { jp:'らいげつ',    romaji:'raigetsu',   en:'next month',           emoji:'➡️' },
      { jp:'きょねん',    romaji:'kyonen',     en:'last year',            emoji:'⬅️' },
      { jp:'ことし',      romaji:'kotoshi',    en:'this year',            emoji:'📌' },
      { jp:'らいねん',    romaji:'rainen',     en:'next year',            emoji:'➡️' },
    ],
    patterns: [
      { pattern:'きょうは、なんようびですか？', romaji:'Kyō wa, nan yōbi desu ka?', en:'What day is it today?' },
      { pattern:'〜ようびです。',               romaji:'~ yōbi desu.',               en:'It is ~day.' },
    ],
    examples: [
      { jp:'きょうは、もくようびです。', romaji:'Kyō wa, mokuyōbi desu.', en:'Today is Thursday.',
        breakdown:[
          {word:'きょう',     romaji:'kyō',       role:'today',    type:'noun'},
          {word:'は',         romaji:'wa',        role:'topic',    type:'topic'},
          {word:'もくようび', romaji:'mokuyōbi',  role:'Thursday', type:'noun'},
          {word:'です',       romaji:'desu',      role:'is',       type:'ending'},
        ]},
      { jp:'あしたは、きんようびですか？', romaji:'Ashita wa, kinyōbi desu ka?', en:'Is tomorrow Friday?',
        breakdown:[
          {word:'あした',     romaji:'ashita',   role:'tomorrow', type:'noun'},
          {word:'は',         romaji:'wa',       role:'topic',    type:'topic'},
          {word:'きんようび', romaji:'kinyōbi',  role:'Friday',   type:'noun'},
          {word:'です',       romaji:'desu',     role:'is',       type:'ending'},
          {word:'か',         romaji:'ka',       role:'? question', type:'question'},
        ]},
      { jp:'しゅうまつに、どこへいきますか？', romaji:'Shūmatsu ni, doko e ikimasu ka?', en:'Where are you going on the weekend?',
        breakdown:[
          {word:'しゅうまつ', romaji:'shūmatsu', role:'weekend',    type:'noun'},
          {word:'に',         romaji:'ni',       role:'time marker', type:'direction'},
          {word:'どこ',       romaji:'doko',     role:'where',      type:'noun'},
          {word:'へ',         romaji:'e',        role:'direction',  type:'direction'},
          {word:'いきます',   romaji:'ikimasu',  role:'go',         type:'verb'},
          {word:'か',         romaji:'ka',       role:'? question', type:'question'},
        ]},
    ],
    notes: [
      { title:'Memory trick for days', content:'Each day name comes from nature/elements:<br>月(moon)・火(fire)・水(water)・木(tree)・金(gold)・土(earth)・日(sun)<br><em>Getsu(月)·Ka(火)·Sui(水)·Moku(木)·Kin(金)·Do(土)·Nichi(日)</em>' },
    ],
  },
];

// ── ROW COLORS for kana charts ────────────────────────────────
const ROW_COLORS = {
  vowel:   '#ff6b9d',
  k:       '#a29bfe',
  s:       '#74b9ff',
  t:       '#55efc4',
  na:      '#fdcb6e',
  h:       '#fd79a8',
  m:       '#6c5ce7',
  y:       '#e17055',
  r:       '#00cec9',
  w:       '#00b894',
  n_final: '#636e72',
};
