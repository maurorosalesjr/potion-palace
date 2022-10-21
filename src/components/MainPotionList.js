import health from "./../img/health.png";
import mana from "./../img/mana.png";
import stamina from "./../img/stamina.png";
import { v4 } from "uuid"

let mainPotionList = [
  {
    name: "Basic Health",
    type: "health",
    effect: "+25 health points added to your life.",
    quantity: 123,
    photo: health,
    id: v4()
  },
  {
    name: "Basic Mana",
    type: "mana",
    effect: "+25 mana points added to your mana pool.",
    quantity: 92,
    photo: mana,
    id: v4()
  },
  {
    name: "Basic Stamina",
    type: "stamina",
    effect: "+25 stamina points added to your stamina.",
    quantity: 35,
    photo: stamina,
    id: v4()
  },
];

export default mainPotionList;