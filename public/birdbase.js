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
      name: 'Пёстрый дятел',
      species: 'Dendrocopos major',
      description:
        'Дятел играет важную роль в экологии леса, оставляя выдолбленные им дупла для других гнездящихся в них мелких птиц, таких как синицы и мухоловки. Кроме того, он в большом количестве поедает лесных вредителей — тлю, гусениц бабочек и питающихся древесиной насекомых — усачей, златок, короедов, муравьёв и многих других.',
      image: 'https://live.staticflickr.com/4551/38027409324_2b94e59df3_z.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/PNYKOPBQBQ/XC511652-DENMAJ291119-T006_INTERACT%20%282%29.mp3',
    },
    {
      id: 2,
      name: 'Сойка',
      species: 'Garrulus glandarius',
      description:
        'Сойка размером с галку. Имеет яркое, рыхлое оперение, заметный широкий хохол на голове и довольно длинный хвост. Крик — резкое «дчээ-дчээ» и дребезжащее «пиррь». Песня — набор резких звуков и подражаний другим видам птиц. Кроме того, сойка легко обучается подражать любым звукам, от человеческого голоса до стука топора.',
      image: 'https://live.staticflickr.com/65535/49096393327_44ca4b2126_z.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/OXKHFMOYKQ/XC142606-Vg_Cling_130712-01_xc.mp3',
    },
    {
      id: 3,
      name: 'Крапивник',
      species: 'Troglodytes troglodytes',
      description:
        'Внешне похож на мягкий пушистый шарик с поднятым торчком коротким хвостиком. Птица очень подвижная, с необычно громким голосом — самцы помечают свою обширную территорию, сидя на каком-нибудь возвышении и распевая свою своеобразную, торопливую песню, состоящую из очень звучных быстрых трелей.',
      image: 'https://live.staticflickr.com/65535/49346952281_8cc248aebb_z.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/VCROLXMVLX/XC179003-troglodytes_trogodytes_zielonka_wielkopolskie_21_05_2014_0903.mp3',
    },
    {
      id: 4,
      name: 'Свиристель',
      species: 'Bombycilla garrulus',
      description:
        'Распространён в зоне таёжных лесов Северного полушария. Обитает в разреженных хвойных и смешанных лесах, на зарастающих горах и вырубках. Каждый год свиристель ищет себе нового партнёра. Ухаживание за самкой включает в себя её кормление ягодами.',
      image: 'https://live.staticflickr.com/65535/49599943546_82787b9e33_z.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC123377-Bombycilla_garrulus_Poland_Jarek_Matusiak_201300301-040.mp3',
    },
    {
      id: 5,
      name: 'Кукушка',
      species: 'Cuculus canorus',
      description:
        'Большую часть года обыкновенная кукушка ведёт скрытный, молчаливый образ жизни. Лишь весной и в первой половине лета самки и особенно самцы становятся заметными и шумными, привлекая к себе внимание. Наиболее известна брачная песня самца — громкий размеренный крик «ку-ку…ку-ку…», многократно повторяемый с усилением на первом слоге. В ясную безветренную погоду её можно услышать на расстоянии до двух километров.',
      image: 'https://live.staticflickr.com/65535/49814033896_5bf6f1bb3f_n.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/OQZFKFTAKD/XC580937-KUCKUCKE%2C%20Duett%20%2009.05.2020%20%20Kiesgr.%20Th.%20Ost%20%205_53%20VOC_200509-8298%20Ausschn.%20Dawn-Konz..mp3',
    },
    {
      id: 6,
      name: 'Клёст-сосновик',
      species: 'Loxia pytyopsittacus',
      description:
        'Довольно крупный вид клестов: длина его тела составляет от 16 до 18 см. Клёст-сосновик живёт в хвойных лесах с преобладанием сосен и питается семенами сосны и других хвойных. Клёст-сосновик гнездится в Скандинавии и на северо-востоке Европы.',
      image: 'https://live.staticflickr.com/4668/38652553730_c4540cb4bb_n.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/RDRHSLUBZP/XC419338-180304_07_Loxia_pytyopsittacus.mp3',
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
      name: 'Беркут',
      species: 'Aquila chrysaetos',
      description:
        'У беркута, как и у других орлов, а также ястребов и соколов, чрезвычайно острое зрение, но только в светлое время суток. Так, например, зайца этот орёл видит на расстоянии до двух километров.[13] Ряд адаптаций, выразившихся в способности быстро определить величину объекта и расстояние до него, развились в результате эволюции.',
      image: 'https://live.staticflickr.com/65535/48931138933_4df72df70e_z.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC572763-Kungsörn_05.mp3',
    },
    {
      id: 2,
      name: 'Скопа',
      species: 'Pandion haliaetus',
      description:
        'В отличие от других хищных птиц, рацион скопы почти полностью (более 99 %) состоит из рыбы. В выборе конкретных видов птицы неразборчивы и питаются всем, что в состоянии поймать у поверхности воды. Хотя подавляющее большинство рациона вида составляет рыба, иногда они могут охотиться на других птиц, змей, ондатр, полёвок, белок, саламандр и даже маленьких аллигаторов.',
      image: 'https://live.staticflickr.com/5529/31323487292_e02b389426_z.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC272314-Pandion%20haliaetus%20150624_001%2C%20Хмёлёвка%20гн%20Скопы%20с%203%20мя%20пт%2010-00%20-%2016-00%2C%20AAAA%21%2B%2B%2B.MP3',
    },
    {
      id: 3,
      name: 'Сапсан',
      species: 'Falco peregrinus',
      description:
        'Это самая быстрая птица в мире. По оценкам специалистов, в стремительном пикирующем полёте она способна развивать скорость свыше 322 км/ч, или 90 м/с. Однако в горизонтальном полете уступает в скорости стрижу. Удар когтями задних пальцев бывает настолько сильным, что даже у достаточно крупной дичи может отлететь голова.',
      image: 'https://live.staticflickr.com/65535/49583260681_f032a9121d_z.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC405710-180312_0191_FAP-F-żebranie.mp3',
    },
    {
      id: 4,
      name: 'Чеглок',
      species: 'Falco subbuteo',
      description:
        'Собственного гнезда чеглок не строит, но занимает старые гнёзда других хищных птиц — чаще чёрной и серой вороны, сороки или ястреба-перепелятника. Гнездо всегда расположено в верхней части дерева с хорошим обзором на высоте 8—37 м (в среднем 15 м) от земли.',
      image: 'https://live.staticflickr.com/65535/49563041808_4112f37659_z.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/WIPMNWUHXI/XC393712-Bv_DurbeLat_170811-0920.mp3',
    },
    {
      id: 5,
      name: 'Стервятник',
      species: 'Neophron percnopterus',
      description:
        'Стервятники — весьма социальные животные и живут в небольших группах. В саваннах они часто встречаются лишь парами. Отложенные два яйца с несколькими коричневыми пятнами насиживаются обоими родителями в течение 42 дней. Спустя 80 дней после рождения молодые птенцы начинают летать.',
      image: 'https://live.staticflickr.com/65535/40939797813_f719a598a2_z.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/ILUHRFXDNU/percnoptere%20dEgypte%20chickcall.mp3',
    },
    {
      id: 6,
      name: 'Змееяд',
      species: 'Circaetus gallicus',
      description:
        'Очень редкий исчезающий вид птиц, занесён в Красную книгу России и Красную книгу Беларуси. Один из самых пугливых и недоверчивых по отношению к человеку пернатых хищников. Змееяд ест почти только змей, и если ему попадётся большая змея он просто съедает внутренности, разрывая змею по кускам.',
      image: 'https://live.staticflickr.com/4459/26153202299_c854f212f5_z.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC369005-circaete%20parade%20vol%20%2B.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Гагарка',
      species: 'Alca torda',
      description:
        'Гага́рка — вид морских птиц из семейства чистиковых (Alcidae). После истребления нелетающей бескрылой гагарки в XIX веке этот вид остался единственным в роде гагарок. Пищу гагарки добывают под водой. Она состоит главным образом из сельди и анчоусов, а также из раков и морских червей.',
      image: 'https://live.staticflickr.com/65535/50139859381_4babe191ae_z.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC487887-2018-07-19%20Reykholar%20-%20Brajanslaekur%20-%20Latrabajarg%20180719%20Pingouin%20torda%20%285%29.mp3',
    },
    {
      id: 2,
      name: 'Хохлатый баклан',
      species: 'Phalacrocorax aristotelis',
      description:
        'Исключительно морская птица. Осторожна, хорошо плавает и ныряет. Летает довольно тяжело и долго в воздухе не держится. Взлетает с трудом, обычно со скалы или с уступа. Взлетая с воды набирает разбег. Появляется на суше только в период гнездования. Остальное время проводит в море недалеко от берегов.',
      image: 'https://live.staticflickr.com/4219/34969462966_ef9ccf03cf_w.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MCFGTDXKHO/XC495805-190823_05KS.mp3',
    },
    {
      id: 3,
      name: 'Клуша',
      species: 'Larus fuscus',
      description:
        'Гнездится парами либо небольшими колониями, включающими в себя до нескольких десятков пар. Гнездо располагается на земле, обычно на приморском лугу среди травы, реже в дюнах, на высоком скалистом берегу, в вересковой пустоши. В случае, когда в колонии не хватает места, может устроить гнездо на крыше здания. В качестве строительного материала используется мох, прошлогодняя трава, щепочки, перья и т. п.',
      image: 'https://live.staticflickr.com/7762/28695667374_6339ec003b_c.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC484474-2018-07-26%20Heradsvotn%20-%20Kalbaldur%20180726%20Goeland%20brun%20divers%20cris%20de%20vol%20et%20ricannement.mp3',
    },
    {
      id: 4,
      name: 'Морской зуёк',
      species: 'Charadrius alexandrinus',
      description:
        'Небольшая птица размером с воробья, обитающая на открытых и низменных побережьях солоноватых и солёных водоёмов. Перелётная птица. Гнездо зуйка выглядит как небольшое углубление с камешками или обломками раковин. Самка откладывает 3 бледно-оливковых или глинисто-желтоватых с тёмными крапинками яйца.',
      image: 'https://live.staticflickr.com/65535/48264344371_0e48a3bfa3_n.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/KDNLNVNAOM/XC464633-Kentish%20Plover%202017%2004%2006%20South%20Korea%2C%20Buan%2C%20%28Gosapo%20Bay%2C%20Daehang-Gil%29%20-%20calls%201830.mp3',
    },
    {
      id: 5,
      name: 'Тупик',
      species: 'Fratercula arctica',
      description:
        'Обитают на побережьях Атлантического и Северного Ледовитого океанов. Гнездятся в норах на птичьих базарах. Питаются рыбой, в основном песчанками. Русское название «тупик» происходит от слова «тупой» и связано с массивной, округлой формой клюва птицы',
      image: 'https://live.staticflickr.com/7875/39745392913_45cb99950b_z.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC432782-2018-08-04%20Borgafjordur%20Macareux%20Moine%20%2B%2B%2B%2B%2B.mp3',
    },
    {
      id: 6,
      name: 'Розовый пеликан',
      species: 'Pelecanus onocrotalus',
      description:
        'Питается розовый пеликан, как и все пеликаны, преимущественно рыбой. В Европе он предпочитает карпов, в Африке — цихлид. Крупная рыба составляет до 90 % его корма; остальные 10 % — мелкая рыба, а в Африке и яйца и птенцы капского баклана (Phalacrocorax capensis). Дневная потребность в еде — 900—1200 г (или 2—4 крупные рыбы).',
      image: 'https://live.staticflickr.com/65535/49830258628_bea2915c8a_n.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331139-call2.mp3',
    },
  ],
];

export { birdGroups, birdsData };
