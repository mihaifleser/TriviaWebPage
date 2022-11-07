import {ICategory} from "./Category.component";

export interface IQuestion {
  id?: number
  question: string
  answer: string
  value: number
  created_at?: Date,
  category: ICategory
}
