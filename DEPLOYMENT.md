# 🚀 Deployment Guide

This guide walks you through deploying HomeListingAI to various hosting platforms.

## 📋 Pre-Deployment Checklist

Before deploying, ensure you have:

- [ ] ✅ All environment variables configured
- [ ] ✅ API keys and secrets secured
- [ ] ✅ Build runs successfully locally (`npm run build`)
- [ ] ✅ All tests pass (`npm run test`)
- [ ] ✅ Linting is clean (`npm run lint`)
- [ ] ✅ Performance optimized
- [ ] ✅ Security audit completed

## 🌐 Platform-Specific Deployments

### 1. Vercel (Recommended)

**Why Vercel?**
- ✅ Zero-config deployments
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Perfect for React apps
- ✅ Generous free tier

**Quick Deploy:**

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   npm run build
   vercel --prod
   ```

**GitHub Integration:**

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Build Settings**
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

3. **Environment Variables**
   ```bash
   # In Vercel dashboard, add these:
   VITE_OPENAI_API_KEY=your-openai-key
   VITE_SUPABASE_URL=your-supabase-url
   VITE_SUPABASE_ANON_KEY=your-supabase-key
   ```

4. **Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

---

### 2. Netlify

**Why Netlify?**
- ✅ Drag-and-drop deployment
- ✅ Form handling
- ✅ Functions support
- ✅ Great for static sites

**Quick Deploy:**

1. **Build for Production**
   ```bash
   npm run build
   ```

2. **Manual Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Drag the `dist` folder to deploy

**GitHub Integration:**

1. **Connect Repository**
   - New site from Git → GitHub
   - Select your repository

2. **Build Settings**
   ```
   Base directory: (leave empty)
   Build command: npm run build
   Publish directory: dist
   ```

3. **Environment Variables**
   ```bash
   # In Netlify dashboard → Site settings → Environment variables
   VITE_OPENAI_API_KEY=your-openai-key
   VITE_SUPABASE_URL=your-supabase-url
   VITE_SUPABASE_ANON_KEY=your-supabase-key
   ```

---

### 3. AWS S3 + CloudFront

**Why AWS?**
- ✅ Highly scalable
- ✅ Global CDN
- ✅ Enterprise-grade
- ✅ Cost-effective for high traffic

**Setup Steps:**

1. **Create S3 Bucket**
   ```bash
   aws s3 mb s3://homelistingai-app
   ```

2. **Configure Bucket for Web Hosting**
   ```bash
   aws s3 website s3://homelistingai-app --index-document index.html --error-document index.html
   ```

3. **Build and Upload**
   ```bash
   npm run build
   aws s3 sync dist/ s3://homelistingai-app --delete
   ```

4. **Set Up CloudFront Distribution**
   - Create distribution
   - Point to S3 bucket
   - Configure caching rules

---

### 4. Firebase Hosting

**Why Firebase?**
- ✅ Google's platform
- ✅ Easy integration with other Firebase services
- ✅ Good performance
- ✅ Free SSL

**Setup:**

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login and Initialize**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Configure firebase.json**
   ```json
   {
     "hosting": {
       "public": "dist",
       "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

---

### 5. GitHub Pages

**Why GitHub Pages?**
- ✅ Free hosting
- ✅ Integrated with GitHub
- ✅ Custom domains supported

**Setup:**

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add Deploy Script**
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run build
   npm run deploy
   ```

4. **Configure GitHub Pages**
   - Repository Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages

---

## 🔧 Environment Configuration

### Development Environment

Create `.env.local`:
```bash
# Copy from .env.example
cp .env.example .env.local

# Edit with your development values
VITE_APP_URL=http://localhost:5173
VITE_OPENAI_API_KEY=sk-dev-key...
VITE_SUPABASE_URL=https://dev-project.supabase.co
```

### Production Environment

**Security Best Practices:**
- ✅ Use different API keys for prod/dev
- ✅ Enable rate limiting
- ✅ Use secure headers
- ✅ Regular security audits

**Required Production Variables:**
```bash
NODE_ENV=production
VITE_APP_URL=https://yourdomain.com
VITE_OPENAI_API_KEY=sk-prod-key...
VITE_SUPABASE_URL=https://prod-project.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...
```

---

## 🔒 Security Configuration

### 1. HTTPS Setup

**Vercel/Netlify:** Automatic HTTPS ✅

**Custom Server:**
```bash
# Install SSL certificate
sudo certbot --nginx -d yourdomain.com
```

### 2. Security Headers

**Vercel:**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options", 
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### 3. API Key Security

**Environment Variables Only:**
```bash
# ✅ GOOD - Environment variable
VITE_OPENAI_API_KEY=sk-...

# ❌ BAD - Hardcoded in source
const apiKey = "sk-hardcoded-key";
```

---

## 📊 Performance Optimization

### 1. Build Optimization

```bash
# Analyze bundle size
npm install --save-dev webpack-bundle-analyzer
npm run build -- --analyze
```

### 2. Caching Strategy

**Static Assets:**
```
Cache-Control: public, max-age=31536000, immutable
```

**HTML:**
```
Cache-Control: public, max-age=0, must-revalidate
```

### 3. CDN Configuration

**CloudFront Behaviors:**
- `/static/*` → Cache for 1 year
- `/api/*` → No cache
- `/*` → Cache for 1 hour

---

## 🔍 Monitoring & Analytics

### 1. Error Tracking

**Sentry Setup:**
```bash
npm install @sentry/react
```

```javascript
// src/main.jsx
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: process.env.NODE_ENV,
});
```

### 2. Performance Monitoring

**Web Vitals:**
```javascript
// Track Core Web Vitals
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

### 3. Analytics

**Google Analytics:**
```javascript
// Add to index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

---

## 🚨 Troubleshooting

### Common Issues

**1. Build Fails**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**2. Environment Variables Not Working**
```bash
# Ensure variables start with VITE_
VITE_API_KEY=value  # ✅ Works
API_KEY=value       # ❌ Won't work
```

**3. Routing Issues (404 on refresh)**
```bash
# Add rewrite rules for SPA
/* /index.html 200
```

**4. CORS Issues**
```bash
# Configure API CORS headers
Access-Control-Allow-Origin: https://yourdomain.com
```

### Debug Commands

```bash
# Check build locally
npm run build && npm run preview

# Test production build
NODE_ENV=production npm run build

# Check bundle size
npm run build -- --analyze
```

---

## 📈 Scaling Considerations

### 1. CDN Configuration
- Global edge locations
- Intelligent caching
- Image optimization

### 2. Database Scaling
- Connection pooling
- Read replicas
- Caching layer (Redis)

### 3. API Rate Limiting
- Per-user limits
- API key management
- Usage monitoring

### 4. Load Balancing
- Multi-region deployment
- Auto-scaling groups
- Health checks

---

## 🎯 Production Checklist

Before going live:

- [ ] ✅ SSL certificate installed
- [ ] ✅ Custom domain configured
- [ ] ✅ Environment variables set
- [ ] ✅ Analytics tracking enabled
- [ ] ✅ Error monitoring setup
- [ ] ✅ Backup strategy implemented
- [ ] ✅ Security headers configured
- [ ] ✅ Performance optimized
- [ ] ✅ SEO meta tags added
- [ ] ✅ Sitemap.xml generated
- [ ] ✅ robots.txt configured
- [ ] ✅ Load testing completed
- [ ] ✅ Security audit passed

---

## 🆘 Support

Need help with deployment?

- 📧 **Email:** devops@homelistingai.com
- 💬 **GitHub Issues:** [Create an issue](https://github.com/yourusername/homelistingai-app/issues)
- 📚 **Documentation:** [View docs](https://github.com/yourusername/homelistingai-app/wiki)

---

**🎉 Congratulations!** Your HomeListingAI application is now live and ready to transform the real estate industry! 🏠✨