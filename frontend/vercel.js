{
    "version": 2,
    "builds": [
      {
        "src": "frontend/package.json",
        "use": "@vercel/static-build",
        "config": {
          "distDir": "frontend/dist"
        }
      }
    ],
    "routes": [
      {
        "src": "/(.*)",
        "dest": "/frontend/$1"
      }
    ]
  }
  
  