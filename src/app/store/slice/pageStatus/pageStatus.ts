import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { InitialState, SetCurrentPageAction, SetCurrentStatusAction } from './pageStatusTypes'
import { webglCtrl } from '@/app/webgl/setupMember'

const initialState: InitialState = {
  currentStatus: 'home',
  currentPage: 'home',
}

const pageStatus = createSlice({
  name: 'pageStatus',
  initialState,
  reducers: {
    setCurrentStatus(state, action: PayloadAction<SetCurrentStatusAction>) {
      state.currentStatus = action.payload
      webglCtrl.pageStatus = action.payload
    },
    setCurrentPage(state, action: PayloadAction<SetCurrentPageAction>) {
      state.currentPage = action.payload
    }
  }
})

export const { setCurrentStatus, setCurrentPage } = pageStatus.actions
export default pageStatus.reducer
