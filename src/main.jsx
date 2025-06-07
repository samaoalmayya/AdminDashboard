import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Dashboard from "./page/Dashboard/dashboard";
import Manageteam from "./page/manageteam/manageteam";
import Geoshart from "./page/geoshart/geoshart";

import Invoicesbalanes from "./page/invoicesbalanes/invoicesbalanes";
import Profileform from "./page/profileform/Profileform";
import Calendar from "./page/calendar/calendar";
import Faqpage from "./page/faqpage/faqpage";
import Linechart from "./page/linechart/linechart";
import Piechart from "./page/piechart/piechart";
import Barchart from "./page/barchaet/barchart";
import Contacsinfo from "./page/contacsinfo/Contacsinfo";
import NotFound from "./page/Notfound/Notfound";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {<Route index element={<Dashboard />} />}
      {<Route path="/team" element={<Manageteam />} />}

      {<Route path="/contacts" element={<Contacsinfo />} />}
      {<Route path="/invoices" element={<Invoicesbalanes />} />}
      {<Route path="/form" element={<Profileform />} />}
      {<Route path="/calendar" element={<Calendar />} />}
      {<Route path="/faq" element={<Faqpage />} />}
      {<Route path="/bar" element={<Barchart />} />}
      {<Route path="/pie" element={<Piechart />} />}
      {<Route path="/line" element={<Linechart />} />}
      {<Route path="/geography" element={<Geoshart />} />}
      {<Route path="*" element={<NotFound />} />}
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
