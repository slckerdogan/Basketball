import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavigationBar from './components/Navbar'
import LoadingSpinner from './components/LoadingSpinner'
import 'bootstrap/dist/css/bootstrap.min.css'

// Ana sayfayı doğrudan import edelim, diğerleri lazy loading ile gelsin
import HomePage from './pages/HomePage'

// Lazy loading ile diğer sayfaları yükleme
const NewsDetail = React.lazy(() => import('./pages/NewsDetail'))
const TeamStats = React.lazy(() => import('./pages/TeamStats'))
const PlayerStats = React.lazy(() => import('./pages/PlayerStats'))
const InjuryReports = React.lazy(() => import('./pages/InjuryReports'))
const Fixtures = React.lazy(() => import('./pages/Fixtures'))
const Standings = React.lazy(() => import('./pages/Standings'))
const Contact = React.lazy(() => import('./pages/Contact'))
const About = React.lazy(() => import('./pages/About'))

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/haber/:id" element={<NewsDetail />} />
            <Route path="/takim-istatistikleri" element={<TeamStats />} />
            <Route path="/oyuncu-istatistikleri" element={<PlayerStats />} />
            <Route path="/sakatlik-raporlari" element={<InjuryReports />} />
            <Route path="/fikstur" element={<Fixtures />} />
            <Route path="/puan-durumu" element={<Standings />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/hakkimizda" element={<About />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  )
}

export default App