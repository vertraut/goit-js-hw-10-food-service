import { themeSwithcer, setTheme, themeSwitcherEl } from './js/theme-switcher'
import cardsMenuMarkup from './js/card-menu-markup'


setTheme(); //устанавливаем тему из localStorage или по-умолчанию

themeSwitcherEl.addEventListener('change', themeSwithcer)//отслеживание переключения темы

cardsMenuMarkup();






