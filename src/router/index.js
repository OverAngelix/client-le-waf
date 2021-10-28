import Vue from 'vue'
import VueRouter from 'vue-router'
import ReservationClient from '../components/ReservationClient.vue'
/* import ReservationWAF from '../components/ReservationWAF.vue'
 */
import AnnulationReservation from '../components/AnnulationReservation.vue'
import ReservationOfTheDay from '../components/ReservationOfTheDay.vue'
import Accueil from '../vues/Accueil.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/accueil',
        name: 'Accueil',
        component: Accueil,
        meta: {
            title: "Le Waf - le premier café chiens d'Europe ",
        }
    },
/*     {
        path: '/adminWaf',
        name: 'ReservationWAF',
        component: ReservationWAF,
        meta: {
            title: 'Nos reservations WAF',
        }
    }, */
    {
        path: '/',
        alias: '/reservation',
        name: 'ReservationClient',
        component: ReservationClient,
        meta: {
            title: 'Reservation WAF',
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