# Maison Éclat – Studio de Beauté à Paris

[Maison Éclat](https://github.com/ounnes-dev/maison-eclat) is a modern, **React** web application built with **Vite** and **TypeScript**. It showcases a sleek, responsive UI for a beauty studio in Paris, featuring dynamic routing, Tailwind CSS styling, and integration with Google Gemini for AI‑powered features.

---

##  Quick Start

### Prerequisites
- **Node.js** (v20 or later)
- **pnpm** (recommended) or npm/yarn
- A **Gemini API key** (for AI features)

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/maison-eclat.git
cd maison-eclat

# Install dependencies (pnpm is recommended)
pnpm install   # or `npm install`
```

### Environment
Create a `.env.local` file at the project root and add your Gemini API key:
```dotenv
GEMINI_API_KEY=YOUR_GEMINI_API_KEY_HERE
```

### Development Server
```bash
npm run dev   # Starts Vite on http://localhost:3000
```
Open the URL in your browser to see the app live. The server supports hot‑module reloading for rapid development.

---

##  Project Structure
```
src/
├─ assets/          # Static assets (images, fonts)
├─ components/      # Re‑usable React components
├─ config/          # Configuration files (Tailwind, Vite)
├─ data/            # Sample data used by the UI
├─ pages/           # Route‑level components
├─ types/           # TypeScript type definitions
├─ utils/           # Helper utilities
├─ App.tsx          # Root component
├─ main.tsx         # Application entry point
```

---

##  Testing & Linting
```bash
# Type‑checking
npm run lint
```
The project uses `tsc` for static type checking.

---

##  Building for Production
```bash
npm run build   # Generates optimized static assets in the /dist folder
npm run preview # Serves the built app locally for a final check
```

---

##  Contributing
Contributions are welcome! Please:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your‑feature`).
3. Open a pull request with a clear description of your changes.

---

##  License
This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

##  Roadmap
- [ ] Add multilingual support (English/French).
- [ ] Integrate appointment scheduling.
- [ ] Expand AI‑driven recommendation engine.

---

