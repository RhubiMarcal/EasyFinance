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
  type: 'gasto' | 'ganho'
  value: number
  date: string
  category: string
  isMeta?: boolean
}

declare type Goal = {
  name: string
  GoalValue: number
  CurrentValue: number
  historico: Transaction[]
}

declare type Limit = {
  category: string
  value: number
}
