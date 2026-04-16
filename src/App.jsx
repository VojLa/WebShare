import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import Contact from '@/pages/Contact'
import PageNotFound from '@/lib/PageNotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App