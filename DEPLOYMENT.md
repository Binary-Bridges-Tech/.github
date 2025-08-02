# Fix GitHub Pages 404 Error

## 🚀 Quick Fix Steps

### 1. Enable GitHub Pages in Repository Settings

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose **gh-pages** branch
5. Click **Save**

### 2. Deploy Using Manual Method

```bash
# Build and deploy
npm run deploy
```

### 3. Alternative: Use GitHub Actions

The repository includes a GitHub Actions workflow that will automatically deploy when you push to main:

```bash
git add .
git commit -m "Fix deployment"
git push origin main
```

## 🔧 Common Issues & Solutions

### Issue: 404 Error on GitHub Pages
**Solution**: Make sure GitHub Pages is enabled and pointing to the `gh-pages` branch

### Issue: Assets not loading
**Solution**: Check that the build completed successfully and the `dist/` folder contains all files

### Issue: GitHub Actions failing
**Solution**: 
1. Go to repository Settings → Actions → General
2. Enable "Read and write permissions" under "Workflow permissions"
3. Save the changes

## 📋 Verification Checklist

- [ ] GitHub Pages is enabled
- [ ] Source is set to `gh-pages` branch
- [ ] Build completes without errors
- [ ] `dist/` folder contains `index.html` and `assets/`
- [ ] GitHub Actions workflow runs successfully

## 🎯 Your Site URL

Once deployed, your site will be available at:
`https://yourusername.github.io/binary-bridges-static/`

---

**Note**: The first deployment may take 5-10 minutes to become available. 