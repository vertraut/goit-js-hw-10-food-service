import {themeSwithcer, setTheme, themeSwitcherEl } from './js/theme-switcher'

setTheme(); //устанавливаем тему из localStorage или по-умолчанию

themeSwitcherEl.addEventListener('change', themeSwithcer)//отслеживание переключения темы








