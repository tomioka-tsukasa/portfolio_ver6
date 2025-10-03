export type InitialState = {
  currentPage: 'home' | 'menu'
}

export type PageId = 'home' | 'menu'

export type SetCurrentPageAction = PageId
