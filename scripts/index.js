const $btnMenu = document.querySelector('#btn-menu');
const $closeMenu = document.querySelector('#close-mobile-nav')
const $mobileNav = document.querySelector('#mobile-nav-fixed')
const $featuresNavItems = document.querySelectorAll('.features-nav-list-item')
const $tabsScroll = document.querySelector('#tabs-scroll')

const $form = document.querySelector('#form')

$btnMenu.addEventListener('click', () => {
    $mobileNav.classList.add('active')
})

$closeMenu.addEventListener('click', () => {
    $mobileNav.classList.remove('active')
})

$featuresNavItems.forEach(($featuresNavItem) => {
    $featuresNavItem.addEventListener('click', function () {
        this.classList.add('active')
        // remove active to other items
        $featuresNavItems.forEach(($featuresNavItem, index) => {
            if ($featuresNavItem !== this) {
                $featuresNavItem.classList.remove('active')
            } else {
                const scollCount = window.innerWidth - 56
                if(index === 0) {
                    $tabsScroll.scrollTo(0, 0)
                }
                if(index === 1) {
                    $tabsScroll.scrollTo(scollCount, 0)
                }
                if(index === 2) {
                    $tabsScroll.scrollTo(scollCount * 2, 0)
                }
            }
        })
    })
})

$form.addEventListener('submit', (e) => {
    e.preventDefault()
})
