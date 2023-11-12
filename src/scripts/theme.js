const darkMode = () => {
    const buttonDark = document.querySelector('.header__btn');

    buttonDark.addEventListener("click", () => {
        const html = document.querySelector("html");
        buttonDark.classList.toggle("header__btn--dark-mode")

        html.classList.toggle("dark-mode")
    })

}

darkMode()

