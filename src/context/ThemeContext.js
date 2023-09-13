// themecontext.js
import React from 'react'

const ThemeContext = React.createContext({
  isDark: false,
  changeTheme: () => {},
  activeTab: '',
  activeTabItem: () => {},
  savedVideos: [],
  addVideo: () => {},
})

export default ThemeContext