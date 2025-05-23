import { create } from 'zustand';

interface SearchBarState {
  value: string;
  setValue: (value: string) => void;
}

const useSearchBar = create<SearchBarState>((set) => {
  return {
    value: '',
    setValue: (value) => set({ value }),
  }
})

export default useSearchBar