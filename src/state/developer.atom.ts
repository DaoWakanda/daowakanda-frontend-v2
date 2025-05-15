import { ITriviaRes } from '@/interface/challenge.interface';
import { IDeveloper } from '@/interface/developer.interface';
import { atom } from 'recoil';

export const DeveloperProfileAtom = atom<IDeveloper | null>({
  key: 'DeveloperProfileAtom',
  default: null,
});

export const TriviasAtom = atom<ITriviaRes | null>({
  key: 'TriviasAtom',
  default: null,
});

export const TriviaSearchTerm = atom<string>({
  key: 'TriviaSearchTerm',
  default: '',
});
