import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import "./index.css"
import Popular from './components/popular'

class App extends React.Component {
  render () {
    return (
      <div className='theme'>
        <div className='container'>
          <Popular />
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById('app')
const root = ReactDOM.createRoot(rootElement)
root.render(<App />)