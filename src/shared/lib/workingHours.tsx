import { TFunction } from 'i18next'

export const getWorkingHours = (t: TFunction) => [
  { day: t('days.monday'), time: '08:00–18:00' },
  { day: t('days.tuesday'), time: '12:00–19:00' },
  { day: t('days.wednesday'), time: '08:00–18:00' },
  { day: t('days.thursday'), time: '12:00–19:00' },
  { day: t('days.friday'), time: '08:00–18:00' },
  { day: t('days.saturday'), time: '09:00–13:00' },
  { day: t('days.sunday'), time: t('days.closed') }
]
