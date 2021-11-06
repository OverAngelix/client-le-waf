<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col align="center" justify="center">
        <TitleMenu title="Waf in English"></TitleMenu>
        <p>
          If you are not yet convinced that Lille is DEFINITELY the best place
          to be in France (if not the world), you probably haven’t come to The
          Waf yet. That’s because we’re the first dog café in Europe! That’s
          right – a café where not only you can have a tea, cookies, and awesome
          Sunday brunches, you can also pet our dogoes. Basically heaven on
          earth.
        </p>
        <p>
          <strong>So how exactly does it work?</strong>
        </p>
        <p>We have 7-8 dogs here -they all come from animal rescue centres.</p>
        <v-img
          alt="people"
          contain
          max-height="600"
          max-width="800"
          src="https://lewaf.files.wordpress.com/2018/10/42634055_252852472087118_5414711617059291136_n.jpg"
        ></v-img>
        <p>
          Then, we have 2 to 3 dogs that are for adoption. They are dogs that
          were previously abandoned, and we keep them with us time for them to
          find a new happy home!
        </p>
        <p>
          <strong>Awesome! So can I come for a coffee?</strong>
        </p>
        <p>
          Absolutely! The way it works is there is a 7€ entry fee -it includes
          unlimited tea, coffee and squash, a smoothie, hot chocolate and a
          soda. If you’re feeling greedy, we also sell cakes for 3
          extra euros. If you’re thinking of coming on a week-end or with a big
          group, we advise you to make a reservation first.
        </p>
        <FichePreReservation />
        <v-img
          alt="gateaux"
          contain
          max-height="600"
          max-width="600"
          src="https://lewaf.files.wordpress.com/2016/11/gateaux.png"
        ></v-img>
        <p>
          <strong>Yey! Where can I find you?</strong>
        </p>
        <p>In the “Vieux Lille” quarters, at 57 rue de la Barre.</p>
        <v-img
          alt="dogs"
          contain
          max-height="424"
          max-width="600"
          src="https://lewaf.files.wordpress.com/2019/01/50314708_382039262361605_1116384771870556160_n-e1548925456396.jpg"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TitleMenu from "../components/TitleMenu";
import FichePreReservation from "../components/FichePreReservation";
export default {
  name: "English",
  components: {
    TitleMenu,
    FichePreReservation,
  },
  data: () => ({}),

  methods: {},
};
</script>
