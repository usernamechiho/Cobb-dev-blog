import { atom } from 'recoil'

export const isEmailModal = atom<boolean>({
  key: '#isEmailModal',
  default: false,
})
