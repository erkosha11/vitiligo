import { Card, Flex } from 'antd'
import { Footer } from 'features/Footer'
import { Header } from 'features/Header'
import React from 'react'

export const App: React.FC = () => {
  return (
    <Flex vertical gap='middle' className='container'>
      <Header />

      <Card
        variant='borderless'
        style={{
          display: 'grid',
          gap: '16px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
        }}
      >
        <div style={cardStyle('var(--color-card)')}>
          <h3 style={titleStyle}>Основной фон</h3>
          <p style={descStyle}>--color-card</p>
        </div>

        <div style={cardStyle('var(--color-accent)')}>
          <h3 style={titleStyle}>Акцент</h3>
          <p style={descStyle}>--color-accent</p>
        </div>

        <div style={cardStyle('var(--color-muted)')}>
          <h3 style={titleStyle}>Muted</h3>
          <p style={descStyle}>--color-muted</p>
        </div>

        <div style={cardStyle('var(--color-border)')}>
          <h3 style={titleStyle}>Border</h3>
          <p style={descStyle}>--color-border</p>
        </div>

        <div style={cardStyle('var(--color-danger)')}>
          <h3 style={titleStyle}>Danger</h3>
          <p style={descStyle}>--color-danger</p>
        </div>

        <div style={cardStyle('var(--color-success)')}>
          <h3 style={titleStyle}>Success</h3>
          <p style={descStyle}>--color-success</p>
        </div>
      </Card>
      <Footer />
    </Flex>
  )
}

const cardStyle = (bg: string): React.CSSProperties => ({
  backgroundColor: bg,
  borderRadius: 12,
  padding: 20,
  transition: 'all 0.3s ease'
})

const titleStyle: React.CSSProperties = {
  color: 'var(--color-primary)',
  fontSize: 18,
  marginBottom: 8
}

const descStyle: React.CSSProperties = {
  color: 'var(--text-color)',
  fontSize: 14
}
