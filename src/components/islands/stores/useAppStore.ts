import { create } from "zustand";

interface BearState {
  heroVideoLoaded: boolean;
  setHeroVideoLoaded: (loaded: boolean) => void;
}

const useAppStore = create<BearState>()((set) => ({
  heroVideoLoaded: false,
  setHeroVideoLoaded: (loaded) => set({ heroVideoLoaded: loaded }),
}));

export { useAppStore };
