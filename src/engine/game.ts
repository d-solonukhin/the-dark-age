import { ref, toValue } from 'vue';
import { LocationId, locations } from '../data/locations';
import {
  DIRECTION_LABEL,
  type DirectionT,
  type GameStateI,
  type LocationI,
  type LogEntryKindT,
  type RoomI,
} from '../types';

let nextLogId = 1;

// Актуальное состояние игры
export const state = ref<GameStateI>({
  character: {
    currentLocationId: LocationId.Catacombs,
    currentRoomId: locations[LocationId.Catacombs].startRoomId,
  },
  log: [],
});

// Записывает лог в State
function pushLog(kind: LogEntryKindT, text: string) {
  toValue(state).log.push({ id: nextLogId++, kind, text });
}

// Возвращает текущую локацию
export function getLocation(): LocationI {
  const location = locations[toValue(state).character.currentLocationId];

  if (!location) {
    throw new Error('Локация не найдена');
  }

  return location;
}

// Возвращает текущую комнату
export function getRoom(): RoomI {
  const room = getLocation().rooms[toValue(state).character.currentRoomId];

  if (!room) {
    throw new Error('Комната не найдена');
  }

  return room;
}

// Возвращает все выходы из комнаты
export function getExits(): DirectionT[] {
  return (Object.keys(getRoom().exits) as DirectionT[]).filter(
    (dir) => getRoom().exits[dir],
  );
}

// Проверяет, можно ли двигаться по направлению
export function canMove(direction: DirectionT): boolean {
  return Boolean(getRoom().exits[direction]);
}

// Событие Вход в комнату
function enterRoom(room: RoomI) {
  pushLog('enter', `${room.name}.\n${room.description}`);
}

// Событие Осмотреть комнату
export function lookAround() {
  pushLog('look', getRoom().inspect);
}

// Движение по направлению
export function move(direction: DirectionT) {
  const nextId = getRoom().exits[direction];

  if (!nextId) {
    pushLog('system', `Туда не пройти (${DIRECTION_LABEL[direction]}).`);
    return;
  }

  const next = getLocation().rooms[nextId];
  if (!next) {
    pushLog('system', 'Проход ведёт в никуда.');
    return;
  }

  toValue(state).character.currentRoomId = next.id;
  pushLog('move', `Ты идёшь: ${DIRECTION_LABEL[direction].toLowerCase()}.`);
  enterRoom(next);
}

// Инициализация игры
export function initGame() {
  nextLogId = 1;
  toValue(state).log = [];
  toValue(state).character.currentLocationId = LocationId.Catacombs;
  toValue(state).character.currentRoomId =
    locations[LocationId.Catacombs].startRoomId;
  pushLog('system', `Локация: ${getLocation().name}.`);
  enterRoom(getRoom());
}

initGame();
