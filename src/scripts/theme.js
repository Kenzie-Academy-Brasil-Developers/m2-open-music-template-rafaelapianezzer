export const darkMode = () => {
    const buttonDark = document.querySelector('.header__btn');

    buttonDark.addEventListener("click", () => {
        const html = document.querySelector("html");
        buttonDark.classList.toggle("header__btn--dark-mode");

        const isDarkMode = html.classList.toggle("dark-mode");
        localStorage.setItem("@OpenMusic:dark-mode", JSON.stringify(isDarkMode));
    });
}

export const verifyMode = () => {
    const darkInfo = JSON.parse(localStorage.getItem("@OpenMusic:dark-mode"));

    if (darkInfo) {
        const html = document.querySelector("html");
        html.classList.add("dark-mode");
    }
}

darkMode();
verifyMode();











