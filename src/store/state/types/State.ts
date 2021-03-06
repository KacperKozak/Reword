import { RouteName } from '../../types/RouteName'

export enum WordAction {
    Add,
    Delete,
}

export type Word = UnSavedWord & {
    id: string
    action?: WordAction
}

export type UnSavedWord = {
    name: string
    translation: string[]
    example: string[]
    preset?: string
}

export type WordsState = Word[]

export type UserState = {
    id: string
    email: string
    name: string
}

export type State = {
    route: RouteName
    lastRoutes: RouteName[]
    words?: WordsState
    user?: UserState | null
}
