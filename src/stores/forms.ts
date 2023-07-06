import { create } from "zustand"
import { persist } from "zustand/middleware"

type FormStore = {
  firstName: string
  lastName: string
  setFirstName: (value: string) => void
  setLastName: (value: string) => void
}

export const useFormStore = create<FormStore>()(
  persist(
    (set) => ({
      firstName: "",
      lastName: "",
      setFirstName: (value) => set({ firstName: value }),
      setLastName: (value) => set({ lastName: value }),
    }),
    {
      name: "form-store",
    }
  )
)
