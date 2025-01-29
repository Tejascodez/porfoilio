{
    "version": 2,
    "builds": [
      {
        "src": "Frontend/package.json",
        "use": "@vercel/static-build",
        "config": {
          "distDir": "dist"  // Adjust if your Vite build output is different
        }
      },
      {
        "src": "Backend/server.js",  // Adjust according to the entry point of your backend
        "use": "@vercel/node"
      }
    ],
    "routes": [
      {
        "src": "/(.*)",
        "dest": "Frontend/$1"
      },
      {
        "src": "/api/(.*)",
        "dest": "Backend/$1"
      }
    ]
  }
  