import { RouteName } from '../../types/RouteName'
import { WordsState } from './State'

type Action<T, P> = {
    type: T
    payload: P
}

export type Actions =
    | Action<'ROUTER/SET_ROUTE', { route: RouteName }>
    | Action<'WORDS/SET', WordsState>
    | Action<'WORDS/ADD_WORD', { name: string; translation: string; example?: string }>
    | Action<'WORDS/REMOVE_WORD', { id: string }>