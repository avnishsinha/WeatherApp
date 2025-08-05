# 🔐 Security Notice

## API Key Security

⚠️ **IMPORTANT**: Before pushing to GitHub, make sure to secure your API key!

### Current Status
The API key is currently hardcoded in `index.js` for development purposes. 

### Before Pushing to GitHub:

1. **Option 1: Use Environment Variables (Recommended)**
   - Create a `.env` file (already in .gitignore)
   - Move your API key there
   - Update the code to use environment variables

2. **Option 2: Remove the API Key**
   - Replace the API key with `'YOUR_API_KEY_HERE'`
   - Let users add their own API key

### For Production Deployment:

- Use environment variables on your hosting platform
- Never commit real API keys to version control
- Consider using a backend proxy to hide the API key

### Getting an API Key:

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Navigate to the API keys section
4. Generate a new API key
5. Replace the placeholder in the code

### Best Practices:

- ✅ Use environment variables
- ✅ Add `.env` to `.gitignore`
- ✅ Use backend proxy for production
- ❌ Never commit API keys to repositories
- ❌ Don't share API keys in public forums
