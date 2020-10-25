const bodyEl = document.querySelector("body")

export const themeSwitcherEl = document.querySelector(".theme-switch__control input")

const LIGTHTHEME = 'light-theme';
const DARKTHEME = 'dark-theme';


export function themeSwithcer(e) { 
    const theme = e.target.checked ? DARKTHEME : LIGTHTHEME;
    window.localStorage.setItem('theme', theme)
    clearClassThemeFromBody()
    setTheme()
}

export function setTheme() {

    const themeLocalStorage = window.localStorage.getItem('theme')
    if (themeLocalStorage) {
        clearClassThemeFromBody();//удаляем классы темы с body
        bodyEl.classList.add(themeLocalStorage)//добавляем актуальный класс на body
    }
    else {//если пользователь первый раз загружает страницу устанавливаем тему по-умолчанию
        bodyEl.classList.add(LIGTHTHEME)
        window.localStorage.setItem('theme', LIGTHTHEME)
    }
    setCheckboxStatus()//устанавливаем чекбокс в нужное состояние
}

function clearClassThemeFromBody() {  //функция удаления классов темы с body
    bodyEl.classList.remove(DARKTHEME, LIGTHTHEME)
}

function setCheckboxStatus() { //ф-я установки состояния переключателя темы
    const themeLocalStorage = window.localStorage.getItem('theme')
    if (themeLocalStorage === DARKTHEME) { 
        themeSwitcherEl.checked = true;
    }else themeSwitcherEl.checked = false;
}