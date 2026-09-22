import { Route, Routes } from 'react-router-dom'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Dash from './Dash.jsx'
import ClassAss from './ClassAss.jsx'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dash" element={<Dash/>} />
      <Route path='/ClassAss' element={<ClassAss/>}/>
    </Routes>
  )
}

export default App