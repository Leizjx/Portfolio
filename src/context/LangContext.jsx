import { createContext, useContext, useState } from 'react'
import en from '../translations/en.json'
import vi from '../translations/vi.json'

const translations = { en, vi }

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en')

  function t(key) {
    return translations[lang][key] ?? key
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
