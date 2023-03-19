import { create } from 'zustand'


const userData = create((set) => ({
    data: [],          
    setData: (data) => {
        set(() => {
            return { data: data }
        })
    },
    addData: (data) =>
    set((state) => ({
        data: [...state.data, data],
    })),
    updateData: (index, newObject) =>
    set((state) => ({
      data: [
        ...state.data.slice(0, index),
        newObject,
        ...state.data.slice(index + 1),
      ],
    })),
}))

export {
    userData
}