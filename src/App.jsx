import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css'
import ProfilePage from './Pages/ProfilePage.jsx'
import FilterPage from './Pages/FilterPage.jsx'
import MessagesPage from './Pages/MessagesPage.jsx'
import AccountPage from './Pages/AccountPage.jsx'
import TransActionsPage from './Pages/TransActionsPage.jsx'
import VakilPage from './Pages/VakilPage.jsx'


function App() {

  return (
    <>
      <BrowserRouter>
          <div>
            <Routes>
              <Route path='filter'  element={<FilterPage/>} />
              <Route path='profile'  element={<ProfilePage/>} />
              <Route path='message'  element={<MessagesPage/>} />
              <Route path='transaction'  element={<TransActionsPage/>} />
              <Route path='account'  element={<AccountPage/>} />
              <Route path='vakil'  element={<VakilPage/>} />
            </Routes>
          </div>
      </BrowserRouter>
        
    </>
  )
}

export default App
