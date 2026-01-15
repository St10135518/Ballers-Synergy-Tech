# Deployment Guide for Ballers Synergy Tech

## Option 1: Railway (Recommended - Easiest)

### Steps:
1. Go to https://railway.app
2. Sign up with GitHub
3. Create new project → "Deploy from GitHub"
4. Select this repo
5. Add MongoDB plugin (Railway → Add Plugin → MongoDB)
6. Set environment variables:
   - `MONGO_URL` (auto-filled by Railway)
   - `DB_NAME=ballers_synergy`
7. Deploy!

---

## Option 2: Render (Free tier available)

### Steps:
1. Go to https://render.com
2. Sign up with GitHub
3. Create Backend Service:
   - Connect GitHub repo
   - Root Directory: `backend`
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `python -m uvicorn server:app --host 0.0.0.0`
4. Create Frontend Service:
   - Connect same repo
   - Root Directory: `frontend`
   - Build Command: `npm install --legacy-peer-deps && npm run build`
   - Start Command: `npm start`
5. Add MongoDB Atlas (free tier) for database
6. Set environment variables in both services

---

## Option 3: Docker + Any Cloud (AWS, Azure, Google Cloud, DigitalOcean)

### Local test with Docker:
```bash
docker-compose up
```

### Deploy to cloud:
1. Build images:
```bash
docker build -f Dockerfile.backend -t ballers-backend:latest .
docker build -f Dockerfile.frontend -t ballers-frontend:latest .
```

2. Push to Docker Hub or cloud registry
3. Deploy using cloud platform's container service

---

## Option 4: Vercel + Render (Frontend/Backend split)

### Frontend on Vercel:
1. Push to GitHub
2. Connect Vercel to repo (frontend folder)
3. Set `REACT_APP_API_URL` to your backend URL

### Backend on Render:
1. Deploy using Option 2 steps above

---

## Environment Variables Needed

### Backend (.env):
```
MONGO_URL=your_mongodb_url
DB_NAME=ballers_synergy
```

### Frontend (.env):
```
REACT_APP_API_URL=http://your-backend-url.com/api
```

---

## MongoDB Setup (Free)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create free tier cluster
3. Get connection string
4. Use as `MONGO_URL`

---

## Recommended Flow:
1. **Use Railway or Render** (simplest, handles deployment automatically)
2. Add MongoDB Atlas (free)
3. Deploy with one click
4. That's it!

No need to worry about Docker if using Railway/Render.
