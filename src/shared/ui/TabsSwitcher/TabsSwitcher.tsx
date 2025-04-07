import { FC, useLayoutEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './TabsSwitcher.module.scss'

type Tab = {
  value: string
  label: string
  icon: React.ReactNode
}

interface TabsSwitcherProps {
  tabs: Tab[]
  activeTab: string
  onChange: (value: string) => void
}

export const TabsSwitcher: FC<TabsSwitcherProps> = ({
  tabs,
  activeTab,
  onChange
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    top: 0,
    height: 0
  })
  const [isVertical, setIsVertical] = useState(false)

  useLayoutEffect(() => {
    const updateLayout = () => {
      setIsVertical(window.innerWidth < 768)
    }

    updateLayout()
    window.addEventListener('resize', updateLayout)
    return () => window.removeEventListener('resize', updateLayout)
  }, [])

  useLayoutEffect(() => {
    const activeIndex = tabs.findIndex((tab) => tab.value === activeTab)
    const activeButton = buttonRefs.current[activeIndex]

    if (activeButton) {
      const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = activeButton
      setIndicatorStyle({
        left: isVertical ? 8 : offsetLeft,
        top: isVertical ? offsetTop : 8,
        width: isVertical
          ? containerRef.current?.offsetWidth! - 16
          : offsetWidth,
        height: isVertical
          ? offsetHeight
          : containerRef.current?.offsetHeight! - 16
      })
    }
  }, [activeTab, tabs, isVertical])

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.tabs} ${isVertical ? styles.vertical : ''}`}
        ref={containerRef}
      >
        <motion.span
          className={styles.bubble}
          animate={indicatorStyle}
          transition={{ type: 'spring', stiffness: 500, damping: 60 }}
        />
        {tabs.map((tab, i) => (
          <button
            key={tab.value}
            ref={(el) => {
              buttonRefs.current[i] = el
            }}
            onClick={() => onChange(tab.value)}
            className={styles.tabButton}
          >
            <span className={styles.content}>
              {tab.icon}
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
