import {
    homeButton,
    aboutButton,
    portfolioButton,
    contactButton,
} from "./elements.js"

function HomeButton () {
    homeButton.addEventListener('click', () => {
        homeButton.classList.add("active")
        aboutButton.classList.remove("active")
        portfolioButton.classList.remove("active")
        contactButton.classList.remove("active")
    })
}

function AboutButton () {
    aboutButton.addEventListener('click', () => {
        homeButton.classList.remove("active")
        aboutButton.classList.add("active")
        portfolioButton.classList.remove("active")
        contactButton.classList.remove("active")
    })
}

function PortfolioButton () {
    portfolioButton.addEventListener('click', () => {
        homeButton.classList.remove("active")
        aboutButton.classList.remove("active")
        portfolioButton.classList.add("active")
        contactButton.classList.remove("active")
    })
}

function ContactButton () {
    contactButton.addEventListener('click', () => {
        homeButton.classList.remove("active")
        aboutButton.classList.remove("active")
        portfolioButton.classList.remove("active")
        contactButton.classList.add("active")
    })
}

export {
    HomeButton,
    AboutButton,
    PortfolioButton,
    ContactButton
}