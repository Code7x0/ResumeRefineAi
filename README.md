# 🧠 ResumeRefine AI — ATS Resume Analyzer Powered by Gemini

ResumeRefine AI is an intelligent resume analysis tool that evaluates resumes against modern hiring standards and (optionally) a job description.  
It uses **Google Gemini 2.0 Flash** to provide structured feedback, ATS scoring, keyword matching, strengths, weaknesses, and improvement suggestions.

🚀 Live Demo: https://resume-refine-ai-umber.vercel.app/ 
📌 Tech Stack: Next.js • TailwindCSS • Gemini AI • PDF Parsing • Vercel

---

## ✅ Features

| Feature | Description |
|---------|-------------|
| 📄 PDF Upload | Upload any resume in PDF format |
| 🤖 AI-Powered Analysis | Structured JSON output from Gemini |
| 🔍 ATS Fit Score | 0–100 score based on resume match |
| 🧩 Keyword Match | Detects missing job-relevant keywords |
| 📊 Category Breakdown | Skills, Experience, Education scoring |
| 💡 Actionable Suggestions | Add / Edit / Delete recommendations |
| 🏆 Strength Highlights | AI-detected strengths from your resume |
| 📝 Optional Job Description | Improves score accuracy if provided |
| ⚡ Instant Results | No account or login required |

---

## 🛠️ Tech Stack

| Layer | Tool |
|-------|------|
| Frontend | Next.js 15, React, TailwindCSS |
| AI Engine | Gemini 2.0 Flash (`@google/generative-ai`) |
| Resume Parsing | `pdf-parse` |
| Hosting | Vercel |
| Data Format | JSON-structured AI output |

---

## 📂 Project Structure

```
src/
├─ app/
│ ├─ api/resume/route.js # Gemini backend
│ ├─ resume-analysis/ # UI Page
│ ├─ page.jsx # Home page
│ └─ layout.jsx
├─ components/ # UI components
├─ services/ # (Past OpenAI service, now removed)
└─ styles/ # Tailwind styling
```


---

## ⚙️ Setup & Installation

```sh
git clone https://github.com/Code7x0/ResumeRefineAI.git
cd ResumeRefineAI
npm install
cp .env.example .env.local   # or create manually
```
---
Add your Gemini API key:
```
GEMINI_API_KEY=your_key_here
```
Then run:
```
npm run dev
```
---
## 🧑‍💻 Author

Sonu (Code7x0)
 
🔗 GitHub: https://github.com/Code7x0

---
## 🏷️ License

MIT — free to use, modify, and deploy.

---

