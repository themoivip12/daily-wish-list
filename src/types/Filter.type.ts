export interface IUseFilter<T> {
  visible: boolean
  onClose: ()=>void
  onOpen: ()=>void
  filter: T
  onFilter: (filter: T)=> void
}

export type IFilterProps<T> = Pick< IUseFilter<T>,"filter"|'onFilter'>


export interface FilterParams {
  page_size?: number;
  page?: number;
  work?: string;
  typeOfWork?: string;
}

export interface FilterAsyncSelectParams extends Record<string, unknown> {
  page_size?: number;
  page?: number;
  keyWork?: string;
}
