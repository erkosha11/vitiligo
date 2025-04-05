import { useState } from 'react'
import { Button, Card, Flex, Typography } from 'antd'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import styles from './Header.module.scss'
import { navLinks } from 'shared/config'
import { ClinicInfo } from 'shared/ui'

const { Title, Link } = Typography

export const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <Card className={styles.header} bordered={false}>
      <Flex justify='space-between' align='center'>
        <ClinicInfo />

        <div className={styles.navLinks}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link}>
              <Title level={5}>{link.label}</Title>
            </Link>
          ))}
        </div>

        <Button
          className={styles.burger}
          type='primary'
          icon={open ? <CloseOutlined /> : <MenuOutlined />}
          onClick={() => setOpen((prev) => !prev)}
        />
      </Flex>

      <div
        className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}
        onClick={() => setOpen(false)}
      >
        <div
          className={styles.drawerContent}
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map((link) => (
            <p key={link.href}>
              <Link href={link.href} className={styles.drawerLink}>
                <Title level={5}>{link.label}</Title>
              </Link>
            </p>
          ))}
        </div>
      </div>
    </Card>
  )
}
