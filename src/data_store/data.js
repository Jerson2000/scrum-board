import { data } from 'autoprefixer'
import { create } from 'zustand'


const userData = create((set) => ({
  user: [],
  setData: (data) => {
    set(() => {
      return { data: data }
    })
  },
  addData: (data) =>
    set((state) => ({
      user: [...state.user, data],
    })),
  updateData: (index, newObject) =>
    set((state) => ({
      user: [
        ...state.user.slice(0, index),
        newObject,
        ...state.user.slice(index + 1),
      ],
    })),

  addBoardData: (objectIndex, data) =>
    set((state) => ({
      user: [
        ...state.user.slice(0, objectIndex),
        {
          ...state.user[objectIndex],
          data: [...state.user[objectIndex].data, data],
        },
        ...state.user.slice(objectIndex + 1),
      ],
    })),
  addBoardItem: (objectIndex, dataIndex, newBoardItem) =>
    set((state) => ({
      user: [
        ...state.user.slice(0, objectIndex),
        {
          ...state.user[objectIndex],
          data: [
            ...state.user[objectIndex].data.slice(0, dataIndex),
            {
              ...state.user[objectIndex].data[dataIndex],
              items: [
                ...state.user[objectIndex].data[dataIndex].items,
                newBoardItem,
              ],
            },
          ],
        },
      ],
    })),

  addCard: (objectIndex, dataIndex, itemIndex, newCardObject) =>
    set((state) => ({
      user: [
        ...state.user.slice(0, objectIndex),
        {
          ...state.user[objectIndex],
          data: [
            ...state.user[objectIndex].data.slice(0, dataIndex),
            {
              ...state.user[objectIndex].data[dataIndex],
              items: [
                ...state.user[objectIndex].data[dataIndex].items.slice(0, itemIndex),
                {
                  ...state.user[objectIndex].data[dataIndex].items[itemIndex],
                  cards: [
                    ...state.user[objectIndex].data[dataIndex].items[itemIndex].cards,
                    newCardObject,
                  ],
                },
                ...state.user[objectIndex].data[dataIndex].items.slice(itemIndex + 1),
              ],
            },
            ...state.user[objectIndex].data.slice(dataIndex + 1),
          ],
        },
        ...state.user.slice(objectIndex + 1),
      ],
    })),

}))

export {
  userData
}