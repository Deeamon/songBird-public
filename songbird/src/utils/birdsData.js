const birdsData = [
  {
    id: 1,
    name: 'Разогрев',
    icon: 'fas fa-fire',
    birds: [
      {
        id: 11,
        name: 'Тулес',
        species: 'Pluvialis squatarola',
        description:
          'Тулес быстро бегает, делая внезапные остановки и осматриваясь при этом по сторонам. Водных животных он ловит с поверхности воды, достаёт со дна мелководных тундровых озерков.',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pluvialis_squatarola_%28summer_plumage%29.jpg/275px-Pluvialis_squatarola_%28summer_plumage%29.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC526288-2019-10-22%20Cap%20Ferret%20Pluvier%20argente%20envol%20alarme%20%2B.mp3',
      },
      {
        id: 12,
        name: 'Неразлучник Фишера',
        species: 'Agapornis fischeri',
        description:
          'Обитают в зоне саванны до высоты 1700 м над уровнем моря. Питаются в основном семенами растений и зёрнами различных злаков, иногда совершают нападение на поля. В некоторых районах Танзании их считают вредителями.',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Agapornis_fischeri_-Ueno_Zoo%2C_Japan_-three-8a-4c.jpg/275px-Agapornis_fischeri_-Ueno_Zoo%2C_Japan_-three-8a-4c.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC526237-2019-10-23%20Cap%20Ferret%20Inseparable%20de%20Fisher%20cri%20de%20vol%20%2B.mp3',
      },
      {
        id: 13,
        name: 'Чернозобик',
        species: 'Calidris alpina',
        description:
          'Взрослый чернозобик достигает размеров от 17 до 21 см, а размах его крыльев насчитывает от 32 до 36 см. Его вес составляет от 40 до 60 г, а максимальная продолжительность жизни — 24 года.',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Calidris_alpina03.jpg/275px-Calidris_alpina03.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC526218-2019-10-23%20Cap%20Ferret%20Becasseau%20variable%20envol%20groupe.mp3',
      },
      {
        id: 14,
        name: 'Песчанка',
        species: 'Calidris alba',
        description:
          'Песчанка — небольшая птица из семейства бекасовых отряда ржанкообразных. Это одна из наиболее северных размножающихся птиц, её гнездовья обнаружены в арктической тундре всего в 960 км от северного полюса.',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Calidris-alba-001.jpg/275px-Calidris-alba-001.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC526215-2019-10-23%20Cap%20Ferret%20Becasseau%20sanderling%20vol%20%2B.mp3',
      },
      {
        id: 15,
        name: 'Пестроносая крачка',
        species: 'Thalasseus sandvicensis',
        description:
          ' Длинный, тонкий чёрный клюв, на конце светло-жёлтого цвета. Верхняя сторона крыльев светло-серого цвета, нижняя сторона и шея белые. Верх головы и хохол на затылке чёрного цвета. Крик напоминает карканье «кэррик»',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Sandwich_Tern_perched.jpg/275px-Sandwich_Tern_perched.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/POVKNQVSGU/XC526134-Thalasseus%20sandvicensis_call_09_02_20_Puerto%20de%20lo%20Urrutias%20%28online-audio-converter.com%29.mp3',
      },
      {
        id: 16,
        name: 'Кольчатая горлица',
        species: 'Streptopelia decaocto',
        description:
          'Кольчатая горлица размером с сизого голубя, при этом она легче, а её хвост длиннее, поэтому птица выглядит стройнее и изящнее.Крик — это глухое воркование из трёх строф с акцентом на второй строфе как у многих видов голубей.',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Collared.dove.jpg/275px-Collared.dove.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC526107-sierp%C3%B3wka%209.01.2020%20%207.29.mp3',
      },
    ],
  },
  {
    id: 2,
    name: 'Воробьиные',
    icon: 'fab fa-twitter',
    birds: [
      {
        id: 21,
        name: 'Воробей',
        species: 'Passer domesticus',
        description:
          'Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по пестрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — они селятся поблизости к человеческому жилищу.',
        image:
          'https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3',
      },
      {
        id: 22,
        name: 'Грач',
        species: 'Corvus frugilegus',
        description:
          'Грачи очень умные и сообразительные птицы. С помощью клюва они создают и используют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав «тарахтение», они летят на звук – трактор пашет землю, значит, в этом месте много корма.',
        image:
          'https://live.staticflickr.com//65535//49347123322_291c86b016.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3',
      },
      {
        id: 23,
        name: 'Ворон',
        species: 'Corvus согах',
        description:
          'Ворон - самый крупный представитель врановых. Он заметно больше вороны. Размах крыльев - около полутора метров. Самцы крупнее самок. Хвост клиновидный.',
        image: 'https://worldbirds.ru/images/stories/voron.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/CIMGCGUWCS/XC383658-ravn-0328_124901.mp3',
      },
      {
        id: 24,
        name: 'Вьюрок',
        species: 'Fringilla montifringilla',
        description:
          'Вьюрок - близкий родственник зяблика, похожий на него образом жизни. Нередко эти птицы составляют с зябликами общие стаи, но по окраске оперения легко отличаются от своих родичей. ',
        image: 'https://worldbirds.ru/images/stories/vyurok1.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/YSDNMROVID/XC349852-861_frimon_ts%C3%A4eep-kutsu2_Suomi_Kuusamo_2008-06-03.mp3',
      },
      {
        id: 25,
        name: 'Дрозд',
        species: 'Turdus cardis',
        description:
          'Представителей семейства можно встретить преимущественно в лесных массивах, равнинных или горных, лишь некоторые виды могут жить на открытых пространствах.',
        image: 'https://worldbirds.ru/images/stories/drozd.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC285674-LS_58048%20Japanese%20Thrush%20flight%20call.mp3',
      },
      {
        id: 26,
        name: 'Сойка',
        species: 'Garrulus glandarius',
        description:
          'Когда сойка волнуется, хохолок на её голове взъерошивается. Птица старается создать устрашающее зрелище. Сойки умеют имитировать голоса других птиц, животных и звуки, которые создает человек. На зиму они делают большие запасы желудей и орехов.',
        image:
          'https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3',
      },
    ],
  },
  {
    id: 3,
    name: 'Попугаи',
    icon: 'fab fa-earlybirds',
    birds: [
      {
        id: 31,
        name: 'Ара',
        species: 'Аrа mасао',
        description:
          'Попугаи ара - одни из самых ярко окрашенных. Этот крупный, изумительно красивый попугай населяет тропические леса Южной и Центральной Америки.',
        image: 'https://worldbirds.ru/images/stories/ara.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/ARFGONJCBJ/ScarletMacawCall-Yasuni.mp3',
      },
      {
        id: 32,
        name: 'Какаду',
        species: 'Cacatua leadbeateri',
        description:
          'Какаду двадцать видов. Траурных пять, они почти черные. Дома их держат редко. У шлемоносного какаду красные хохолок и голова.',
        image: 'https://worldbirds.ru/images/stories/kakadu.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/EHGWCIGILC/XC171932-sulfur-crested-cockatoo-murrumbidgee.mp3',
      },
      {
        id: 33,
        name: 'Корелла',
        species: 'Nymphicus hollandicus',
        description:
          'Кореллы или нимфы (Nymphicus - латинское название рода) были описаны выдающимся английским орнитологом Джоном Гульдом в 1840 году во время его путешествия по Австралии.',
        image: 'https://worldbirds.ru/images/stories/korella.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/DXYUSANLSN/XC240157-ninphicus%20ollandicus%202%20reina%20mercedes%20carlos%2005-05-2015.mp3',
      },
      {
        id: 34,
        name: 'Волнистый попугайчик',
        species: 'Melopsittacus undulatus',
        description:
          'Родина волнистых попугайчиков - Австралия, где они частенько попадаются на глаза, летая большими стаями. Однако в неволе нынче этих птиц даже больше, чем на свободе.',
        image: 'https://worldbirds.ru/images/stories/popugaychik.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/HBPYQXTJEV/2012-05-22_T265_T136_Budgerigar-Exmouth-SewagePonds-07Uhr58.mp3',
      },
      {
        id: 35,
        name: 'Попугай (Жако)',
        species: 'Psittacus erithacus',
        description:
          'Все попугаи - прекрасные акробаты, способные проделывать на ветках деревьев головокружительные трюки. Живут птицы, как правило, стаями, селятся колониями.',
        image: 'https://worldbirds.ru/images/stories/popugay.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/VROUALCTKG/XC351945-Grey%20Parrot%20%28call%2C%20Ghana%2C%20Ankasa%2C%20apr2016%2C%201%29.MP3',
      },
      {
        id: 36,
        name: 'Острохвостый лорикет',
        species: 'Trichoglossus haematodus',
        description:
          'В период созревания урожая они доставляют серьезные неприятности фермерам, уничтожая во множестве плоды и ягоды. Также поедают пыльцу и нектар цветов, почки, молодые побеги и семена деревьев и кустарников, насекомых и их личинок.',
        image: 'https://worldbirds.ru/images/stories/loriket.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/EHGWCIGILC/XC434425-Lorikeet_Little_SD585_Benarkin_DawnA_12thSep18.mp3',
      },
    ],
  },
  {
    id: 4,
    name: 'Певчие',
    icon: 'fas fa-music',
    birds: [
      {
        id: 41,
        name: 'Жаворонок',
        species: 'Alauda arvensis',
        description:
          'Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.',
        image: 'https://live.staticflickr.com/65535/47105096764_f751fba568.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3',
      },
      {
        id: 42,
        name: 'Соловей',
        species: 'Luscinia luscinia',
        description:
          'Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 повторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, соловьи легко и хорошо перенимают пение других птиц.',
        image: 'https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3',
      },
      {
        id: 43,
        name: 'Скворец',
        species: 'Sturnus vulgaris',
        description:
          'Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.',
        image: 'https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3',
      },
      {
        id: 44,
        name: 'Иволга',
        species: 'Oriolus oriolus',
        description:
          'Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.',
        image: 'https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3',
      },
      {
        id: 45,
        name: 'Свиристель',
        species: 'Bombycilla garrulus',
        description:
          'У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.',
        image:
          'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3',
      },
      {
        id: 46,
        name: 'Щегол',
        species: 'Carduelis carduelis',
        description:
          'Щеглы поют красиво и мелодично. И в природе, и в неволе они щебечут почти круглый год. В пении щегла различают более 20 переливчатых трелей. Щеглы привыкают к людям, и даже могут возвратиться к хозяину после того, как их выпустили на волю',
        image:
          'https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3',
      },
    ],
  },
  {
    id: 5,
    name: 'Хищные',
    icon: 'fas fa-skull-crossbones',
    birds: [
      {
        id: 51,
        name: 'Орёл',
        species: 'Aquila nipalensis',
        description:
          'В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров',
        image:
          'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3',
      },
      {
        id: 52,
        name: 'Беркут',
        species: 'Aquila chrysaetuss',
        description:
          'Беркут - один из самых крупных орлов. Хищник имеет притяжение к лесам, однако с таким огромным размахом крыльев охотиться в чаще невозможно. Потому предпочитает селиться в перелесках, среди скал, на краю лесных массивов.',
        image: 'https://worldbirds.ru/images/stories/berkut.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC476740-Ukjent%20XC%20Stange%20Refsal%20Elias%20A.%20Ryberg20190525135928_047.mp3',
      },
      {
        id: 53,
        name: 'Гарпия',
        species: 'Harpia harpyja',
        description:
          'Древние греки называли гарпиями жутких мифических существ. Наполовину они были женщинами, а наполовину - хищными птицами с огромными когтями. Удивительно, но гарпии существуют не только в мифах.',
        image: 'https://worldbirds.ru/images/stories/garpiya.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/OHHTDSDNBT/HARPHIA%20XENO.mp3',
      },
      {
        id: 54,
        name: 'Сокол',
        species: 'Falco peregrinus',
        description:
          'Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.',
        image:
          'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3',
      },
      {
        id: 55,
        name: 'Ястреб',
        species: 'Accipiter gentilis',
        description:
          'Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.',
        image:
          'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3',
      },
      {
        id: 56,
        name: 'Стервятник',
        species: 'Neophron percnopterus',
        description:
          'Стервятники обитают в горах и предгорьях, охотно селятся вблизи человеческого жилья. В южных регионах эти птицы приносят несомненную пользу, очищая окрестности городов и поселков от пищевых отбросов. Стервятники легко приспосабливаются к различным условиям существования.',
        image: 'https://worldbirds.ru/images/stories/stervyatnik.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/ILUHRFXDNU/percnoptere%20dEgypte%20chickcall.mp3',
      },
    ],
  },
  {
    id: 6,
    name: 'Морские',
    icon: 'fas fa-water',
    birds: [
      {
        id: 61,
        name: 'Альбатрос',
        species: 'Diomedea exulans',
        description:
          'Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния',
        image: 'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3',
      },
      {
        id: 62,
        name: 'Олуша',
        species: 'Sula nebouxii',
        description:
          'Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок',
        image: 'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3',
      },
      {
        id: 63,
        name: 'Буревестник',
        species: 'Puffinus griseus',
        description:
          'Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.',
        image: 'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3',
      },
      {
        id: 64,
        name: 'Пеликан',
        species: 'Pelecanus',
        description:
          'Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.',
        image: 'https://live.staticflickr.com/7885/46523771945_9496c2a191.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3',
      },
      {
        id: 65,
        name: 'Пингвин',
        species: 'Aptenodytes forsteri',
        description:
          'Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.',
        image: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3',
      },
      {
        id: 66,
        name: 'Чайка',
        species: 'Larus argentatus',
        description:
          'Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.',
        image: 'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3',
      },
    ],
  },
];

export default birdsData;
