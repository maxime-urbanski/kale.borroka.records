import bfm from "../../Img/lp/bfm.jpg";
import brixtoncats from "../../Img/lp/brixtoncats.jpg";
import grabuge from "../../Img/lp/grabuge.jpg";
import keltoi from "../../Img/lp/keltoi.jpg";
import kronstadt from "../../Img/lp/kronstadt.jpg";
import mdb from "../../Img/lp/mdb.jpg";
import sharpcut from "../../Img/lp/sharpcut.jpg";
import traitre from "../../Img/lp/traitre.jpg";
import urbanvietcong from "../../Img/lp/urbanvietcong.jpg";
import va from "../../Img/lp/va.jpg";
import fearless from "../../Img/lp/fearless.jpg";
import cant from "../../Img/lp/cantstopme.jpg";
import rock from "../../Img/lp/rockinclass.jpg";
import skuds from "../../Img/lp/skuds.jpg";
import tiempos from "../../Img/lp/10464304.jpg";
import venir from "../../Img/lp/10595877.jpg";
import mines from "../../Img/lp/3356565.jpg";
import reneix from "../../Img/lp/3907774.jpeg";
import russe from "../../Img/lp/russe.jpg";
import black from "../../Img/lp/3018198.jpg";
import messed from "../../Img/lp/14421523.jpg";
import win from "../../Img/lp/enraged.jpg";
import liberta from "../../Img/lp/8299937.jpg";
import stumbling from "../../Img/lp/stumbling.jpg";
import chaos from "../../Img/lp/12589838.jpg";
import compare from "../../Function/Compare";
import hoods from "../../Img/lp/15161685.jpg";
import killas from "../../Img/lp/15113806.jpg";
import frekuenza from "../../Img/lp/15535118.jpg";
import unter from "../../Img/lp/15136996.jpg";
import bad from "../../Img/lp/1725109.jpg";
import helem from "../../Img/lp/15554418.jpg";
import snob from "../../Img/lp/15567588.jpg";

const LParticle = [
  {
    id: 15567588,
    artiste: "Snob City Boys",
    name: "This Sound's For Us",
    image: `${snob}`,
    price: "13€",
    format: "LP",
    quantity: "3",
  },
  {
    id: 15554418,
    artiste: "Helem",
    name: " Habgida Hagdola",
    image: `${helem}`,
    price: "12€",
    format: "LP",
    quantity: "2",
  },
  {
    id: 1725109,
    artiste: "Moscow Death Brigade",
    name: "Bad Accent Anthems",
    image: `${bad}`,
    price: "14€",
    format: "LP",
    quantity: "3",
  },
  {
    id: 15136996,
    artiste: "Various Artist",
    name: "Unter dem Deckmantel des Antifaschismus",
    image: `${unter}`,
    price: "12€",
    format: "LP",
    quantity: "2",
  },
  {
    id: 15535118,
    artiste: "Resaka Sonora",
    name: "Frekuenza",
    image: `${frekuenza}`,
    price: "11€",
    format: "LP",
    quantity: "2",
  },
  {
    id: 15113806,
    artiste: "T-killas",
    name: "Awareness",
    image: `${killas}`,
    price: "12€",
    format: "LP",
    quantity: "1",
  },
  {
    id: 15161685,
    artiste: "Moscow Death Brigade",
    name: "Hoods Up",
    image: `${hoods}`,
    price: "11€",
    format: "LP",
    quantity: "3",
  },
  {
    id: 9219786,
    artiste: "Brigada Flores Magon",
    name: "ST",
    image: `${bfm}`,
    price: "11€",
    format: "LP",
    quantity: "1",
  },
  {
    id: 6763714,
    artiste: "Brixton Cats",
    name: "Quartier Maudit",
    image: `${brixtoncats}`,
    price: "10€",
    format: "LP",
    quantity: "3",
  },
  {
    id: 12202674,
    artiste: "Grabuge",
    name: "Perdu D'avance",
    image: `${grabuge}`,
    price: "10€",
    format: "LP",
    quantity: "1",
  },
  {
    id: 9477937,
    artiste: "Keltoi",
    name: "Son da rua",
    image: `${keltoi}`,
    price: "13€",
    format: "LP",
    quantity: "1",
  },
  {
    id: 12539863,
    artiste: "Kronstadt",
    name: "ST",
    image: `${kronstadt}`,
    price: "10€",
    format: "LP",
    quantity: "3",
  },
  {
    id: 11415341,
    artiste: "Moscow Death Brigade",
    name: "Boltcutter",
    image: `${mdb}`,
    price: "13€",
    format: "LP",
    quantity: "1",
  },
  {
    id: 13312057,
    artiste: "SharpxCut",
    name: "Trouble from the street",
    image: `${sharpcut}`,
    price: "10€",
    format: "LP",
    quantity: "2",
  },
  {
    id: 13236389,
    artiste: "Traitre",
    name: "discographie",
    image: `${traitre}`,
    price: "12€",
    format: "LP",
    quantity: "1",
  },
  {
    id: 13008350,
    artiste: "Urban Vietcong",
    name: "Storai tra bottiglie e ciminiere",
    image: `${urbanvietcong}`,
    price: "13€",
    format: "LP",
    quantity: "1",
  },
  {
    id: 10364210,
    artiste: "Various Artist",
    name: "Oi! in Head, Punk in heart",
    image: `${va}`,
    price: "11€",
    format: "LP",
    quantity: "2",
  },
  {
    id: 9207145,
    artiste: "Death or Glory",
    name: "Fearless",
    image: `${fearless}`,
    price: "10€",
    format: "LP",
    quantity: "2",
  },
  {
    id: 14994437,
    artiste: "Death or Glory",
    name: "Can't stop Me",
    image: `${cant}`,
    price: "10€",
    format: "LP",
    quantity: "2",
  },
  {
    id: 4988617,
    artiste: "The Midnight Rovers",
    name: "Rockin' Class",
    image: `${rock}`,
    price: "10€",
    format: "LP",
    quantity: "1",
  },
  {
    id: 4106520,
    artiste: "Skuds and Panic People",
    name: "Lachez les Bombes",
    image: `${skuds}`,
    price: "10€",
    format: "LP",
    quantity: "1",
  },
  {
    id: 10464304,
    artiste: "Knock Out",
    name: "Tiempo muertos, Ritmos inmortales",
    image: `${tiempos}`,
    price: "10€",
    format: "LP",
    quantity: "1",
  },
  {
    id: 10595877,
    artiste: "Cartouche",
    name: "A venir",
    image: `${venir}`,
    price: "11€",
    format: "LP",
    quantity: "1",
  },
  {
    id: 3356565,
    artiste: "65 Mines Street",
    name: "ST",
    image: `${mines}`,
    price: "Libre",
    format: "LP",
    quantity: "1",
  },
  {
    id: 3907774,
    artiste: "Opcio k-95",
    name: "Reneix",
    image: `${reneix}`,
    price: "10€",
    format: "LP",
    quantity: "1",
  },
  {
    id: 11579597,
    artiste: "210",
    name: "Пыль В Глаза ",
    image: `${russe}`,
    price: "12€",
    format: "LP",
    quantity: "1",
  },
  {
    id: 3018198,
    artiste: "Jeunesse Apatride",
    name: " Black Block 'N' Roll / La Victoire Sommeille ",
    image: `${black}`,
    price: "10€",
    format: "LP",
    quantity: "1",
  },
  {
    id: 14421523,
    artiste: "Messed Up",
    name: " Всё во что ты веришь / Everything You Believe In ",
    image: `${messed}`,
    price: "13€",
    format: "LP",
    quantity: "1",
  },
  {
    id: 12019515,
    artiste: "Enraged Minority",
    name: " A world to win ",
    image: `${win}`,
    price: "12€",
    format: "LP",
    quantity: "1",
  },
  {
    id: 8299937,
    artiste: "Bull Brigade",
    name: " Vita Liberta ",
    image: `${liberta}`,
    price: "12€",
    format: "LP",
    quantity: "1",
  },
  {
    id: 9230162,
    artiste: "Stumbling Pins",
    name: " Common Angst ",
    image: `${stumbling}`,
    price: "10€",
    format: "LP",
    quantity: "1",
  },
  {
    id: 12589838,
    artiste: "Bull Brigade, Non Servium",
    name: " The Chaos Brotherhood ",
    image: `${chaos}`,
    price: "10€",
    format: "LP",
    quantity: "1",
  },
];

LParticle.sort(compare);

export default LParticle;
