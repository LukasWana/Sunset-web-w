<template lang="pug">
  q-page

    page-section(:fullWidth="true")

      // animace:
      // transition-prev="slide-left"
      // transition-next="slide-right"

      q-carousel.top-carousel(
        autoplay
        swipeable
        animated
        v-model="slide"
        arrows
        navigation
        infinite
        height="550px"
        transition-next="jump-left"
        transition-prev="jump-right"
      ).no-alt-scroll

        q-carousel-slide(name="1" img-src="~assets/carusel-jidelnasql-001.jpg")
          carousel-content
            template(#semi-title) Jednoduchá
            template(#title) Evidence strávníků
            template(#description) Zjednodušíme evidenci vašich strávníků, objednávek stravy a plateb.

        q-carousel-slide(name="2" img-src="~assets/carusel-jidelnasql-002.jpg")
          carousel-content
            template(#semi-title) Univerzální
            template(#title) Stravovací systém
            template(#description) Zajistíme objednávku i výdej jídel pro každý typ provozu.

        q-carousel-slide(name="3" img-src="~assets/carusel-jidelnasql-003.jpg")
          carousel-content
            template(#semi-title) Moderní
            template(#title) Konstrukce programu
            template(#description) Využíváme moderní technologie se zaměření na bezpečnost a stabilitu.

        q-carousel-slide(name="4" img-src="~assets/carusel-jidelnasql-004.jpg")
          carousel-content
            template(#semi-title) Komplexní
            template(#title) Řešení stravování
            template(#description) Využijeme naše zkušenosti při návrhu řešení podle vašich potřeb.

    page-section.section-nadpis.text-center
      .row.justify-center.page-section-ourstory
        .col-xs-12.col-sm-8.col-md-7.q-px-md.q-mb-xl
          h2 Náš příběh
          | JídelnaSQL navazuje na předchozí produkty Jídelna a Kasiopeja, jde o komplexní software na vedení strávníků, evidenci objednávek, plateb a řešení pokladního prodeje. Pro větší gastronomické provozy nabízíme kompletní řešení objednávek výdeje nebo prodeje, s tím, že moduly stravovacího systému lze volně kombinovat.

    page-section
      h2.text-center Nabízená řešení
      .flex.justify-center(:class="{'q-gutter-lg': !$q.screen.lt.sm}")

        jidelna-section-double-card
          template(#title) Evidence strávníků
          template(#icon)
            img(src="~assets/reseni-01.jpg" alt="Chip")
          template(#default)
            div.text-left.ulli
              | Základní funkcí je evidence strávníků, přihlášek stravy a plateb.
              p
              | Jídelna SQL umožňuje nastavení cen pro kategorie, stravy nebo jednotlivá menu.
              p
              | Systém je velmi variabilní a je vhodný pro gastronomické provozy všech velikostí.
          template(#second)
            br
            div Přístup do webového rozhraní aplikace Gekon včetně aktualizací a správy dat
            div.q-mb-md.alt-cena 4.600 Kč #[small bez DPH ročně]
            h3 Vyžádejte si kalkulaci řešení přímo pro Vás.

        jidelna-section-double-card
          template(#title) Identifikační média
          template(#icon)
            img(src="~assets/reseni-02.jpg" alt="Chip")
          template(#default)
            div.text-left.ulli
              | V rámci stravovacího provozu jsou k identifikaci strávníků využívány bezkontaktní čipy.
              p
              | Ty mohou být v kartě nebo čipovém přívěsku.
              p
              | Naše řešení je universální, umožňujeme využití i vlastních karet jako jsou karty ISIC nebo městské karty.

          template(#second)
            br
            div Program Gekon pro Školní jídelny včetně instalace, nastavení, školení a platby za Licenční podporu
            div.q-mb-md.alt-cena 800 Kč #[small bez DPH měsíčně]
            h3 Vyžádejte si kalkulaci řešení přímo pro Vás.

        jidelna-section-double-card
          template(#title) Internetové objednávky
          template(#icon)
            img(src="~assets/reseni-03.jpg" alt="Chip")
          template(#default)
            div.text-left.ulli
              | Nejednodušší a cenově nejpřístupnější způsob zadání objednávek a odhlášek stravy je internetové rozhraní.
              p
              | Modul e-jídelníček, který zajišťuje internetové objednávky je optimalizovaný pro pohodlné ovládání na PC, tabletu nebo mobilním telefonu.

          template(#second)
            br
            div Gekon pro Závodní jídelnu s jednou provozovnou včetně instalace, nastavení, školení a platby za Licenční podporu
            div.q-mb-md.alt-cena 1.300 Kč #[small bez DPH měsíčně]
            h3 Vyžádejte si kalkulaci řešení přímo pro Vás.

        jidelna-section-double-card
          template(#title) Objednávkové kiosky
          template(#icon)
            img(src="~assets/reseni-04.jpg" alt="Chip")
          template(#default)
            div.text-left.ulli
              | V místě, kde je provozováno stravování, je mnohdy objednávkový kiosek.
              p
              | Náš kiosek TT1703 je v provedení antivandal s kvalitním dotykovým displejem krytým sklem.
              p
              | Software pro objednávání jídel můžete provozovat i na vlastním hardware.
          template(#second)
            br
            div Gekon pro provoz s dietním stravováním včetně instalace, nastavení, školení a platby za Licenční podporu
            div.q-mb-md.alt-cena 2.800 Kč #[small bez DPH měsíčně]
            h3 Vyžádejte si kalkulaci řešení přímo pro Vás.

        jidelna-section-double-card
          template(#title) Výdej jídel
          template(#icon)
            img(src="~assets/reseni-05.jpg" alt="Chip")
          template(#default)
            div.text-left.ulli
              | Pro výdej, signalizaci stavu objednaného jídla, můžete vybírat z několika variant výdejních terminálů.
              p
              | Ty jsou vždy vybaveny ovládacím programem Terkom, který zajišťuje rychlou a spolehlivou komunikaci s databází a je téměř bezobslužný.

          template(#second)
            br
            div Gekon pro stravovací společnost včetně instalace, nastavení, školení a platby za Licenční podporu
            div.q-mb-md.alt-cena 1.300 Kč #[small bez DPH měsíčně za provozovnu]
            h3 Vyžádejte si kalkulaci řešení přímo pro Vás.

        jidelna-section-double-card
          template(#title) Pokladní prodej
          template(#icon)
            img(src="~assets/reseni-06.jpg" alt="Chip")
          template(#default)
            div.text-left.ulli
              | Některé provozy upřednostňují bezobjednávkový provoz stravovacího úseku.
              p
              | Těm nabízíme modul Pokladna využitelný v závodních restauracích nebo při prodeji doplňkového sortimentu.
              p
              | Samozřejmostí je napojení na EET a přehledné kontrolní sestavy.
          template(#second)
            br
            div Gekon pro bufet včetně instalace, nastavení, školení a platby za Licenční podporu
            div.q-mb-md.alt-cena 1.300 Kč #[small bez DPH měsíčně]
            h3 Vyžádejte si kalkulaci řešení přímo pro Vás.

    page-section
      h2 Vlastnosti systému
      .flex.q-gutter-sm(:class="{'justify-center': $q.screen.gt.xs}")
        page-section-card
          template(#icon)
            img(src="~assets/Jidelna-icon.svg" alt="Icona" height="36px")
          template(#title) Bezpečná databáze
          template
            | Využíváme databázi Postresql, ta zajišťuje síťový provoz, připojení terminálů pro výdej nebo objednávku a synchronizaci s e-jídelníčkem.

        page-section-card
          template(#icon)
            img(src="~assets/Jidelna-icon.svg" alt="Icona" height="36px")
          template(#title) Nastavení evidence
          template
            | Strávníky můžete třídit podle kategorií, stravovacích zvyklostí, tříd, rozvozových míst nebo podnikových středisek.

        page-section-card
          template(#icon)
            img(src="~assets/Jidelna-icon.svg" alt="Icona" height="36px")
          template(#title) Nastavení cen
          template
            | Jídelníček umožňuje vyhledávání v recepturách, je možné ho ukládat nebo kopírovat. Zobrazuje se včetně alergenů.

        page-section-card
          template(#icon)
            img(src="~assets/Jidelna-icon.svg" alt="Icona" height="36px")
          template(#title) Zadávání jídelníčku
          template
            | Můžete evidovat libovolné množství skladů, které konfigurujete a nastavíte podle potřeb.

        page-section-card
          template(#icon)
            img(src="~assets/Jidelna-icon.svg" alt="Icona" height="36px")
          template(#title) Displej pokladny
          template
            | Pokladnu si nastavíte podle vlastních potřeb a zvyklostí. Centrálně můžete spravovat několik pokladen, tlačítka jsou uživatelsky konfigurovatelná.

        page-section-card
          template(#icon)
            img(src="~assets/Jidelna-icon.svg" alt="Icona" height="36px")
          template(#title) Dostupnost objednávek
          template
            | Server pro internetové objednávky je dozorován 7 dní v týdnu 24 hodin denně, zákazníkům garantujeme bezvýpadkový provoz.

        page-section-card
          template(#icon)
            img(src="~assets/Jidelna-icon.svg" alt="Icona" height="36px")
          template(#title) Možnosti komunikace
          template
            | V e-jídelníčku můžete využívat automatické reporty, kdy je strávník informován o objednávkách a stavu konta nebo poslat zprávu.

        page-section-card
          template(#icon)
            img(src="~assets/Jidelna-icon.svg" alt="Icona" height="36px")
          template(#title) Dostupný servis
          template
            | Terminály stravovacího systému jsou napojeny na dohledový server, díky tomu mohou naši servisní pracovníci rychle reagovat na případný výpadek.

        page-section-card
          template(#icon)
            img(src="~assets/Jidelna-icon.svg" alt="Icona" height="36px")
          template(#title) Zálohování dat
          template
            | Data jsou každý den automaticky zálohována, umístění zálohy může být na vašem zařízení v rámci sítě nebo na internetovém úložišti.

    page-section.text-center.q-mt-xl
      div.alt-bg.q-py-xl
        h2.alt-reset-m-p Ke stažení
        p Jídelnu SQL můžete ve variantě LITE používat zdarma. Využijte náš instalátor pro malé provozy.
        q-btn(rounded no-caps label="Stáhnout zdarma" size="lg" @click="login").q-px-xl.q-mb-lg.gekon-btn

    page-section
      h2 Realizovaná řešení
      .row.gekon-btn
        .col.gekon-card-solution
          h2.gekon-counter-b
            animated-number(:number="250" :time="1200" :restart="true")
          p.text-center.gekon-counter-s Instalací
        .col.gekon-card-solution
          h2.gekon-counter-b
            animated-number(:number="108" :time="1200" :restart="true")
          p.text-center.gekon-counter-s e-Jídelníčků
        .col.gekon-card-solution
          h2.gekon-counter-b
            animated-number(:number="74" :time="1200" :restart="true")
          p.text-center.gekon-counter-s Objednávkových kiosků
        .col.gekon-card-solution
          h2.gekon-counter-b
            animated-number(:number="182" :time="1200" :restart="true")
          p.text-center.gekon-counter-s Výdejních terminálů
    page-section
      h2 Fotky stravovacího systému
      .q-pa-md
        .q-gutter-y-md()
          q-card
            q-tabs.text-primary(v-model='tab' no-caps class='md-md' active-color='accent' indicator-color='accent')
              q-tab(name='internetoveobj' label='Internetové objednávky')
              q-tab(name='jidelnasql' label='JídelnaSQL')
              q-tab(name='objednavkovyterminal' label='Objednávkový terminál')
              q-tab(name='vydejniterminal' label='Výdejní terminál')
            q-separator
            q-tab-panels(v-model='tab' animated='')
              q-tab-panel(name='internetoveobj')
                .text-h6 Internetové objednávky
                | Lorem ipsum dolor sit amet consectetur adipisicing elit.
                jidelna-gallery(:images="imagesInternet")
              q-tab-panel(name='jidelnasql')
                .text-h6 JídelnaSQL
                | Lorem ipsum dolor sit amet consectetur adipisicing elit.
                jidelna-gallery(:images="imagesBla")
              // q-tab-panel(name='objednavkovyterminal')
                .text-h6 Objednávkový terminál
                | Lorem ipsum dolor sit amet consectetur adipisicing elit.
                jidelna-gallery
              // q-tab-panel(name='vydejniterminal')
                .text-h6 Výdejní terminál
                | Lorem ipsum dolor sit amet consectetur adipisicing elit.
                jidelna-gallery



    page-section(v-if="false")
      h2.text-center Cenový kalkulátor
      cenovy-kalkulator

    page-section
      .row.justify-center.page-section-ourstory
        .col-xs-12.col-sm-8.col-md-6.q-px-md.q-mb-xl
          h2.text-center Kontaktujte nás
          jidelna-formular

</template>

<style scoped lang="stylus">
.alt-grey-bg
  background-color #F6F6F6

.alt-bg
  background-color $jidelna-blue-light

.gekon-card-solution
  color white
  border 1px solid white

.gekon-btn
  background-color $orange
  color white

@media screen and (min-width: 601px)
  .gekon-counter-b
    margin 42px 0 0 0
    font-size 42px
    // font-size clamp(20px, 4vw, 42px)
  .gekon-counter-s
    margin 0 5px 42px 5px
    font-size 16px
    //font-size clamp(10px, 2vw, 16px)

@media screen and (max-width: 600px)
  .gekon-counter-b
    margin 22px 0 0 0
    font-size 20px
    // font-size clamp(20px, 4vw, 42px)
  .gekon-counter-s
    margin 0 5px 22px 5px
    font-size 10px
    //font-size clamp(10px, 2vw, 16px)

.alt-reset-m-p
  margin 0
  padding 0

.alt-cena
  color $gekon-primary
  font-size 26px
  font-weight bold

h2
  text-align center
  margin 50px 0 20px 0
  padding 0

.page-section-ourstory
  font-size $alt-text-size
  text-align center
  marging 20px

ul
  //list-style-image: url('~assets/app-icon.png')
  // list-style-image: url('~assets/odrazka.svg')
  list-style-type disc !important
  line-height 18px
  margin 0
  padding 0
  li
    list-style-position inside
    padding-left: 1.3em;
    text-indent: -1.3em;
    margin-bottom 13px

</style>

<script>
import AnimatedNumber from 'components/AnimatedNumber'
import CarouselContent from 'components/CarouselContent'
import PageSectionDoubleCard from 'components/PageSectionDoubleCard'
import ReferenceCard from 'components/ReferenceCard'
import JidelnaGallery from 'components/JidelnaGallery'
import JidelnaSectionDoubleCard from 'components/JidelnaSectionDoubleCard'
import JidelnaFormular from '../components/Formular'
import PageSection from 'components/PageSection'
import PageSectionCard from 'components/PageSectionCard'
import LayoutFooter from 'layouts/LayoutFooter'



export default {
  name: 'PageIndex',

  meta: {
    title: 'JidelnaSQL'
  },

  components: {
    JidelnaGallery,
    AnimatedNumber,
    JidelnaSectionDoubleCard,
    ReferenceCard,
    CarouselContent,
    PageSectionDoubleCard,
    JidelnaFormular,
    LayoutFooter,
    PageSectionCard,
    PageSection
  },

  data () {
    return {
      slide: '1',
      slideReferences: '1',
      tab: 'internetoveobj',
      imagesInternet: [
        { src: 'statics/galerie/int-obj/1_objednavka.png', alt: 'Titulní obrazovka', thumbnail: null },
        { src: 'statics/galerie/int-obj/2_prehled.PNG', alt: 'Jídelníček', thumbnail: null },
        { src: 'statics/galerie/int-obj/3_finance.png', alt: 'Evidence strávníků', thumbnail: null },
        { src: 'statics/galerie/int-obj/4_maily.png', alt: 'Platby', thumbnail: null }
      ],
      imagesBla: [
        { src: 'statics/galerie/int-obj/3_finance.png', alt: 'Evidence strávníků', thumbnail: null },
        { src: 'statics/galerie/int-obj/4_maily.png', alt: 'Platby', thumbnail: null }
      ]
    }
  },

  methods: {
    login () {
      window.location.href = 'https://gekon.altisima.cz'
    }
  }

}
</script>
