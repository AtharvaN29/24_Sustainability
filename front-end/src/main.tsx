import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Toaster} from "react-hot-toast"

import { ClerkProvider, SignIn, SignUp, SignedIn, SignedOut } from '@clerk/clerk-react'
import Landingpag from './mycomponents/landingpag.tsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    
    <Toaster/>
    <App />
   
    </ClerkProvider>

  </React.StrictMode>,
)
