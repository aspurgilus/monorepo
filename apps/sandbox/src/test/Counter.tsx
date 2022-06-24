import { FC } from 'react'

import { useAppSelector, useAppDispatch } from '../store/hooks'
import { RootState } from '../store'

import { decrement, increment } from '../store/slices/counterSlice'

export const Counter: FC = () => {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state: RootState) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <span>{count}</span>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
    </div>
  )
}
