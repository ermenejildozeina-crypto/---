export type BreedFilter =
  | 'all'
  | 'akhal-teke'
  | 'thoroughbred'
  | 'new-kyrgyz'
  | 'arabian'
  | 'hanoverian'
  | 'orlov'
  | 'don'
  | 'friesian'
  | 'karabair';

export type DisciplineFilter = 'all' | 'racing' | 'dressage' | 'breeding';

export interface PedigreeNode {
  name: string;
  origin: string;
}

export interface HorseRecord {
  id: string;
  name: string;
  latinName: string;
  breed: string;
  breedCategory: Exclude<BreedFilter, 'all'>;
  gender: 'Жеребец' | 'Кобыла';
  birthYear: number;
  coat: string;
  heightCm: number;
  chestCm: number;
  cannonCm: number;
  line: string;
  registryId: string;
  microchipId: string;
  priceUsd: number;
  priceKgs: number;
  discipline: string;
  disciplineCategory: Exclude<DisciplineFilter, 'all'>;
  availability: string;
  vetSummary: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  pedigree: {
    sire: PedigreeNode;
    dam: PedigreeNode;
    paternalGrandsire: PedigreeNode;
    paternalGranddam: PedigreeNode;
    maternalGrandsire: PedigreeNode;
    maternalGranddam: PedigreeNode;
  };
}

export const HERO_IMAGE = {
  url: '/src/assets/images/hero_alatoo_stallion_1795715552781.jpg',
  alt: 'Чистокровный гнедой жеребец на высокогорном пастбище в Джети-Огузском районе, с. Кичи-Джаргылчак',
};

export const ESTATE_IMAGE = {
  url: '/src/assets/images/estate_issyk_kul_lively_1795719947218.jpg',
  alt: 'Племенные лошади на утренних зелёных пастбищах конного комплекса «Ала-Тоо Асыл Тукум» на берегу Иссык-Куля в селе Кичи-Джаргылчак',
};

export const KEY_METRICS = [
  {
    value: '42',
    label: 'Племенных голов',
    detail: 'В основном табуне в с. Кичи-Джаргылчак',
  },
  {
    value: '1 650 м',
    label: 'Высота пастбищ',
    detail: 'Джети-Огузский район, Иссык-Куль',
  },
  {
    value: '100%',
    label: 'ДНК-верификация',
    detail: 'Паспорта ВНИИК, ГПК и FEI',
  },
  {
    value: '14 лет',
    label: 'Опыт селекции',
    detail: 'Экспорт в Казахстан, РФ и ОАЭ',
  },
];

export const HORSES: HorseRecord[] = [
  {
    id: 'ak-shumkar',
    name: 'Ак-Шумкар',
    latinName: 'Ak-Shumkar',
    breed: 'Ахалтекинская',
    breedCategory: 'akhal-teke',
    gender: 'Жеребец',
    birthYear: 2021,
    coat: 'Золотисто-буланая',
    heightCm: 162,
    chestCm: 184,
    cannonCm: 20.5,
    line: 'Линия Каплан',
    registryId: 'ВНИИК № AT-0849',
    microchipId: '417000902418301',
    priceUsd: 52000,
    priceKgs: 4520000,
    discipline: 'Выездка и племенное разведение',
    disciplineCategory: 'dressage',
    availability: 'Доступен к просмотру',
    vetSummary:
      'Полный рентген-чек суставов (ноябрь 2026), без ограничений к нагрузкам и воспроизводству.',
    description:
      'Эталонный представитель линии Каплан с выраженным металлическим отливом рубашки, сухими связками и свободным продуктивным шагом. Подготовлен по программе молодых лошадей.',
    imageUrl: '/src/assets/images/horse_akhal_gold_1795715553190.jpg',
    imageAlt: 'Золотисто-буланый ахалтекинский жеребец Ак-Шумкар в профильной стойке на каменном дворе',
    pedigree: {
      sire: { name: 'Гайрат-Шах', origin: 'Линия Каплан · 2014' },
      dam: { name: 'Мерджен-Ай', origin: 'Линия Гелишикли · 2015' },
      paternalGrandsire: { name: 'Кара-Куш', origin: 'Чемпион породы · ВНИИК' },
      paternalGranddam: { name: 'Алтын-Гюль', origin: 'Ашхабадская линия' },
      maternalGrandsire: { name: 'Сейит-Хан', origin: 'Племенной класс Элита' },
      maternalGranddam: { name: 'Дана-Биби', origin: 'Каракумский завод' },
    },
  },
  {
    id: 'khan-tengri',
    name: 'Хан-Тенгри',
    latinName: 'Khan-Tengri',
    breed: 'Английская верховая',
    breedCategory: 'thoroughbred',
    gender: 'Жеребец',
    birthYear: 2022,
    coat: 'Тёмно-гнедая',
    heightCm: 167,
    chestCm: 191,
    cannonCm: 21.0,
    line: 'Линия Northern Dancer',
    registryId: 'Jockey Club № TB-4118',
    microchipId: '417000902418544',
    priceUsd: 68000,
    priceKgs: 5910000,
    discipline: 'Скачки на длинные дистанции',
    disciplineCategory: 'racing',
    availability: 'Готов к сезону 2027',
    vetSummary:
      'Эндоскопия верхних дыхательных путей и рентген-протокол без замечаний. Вакцинация FEI.',
    description:
      'Рождён в с. Кичи-Джаргылчак от привозной кобылы ирландской селекции. Обладает мощным плечом, глубокой грудной клеткой и адаптированной к среднегорью дыхательной выносливостью.',
    imageUrl: '/src/assets/images/horse_thoroughbred_bay_1795715554394.jpg',
    imageAlt:
      'Тёмно-гнедой чистокровный английский жеребец Хан-Тенгри в паддоке на фоне утреннего тумана в горах',
    pedigree: {
      sire: { name: 'Royal Ascot Pride', origin: 'Великобритания · 2015' },
      dam: { name: 'Lady Emerald', origin: 'Ирландия · 2016' },
      paternalGrandsire: { name: 'Galileo Star', origin: 'Линия Sadler’s Wells' },
      paternalGranddam: { name: 'Silver Sovereign', origin: 'Ньюмаркет' },
      maternalGrandsire: { name: 'Danehill Crest', origin: 'Линия Danzig' },
      maternalGranddam: { name: 'Kildare Rose', origin: 'Дублинская линия' },
    },
  },
  {
    id: 'kara-baiyr',
    name: 'Кара-Байыр',
    latinName: 'Kara-Baiyr',
    breed: 'Новокиргизская',
    breedCategory: 'new-kyrgyz',
    gender: 'Жеребец',
    birthYear: 2021,
    coat: 'Вороная',
    heightCm: 159,
    chestCm: 188,
    cannonCm: 20.5,
    line: 'Линия Ала-Тоо Алтын',
    registryId: 'ГПК КР № NK-1904',
    microchipId: '417000902418712',
    priceUsd: 34000,
    priceKgs: 2950000,
    discipline: 'Байге и дистанционные пробеги',
    disciplineCategory: 'racing',
    availability: 'Доступен к просмотру',
    vetSummary:
      'Высокий показатель восстановления пульса после галопа в условиях 1 650 м. Чистые сухожилия.',
    description:
      'Вороной жеребец улучшенной новокиргизской селекции с прилитием донской и арабской крови. Исключительный баланс, крепкий копытный рог и устойчивая психика под седлом.',
    imageUrl: '/src/assets/images/horse_kyrgyz_black_1795715554501.jpg',
    imageAlt:
      'Вороной новокиргизский жеребец Кара-Байыр у деревянной изгороди на фоне зелёных склонов Тянь-Шаня',
    pedigree: {
      sire: { name: 'Алтын-Тай', origin: 'Иссык-Куль · 2013' },
      dam: { name: 'Бермет-Кыз', origin: 'Чуйская долина · 2015' },
      paternalGrandsire: { name: 'Тулпар-Бек', origin: 'Победитель Аламан Байге' },
      paternalGranddam: { name: 'Сайкал', origin: 'Нарынский завод' },
      maternalGrandsire: { name: 'Буркут-Араб', origin: 'Чистокровный арабский' },
      maternalGranddam: { name: 'Чолпон', origin: 'ГПК Кыргызстана' },
    },
  },
  {
    id: 'ai-peri',
    name: 'Ай-Пери',
    latinName: 'Ai-Peri',
    breed: 'Ахалтекинская',
    breedCategory: 'akhal-teke',
    gender: 'Кобыла',
    birthYear: 2020,
    coat: 'Серая в яблоках',
    heightCm: 160,
    chestCm: 185,
    cannonCm: 19.5,
    line: 'Линия Гундогар',
    registryId: 'ВНИИК № AT-0621',
    microchipId: '417000902418908',
    priceUsd: 44000,
    priceKgs: 3820000,
    discipline: 'Племенное воспроизводство и конкур',
    disciplineCategory: 'breeding',
    availability: 'Подтверждена к вывозу',
    vetSummary:
      'УЗИ-репродуктивное заключение категории А, проверена по качеству потомства (жеребчик 2025 г.р.).',
    description:
      'Породная серая матка с выразительной головой, лёгким прыжком и безупречной материнской линией. Рекомендована для создания собственного племенного ядра.',
    imageUrl: '/src/assets/images/horse_gray_mare_1795715554837.jpg',
    imageAlt: 'Серая в яблоках племенная кобыла Ай-Пери на каменной площадке перед конюшней',
    pedigree: {
      sire: { name: 'Доркуш', origin: 'Линия Гундогар · 2012' },
      dam: { name: 'Ак-Марал', origin: 'Линия Ель · 2014' },
      paternalGrandsire: { name: 'Арслан', origin: 'Элита-класс' },
      paternalGranddam: { name: 'Гюльджан', origin: 'Спорт-выездка' },
      maternalGrandsire: { name: 'Ярты-Гулак', origin: 'Племенной производитель' },
      maternalGranddam: { name: 'Кызыл-Ай', origin: 'Иссык-Кульский завод' },
    },
  },
  {
    id: 'amir-shah',
    name: 'Амир-Шах',
    latinName: 'Amir-Shah',
    breed: 'Арабская чистокровная',
    breedCategory: 'arabian',
    gender: 'Жеребец',
    birthYear: 2021,
    coat: 'Рыжая',
    heightCm: 155,
    chestCm: 180,
    cannonCm: 19.0,
    line: 'Линия Кухайлан-Сиглави',
    registryId: 'WAHO / ВНИИК № AR-2214',
    microchipId: '417000902419112',
    priceUsd: 49000,
    priceKgs: 4260000,
    discipline: 'Дистанционные пробеги 120 км и шоу',
    disciplineCategory: 'racing',
    availability: 'Доступен к просмотру',
    vetSummary:
      'Кардиограмма и метаболический профиль без отклонений, допущен к международным пробегам FEI CEI 2*.',
    description:
      'Породный чистокровный арабский жеребец с характерным щучьим профилем, высоким поставом хвоста и исключительной сердечной выносливостью для горных дистанций.',
    imageUrl: '/src/assets/images/horse_arabian_chestnut_1795716668932.jpg',
    imageAlt: 'Рыжий чистокровный арабский жеребец Амир-Шах в профильной стойке на каменном дворе',
    pedigree: {
      sire: { name: 'Nadir Al-Sabah', origin: 'ОАЭ / WAHO · 2014' },
      dam: { name: 'Зухра-Сиглави', origin: 'Терский конный завод · 2015' },
      paternalGrandsire: { name: 'Marwan Al Shaqab', origin: 'Чемпион мира · Катар' },
      paternalGranddam: { name: 'Bint Ghazala', origin: 'Абу-Даби' },
      maternalGrandsire: { name: 'Победитель-II', origin: 'Линия Кохейлан' },
      maternalGranddam: { name: 'Нефертити', origin: 'Терская селекция' },
    },
  },
  {
    id: 'kronprinz',
    name: 'Кронпринц',
    latinName: 'Kronprinz',
    breed: 'Ганноверская',
    breedCategory: 'hanoverian',
    gender: 'Жеребец',
    birthYear: 2020,
    coat: 'Тёмно-гнедая',
    heightCm: 171,
    chestCm: 198,
    cannonCm: 22.0,
    line: 'Линия Donnerhall / Sandro Hit',
    registryId: 'Hannoveraner № DE-7730',
    microchipId: '417000902419305',
    priceUsd: 78000,
    priceKgs: 6780000,
    discipline: 'Конкур 140 см и Большой приз',
    disciplineCategory: 'dressage',
    availability: 'В тренинге на Иссык-Куле',
    vetSummary:
      'Чистые рентгенограммы спины, скакательных и челночных костей (октябрь 2026). Полный паспорт FEI.',
    description:
      'Крупный полукровный производитель немецкого происхождения с мощным толчком зада и ритмичными аллюрами. Выступает в маршрутах до 135–140 см и готов к племенному использованию.',
    imageUrl: '/src/assets/images/horse_hanoverian_bay_1795716669612.jpg',
    imageAlt: 'Тёмно-гнедой ганноверский жеребец Кронпринц у деревянной конюшни',
    pedigree: {
      sire: { name: 'Don Frederic', origin: 'Германия · 2013' },
      dam: { name: 'St.Pr.St. Bellissima', origin: 'Ганноверский союз · 2014' },
      paternalGrandsire: { name: 'Don Schufro', origin: 'Линия Donnerhall' },
      paternalGranddam: { name: 'Cleopatra', origin: 'Ольденбург' },
      maternalGrandsire: { name: 'Sandro Hit', origin: 'Элитный производитель' },
      maternalGranddam: { name: 'Weltmeyer Lady', origin: 'Верден' },
    },
  },
  {
    id: 'buran-orlov',
    name: 'Буран-Орлов',
    latinName: 'Buran-Orlov',
    breed: 'Орловский рысак',
    breedCategory: 'orlov',
    gender: 'Жеребец',
    birthYear: 2021,
    coat: 'Светло-серая в яблоках',
    heightCm: 165,
    chestCm: 192,
    cannonCm: 21.5,
    line: 'Линия Пиона',
    registryId: 'ВНИИК № OR-3309',
    microchipId: '417000902419488',
    priceUsd: 38000,
    priceKgs: 3300000,
    discipline: 'Рысистые бега и парадная езда',
    disciplineCategory: 'racing',
    availability: 'Доступен к просмотру',
    vetSummary:
      'Сухие чистые суставы, проверен в качалке на 1 600 м и под верховым седлом.',
    description:
      'Нарядный серый орловский рысак классического типа линии Пиона. Отличается устойчивой высокой рысью, лебединым выходом шеи и добронравным характером.',
    imageUrl: '/src/assets/images/horse_orlov_trotter_1795716670432.jpg',
    imageAlt: 'Светло-серый в яблоках орловский рысак Буран-Орлов на каменной дорожке конюшни',
    pedigree: {
      sire: { name: 'Колорит-Пион', origin: 'Хреновской завод · 2013' },
      dam: { name: 'Метелица', origin: 'Московский конный завод · 2015' },
      paternalGrandsire: { name: 'Попрёк', origin: 'Рекордист ипподрома' },
      paternalGranddam: { name: 'Купава', origin: 'Линия Барчука' },
      maternalGrandsire: { name: 'Кипр', origin: 'Линия Отбоя' },
      maternalGranddam: { name: 'Молния', origin: 'Племенное ядро' },
    },
  },
  {
    id: 'zlatoyar',
    name: 'Златояр',
    latinName: 'Zlatoyar',
    breed: 'Донская',
    breedCategory: 'don',
    gender: 'Жеребец',
    birthYear: 2022,
    coat: 'Золотисто-рыжая',
    heightCm: 164,
    chestCm: 190,
    cannonCm: 21.0,
    line: 'Линия Бруча',
    registryId: 'ВНИИК № DN-1182',
    microchipId: '417000902419601',
    priceUsd: 36000,
    priceKgs: 3130000,
    discipline: 'Троеборье, кок-бору и пробеги',
    disciplineCategory: 'racing',
    availability: 'Доступен к просмотру',
    vetSummary:
      'Высокая минеральная плотность костяка, невосприимчив к перепадам высокогорных температур.',
    description:
      'Золотисто-рыжий донской жеребец с характерным бронзовым блеском. Сочетает восточную породность, широкую спину и выносливость степного табунного выращивания.',
    imageUrl: '/src/assets/images/horse_don_golden_1795716670060.jpg',
    imageAlt: 'Золотисто-рыжий донской жеребец Златояр в горной леваде на фоне снежных вершин',
    pedigree: {
      sire: { name: 'Бамбук-Дон', origin: 'Будённовский завод · 2014' },
      dam: { name: 'Забава-Степь', origin: 'Ростовская область · 2016' },
      paternalGrandsire: { name: 'Бруч', origin: 'Элита-класс' },
      paternalGranddam: { name: 'Слава', origin: 'Линия Барвинка' },
      maternalGrandsire: { name: 'Габардин', origin: 'Линия Гульсына' },
      maternalGranddam: { name: 'Золушка', origin: 'Донской студбук' },
    },
  },
  {
    id: 'black-baron',
    name: 'Блэк-Барон',
    latinName: 'Black Baron',
    breed: 'Фризская',
    breedCategory: 'friesian',
    gender: 'Жеребец',
    birthYear: 2020,
    coat: 'Вороная',
    heightCm: 166,
    chestCm: 196,
    cannonCm: 22.5,
    line: 'Линия Jasper 366',
    registryId: 'KFPS № NL-9041',
    microchipId: '417000902419750',
    priceUsd: 64000,
    priceKgs: 5560000,
    discipline: 'Классическая выездка и шоу',
    disciplineCategory: 'dressage',
    availability: 'В наличии в с. Кичи-Джаргылчак',
    vetSummary:
      'Полный генетический тест KFPS (отрицательный по гидроцефалии и карликовости), чистые рентгены.',
    description:
      'Густогривый чистопородный фризский жеребец с выразительным каретным ходом и высоким выходом шеи. Заезжен в выездке до элементов среднего уровня, идеален для частных резиденций и шоу.',
    imageUrl: '/src/assets/images/horse_friesian_black_1795716670369.jpg',
    imageAlt: 'Вороной фризский жеребец Блэк-Барон с густой волнистой гривой у каменной конюшни',
    pedigree: {
      sire: { name: 'Tsjalle 454', origin: 'Нидерланды · KFPS Preferent' },
      dam: { name: 'Froukje fan ’e Alddyk', origin: 'Фрисландия · Ster Mare' },
      paternalGrandsire: { name: 'Mintse 384', origin: 'Линия Jasper 366' },
      paternalGranddam: { name: 'Welmoed', origin: 'Model Preferent' },
      maternalGrandsire: { name: 'Norbert 444', origin: 'Чемпион породы KFPS' },
      maternalGranddam: { name: 'Sjoukje', origin: 'KFPS Книга № 1' },
    },
  },
  {
    id: 'zarina',
    name: 'Зарина',
    latinName: 'Zarina',
    breed: 'Карабаирская',
    breedCategory: 'karabair',
    gender: 'Кобыла',
    birthYear: 2021,
    coat: 'Гнедая',
    heightCm: 157,
    chestCm: 184,
    cannonCm: 19.8,
    line: 'Линия Самарканд-Бахтиёр',
    registryId: 'ГПК ЦА № KB-0473',
    microchipId: '417000902419899',
    priceUsd: 29000,
    priceKgs: 2520000,
    discipline: 'Универсальная верховая и воспроизводство',
    disciplineCategory: 'breeding',
    availability: 'Доступна к просмотру',
    vetSummary:
      'Безупречная координация на каменистом горном грунте, проверена по репродуктивному здоровью.',
    description:
      'Карабаирская матка элитного центральноазиатского корня. Ценится за крепкую поясницу, маневренность, твёрдый копытный рог и высокую плодовитость для селекции спортивных помесей.',
    imageUrl: '/src/assets/images/horse_karabair_bay_1795716670751.jpg',
    imageAlt: 'Гнедая карабаирская кобыла Зарина на горном пастбище с хребтом Тянь-Шань на заднем плане',
    pedigree: {
      sire: { name: 'Шохрух-Бахтиёр', origin: 'Самарканд · 2014' },
      dam: { name: 'Дильбар', origin: 'Ферганская долина · 2015' },
      paternalGrandsire: { name: 'Кайрат', origin: 'Линия Учкудука' },
      paternalGranddam: { name: 'Гульчехра', origin: 'Карабаирский завод' },
      maternalGrandsire: { name: 'Таймас', origin: 'Победитель улак-купкари' },
      maternalGranddam: { name: 'Саодат', origin: 'Племенная книга ЦА' },
    },
  },
  {
    id: 'korkom-peri',
    name: 'Корком-Пери',
    latinName: 'Korkom-Peri',
    breed: 'Новокиргизская',
    breedCategory: 'new-kyrgyz',
    gender: 'Кобыла',
    birthYear: 2022,
    coat: 'Золотисто-соловая',
    heightCm: 158,
    chestCm: 185,
    cannonCm: 19.6,
    line: 'Линия Иссык-Куль Алтын',
    registryId: 'ГПК КР № NK-2148',
    microchipId: '417000902420118',
    priceUsd: 35000,
    priceKgs: 3040000,
    discipline: 'Племенное воспроизводство и дистанционные пробеги',
    disciplineCategory: 'breeding',
    availability: 'В наличии в с. Кичи-Джаргылчак',
    vetSummary:
      'УЗИ-репродуктивное заключение категории А, чистые рентгенограммы и стабильный пульс в условиях высокогорья 1 650 м.',
    description:
      'Нарядная золотисто-соловая кобыла улучшенной новокиргизской селекции с белоснежной гривой, сухими ногами и пластичным шагом. Идеальна как для собственного племенного ядра, так и для горных дистанций.',
    imageUrl: '/src/assets/images/horse_korkom_peri_1795720171762.jpg',
    imageAlt:
      'Золотисто-соловая новокиргизская кобыла Корком-Пери на зелёном пастбище на берегу Иссык-Куля',
    pedigree: {
      sire: { name: 'Ак-Булак', origin: 'Иссык-Куль · 2014' },
      dam: { name: 'Жаркын-Ай', origin: 'Джети-Огуз · 2016' },
      paternalGrandsire: { name: 'Алтын-Тай', origin: 'Элита-класс ГПК КР' },
      paternalGranddam: { name: 'Айгуль', origin: 'Нарынская линия' },
      maternalGrandsire: { name: 'Гулсары', origin: 'Рекордист пробегов' },
      maternalGranddam: { name: 'Керемет', origin: 'Иссык-Кульский завод' },
    },
  },
];
