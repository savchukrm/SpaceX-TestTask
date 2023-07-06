import { atom } from 'recoil';

import { CardData } from '../utils/types';

export const favoriteCardsState = atom<CardData[]>({
  key: 'favoriteCardsState',
  default: [],
});
