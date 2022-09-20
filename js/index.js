import { Router } from './router.js'
import {
    HomeButton,
    AboutButton,
    PortfolioButton,
    ContactButton
} from './events.js'

const router = new Router()
router.add('/', "/pages/home.html")
router.add("/about", "/pages/about.html")
router.add("/portfolio", "/pages/portfolio.html")
router.add("/contact", "/pages/contact.html")
router.add(404, "/pages/404.html")

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()

HomeButton()
AboutButton()
PortfolioButton()
ContactButton()

