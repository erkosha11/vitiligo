export interface Certificate {
  id: number
  title: string
  issuer: string
  year: number
  image: string
  country: string
}

export interface Conference {
  id: number
  title: string
  location: string
  year: number
  image: string
}

export interface Treatment {
  id: number
  title: string
  icon: string
  description: string
  results: string
  image: string
}

export type CardItem = Certificate | Conference | Treatment
