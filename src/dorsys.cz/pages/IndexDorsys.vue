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

        q-carousel-slide(name="1" img-src="~assets/background-doors-001.jpg")
          carousel-content
            template(#semi-title) Moderní
            template(#title) Přístupový systém
            template(#description) Řešení pro firmy a instituce všech velikostí

        q-carousel-slide(name="2" img-src="~assets/background-doors-013.jpg")
          carousel-content
            template(#semi-title) Zabezpečíme
            template(#title) Vstupní dveře
            template(#description) Otevírání dveří pomocí technologie RFID

        q-carousel-slide(name="3" img-src="~assets/background-doors-014.jpg")
          carousel-content
            template(#semi-title) Umožníme
            template(#title) Kombinovaný provoz
            template(#description) Terminály jsou funkční i při výpadku spojení s databází

        q-carousel-slide(name="4" img-src="~assets/background-doors-012.jpg")
          carousel-content
            template(#semi-title) Vysoký standard
            template(#title) Bezpečnosti
            template(#description) Vaše data jsou zálohována nebo je můžete uložit k nám na server

        q-carousel-slide(name="5" img-src="~assets/background-doors-015.jpg")
          carousel-content
            template(#semi-title) Nastavení
            template(#title) Pravidel a rozvrhu
            template(#description) Přístupové body můžete uživatelsky konfigurovat

    page-section.section-nadpis.text-center
      .row.justify-center.page-section-ourstory
        .col-xs-12.col-sm-8.col-md-6.q-px-md.q-mb-xl


          h2 Náš příběh
          | Dorsys jsme navrhli pro potřeby provozů, které hledají jednoduchý a cenově dostupný přístupový systém.
          | Vývoj začal v roce 2018 a už na jaře příštího roku jsme Dorsys nasadili u prvního zákazníka.
          | Použité technologie nám umožňují další agilní vývoj tak, aby jsme dokázali vyhovět i těm nejnáročnějším požadavkům našich zákazníků.


    page-section
      h2.text-center Nabízená řešení

      .flex.justify-center(:class="{'q-gutter-lg': !$q.screen.lt.sm}")



        page-section-double-card
          template(#title) Jste mateřská škola?
          template(#icon)
            img(src="~assets/002-mskoly.svg" alt="Chip")
          template(#default)
            div.text-left.ulli
              ul
                li Zabezpečení vstupu ke třídám pomocí moderního a cenově dostupného řešení.
                li Rodiče, kteří přivádějí nebo vyzvedávají dítě, si otevírají pomocí čipové karty.
                li Možnost nastavení pravidel, kdy lze dveře čipem otevřít.
                li Dveře jsou stále uzamčené a učitelky nemusejí otevírat každému rodiči.
                li Zaměstnanci školky mají vlastní časové nastavení, mohou otevírat dveře kdykoli.
                li Dorsys nevyžaduje server, databáze může být na našem serveru nebo na běžném PC.
                li Jednoduché přidělování čipových karet, ty už jsou v databázi a jen k nim přiřadíte osobu.
          template(#second)
            br
            div Řešení pro jedny dveře včetně montáže
            div.q-mb-md.alt-cena 23.600 Kč #[small bez DPH]
            div Měsíční platba
            div.q-mb-md.alt-cena 1.500 Kč #[small bez DPH]
              p.alt-text-color za provoz software včetně dohledu
            h3 Vyžádejte si kalkulaci řešení přímo pro Vás.

        page-section-double-card
          template(#title) Jste základní škola?
          template(#icon)
            img(src="~assets/004-zskoly.svg" alt="Chip")
          template(#default)
            div.text-left.ulli
              ul
                li Plně integrované řešení se snadným plněním dat z databáze elektronické matriky nebo stravování.
                li Zabezpečení vchodů, speciálních učeben, tělocvičny, sportovišť a vjezdu do objektu.
                li Uživatelsky příjemná správa přístupových práv a okruhů vstupu.
                li Možnost nastavení zákazu odchodu žáků v době výuky.
                li Systém umožňuje použít širokou škálu identifikátorů (čipů, čipových karet).
                li Software Dorsys poskytuje informace o přítomnosti osob v budově a eviduje příchody.
                li Možnost poskytnutí informace o příchodech do budovy do webového rozhraní.
          template(#second)
            br
            div Řešení pro troje dveře včetně montáže
            div.q-mb-md.alt-cena 64.820 Kč #[small bez DPH]
              p.alt-text-color u dveří jsou dvě čtečky pro evidenci docházky
            div Měsíční platba
            div.q-mb-md.alt-cena 1.813 Kč #[small bez DPH]
              p.alt-text-color za provoz software s modulem přítomnost včetně dohledu
            h3 Vyžádejte si kalkulaci řešení přímo pro Vás.

        page-section-double-card
          template(#title) Potřebujete evidenci docházky?
          template(#icon)
            img(src="~assets/003-dochazka.svg" alt="Chip")
          template(#default)
            div.text-left.ulli
              ul
                li Řešení je dostupné jako samostatný modul nebo rozšíření přístupového systému.
                li V rámci přístupového systému je určen terminál, který docházku zaznamenává a zároveň obsluhuje dveře.
                li Snadná montáž terminál stačí připojit k síti a napájení, instalace software proběhne na dálku.
                li Jednoduché ovládání, jedna integrovaná čtečka slouží pro označení příchodu, druhá pro odchod.
                li Webové rozhraní pro záznam docházky pracovníků na služební cestě.
                li Přehled přítomnosti je součástí uživatelského rozhraní software.
                li Poskytujeme možnost napojení na personální nebo jiné systémy.
          template(#second)
            br
            div Řešeni evidence docházky, 2x čtečka UR 110
            div.q-mb-md.alt-cena 20.100 Kč #[small bez DPH]
            div Měsíční platba
            div.q-mb-md.alt-cena 1.813 Kč #[small bez DPH]
              p.alt-text-color za provoz software včetně dohledu
            h3 Vyžádejte si kalkulaci řešení přímo pro Vás.

        page-section-double-card
          template(#title) Jste bytový dům?
          template(#icon)
            img(src="~assets/001-domy.svg" alt="Chip")
          template(#default)
            div.text-left.ulli
              ul
                li Rozšíření stávajícího zvonkového tabla o čtečku bezkontaktních čipů.
                li Možnost připojení čtečky otisků prstů pro zvýšení oprávnění osob vstupujících do budovy.
                li Připojení terminálu k databázi je možný prostřednictvím sítě LAN, Wifi nebo LTE.
                li Terminál může fungovat i bez stálého připojení k databázi.
                li Pokud není možné provozovat databázi v domě je možné využít uložení dat na našem serveru.
                li Administrace systému je velmi jednoduchá s minimální pracností.
                li Řešení je mnohem bezpečnější než použití zámků s vestavěnou čtečkou nebo číselným kódem.
          template(#second)
            br
            div Řešení otevírání domovních dveří
            div.q-mb-md.alt-cena 16.600 Kč #[small bez DPH]
            div Měsíční platba
            div.q-mb-md.alt-cena 1.463 Kč #[small bez DPH]
              p.alt-text-color za provoz software včetně dohledu a umístění databáze na našem serveru
            h3 Vyžádejte si kalkulaci řešení přímo pro Vás.

    page-section
      h2 Vlastnosti systému
      .flex.q-gutter-sm(:class="{'justify-center': $q.screen.gt.xs}")
        page-section-card
          template(#icon)
            img(src="~assets/fingerprint-24px.svg" alt="Icona" height="36px")
          template(#title) Evidence osob
          template
            | Každá osoba může mít víc identifikačních médií.

        page-section-card
          template(#icon)
            img(src="~assets/fingerprint-24px.svg" alt="Icona" height="36px")
          template(#title) Nastavení časových zón
          template
            | Uživatelsky příjemné rozhraní pro nastavení práv.

        page-section-card
          template(#icon)
            img(src="~assets/fingerprint-24px.svg" alt="Icona" height="36px")
          template(#title) Konfigurace dveří
          template
            | Pravidla pro otevírání určujete nejen pro dveře, ale i pro čtečky.

        page-section-card
          template(#icon)
            img(src="~assets/fingerprint-24px.svg" alt="Icona" height="36px")
          template(#title) Podrobné logování událostí
          template
            | Samozřejmostí je uživatelsky příjemné rozhraní, které umožní kontrolovat docházku.

        page-section-card
          template(#icon)
            img(src="~assets/fingerprint-24px.svg" alt="Icona" height="36px")
          template(#title) Provoz v režimu offline
          template
            | V případně výpadku spojení s databází terminál funguje dál při zachování plné funkčnosti.

        page-section-card
          template(#icon)
            img(src="~assets/fingerprint-24px.svg" alt="Icona" height="36px")
          template(#title) Možnosti databáze
          template
            | Nemusíte investovat do hardware pro provoz databáze, umístíme ji na bezpečný server u nás.

        page-section-card
          template(#icon)
            img(src="~assets/fingerprint-24px.svg" alt="Icona" height="36px")
          template(#title) Připojení více čteček
          template
            | Každý terminál Dorsys může ovládat až 4 čtečky.

        page-section-card
          template(#icon)
            img(src="~assets/fingerprint-24px.svg" alt="Icona" height="36px")
          template(#title) Identifikace osob
          template
            | Kromě RFID čipů se můžete do systému identifikovat otiskem prstu nebo pomocí systému Face Id.

        page-section-card
          template(#icon)
            img(src="~assets/fingerprint-24px.svg" alt="Icona" height="36px")
          template(#title) Napájení přes POE
          template
            | Snadnou montáž zajišťuje i sloučení připojení dat a napájení.

    page-section
      h2 Realizovaná řešení
      div
        q-carousel(
          v-if="$q.screen.gt.sm"
          swipeable
          animated
          v-model="slideReferences"
          arrows
          navigation
          height="270px"
          infinite
          transition-next="slide-left"
          transition-prev="slide-right"
          control-color="primary"
        ).no-alt-scroll

          q-carousel-slide(name="1")
            .flex.justify-center.q-gutter-lg
              reference-card
                template(#name) Základní škola Praha 3
                template(#popis) Otevírání hlavních vstupních dveří s integrovanou kamerou, která snímá vstupující osoby.
              reference-card
                template(#name) Základní škola Praha 9
                template(#popis) Otevírání 4 dveří v objektu tělocvičny a hlavního vchodu do školy. K montáži byly použity 2 terminály Dorsys, každý obsluhuje dvoje dveře.

          q-carousel-slide(name="2")
            .flex.justify-center.q-gutter-lg
              reference-card
                template(#name) Gymnázium Kutná Hora
                template(#popis) Otevírání dveří hlavního vstupu do budovy. Osoby a čísla čipů jsou načítány ze stravovacího systému.
              reference-card
                template(#name) SZŠ Praha 4
                template(#popis) Vstup je regulován pomocí turniketů, které jsou osazeny čtečkou bezkontaktních čipů. Data o vstupu jsou předávány do internetového rozhraní elektronické třídní knihy.


        div.flex(:class="{'q-gutter-lg justify-center': $q.screen.gt.xs}" v-else)
          reference-card
            template(#name) Základní škola Praha 3
            template(#popis) Otevírání hlavních vstupních dveří s integrovanou kamerou, která snímá vstupující osoby.
          reference-card
            template(#name) Základní škola Praha 9
            template(#popis) Otevírání 4 dveří v objektu tělocvičny a hlavního vchodu do školy. K montáži byly použity 2 terminály Dorsys, každý obsluhuje dvoje dveře.

          reference-card
            template(#name) Gymnázium Kutná Hora
            template(#popis) Otevírání dveří hlavního vstupu do budovy. Osoby a čísla čipů jsou načítány ze stravovacího systému.
          reference-card
            template(#name) SZŠ Praha 4
            template(#popis) Vstup je regulován pomocí turniketů, které jsou osazeny čtečkou bezkontaktních čipů. Data o vstupu jsou předávány do internetového rozhraní elektronické třídní knihy.


    page-section(v-if="false")
      h2.text-center Cenový kalkulátor
      cenovy-kalkulator

    page-section
      .flex.justify-center
        div.video-container.q-mx-lg.shadow-6
          // q-video(:ratio="16/9" src="https://www.youtube.com/embed/BocAstFSEsU?rel=0")
          dorsys-video

    page-section
      .row.justify-center.page-section-ourstory
        .col-xs-12.col-sm-8.col-md-6.q-px-md.q-mb-xl
          h2.text-center Kontaktujte nás
          formular

</template>

<style scoped lang="stylus">
.alt-text-color
  color $alt-text-color
  font-weight normal

.alt-reset-m-p
  margin 0
  padding 0

.alt-cena
  color $primary
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

.video-container
  width 100%

.gt-sm
  .video-container
    max-width 920px


</style>

<script>
import CarouselContent from 'components/CarouselContent'
import PageSection from 'components/PageSection'
import PageSectionCard from 'components/PageSectionCard'
import PageSectionDoubleCard from 'components/PageSectionDoubleCard'
import ReferenceCard from 'components/ReferenceCard'
import LayoutFooter from 'layouts/LayoutFooter'
import CenovyKalkulator from 'src/dorsys.cz/components/CenovyKalkulator'
import DorsysVideo from 'src/dorsys.cz/components/DorsysVideo'
import Formular from '../components/Formular'

export default {
  name: 'PageIndex',

  meta: {
    title: 'Dorsys'
  },

  components: {
    DorsysVideo,
    ReferenceCard,
    CarouselContent,
    CenovyKalkulator,
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
  }

}
</script>
