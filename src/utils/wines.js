import pramaDorada from "../assets/wines/fronte_pramadorada_etichetta-340x340.png";
import oberaia from "../assets/wines/oberaia.png";
import familia from "../assets/wines/familia_etichetta-340x340.png";
import beijo from "../assets/wines/beijo.png";
import fria from "../assets/wines/fria.png";
import mariaTzufia from "../assets/wines/DH_mariatzufia_rombo.png";
import tempoRei from "../assets/wines/tempo-rei.png";

export const wines = (lang) => {

    return [
        {
            image: pramaDorada,
            name: "Prama Dorada",
            href: `/${lang}/prama-dorada`,
        },
        {
            image: oberaia,
            name: "Oberaia",
            href: `/${lang}/oberaia`,
        },
        {
            image: familia,
            name: "Familia",
            href: `/${lang}/familia`,
        },
        {
            image: fria,
            name: "Fria",
            href: `/${lang}/fria`,
        },
        {
            image: mariaTzufia,
            name: "Maria Tzufia",
            href: `/${lang}/maria-tzufia`,
        },
        {
            image: beijo,
            name: "Beijo",
            href: `/${lang}/beijo`,
        },
        {
            image: tempoRei,
            name: "Tempo Rei",
            href: `/${lang}/tempo-rei`,
        },
    ]
}