import { create } from "zustand";
interface ILinktoo {
   page: string;
   setPage: (page: string) => void;
}

export const useStore = create<ILinktoo>((set) => ({
   page: "/service",
   setPage: (page) => set({ page }),
}));
