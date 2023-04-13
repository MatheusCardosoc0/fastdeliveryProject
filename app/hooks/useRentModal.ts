import { create } from 'zustand'

interface rentModalStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

const useRentModal = create<rentModalStore>(set => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true })
}))

export default useRentModal