import React from 'react'
import { motion } from 'framer-motion'
import { X, Shield, FileText, Cookie } from 'lucide-react'
import { useEffect } from 'react'
import { SiFsecure } from "react-icons/si";

const policyContent = {
  privacy: {
    icon: SiFsecure,
    title: 'Privacy Policy',
    lastUpdated: 'January 2024',
    sections: [
      {
        title: '1. Information We Collect',
        content: `At Roof iT, we collect information you provide directly to us, such as when you request a quote, contact us, apply for a job, or subscribe to our newsletter. This may include your name, email address, phone number, and any other information you choose to provide.

We also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, and pages viewed.`
      },
      {
        title: '2. How We Use Your Information',
        content: `We use the information we collect to:
• Respond to your inquiries and provide customer service
• Process and fulfill your requests for products and services
• Send you promotional communications (with your consent)
• Improve our website and services
• Comply with legal obligations`
      },
      {
        title: '3. Information Sharing',
        content: `We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to provide our services, comply with the law, or protect our rights.`
      },
      {
        title: '4. Data Security',
        content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.`
      },
      {
        title: '5. Your Rights',
        content: `You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time by contacting us.`
      },
      {
        title: '6. Contact Us',
        content: `If you have questions about this Privacy Policy, please contact us at sales@roofit.co.zw or call +263 783 284 060.`
      }
    ]
  },
  terms: {
    icon: FileText,
    title: 'Terms of Service',
    lastUpdated: 'January 2024',
    sections: [
      {
        title: '1. Acceptance of Terms',
        content: `By accessing and using the Roof iT website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.`
      },
      {
        title: '2. Products and Services',
        content: `Roof iT provides roofing materials including IBR Chromadek, Q-Tiles, Valley Gutters, Ridges, and related hardware. All product specifications, prices, and availability are subject to change without notice.`
      },
      {
        title: '3. Pricing and Payment',
        content: `All prices are quoted in USD/ZWL and are subject to change. Payment terms will be specified in individual quotes and invoices. We reserve the right to modify prices at any time.`
      },
      {
        title: '4. Warranties',
        content: `Our products come with manufacturer warranties as specified. We do not warrant that our products are suitable for any particular purpose beyond their intended use.`
      },
      {
        title: '5. Limitation of Liability',
        content: `Roof iT shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our products or services.`
      },
      {
        title: '6. Intellectual Property',
        content: `All content on this website, including logos, images, and text, is the property of Roof iT and protected by copyright laws. Unauthorized use is prohibited.`
      },
      {
        title: '7. Governing Law',
        content: `These terms shall be governed by the laws of Zimbabwe. Any disputes shall be resolved in the courts of Harare.`
      }
    ]
  },
  cookies: {
    icon: Cookie,
    title: 'Cookie Policy',
    lastUpdated: 'January 2024',
    sections: [
      {
        title: '1. What Are Cookies',
        content: `Cookies are small text files stored on your device when you visit our website. They help us provide a better user experience and understand how our site is used.`
      },
      {
        title: '2. Types of Cookies We Use',
        content: `Essential Cookies: Required for the website to function properly.
Analytics Cookies: Help us understand how visitors interact with our site.
Marketing Cookies: Used to deliver relevant advertisements.
Preference Cookies: Remember your settings and preferences.`
      },
      {
        title: '3. How to Control Cookies',
        content: `You can control cookies through your browser settings. Most browsers allow you to refuse cookies or delete existing ones. Note that disabling cookies may affect site functionality.`
      },
      {
        title: '4. Third-Party Cookies',
        content: `We may use third-party services that set their own cookies, such as Google Analytics. These are governed by their respective privacy policies.`
      },
      {
        title: '5. Updates to This Policy',
        content: `We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated revision date.`
      },
      {
        title: '6. Contact',
        content: `For questions about our Cookie Policy, please contact us at sales@roofit.co.zw.`
      }
    ]
  }
}

export default function PolicyModal({ type, onClose }) {
  const policy = policyContent[type]
  const Icon = policy?.icon || Shield

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  if (!policy) return null

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="fixed inset-4 md:inset-10 lg:inset-20 bg-white rounded-2xl z-50 flex flex-col overflow-hidden shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gradient-to-r from-roof-blue-50 to-roof-green-50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center">
              <Icon className="w-6 h-6 text-roof-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold text-gray-900">{policy.title}</h2>
              <p className="text-sm text-gray-500">Last updated: {policy.lastUpdated}</p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="w-10 h-10 bg-white rounded-xl shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </motion.button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="max-w-3xl mx-auto space-y-8">
            {policy.sections.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-lg font-display font-semibold text-roof-navy">
                  {section.title}
                </h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 bg-gray-50">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Roof iT Chromadek Factory • Harare, Zimbabwe
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
              className="px-6 py-2 bg-roof-navy text-white rounded-lg font-medium hover:bg-roof-blue-800 transition-colors"
            >
              Close
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  )
}
