import React from 'react'
import { motion } from 'framer-motion'
import { Cookie, X, Check, Settings } from 'lucide-react'

export default function CookieConsent({ onAccept, onDecline, openPolicy }) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed bottom-0 inset-x-0 z-50 p-4 md:p-6"
    >
      <div className="container-custom">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              {/* Icon & Text */}
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 bg-roof-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6 text-roof-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-gray-900 mb-1">
                    We Value Your Privacy
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We use cookies to enhance your browsing experience, serve personalized content, 
                    and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.{' '}
                    <button 
                      onClick={openPolicy}
                      className="text-roof-blue-600 hover:underline font-medium"
                    >
                      Learn more
                    </button>
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3 w-full md:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onDecline}
                  className="flex-1 md:flex-none px-5 py-3 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Decline
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onAccept}
                  className="flex-1 md:flex-none px-5 py-3 bg-gradient-to-r from-roof-blue-500 to-roof-green-500 text-white rounded-xl font-medium shadow-roof hover:shadow-roof-lg transition-shadow flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  Accept All
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
