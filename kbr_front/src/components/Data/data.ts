import axios from 'axios'

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

export const getData = async (slug: string, page = 0, perPage = 9): Promise<[]> => {
  const url = `${process.env.NEXT_PUBLIC_BACK_URL}/${slug}?page=${page}&perPage=${perPage}`
  const req = await axios.get(url)
  return await req.data
}
