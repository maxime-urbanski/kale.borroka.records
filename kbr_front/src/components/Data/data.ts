import axios from 'axios'
import {getAllSupports, getArticlesProps, GetDataProps} from "../../Interface/interfaceData";

export const about = [
  {
    name: 'Comment passer commande ?',
    link: '/comment-passer-commande',
  },
  {
    name: 'Nous contacter ?',
    link: '/contact',
  },
  {
    name: 'Comment passer commande ?',
    link: '/comment-passer-commande',
  },
  {
    name: 'Kale Borroka Records',
    link: '/kale-borroka-records',
  },
]

export const shop = [
  {
    name: 'LP',
    link: '/LP',
  },
  {
    name: 'EP',
    link: '/EP',
  },
  {
    name: 'CD',
    link: '/CD',
  },
  {
    name: 'FANZINE',
    link: '/fanzine',
  },
  {
    name: 'PRODUCTION',
    link: '/production',
  },
]

export const networks = [
  {
    name: 'Discogs',
    img: '/img/Social/discogs.svg',
    url: 'https://www.facebook.com/kale.borroka.records/',
  },
  {
    name: 'Facebook',
    img: '/img/Social/fb.svg',
    url: 'https://www.facebook.com/kale.borroka.records/',
  },
  {
    name: 'Protonmail',
    img: '/img/Social/pt.svg',
    url: 'mailto: kale.borroka.records@protonmail.com',
  },
  {
    name: 'Youtube',
    img: '/img/Social/yt.svg',
    url: 'https://www.youtube.com/playlist?list=PLpM-GGKpwdHrT6RpoqsHT2HVGoPet2sB-',
  },
]

export const flags = [
  {
    name: 'Francais',
    img: '/img/Flag/fr.svg',
  },
  {
    name: 'Euskadi',
    img: '/img/Flag/eu.svg',
  },
  {
    name: 'English',
    img: '/img/Flag/en.svg',
  },
]

export const searchAndCart = [
  {
    name: 'Search',
    img: '/img/search.svg',
  },
  {
    name: 'Cart',
    img: '/img/cart.svg',
  },
]

export const tracklist = [
  { name: 'Intro', track: 1, ArtistId: 'd1cab072-2e64-46b0-9318-ffdbef497736' },
  {
    name: 'Souterrain feat Chata Flores',
    track: 2,
    ArtistId: 'd1cab072-2e64-46b0-9318-ffdbef497736',
  },
  { name: 'Kravmikaz', track: 3, ArtistId: 'd1cab072-2e64-46b0-9318-ffdbef497736' },
  { name: 'Camtar', track: 4, ArtistId: 'd1cab072-2e64-46b0-9318-ffdbef497736' },
  {
    name: 'Crust feat My Own Voice, Matrak Attakk',
    track: 5,
    ArtistId: 'd1cab072-2e64-46b0-9318-ffdbef497736',
  },
  { name: 'GasMask feat Speira', track: 6, ArtistId: 'd1cab072-2e64-46b0-9318-ffdbef497736' },
  { name: 'Poison feat Zafina', track: 7, ArtistId: 'd1cab072-2e64-46b0-9318-ffdbef497736' },
  {
    name: 'Carte Postale feat Al Nasser',
    track: 8,
    ArtistId: 'd1cab072-2e64-46b0-9318-ffdbef497736',
  },
  { name: 'City Hackers feat Aeon', track: 9, ArtistId: 'd1cab072-2e64-46b0-9318-ffdbef497736' },
]

export const infos = [
  'ArticleId: 012354657686960°098',
  'City: MOSCOW, Country: RUSSIA',
  'SUPPORT: LP',
  'STYLE: RAP PUNK ELECTRO',
  'NOTE: 4,5/5',
  'RELEASE DATE: 21/09/2021',
]

export const paymentAndSent = [
  {
    name: 'Chronopost',
    img: '/img/divers/chronopost.png',
  },
  {
    name: 'Mondial Relay',
    img: '/img/divers/mr.svg',
  },
  {
    name: 'paypal',
    img: '/img/divers/paypal.svg',
  },
]

export const getData = async (slug: string): Promise<GetDataProps[]> => {
  const url = `${process.env.NEXT_PUBLIC_BACK_URL}/${slug}`
  const req = await axios.get(url)
  return await req.data
}
