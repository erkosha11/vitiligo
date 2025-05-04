import { makeAutoObservable } from 'mobx'

class HeaderStore {
  isMenuOpen = false

  constructor() {
    makeAutoObservable(this)
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }

  closeMenu() {
    this.isMenuOpen = false
  }
}

export const headerStore = new HeaderStore()
