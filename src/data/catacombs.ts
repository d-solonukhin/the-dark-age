import type { LocationI } from "../types";

export const CatacombRoomId = {
  Entrance: "entrance",
  DustyHall: "dusty-hall",
  BoneNiche: "bone-niche",
  MossAlcove: "moss-alcove",
  Ossuary: "ossuary",
} as const;

export const catacombs: LocationI = {
  id: "catacombs",
  name: "Катакомбы",
  startRoomId: CatacombRoomId.Entrance,
  rooms: {
    [CatacombRoomId.Entrance]: {
      id: CatacombRoomId.Entrance,
      name: "Вход в катакомбы",
      description: "Полуразрушенная арка. Дальше уходит коридор.",
      inspect: "У колонны потухший факел. Проход — вверх.",
      exits: { up: CatacombRoomId.DustyHall },
      x: 3,
      y: 4,
    },
    [CatacombRoomId.DustyHall]: {
      id: CatacombRoomId.DustyHall,
      name: "Пыльный зал",
      description: "Низкий зал. Следы ног ведут в три стороны.",
      inspect: "Влево кости, вправо мох, вверх темнее.",
      exits: {
        down: CatacombRoomId.Entrance,
        left: CatacombRoomId.BoneNiche,
        right: CatacombRoomId.MossAlcove,
        up: CatacombRoomId.Ossuary,
      },
      x: 3,
      y: 3,
    },
    [CatacombRoomId.BoneNiche]: {
      id: CatacombRoomId.BoneNiche,
      name: "Костная ниша",
      description: "Ниша, забитая костями.",
      inspect: "Среди костей блестят монеты. Обратно — вправо.",
      exits: { right: CatacombRoomId.DustyHall },
      x: 2,
      y: 3,
    },
    [CatacombRoomId.MossAlcove]: {
      id: CatacombRoomId.MossAlcove,
      name: "Моховая ниша",
      description: "Стены покрыты мхом.",
      inspect: "Мох и бледные грибы. Обратно — влево.",
      exits: { left: CatacombRoomId.DustyHall },
      x: 4,
      y: 3,
    },
    [CatacombRoomId.Ossuary]: {
      id: CatacombRoomId.Ossuary,
      name: "Оссуарий",
      description: "Стены из черепов. Тупик.",
      inspect: "Единственный выход — вниз.",
      exits: { down: CatacombRoomId.DustyHall },
      x: 3,
      y: 2,
    },
  },
};
