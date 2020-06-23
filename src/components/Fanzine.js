import bra8 from "./img/fanzine/bra8.jpg";
import bra9 from "./img/fanzine/bra9.jpg";
import compare from "./Compare";

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
];

fanzine.sort(compare);

export default fanzine;
