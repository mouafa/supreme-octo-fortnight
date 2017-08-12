// initial state

const state = {
  categoriesList: [
    // { id: 0, name: 'Any Category' },
    { id: 9, name: 'General Knowledge', icon: 'icon-energy', colors: ['#db36a4', '#f7ff00'] },
    { id: 10, name: 'Books', icon: 'icon-book-open', colors: ['#ff4b1f', '#1fddff'] },
    { id: 11, name: 'Film', icon: 'icon-film', colors: ['#4CA1AF', '#C4E0E5'] },
    { id: 12, name: 'Music', icon: 'icon-music-tone-alt', colors: ['#834d9b', '#d04ed6'] },
    { id: 13, name: 'Musicals & Theatres', icon: 'icon-playlist', colors: ['#0099F7', '#F11712'] },
    { id: 14, name: 'Television', icon: 'icon-screen-desktop', colors: ['#2980b9', '#2c3e50'] },
    { id: 15, name: 'Video Games', icon: 'icon-game-controller', colors: ['#4DA0B0', '#D39D38'] },
    { id: 16, name: 'Board Games', icon: 'icon-ghost', colors: ['#5614B0', '#DBD65C'] },
    { id: 17, name: 'Science & Nature', icon: 'icon-chemistry', colors: ['#2F7336', '#AA3A38'] },
    { id: 18, name: 'Computers', icon: 'icon-mouse', colors: ['#114357', '#F29492'] },
    { id: 19, name: 'Mathematics', icon: 'icon-calculator', colors: ['#fd746c', '#ff9068'] },
    { id: 20, name: 'Mythology', icon: 'icon-graduation', colors: ['#eacda3', '#d6ae7b'] },
    { id: 21, name: 'Sports', icon: 'icon-social-dribbble', colors: ['#6a3093', '#a044ff'] },
    { id: 22, name: 'Geography', icon: 'icon-compass', colors: ['#B24592', '#F15F79'] },
    { id: 23, name: 'History', icon: 'icon-globe-alt', colors: ['#C02425', '#F0CB35'] },
    { id: 24, name: 'Politics', icon: 'icon-directions', colors: ['#c2e59c', '#64b3f4'] },
    { id: 25, name: 'Art', icon: 'icon-picture', colors: ['#FFB75E', '#ED8F03'] },
    { id: 26, name: 'Celebrities', icon: 'icon-star', colors: ['#8E0E00', '#1F1C18'] },
    { id: 27, name: 'Animals', icon: 'icon-social-twitter', colors: ['#76b852', '#8DC26F'] },
    { id: 28, name: 'Vehicles', icon: 'icon-plane', colors: ['#673AB7', '#512DA8'] }
    // { id: 29, name: 'Comics' }
    // { id: 30, name: 'Gadgets' }
    // { id: 31, name: 'Entertainment: Japanese Anime & Manga' },
    // { id: 32, name: 'Entertainment: Cartoon & Animations' }
  ]
}

// getters
const getters = {
  categoriesList: state => state.categoriesList
}

// actions
const actions = {}

// mutations
const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}
