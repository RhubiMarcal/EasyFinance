declare interface User {
  name: string
  email: string
  password: string
}

declare interface UserLogin {
  email: string
  password: string
}

declare interface ResAPI {
  msg: string
}

declare interface ResUser {
  id: number
  name: string
  email: string
}

declare type Transaction = {
  id: number
  type: 'gasto' | 'ganho'
  value: number
  date: string
  category: string
  goal_id?: number
}

declare type TransactionReq = {
  type: 'gasto' | 'ganho'
  value: number
  date: string
  category: string
  goal_id?: number
}

declare type Goal = {
  id: number
  name: string
  GoalValue: number
  CurrentValue: number
  historico: Transaction[]
}

declare type GoalReq = {
  name: string
  GoalValue: number
  CurrentValue: number
}

declare type GoalReqEdit = {
  newName: string
  newGoal: number
}

declare type Limit = {
  id: number
  category: string
  value: number
}

declare type LimitReq = {
  category: string
  value: number
}

declare type Category = {
  id: number
  name: string
}

declare type CategoryReq = {
  name: string
}

declare interface ErrorDetail {
  detail: string
}
