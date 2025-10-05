export type InitialState = {
  currentStatus: PageStatus
  currentPage: PageId
}

export type PageStatus = 'home' | 'menu' | 'about' | 'works' | 'blog'

export type PageId = 'home' | 'about' | 'works' | 'blog'

export type SetCurrentStatusAction = PageStatus
