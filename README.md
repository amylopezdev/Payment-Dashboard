# Payments Dashboard

A React dashboard for monitoring and filtering recent payment activity. Displays key metrics at a glance and a filterable table of transactions.

## Features

- **Metrics overview** — summary cards showing total collected, pending, failed, and total payment count
- **Filterable payments table** — filter transactions by status: all, paid, pending, or failed
- **Live data** — fetches payments from a local JSON server API

## Tech Stack

- [React 19](https://react.dev/) with Vite
- [React Router](https://reactrouter.com/) v7
- [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) for unit and component tests
- [json-server](https://github.com/typicode/json-server) (via `db.json`) as the mock API

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Running the app

Start the mock API server (in one terminal):

```bash
npx json-server db.json --port 3001
```

Start the dev server (in another terminal):

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
| `npm test` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage report |

## Project Structure

```
src/
├── components/
│   ├── FilterButton.jsx    # Status filter toggle button
│   ├── MetricCard.jsx      # Summary metric display card
│   ├── PaymentsRow.jsx     # Single payment table row
│   ├── PaymentsTable.jsx   # Full payments table
│   └── tests/              # Component tests
├── hooks/
│   └── usePayments.js      # Data fetching hook
├── styles/                 # Component-scoped CSS
├── utils/
│   └── calculateTotals.js  # Sums payment amounts by status
├── App.jsx
└── main.jsx
```

## Data

Payment records in `db.json` include the following fields:

| Field | Type | Description |
|---|---|---|
| `id` | string | Unique payment identifier |
| `description` | string | Payment description |
| `amount` | number | Payment amount |
| `currency` | string | Currency code (GBP) |
| `status` | string | `paid`, `pending`, or `failed` |
| `customer` | string | Customer name |
| `date` | string | Payment date (YYYY-MM-DD) |
