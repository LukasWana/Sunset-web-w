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

        q-carousel-slide(name="1" img-src="~assets/background-gekon-000.jpg")
          carousel-content
            template(#semi-title) Flexibilní
            template(#title) Skladový systém
            template(#description) Gekon poroste společně s vaším provozem

        q-carousel-slide(name="2" img-src="~assets/background-gekon-001.jpg")
          carousel-content
            template(#semi-title) Obsáhlý
            template(#title) Recepturní systém
            template(#description) Gekon vám pomůže plánovat jídelníček

        q-carousel-slide(name="3" img-src="~assets/background-gekon-002.jpg")
          carousel-content
            template(#semi-title) Univerzální
            template(#title) Software pro gastronomii
            template(#description) Funkce Gekonu využije každý typ provozu

        q-carousel-slide(name="4" img-src="~assets/background-gekon-003.jpg")
          carousel-content
            template(#semi-title) Intuitivní
            template(#title) Nástroj pro váš provoz
            template(#description) Gekon má pohodlné a uživatelsky příjemné ovládání

    page-section.section-nadpis.text-center
      .row.justify-center.page-section-ourstory
        .col-xs-12.col-sm-8.col-md-6.q-px-md.q-mb-xl
          h2 Náš příběh
          | Gekon navazuje na úspěšnou řadu programů rodiny Magdalena. Při jeho vývoji jsme využili našich dlouholetých zkušností s provozy školního, závodního nebo dietního stravování, ty jsme promítli do programu, který má naprosto unikátní konstrukci. Díky ní už v základu může i ten nejmenší provoz využívat stejné funkce jako velká nemocnice.

    page-section
      h2.text-center Nabízená řešení
      .flex.justify-center(:class="{'q-gutter-lg': !$q.screen.lt.sm}")

        gekon-section-double-card
          template(#title) Restaurace
          template(#icon)
            img(src="~assets/1-gek-restaurace.jpg" alt="Chip")
          template(#default)
            div.text-left.ulli
              | Restaurace mnohdy nepotřebují složité vedení skladového hospodářství, ale chtějí znát reálné náklady na výrobu jídel.
              p
              | Gekon ve variantě Kalkulace umí vypočítat cenu receptury nebo celého menu ze zadaných ceníkových cen surovin. Tím získáte okamžitý přehled o ekonomice provozu.
              p
              | K instalaci Gekonu je možné, díky webové aplikaci, přistupovat vzdáleně.
          template(#second)
            br
            div Přístup do webového rozhraní aplikace Gekon včetně aktualizací a správy dat
            div.q-mb-md.alt-cena 4.600 Kč #[small bez DPH ročně]
            h3 Vyžádejte si kalkulaci řešení přímo pro Vás.

        gekon-section-double-card
          template(#title) Školní jídelny
          template(#icon)
            img(src="~assets/1-gek-skolni-stravovani.jpg" alt="Chip")
          template(#default)
            div.text-left.ulli
              | S řešením pro školní jídelny máme bohaté zkušenosti.
              p
              | Školním jídelnám nabízíme komplexní řešení vedení skladového hospodářství včetně všech sestav, které vyžaduje legislativa.
              p
              | Obrovskou výhodou Gekonu je rozpad výdejky pro jednotlivé kategorie strávníků, kdy spotřební koš zahrne jen kategorie, u kterých je jeho evidence vyžadována.

          template(#second)
            br
            div Program Gekon pro Školní jídelny včetně instalace, nastavení, školení a platby za Licenční podporu
            div.q-mb-md.alt-cena 800 Kč #[small bez DPH měsíčně]
            h3 Vyžádejte si kalkulaci řešení přímo pro Vás.

        gekon-section-double-card
          template(#title) Závodní jídelny
          template(#icon)
            img(src="~assets/1-gek-zavodni.jpg" alt="Chip")
          template(#default)
            div.text-left.ulli
              | Závodní jídelny se složitějším provozem ocení možnost práce v síti.
              p
              | Gekon je už v základu plně síťový, databáze může být provozována na vlastním počítači (serveru) nebo ve vzdáleném úložišti.
              p
              | Jeho výstupy jsou optimalizovány pro práci kuchaře, skladníka i manažera provozu.
          template(#second)
            br
            div Gekon pro Závodní jídelnu s jednou provozovnou včetně instalace, nastavení, školení a platby za Licenční podporu
            div.q-mb-md.alt-cena 1.300 Kč #[small bez DPH měsíčně]
            h3 Vyžádejte si kalkulaci řešení přímo pro Vás.

        gekon-section-double-card
          template(#title) Dietní stravování
          template(#icon)
            img(src="~assets/1-gek-dietni-stravovani.jpg" alt="Chip")
          template(#default)
            div.text-left.ulli
              | Gekon je přímý nástupce Dietního systému Magdalena, který požívá mnoho provozů s dietním stravováním.
              p
              | V databázi najdete receptury s rozpadem pro jednotlivé diety, databázi nutričních hodnot surovin a možnost vazby jídelníčku pro oddělení.
              p
              | Samozřejmostí je podrobná stravovací jednotka s rozpadem na diety.
          template(#second)
            br
            div Gekon pro provoz s dietním stravováním včetně instalace, nastavení, školení a platby za Licenční podporu
            div.q-mb-md.alt-cena 2.800 Kč #[small bez DPH měsíčně]
            h3 Vyžádejte si kalkulaci řešení přímo pro Vás.

        gekon-section-double-card
          template(#title) Stravovací společnosti
          template(#icon)
            img(src="~assets/1-gek-strav-spol.jpg" alt="Chip")
          template(#default)
            div.text-left.ulli
              | Gekon bez problémů zvládne vedení evidence malé i velké stravovací společnosti.
              p
              | Obrovskou výhodou je možnost vedení několika provozoven v jedné databázi s možností vzdáleného přístupu do databáze prostřednictvím internetového připojení.

          template(#second)
            br
            div Gekon pro stravovací společnost včetně instalace, nastavení, školení a platby za Licenční podporu
            div.q-mb-md.alt-cena 1.300 Kč #[small bez DPH měsíčně za provozovnu]
            h3 Vyžádejte si kalkulaci řešení přímo pro Vás.

        gekon-section-double-card
          template(#title) Prodejní sklad
          template(#icon)
            img(src="~assets/1-gek-bufet.jpg" alt="Chip")
          template(#default)
            div.text-left.ulli
              | Pro provozy s bufetovým provozem jsme v Gekonu připravili speciální funkce.
              p
              | Primárně jde o vedení prodejních cen s nastavení platnosti, sledování vývoje prodejní marže a možnost inventury a vytvořením prodejky.
              p
              | Pokud je součástí bufetu vlastní výroba, je možné její proces v Gekonu sledovat.
          template(#second)
            br
            div Gekon pro bufet včetně instalace, nastavení, školení a platby za Licenční podporu
            div.q-mb-md.alt-cena 1.300 Kč #[small bez DPH měsíčně]
            h3 Vyžádejte si kalkulaci řešení přímo pro Vás.

    page-section.text-center.q-mt-xl
      div.alt-bg.q-py-xl
        h2.alt-reset-m-p Vstup pro registrované
        p Použijte pro vstup do webové aplikace
        q-btn(rounded no-caps label="Přihlásit se" size="lg" @click="login").q-px-xl.q-mb-lg.gekon-btn

    page-section
      h2 Vlastnosti systému
      .flex.q-gutter-sm(:class="{'justify-center': $q.screen.gt.xs}")
        page-section-card
          template(#icon)
            img(src="~assets/gekon-24px.svg" alt="Icona" height="36px")
          template(#title) Konstrukce programu
          template
            | Program můžete provozovat jako webovou nebo klasickou aplikaci.

        page-section-card
          template(#icon)
            img(src="~assets/gekon-24px.svg" alt="Icona" height="36px")
          template(#title) Uživatelské rozhraní
          template
            | Všechny obrazovky a formuláře programu jsme připravovali s maximálním důrazem na snadné ovládání.

        page-section-card
          template(#icon)
            img(src="~assets/gekon-24px.svg" alt="Icona" height="36px")
          template(#title) Výpočet nákladů
          template
            | Gekon spočítá náklady na výrobu jídla i bez použití skladu.

        page-section-card
          template(#icon)
            img(src="~assets/gekon-24px.svg" alt="Icona" height="36px")
          template(#title) Skladová evidence
          template
            | Můžete evidovat libovolné množství skladů, které konfigurujete a nastavíte podle potřeb.

        page-section-card
          template(#icon)
            img(src="~assets/gekon-24px.svg" alt="Icona" height="36px")
          template(#title) Nutriční analýza
          template
            | Díky propojení receptur na databázi nutričních hodnot máte k dispozici informace o základnich nutrientech.

        page-section-card
          template(#icon)
            img(src="~assets/gekon-24px.svg" alt="Icona" height="36px")
          template(#title) Spotřební koš
          template
            | Informace o plnění spotřebního koše umožňují detailní rozpad na jednotlivé položky zboží.

        page-section-card
          template(#icon)
            img(src="~assets/gekon-24px.svg" alt="Icona" height="36px")
          template(#title) Finanční sledování
          template
            | Vždy máte k dispozici informace o plnění stravovacího limitu s možností zobrazení detailů pro jednotlivé stravy.

        page-section-card
          template(#icon)
            img(src="~assets/gekon-24px.svg" alt="Icona" height="36px")
          template(#title) Kategorie strávníků
          template
            | Gekon obsahuje inteligentní výpočet, který spotřebu potravin rozpočítá pro jednotlivé kategorie.

        page-section-card
          template(#icon)
            img(src="~assets/gekon-24px.svg" alt="Icona" height="36px")
          template(#title) Bezpečí databáze
          template
            | Bez ohledu na umístění databáze je Gekon pravideně zálohován a zálohy následně odesílá na zabezpečený server.

    page-section
      h2 Realizovaná řešení
      .row.gekon-btn
        .col.gekon-card-solution
          h2.gekon-counter-b
            animated-number(:number="432" :time="1200" :restart="true")
          p.text-center.gekon-counter-s Uživatelů
        .col.gekon-card-solution
          h2.gekon-counter-b
            animated-number(:number="46" :time="1200" :restart="true")
          p.text-center.gekon-counter-s Nastavených diet
        .col.gekon-card-solution
          h2.gekon-counter-b
            animated-number(:number="3960" :time="1200" :restart="true")
          p.text-center.gekon-counter-s Receptur
        .col.gekon-card-solution
          h2.gekon-counter-b
            animated-number(:number="2180" :time="1200" :restart="true")
          p.text-center.gekon-counter-s Surovin
    page-section
      h2 Jak vypadá aplikace

      gekon-gallery


    page-section(v-if="false")
      h2.text-center Cenový kalkulátor
      cenovy-kalkulator

    page-section
      .row.justify-center.page-section-ourstory
        .col-xs-12.col-sm-8.col-md-6.q-px-md.q-mb-xl
          h2.text-center Kontaktujte nás
          formular

</template>

<style scoped lang="stylus">
.alt-grey-bg
  background-color #F6F6F6

.alt-bg
  background-color $gekon-green-light

.gekon-card-solution
  color white
  border 1px solid white

.gekon-btn
  background-color $gekon-primary
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
import GekonGallery from 'src/gekon.cz/components/GekonGallery'
import GekonSectionDoubleCard from 'src/gekon.cz/components/GekonSectionDoubleCard'
import Formular from '../components/Formular'
import PageSection from 'components/PageSection'
import PageSectionCard from 'components/PageSectionCard'
import LayoutFooter from 'layouts/LayoutFooter'

export default {
  name: 'PageIndex',

  meta: {
    title: 'Gekon'
  },

  components: {
    GekonGallery,
    AnimatedNumber,
    GekonSectionDoubleCard,
    ReferenceCard,
    CarouselContent,
    PageSectionDoubleCard,
    Formular,
    LayoutFooter,
    PageSectionCard,
    PageSection
  },

  data () {
    return {
      slide: '1',
      slideReferences: '1'
    }
  },

  methods: {
    login () {
      window.location.href = 'https://gekon.altisima.cz'
    }
  }

}
</script>
