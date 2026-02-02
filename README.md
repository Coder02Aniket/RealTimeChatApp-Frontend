# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and set the `VITE_API_BASE_URL` to your backend URL.

4. Start the development server:
   ```bash
   npm run dev
   ```

## Fixing cert_date_invalid Error

If you encounter a `cert_date_invalid` error, it means the backend SSL certificate is invalid or expired. To fix this:

### Option 1: Use HTTP instead of HTTPS (Development)

Edit your `.env` file and use HTTP:
```
VITE_API_BASE_URL=http://chat-backend.eastasia.cloudapp.azure.com
```

### Option 2: Use HTTPS with valid certificate (Production)

Ensure your backend server has a valid SSL certificate, then use HTTPS:
```
VITE_API_BASE_URL=https://chat-backend.eastasia.cloudapp.azure.com
```

**Note**: The application now defaults to HTTP to prevent certificate errors during development. For production deployments, always use HTTPS with a valid SSL certificate.
