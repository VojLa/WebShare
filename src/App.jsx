import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import Contact from '@/pages/Contact'
import PageNotFound from '@/lib/PageNotFound'
import ComingSoon from '@/pages/ComingSoon'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reference" element={<ComingSoon />} />
          <Route path="/o-nas" element={<ComingSoon />} />
          <Route path="/gdpr" element={<ComingSoon />} />
          <Route path="/cookies" element={<ComingSoon />} />
          <Route path="/vedeni-ucetnictvi" element={<ComingSoon />} />
          <Route path="/dane" element={<ComingSoon />} />
          <Route path="/mzdy" element={<ComingSoon />} />
          <Route path="/personalistika" element={<ComingSoon />} />
          <Route path="/poradenstvi" element={<ComingSoon />} />
          <Route path="/sluzby" element={<ComingSoon />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
