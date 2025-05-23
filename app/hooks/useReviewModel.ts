import { create } from 'zustand';

interface ReviewModalStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const useReviewModal = create<ReviewModalStore>((set) => {
  return {
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
  }
})

export default useReviewModal