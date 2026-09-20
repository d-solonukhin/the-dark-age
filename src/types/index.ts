export type DirectionT = 'up' | 'down' | 'left' | 'right';

export type LogEntryKindT = 'enter' | 'look' | 'move' | 'system';

export const DIRECTION_LABEL: Record<DirectionT, string> = {
  up: 'Вверх ↑',
  down: 'Вниз ↓',
  left: 'Влево ←',
  right: 'Вправо →',
};

export interface UniqueEntityI {
  id: string;
}

export interface LocationI extends UniqueEntityI {
  name: string;
  startRoomId: RoomI['id'];
  rooms: Record<RoomI['id'], RoomI>;
}

export interface RoomI extends UniqueEntityI {
  name: string;
  description: string; // Описание комнаты при входе
  inspect: string; // Игрок нажал кнопку «осмотреться»
  exits: Partial<Record<DirectionT, RoomI['id']>>;
  x: number; // 0..7
  y: number; // 0..7, 0 сверху
}

export interface CharacterI {
  currentLocationId: LocationI['id'];
  currentRoomId: RoomI['id'];
}

export interface LogEntryI {
  id: number;
  kind: LogEntryKindT;
  text: string;
}

export interface GameStateI {
  character: CharacterI;
  log: LogEntryI[];
}
