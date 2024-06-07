import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { StateContextProvider } from './context';
import './index.css';

const activeChain = "ethereum";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <ThirdwebProvider
      clientId={import.meta.env.VITE_TEMPLATE_CLIENT_ID}
      activeChain="sepolia"
    >
    <Router>
    <StateContextProvider>
    <App />
    </StateContextProvider>
    </Router>
    </ThirdwebProvider>
);
