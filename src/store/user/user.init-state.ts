import { IInitialState } from './user.interface'

// export const initialState: IInitialState = {
//   user: localStorage.getItem('user')
//     ? JSON.parse(localStorage.getItem('user') as string)
//     : null,
//   isLoading: false
// }

export const initialState: IInitialState = {
    user:
    typeof window !== 'undefined' && localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user') as string)
      : null,
  isLoading: false
}
