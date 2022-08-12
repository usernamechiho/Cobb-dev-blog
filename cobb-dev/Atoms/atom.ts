import { atom } from 'recoil'

export const textState = atom<'light' | 'dark'>({
  key: '#Theme',
  default: 'light',
})
