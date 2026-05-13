import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import faviconUrl from "./imports/Immortal_Logomark_1C.png";
import "./styles/index.css";

const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.type = "image/png";
favicon.href = faviconUrl;
document.head.appendChild(favicon);

createRoot(document.getElementById("root")!).render(<App />);
