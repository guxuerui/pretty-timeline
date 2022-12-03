export interface IList {
  date: string
  iconColor: string
  iconRight?: string
  iconTop?: string
  chipColor: string
  chipText?: string
  subTitleColor: string
  subTitle: string
  imgUrl?: string
  content: string
}

export interface ITimeline {
  isCollapsed: boolean
  year: string
  title: string
  list: IList[]
}
