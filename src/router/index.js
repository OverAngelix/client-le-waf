import Vue from 'vue'
import VueRouter from 'vue-router'
import AnnulationReservation from '../components/AnnulationReservation.vue'
import ReservationOfTheDay from '../components/ReservationOfTheDay.vue'
import Menu from '../vues/Menu.vue'
import Carte from '../vues/Carte.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        alias: '/reservation',
        name: 'Menu',
        component: Menu,
        meta: {
            title: "Le Waf - le premier café chiens d'Europe ",
        }
    },
    {
        path: '/carte',
        name: 'Carte',
        component: Carte,
        meta: {
            title: "La carte du Waf",
        }
    },
    {
        path: '/annulation/:token',
        name: 'AnnulationReservation',
        component: AnnulationReservation,
        meta: {
            title: 'Annulation de ma reservation',
        }
    },
    {
        path: '/ReservationDuJour',
        name: 'ReservationOfTheDay',
        component: ReservationOfTheDay,
        meta: {
            title: 'Reservation du jour',
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.afterEach(to => {
    Vue.nextTick(() => {
      document.title = to.meta.title;
    });
  });
  

export default router