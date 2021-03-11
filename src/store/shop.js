export default {
  state: {
    products: [
      {
        article: 'VD3HY28',
        title: 'Кеды Vans Old Skool',
        description:
          'Vans Old Skool - классическая версия низких кедов, которые выпускаются брендом с 1977 года. За многолетнюю историю Vans Old Skool стали настоящим воплощением калифорнийского стиля и любимой обувью скейтбордистов и серферов. Кеды, которые станут отличным дополнением каждого гардероба. Данное издание модели изготовлено из прочного текстиля.',
        price: '4.600 ₽',
        image: require('../assets/images/vans-1.jpg'),
      },
      {
        article: 'AQ7475-700',
        title: 'Nike SB Zoom Janoski RM',
        description:
          'Обувь Nike SB Zoom Stefan Janoski RM сочетает в себе минималистичный дизайн и современную посадку. Новая мягкая стелька и гибкая подметка обеспечивают уверенное сцепление с доской с первых минут.',
        price: '5.950 ₽',
        image: require('../assets/images/nike-1.jpg'),
      },
      {
        article: '37406601',
        title: 'Puma Ralph Sampson MC',
        description:
          'Ralph Sampson MC – обновленная версия спортивной модели, созданной в честь участника баскетбольного Зала славы, игрока «Хьюстон Рокетс», легендарного Ральфа Сэмпсона. Современную итерацию отличают стильная расцветка и культовый брендинг.',
        price: '3.650 ₽',
        image: require('../assets/images/puma-1.jpg'),
      },
      {
        article: 'M7652',
        title: 'Converse Chuck Taylor All Star Core',
        description:
          'В 1917 г. кеды All Star явили миру белое полотно. Сначала они играли в баскетбол, потом играли рок-н-ролл, а потом - все подряд. Их носили атлеты и артисты, экспериментаторы, бунтари и провидцы. И теперь, после всего пережитого, они по-прежнему могут быть всем, чем только захотите.',
        price: '4.200 ₽',
        image: require('../assets/images/converse-1.jpg'),
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    getProducts(state) {
      return state.products;
    },
    getProduct: (state) => (article) => state.products.find((item) => item.article === article),
  },
};
