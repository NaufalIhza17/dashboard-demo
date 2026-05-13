# dashboard-demo

A base dashboard app built with React 19 — covers auth, CRUD, routing, and state management. Built as a small personal project to get back to the fundamentals of React after spending time on larger stacks.

> ⏱️ Initial build: ~21.5 hours

---

## Tech Stack

| Purpose | Library |
|---|---|
| UI Framework | React 19 |
| Routing | React Router v7 |
| State Management | Zustand |
| HTTP Client | Axios |
| Styling | Tailwind CSS |
| Notifications | react-hot-toast |
| API | [dummyjson.com](https://dummyjson.com) |

> **Note:** dummyjson is a mock REST API — add, edit, and delete operations return valid responses but don't actually persist data.

---

## Getting Started

```bash
# install dependencies
npm install

# start dev server
npm start
```

Login credentials (from dummyjson):
```
username: emilys
password: emilyspass
```

---

## Features

- **Auth** — login with JWT, persisted via Zustand + localStorage
- **Products** — list, search, detail, add, edit, delete
- **Protected & public routes** — unauthenticated users can't access the dashboard
- **Responsive layout** — sidebar collapses on mobile
- **404 page** — catches unmatched routes
- **Currency util** — converts USD → IDR (`formatCurrency`)

---

## Project Structure

```
dashboard-demo
├── public/
│   └── index.html
└── src/
    ├── api/
    │   └── axios.js              # axios instance with base URL + auth header
    ├── app/
    │   └── router.jsx            # all routes defined here
    ├── components/
    │   └── layout/
    │       ├── MainLayout.jsx    # sidebar + navbar shell
    │       ├── Navbar.jsx
    │       └── Sidebar.jsx
    ├── features/
    │   ├── auth/
    │   │   ├── LoginPage.jsx
    │   │   ├── api.js
    │   │   └── store.js          # zustand auth store (persisted)
    │   └── products/
    │       ├── ProductPage.jsx
    │       ├── ProductDetailPage.jsx
    │       ├── AddProductPage.jsx
    │       ├── EditProductPage.jsx
    │       ├── api.js
    │       ├── store.js          # zustand products store
    │       └── components/
    │           ├── ProductCard.jsx
    │           ├── ProductForm.jsx
    │           ├── ProductTable.jsx
    │           └── SearchProduct.jsx
    ├── hooks/
    │   └── useAuth.js
    ├── pages/
    │   ├── HomePage.jsx
    │   └── NotFoundPage.jsx
    ├── routes/
    │   ├── ProtectedRoute.jsx
    │   └── PublicRoute.jsx
    └── utils/
        └── formatCurrency.js
```

---

## Design

Kept the styling intentional and minimal so the focus stays on structure and functionality rather than visual noise. Light content area, clean typography, straightforward component hierarchy.

A few deliberate decisions:
- **react-hot-toast** for notifications — avoided building a custom toast component to keep the component tree lean. For native browser dialogs like delete confirmation, `window.confirm` is still used — it's a valid tool and doesn't need replacing in a project this size
- **Axios** over fetch — just what I reach for naturally, interceptors make auth headers and error handling cleaner
- **Zustand** over Redux — Redux would be overkill here. Zustand does the job in a fraction of the setup

---

## Lighthouse

Tested with: Navigation mode · Desktop · All categories

<img width="569" height="520" alt="Screenshot 2026-05-13 081346" src="https://github.com/user-attachments/assets/17df35c5-1123-4432-8cf5-d62330aff7de" />


| Category | Score |
|---|---|
| Performance | 92 |
| Accessibility | 91 |
| Best Practices | 100 |
| SEO | 90 |

Mobile performance sits at 52 — Total Blocking Time is the main bottleneck. Something to fix in a future pass.

---

## Demo

<!-- here -->

---

## What I'd improve next

- Dark / light mode toggle
- Homepage analytics — the API has enough data (ratings, stock, categories) to show something meaningful on the dashboard
- Fix mobile TBT score

---

## Reflections

Coming back to raw React after working in larger setups reminded me how much of the "magic" in frameworks is just React Router and a state store. Routing especially — getting protected vs public routes right, handling redirects, nested layouts — it clicked in a way it hadn't before.
