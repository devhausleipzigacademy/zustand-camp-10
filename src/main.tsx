import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { PersonalInformation } from "./routes/personal-information"
import { Results } from "./routes/results"

const router = createBrowserRouter([
  {
    path: "/",
    element: <PersonalInformation />,
  },
  {
    path: "/results",
    element: <Results />,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
