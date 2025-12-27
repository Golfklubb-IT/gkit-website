# Admin App - FireCMS

This is the FireCMS admin panel for managing gkit-website content.

## Environment Variables

Create a `.env` file in this directory:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Development

```bash
npm install
npm run dev
```

Visit http://localhost:3000/admin

## Build

```bash
npm run build
```

Output will be in `dist/` folder.
