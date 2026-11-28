import type { BreedFilter, DisciplineFilter, PedigreeNode } from './horses';

export type Language = 'ru' | 'en' | 'ky';

export const LANGUAGE_OPTIONS: { id: Language; shortLabel: string; nativeLabel: string }[] = [
  { id: 'ru', shortLabel: 'RU', nativeLabel: 'Русский' },
  { id: 'en', shortLabel: 'EN', nativeLabel: 'English' },
  { id: 'ky', shortLabel: 'KG', nativeLabel: 'Кыргызча' },
];

export interface LocalizedHorseContent {
  name: string;
  breed: string;
  gender: string;
  coat: string;
  line: string;
  registryId: string;
  discipline: string;
  availability: string;
  vetSummary: string;
  description: string;
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

export interface TranslationDictionary {
  metaTitle: string;
  nav: {
    ariaLabel: string;
    mobileAriaLabel: string;
    openMenu: string;
    closeMenu: string;
    catalog: string;
    estate: string;
    standards: string;
    contact: string;
    cta: string;
  };
  languageSelectorLabel: string;
  hero: {
    ariaLabel: string;
    kicker: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    fallbackTitle: string;
  };
  metrics: {
    value: string;
    label: string;
    detail: string;
  }[];
  catalog: {
    kicker: string;
    title: string;
    subtitle: string;
    currencyLabel: string;
    currencyGroupAria: string;
    currencyKgsLabel: string;
    kgsUnit: string;
    breedGroupAria: string;
    disciplineLabel: string;
    emptyTitle: string;
    emptyBody: string;
    resetFilters: string;
    yearSuffix: string;
    heightUnit: string;
    passportCta: string;
    cardAriaPrefix: string;
    breedTabs: { id: BreedFilter; label: string }[];
    disciplineTabs: { id: DisciplineFilter; label: string }[];
  };
  horses: Record<string, LocalizedHorseContent>;
  modal: {
    closeAria: string;
    withersHeight: string;
    chestGirth: string;
    cannonBone: string;
    isoChip: string;
    cmUnit: string;
    vetTitle: string;
    pedigreeTitle: string;
    paternalBranch: string;
    maternalBranch: string;
    sireLabel: string;
    damLabel: string;
    paternalGrandsireLabel: string;
    paternalGranddamLabel: string;
    maternalGrandsireLabel: string;
    maternalGranddamLabel: string;
    priceNote: string;
    bookCta: string;
  };
  estate: {
    kicker: string;
    title: string;
    directorLabel: string;
    directorName: string;
    fallbackTitle: string;
    imageAlt: string;
    capabilities: {
      index: string;
      title: string;
      body: string;
    }[];
  };
  standards: {
    kicker: string;
    title: string;
    columns: {
      breed: string;
      origin: string;
      height: string;
      focus: string;
      documents: string;
    };
    rows: {
      breed: string;
      origin: string;
      height: string;
      focus: string;
      documents: string;
    }[];
    testimonials: {
      quote: string;
      author: string;
      role: string;
    }[];
  };
  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    addressTitle: string;
    addressValue: string;
    directorTitle: string;
    directorValue: string;
    phoneTitle: string;
    hoursTitle: string;
    hoursValue: string;
    successBadgePrefix: string;
    successBadgeSuffix: string;
    successTitlePrefix: string;
    successBodyBeforePhone: string;
    successBodyBetweenPhoneAndInterest: string;
    successBodyAfterInterest: string;
    submitAnother: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    interestLabel: string;
    interestGeneral: string;
    interestYoungstock: string;
    visitFormatLabel: string;
    visitOnsite: string;
    visitVideo: string;
    commentLabel: string;
    commentPlaceholder: string;
    privacyNote: string;
    submitCta: string;
    errors: {
      name: string;
      phone: string;
      email: string;
    };
  };
  map: {
    kicker: string;
    title: string;
    subtitle: string;
    viewModes: {
      roadmap: string;
      terrain: string;
      hybrid: string;
    };
    recenterLabel: string;
    openDirectionsLabel: string;
    loadingLabel: string;
    unavailableTitle: string;
    unavailableBody: string;
    coordinatesLabel: string;
    elevationBadge: string;
    infoTitle: string;
    infoHours: string;
  };
  footer: {
    tagline: string;
    links: {
      catalog: string;
      estate: string;
      standards: string;
      contact: string;
    };
  };
  chat: {
    launcherLabel: string;
    launcherAria: string;
    panelTitle: string;
    panelSubtitle: string;
    resetAria: string;
    closeAria: string;
    welcomeMessage: string;
    suggestionsLabel: string;
    suggestions: string[];
    thinkingLabel: string;
    bookingHint: string;
    bookingLink: string;
    inputPlaceholder: string;
    sendAria: string;
    errorMissingKey: string;
    errorGeneric: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  ru: {
    metaTitle: 'Ала-Тоо Асыл Тукум — Племенной конный завод | с. Кичи-Джаргылчак, Иссык-Куль',
    nav: {
      ariaLabel: 'Основная навигация',
      mobileAriaLabel: 'Мобильная навигация',
      openMenu: 'Открыть меню',
      closeMenu: 'Закрыть меню',
      catalog: 'Поголовье',
      estate: 'Завод',
      standards: 'Стандарты',
      contact: 'Контакты',
      cta: 'Записаться на просмотр',
    },
    languageSelectorLabel: 'Язык сайта',
    hero: {
      ariaLabel: 'Главный экран',
      kicker: 'Иссык-Кульская область · Джети-Огузский район · с. Кичи-Джаргылчак',
      title: 'Племенные лошади предгорий Ала-Тоо',
      subtitle:
        'Закрытый племенной завод в селе Кичи-Джаргылчак (Джети-Огузский район, Иссык-Кульская область). Разведение и подготовка чистокровных линий с международными паспортами ВНИИК и FEI.',
      primaryCta: 'Выбрать лошадь',
      secondaryCta: 'О заводе в Кичи-Джаргылчаке',
      fallbackTitle: 'Ала-Тоо Асыл Тукум · с. Кичи-Джаргылчак',
    },
    metrics: [
      { value: '42', label: 'Племенных голов', detail: 'В основном табуне в с. Кичи-Джаргылчак' },
      { value: '1 650 м', label: 'Высота пастбищ', detail: 'Джети-Огузский район, Иссык-Куль' },
      { value: '100%', label: 'ДНК-верификация', detail: 'Паспорта ВНИИК, ГПК и FEI' },
      { value: '14 лет', label: 'Опыт селекции', detail: 'Экспорт в Казахстан, РФ и ОАЭ' },
    ],
    catalog: {
      kicker: 'Племенной фонд 2026',
      title: 'Лошади, доступные к приобретению',
      subtitle:
        'Каждая лошадь прошла чипирование ISO, ДНК-подтверждение происхождения и осенний рентген-контроль на заводе.',
      currencyLabel: 'Валюта расчёта',
      currencyGroupAria: 'Переключение валюты',
      currencyKgsLabel: 'Сом (KGS)',
      kgsUnit: 'сом',
      breedGroupAria: 'Фильтр по породе',
      disciplineLabel: 'Назначение:',
      emptyTitle: 'По выбранной комбинации фильтров лошадей сейчас нет в каталоге',
      emptyBody:
        'Сбросьте параметры фильтрации или оставьте заявку на подбор из закрытого племенного молодняка 2025–2026 годов рождения.',
      resetFilters: 'Сбросить фильтры',
      yearSuffix: 'г.р.',
      heightUnit: 'см',
      passportCta: 'Паспорт и родословная',
      cardAriaPrefix: 'Открыть паспорт и родословную:',
      breedTabs: [
        { id: 'all', label: 'Все породы' },
        { id: 'akhal-teke', label: 'Ахалтекинская' },
        { id: 'thoroughbred', label: 'Английская' },
        { id: 'new-kyrgyz', label: 'Новокиргизская' },
        { id: 'arabian', label: 'Арабская' },
        { id: 'hanoverian', label: 'Ганноверская' },
        { id: 'orlov', label: 'Орловский рысак' },
        { id: 'don', label: 'Донская' },
        { id: 'friesian', label: 'Фризская' },
        { id: 'karabair', label: 'Карабаирская' },
      ],
      disciplineTabs: [
        { id: 'all', label: 'Все направления' },
        { id: 'racing', label: 'Скачки и байге' },
        { id: 'dressage', label: 'Выездка и шоу' },
        { id: 'breeding', label: 'Воспроизводство' },
      ],
    },
    horses: {
      'ak-shumkar': {
        name: 'Ак-Шумкар',
        breed: 'Ахалтекинская',
        gender: 'Жеребец',
        coat: 'Золотисто-буланая',
        line: 'Линия Каплан',
        registryId: 'ВНИИК № AT-0849',
        discipline: 'Выездка и племенное разведение',
        availability: 'Доступен к просмотру',
        vetSummary:
          'Полный рентген-чек суставов (ноябрь 2026), без ограничений к нагрузкам и воспроизводству.',
        description:
          'Эталонный представитель линии Каплан с выраженным металлическим отливом рубашки, сухими связками и свободным продуктивным шагом. Подготовлен по программе молодых лошадей.',
        imageAlt:
          'Золотисто-буланый ахалтекинский жеребец Ак-Шумкар в профильной стойке на каменном дворе',
        pedigree: {
          sire: { name: 'Гайрат-Шах', origin: 'Линия Каплан · 2014' },
          dam: { name: 'Мерджен-Ай', origin: 'Линия Гелишикли · 2015' },
          paternalGrandsire: { name: 'Кара-Куш', origin: 'Чемпион породы · ВНИИК' },
          paternalGranddam: { name: 'Алтын-Гюль', origin: 'Ашхабадская линия' },
          maternalGrandsire: { name: 'Сейит-Хан', origin: 'Племенной класс Элита' },
          maternalGranddam: { name: 'Дана-Биби', origin: 'Каракумский завод' },
        },
      },
      'khan-tengri': {
        name: 'Хан-Тенгри',
        breed: 'Английская верховая',
        gender: 'Жеребец',
        coat: 'Тёмно-гнедая',
        line: 'Линия Northern Dancer',
        registryId: 'Jockey Club № TB-4118',
        discipline: 'Скачки на длинные дистанции',
        availability: 'Готов к сезону 2027',
        vetSummary:
          'Эндоскопия верхних дыхательных путей и рентген-протокол без замечаний. Вакцинация FEI.',
        description:
          'Рождён в с. Кичи-Джаргылчак от привозной кобылы ирландской селекции. Обладает мощным плечом, глубокой грудной клеткой и адаптированной к среднегорью дыхательной выносливостью.',
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
      'kara-baiyr': {
        name: 'Кара-Байыр',
        breed: 'Новокиргизская',
        gender: 'Жеребец',
        coat: 'Вороная',
        line: 'Линия Ала-Тоо Алтын',
        registryId: 'ГПК КР № NK-1904',
        discipline: 'Байге и дистанционные пробеги',
        availability: 'Доступен к просмотру',
        vetSummary:
          'Высокий показатель восстановления пульса после галопа в условиях 1 650 м. Чистые сухожилия.',
        description:
          'Вороной жеребец улучшенной новокиргизской селекции с прилитием донской и арабской крови. Исключительный баланс, крепкий копытный рог и устойчивая психика под седлом.',
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
      'ai-peri': {
        name: 'Ай-Пери',
        breed: 'Ахалтекинская',
        gender: 'Кобыла',
        coat: 'Серая в яблоках',
        line: 'Линия Гундогар',
        registryId: 'ВНИИК № AT-0621',
        discipline: 'Племенное воспроизводство и конкур',
        availability: 'Подтверждена к вывозу',
        vetSummary:
          'УЗИ-репродуктивное заключение категории А, проверена по качеству потомства (жеребчик 2025 г.р.).',
        description:
          'Породная серая матка с выразительной головой, лёгким прыжком и безупречной материнской линией. Рекомендована для создания собственного племенного ядра.',
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
      'amir-shah': {
        name: 'Амир-Шах',
        breed: 'Арабская чистокровная',
        gender: 'Жеребец',
        coat: 'Рыжая',
        line: 'Линия Кухайлан-Сиглави',
        registryId: 'WAHO / ВНИИК № AR-2214',
        discipline: 'Дистанционные пробеги 120 км и шоу',
        availability: 'Доступен к просмотру',
        vetSummary:
          'Кардиограмма и метаболический профиль без отклонений, допущен к международным пробегам FEI CEI 2*.',
        description:
          'Породный чистокровный арабский жеребец с характерным щучьим профилем, высоким поставом хвоста и исключительной сердечной выносливостью для горных дистанций.',
        imageAlt:
          'Рыжий чистокровный арабский жеребец Амир-Шах в профильной стойке на каменном дворе',
        pedigree: {
          sire: { name: 'Nadir Al-Sabah', origin: 'ОАЭ / WAHO · 2014' },
          dam: { name: 'Зухра-Сиглави', origin: 'Терский конный завод · 2015' },
          paternalGrandsire: { name: 'Marwan Al Shaqab', origin: 'Чемпион мира · Катар' },
          paternalGranddam: { name: 'Bint Ghazala', origin: 'Абу-Даби' },
          maternalGrandsire: { name: 'Победитель-II', origin: 'Линия Кохейлан' },
          maternalGranddam: { name: 'Нефертити', origin: 'Терская селекция' },
        },
      },
      kronprinz: {
        name: 'Кронпринц',
        breed: 'Ганноверская',
        gender: 'Жеребец',
        coat: 'Тёмно-гнедая',
        line: 'Линия Donnerhall / Sandro Hit',
        registryId: 'Hannoveraner № DE-7730',
        discipline: 'Конкур 140 см и Большой приз',
        availability: 'В тренинге на Иссык-Куле',
        vetSummary:
          'Чистые рентгенограммы спины, скакательных и челночных костей (октябрь 2026). Полный паспорт FEI.',
        description:
          'Крупный полукровный производитель немецкого происхождения с мощным толчком зада и ритмичными аллюрами. Выступает в маршрутах до 135–140 см и готов к племенному использованию.',
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
      'buran-orlov': {
        name: 'Буран-Орлов',
        breed: 'Орловский рысак',
        gender: 'Жеребец',
        coat: 'Светло-серая в яблоках',
        line: 'Линия Пиона',
        registryId: 'ВНИИК № OR-3309',
        discipline: 'Рысистые бега и парадная езда',
        availability: 'Доступен к просмотру',
        vetSummary: 'Сухие чистые суставы, проверен в качалке на 1 600 м и под верховым седлом.',
        description:
          'Нарядный серый орловский рысак классического типа линии Пиона. Отличается устойчивой высокой рысью, лебединым выходом шеи и добронравным характером.',
        imageAlt:
          'Светло-серый в яблоках орловский рысак Буран-Орлов на каменной дорожке конюшни',
        pedigree: {
          sire: { name: 'Колорит-Пион', origin: 'Хреновской завод · 2013' },
          dam: { name: 'Метелица', origin: 'Московский конный завод · 2015' },
          paternalGrandsire: { name: 'Попрёк', origin: 'Рекордист ипподрома' },
          paternalGranddam: { name: 'Купава', origin: 'Линия Барчука' },
          maternalGrandsire: { name: 'Кипр', origin: 'Линия Отбоя' },
          maternalGranddam: { name: 'Молния', origin: 'Племенное ядро' },
        },
      },
      zlatoyar: {
        name: 'Златояр',
        breed: 'Донская',
        gender: 'Жеребец',
        coat: 'Золотисто-рыжая',
        line: 'Линия Бруча',
        registryId: 'ВНИИК № DN-1182',
        discipline: 'Троеборье, кок-бору и пробеги',
        availability: 'Доступен к просмотру',
        vetSummary:
          'Высокая минеральная плотность костяка, невосприимчив к перепадам высокогорных температур.',
        description:
          'Золотисто-рыжий донской жеребец с характерным бронзовым блеском. Сочетает восточную породность, широкую спину и выносливость степного табунного выращивания.',
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
      'black-baron': {
        name: 'Блэк-Барон',
        breed: 'Фризская',
        gender: 'Жеребец',
        coat: 'Вороная',
        line: 'Линия Jasper 366',
        registryId: 'KFPS № NL-9041',
        discipline: 'Классическая выездка и шоу',
        availability: 'В наличии в с. Кичи-Джаргылчак',
        vetSummary:
          'Полный генетический тест KFPS (отрицательный по гидроцефалии и карликовости), чистые рентгены.',
        description:
          'Густогривый чистопородный фризский жеребец с выразительным каретным ходом и высоким выходом шеи. Заезжен в выездке до элементов среднего уровня, идеален для частных резиденций и шоу.',
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
      zarina: {
        name: 'Зарина',
        breed: 'Карабаирская',
        gender: 'Кобыла',
        coat: 'Гнедая',
        line: 'Линия Самарканд-Бахтиёр',
        registryId: 'ГПК ЦА № KB-0473',
        discipline: 'Универсальная верховая и воспроизводство',
        availability: 'Доступна к просмотру',
        vetSummary:
          'Безупречная координация на каменистом горном грунте, проверена по репродуктивному здоровью.',
        description:
          'Карабаирская матка элитного центральноазиатского корня. Ценится за крепкую поясницу, маневренность, твёрдый копытный рог и высокую плодовитость для селекции спортивных помесей.',
        imageAlt:
          'Гнедая карабаирская кобыла Зарина на горном пастбище с хребтом Тянь-Шань на заднем плане',
        pedigree: {
          sire: { name: 'Шохрух-Бахтиёр', origin: 'Самарканд · 2014' },
          dam: { name: 'Дильбар', origin: 'Ферганская долина · 2015' },
          paternalGrandsire: { name: 'Кайрат', origin: 'Линия Учкудука' },
          paternalGranddam: { name: 'Гульчехра', origin: 'Карабаирский завод' },
          maternalGrandsire: { name: 'Таймас', origin: 'Победитель улак-купкари' },
          maternalGranddam: { name: 'Саодат', origin: 'Племенная книга ЦА' },
        },
      },
      'korkom-peri': {
        name: 'Корком-Пери',
        breed: 'Новокиргизская',
        gender: 'Кобыла',
        coat: 'Золотисто-соловая',
        line: 'Линия Иссык-Куль Алтын',
        registryId: 'ГПК КР № NK-2148',
        discipline: 'Племенное воспроизводство и дистанционные пробеги',
        availability: 'В наличии в с. Кичи-Джаргылчак',
        vetSummary:
          'УЗИ-репродуктивное заключение категории А, чистые рентгенограммы и стабильный пульс в условиях высокогорья 1 650 м.',
        description:
          'Нарядная золотисто-соловая кобыла улучшенной новокиргизской селекции с белоснежной гривой, сухими ногами и пластичным шагом. Идеальна как для собственного племенного ядра, так и для горных дистанций.',
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
    },
    modal: {
      closeAria: 'Закрыть карточку лошади',
      withersHeight: 'Высота в холке',
      chestGirth: 'Обхват груди',
      cannonBone: 'Обхват пясти',
      isoChip: 'Чип ISO',
      cmUnit: 'см',
      vetTitle: 'Ветеринарный статус и рентген-контроль',
      pedigreeTitle: 'Родословная в трёх поколениях',
      paternalBranch: 'Отцовская линия',
      maternalBranch: 'Материнская линия',
      sireLabel: 'Отец',
      damLabel: 'Мать',
      paternalGrandsireLabel: 'Дед (ОО)',
      paternalGranddamLabel: 'Бабка (ОМ)',
      maternalGrandsireLabel: 'Дед (МО)',
      maternalGranddamLabel: 'Бабка (ММ)',
      priceNote: 'Стоимость с полным пакетом документов',
      bookCta: 'Забронировать просмотр',
    },
    estate: {
      kicker: 'Инфраструктура и селекция',
      title: 'Высокогорный завод полного цикла на южном берегу Иссык-Куля',
      directorLabel: 'Руководитель завода',
      directorName: 'Исмаилов Улан Жумабекович',
      fallbackTitle: 'Комплекс Кичи-Джаргылчак · Иссык-Куль',
      imageAlt:
        'Конный комплекс «Ала-Тоо Асыл Тукум» из кедра и природного камня в селе Кичи-Джаргылчак, Джети-Огузский район',
      capabilities: [
        {
          index: '01',
          title: 'Генетический подбор и лабораторный аудит',
          body: 'Каждая случная пара формируется на основе ДНК-тестирования родословной, анализа инбридинга и экстерьерных индексов с регистрацией во ВНИИК и международных студбуках.',
        },
        {
          index: '02',
          title: 'Высокогорное выращивание в с. Кичи-Джаргылчак',
          body: 'Жеребята и основной состав содержатся на пастбищах Джети-Огузского района на высоте 1 650 метров, что формирует объём лёгких, прочный костяк и естественный иммунитет.',
        },
        {
          index: '03',
          title: 'Ветеринарный протокол и рентген-чек',
          body: 'Перед передачей владельцу проводится независимый клинический осмотр, серия цифровых рентгенограмм конечностей и эндоскопия по стандартам FEI.',
        },
        {
          index: '04',
          title: 'Таможенное оформление и доставка',
          body: 'Оформляем полный карантинный и экспортный пакет документов для перегона специализированными коневозами и авиаперевозки в Казахстан, Россию, Узбекистан и ОАЭ.',
        },
      ],
    },
    standards: {
      kicker: 'Породные направления',
      title: 'Сравнение племенных линий завода',
      columns: {
        breed: 'Порода',
        origin: 'Ключевые линии',
        height: 'Рост в холке',
        focus: 'Спортивное назначение',
        documents: 'Документация',
      },
      rows: [
        {
          breed: 'Ахалтекинская',
          origin: 'Линии Каплан, Гундогар, Гелишикли',
          height: '158–164 см',
          focus: 'Выездка, шоу-классы, племенное разведение',
          documents: 'Паспорт ВНИИК, ДНК-профиль, чип ISO',
        },
        {
          breed: 'Английская верховая',
          origin: 'Линии Northern Dancer, Danzig, Mr. Prospector',
          height: '164–170 см',
          focus: 'Классические скачки, барьерный спорт',
          documents: 'Jockey Club / Паспорт FEI, карантинный лист',
        },
        {
          breed: 'Новокиргизская спортивная',
          origin: 'Линии Ала-Тоо Алтын, улучшенная селекция',
          height: '156–162 см',
          focus: 'Аламан байге, кок-бору, пробеги 80–120 км',
          documents: 'Государственная племенная книга КР, чип ISO',
        },
        {
          breed: 'Арабская и Донская',
          origin: 'Кухайлан-Сиглави, Бруч',
          height: '154–165 см',
          focus: 'Дистанционные пробеги FEI, троеборье, шоу',
          documents: 'WAHO / ВНИИК, кардио- и рентген-протокол',
        },
        {
          breed: 'Ганноверская и Фризская',
          origin: 'Donnerhall, Sandro Hit, Jasper 366',
          height: '165–173 см',
          focus: 'Конкур до 140 см, Большой приз, парадный выезд',
          documents: 'Hannoveraner / KFPS, паспорт FEI, рентген-чек',
        },
        {
          breed: 'Орловский рысак и Карабаирская',
          origin: 'Линия Пиона, Самарканд-Бахтиёр',
          height: '156–166 см',
          focus: 'Рысистые бега, горный спорт, кок-бору',
          documents: 'ВНИИК / ГПК ЦА, ДНК-профиль, чип ISO',
        },
      ],
      testimonials: [
        {
          quote:
            'Взяли двухлетнего жеребца линии Northern Dancer для скакового отделения в Алматы. За счёт высокогорного тренинга на Иссык-Куле лошадь прошла акклиматизацию без потерь и выиграла приз открытия сезона на дистанции 1 800 метров.',
          author: 'Тимур Асанов',
          role: 'Управляющий конно-спортивным клубом «Тулпар-Арена», Алматы',
        },
        {
          quote:
            'Прозрачность документов решила всё: рентген-снимки и ДНК-подтверждение ВНИИК прислали за неделю до нашего прилёта в Кыргызстан. После осмотра в Кичи-Джаргылчаке выбрали золотисто-буланую кобылу для племенного ядра — доставка в Ташкент заняла двое суток.',
          author: 'Шерзод Каримов',
          role: 'Частный заводчик, племенное хозяйство «Заркент», Ташкент',
        },
      ],
    },
    contact: {
      kicker: 'Частный просмотр на заводе',
      title: 'Организуем выводку и независимый вет-чек',
      subtitle:
        'Приглашаем заводчиков, тренеров и владельцев конных клубов в село Кичи-Джаргылчак (Джети-Огузский район, Иссык-Кульская область) или проведём детальную видеоинспекцию с вашим ветеринарным врачом.',
      addressTitle: 'Адрес конного комплекса',
      addressValue:
        'Кыргызская Республика, Иссык-Кульская область, Джети-Огузский район, село Кичи-Джаргылчак',
      directorTitle: 'Руководитель завода',
      directorValue: 'Исмаилов Улан Жумабекович',
      phoneTitle: 'Отдел селекции и экспорта',
      hoursTitle: 'График приёма',
      hoursValue: 'Ежедневно с 08:30 до 18:00 по предварительной записи',
      successBadgePrefix: 'Заявка',
      successBadgeSuffix: 'зарегистрирована',
      successTitlePrefix: 'Благодарим за обращение,',
      successBodyBeforePhone: 'Управляющий племенным фондом свяжется с вами по номеру',
      successBodyBetweenPhoneAndInterest:
        'в течение рабочего дня, чтобы согласовать удобное время выводки и направить пакет родословной по запросу «',
      successBodyAfterInterest: '».',
      submitAnother: 'Отправить ещё одну заявку',
      nameLabel: 'Имя и фамилия *',
      namePlaceholder: 'Бактыбек Садыков',
      phoneLabel: 'Телефон / WhatsApp *',
      phonePlaceholder: '+996 555 000 000',
      emailLabel: 'Электронная почта (для отправки документов)',
      emailPlaceholder: 'owner@club.kg',
      interestLabel: 'Интересующая лошадь или линия',
      interestGeneral: 'Общая консультация по поголовью',
      interestYoungstock: 'Подбор племенного молодняка 2025–2026 г.р.',
      visitFormatLabel: 'Формат знакомства',
      visitOnsite: 'Личный визит в с. Кичи-Джаргылчак',
      visitVideo: 'Онлайн-выводка и рентген-пакет',
      commentLabel: 'Комментарий или страна доставки',
      commentPlaceholder: 'Укажите желаемую дату визита, спортивную задачу или регион доставки...',
      privacyNote: 'Все данные используются только для согласования просмотра и документов.',
      submitCta: 'Отправить заявку',
      errors: {
        name: 'Укажите ваше имя (минимум 2 символа).',
        phone: 'Введите корректный номер телефона для связи.',
        email: 'Проверьте формат электронной почты.',
      },
    },
    map: {
      kicker: 'Локация на карте Google',
      title: 'Южный берег Иссык-Куля · с. Кичи-Джаргылчак',
      subtitle:
        'Джети-Огузский район, 1 650 м над уровнем моря. Удобный подъезд от трассы A363 со стороны Тамчы и Каракола.',
      viewModes: {
        roadmap: 'Схема',
        terrain: 'Рельеф',
        hybrid: 'Спутник',
      },
      recenterLabel: 'Центрировать',
      openDirectionsLabel: 'Маршрут в Google Картах',
      loadingLabel: 'Загрузка карты и координат комплекса...',
      unavailableTitle: 'Карта временно недоступна',
      unavailableBody:
        'Не удалось загрузить интерактивную карту Google. Вы можете открыть маршрут напрямую по адресу комплекса.',
      coordinatesLabel: 'Координаты',
      elevationBadge: 'Высота пастбищ 1 650 м',
      infoTitle: 'Конный завод «Ала-Тоо Асыл Тукум»',
      infoHours: 'Выводка по записи · 08:30–18:00',
    },
    footer: {
      tagline:
        'Племенной конный завод · Иссык-Кульская область, Джети-Огузский район, с. Кичи-Джаргылчак · © 2026',
      links: {
        catalog: 'Поголовье',
        estate: 'Инфраструктура',
        standards: 'Стандарты пород',
        contact: 'Запись на просмотр',
      },
    },
    chat: {
      launcherLabel: 'Консультант',
      launcherAria: 'Открыть чат-консультант завода',
      panelTitle: 'Консультант по поголовью',
      panelSubtitle: 'Ала-Тоо Асыл Тукум · с. Кичи-Джаргылчак',
      resetAria: 'Начать новый диалог',
      closeAria: 'Закрыть чат',
      welcomeMessage:
        'Здравствуйте. Помогу подобрать племенную лошадь из нашего фонда в с. Кичи-Джаргылчак (Иссык-Куль), уточнить родословную, ветеринарный статус и условия доставки.',
      suggestionsLabel: 'Частые вопросы:',
      suggestions: [
        'Какую лошадь посоветуете для скачек и байге?',
        'Какие документы и рентген-снимки входят в стоимость?',
        'Как организована доставка в Казахстан или ОАЭ?',
      ],
      thinkingLabel: 'Подбираем информацию...',
      bookingHint: 'Готовы к выводке в Кичи-Джаргылчаке?',
      bookingLink: 'Форма записи',
      inputPlaceholder: 'Задайте вопрос о лошадях или доставке...',
      sendAria: 'Отправить сообщение',
      errorMissingKey:
        'Сервис консультанта ожидает настройки ключа API на сервере (Settings > Secrets).',
      errorGeneric: 'Не удалось получить ответ. Повторите запрос чуть позже.',
    },
  },

  en: {
    metaTitle: 'Ala-Too Asyl Tukum — Pedigree Horse Stud Farm | Kichi-Jargylchak, Issyk-Kul',
    nav: {
      ariaLabel: 'Primary navigation',
      mobileAriaLabel: 'Mobile navigation',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      catalog: 'Bloodstock',
      estate: 'Stud Farm',
      standards: 'Standards',
      contact: 'Contact',
      cta: 'Book Viewing',
    },
    languageSelectorLabel: 'Site language',
    hero: {
      ariaLabel: 'Hero banner',
      kicker: 'Issyk-Kul Region · Jeti-Oguz District · Kichi-Jargylchak',
      title: 'Pedigree Horses of the Ala-Too Foothills',
      subtitle:
        'A private breeding stud in Kichi-Jargylchak village (Jeti-Oguz District, Issyk-Kul Region). Selective breeding and athletic preparation of purebred bloodlines with VNIIK and FEI passports.',
      primaryCta: 'Explore Bloodstock',
      secondaryCta: 'Kichi-Jargylchak Estate',
      fallbackTitle: 'Ala-Too Asyl Tukum · Issyk-Kul',
    },
    metrics: [
      { value: '42', label: 'Registered Horses', detail: 'Core breeding herd in Kichi-Jargylchak' },
      { value: '1,650 m', label: 'Pasture Elevation', detail: 'Jeti-Oguz District, Issyk-Kul' },
      { value: '100%', label: 'DNA Verified', detail: 'VNIIK, National Studbook & FEI' },
      { value: '14 yrs', label: 'Breeding Heritage', detail: 'Exports to Kazakhstan, CIS & UAE' },
    ],
    catalog: {
      kicker: '2026 Breeding Portfolio',
      title: 'Pedigree Horses Available for Acquisition',
      subtitle:
        'Every horse carries an ISO microchip, DNA-verified parentage, and current digital radiographic clearance on farm.',
      currencyLabel: 'Currency',
      currencyGroupAria: 'Currency selector',
      currencyKgsLabel: 'KGS (Som)',
      kgsUnit: 'KGS',
      breedGroupAria: 'Filter by breed',
      disciplineLabel: 'Discipline:',
      emptyTitle: 'No horses currently match this filter combination',
      emptyBody:
        'Reset your selection or submit an inquiry for private access to our 2025–2026 foal crop.',
      resetFilters: 'Reset filters',
      yearSuffix: 'foaled',
      heightUnit: 'cm',
      passportCta: 'Passport & Pedigree',
      cardAriaPrefix: 'Open passport and pedigree:',
      breedTabs: [
        { id: 'all', label: 'All Breeds' },
        { id: 'akhal-teke', label: 'Akhal-Teke' },
        { id: 'thoroughbred', label: 'Thoroughbred' },
        { id: 'new-kyrgyz', label: 'New Kyrgyz' },
        { id: 'arabian', label: 'Arabian' },
        { id: 'hanoverian', label: 'Hanoverian' },
        { id: 'orlov', label: 'Orlov Trotter' },
        { id: 'don', label: 'Don' },
        { id: 'friesian', label: 'Friesian' },
        { id: 'karabair', label: 'Karabair' },
      ],
      disciplineTabs: [
        { id: 'all', label: 'All Disciplines' },
        { id: 'racing', label: 'Flat Racing & Baige' },
        { id: 'dressage', label: 'Dressage & Show' },
        { id: 'breeding', label: 'Breeding Core' },
      ],
    },
    horses: {
      'ak-shumkar': {
        name: 'Ak-Shumkar',
        breed: 'Akhal-Teke',
        gender: 'Stallion',
        coat: 'Metallic Golden Buckskin',
        line: 'Kaplan Line',
        registryId: 'VNIIK #AT-0849',
        discipline: 'Dressage & Breeding Sire',
        availability: 'Available for viewing',
        vetSummary:
          'Full joint radiographic set (November 2026), cleared without restrictions for sport and stud duties.',
        description:
          'Benchmark representative of the Kaplan sire line featuring a pronounced metallic sheen, clean dry tendons, and elastic ground-covering movement. Started under young-horse dressage training.',
        imageAlt:
          'Metallic golden buckskin Akhal-Teke stallion Ak-Shumkar standing in clean profile on stone courtyard',
        pedigree: {
          sire: { name: 'Gairat-Shah', origin: 'Kaplan Line · 2014' },
          dam: { name: 'Merdjen-Ai', origin: 'Gelishikli Line · 2015' },
          paternalGrandsire: { name: 'Kara-Kush', origin: 'Breed Champion · VNIIK' },
          paternalGranddam: { name: 'Altyn-Gul', origin: 'Ashgabat Line' },
          maternalGrandsire: { name: 'Seyit-Khan', origin: 'Elite Class Sire' },
          maternalGranddam: { name: 'Dana-Bibi', origin: 'Karakum Stud' },
        },
      },
      'khan-tengri': {
        name: 'Khan-Tengri',
        breed: 'Thoroughbred',
        gender: 'Stallion',
        coat: 'Dark Bay',
        line: 'Northern Dancer Line',
        registryId: 'Jockey Club #TB-4118',
        discipline: 'Stayer Flat Racing',
        availability: 'Ready for 2027 season',
        vetSummary:
          'Upper respiratory endoscopy and clean digital X-ray dossier on file. Current FEI vaccinations.',
        description:
          'Foaled in Kichi-Jargylchak out of an imported Irish-bred mare. Combines a powerful shoulder, deep heart girth, and natural high-altitude respiratory endurance.',
        imageAlt:
          'Athletic dark bay Thoroughbred stallion Khan-Tengri in a manicured paddock with morning mountain mist',
        pedigree: {
          sire: { name: 'Royal Ascot Pride', origin: 'United Kingdom · 2015' },
          dam: { name: 'Lady Emerald', origin: 'Ireland · 2016' },
          paternalGrandsire: { name: 'Galileo Star', origin: 'Sadler’s Wells Line' },
          paternalGranddam: { name: 'Silver Sovereign', origin: 'Newmarket' },
          maternalGrandsire: { name: 'Danehill Crest', origin: 'Danzig Line' },
          maternalGranddam: { name: 'Kildare Rose', origin: 'Dublin Studbook' },
        },
      },
      'kara-baiyr': {
        name: 'Kara-Baiyr',
        breed: 'New Kyrgyz',
        gender: 'Stallion',
        coat: 'Jet Black',
        line: 'Ala-Too Altyn Line',
        registryId: 'GPK KR #NK-1904',
        discipline: 'Baige & Endurance',
        availability: 'Available for viewing',
        vetSummary:
          'Rapid heart-rate recovery post-gallop at 1,650 m elevation. Clean flexor tendons and sound hooves.',
        description:
          'Jet-black New Kyrgyz stallion refined with Don and Arabian bloodlines. Exceptional balance, dense hoof wall, and steady temperament under saddle.',
        imageAlt:
          'Jet-black New Kyrgyz stallion Kara-Baiyr beside cedar paddock fencing against Tien Shan foothills',
        pedigree: {
          sire: { name: 'Altyn-Tai', origin: 'Issyk-Kul · 2013' },
          dam: { name: 'Bermet-Kyz', origin: 'Chui Valley · 2015' },
          paternalGrandsire: { name: 'Tulpar-Bek', origin: 'Alaman Baige Winner' },
          paternalGranddam: { name: 'Saikal', origin: 'Naryn Stud' },
          maternalGrandsire: { name: 'Burkut-Arab', origin: 'Purebred Arabian' },
          maternalGranddam: { name: 'Cholpon', origin: 'Kyrgyz Studbook' },
        },
      },
      'ai-peri': {
        name: 'Ai-Peri',
        breed: 'Akhal-Teke',
        gender: 'Mare',
        coat: 'Dapple Gray',
        line: 'Gundogar Line',
        registryId: 'VNIIK #AT-0621',
        discipline: 'Broodmare & Show Jumping',
        availability: 'Export cleared',
        vetSummary:
          'Grade-A reproductive ultrasound clearance; proven producer (2025 colt on farm).',
        description:
          'Typey dapple-gray broodmare with refined head carriage, athletic bascule, and an unbroken maternal pedigree. Ideal foundation mare for private studs.',
        imageAlt: 'Dapple-gray broodmare Ai-Peri standing on stone stable apron in daylight',
        pedigree: {
          sire: { name: 'Dorkush', origin: 'Gundogar Line · 2012' },
          dam: { name: 'Ak-Maral', origin: 'Yel Line · 2014' },
          paternalGrandsire: { name: 'Arslan', origin: 'Elite Class' },
          paternalGranddam: { name: 'Guljan', origin: 'Dressage Line' },
          maternalGrandsire: { name: 'Yarty-Gulak', origin: 'Foundation Sire' },
          maternalGranddam: { name: 'Kyzyl-Ai', origin: 'Issyk-Kul Stud' },
        },
      },
      'amir-shah': {
        name: 'Amir-Shah',
        breed: 'Purebred Arabian',
        gender: 'Stallion',
        coat: 'Chestnut',
        line: 'Kuhaylan-Siglavi Line',
        registryId: 'WAHO / VNIIK #AR-2214',
        discipline: '120 km Endurance & Show',
        availability: 'Available for viewing',
        vetSummary:
          'Clean cardiac and metabolic profile; cleared for FEI CEI 2* international endurance.',
        description:
          'Classic purebred Arabian stallion with a sculpted dished profile, high tail carriage, and exceptional aerobic recovery across high-altitude trails.',
        imageAlt:
          'Purebred chestnut Arabian stallion Amir-Shah standing in profile on stone courtyard',
        pedigree: {
          sire: { name: 'Nadir Al-Sabah', origin: 'UAE / WAHO · 2014' },
          dam: { name: 'Zukhra-Siglavi', origin: 'Tersk Stud · 2015' },
          paternalGrandsire: { name: 'Marwan Al Shaqab', origin: 'World Champion · Qatar' },
          paternalGranddam: { name: 'Bint Ghazala', origin: 'Abu Dhabi' },
          maternalGrandsire: { name: 'Pobeditel-II', origin: 'Koheilan Line' },
          maternalGranddam: { name: 'Nefertiti', origin: 'Tersk Breeding' },
        },
      },
      kronprinz: {
        name: 'Kronprinz',
        breed: 'Hanoverian',
        gender: 'Stallion',
        coat: 'Dark Bay',
        line: 'Donnerhall / Sandro Hit Line',
        registryId: 'Hannoveraner #DE-7730',
        discipline: '140 cm Show Jumping & Grand Prix',
        availability: 'In training at Issyk-Kul',
        vetSummary:
          'Clean digital X-rays of back, hocks, and navicular bones (October 2026). Full FEI passport.',
        description:
          'Scope-rich German warmblood sire with explosive hind-end power and three expressive, rhythmic gaits. Competing up to 135–140 cm and approved for breeding.',
        imageAlt: 'Dark bay Hanoverian warmblood stallion Kronprinz beside timber stables',
        pedigree: {
          sire: { name: 'Don Frederic', origin: 'Germany · 2013' },
          dam: { name: 'St.Pr.St. Bellissima', origin: 'Hanoverian Society · 2014' },
          paternalGrandsire: { name: 'Don Schufro', origin: 'Donnerhall Line' },
          paternalGranddam: { name: 'Cleopatra', origin: 'Oldenburg' },
          maternalGrandsire: { name: 'Sandro Hit', origin: 'Elite Sire' },
          maternalGranddam: { name: 'Weltmeyer Lady', origin: 'Verden' },
        },
      },
      'buran-orlov': {
        name: 'Buran-Orlov',
        breed: 'Orlov Trotter',
        gender: 'Stallion',
        coat: 'Light Dapple Gray',
        line: 'Pion Line',
        registryId: 'VNIIK #OR-3309',
        discipline: 'Harness Trotting & Ceremonial Riding',
        availability: 'Available for viewing',
        vetSummary:
          'Clean dry joints; conditioned in sulky over 1,600 meters and educated under saddle.',
        description:
          'Striking dapple-gray Orlov Trotter of classical Pion type. Known for a balanced high-stepping trot, swan-arched neck, and calm temperament.',
        imageAlt:
          'Light dapple-gray Orlov Trotter stallion Buran-Orlov on stone stable lane with green hills',
        pedigree: {
          sire: { name: 'Kolorit-Pion', origin: 'Khrenovoye Stud · 2013' },
          dam: { name: 'Metelitsa', origin: 'Moscow Stud · 2015' },
          paternalGrandsire: { name: 'Poprek', origin: 'Track Record Holder' },
          paternalGranddam: { name: 'Kupava', origin: 'Barchuk Line' },
          maternalGrandsire: { name: 'Kipr', origin: 'Otboy Line' },
          maternalGranddam: { name: 'Molniya', origin: 'Foundation Herd' },
        },
      },
      zlatoyar: {
        name: 'Zlatoyar',
        breed: 'Don',
        gender: 'Stallion',
        coat: 'Golden Chestnut',
        line: 'Bruch Line',
        registryId: 'VNIIK #DN-1182',
        discipline: 'Eventing, Kok-Boru & Endurance',
        availability: 'Available for viewing',
        vetSummary:
          'Dense cortical bone structure and proven resilience across sharp alpine temperature shifts.',
        description:
          'Golden-chestnut Russian Don stallion with a luminous bronze coat. Combines eastern refinement, broad loins, and steppe-bred stamina.',
        imageAlt:
          'Golden-chestnut Don stallion Zlatoyar in an alpine paddock with snow-capped peaks behind',
        pedigree: {
          sire: { name: 'Bambuk-Don', origin: 'Budyonny Stud · 2014' },
          dam: { name: 'Zabava-Step', origin: 'Rostov Region · 2016' },
          paternalGrandsire: { name: 'Bruch', origin: 'Elite Class' },
          paternalGranddam: { name: 'Slava', origin: 'Barvinok Line' },
          maternalGrandsire: { name: 'Gabardin', origin: 'Gulsyn Line' },
          maternalGranddam: { name: 'Zolushka', origin: 'Don Studbook' },
        },
      },
      'black-baron': {
        name: 'Black Baron',
        breed: 'Friesian',
        gender: 'Stallion',
        coat: 'Jet Black',
        line: 'Jasper 366 Line',
        registryId: 'KFPS #NL-9041',
        discipline: 'Classical Dressage & Show',
        availability: 'Available in Kichi-Jargylchak',
        vetSummary:
          'Full KFPS genetic panel negative (hydrocephalus & dwarfism), clean digital radiographs.',
        description:
          'Purebred jet-black Friesian stallion with luxurious wavy mane, elevated carriage, and expressive cadence. Schooled through medium dressage movements.',
        imageAlt:
          'Jet-black Friesian stallion Black Baron with thick wavy mane outside stone stables',
        pedigree: {
          sire: { name: 'Tsjalle 454', origin: 'Netherlands · KFPS Preferent' },
          dam: { name: 'Froukje fan ’e Alddyk', origin: 'Friesland · Ster Mare' },
          paternalGrandsire: { name: 'Mintse 384', origin: 'Jasper 366 Line' },
          paternalGranddam: { name: 'Welmoed', origin: 'Model Preferent' },
          maternalGrandsire: { name: 'Norbert 444', origin: 'KFPS Breed Champion' },
          maternalGranddam: { name: 'Sjoukje', origin: 'KFPS Main Book' },
        },
      },
      zarina: {
        name: 'Zarina',
        breed: 'Karabair',
        gender: 'Mare',
        coat: 'Bay',
        line: 'Samarkand-Bakhtiyor Line',
        registryId: 'CA Studbook #KB-0473',
        discipline: 'Mountain Riding & Breeding',
        availability: 'Available for viewing',
        vetSummary:
          'Sure-footed on rocky alpine terrain; reproductive ultrasound verified.',
        description:
          'Elite Central Asian Karabair broodmare valued for strong loins, agility, dense hooves, and high fertility for performance sport crosses.',
        imageAlt:
          'Bay Central Asian Karabair mare Zarina on mountain pasture with Tien Shan peaks behind',
        pedigree: {
          sire: { name: 'Shokhrukh-Bakhtiyor', origin: 'Samarkand · 2014' },
          dam: { name: 'Dilbar', origin: 'Fergana Valley · 2015' },
          paternalGrandsire: { name: 'Kairat', origin: 'Uchkuduk Line' },
          paternalGranddam: { name: 'Gulchekhra', origin: 'Karabair Stud' },
          maternalGrandsire: { name: 'Taimas', origin: 'Ulak-Kupkari Winner' },
          maternalGranddam: { name: 'Saodat', origin: 'Central Asian Studbook' },
        },
      },
      'korkom-peri': {
        name: 'Korkom-Peri',
        breed: 'New Kyrgyz',
        gender: 'Mare',
        coat: 'Golden Palomino',
        line: 'Issyk-Kul Altyn Line',
        registryId: 'GPK KR #NK-2148',
        discipline: 'Foundation Breeding & Endurance',
        availability: 'Available in Kichi-Jargylchak',
        vetSummary:
          'Grade-A reproductive ultrasound clearance, clean radiographs, and rapid heart-rate recovery at 1,650 m.',
        description:
          'Striking golden-palomino New Kyrgyz mare with an ivory flaxen mane, dry tendons, and balanced highland stride. Well suited both as a foundation broodmare and for alpine endurance trails.',
        imageAlt:
          'Golden palomino New Kyrgyz mare Korkom-Peri on lush mountain pasture overlooking Lake Issyk-Kul',
        pedigree: {
          sire: { name: 'Ak-Bulak', origin: 'Issyk-Kul · 2014' },
          dam: { name: 'Zharkyn-Ai', origin: 'Jeti-Oguz · 2016' },
          paternalGrandsire: { name: 'Altyn-Tai', origin: 'Elite Class GPK KR' },
          paternalGranddam: { name: 'Aigul', origin: 'Naryn Line' },
          maternalGrandsire: { name: 'Gulsary', origin: 'Endurance Record Holder' },
          maternalGranddam: { name: 'Keremet', origin: 'Issyk-Kul Stud' },
        },
      },
    },
    modal: {
      closeAria: 'Close horse dossier',
      withersHeight: 'Withers Height',
      chestGirth: 'Heart Girth',
      cannonBone: 'Cannon Bone',
      isoChip: 'ISO Microchip',
      cmUnit: 'cm',
      vetTitle: 'Veterinary Clearance & Radiographs',
      pedigreeTitle: 'Three-Generation Pedigree',
      paternalBranch: 'Paternal Line',
      maternalBranch: 'Maternal Line',
      sireLabel: 'Sire',
      damLabel: 'Dam',
      paternalGrandsireLabel: 'Paternal Grandsire',
      paternalGranddamLabel: 'Paternal Granddam',
      maternalGrandsireLabel: 'Maternal Grandsire',
      maternalGranddamLabel: 'Maternal Granddam',
      priceNote: 'Price including full export & registry dossier',
      bookCta: 'Schedule Private Viewing',
    },
    estate: {
      kicker: 'Infrastructure & Selection',
      title: 'Full-Cycle Alpine Stud Farm on the South Shore of Issyk-Kul',
      directorLabel: 'Stud Director',
      directorName: 'Ulan Zhumabekovich Ismailov',
      fallbackTitle: 'Kichi-Jargylchak Estate · Issyk-Kul',
      imageAlt:
        'Ala-Too Asyl Tukum cedar and stone equestrian stable complex in Kichi-Jargylchak village, Jeti-Oguz District, Issyk-Kul Region',
      capabilities: [
        {
          index: '01',
          title: 'Genetic Pairing & Lab Verification',
          body: 'Every mating is planned using DNA parentage profiles, inbreeding coefficients, and conformation scoring registered with VNIIK and international studbooks.',
        },
        {
          index: '02',
          title: 'High-Altitude Rearing in Kichi-Jargylchak',
          body: 'Foals and breeding stock graze at 1,650 meters elevation in Jeti-Oguz District, building lung capacity, dense bone, and natural resilience.',
        },
        {
          index: '03',
          title: 'Independent Vet Check & Radiographs',
          body: 'Prior to handover, each horse undergoes clinical examination, full limb digital X-rays, and upper-airway endoscopy to FEI veterinary standards.',
        },
        {
          index: '04',
          title: 'Customs Quarantine & Global Transport',
          body: 'We handle quarantine, CITES/export certificates, and specialized horse-float or air freight logistics to Kazakhstan, Russia, Uzbekistan, and the UAE.',
        },
      ],
    },
    standards: {
      kicker: 'Breed Disciplines',
      title: 'Studbook Comparison Across Lines',
      columns: {
        breed: 'Breed',
        origin: 'Primary Lines',
        height: 'Withers Height',
        focus: 'Athletic Focus',
        documents: 'Documentation',
      },
      rows: [
        {
          breed: 'Akhal-Teke',
          origin: 'Kaplan, Gundogar, Gelishikli',
          height: '158–164 cm',
          focus: 'Dressage, breed shows, foundation breeding',
          documents: 'VNIIK passport, DNA profile, ISO chip',
        },
        {
          breed: 'Thoroughbred',
          origin: 'Northern Dancer, Danzig, Mr. Prospector',
          height: '164–170 cm',
          focus: 'Classic flat racing, turf & dirt',
          documents: 'Jockey Club / FEI passport, health certificate',
        },
        {
          breed: 'New Kyrgyz Sport',
          origin: 'Ala-Too Altyn & refined mountain lines',
          height: '156–162 cm',
          focus: 'Alaman baige, kok-boru, 80–120 km endurance',
          documents: 'Kyrgyz State Studbook, ISO chip',
        },
        {
          breed: 'Arabian & Don',
          origin: 'Kuhaylan-Siglavi, Bruch',
          height: '154–165 cm',
          focus: 'FEI endurance, eventing, breed shows',
          documents: 'WAHO / VNIIK, cardiac & X-ray dossier',
        },
        {
          breed: 'Hanoverian & Friesian',
          origin: 'Donnerhall, Sandro Hit, Jasper 366',
          height: '165–173 cm',
          focus: '140 cm jumping, Grand Prix dressage, show',
          documents: 'Hannoveraner / KFPS, FEI passport, radiographs',
        },
        {
          breed: 'Orlov Trotter & Karabair',
          origin: 'Pion, Samarkand-Bakhtiyor',
          height: '156–166 cm',
          focus: 'Harness racing, mountain sport, kok-boru',
          documents: 'VNIIK / CA Studbook, DNA profile, ISO chip',
        },
      ],
      testimonials: [
        {
          quote:
            'We acquired a two-year-old Northern Dancer line colt for our Almaty racing yard. Thanks to his alpine conditioning at Issyk-Kul, he acclimated immediately and won our season opener over 1,800 meters.',
          author: 'Timur Asanov',
          role: 'Director, Tulpar-Arena Equestrian Club, Almaty',
        },
        {
          quote:
            'Document transparency stood out from day one: digital X-rays and VNIIK DNA verification arrived a week before our flight to Kyrgyzstan. After viewing in Kichi-Jargylchak, our golden buckskin mare reached Tashkent in 48 hours.',
          author: 'Sherzod Karimov',
          role: 'Private Breeder, Zarkent Stud Farm, Tashkent',
        },
      ],
    },
    contact: {
      kicker: 'Private Viewing at the Stud',
      title: 'Arrange a Parade & Independent Vet Inspection',
      subtitle:
        'We welcome breeders, trainers, and club owners to Kichi-Jargylchak village (Jeti-Oguz District, Issyk-Kul Region), or conduct live high-definition inspections alongside your appointed veterinarian.',
      addressTitle: 'Stud Farm Address',
      addressValue:
        'Kyrgyz Republic, Issyk-Kul Region, Jeti-Oguz District, Kichi-Jargylchak village',
      directorTitle: 'Stud Director',
      directorValue: 'Ulan Zhumabekovich Ismailov',
      phoneTitle: 'Bloodstock & Export Desk',
      hoursTitle: 'Visiting Hours',
      hoursValue: 'Daily 08:30 – 18:00 by prior appointment',
      successBadgePrefix: 'Request',
      successBadgeSuffix: 'confirmed',
      successTitlePrefix: 'Thank you,',
      successBodyBeforePhone: 'Our stud director will reach out at',
      successBodyBetweenPhoneAndInterest:
        'within one business day to schedule your inspection and send the pedigree dossier for “',
      successBodyAfterInterest: '”.',
      submitAnother: 'Submit another inquiry',
      nameLabel: 'Full Name *',
      namePlaceholder: 'Baktybek Sadykov',
      phoneLabel: 'Phone / WhatsApp *',
      phonePlaceholder: '+996 555 000 000',
      emailLabel: 'Email Address (for pedigree dossier)',
      emailPlaceholder: 'owner@club.kg',
      interestLabel: 'Horse or Bloodline of Interest',
      interestGeneral: 'General bloodstock consultation',
      interestYoungstock: '2025–2026 youngstock selection',
      visitFormatLabel: 'Inspection Format',
      visitOnsite: 'In-person visit in Kichi-Jargylchak',
      visitVideo: 'Live video inspection & X-ray review',
      commentLabel: 'Notes or Destination Country',
      commentPlaceholder: 'Preferred visit dates, athletic discipline, or export destination...',
      privacyNote: 'Your details are used solely to coordinate viewings and documentation.',
      submitCta: 'Send Inquiry',
      errors: {
        name: 'Please enter your full name (at least 2 characters).',
        phone: 'Please enter a valid contact phone number.',
        email: 'Please check your email address format.',
      },
    },
    map: {
      kicker: 'Location on Google Maps',
      title: 'South Shore of Issyk-Kul · Kichi-Jargylchak',
      subtitle:
        'Jeti-Oguz District, 1,650 m pasture elevation. Direct paved access off Highway A363 from Tamchy Airport and Karakol.',
      viewModes: {
        roadmap: 'Map',
        terrain: 'Terrain',
        hybrid: 'Satellite',
      },
      recenterLabel: 'Recenter',
      openDirectionsLabel: 'Directions in Google Maps',
      loadingLabel: 'Loading interactive map and estate coordinates...',
      unavailableTitle: 'Map currently unavailable',
      unavailableBody:
        'Unable to load the interactive Google Map right now. You can open direct navigation to our stud address.',
      coordinatesLabel: 'Coordinates',
      elevationBadge: '1,650 m Pasture Elevation',
      infoTitle: 'Ala-Too Asyl Tukum Pedigree Stud',
      infoHours: 'Private viewings · 08:30–18:00',
    },
    footer: {
      tagline:
        'Pedigree Horse Stud Farm · Issyk-Kul Region, Jeti-Oguz District, Kichi-Jargylchak · © 2026',
      links: {
        catalog: 'Bloodstock',
        estate: 'Stud Farm',
        standards: 'Breed Standards',
        contact: 'Book Viewing',
      },
    },
    chat: {
      launcherLabel: 'Concierge',
      launcherAria: 'Open stud farm bloodstock concierge chat',
      panelTitle: 'Bloodstock Concierge',
      panelSubtitle: 'Ala-Too Asyl Tukum · Kichi-Jargylchak',
      resetAria: 'Start new conversation',
      closeAria: 'Close chat',
      welcomeMessage:
        'Hello. I can help you select a pedigree horse from our stud in Kichi-Jargylchak (Issyk-Kul), review bloodlines, veterinary radiographs, or arrange international transport.',
      suggestionsLabel: 'Suggested questions:',
      suggestions: [
        'Which stallion is best suited for flat racing or baige?',
        'What passports and vet checks are included?',
        'How do you arrange export to Kazakhstan or the UAE?',
      ],
      thinkingLabel: 'Checking stud records...',
      bookingHint: 'Ready for a Kichi-Jargylchak inspection?',
      bookingLink: 'Booking form',
      inputPlaceholder: 'Ask about bloodlines, pricing, or export...',
      sendAria: 'Send message',
      errorMissingKey:
        'The assistant requires a server API key configured in Settings > Secrets.',
      errorGeneric: 'Unable to retrieve an answer right now. Please try again.',
    },
  },

  ky: {
    metaTitle: 'Ала-Тоо Асыл Тукум — Асыл тукум жылкы заводу | Кичи-Жаргылчак, Ысык-Көл',
    nav: {
      ariaLabel: 'Негизги навигация',
      mobileAriaLabel: 'Мобилдик навигация',
      openMenu: 'Менюну ачуу',
      closeMenu: 'Менюну жабуу',
      catalog: 'Жылкылар',
      estate: 'Завод',
      standards: 'Стандарттар',
      contact: 'Байланыш',
      cta: 'Көрүүгө жазылуу',
    },
    languageSelectorLabel: 'Сайттын тили',
    hero: {
      ariaLabel: 'Башкы бет',
      kicker: 'Ысык-Көл облусу · Жети-Өгүз району · Кичи-Жаргылчак айылы',
      title: 'Ала-Тоо этектериндеги асыл тукум жылкылар',
      subtitle:
        'Ысык-Көл облусунун Жети-Өгүз районундагы Кичи-Жаргылчак айылында жайгашкан жабык асыл тукум заводу. ВНИИК жана FEI паспорттору бар таза кандуу тукумдарды өстүрүү жана таптоо.',
      primaryCta: 'Жылкы тандоо',
      secondaryCta: 'Кичи-Жаргылчактагы завод тууралуу',
      fallbackTitle: 'Ала-Тоо Асыл Тукум · Кичи-Жаргылчак',
    },
    metrics: [
      { value: '42', label: 'Асыл тукум баш', detail: 'Кичи-Жаргылчак айылындагы негизги үйүр' },
      { value: '1 650 м', label: 'Жайыт бийиктиги', detail: 'Жети-Өгүз району, Ысык-Көл' },
      { value: '100%', label: 'ДНК тастыктоосу', detail: 'ВНИИК, МТК жана FEI паспорттору' },
      { value: '14 жыл', label: 'Селекция тажрыйбасы', detail: 'Казакстан, РФ жана БАЭге экспорт' },
    ],
    catalog: {
      kicker: '2026-жылдын асыл тукум фонду',
      title: 'Сатууга коюлган асыл тукум жылкылар',
      subtitle:
        'Ар бир жылкы заводдо ISO чиптөөдөн, ДНК текшерүүдөн жана күзгү рентген-көзөмөлдөн өткөн.',
      currencyLabel: 'Эсептөө валютасы',
      currencyGroupAria: 'Валютаны тандоо',
      currencyKgsLabel: 'Сом (KGS)',
      kgsUnit: 'сом',
      breedGroupAria: 'Тукуму боюнча чыпка',
      disciplineLabel: 'Багыты:',
      emptyTitle: 'Тандалган талаптар боюнча учурда каталогдо жылкы жок',
      emptyBody:
        'Чыпканы тазалаңыз же 2025–2026-жылкы жабык кулун-тайлардан тандоо үчүн өтүнмө калтырыңыз.',
      resetFilters: 'Чыпканы тазалоо',
      yearSuffix: 'ж.т.',
      heightUnit: 'см',
      passportCta: 'Паспорт жана санжыра',
      cardAriaPrefix: 'Паспортту жана санжыраны ачуу:',
      breedTabs: [
        { id: 'all', label: 'Бардык тукумдар' },
        { id: 'akhal-teke', label: 'Ахалтеке' },
        { id: 'thoroughbred', label: 'Англис мингич' },
        { id: 'new-kyrgyz', label: 'Жаңы кыргыз' },
        { id: 'arabian', label: 'Араб' },
        { id: 'hanoverian', label: 'Ганновер' },
        { id: 'orlov', label: 'Орлов таскагы' },
        { id: 'don', label: 'Дон' },
        { id: 'friesian', label: 'Фриз' },
        { id: 'karabair', label: 'Карабайыр' },
      ],
      disciplineTabs: [
        { id: 'all', label: 'Бардык багыттар' },
        { id: 'racing', label: 'Ат чабыш жана байге' },
        { id: 'dressage', label: 'Сейилдөө жана шоу' },
        { id: 'breeding', label: 'Тукум улоо' },
      ],
    },
    horses: {
      'ak-shumkar': {
        name: 'Ак-Шумкар',
        breed: 'Ахалтеке',
        gender: 'Айгыр',
        coat: 'Алтын-буурул',
        line: 'Каплан тукуму',
        registryId: 'ВНИИК № AT-0849',
        discipline: 'Сейилдөө жана тукум улоо',
        availability: 'Көрүүгө даяр',
        vetSummary:
          'Муундардын толук рентген-текшерүүсү (ноябрь 2026), спортко жана тукум улоого чектөөсү жок.',
        description:
          'Металлдай жылтыраган түсү, кургак тарамыштары жана эркин кадам таштоосу менен айырмаланган Каплан тукумунун эталондук өкүлү. Жаш жылкылар программасы боюнча даярдалган.',
        imageAlt:
          'Таш короодо турган алтын-буурул түстүү Ак-Шумкар ахалтеке айгырынын сүрөтү',
        pedigree: {
          sire: { name: 'Гайрат-Шах', origin: 'Каплан тукуму · 2014' },
          dam: { name: 'Мерджен-Ай', origin: 'Гелишикли тукуму · 2015' },
          paternalGrandsire: { name: 'Кара-Куш', origin: 'Тукум чемпиону · ВНИИК' },
          paternalGranddam: { name: 'Алтын-Гюль', origin: 'Ашхабад тукуму' },
          maternalGrandsire: { name: 'Сейит-Хан', origin: 'Элита классы' },
          maternalGranddam: { name: 'Дана-Биби', origin: 'Каракум заводу' },
        },
      },
      'khan-tengri': {
        name: 'Хан-Теңир',
        breed: 'Англис мингич',
        gender: 'Айгыр',
        coat: 'Кочкул тору',
        line: 'Northern Dancer тукуму',
        registryId: 'Jockey Club № TB-4118',
        discipline: 'Алыскы аралыкка ат чабыш',
        availability: '2027-жылкы сезонго даяр',
        vetSummary:
          'Жогорку дем алуу жолдорунун эндоскопиясы жана рентген-протоколу таза. FEI эмдөөсү бар.',
        description:
          'Ирландия селекциясындагы алынып келинген бээден Кичи-Жаргылчакта туулган. Күчтүү ийини, кең көкүрөгү жана бийик тоолуу аймакка ыңгайлашкан дем алуу туруктуулугу бар.',
        imageAlt:
          'Тоолордогу таңкы тумандын фонунда турган кочкул тору англис мингич Хан-Теңир айгыры',
        pedigree: {
          sire: { name: 'Royal Ascot Pride', origin: 'Улуу Британия · 2015' },
          dam: { name: 'Lady Emerald', origin: 'Ирландия · 2016' },
          paternalGrandsire: { name: 'Galileo Star', origin: 'Sadler’s Wells тукуму' },
          paternalGranddam: { name: 'Silver Sovereign', origin: 'Ньюмаркет' },
          maternalGrandsire: { name: 'Danehill Crest', origin: 'Danzig тукуму' },
          maternalGranddam: { name: 'Kildare Rose', origin: 'Дублин китеби' },
        },
      },
      'kara-baiyr': {
        name: 'Кара-Байыр',
        breed: 'Жаңы кыргыз',
        gender: 'Айгыр',
        coat: 'Кара',
        line: 'Ала-Тоо Алтын тукуму',
        registryId: 'МТК КР № NK-1904',
        discipline: 'Аламан байге жана алыскы жүрүштөр',
        availability: 'Көрүүгө даяр',
        vetSummary:
          '1 650 м бийиктикте чабыктан кийин тамыр кагышы тез калыбына келет. Тарамыштары бекем.',
        description:
          'Дон жана араб каны кошулуп жакшыртылган жаңы кыргыз тукумундагы кара айгыр. Тең салмактуулугу мыкты, туягы бекем жана токулганда мүнөзү токтоо.',
        imageAlt:
          'Теңир-Тоонун жашыл боорлорунун фонундагы кара түстүү Кара-Байыр жаңы кыргыз айгыры',
        pedigree: {
          sire: { name: 'Алтын-Тай', origin: 'Ысык-Көл · 2013' },
          dam: { name: 'Бермет-Кыз', origin: 'Чүй өрөөнү · 2015' },
          paternalGrandsire: { name: 'Тулпар-Бек', origin: 'Аламан байге жеңүүчүсү' },
          paternalGranddam: { name: 'Сайкал', origin: 'Нарын заводу' },
          maternalGrandsire: { name: 'Бүркүт-Араб', origin: 'Таза кандуу араб' },
          maternalGranddam: { name: 'Чолпон', origin: 'Кыргыз МТК' },
        },
      },
      'ai-peri': {
        name: 'Ай-Пери',
        breed: 'Ахалтеке',
        gender: 'Бээ',
        coat: 'Көк боз (алма боз)',
        line: 'Гундогар тукуму',
        registryId: 'ВНИИК № AT-0621',
        discipline: 'Тукум улоо жана конкур',
        availability: 'Экспортко даяр',
        vetSummary:
          'А категориясындагы УЗИ репродуктивдик корутундусу, тукумунун сапаты текшерилген (2025-ж. эркек кулуну бар).',
        description:
          'Көрктүү баш түзүлүшү, жеңил секирүүсү жана кынтыксыз энелик тукуму бар асыл тукум бээ. Жеке чарбанын негизги үйүрүн түзүү үчүн сунушталат.',
        imageAlt: 'Аткана алдындагы таш аянтчада турган көк боз Ай-Пери асыл тукум бээси',
        pedigree: {
          sire: { name: 'Доркуш', origin: 'Гундогар тукуму · 2012' },
          dam: { name: 'Ак-Марал', origin: 'Ель тукуму · 2014' },
          paternalGrandsire: { name: 'Арслан', origin: 'Элита классы' },
          paternalGranddam: { name: 'Гүлжан', origin: 'Спорт-сейилдөө' },
          maternalGrandsire: { name: 'Ярты-Гулак', origin: 'Тукум өндүрүүчү' },
          maternalGranddam: { name: 'Кызыл-Ай', origin: 'Ысык-Көл заводу' },
        },
      },
      'amir-shah': {
        name: 'Амир-Шах',
        breed: 'Таза кандуу араб',
        gender: 'Айгыр',
        coat: 'Жээрде',
        line: 'Кухайлан-Сиглави тукуму',
        registryId: 'WAHO / ВНИИК № AR-2214',
        discipline: '120 км алыскы жүрүш жана шоу',
        availability: 'Көрүүгө даяр',
        vetSummary:
          'Жүрөк-кан тамыр жана зат алмашуу профили таза, эл аралык FEI CEI 2* жүрүштөрүнө уруксат берилген.',
        description:
          'Башы ичке, куйругун бийик көтөргөн жана тоолуу аралыктарда дем алуу туруктуулугу жогору таза кандуу араб айгыры.',
        imageAlt:
          'Таш короодо турган жээрде түстүү таза кандуу Амир-Шах араб айгырынын сүрөтү',
        pedigree: {
          sire: { name: 'Nadir Al-Sabah', origin: 'БАЭ / WAHO · 2014' },
          dam: { name: 'Зухра-Сиглави', origin: 'Терск заводу · 2015' },
          paternalGrandsire: { name: 'Marwan Al Shaqab', origin: 'Дүйнө чемпиону · Катар' },
          paternalGranddam: { name: 'Bint Ghazala', origin: 'Абу-Даби' },
          maternalGrandsire: { name: 'Победитель-II', origin: 'Кохейлан тукуму' },
          maternalGranddam: { name: 'Нефертити', origin: 'Терск селекциясы' },
        },
      },
      kronprinz: {
        name: 'Кронпринц',
        breed: 'Ганновер',
        gender: 'Айгыр',
        coat: 'Кочкул тору',
        line: 'Donnerhall / Sandro Hit тукуму',
        registryId: 'Hannoveraner № DE-7730',
        discipline: '140 см конкур жана Чоң байге',
        availability: 'Ысык-Көлдө машыгууда',
        vetSummary:
          'Омуртка жана бут муундарынын санариптик рентгени таза (октябрь 2026). Толук FEI паспорту.',
        description:
          'Кубаттуу арткы түртүүсү жана ритмдүү жүрүшү бар немис селекциясындагы ири спорттук айгыр. 135–140 см бийиктиктеги конкур маршруттарына даяр.',
        imageAlt: 'Жыгач аткананын жанында турган кочкул тору ганновер айгыры Кронпринц',
        pedigree: {
          sire: { name: 'Don Frederic', origin: 'Германия · 2013' },
          dam: { name: 'St.Pr.St. Bellissima', origin: 'Ганновер союзу · 2014' },
          paternalGrandsire: { name: 'Don Schufro', origin: 'Donnerhall тукуму' },
          paternalGranddam: { name: 'Cleopatra', origin: 'Ольденбург' },
          maternalGrandsire: { name: 'Sandro Hit', origin: 'Элита өндүрүүчү' },
          maternalGranddam: { name: 'Weltmeyer Lady', origin: 'Верден' },
        },
      },
      'buran-orlov': {
        name: 'Буран-Орлов',
        breed: 'Орлов таскагы',
        gender: 'Айгыр',
        coat: 'Ачык боз (алма боз)',
        line: 'Пион тукуму',
        registryId: 'ВНИИК № OR-3309',
        discipline: 'Таскак жарыш жана салтанаттуу жүрүш',
        availability: 'Көрүүгө даяр',
        vetSummary: 'Муундары кургак жана таза, 1 600 м аралыкта арабада жана токулуп сыналган.',
        description:
          'Пион тукумунун классикалык тибиндеги көрктүү боз орлов таскагы. Туруктуу бийик таскагы, куу моюну жана жоош мүнөзү менен айырмаланат.',
        imageAlt: 'Аткана жолунда турган ачык боз Буран-Орлов таскак айгыры',
        pedigree: {
          sire: { name: 'Колорит-Пион', origin: 'Хренов заводу · 2013' },
          dam: { name: 'Метелица', origin: 'Москва заводу · 2015' },
          paternalGrandsire: { name: 'Попрёк', origin: 'Ипподром рекордчусу' },
          paternalGranddam: { name: 'Купава', origin: 'Барчук тукуму' },
          maternalGrandsire: { name: 'Кипр', origin: 'Отбой тукуму' },
          maternalGranddam: { name: 'Молния', origin: 'Негизги үйүр' },
        },
      },
      zlatoyar: {
        name: 'Златояр',
        breed: 'Дон',
        gender: 'Айгыр',
        coat: 'Алтын-жээрде',
        line: 'Бруч тукуму',
        registryId: 'ВНИИК № DN-1182',
        discipline: 'Үч таймаш, көк бөрү жана жүрүш',
        availability: 'Көрүүгө даяр',
        vetSummary:
          'Сөөк тыгыздыгы жогору, бийик тоолуу аба ырайынын өзгөрүүсүнө туруктуу.',
        description:
          'Колодой алтын түскө бөлөнгөн дон тукумундагы айгыр. Чыгыш көрктүүлүгүн, кең белин жана талаа үйүрүнүн чыдамкайлыгын айкалыштырат.',
        imageAlt: 'Ак карлуу тоолордун фонунда турган алтын-жээрде Златояр дон айгыры',
        pedigree: {
          sire: { name: 'Бамбук-Дон', origin: 'Будённов заводу · 2014' },
          dam: { name: 'Забава-Степь', origin: 'Ростов облусу · 2016' },
          paternalGrandsire: { name: 'Бруч', origin: 'Элита классы' },
          paternalGranddam: { name: 'Слава', origin: 'Барвинок тукуму' },
          maternalGrandsire: { name: 'Габардин', origin: 'Гульсын тукуму' },
          maternalGranddam: { name: 'Золушка', origin: 'Дон студбугу' },
        },
      },
      'black-baron': {
        name: 'Блэк-Барон',
        breed: 'Фриз',
        gender: 'Айгыр',
        coat: 'Кара',
        line: 'Jasper 366 тукуму',
        registryId: 'KFPS № NL-9041',
        discipline: 'Классикалык сейилдөө жана шоу',
        availability: 'Кичи-Жаргылчакта бар',
        vetSummary:
          'KFPS генетикалык тести толук таза (гидроцефалия жана кодоолук жок), рентген-сүрөттөрү кынтыксыз.',
        description:
          'Коюу тармал жалы жана бийик кадам таштоосу бар таза кандуу кара фриз айгыры. Орто деңгээлдеги сейилдөө элементтерине үйрөтүлгөн.',
        imageAlt: 'Таш аткананын жанында турган коюу жалдуу кара фриз айгыры Блэк-Барон',
        pedigree: {
          sire: { name: 'Tsjalle 454', origin: 'Нидерланд · KFPS Preferent' },
          dam: { name: 'Froukje fan ’e Alddyk', origin: 'Фрисландия · Ster Mare' },
          paternalGrandsire: { name: 'Mintse 384', origin: 'Jasper 366 тукуму' },
          paternalGranddam: { name: 'Welmoed', origin: 'Model Preferent' },
          maternalGrandsire: { name: 'Norbert 444', origin: 'KFPS чемпиону' },
          maternalGranddam: { name: 'Sjoukje', origin: 'KFPS № 1 китеби' },
        },
      },
      zarina: {
        name: 'Зарина',
        breed: 'Карабайыр',
        gender: 'Бээ',
        coat: 'Тору',
        line: 'Самарканд-Бахтиёр тукуму',
        registryId: 'БА МТК № KB-0473',
        discipline: 'Тоолуу жүрүш жана тукум улоо',
        availability: 'Көрүүгө даяр',
        vetSummary: 'Таштак тоо жолдорунда туруктуу, репродуктивдик саламаттыгы текшерилген.',
        description:
          'Борбор Азиянын элиталык карабайыр тукумундагы бээ. Белинин бекемдиги, ийкемдүүлүгү жана спорттук аргын тукум алуудагы жогорку натыйжалуулугу менен бааланат.',
        imageAlt:
          'Теңир-Тоо кыркаларынын фонунда тоо жайытында турган тору карабайыр бээ Зарина',
        pedigree: {
          sire: { name: 'Шохрух-Бахтиёр', origin: 'Самарканд · 2014' },
          dam: { name: 'Дильбар', origin: 'Фергана өрөөнү · 2015' },
          paternalGrandsire: { name: 'Кайрат', origin: 'Учкудук тукуму' },
          paternalGranddam: { name: 'Гульчехра', origin: 'Карабайыр заводу' },
          maternalGrandsire: { name: 'Таймас', origin: 'Улак-көк бөрү жеңүүчүсү' },
          maternalGranddam: { name: 'Саодат', origin: 'Борбор Азия китеби' },
        },
      },
      'korkom-peri': {
        name: 'Көркөм-Пери',
        breed: 'Жаңы кыргыз',
        gender: 'Бээ',
        coat: 'Алтын-сары (ак жал)',
        line: 'Ысык-Көл Алтын тукуму',
        registryId: 'МТК КР № NK-2148',
        discipline: 'Тукум улоо жана алыскы жүрүштөр',
        availability: 'Кичи-Жаргылчакта бар',
        vetSummary:
          'А категориясындагы УЗИ репродуктивдик корутундусу, таза рентген жана 1 650 м бийиктикте тамыр кагышы туруктуу.',
        description:
          'Ак жалдуу, буттары кургак жана жүрүшү жеңил, жакшыртылган жаңы кыргыз тукумундагы көрктүү алтын-сары бээ. Асыл тукум үйүр түзүүгө да, тоолуу алыскы жүрүштөргө да мыкты.',
        imageAlt:
          'Ысык-Көлдүн жээгиндеги жашыл жайытта турган алтын-сары жаңы кыргыз бээси Көркөм-Пери',
        pedigree: {
          sire: { name: 'Ак-Булак', origin: 'Ысык-Көл · 2014' },
          dam: { name: 'Жаркын-Ай', origin: 'Жети-Өгүз · 2016' },
          paternalGrandsire: { name: 'Алтын-Тай', origin: 'МТК КР Элита классы' },
          paternalGranddam: { name: 'Айгүл', origin: 'Нарын тукуму' },
          maternalGrandsire: { name: 'Гүлсары', origin: 'Алыскы жүрүш рекордчусу' },
          maternalGranddam: { name: 'Керемет', origin: 'Ысык-Көл заводу' },
        },
      },
    },
    modal: {
      closeAria: 'Жылкынын картасын жабуу',
      withersHeight: 'Шокого чейинки бийиктиги',
      chestGirth: 'Көкүрөк айланасы',
      cannonBone: 'Шыйрак жоондугу',
      isoChip: 'ISO чип',
      cmUnit: 'см',
      vetTitle: 'Ветеринардык абалы жана рентген-көзөмөл',
      pedigreeTitle: 'Үч муундагы санжырасы',
      paternalBranch: 'Атасынын тукуму',
      maternalBranch: 'Энесинин тукуму',
      sireLabel: 'Атасы',
      damLabel: 'Энеси',
      paternalGrandsireLabel: 'Чоң атасы (АА)',
      paternalGranddamLabel: 'Чоң энеси (АЭ)',
      maternalGrandsireLabel: 'Таятасы (ЭА)',
      maternalGranddamLabel: 'Таенеси (ЭЭ)',
      priceNote: 'Толук документ пакети менен баасы',
      bookCta: 'Көрүүгө жазылуу',
    },
    estate: {
      kicker: 'Инфратүзүм жана селекция',
      title: 'Ысык-Көлдүн түштүк жээгиндеги толук циклдүү тоолуу завод',
      directorLabel: 'Заводдун жетекчиси',
      directorName: 'Исмаилов Улан Жумабекович',
      fallbackTitle: 'Кичи-Жаргылчак комплекси · Ысык-Көл',
      imageAlt:
        'Ысык-Көл облусунун Жети-Өгүз районундагы Кичи-Жаргылчак айылында жайгашкан «Ала-Тоо Асыл Тукум» аткана комплекси',
      capabilities: [
        {
          index: '01',
          title: 'Генетикалык тандоо жана лабораториялык аудит',
          body: 'Ар бир жуп санжыранын ДНК-тестирлөөсү, инбридинг талдоосу жана ВНИИК менен эл аралык китептерге катталган экстерьердик көрсөткүчтөр аркылуу түзүлөт.',
        },
        {
          index: '02',
          title: 'Кичи-Жаргылчак айылындагы бийик тоолуу тарбиялоо',
          body: 'Кулундар жана негизги үйүр Жети-Өгүз районундагы 1 650 метр бийиктиктеги жайыттарда багылып, өпкөнүн көлөмүн, бекем сөөк түзүлүшүн жана табигый иммунитетти калыптандырат.',
        },
        {
          index: '03',
          title: 'Ветеринардык протокол жана рентген-чек',
          body: 'Ээсине өткөрүп берээр алдында FEI стандарттары боюнча көз карандысыз клиникалык кароо, буттардын санариптик рентгени жана эндоскопия жүргүзүлөт.',
        },
        {
          index: '04',
          title: 'Бажылык тариздөө жана жеткирүү',
          body: 'Казакстан, Россия, Өзбекстан жана БАЭге атайын ат ташуучу унаалар жана учак аркылуу жеткирүү үчүн карантиндик жана экспорттук документтерди толук даярдайбыз.',
        },
      ],
    },
    standards: {
      kicker: 'Тукум багыттары',
      title: 'Заводдун асыл тукум багыттарын салыштыруу',
      columns: {
        breed: 'Тукуму',
        origin: 'Негизги линиялар',
        height: 'Бийиктиги',
        focus: 'Спорттук багыты',
        documents: 'Документтери',
      },
      rows: [
        {
          breed: 'Ахалтеке',
          origin: 'Каплан, Гундогар, Гелишикли',
          height: '158–164 см',
          focus: 'Сейилдөө, шоу-класстар, тукум улоо',
          documents: 'ВНИИК паспорту, ДНК-профиль, ISO чип',
        },
        {
          breed: 'Англис мингич',
          origin: 'Northern Dancer, Danzig, Mr. Prospector',
          height: '164–170 см',
          focus: 'Классикалык ат чабыш, тоскоолдук спорт',
          documents: 'Jockey Club / FEI паспорту, карантин барагы',
        },
        {
          breed: 'Жаңы кыргыз спорттук',
          origin: 'Ала-Тоо Алтын, жакшыртылган селекция',
          height: '156–162 см',
          focus: 'Аламан байге, көк бөрү, 80–120 км жүрүштөр',
          documents: 'КР Мамлекеттик племенная китеби, ISO чип',
        },
        {
          breed: 'Араб жана Дон',
          origin: 'Кухайлан-Сиглави, Бруч',
          height: '154–165 см',
          focus: 'FEI алыскы жүрүштөрү, үч таймаш, шоу',
          documents: 'WAHO / ВНИИК, кардио- жана рентген-протокол',
        },
        {
          breed: 'Ганновер жана Фриз',
          origin: 'Donnerhall, Sandro Hit, Jasper 366',
          height: '165–173 см',
          focus: '140 см конкур, Чоң байге, салтанаттуу жүрүш',
          documents: 'Hannoveraner / KFPS, FEI паспорту, рентген-чек',
        },
        {
          breed: 'Орлов таскагы жана Карабайыр',
          origin: 'Пион, Самарканд-Бахтиёр',
          height: '156–166 см',
          focus: 'Таскак жарыш, тоо спорту, көк бөрү',
          documents: 'ВНИИК / БА МТК, ДНК-профиль, ISO чип',
        },
      ],
      testimonials: [
        {
          quote:
            'Алматыдагы ат чабыш бөлүмүбүз үчүн Northern Dancer тукумундагы эки жашар айгыр алдык. Ысык-Көлдөгү тоолуу машыгуунун аркасында жылкы көнүгүүсүз өтүп, 1 800 метрдик сезон ачылыш байгесин утуп алды.',
          author: 'Тимур Асанов',
          role: '«Тулпар-Арена» ат спорту клубунун башкаруучусу, Алматы',
        },
        {
          quote:
            'Документтердин ачыктыгы баарын чечти: рентген сүрөттөрүн жана ВНИИК ДНК-тастыктоосун Кыргызстанга учуп келерибизге бир жума калганда жөнөтүштү. Кичи-Жаргылчактан тандап алган алтын-буурул бээбиз Ташкентке эки суткада жеткирилди.',
          author: 'Шерзод Каримов',
          role: 'Жеке селекционер, «Заркент» асыл тукум чарбасы, Ташкент',
        },
      ],
    },
    contact: {
      kicker: 'Заводдо жеке көрүү',
      title: 'Аттарды көрсөтүүнү жана вет-чекти уюштурабыз',
      subtitle:
        'Селекционерлерди, машыктыруучуларды жана ат клубдарынын ээлерин Ысык-Көл облусунун Жети-Өгүз районундагы Кичи-Жаргылчак айылына чакырабыз же ветеринардык дарыгериңиздин катышуусунда онлайн-көрсөтүү өткөрөбүз.',
      addressTitle: 'Комплекстин дареги',
      addressValue:
        'Кыргыз Республикасы, Ысык-Көл облусу, Жети-Өгүз району, Кичи-Жаргылчак айылы',
      directorTitle: 'Заводдун жетекчиси',
      directorValue: 'Исмаилов Улан Жумабекович',
      phoneTitle: 'Селекция жана экспорт бөлүмү',
      hoursTitle: 'Кабыл алуу графиги',
      hoursValue: 'Алдын ала жазылуу боюнча күн сайын 08:30дан 18:00гө чейин',
      successBadgePrefix: 'Өтүнмө',
      successBadgeSuffix: 'катталды',
      successTitlePrefix: 'Кайрылганыңызга рахмат,',
      successBodyBeforePhone: 'Асыл тукум фондунун башкаруучусу сиз менен',
      successBodyBetweenPhoneAndInterest:
        'номери аркылуу жумуш күнү ичинде байланышып, көрүү убактысын макулдашат жана «',
      successBodyAfterInterest: '» боюнча санжыра пакетин жөнөтөт.',
      submitAnother: 'Дагы бир өтүнмө жөнөтүү',
      nameLabel: 'Аты-жөнү *',
      namePlaceholder: 'Бактыбек Садыков',
      phoneLabel: 'Телефон / WhatsApp *',
      phonePlaceholder: '+996 555 000 000',
      emailLabel: 'Электрондук почта (документтерди жөнөтүү үчүн)',
      emailPlaceholder: 'owner@club.kg',
      interestLabel: 'Кызыктырган жылкы же тукум',
      interestGeneral: 'Үйүр боюнча жалпы консультация',
      interestYoungstock: '2025–2026-жылкы кулун-тайларды тандоо',
      visitFormatLabel: 'Таанышуу форматы',
      visitOnsite: 'Кичи-Жаргылчакка жеке баруу',
      visitVideo: 'Онлайн-көрсөтүү жана рентген пакети',
      commentLabel: 'Комментарий же жеткирүү өлкөсү',
      commentPlaceholder: 'Каалаган келүү күнүн, спорттук милдетин же жеткирүү аймагын жазыңыз...',
      privacyNote: 'Бардык маалыматтар көрүүнү жана документтерди макулдашуу үчүн гана колдонулат.',
      submitCta: 'Өтүнмө жөнөтүү',
      errors: {
        name: 'Аты-жөнүңүздү жазыңыз (кеминде 2 белги).',
        phone: 'Байланыш үчүн туура телефон номерин киргизиңиз.',
        email: 'Электрондук почтанын форматын текшериңиз.',
      },
    },
    map: {
      kicker: 'Google Картадагы жайгашуусу',
      title: 'Ысык-Көлдүн түштүк жээги · Кичи-Жаргылчак а.',
      subtitle:
        'Жети-Өгүз району, деңиз деңгээлинен 1 650 м бийиктикте. Тамчы жана Каракол тараптагы A363 жолунан ыңгайлуу бурулуш.',
      viewModes: {
        roadmap: 'Схема',
        terrain: 'Рельеф',
        hybrid: 'Спутник',
      },
      recenterLabel: 'Борборлоштуруу',
      openDirectionsLabel: 'Google Картадан багыт алуу',
      loadingLabel: 'Карта жана комплекстин координаттары жүктөлүүдө...',
      unavailableTitle: 'Карта убактылуу жеткиликсиз',
      unavailableBody:
        'Интерактивдүү Google Картаны жүктөө мүмкүн болбоду. Заводдун дареги боюнча маршрутту түз ачсаңыз болот.',
      coordinatesLabel: 'Координаттар',
      elevationBadge: 'Жайыт бийиктиги 1 650 м',
      infoTitle: '«Ала-Тоо Асыл Тукум» асыл тукум заводу',
      infoHours: 'Жазылуу боюнча · 08:30–18:00',
    },
    footer: {
      tagline:
        'Асыл тукум жылкы заводу · Ысык-Көл облусу, Жети-Өгүз району, Кичи-Жаргылчак а. · © 2026',
      links: {
        catalog: 'Жылкылар',
        estate: 'Инфратүзүм',
        standards: 'Тукум стандарттары',
        contact: 'Көрүүгө жазылуу',
      },
    },
    chat: {
      launcherLabel: 'Кеңешчи',
      launcherAria: 'Асыл тукум заводунун кеңешчи чатын ачуу',
      panelTitle: 'Жылкы тандоо кеңешчиси',
      panelSubtitle: 'Ала-Тоо Асыл Тукум · Кичи-Жаргылчак',
      resetAria: 'Жаңы маек баштоо',
      closeAria: 'Чатты жабуу',
      welcomeMessage:
        'Саламатсызбы. Кичи-Жаргылчак айылындагы (Ысык-Көл) заводубуздан асыл тукум жылкы тандоого, санжырасын, ветеринардык абалын жана жеткирүү шарттарын тактоого жардам берем.',
      suggestionsLabel: 'Көп берилүүчү суроолор:',
      suggestions: [
        'Ат чабыш жана байгеге кайсы айгырды сунуштайсыз?',
        'Баасына кандай документтер жана рентген кирет?',
        'Казакстанга же БАЭге жеткирүү кандай уюштурулат?',
      ],
      thinkingLabel: 'Маалымат такталууда...',
      bookingHint: 'Кичи-Жаргылчакка көрүүгө даярсызбы?',
      bookingLink: 'Жазылуу формасы',
      inputPlaceholder: 'Жылкылар же жеткирүү тууралуу суроо жазыңыз...',
      sendAria: 'Билдирүү жөнөтүү',
      errorMissingKey:
        'Кеңешчи кызматы серверде API ачкычын жөндөөнү талап кылат (Settings > Secrets).',
      errorGeneric: 'Жооп алууга мүмкүн болбоду. Бир аздан кийин кайра аракет кылыңыз.',
    },
  },
};
