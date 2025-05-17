import { create } from 'zustand'

export const useUpStore = create((set) => ({
  email: null,
  btn:false,
  submitbtn:false,
  changebtn: () => set((state) => ({ btn: !state.btn })),
  changeSubmitbtn: () => set((state) => ({ submitbtn: !state.submitbtn })),
//   removeAllBears: () => set({ bears: 0 }),
  updateEmail: (newEmail) => set({ email: newEmail }),
  reset: () => set((state)=> ({email:null,btn:false}))
}))
