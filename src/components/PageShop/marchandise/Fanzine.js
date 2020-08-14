import bra8 from "../../Img/fanzine/bra8.jpg";
import bra9 from "../../Img/fanzine/bra9.jpg";
import arvar4 from "../../Img/fanzine/arvar4.png";
import arvar5 from "../../Img/fanzine/arvar5.png";
import compare from "../../Function/Compare";

const fanzine = [
  {
    id: 1,
    artiste: "B.R.A",
    name: "Numero 8",
    image: `${bra8}`,
    price: "2€",
    format: "fanzine",
    quantity: "1",
  },
  {
    id: 2,
    artiste: "B.R.A",
    name: "Numero 9",
    image: `${bra9}`,
    price: "2€",
    format: "fanzine",
    quantity: "4",
  },
  {
    id: 3,
    artiste: "Arvar Fanzine",
    name: "Numero 4",
    image: `${arvar4}`,
    price: "Libre",
    format: "fanzine",
    quantity: "4",
  },
  {
    id: 3,
    artiste: "Arvar Fanzine",
    name: "Numero 5",
    image: `${arvar5}`,
    price: "Libre",
    format: "fanzine",
    quantity: "4",
  },
];

fanzine.sort(compare);

export default fanzine;
