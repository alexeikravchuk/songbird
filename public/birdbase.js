const birdGroups = [
  'Птицы Беларуси',
  'Певчие птицы',
  'Лесные птицы',
  'Тропические птицы',
  'Хищные птицы',
  'Морские птицы',
];

const birdsData = [
  [
    {
      id: 1,
      name: 'Сизый голубь',
      species: 'Columba livia',
      description:
        'Сизый голубь — широко распространённая птица семейства голубиных. В дикой природе сизый голубь обычно селится на прибрежных скалах, в горных ущельях либо вдоль обрывистых берегов рек, часто поблизости от зарослей кустарника или сельскохозяйственных угодий. Их полудомашние потомки легко адаптировались к жизни возле человеческого жилья, поскольку каменные постройки напоминают природные места обитания, а пищевые отходы служат надёжной кормовой базой в любое время года.',
      image: 'https://live.staticflickr.com/1738/42576796302_a7e20ff495_z.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/TLPLNAINFU/XC559541-SNI-220-14052020-BYDUE-fiskem%C3%A5ke-troms%C3%B8_01.mp3',
    },
    {
      id: 2,
      name: 'Белый аист',
      species: 'Ciconia ciconia',
      description:
        'Болотная птица семейства аистовых. Основные приметы – белое оперение с черным на крыльях, длинный тонкий красный клюв и длинный красные ноги. Рост взрослой особи: около 100-125 сантиметров (в зависимости от пола). Размах крыльев: 155-200 сантиметров (в зависимости от пола). Масса: около 4 килограмм. Продолжительность жизни: около 20 лет. Есть сведения об особях, проживших более 35 лет.',
      image: 'https://live.staticflickr.com/65535/50061260862_2ebb277a52_z.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/UXGZWVYDFE/XC134219-1995062921_Ciconia%20ciconia_F%20DEROUSSEN.mp3',
    },
    {
      id: 3,
      name: 'Белая трясогузка',
      species: 'Motacilla alba',
      description:
        'Небольшая птица семейства трясогузковых. Имеет контрастную, черно-бело-серую окраску. Длина тела взрослой особи: около 16-20 сантиметров. Масса: около 20-25 грамм. Продолжительность жизни: около 10 лет. В неволе возрастает до 12 лет.',
      image: 'https://live.staticflickr.com/4391/36083921204_7f6821a56e_z.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/BTOFEKXFGW/XC509616-MIXPRE-299.mp3',
    },
    {
      id: 4,
      name: 'Иволга',
      species: 'Oriolus oriolus',
      description:
        'Небольшая птица с ярким черно-желтым оперением, единственный представитель семейства иволговых. Длина тела взрослой особи: около 22-25 сантиметров. Размах крыльев: около 45 сантиметров. Масса: около 60-90 грамм.  Продолжительность жизни: около 8 лет. Максимум – 18-20 лет',
      image: 'https://live.staticflickr.com/3709/9021268473_631c4e5aa7_z.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/RWHGTWZNPX/XC329583-Orioloriol-CS_Poland_PSZ_2016_07_30_18.00_6833.mp3',
    },
    {
      id: 5,
      name: 'Серый гусь',
      species: 'Cuculus canorus',
      description:
        'Темно-серая птица с коричневым оттенком оперения. Длина тела взрослой особи: 75-92 сантиметров (самец крупнее самки). Размах крыльев: 145-180 сантиметров. Масса: 2,5-4,5 килограмм. Продолжительность жизни: до 20 лет на воле, в неволе значительно дольше.',
      image: 'https://live.staticflickr.com/4850/46370423811_7d1a9c8ce1_c.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/OQZFKFTAKD/XC349980-GRAUGÄNSE%20%2021.9.12%20%20Binnensee%2C%20Ammersee%20S%20%2010_29%20%20LS102623%20Ausschn.%20%20gült..mp3',
    },
    {
      id: 6,
      name: 'Черный стриж',
      species: 'Apus apus',
      description:
        'Небольшая птица семейства стрижиных с оперением темно-бурого цвета с зеленоватым отливом. На подбородке и горле заметно белое пятно. Длина тела взрослой особи: до 20 сантиметров. Размах крыльев: до 40 сантиметров. Масса: 100-140 грамм. Продолжительность жизни: 7-10 лет. Рекорд – 21 год. В неволе живут мало.',
      image: 'https://live.staticflickr.com/65535/49954728861_078fb4d9e4_z.jpg"',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/Apus_apus_Poland_Jarek_Matusiak_20120703-006.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Зарянка',
      species: 'Erithacus rubecula',
      description:
        'Зарянку часто называют малиновкой, это птица, размерами даже меньше воробья. По сложению тела малиновка похожа на соловья, только хвост прямой, а не округлый. Длина тела составляет 13-16 см, вес – до 20 граммов.',
      image: 'https://live.staticflickr.com/65535/48880529952_a61d519f50_n.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC568686-JAREK-MATUSIAK-669%20rudzik%20ed%20%283%29.mp3',
    },
    {
      id: 2,
      name: 'Лесной жаворонок',
      species: 'Lullula arborea',
      description:
        'Голос — звонкая трель «тюю-люлю» или «люлюлю», часто поёт в воздухе, летая кругами. Название «юла» происходит от его песни «юли-юли-юли» или «юль-юль-юль». Питается насекомыми и семенами. Гнездится на земле, в ямке под полынью или злаками. В кладке 4—5 белых или розовато-бурых яиц с бурыми пятнами.',
      image: 'https://live.staticflickr.com/584/32977583250_e0c7cef71d_z.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/VXZDHTKCBO/XC570467-WoodlarkTip16.06.20.2.mp3',
    },
    {
      id: 3,
      name: 'Певчий дрозд',
      species: 'Turdus philomelos',
      description:
        'Небольшая певчая птица из семейства дроздовых, обитающая в Европе, Малой Азии и Сибири. Певчий дрозд заселяет различные типы лесов, и одинаково многочислен и в лиственных лесах, и в тайге. Питается беспозвоночными. Птенцов певчие дрозды выкармливают различными насекомыми и мелкими червями. Осенью едят различные ягоды и фрукты.',
      image: 'https://live.staticflickr.com/65535/50112133552_827d32259e_z.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/VCROLXMVLX/XC235843-turdus_philomelos_chlebowo_wielkopolskie_11.04.2015_0645.mp3',
    },
    {
      id: 4,
      name: 'Зяблик',
      species: 'Fringilla coelebs',
      description:
        'Певчая птица семейства вьюрковых. Размер — 14—18 см. Ярко выражен половой диморфизм. Преимущественно зерноядная птица; птенцов выкармливает насекомыми. В дикой природе зяблик живёт в среднем 2 года, в неволе продолжительность жизни составляет до 12 лет.',
      image: 'https://live.staticflickr.com/838/29305348018_8cfa5e9d1a_z.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/TJSRKPHQNP/XC579324-0705_100012.mp3',
    },
    {
      id: 5,
      name: 'Обыкновенный соловей',
      species: 'Luscinia luscinia',
      description:
        'Один из самых известных и прославленных певцов среди птиц. Песня — набор повторяющихся свистов и щелканий. Каждый элемент песни (колено), число которых может достигать 12, повторяется несколько раз. Крик — низкое «фиуить-трр».',
      image: 'https://live.staticflickr.com/65535/47927199668_c9565aaba4_z.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC494900-Luscinia%20luscinia%20180508_005%2Cдача%2C%20лов%2C19-10%2C%20full%20song%2CAB-1.MP3',
    },
    {
      id: 6,
      name: 'Вертлявая камышевка',
      species: 'Acrocephalus paludicola',
      description:
        'Ареал вертлявой камышовки достаточно обширен, несмотря на её общую немногочисленность. Самая крупная популяция в мире обитает на болотном массиве Званец в Беларуси. Зимует в западной Африке, по обе стороны Ла-Манша и в Бискайском заливе. ',
      image: 'https://live.staticflickr.com/4854/46129619201_18ff08f578_z.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/BPSDQEOJWG/XC327982-Vattensångare-sång-Dluga%20Luka%2C%20Biebrza%20NP-%282016-05-09%2020.16%29-LS141689.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Зяблик',
      species: 'Fringilla coelebs',
      description:
        'В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.',
      image: 'https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3',
    },
    {
      id: 2,
      name: 'Клёст',
      species: 'Loxia curvirostra',
      description:
        'Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.',
      image: 'https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3',
    },
    {
      id: 3,
      name: 'Горлица',
      species: 'Streptopelia turtur',
      description:
        'Горлица обитает в смешанных и широколиственных лесах, а также в городских парках и поселках. Птицы часто выбирают места жизни рядом с человеком и легко привыкают к людям. Благодаря мелодичному приятному пению горлиц часто разводят в домашних условиях.',
      image: 'https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3',
    },
    {
      id: 4,
      name: 'Дятел',
      species: 'Dendrocopos major',
      description:
        'Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.',
      image: 'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3',
    },
    {
      id: 5,
      name: 'Удод',
      species: 'Upupa epops',
      description:
        'Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами. Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать места жительства рядом с человеком: пастбища, виноградники, фруктовые сады.',
      image: 'https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3',
    },
    {
      id: 6,
      name: 'Стриж',
      species: 'Apus apus',
      description:
        'Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.',
      image: 'https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Большой тукан',
      species: 'Ramphastos toco',
      description:
        'Крупнейший и один из самых известных видов в семействе туканов. Они обитают в большой части Центральной и Южной Америки. Длинный клюв используется большими туканами для добычи пищи в труднодоступных местах, а также для очищения кожуры фруктов и отпугивания хищников. Обычно обитают парами или небольшими группами.',
      image: 'https://live.staticflickr.com/4640/24382801737_63b7017d3d_z.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MRGDYNJGUJ/XC573441-Ram_toc.mp3',
    },
    {
      id: 2,
      name: 'Малый гиацинтовый ара',
      species: 'Anodorhynchus leari',
      description:
        'Ареал ограничен небольшим и труднодоступным участком на северо-востоке штата Баия (Бразилия). Населяет открытые и полуоткрытые лесистости, близ песчаников до высоты 500—800 м над уровнем моря. Крайне редок, находится под угрозой полного исчезновения. К концу XX века в дикой природе насчитывалось 70-200 особей, разделённые на 2 популяции.',
      image: 'https://live.staticflickr.com/1649/26419065286_a3e682a4af_z.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/YWWWUBVAJF/XC556130-Anodorhynchus%20leari%20-%20Caio%20Brito%20%28Canudos-BA%29_BRITO%2C3598.mp3',
    },
    {
      id: 3,
      name: 'Гоацин',
      species: 'Opisthocomus hoazin',
      description:
        'Тропическая птица, единственный вид в одноимённом роде. Распространён в экваториальной Южной Америке (от Колумбии до Боливии). Держится в затопленных приречных зарослях, по берегам рек. Почти не летает, бо́льшую часть времени держится на деревьях и редко спускается на землю.',
      image: 'https://live.staticflickr.com/4616/26636410338_c788f17eb1_z.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/JPBSNBUUEF/XC472254-Hoatzin%2C%20calls%2C%20190508-021.mp3',
    },
    {
      id: 4,
      name: 'Квезаль',
      species: 'Pharomachrus mocinno',
      description:
        'Священная птица у древних майя и ацтеков. Они считали его богом воздуха и его длинные зелёные надхвостовые перья использовали в религиозных церемониях. Однако птиц для этого никогда не убивали, а ловили живьём, вырывали у них перья и отпускали. В современной Гватемале квезаль — государственный символ страны, национальный символ свободы. ',
      image: 'https://live.staticflickr.com/65535/48090760662_157b73313a_z.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC271507-LS_57425%20Resplendant%20Quetzal%20song%20A.mp3',
    },
    {
      id: 5,
      name: 'Красный кардинал',
      species: 'Cardinalis cardinalis',
      description:
        'Песня самца - набор очень красивых звонких трелей, отдалённо напоминающих песню соловья, за что его часто называют виргинским соловьём. Самки тоже поют, но их песня тише и не такая разнообразная. При испуге птицы издают резкий чирикающий крик, между собой переговариваются тихим чириканьем.',
      image: 'https://live.staticflickr.com/621/31652456166_50f842cb91_z.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/WFZJIOWFQY/XC577953-20200721_0525.mp3',
    },
    {
      id: 6,
      name: 'Многоцветный лорикет',
      species: 'Trichoglossus haematodus',
      description:
        'Птица семейства попугаевых. Из-за красивой расцветки их держат в неволе чаще, чем других попугаев. В 1868 году эти попугаи были завезены в зоопарки Европы и любителям природы. Продолжительность жизни до 20 лет.',
      image: 'https://live.staticflickr.com/65535/49710629061_a0d4201165_n.jpg',
      audio: 'https://dibird.com/media/xeno/215305.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Орёл',
      species: 'Aquila nipalensis',
      description:
        'В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров',
      image: 'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3',
    },
    {
      id: 2,
      name: 'Коршун',
      species: 'Milvus migrans',
      description:
        'Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.',
      image: 'https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3',
    },
    {
      id: 3,
      name: 'Лунь',
      species: 'Circus cyaneus',
      description:
        'Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение «седой, как лунь».',
      image: 'https://live.staticflickr.com/4703/38657345350_2a5a9a88db_b.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3',
    },
    {
      id: 4,
      name: 'Сокол',
      species: 'Falco peregrinus',
      description:
        'Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.',
      image: 'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3',
    },
    {
      id: 5,
      name: 'Ястреб',
      species: 'Accipiter gentilis',
      description:
        'Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.',
      image: 'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3',
    },
    {
      id: 6,
      name: 'Филин',
      species: 'Bubo bubo',
      description:
        'Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.',
      image: 'https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Альбатрос',
      species: 'Diomedea exulans',
      description:
        'Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния',
      image: 'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3',
    },
    {
      id: 2,
      name: 'Олуша',
      species: 'Sula nebouxii',
      description:
        'Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок',
      image: 'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3',
    },
    {
      id: 3,
      name: 'Буревестник',
      species: 'Puffinus griseus',
      description:
        'Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.',
      image: 'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3',
    },
    {
      id: 4,
      name: 'Пеликан',
      species: 'Pelecanus',
      description:
        'Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.',
      image: 'https://live.staticflickr.com/7794/28394655875_0a5c8d0e60_k.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3',
    },
    {
      id: 5,
      name: 'Пингвин',
      species: 'Aptenodytes forsteri',
      description:
        'Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.',
      image: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3',
    },
    {
      id: 6,
      name: 'Чайка',
      species: 'Larus argentatus',
      description:
        'Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.',
      image: 'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3',
    },
  ],
];

export { birdGroups, birdsData };
