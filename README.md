
# CarHub 🚗

CarHub is a responsive, high-performance car rental web application developed with **React**, **Next.js**, **TypeScript**, and **Tailwind CSS**. The app leverages modern component architecture and API integration to offer users a streamlined experience for discovering, filtering, and booking vehicles.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Components Overview](#components-overview)
- [API Integration](#api-integration)
- [Code Conventions](#code-conventions)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- **Responsive UI:** Optimized for both mobile and desktop views.
- **Car Search and Filtering:** Users can search for cars by model, manufacturer, fuel type, and year.
- **Dynamic Rentals Calculation:** Real-time pricing calculation based on mileage and age.
- **Detailed Car Info Modal:** Displays vehicle details with options for multiple angles.
- **Show More Pagination:** Loads more cars dynamically with a custom limit.

---

## Tech Stack
- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **State Management:** React Hooks
- **API Integration:** [Cars by API Ninjas](https://rapidapi.com/apininjas/api/cars-by-api-ninjas)

---

## Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **NPM** (v6 or higher) or **Yarn** (v1 or higher)

### Installation
Clone the repository:
```bash
git clone https://https://github.com/HD-40307g/car_showcase.git
cd CarHub
```

Install dependencies:
```bash
npm install
# or
yarn install
```

### Environment Variables
Create a `.env.local` file at the root of your project and add the following variables:
```plaintext
NEXT_PUBLIC_RAPID_API_KEY=your_rapidapi_key
NEXT_PUBLIC_IMAGIN_API_KEY=your_imagin_api_key
```

### Running the Application
Start the development server:
```bash
npm run dev
# or
yarn dev
```

Build for production:
```bash
npm run build
# or
yarn build
```

Run the production server:
```bash
npm run start
# or
yarn start
```

---

## Project Structure

```plaintext
car_showcase/
├── .vscode
├── app/                  # Main Next.js app structure
├── components/           # Reusable components
├── constants/            # Constants used throughout the app        
├── public/               # Public assets (images, icons, etc.)
├── types/                # TypeScript types and interfaces
├── utils/                # Utility functions
├── .gitignore            # Excludes files from Git tracking
├── LICENSE               # Project's usage terms and rights
├── next.config.mjs       # Next.js configuration settings
├── package-lock.json     # Exact dependency versions for install
├── package.json          # Project dependencies and scripts
├── postcss.config.mjs    # PostCSS plugin configuration
├── README.md             # Project overview and usage guide
├── tailwind.config.ts    # Tailwind CSS customization settings
└── tsconfig.json         # TypeScript compiler configurations
```

---

## Components Overview

### 1. **Navbar**
   - **File:** `components/Navbar.tsx`
   - **Description:** The top navigation bar, containing the logo and a “Sign In” button.

### 2. **SearchBar**
   - **File:** `components/SearchBar.tsx`
   - **Description:** A search form allowing users to filter cars by manufacturer and model.
   - **Props:**
     - `setManufacturer`: Function to set the manufacturer filter.
     - `setModel`: Function to set the model filter.

### 3. **CarCard**
   - **File:** `components/CarCard.tsx`
   - **Description:** Displays car details such as model, make, fuel type, and includes a favorite icon.

### 4. **CarDetails**
   - **File:** `components/CarDetails.tsx`
   - **Description:** A modal that displays additional car details when the user clicks on "View More".

### 5. **ShowMore**
   - **File:** `components/ShowMore.tsx`
   - **Description:** Button that loads more cars by increasing the search limit.

---

## API Integration
The app fetches data from the **Cars by API Ninjas** API. The following function handles the data fetching:

- **`fetchCars(filters: FilterProps)`**
  - **Parameters:** `FilterProps` with keys: `manufacturer`, `year`, `model`, `limit`, `fuel`.
  - **Response:** Returns a JSON array of cars matching the search criteria.
  
### Example Usage
```typescript
const filters = {
    manufacturer: 'Toyota',
    year: 2020,
    model: 'Camry',
    limit: 10,
    fuel: 'gas'
};

const cars = await fetchCars(filters);
```

---

## Code Conventions

- **TypeScript:** All components and functions should have strict TypeScript types to ensure type safety.
- **Naming Conventions:** Use camelCase for variable and function names, PascalCase for component names.
- **CSS Class Naming:** BEM (Block Element Modifier) naming convention is recommended.
- **Error Handling:** Use appropriate error handling especially for API calls and asynchronous operations.

---

## Contributing
We welcome contributions! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

---

## License
This project is licensed under the MIT License.
