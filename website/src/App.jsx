import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Toaster } from 'sonner'
import { useState, useEffect } from 'react'

// Layout Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import PolicyModal from './components/PolicyModal'
import ScrollToTop from './components/ScrollToTop'
import PageTransition from './components/PageTransition'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  const location = useLocation()
  const [showCookieConsent, setShowCookieConsent] = useState(false)
  const [policyModal, setPolicyModal] = useState({ open: false, type: null })

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      const timer = setTimeout(() => setShowCookieConsent(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleCookieAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setShowCookieConsent(false)
  }

  const handleCookieDecline = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setShowCookieConsent(false)
  }

  const openPolicy = (type) => setPolicyModal({ open: true, type })
  const closePolicy = () => setPolicyModal({ open: false, type: null })

  return (
    <div className="flex flex-col min-h-screen pacaembu-font">
                <style jsx>{`
            /* Niveau Grotesk Font Face - Regular */

            /* Pacaembu Font Faces */
            @font-face {
              font-family: "Pacaembu";
              src: url("./fonts/Pacaembu-Thin-Trial.ttf") format("truetype");
              font-weight: 100;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: "Pacaembu";
              src: url("./fonts/Pacaembu-Light-Trial.ttf") format("truetype");
              font-weight: 300;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: "Pacaembu";
              src: url("./fonts/Pacaembu-Regular-Trial.ttf") format("truetype");
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: "Pacaembu";
              src: url("./fonts/Pacaembu-Medium-Trial.ttf") format("truetype");
              font-weight: 500;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: "Pacaembu";
              src: url("./fonts/Pacaembu-Bold-Trial.ttf") format("truetype");
              font-weight: 700;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: "Pacaembu";
              src: url("./fonts/Pacaembu-Black-Trial.ttf") format("truetype");
              font-weight: 900;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: "Pacaembu";
              src: url("./fonts/Pacaembu-Ultra-Trial.ttf") format("truetype");
              font-weight: 950;
              font-style: normal;
              font-display: swap;
            }

            .pacaembu-font {
              font-family: "Pacaembu", "Inter", "Segoe UI", Tahoma, Geneva,
                Verdana, sans-serif;
            }
          `}</style>
      <Toaster 
        position="top-right" 
        richColors 
        toastOptions={{
          style: {
            fontFamily: 'Source Sans Pro, system-ui, sans-serif',
          },
        }}
      />
      
      <ScrollToTop />
      <Navbar openPolicy={openPolicy} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <PageTransition>
                <Home />
              </PageTransition>
            } />
            <Route path="/about" element={
              <PageTransition>
                <About />
              </PageTransition>
            } />
            <Route path="/products" element={
              <PageTransition>
                <Products />
              </PageTransition>
            } />
            <Route path="/services" element={
              <PageTransition>
                <Services />
              </PageTransition>
            } />
            <Route path="/projects" element={
              <PageTransition>
                <Projects />
              </PageTransition>
            } />
            <Route path="/careers" element={
              <PageTransition>
                <Careers />
              </PageTransition>
            } />
            <Route path="/contact" element={
              <PageTransition>
                <Contact />
              </PageTransition>
            } />
            <Route path="*" element={
              <PageTransition>
                <NotFound />
              </PageTransition>
            } />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer openPolicy={openPolicy} />
      
      <AnimatePresence>
        {showCookieConsent && (
          <CookieConsent 
            onAccept={handleCookieAccept} 
            onDecline={handleCookieDecline}
            openPolicy={() => openPolicy('cookies')}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {policyModal.open && (
          <PolicyModal 
            type={policyModal.type} 
            onClose={closePolicy} 
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
