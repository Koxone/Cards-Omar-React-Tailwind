# Coupon Cards – Digital Coupon Platform

> **Live demo**: [cards-omar-react-tailwind.vercel.app](https://cards-omar-react-tailwind.vercel.app)

## 🧾 Project Overview

**Coupon Cards** is a responsive, multi-language web platform designed to offer digital coupons for fast food chains in premium tourist regions of **Mexico** and the **Dominican Republic**. Users can browse and filter promotional cards by destination, view detailed terms, and save offers directly to **Apple Wallet** or **Google Wallet**.

## 🔌 API Integration

Before showing available coupons, the platform verifies user eligibility by sending the **email** and **reservation code** to the following endpoint:

```
https://api.xxxx.com/api/v1/reservation/get
```

This ensures coupons are only accessible to users with valid bookings through **Sacbe Transfers**. The check is performed via a simple POST request and is handled securely through the frontend using `fetch`.

**Important:** The API logic is handled in a component (`UserReservationChecker.jsx`) that is kept outside the public repository if needed, for security or privacy reasons.

## 🔧 Tech Stack

| Category       | Tools & Libraries                                 |
| -------------- | ------------------------------------------------- |
| **Framework**  | React 19.1.0 + Vite 6.3.5                         |
| **Styling**    | Tailwind CSS 4.1.8 + Prettier Plugin for Tailwind |
| **i18n**       | i18next + react-i18next                           |
| **Linting**    | ESLint, Prettier                                  |
| **Deployment** | Vercel                                            |
| **Languages**  | JavaScript, HTML, CSS                             |

## ✨ Key Features

### 🧾 Digital Promotion Cards

- Clean UI displaying offers with brand logos, description, and expiration date.
- Promotions include discounts, 2x1 deals, free items, and seasonal offers.

### 🌍 Region Filter

- Users can filter coupons by destination:
  - Cancún
  - Tulum
  - Los Cabos
  - Puerto Vallarta
  - Punta Cana
- Option to show all regions.

### 🌐 Multi-Language Support

- Implemented via `i18next` and `react-i18next`.
- Available in **English** and **Spanish** with easy toggling.

### 💼 Wallet Integration

- Save promotions directly to **Apple Wallet** or **Google Wallet**.
- Seamless user experience for tourists on-the-go.

### 📱 Responsive UI

- Optimized for both mobile and desktop.
- Component-based structure for maintainability and scalability.

## 🗂 Project Structure

```
src/
├── assets/           # Brand logos and images
├── components/       # Reusable UI components
│   ├── cards/        # CouponCard, WalletCard, etc.
│   ├── buttons/      # Language toggle, etc.
│   ├── inputs/       # Region selectors
│   └── feedback/     # Modal system
├── containers/       # Component wrappers
├── locals/           # Translations (es.json, en.json)
├── logic/            # Filtering and core business logic
├── pages/            # Views and layout
├── App.jsx           # Main component
├── main.jsx          # App entry point
├── i18n.js           # i18next configuration
└── index.css         # Global styles
```

## 📦 Main Dependencies

```json
"dependencies": {
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "i18next": "^25.2.1",
  "react-i18next": "^15.5.3",
  "tailwindcss": "^4.1.8",
  "@tailwindcss/vite": "^4.1.8"
},
"devDependencies": {
  "vite": "^6.3.5",
  "@vitejs/plugin-react-swc": "^3.9.0",
  "eslint": "^9.25.0",
  "prettier": "^3.5.3",
  "prettier-plugin-tailwindcss": "^0.6.12"
}
```

## 🧠 What You’ll Learn From This Project

- How to implement **multi-language interfaces** using i18next.
- Tailwind-based **responsive UI design** with dynamic content from JSON.
- Building a **region-based filtering system**.
- Integration with **Apple/Google Wallet**.
- Calling and validating data from an **external API**.
- Deploying and maintaining a project on **Vercel**.

## 🚀 Future Improvements

- Add user accounts and login.
- Admin panel for dynamic coupon management.
- Extend support for more tourist destinations.
- Backend integration for analytics and coupon tracking.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
