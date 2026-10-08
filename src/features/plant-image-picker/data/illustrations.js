import aloeVera from "../assets/aloe-vera.png";
import basil from "../assets/basil.png";
import bostonFern from "../assets/boston-fern.png";
import monstera from "../assets/monstera.png";
import snakePlant from "../assets/snake-plant.png";
import succulentTrio from "../assets/succulent-trio.png";


export const ILLUSTRATIONS = [
  { key: "monstera", name: "Monstera", src: monstera },
  { key: "snake-plant", name: "Snake Plant", src: snakePlant },
  { key: "basil", name: "Basil", src: basil },
  { key: "aloe-vera", name: "Aloe Vera", src: aloeVera },
  { key: "boston-fern", name: "Boston Fern", src: bostonFern },
  { key: "succulent-trio", name: "Succulent Trio", src: succulentTrio },
];

export function getIllustration(key) {
  return ILLUSTRATIONS.find((illustration) => illustration.key === key) ?? null;
}
