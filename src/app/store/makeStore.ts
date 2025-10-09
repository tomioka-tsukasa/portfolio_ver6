import { configureStore } from '@reduxjs/toolkit'
import loadingStore from './slice/loadingStore/loadingStore'
import pageStatus from './slice/pageStatus/pageStatus'
import transitionState from './slice/transitionState/transitionState'

export const makeStore = () => {

  return configureStore({
    reducer: {
      loadingStore,
      pageStatus,
      transitionState,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
