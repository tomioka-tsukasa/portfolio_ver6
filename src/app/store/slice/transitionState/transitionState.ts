import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TransitionState, SetTransitioningAction } from './transitionStateTypes'

const initialState: TransitionState = {
  isTransitioning: false
}

const transitionState = createSlice({
  name: 'transitionState',
  initialState,
  reducers: {
    setTransitioning(state, action: PayloadAction<SetTransitioningAction>) {
      state.isTransitioning = action.payload
    }
  }
})

export const { setTransitioning } = transitionState.actions
export default transitionState.reducer
