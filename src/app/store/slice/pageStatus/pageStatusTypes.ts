export type InitialState = {
  currentPage: 'home' | 'menu' | 'about' | 'works' | 'blog'
}

export type PageId = 'home' | 'menu' | 'about' | 'works' | 'blog'

export type SetCurrentPageAction = PageId
