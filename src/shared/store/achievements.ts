import { makeAutoObservable } from 'mobx'
import dermatologyCert1 from 'assets/OF DERMATOLOGY-01.png'
import dermatologyCert2 from 'assets/OF DERMATOLOGY-02.png'
import dermatologyCert3 from 'assets/OF DERMATOLOGY-03.png'
import dermatologyCert4 from 'assets/OF DERMATOLOGY-04.png'
import dermatologyCert5 from 'assets/OF DERMATOLOGY-05.png'
import dermatologyCert6 from 'assets/OF DERMATOLOGY-06.png'
import dermatologyCert7 from 'assets/OF DERMATOLOGY-07.png'
import dermatologyCert8 from 'assets/OF DERMATOLOGY-08.png'
import dermatologyCert9 from 'assets/OF DERMATOLOGY-09.png'
import dermatologyCert10 from 'assets/OF DERMATOLOGY-10.png'
import dermatologyCert11 from 'assets/OF DERMATOLOGY-11.png'
import dermatologyCert12 from 'assets/OF DERMATOLOGY-12.png'
import dermatologyCert13 from 'assets/OF DERMATOLOGY-13.png'
import dermatologyCert14 from 'assets/OF DERMATOLOGY-14.png'
import { Certificate, Conference, Treatment } from './types'

class AchievementsStore {
  certificates: Certificate[] = [
    {
      id: 1,
      title: 'Paris, France',
      issuer: 'Pierre Fabre Dermatology Forum',
      year: 2015,
      image: dermatologyCert2,
      country: 'France'
    },
    {
      id: 2,
      title: 'Toronto, Canada',
      issuer: 'ICDV&C 2019',
      year: 2017,
      image: dermatologyCert8,
      country: 'Uzbekistan'
    },
    {
      id: 3,
      title: 'Toronto, Canada',
      issuer: 'V Международный Мастер Класс по Витилиго',
      year: 2017,
      image: dermatologyCert6,
      country: 'Kazakhstan'
    },
    {
      id: 4,
      title: 'Israel',
      issuer: 'Allied Academies',
      year: 2015,
      image: dermatologyCert3,
      country: 'Canada'
    },
    {
      id: 5,
      title: 'Chandigarh, India',
      issuer: 'Department of Dermatology, PGIMER, Chandigarh',
      year: 2016,
      image: dermatologyCert7,
      country: 'India'
    },
    {
      id: 6,
      title: 'St. Petersburg, Russia',
      issuer: 'The Israel Society of Dermatology and Venereology',
      year: 2011,
      image: dermatologyCert1,
      country: 'St. Petersburg, Russia'
    },

    {
      id: 7,
      title: 'St. Petersburg, Russia',
      issuer: 'Санкт-Петербургское научное общество дерматовенерологов',
      year: 2019,
      image: dermatologyCert4,
      country: 'Russia'
    },
    {
      id: 8,
      title: 'Tashkent, Uzbekistan',
      issuer: 'International Society of Dermatology',
      year: 2019,
      image: dermatologyCert5,
      country: 'Russia'
    },
    {
      id: 9,
      title: 'Tashkent, Uzbekistan',
      issuer: 'ICDV&C 2024',
      year: 2024,
      image: dermatologyCert12,
      country: 'Uzbekistan'
    },
    {
      id: 10,
      title: 'Bishkek, Kyrgyzstan',
      issuer: 'Ассоциация дерматовенерологов и косметологов',
      year: 2023,
      image: dermatologyCert13,
      country: 'Kazakhstan'
    },
    {
      id: 11,
      title: 'Almaty, Kazakhstan',
      issuer: 'Allied Academies',
      year: 2014,
      image: dermatologyCert10,
      country: 'Canada'
    },
    {
      id: 12,
      title: 'Almaty, Kazakhstan',
      issuer: 'Коллегия дерматовенерологов г. Алматы',
      year: 2024,
      image: dermatologyCert9,
      country: 'Kazakhstan'
    },
    {
      id: 13,
      title: 'Almaty, Kazakhstan',
      issuer: 'Общество дерматовенерологов г. Алматы',
      year: 2023,
      image: dermatologyCert11,
      country: 'Kazakhstan'
    },
    {
      id: 14,
      title: 'Курмет грамотасы',
      issuer: 'QAZ DERMATOLOGIA JANE INFEKSIALYQ ÄRÝLAR GÝLYMI ORTALYGY',
      year: 2022,
      image: dermatologyCert14,
      country: 'Kazakhstan'
    }
  ]

  conferences: Conference[] = [
    {
      id: 1,
      title: 'Международный конгресс по лечению витилиго',
      location: 'Париж, Франция',
      year: 2021,
      image:
        'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      id: 2,
      title:
        'Симпозиум по современным методам лечения дерматологических заболеваний',
      location: 'Барселона, Испания',
      year: 2022,
      image:
        'https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      id: 3,
      title: 'Форум инновационных дерматологических технологий',
      location: 'Токио, Япония',
      year: 2023,
      image:
        'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80'
    }
  ]

  treatments: Treatment[] = [
    {
      id: 1,
      title: 'Узкополосная фототерапия UVB',
      icon: 'Sun',
      description:
        'Современная технология светотерапии, которая использует узкий спектр UVB-лучей для стимуляции репигментации кожи при витилиго. Процедура безболезненна и высокоэффективна.',
      results:
        'До 70% пациентов наблюдают значительное улучшение при регулярных процедурах в течение 3-6 месяцев.',
      image:
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      id: 2,
      title: 'Специализированные ванны PUVA-терапии',
      icon: 'Bath',
      description:
        'Метод, сочетающий применение фотосенсибилизирующих препаратов и воздействие длинноволновым ультрафиолетовым излучением спектра А в специальных ваннах.',
      results:
        'Эффективность до 85% при комплексном применении с другими методами лечения в течение 6-12 месяцев.',
      image:
        'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80'
    }
  ]

  activeTab: string = 'certificates'

  constructor() {
    makeAutoObservable(this, {
      activeTab: true,
      setActiveTab: true
    })
  }

  setActiveTab = (tab: string) => {
    this.activeTab = tab
  }
}

export const achievementsStore = new AchievementsStore()
