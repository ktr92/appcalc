import {
  createStore
} from 'vuex'

export default createStore({
  state: {

    /*   target: 2, // 0 - снижение, 1 - набор массы, 2 - поддержанеи массы
    height: 160, // 160 - 
    weight: 35, // 35 -  */

    selectedType: 'men',
    selectedAge: 18,
    selectedPregnant: null,
    selectedHeight: 170,
    selectedWeight: 60,
    selectedActivity: 1.55,
    selectedTarget: [0.3, 0.3, 0.4],
    calories: 2275 ,
    proteins: 0,
    fats: 0,
    carbohydrates: 0,
    volokna: 20,
    mnjk: 0,
    pnjk: [0, 0],
    omega6: [0, 0],
    omega3: [0, 0],
    lipides: [0, 0],
    

    supplements: [

      {
        id: "m014",
        name: "GNC, Mega Men, клинически изученные мультивитамины для мужчин, для энергии и метаболизма",
        description: "Сильный антиоксидантный эффект и более 30 клинически изученных ингредиентов в каждой формуле — в небольших таблетках, которые легче глотать.",
        url: "https://ru.iherb.com/pr/gnc-mega-men-energy-metabolism-clinically-studied-multivitamin-90-time-release-caplets/104214?rcode=DEP4540",
        img: "https://s3.images-iherb.com/gmn/gmn15492/y/13.jpg",
        who: "men",
        weight: "0",
        activity: "1.725",
        pregnantTo: '0',
        pregnantFrom: '0',
        ageFrom: "18",
        ageTo: "49"
      },

      {
        id: "m013",
        name: "Vplab, Ultra Men’s, мультивитамины для мужчин для физической активности, 90 капсул",
        description: "Комплекс мультивитаминов с повышенной силой действия. Способствует нормальной работе сердца и мышц.",
        url: "https://ru.iherb.com/pr/vplab-ultra-men-s-sport-multivitamin-formula-90-caplets/102579?rcode=DEP4540",
        img: "https://s3.images-iherb.com/vpb/vpb54130/y/24.jpg",
        who: "men",
        weight: "0",
        activity: "1.725",
        pregnantTo: '0',
        pregnantFrom: '0',
        ageFrom: "18",
        ageTo: "49"
      },

      {
        id: "m012",
        name: "Rainbow Light, Men's One, мультивитамины для мужчин, 150 таблеток",
        description: "Поддерживает здоровье иммунной системы, костей и мозга. Смесь суперпродуктов с пробиотиками Rainbow.",
        url: "https://ru.iherb.com/pr/rainbow-light-men-s-one-multivitamin-150-tablets/14194?rcode=DEP4540",
        img: "https://s3.images-iherb.com/rlt/rlt10893/y/83.jpg",
        who: "men",
        weight: "0",
        activity: "1.2",
        pregnantTo: '0',
        pregnantFrom: '0',
        ageFrom: "18",
        ageTo: "39"
      },

      {
        id: "m011",
        name: "Garden of Life, MyKind Organics, мультивитамины из цельных продуктов для мужчин от 40 лет, 120 веганских таблеток",
        description: "Мультивитамины из цельных пищевых продуктов — это сертифицированный органический продукт из натуральных питательных пищевых продуктов, проверенный на отсутствие ГМО.",
        url: "https://ru.iherb.com/pr/garden-of-life-mykind-organics-men-s-multi-40-whole-food-multivitamin-120-vegan-tablets/58121?rcode=DEP4540",
        img: "https://s3.images-iherb.com/gol/gol11769/y/36.jpg",
        who: "men",
        weight: "0",
        activity: "1.2",
        pregnantTo: '0',
        pregnantFrom: '0',
        ageFrom: "40",
        ageTo: "55"
      },



      {
        id: "m001",
        name: "Now Foods, ADAM, Мультивитамины для мужчин, 180 мягких таблеток",
        description: "С сереноей, растительными стеролами, ликопином и коэнзимом Q10. Мягкие капсулы легче проглатываются и усваиваются. Качество GMP.",
        url: "https://ru.iherb.com/pr/now-foods-adam-superior-men-s-multi-180-softgels/23364?rcode=DEP4540",
        img: "https://s3.images-iherb.com/now/now03881/l/49.jpg",
        who: "men",
        weight: "80",
        pregnantTo: '0',
        pregnantFrom: '0',
        activity: "1.2",
        ageFrom: "18",
        ageTo: "49"
      },

      {
        id: "m003",
        name: "Nature Made, Мультивитамины для мужчин, 90 таблеток",
        description: "22 ключевых питательных веществ для ежедневной питательной поддержки. Сертифицировано USP ",
        url: "https://ru.iherb.com/pr/nature-made-men-s-multi-90-tablets/40396?rcode=DEP4540",
        img: "https://s3.images-iherb.com/ndm/ndm01789/y/9.jpg",
        who: "men",
        weight: "50",
        pregnantTo: '0',
        pregnantFrom: '0',
        activity: "1.2",
        ageFrom: "18",
        ageTo: "49"
      },

      {
        id: "m007",
        name: "MegaFood, One Daily, добавка для мужчин старше 55 лет, 60 таблеток",
        description: "Этот продукт MegaFood сделан из натуральных продуктов, полезных пищевых дрожжей и добавленных питательных веществ. Пищевая добавка с мультивитаминами и минералами",
        url: "https://ru.iherb.com/pr/megafood-men-over-55-one-daily-60-tablets/83985?rcode=DEP4540",
        img: "https://s3.images-iherb.com/mgf/mgf10355/y/41.jpg",
        who: "men",
        weight: "50",
        pregnantTo: '0',
        pregnantFrom: '0',
        activity: "1.2",
        ageFrom: "55",
        ageTo: "9999"
      },


      {
        id: "m006",
        name: "New Chapter, Every Man's One Daily Multi, мультивитамины для мужчин старше 55 лет, вегетарианские таблетки",
        description: "Витаминный комплекс на основе цельных продуктов для поддержки иммунитета, здоровья сердца, пищеварения и простаты. 100% вегетарианский продукт. Не содержит искусственных ароматизаторов и красителей.",
        url: "https://ru.iherb.com/pr/new-chapter-55-every-man-s-one-daily-whole-food-multivitamin-72-vegetarian-tablets/73268?rcode=DEP4540",
        img: "https://s3.images-iherb.com/ncr/ncr90128/y/28.jpg",
        who: "men",
        weight: "50",
        pregnantTo: '0',
        pregnantFrom: '0',
        activity: "1.2",
        ageFrom: "55",
        ageTo: "9999"
      },

      {
        id: "m004",
        name: "Garden of Life, Vitamin Code, мультивитамины из цельных продуктов для мужчин от 50 лет, 120 вегетарианских капсул",
        description: "Мультивитамины из цельных пищевых продуктов. Добавка не содержит жаростойких синтетических связующих веществ, наполнителей, искусственных ароматизаторов, подсластителей, красителей и добавок.",
        url: "https://ru.iherb.com/pr/garden-of-life-vitamin-code-50-wiser-men-whole-food-multivitamin-120-vegetarian-capsules/14692?rcode=DEP4540",
        img: "https://s3.images-iherb.com/gol/gol11369/y/28.jpg",
        who: "men",
        weight: "50",
        pregnantTo: '0',
        pregnantFrom: '0',
        activity: "1.2",
        ageFrom: "50",
        ageTo: "9999"
      },

      {
        id: "m005",
        name: "Nature's Way, Alive! Полноценные жевательные мармеладки премиального качества для мужчин старше 50 лет",
        description: "15 витаминов и минералов с лютеином и ликопином. Полный комплекс витаминов группы B",
        url: "https://ru.iherb.com/pr/nature-s-way-alive-men-s-50-premium-gummies-complete-multivitamin-orange-grape-cherry-75-gummies/50922?rcode=DEP4540",
        img: "https://s3.images-iherb.com/nwy/nwy15898/y/29.jpg",
        who: "men",
        weight: "50",
        pregnantTo: '0',
        pregnantFrom: '0',
        activity: "1.2",
        ageFrom: "50",
        ageTo: "9999"
      },


      {
        id: "m002",
        name: "NATURELO, мультивитамины для мужчин старше 50 лет для приема один раз в день, 60 вегетарианских капсул",
        description: "Состав для поддержания энергии, иммунного здоровья и мышечных функций. Имеет регистрацию надлежащей производственной практики GMP",
        url: "https://ru.iherb.com/pr/naturelo-one-daily-multivitamin-for-men-50-60-vegetarian-capsules/92976?rcode=DEP4540",
        img: "https://s3.images-iherb.com/nau/nau62841/v/51.jpg",
        who: "men",
        weight: "0",
        activity: "1.2",
        pregnantTo: '0',
        pregnantFrom: '0',
        ageFrom: "50",
        ageTo: "999"
      },

      {
        id: "m008",
        name: "Thorne Research, мультивитамины для мужчин старше 50 лет, 180 капсул",
        description: "Мультивитамины без меди и железа! Содержит питательные вещества, которые легко усваиваются организмом,  разработан для людей с низким риском дефицита железа.",
        url: "https://ru.iherb.com/pr/thorne-research-men-s-multi-50-180-capsules/102917?rcode=DEP4540",
        img: "https://s3.images-iherb.com/thr/thr01132/y/8.jpg",
        who: "men",
        weight: "0",
        activity: "1.2",
        pregnantTo: '0',
        pregnantFrom: '0',
        ageFrom: "50",
        ageTo: "999"
      },


      {
        id: "m009",
        name: "Garden of Life, Vitamin Code, RAW One, мультивитаминная добавка для мужчин (для приема 1 раз в день)",
        description: "Готовый к употреблению цельнопищевой питательный препарат, специально разработанный с тем, чтобы удовлетворять уникальные потребности мужчин.",
        url: "https://ru.iherb.com/pr/garden-of-life-vitamin-code-raw-one-once-daily-multivitamin-for-men-75-vegetarian-capsules/18251?rcode=DEP4540",
        img: "https://s3.images-iherb.com/gol/gol11402/y/25.jpg",
        who: "men",
        weight: "0",
        activity: "1.2",
        pregnantTo: '0',
        pregnantFrom: '0',
        ageFrom: "18",
        ageTo: "49"
      },




      {
        id: "w008",
        name: "ALLMAX Nutrition, Vitaform, мультивитамин премиального качества для женщин, 60 таблеток",
        description: "Этот продукт удовлетворяет потребностям активных людей в высокой работоспособности. 100% рекомендуемой суточной нормы незаменимых питательных веществ",
        url: "https://ru.iherb.com/pr/allmax-nutrition-vitaform-premium-multi-vitamin-for-women-60-tablets/98035?rcode=DEP4540",
        img: "https://s3.images-iherb.com/amx/amx22880/y/16.jpg",
        who: "women",
        weight: "50",
        pregnantTo: '0',
        pregnantFrom: '0',
        activity: "1.725",
        ageFrom: "18",
        ageTo: "49"
      },


      {
        id: "w006",
        name: "MegaFood, Women Over 55, мультивитамины для женщин старше 55 лет, для приема один раз в день, 60 таблеток",
        description: "Этот клоомплекс от MegaFood сделан из натуральных продуктов, полезных пищевых дрожжей и добавленных питательных веществ.",
        url: "https://ru.iherb.com/pr/megafood-women-over-55-one-daily-60-tablets/83984?rcode=DEP4540",
        img: "https://s3.images-iherb.com/mgf/mgf10352/y/42.jpg",
        who: "women",
        weight: "50",
        pregnantTo: '0',
        pregnantFrom: '0',
        activity: "1.2",
        ageFrom: "55",
        ageTo: "999"
      },

      {
        id: "w005",
        name: "New Chapter, мультивитамины для женщин от 55 лет, один раз в день, 72 вегетарианские таблетки",
        description: "Органический состав сертифицирован International Certification Services, Inc. Специальный состав для лучшего усвоения",
        url: "https://ru.iherb.com/pr/new-chapter-55-every-woman-s-one-daily-multivitamin-72-vegetarian-tablets/73267?rcode=DEP4540",
        img: "https://s3.images-iherb.com/ncr/ncr90125/y/51.jpg",
        who: "women",
        weight: "50",
        pregnantTo: '0',
        pregnantFrom: '0',
        activity: "1.2",
        ageFrom: "55",
        ageTo: "999"
      },
      {
        id: "w007",
        name: "Thorne Research, мультивитамины для женщин старше 50 лет, 180 капсул",
        description: "Комплекс витаминов и микроэлементов, который поддерживает здоровый и активный образ жизни",
        url: "https://ru.iherb.com/pr/thorne-research-women-s-multi-50-180-capsules/102918?rcode=DEP4540",
        img: "https://s3.images-iherb.com/thr/thr01131/y/8.jpg",
        who: "women",
        weight: "50",
        pregnantTo: '0',
        pregnantFrom: '0',
        activity: "1.2",
        ageFrom: "50",
        ageTo: "999"
      },

      {
        id: "w004",
        name: "One-A-Day, полноценный мультивитаминный комплекс для женщин старше 50 лет, 100 таблеток",
        description: "Мультивитаминный комплекс с ингредиентами, необходимыми для поддержки женского здоровья после 50 лет.",
        url: "https://ru.iherb.com/pr/one-a-day-women-s-50-complete-multivitamin-100-tablets/69715?rcode=DEP4540",
        img: "https://s3.images-iherb.com/oad/oad56531/y/3.jpg",
        who: "women",
        weight: "50",
        pregnantTo: '0',
        pregnantFrom: '0',
        activity: "1.2",
        ageFrom: "50",
        ageTo: "999"
      },

      {
        id: "w003",
        name: "Nature's Way, Alive! жевательные витамины для женщин после 50 лет, со вкусом вишни и винограда, 75 жевательных таблеток",
        description: "Полноценная мультивитаминная добавка. 16 витаминов и минералов с лютеином. Полный комплекс витаминов группы B.",
        url: "https://ru.iherb.com/pr/nature-s-way-alive-women-s-50-gummy-vitamins-cherry-grape-75-gummies/50923?rcode=DEP4540",
        img: "https://s3.images-iherb.com/nwy/nwy15899/y/21.jpg",
        who: "women",
        weight: "50",
        pregnantTo: '0',
        pregnantFrom: '0',
        activity: "1.2",
        ageFrom: "50",
        ageTo: "999"
      },
      {
        id: "w002",
        name: "NATURELO, мультивитамины ежедневного применения для женщин старше 50 лет, 60 вегетарианских капсул",
        description: "Добавки премиального качества. Разработано для поддержки костей, сердца, мозга. Подходит для веганов и вегетарианцев.",
        url: "https://ru.iherb.com/pr/naturelo-one-daily-multivitamin-for-women-50-60-vegetarian-capsules/97677?rcode=DEP4540",
        img: "https://s3.images-iherb.com/nau/nau62805/y/59.jpg",
        who: "women",
        weight: "50",
        pregnantTo: '0',
        pregnantFrom: '0',
        activity: "1.2",
        ageFrom: "50",
        ageTo: "999"
      },


      {
        id: "w010",
        name: "Garden of Life, KIND Organics, Women's Once Daily, 60 веганских таблеток",
        description: "Цельнопищевой мультивитаминный комплекс, который прошел сертификацию как органический продукт, проверен на отсутствие ГМО и изготовлен из натуральных питательных продуктов.",
        url: "https://ru.iherb.com/pr/garden-of-life-mykind-organics-women-s-once-daily-60-vegan-tablets/58122?rcode=DEP4540",
        img: "https://s3.images-iherb.com/gol/gol11776/y/35.jpg",
        who: "women",
        weight: "50",
        pregnantTo: '0',
        pregnantFrom: '0',
        activity: "1.2",
        ageFrom: "18",
        ageTo: "29"
      },

      {
        id: "w011",
        name: "Garden of Life, Vitamin Code, RAW One, мультивитаминная добавка для женщин (для приема 1 раз в день)",
        description: "Добавка не содержит жаростойких синтетических связующих веществ, наполнителей, искусственных ароматизаторов, подсластителей, красителей и добавок, которые обычно используются при производстве таблеток.",
        url: "https://ru.iherb.com/pr/garden-of-life-vitamin-code-raw-one-once-daily-multivitamin-for-women-75-vegetarian-capsules/18253?rcode=DEP4540",
        img: "https://s3.images-iherb.com/gol/gol11403/y/80.jpg",
        who: "women",
        weight: "50",
        pregnantTo: '0',
        pregnantFrom: '0',
        activity: "1.2",
        ageFrom: "18",
        ageTo: "39"
      },

      {
        id: "w020",
        name: "Mommy's Bliss, пренатальные витамины с железом, 45 капсул",
        description: "Пренатальные витамины с железом содержат важнейшие витамины и питательные вещества.",
        url: "https://ru.iherb.com/pr/mommy-s-bliss-prenatal-multivitamin-iron-45-capsules/101987?rcode=DEP4540",
        img: "https://s3.images-iherb.com/bab/bab10627/y/0.jpg",
        who: "pregnant",
        weight: "50",
        pregnantTo: '2',
        pregnantFrom: '1',
        activity: "1.2",
        ageFrom: "18",
        ageTo: "999"
      },
      {
        id: "w019",
        name: "NATURELO, мультивитамины для послеродового периода для кормящих мам, 180 вегетарианских капсул",
        description: "Пищевые добавки премиального качества. Имеет регистрацию надлежащей производственной практики GMP, соответствует стандарту качества.",
        url: "https://ru.iherb.com/pr/naturelo-postnatal-multivitamin-for-breastfeeding-moms-180-vegetarian-capsules/97681?rcode=DEP4540",
        img: "https://s3.images-iherb.com/nau/nau62837/y/32.jpg",
        who: "pregnant",
        weight: "50",
        pregnantTo: '4',
        pregnantFrom: '3',
        activity: "1.2",
        ageFrom: "18",
        ageTo: "999"
      },


      {
        id: "w019",
        name: "New Chapter, Perfect Postnatal, мультивитамины из цельных продуктов, 96 вегетарианских таблеток",
        description: "Обеспечивает молодых мам ключевыми питательными веществами для хорошего самочувствия и иммунной поддержкой на ранних этапах материнства, а также при грудном вскармливании.",
        url: "https://ru.iherb.com/pr/new-chapter-perfect-postnatal-whole-food-multivitamin-96-vegetarian-tablets/82269?rcode=DEP4540",
        img: "https://s3.images-iherb.com/ncr/ncr90057/l/11.jpg",
        who: "pregnant",
        weight: "50",
        pregnantTo: '4',
        pregnantFrom: '3',
        activity: "1.2",
        ageFrom: "18",
        ageTo: "999"
      },


      {
        id: "w017",
        name: "Super Nutrition, Смесь PreNatal, 180 таблеток",
        description: "Для применения во время беременности и в послеродовой период.",
        url: "https://ru.iherb.com/pr/super-nutrition-prenatal-blend-180-tablets/3223?rcode=DEP4540",
        img: "https://s3.images-iherb.com/spn/spn00144/y/19.jpg",
        who: "pregnant",
        weight: "50",
        pregnantTo: '4',
        pregnantFrom: '1',
        activity: "1.2",
        ageFrom: "18",
        ageTo: "999"
      },
      {
        id: "w018",
        name: "MegaFood, Baby & Me 2, витамины для беременных, 60 таблеток",
        description: "Baby&Me 2 Prenatal Multi от MegaFood поддерживает оптимальное питание до и во время беременности за счет определенных уровней железа, витаминов B12, B6 и D3.",
        url: "https://ru.iherb.com/pr/megafood-baby-me-2-60-tablets/68213?rcode=DEP4540",
        img: "https://s3.images-iherb.com/mgf/mgf10314/y/53.jpg",
        who: "pregnant",
        weight: "50",
        pregnantTo: '2',
        pregnantFrom: '0',
        activity: "1.2",
        ageFrom: "18",
        ageTo: "999"
      },

      {
        id: "w016",
        name: "Garden of Life, Мультивитамины для женщин в возрасте старше 40 лет, цельнопищевой мультивитамин, 120 веганских таблеток",
        description: "Продукт изготовлен из настоящих пищевых продуктов — более 30 видов фруктов, овощей и трав.",
        url: "https://ru.iherb.com/pr/garden-of-life-women-s-multi-40-whole-food-multivitamin-120-vegan-tablets/58119?rcode=DEP4540",
        img: "https://s3.images-iherb.com/gol/gol11778/y/15.jpg",
        who: "women",
        weight: "50",
        pregnantTo: '0',
        pregnantFrom: '0',
        activity: "1.2",
        ageFrom: "40",
        ageTo: "55"
      },
      {
        id: "w015",
        name: "MegaFood, мультивитамины для женщин от 40 лет, 60 таблеток",
        description: "Смесь витаминов и микроэлементов обеспечивает уникальные физиологические потребности женщин, в том числе при колебаниях гормонального фона",
        url: "https://ru.iherb.com/pr/megafood-multi-for-women-40-60-tablets/68436?rcode=DEP4540",
        img: "https://s3.images-iherb.com/mgf/mgf10321/y/49.jpg",
        who: "women",
        weight: "50",
        pregnantTo: '0',
        pregnantFrom: '0',
        activity: "1.2",
        ageFrom: "40",
        ageTo: "55"
      },



      {
        id: "w001",
        name: "Now Foods, EVE, Мультивитамины для женщин, 180 капсул",
        description: "Содержит масло примулы вечерней, концентрат клюквы, экстракт зеленого чая, диоксид кремния и коэнзим Q10. Качество GMP.",
        url: "https://ru.iherb.com/pr/now-foods-eve-superior-women-s-multi-180-softgels/23363?rcode=DEP4540",
        img: "https://s3.images-iherb.com/now/now03803/l/76.jpg",
        who: "women",
        weight: "50",
        pregnantTo: '0',
        pregnantFrom: '0',
        activity: "1.2",
        ageFrom: "18",
        ageTo: "49"
      },


      {
        id: "w014",
        name: "Rainbow Light, Women's One Daily, витамины для женщины, 150 таблеток",
        description: "Поддерживает здоровье иммунной системы, костей и мозга. Смесь суперфудов с пробиотиками Rainbow.",
        url: "https://ru.iherb.com/pr/rainbow-light-women-s-one-multivitamin-150-tablets/12377?rcode=DEP4540",
        img: "https://s3.images-iherb.com/rlt/rlt10883/y/33.jpg",
        who: "women",
        weight: "50",
        pregnantTo: '0',
        pregnantFrom: '0',
        activity: "1.2",
        ageFrom: "18",
        ageTo: "49"
      },



      {
        id: "w012",
        name: "NATURELO, мультивитамины ежедневного применения для женщин,120 вегетарианских капсул",
        description: "Состав для поддержания энергии, иммунитета и здоровья костей. Надлежащая производственная практика (GMP)",
        url: "https://ru.iherb.com/pr/naturelo-one-daily-multivitamin-for-women-120-vegetable-capsules/92975?rcode=DEP4540",
        img: "https://s3.images-iherb.com/nau/nau62803/y/43.jpg",
        who: "women",
        weight: "50",
        pregnantTo: '0',
        pregnantFrom: '0',
        activity: "1.2",
        ageFrom: "18",
        ageTo: "49"
      },

      {
        id: "w021",
        name: "Now Foods, Special Two, мультивитамины, 240 растительных капсул",
        description: "С зелеными суперпродуктами и растительными экстрактами. Подходит для вегетарианцев и веганов.",
        url: "https://ru.iherb.com/pr/now-foods-special-two-multi-vitamin-240-veg-capsules/787?rcode=DEP4540",
        img: "https://s3.images-iherb.com/now/now03869/y/24.jpg",
        who: "women",
        weight: "50",
        pregnantTo: '0',
        pregnantFrom: '0',
        activity: "1.2",
        ageFrom: "18",
        ageTo: "49"
      },
      {
        id: "m027",
        name: "Now Foods, Special Two, мультивитамины, 240 растительных капсул",
        description: "С зелеными суперпродуктами и растительными экстрактами. Подходит для вегетарианцев и веганов.",
        url: "https://ru.iherb.com/pr/now-foods-special-two-multi-vitamin-240-veg-capsules/787?rcode=DEP4540",
        img: "https://s3.images-iherb.com/now/now03869/y/24.jpg",
        who: "men",
        weight: "50",
        pregnantTo: '0',
        pregnantFrom: '0',
        activity: "1.2",
        ageFrom: "18",
        ageTo: "49"
      },

      {
        id: "m022",
        name: "Now Foods, мягкие таблетки с жидкими мультивитаминами, 180 мягких таблеток",
        description: "Быстрое усвоение. Пищевая добавка с лютеином и ликопином + масло семян льна.",
        url: "https://ru.iherb.com/pr/now-foods-liquid-multi-gels-180-softgels/6112?rcode=DEP4540",
        img: "https://s3.images-iherb.com/now/now03817/y/9.jpg",
        who: "men",
        weight: "50",
        pregnantTo: '0',
        pregnantFrom: '0',
        activity: "1.2",
        ageFrom: "18",
        ageTo: "49"
      },


      {
        id: "w022",
        name: "Now Foods, мягкие таблетки с жидкими мультивитаминами, 180 мягких таблеток",
        description: "Быстрое усвоение. Пищевая добавка с лютеином и ликопином + масло семян льна.",
        url: "https://ru.iherb.com/pr/now-foods-liquid-multi-gels-180-softgels/6112?rcode=DEP4540",
        img: "https://s3.images-iherb.com/now/now03817/y/9.jpg",
        who: "women",
        weight: "50",
        pregnantTo: '0',
        pregnantFrom: '0',
        activity: "1.2",
        ageFrom: "18",
        ageTo: "49"
      },


      {
        id: "w023",
        name: "Natural Factors, Мультистарт для женщин, 90 таблеток",
        description: "Комплексная основа, включающая полный спектр питательных веществ, трав и антиоксидантов в идеальном соотношении и порции",
        url: "https://ru.iherb.com/pr/natural-factors-women-s-multistart-90-tablets/105648?rcode=DEP4540",
        img: "https://s3.images-iherb.com/nfs/nfs01580/y/8.jpg",
        who: "women",
        weight: "50",
        pregnantTo: '0',
        pregnantFrom: '0',
        activity: "1.2",
        ageFrom: "18",
        ageTo: "49"
      },

      {
        id: "m023",
        name: "Ultamins, Мультивитамины для мужчин старше 50 лет",
        description: "Мультивитаминная смесь для мужчин после 50, содержащая 100 мг коэнзима Q10 в 1 порции, а также ликопин, лютеин, метил В12, сереною, грибы, ферменты, овощи, ягоды и многое другое!",
        url: "https://ru.iherb.com/pr/ultamins-men-s-50-multivitamin-with-coq10-mushrooms-enzymes-veggies-berries-60-veggie-capsules/96381?rcode=DEP4540",
        img: "https://s3.images-iherb.com/ulm/ulm01271/y/13.jpg",
        who: "men",
        weight: "50",
        pregnantTo: '0',
        pregnantFrom: '0',
        activity: "1.2",
        ageFrom: "50",
        ageTo: "999"
      },


      {
        id: "w024",
        name: "Gummiology, мультивитамины для взрослых в жевательных таблетках, с натуральным вкусом малины, 100 вегетарианских жевательных таблеток",
        description: "Вкусные жевательные таблетки для взрослых с пектином и эффективными ингредиентами!",
        url: "https://ru.iherb.com/pr/gummiology-adult-multivitamin-gummies-natural-raspberry-flavor-100-vegetarian-gummies/95750?rcode=DEP4540",
        img: "https://s3.images-iherb.com/gmm/gmm01476/y/45.jpg",
        who: "women",
        weight: "50",
        pregnantTo: '0',
        pregnantFrom: '0',
        activity: "1.2",
        ageFrom: "18",
        ageTo: "54"
      },
      {
        id: "m025",
        name: "Life Extension, Мультивитамины для двух приемов в день, 60 капсул",
        description: "Мультивитамины для приема дважды в день содержат широкий спектр необходимых витаминов, минералов и других питательных веществ",
        url: "https://ru.iherb.com/pr/life-extension-two-per-day-multivitamin-60-capsules/86456?rcode=DEP4540",
        img: "https://s3.images-iherb.com/lex/lex23176/y/58.jpg",
        who: "men",
        weight: "50",
        pregnantTo: '0',
        pregnantFrom: '0',
        activity: "1.2",
        ageFrom: "18",
        ageTo: "54"
      },

      {
        id: "w025",
        name: "Life Extension, Мультивитамины для двух приемов в день, 60 капсул",
        description: "Мультивитамины для приема дважды в день содержат широкий спектр необходимых витаминов, минералов и других питательных веществ",
        url: "https://ru.iherb.com/pr/life-extension-two-per-day-multivitamin-60-capsules/86456?rcode=DEP4540",
        img: "https://s3.images-iherb.com/lex/lex23176/y/58.jpg",
        who: "women",
        weight: "50",
        pregnantTo: '0',
        pregnantFrom: '0',
        activity: "1.2",
        ageFrom: "18",
        ageTo: "54"
      },

      {
        id: "w026",
        name: "Thorne Research, базовые питательные вещества для приема 2 капсул в день, 60 капсул",
        description: "Достаточно всего двух капсул этой добавки, чтобы обеспечить себя полноценной мультивитаминной и богатой микроэлементами формулой на целый день.",
        url: "https://ru.iherb.com/pr/thorne-research-basic-nutrients-2-day-60-capsules/85476?rcode=DEP4540",
        img: "https://s3.images-iherb.com/thr/thr00684/y/26.jpg",
        who: "women",
        weight: "50",
        pregnantTo: '0',
        pregnantFrom: '0',
        activity: "1.2",
        ageFrom: "18",
        ageTo: "54"
      },
      {
        id: "m026",
        name: "Thorne Research, базовые питательные вещества для приема 2 капсул в день, 60 капсул",
        description: "Достаточно всего двух капсул этой добавки, чтобы обеспечить себя полноценной мультивитаминной и богатой микроэлементами формулой на целый день.",
        url: "https://ru.iherb.com/pr/thorne-research-basic-nutrients-2-day-60-capsules/85476?rcode=DEP4540",
        img: "https://s3.images-iherb.com/thr/thr00684/y/26.jpg",
        who: "men",
        weight: "50",
        pregnantTo: '0',
        pregnantFrom: '0',
        activity: "1.2",
        ageFrom: "18",
        ageTo: "54"
      },








    ],

    category: [{
        type: 'men', // мужчины
        label: 'Мужчина',
        main: 1
      },
      {
        type: 'women', // женщины
        label: 'Женщина',
        main: 1
      },
      {
        type: 'pregnant', // берем. женщины      
        label: 'Беременность',
        main: 0
      }
    ],

    vitamins: [

      {
        id: '001',
        name: 'Витамин С',
        category: {
          "men": {
            age: {
              "under60": {
                count: "90 мг"
              },
              "over60": {
                count: "90 мг"
              }
            }

          },
          "women": {
            age: {
              "under60": {
                count: "90 мг"
              },
              "over60": {
                count: "90 мг"
              }
            }
          },
          "pregnant": {
            stage: {
              "0": {
                count: "90 мг"
              },
              "1": {
                count: "90 мг"
              },
              "2": {
                count: "100 мг"
              },
              "3": {
                count: "120 мг"
              },
              "4": {
                count: "120 мг"
              }
            }
          }
        }
      },
      {
        id: '002',
        name: 'Витамин В1 (Тиамин)',
        category: {
          "men": {
            age: {
              "under60": {
                count: "1.5 мг"
              },
              "over60": {
                count: "1.5 мг"
              }
            }

          },
          "women": {
            age: {
              "under60": {
                count: "1.5 мг"
              },
              "over60": {
                count: "1.5 мг"
              }
            }
          },
          "pregnant": {
            stage: {
              "0": {
                count: "1.5 мг"
              },
              "1": {
                count: "1.5 мг"
              },
              "2": {
                count: "1.7 мг"
              },
              "3": {
                count: "1.8 мг"
              },
              "4": {
                count: "1.8 мг"
              }
            }
          }
        }
      },
      {
        id: '003',
        name: 'Витамин В2 (Рибофлавин)',
        category: {
          "men": {
            age: {
              "under60": {
                count: "1.8 мг"
              },
              "over60": {
                count: "1.8 мг"
              }
            }

          },
          "women": {
            age: {
              "under60": {
                count: "1.8 мг"
              },
              "over60": {
                count: "1.8 мг"
              }
            }
          },
          "pregnant": {
            stage: {
              "0": {
                count: "1.5 мг"
              },
              "1": {
                count: "1.5 мг"
              },
              "2": {
                count: "1.7 мг"
              },
              "3": {
                count: "1.8 мг"
              },
              "4": {
                count: "1.8 мг"
              }
            }
          }
        }
      },
      {
        id: '004',
        name: 'Витамин В6 (Пиридоксин)',
        category: {
          "men": {
            age: {
              "under60": {
                count: "2.0 мг"
              },
              "over60": {
                count: "2.0 мг"
              }
            }

          },
          "women": {
            age: {
              "under60": {
                count: "2.0 мг"
              },
              "over60": {
                count: "2.0 мг"
              }
            }
          },
          "pregnant": {
            stage: {
              "0": {
                count: "2.0 мг"
              },
              "1": {
                count: "2.0 мг"
              },
              "2": {
                count: "2.1 мг"
              },
              "3": {
                count: "2.5 мг"
              },
              "4": {
                count: "2.5 мг"
              }
            }
          }
        }
      },
      {
        id: '005',
        name: 'Витамин В3 (Ниацин)',
        category: {
          "men": {
            age: {
              "under60": {
                count: "20 мг"
              },
              "over60": {
                count: "20 мг"
              }
            }

          },
          "women": {
            age: {
              "under60": {
                count: "20 мг"
              },
              "over60": {
                count: "20 мг"
              }
            }
          },
          "pregnant": {
            stage: {
              "0": {
                count: "20 мг"
              },
              "1": {
                count: "20 мг"
              },
              "2": {
                count: "22 мг"
              },
              "3": {
                count: "23 мг"
              },
              "4": {
                count: "23 мг"
              }
            }
          }
        }
      },
      {
        id: '006',
        name: 'Витамин В12 (Цианокобаламин)',
        category: {
          "men": {
            age: {
              "under60": {
                count: "3 мкг"
              },
              "over60": {
                count: "3 мкг"
              }
            }

          },
          "women": {
            age: {
              "under60": {
                count: "3 мкг"
              },
              "over60": {
                count: "3 мкг"
              }
            }
          },
          "pregnant": {
            stage: {
              "0": {
                count: "3 мкг"
              },
              "1": {
                count: "3 мкг"
              },
              "2": {
                count: "3.5 мкг"
              },
              "3": {
                count: "3.5 мкг"
              },
              "4": {
                count: "3.5 мкг"
              }
            }
          }
        }
      },
      {
        id: '007',
        name: 'Витамин В9 (Фолаты, Фолиевая кислота)',
        category: {
          "men": {
            age: {
              "under60": {
                count: "400 мкг"
              },
              "over60": {
                count: "400 мкг"
              }
            }

          },
          "women": {
            age: {
              "under60": {
                count: "400 мкг"
              },
              "over60": {
                count: "400 мкг"
              }
            }
          },
          "pregnant": {
            stage: {
              "0": {
                count: "400 мкг"
              },
              "1": {
                count: "400 мкг"
              },
              "2": {
                count: "600 мкг"
              },
              "3": {
                count: "500 мкг"
              },
              "4": {
                count: "500 мкг"
              }
            }
          }
        }
      },
      {
        id: '008',
        name: 'Витамин В5 (Пантотеновая кислота)',
        category: {
          "men": {
            age: {
              "under60": {
                count: "5 мг"
              },
              "over60": {
                count: "5 мг"
              }
            }

          },
          "women": {
            age: {
              "under60": {
                count: "5 мг"
              },
              "over60": {
                count: "5 мг"
              }
            }
          },
          "pregnant": {
            stage: {
              "0": {
                count: "5 мг"
              },
              "1": {
                count: "5 мг"
              },
              "2": {
                count: "6 мг"
              },
              "3": {
                count: "7 мг"
              },
              "4": {
                count: "7 мг"
              }
            }
          }
        }
      },
      {
        id: '009',
        name: 'Витамин В7 (Биотин)',
        category: {
          "men": {
            age: {
              "under60": {
                count: "50 мкг"
              },
              "over60": {
                count: "50 мкг"
              }
            }

          },
          "women": {
            age: {
              "under60": {
                count: "50 мкг"
              },
              "over60": {
                count: "50 мкг"
              }
            }
          },
          "pregnant": {
            stage: {
              "0": {
                count: "50 мкг"
              },
              "1": {
                count: "50 мкг"
              },
              "2": {
                count: "50 мкг"
              },
              "3": {
                count: "50 мкг"
              },
              "4": {
                count: "50 мкг"
              }
            }
          }
        }
      },
      {
        id: '010',
        name: 'Витамин А, рет. экв.',
        category: {
          "men": {
            age: {
              "under60": {
                count: "900 мкг"
              },
              "over60": {
                count: "900 мкг"
              }
            }

          },
          "women": {
            age: {
              "under60": {
                count: "900 мкг"
              },
              "over60": {
                count: "900 мкг"
              }
            }
          },
          "pregnant": {
            stage: {
              "0": {
                count: "900 мкг"
              },
              "1": {
                count: "900 мкг"
              },
              "2": {
                count: "1000 мкг"
              },
              "3": {
                count: "1300 мкг"
              },
              "4": {
                count: "1300 мкг"
              }
            }
          }
        }
      },
      {
        id: '011',
        name: 'Бета-каротин',
        category: {
          "men": {
            age: {
              "under60": {
                count: "5 мг"
              },
              "over60": {
                count: "5 мг"
              }
            }

          },
          "women": {
            age: {
              "under60": {
                count: "5 мг"
              },
              "over60": {
                count: "5 мг"
              }
            }
          },
          "pregnant": {
            stage: {
              "0": {
                count: "5 мг"
              },
              "1": {
                count: "5 мг"
              },
              "2": {
                count: "5 мг"
              },
              "3": {
                count: "5 мг"
              },
              "4": {
                count: "5 мг"
              }
            }
          }
        }
      },
      {
        id: '012',
        name: 'Витамин Е, ток. экв.',
        category: {
          "men": {
            age: {
              "under60": {
                count: "15 мг"
              },
              "over60": {
                count: "15 мг"
              }
            }

          },
          "women": {
            age: {
              "under60": {
                count: "15 мг"
              },
              "over60": {
                count: "15 мг"
              }
            }
          },
          "pregnant": {
            stage: {
              "0": {
                count: "15 мг"
              },
              "1": {
                count: "15 мг"
              },
              "2": {
                count: "17 мг"
              },
              "3": {
                count: "19 мг"
              },
              "4": {
                count: "19 мг"
              }
            }
          }
        }
      },
      {
        id: '013',
        name: 'Витамин Е, ток. экв.',
        category: {
          "men": {
            age: {
              "under60": {
                count: "15 мг"
              },
              "over60": {
                count: "15 мг"
              }
            }

          },
          "women": {
            age: {
              "under60": {
                count: "15 мг"
              },
              "over60": {
                count: "15 мг"
              }
            }
          },
          "pregnant": {
            stage: {
              "0": {
                count: "15 мг"
              },
              "1": {
                count: "15 мг"
              },
              "2": {
                count: "17 мг"
              },
              "3": {
                count: "19 мг"
              },
              "4": {
                count: "19 мг"
              }
            }
          }
        }
      },
      {
        id: '014',
        name: 'Витамин D',
        category: {
          "men": {
            age: {
              "under60": {
                count: "10 мкг"
              },
              "over60": {
                count: "15 мкг"
              }
            }

          },
          "women": {
            age: {
              "under60": {
                count: "10 мкг"
              },
              "over60": {
                count: "15 мкг"
              }
            }
          },
          "pregnant": {
            stage: {
              "0": {
                count: "10 мкг"
              },
              "1": {
                count: "10 мкг"
              },
              "2": {
                count: "12.5 мкг"
              },
              "3": {
                count: "12.5 мкг"
              },
              "4": {
                count: "12.5 мкг"
              }
            }
          }
        }
      },

      {
        id: '015',
        name: 'Витамин К',
        category: {
          "men": {
            age: {
              "under60": {
                count: "120 мкг"
              },
              "over60": {
                count: "120 мкг"
              }
            }

          },
          "women": {
            age: {
              "under60": {
                count: "120 мкг"
              },
              "over60": {
                count: "120 мкг"
              }
            }
          },
          "pregnant": {
            stage: {
              "0": {
                count: "120 мкг"
              },
              "1": {
                count: "120 мкг"
              },
              "2": {
                count: "120 мкг"
              },
              "3": {
                count: "120 мкг"
              },
              "4": {
                count: "120 мкг"
              }
            }
          }
        }
      },

    ],

    minerals: [{
        id: '001',
        name: 'Кальций',
        category: {
          "men": {
            age: {
              "under60": {
                count: "1000 мг"
              },
              "over60": {
                count: "1200 мг"
              }
            }

          },
          "women": {
            age: {
              "under60": {
                count: "1000 мг"
              },
              "over60": {
                count: "1200 мг"
              }
            }
          },
          "pregnant": {

            stage: {
              "0": {
                count: "1000 мг"
              },
              "1": {
                count: "1000 мг"
              },
              "2": {
                count: "1300 мг"
              },
              "3": {
                count: "1400 мг"
              },
              "4": {
                count: "1400 мг"
              }
            }

          }
        }
      },
      {
        id: '002',
        name: 'Фосфор',
        category: {
          "men": {
            age: {
              "under60": {
                count: "800 мг"
              },
              "over60": {
                count: "800 мг"
              }
            }

          },
          "women": {
            age: {
              "under60": {
                count: "800 мг"
              },
              "over60": {
                count: "800 мг"
              }
            }
          },
          "pregnant": {

            stage: {
              "0": {
                count: "800 мг"
              },
              "1": {
                count: "800 мг"
              },
              "2": {
                count: "1000 мг"
              },
              "3": {
                count: "1000 мг"
              },
              "4": {
                count: "1000 мг"
              }
            }

          }
        }
      },

      {
        id: '003',
        name: 'Магний',
        category: {
          "men": {
            age: {
              "under60": {
                count: "400 мг"
              },
              "over60": {
                count: "400 мг"
              }
            }

          },
          "women": {
            age: {
              "under60": {
                count: "400 мг"
              },
              "over60": {
                count: "400 мг"
              }
            }
          },
          "pregnant": {

            stage: {
              "0": {
                count: "400 мг"
              },
              "1": {
                count: "400 мг"
              },
              "2": {
                count: "450 мг"
              },
              "3": {
                count: "450 мг"
              },
              "4": {
                count: "450 мг"
              }
            }

          }
        }
      },

      {
        id: '004',
        name: 'Калий',
        category: {
          "men": {
            age: {
              "under60": {
                count: "2500 мг"
              },
              "over60": {
                count: "2500 мг"
              }
            }

          },
          "women": {
            age: {
              "under60": {
                count: "2500 мг"
              },
              "over60": {
                count: "2500 мг"
              }
            }
          },
          "pregnant": {

            stage: {
              "0": {
                count: "2500 мг"
              },
              "1": {
                count: "2500 мг"
              },
              "2": {
                count: "2500 мг"
              },
              "3": {
                count: "2500 мг"
              },
              "4": {
                count: "2500 мг"
              }
            }

          }
        }
      },
      {
        id: '005',
        name: 'Натрий',
        category: {
          "men": {
            age: {
              "under60": {
                count: "1300 мг"
              },
              "over60": {
                count: "1300 мг"
              }
            }

          },
          "women": {
            age: {
              "under60": {
                count: "1300 мг"
              },
              "over60": {
                count: "1300 мг"
              }
            }
          },
          "pregnant": {

            stage: {
              "0": {
                count: "1300 мг"
              },
              "1": {
                count: "1300 мг"
              },
              "2": {
                count: "1300 мг"
              },
              "3": {
                count: "1300 мг"
              },
              "4": {
                count: "1300 мг"
              }
            }

          }
        }
      },
      {
        id: '006',
        name: 'Хлориды',
        category: {
          "men": {
            age: {
              "under60": {
                count: "2300 мг"
              },
              "over60": {
                count: "2300 мг"
              }
            }

          },
          "women": {
            age: {
              "under60": {
                count: "2300 мг"
              },
              "over60": {
                count: "2300 мг"
              }
            }
          },
          "pregnant": {

            stage: {
              "0": {
                count: "2300 мг"
              },
              "1": {
                count: "2300 мг"
              },
              "2": {
                count: "2300 мг"
              },
              "3": {
                count: "2300 мг"
              },
              "4": {
                count: "2300 мг"
              }
            }

          }
        }
      },
      {
        id: '007',
        name: 'Железо',
        category: {
          "men": {
            age: {
              "under60": {
                count: "10 мг"
              },
              "over60": {
                count: "10 мг"
              }
            }

          },
          "women": {
            age: {
              "under60": {
                count: "18 мг"
              },
              "over60": {
                count: "18 мг"
              }
            }
          },
          "pregnant": {

            stage: {
              "0": {
                count: "18 мг"
              },
              "1": {
                count: "18 мг"
              },
              "2": {
                count: "33 мг"
              },
              "3": {
                count: "18 мг"
              },
              "4": {
                count: "18 мг"
              }
            }

          }
        }
      },
      {
        id: '008',
        name: 'Цинк',
        category: {
          "men": {
            age: {
              "under60": {
                count: "12 мг"
              },
              "over60": {
                count: "12 мг"
              }
            }

          },
          "women": {
            age: {
              "under60": {
                count: "12 мг"
              },
              "over60": {
                count: "12 мг"
              }
            }
          },
          "pregnant": {

            stage: {
              "0": {
                count: "12 мг"
              },
              "1": {
                count: "12 мг"
              },
              "2": {
                count: "15 мг"
              },
              "3": {
                count: "15 мг"
              },
              "4": {
                count: "15 мг"
              }
            }

          }
        }
      },
      {
        id: '009',
        name: 'Йод',
        category: {
          "men": {
            age: {
              "under60": {
                count: "150 мкг"
              },
              "over60": {
                count: "150 мкг"
              }
            }

          },
          "women": {
            age: {
              "under60": {
                count: "150 мкг"
              },
              "over60": {
                count: "150 мкг"
              }
            }
          },
          "pregnant": {

            stage: {
              "0": {
                count: "150 мкг"
              },
              "1": {
                count: "150 мкг"
              },
              "2": {
                count: "220 мкг"
              },
              "3": {
                count: "390 мкг"
              },
              "4": {
                count: "390 мкг"
              }
            }

          }
        }
      },
      {
        id: '010',
        name: 'Медь',
        category: {
          "men": {
            age: {
              "under60": {
                count: "1 мг"
              },
              "over60": {
                count: "1 мг"
              }
            }

          },
          "women": {
            age: {
              "under60": {
                count: "1 мг"
              },
              "over60": {
                count: "1 мг"
              }
            }
          },
          "pregnant": {

            stage: {
              "0": {
                count: "1 мг"
              },
              "1": {
                count: "1 мг"
              },
              "2": {
                count: "1.1 мг"
              },
              "3": {
                count: "1.4 мг"
              },
              "4": {
                count: "1.4 мг"
              }
            }

          }
        }
      },
      {
        id: '011',
        name: 'Марганец',
        category: {
          "men": {
            age: {
              "under60": {
                count: "2 мг"
              },
              "over60": {
                count: "2 мг"
              }
            }

          },
          "women": {
            age: {
              "under60": {
                count: "2 мг"
              },
              "over60": {
                count: "2 мг"
              }
            }
          },
          "pregnant": {

            stage: {
              "0": {
                count: "2 мг"
              },
              "1": {
                count: "2 мг"
              },
              "2": {
                count: "2.2 мг"
              },
              "3": {
                count: "2.8 мг"
              },
              "4": {
                count: "2.8 мг"
              }
            }

          }
        }
      },
      {
        id: '012',
        name: 'Селен',
        category: {
          "men": {
            age: {
              "under60": {
                count: "70 мкг"
              },
              "over60": {
                count: "70 мкг"
              }
            }

          },
          "women": {
            age: {
              "under60": {
                count: "55 мкг"
              },
              "over60": {
                count: "55 мкг"
              }
            }
          },
          "pregnant": {

            stage: {
              "0": {
                count: "55 мкг"
              },
              "1": {
                count: "55 мкг"
              },
              "2": {
                count: "65 мкг"
              },
              "3": {
                count: "65 мкг"
              },
              "4": {
                count: "65 мкг"
              }
            }

          }
        }
      },
      {
        id: '013',
        name: 'Хром',
        category: {
          "men": {
            age: {
              "under60": {
                count: "50 мкг"
              },
              "over60": {
                count: "50 мкг"
              }
            }

          },
          "women": {
            age: {
              "under60": {
                count: "50 мкг"
              },
              "over60": {
                count: "50 мкг"
              }
            }
          },
          "pregnant": {

            stage: {
              "0": {
                count: "50 мкг"
              },
              "1": {
                count: "50 мкг"
              },
              "2": {
                count: "50 мкг"
              },
              "3": {
                count: "50 мкг"
              },
              "4": {
                count: "50 мкг"
              }
            }

          }
        }
      },
      {
        id: '014',
        name: 'Молибден',
        category: {
          "men": {
            age: {
              "under60": {
                count: "70 мкг"
              },
              "over60": {
                count: "70 мкг"
              }
            }

          },
          "women": {
            age: {
              "under60": {
                count: "70 мкг"
              },
              "over60": {
                count: "70 мкг"
              }
            }
          },
          "pregnant": {

            stage: {
              "0": {
                count: "70 мкг"
              },
              "1": {
                count: "70 мкг"
              },
              "2": {
                count: "70 мкг"
              },
              "3": {
                count: "70 мкг"
              },
              "4": {
                count: "70 мкг"
              }
            }

          }
        }
      },
      {
        id: '015',
        name: 'Фтор',
        category: {
          "men": {
            age: {
              "under60": {
                count: "4 мг"
              },
              "over60": {
                count: "4 мг"
              }
            }

          },
          "women": {
            age: {
              "under60": {
                count: "4 мг"
              },
              "over60": {
                count: "4 мг"
              }
            }
          },
          "pregnant": {

            stage: {
              "0": {
                count: "4 мг"
              },
              "1": {
                count: "4 мг"
              },
              "2": {
                count: "4 мг"
              },
              "3": {
                count: "4 мг"
              },
              "4": {
                count: "4 мг"
              }
            }

          }
        }
      },

    ],

    activity: [{
        id: 'activity_01',
        value: '1.2',
        name: 'Минимальная'
      },
      {
        id: 'activity_02',
        value: '1.375',
        name: 'Слабая'
      },
      {
        id: 'activity_03',
        value: '1.55',
        name: 'Средняя'
      },
      {
        id: 'activity_04',
        value: '1.725',
        name: 'Высокая'
      },
      {
        id: 'activity_05',
        value: '1.9',
        name: 'Экстра'
      },
    ],
    target: [{
        id: 'target_01',
        kef: [0.3, 0.3, 0.4],
        name: 'Поддержание веса'
      },
      {
        id: 'target_02',
        kef: [0.4, 0.2, 0.4],
        name: 'Снижение веса'
      },
      {
        id: 'target_03',
        kef: [0.3, 0.2, 0.5],
        name: 'Набор массы'
      }
    ],

   
  },
  mutations: {
    calc(state, {
      type,
      age,
      pregnant
    }) {

      if (type == "men") {
        state.selectedPregnant = null
      } else {
        state.selectedPregnant = pregnant || "0"
      }
      if (pregnant && pregnant !== '0') {
        state.selectedType = "pregnant"
      } else {

        state.selectedType = type || 'men'
      }

      state.selectedAge = age || 18
    },
    formula(state, {
      type,
      height,
      weight,
      age,
      activity,
      target,

    }) {
      state.selectedActivity = activity || 1.55
      if (type == "men") {
        state.selectedPregnant = null
        state.calories = Math.ceil((10 * weight + 6.25 * height - 5 * age + 5) * activity)

      } else {
        state.calories = Math.ceil((10 * weight + 6.25 * height - 5 * age - 161) * activity)

        switch (state.selectedPregnant) {
          case "2":
            state.calories += 350
            break;

          case "3":
            state.calories += 500
            break;

          case "4":
            state.calories += 450
            break;
        }

      }


      state.proteins = Math.ceil((target[0] * state.calories) / 4.0)
      state.fats = Math.ceil((target[1] * state.calories) / 9.0)
      state.carbohydrates = Math.ceil((target[2] * state.calories) / 4.0)
      state.mnjk = Math.ceil(0.10 * state.calories)
      state.pnjk = [Math.ceil(0.06 * state.calories), Math.ceil(0.10 * state.calories)]
      state.omega6 = [Math.ceil(0.05 * state.calories), Math.ceil(0.08 * state.calories)]
      state.omega3 = [Math.ceil(0.01 * state.calories), Math.ceil(0.02 * state.calories)]
      state.lipides = [Math.ceil(0.05 * state.calories), Math.ceil(0.07 * state.calories)]
    }
    /*  calcResults(state, payload) {   
       state.selectedType = payload || 'men'
     },
     calcResultsAge(state, payload) {
       state.selectedAge = payload || 18
     },
     calcResultsPregnant(state, payload) {
       state.selectedType = "pregnant"
       state.selectedPregnant = payload || "0"
     } */
  },
  actions: {},
  modules: {},
  getters: {
    getType: state => {
      return state.category.filter(i => i.main === 1)
    },
    getVitamins: state => (param) => {
      return state.vitamins
    },
    getMinerals: state => (param) => {
      return state.minerals
    },
    getCalories: state => (param) => {
      return state.calories
    },
    getSelectedType: state => () => {
      return state.selectedType
    },
    getIsWomen: state => () => {
      return (state.selectedType == "women") || (state.selectedType == "pregnant") ? 1 : 0
    },

    getSelectedAge: state => () => {
      return state.selectedAge > 60 ? "over60" : "under60"
    },
    getCurrentAge: state => () => {
      return state.selectedAge
    },
    getSelectedPregnant: state => () => {
      return state.selectedPregnant
    },
    getCurrentHeight: state => () => {
      return state.selectedHeight
    },
    getCurrentWeight: state => () => {
      return state.selectedWeight
    },
    getCurrentActivity: state => () => {
      return state.selectedActivity
    },

    getAllSupplements: state => () => {
      return state.supplements
    },
    getActivity: state => () => {
      return state.activity
    },
    getTarget: state => () => {
      return state.target
    },

    getProteins: state => () => {
      return state.proteins
    },

    getFats: state => () => {
      return state.fats
    },
    getCarbohydrates: state => () => {
      return state.carbohydrates
    },
    getVolokna: state => () => {
      return state.volokna
    },
    getPNJK: state => () => {
      return state.pnjk
    },
    getMNJK: state => () => {
      return state.mnjk
    },
    getOmega3: state => () => {
      return state.omega3
    },
    getOmega6: state => () => {
      return state.omega6
    },
    getLipides: state => () => {
      return state.lipides
    }


  }
})