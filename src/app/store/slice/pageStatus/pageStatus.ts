import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { InitialState, SetCurrentPageAction } from './pageStatusTypes'
import { webglCtrl } from '@/app/webgl/setupMember'

const initialState: InitialState = {
  currentPage: 'home',
}

const pageStatus = createSlice({
  name: 'pageStatus',
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<SetCurrentPageAction>) {
      state.currentPage = action.payload
      webglCtrl.pageStatus = action.payload
    },
  }
})

export const { setCurrentPage } = pageStatus.actions
export default pageStatus.reducer
