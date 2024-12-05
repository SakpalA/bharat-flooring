import blending from '../../assets/images/blending.png';
import molding from '../../assets/images/molding.jpeg';
import compressing from '../../assets/images/compressing.jpeg';
import hardening from '../../assets/images/hardening.png';
import hydrolysis from '../../assets/images/hydrolysis.png';
import drying from '../../assets/images/drying.png';

export const data = [
    {
        id: 1,
        number: 1,
        name: "Blending",
        para: "The pigment composition is a mixture of high quality white Portland cement, marble powder and natural mineral colour pigments. The ingredients are blended together carefully over a period of 3-4 hours to produce the final colours.",
        image: blending
    },
    {
        id: 2,
        number: 2,
        name: "Molding",
        para: "The colours are filled with heand into a metal mold. The metal mold, containing the desired pattern is handmade from specific design drawings. Handmade cement tiles are uniqueand are expected to have slight imperfections, ehich give them character and depth.",
        image: molding
    },
    {
        id: 3,
        number: 3,
        name: "Compressing",
        para: "A cork in the from of a strong metal plate is applied at the top of the mold and the tile is pressed using a mechanical hydrautic press. The pressure epplied is up to 1-ton per square inch, which produces a compact tile.",
        image: compressing
    }, 
    {
        id: 4,
        number: 4,
        name: "Hardening",
        para: "After pressing, the tiles are removed from the mold and placed an a rack until they harden enough to be moved into a tank of water.",
        image: hardening
    },
    {
        id: 5,
        number: 5,
        name: "Hydrolysis",
        para: "The tiles are cured in water for several days, and not touched, during which they undergo a hydrolysis process and harden into strong concrete.",
        image: hydrolysis
    },
    {
        id: 6,
        number: 6,
        name: "Drying",
        para: "They are then removed from the tank, and allowed to further cure in the air, until they are fully ready to be shipped to the customer.",
        image: drying
    }
];

export default data;