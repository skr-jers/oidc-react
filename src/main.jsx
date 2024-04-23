import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from "react-oidc-context";
import App from './App.jsx'
import './index.css'

const oidcConfig = {
  authority: "https://35.94.180.219:9443/oauth2/token",
  client_id: "RKIYwxrtAH3ZO7xeanNkFAf2h8Aa",
  redirect_uri: "http://localhost:5173",
  // ...
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider {...oidcConfig}  >
      <App />
    </AuthProvider>
  </React.StrictMode>,
)
