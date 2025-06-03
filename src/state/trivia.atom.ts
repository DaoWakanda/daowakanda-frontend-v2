import { ITriviaRes } from '@/interface/challenge.interface';
import { atom } from 'recoil';

export const TriviasAtom = atom<ITriviaRes | null>({
  key: 'TriviasAtom',
  default: null,
});

export const TriviaSearchTerm = atom<string>({
  key: 'TriviaSearchTerm',
  default: '',
});
