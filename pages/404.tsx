import React from 'react'
import NotFound from '../components/NotFound/NotFound'

const Index = () => {
  return (
    <div style={{
      width: "100%",
      height: "fit-content",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "auto",
    }}>
      <NotFound />
    </div>
  )
}

export default Index