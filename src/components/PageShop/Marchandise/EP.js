import reve from "../../Img/ep/13848683.jpg";
import lendemain from "../../Img/ep/13638113.jpg";
import guillotina from "../../Img/ep/5369418.jpg";
import remembering from "../../Img/ep/4269405.jpg";
import working from "../../Img/ep/10056501.jpg";
import leipzig from "../../Img/ep/13312034.jpg";
import zero from "../../Img/ep/14201735.jpg";
import pressure from "../../Img/ep/9943868.jpg";
import collin from "../../Img/ep/7373465.jpg";
import skin2 from "../../Img/ep/15431270.jpg";
import skin from "../../Img/ep/1751408.jpg";
import skinw from "../../Img/ep/15432976.jpg";
import compare from "../../Function/Compare";
import cruz from "../../Img/ep/15422279.jpg";
import sempre from "../../Img/ep/14804584.jpg";

const epArticle = [
  {
    id: 14804584,
    artiste: "Sempre Peggio",
    name: "Anni Buttati",
    image: `${sempre}`,
    price: "6€",
    format: "EP",
    quantity: "2",
  },{
    id: 15431270,
    artiste: "Knock Out",
    name: "Rock'n'roll Skinhead",
    image: `${skin2}`,
    price: "10€",
    format: "EP",
    quantity: "1",
  },
  {
    id: 15432976,
    artiste: "Knock Out",
    name: "Rock'n'roll Skinhead",
    image: `${skinw}`,
    price: "7€",
    format: "EP",
    quantity: "2",
  },
  {
    id: 15018551,
    artiste: "Knock Out",
    name: "Rock'n'roll Skinhead",
    image: `${skin}`,
    price: "7€",
    format: "EP",
    quantity: "2",
  },
  {
    id: 13848683,
    artiste: "Les Partisans",
    name: "Rêves d'enfance/ Rien à perdre",
    image: `${reve}`,
    price: "6€",
    format: "EP",
    quantity: "2",
  },
  {
    id: 13638113,
    artiste: "Les Partisans",
    name: "Les lendemains qui dansent",
    image: `${lendemain}`,
    price: "6€",
    format: "EP",
    quantity: "1",
  },
  {
    id: 5369418,
    artiste: "Knock Out",
    name: "Que silbe la guillotina",
    image: `${guillotina}`,
    price: "6€",
    format: "EP",
    quantity: "1",
  },
  {
    id: 4269405,
    artiste: "Wasted Youth",
    name: "Remembering means fighting",
    image: `${remembering}`,
    price: "Libre",
    format: "EP",
    quantity: "1",
  },
  {
    id: 10056501,
    artiste: "Union Blood",
    name: "Working Class Pride",
    image: `${working}`,
    price: "6€",
    format: "EP",
    quantity: "1",
  },
  {
    id: 13312034,
    artiste: "VA - Red Skins Over Leipzig",
    name: "10 Jahre RASH LE",
    image: `${leipzig}`,
    price: "6€",
    format: "EP",
    quantity: "2",
  },
  {
    id: 14201735,
    artiste: "Année Zéro",
    name: "ST",
    image: `${zero}`,
    price: "6€",
    format: "EP",
    quantity: "2",
  },
  {
    id: 9943868,
    artiste: "T-killas",
    name: "Kicking the pressure",
    image: `${pressure}`,
    price: "6€",
    format: "EP",
    quantity: "1",
  },
  {
    id: 7373465,
    artiste: "VA - Tribute To Runnin Riot",
    name: "We're here for a good time, not a long time",
    image: `${collin}`,
    price: "6€",
    format: "EP",
    quantity: "1",
  },
  {
    id: 15422279,
    artiste: "La Cruz",
    name: "Cenizas",
    image: `${cruz}`,
    price: "7€",
    format: "EP",
    quantity: "4",
  },
];

epArticle.sort(compare);

export default epArticle;
