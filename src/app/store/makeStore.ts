import { configureStore } from '@reduxjs/toolkit'
import loadingStore from './slice/loadingStore/loadingStore'
import pageStatus from './slice/pageStatus/pageStatus'

export const makeStore = () => {

  return configureStore({
    reducer: {
      loadingStore,
      pageStatus,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
