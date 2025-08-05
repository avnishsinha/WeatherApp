# 🌤️ Weather App

A beautiful, responsive weather application that provides real-time weather updates for any city worldwide. Built with modern web technologies and featuring a glassmorphism design.

## ✨ Features

- 🔍 **Real-time Weather Search** - Get current weather for any city
- 🎨 **Modern Glassmorphism UI** - Beautiful, modern design with blur effects
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- 🌡️ **Detailed Weather Info** - Temperature, humidity, wind speed, and feels-like temperature
- 🎭 **Weather Icons** - Visual weather representations
- ⚡ **Fast & Lightweight** - Quick loading with minimal dependencies
- 🔄 **Loading States** - Smooth loading animations
- ❌ **Error Handling** - Graceful error handling for invalid searches

## 🚀 Live Demo

[View Live Demo](https://weather-app-phi-drab-87.vercel.app/)

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid, Flexbox, and animations
- **Vanilla JavaScript** - ES6+ features
- **OpenWeatherMap API** - Weather data source
- **Google Fonts** - Outfit font family

## 🎨 Design Features

- **Glassmorphism Effect** - Modern blur and transparency effects
- **Gradient Backgrounds** - Beautiful gradient overlays
- **Smooth Animations** - CSS transitions and keyframe animations
- **Responsive Grid Layout** - Adaptive layout for all screen sizes
- **Custom Weather Icons** - Emoji-based weather representations

## � Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/WeatherApp.git
   cd WeatherApp
   ```

2. **Get API Key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Get your API key

3. **Configure API Key**
   - Open `index.js`
   - Replace `YOUR_API_KEY_HERE` with your actual API key:
   ```javascript
   const api = {
     key: "your_actual_api_key_here",
     base: "https://api.openweathermap.org/data/2.5/"
   };
   ```

4. **Run the Application**
   - Open `index.html` in your web browser
   - Or serve it using a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (with live-server)
   npx live-server
   ```

## 🔧 Usage

1. Open the application in your web browser
2. Type the name of any city in the search box
3. Press Enter to get the weather information
4. View current temperature, weather conditions, and additional details

## 🌐 API Reference

This application uses the [OpenWeatherMap API](https://openweathermap.org/api):

- **Endpoint**: `https://api.openweathermap.org/data/2.5/weather`
- **Parameters**: 
  - `q`: City name
  - `units`: metric (Celsius)
  - `appid`: Your API key

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and up
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🚦 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 🔐 Environment Variables (Recommended)

For production deployment, use environment variables:

```javascript
const API_KEY = process.env.OPENWEATHER_API_KEY || 'your_api_key_here';
```

## 📄 Project Structure

```
WeatherApp/
├── index.html          # Main HTML file
├── style.css           # Styles and animations
├── index.js            # JavaScript functionality
├── config.js           # Configuration file (optional)
├── README.md           # Project documentation
└── assets/             # Images and icons (if any)
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## � Future Enhancements

- [ ] 5-day weather forecast
- [ ] Location-based weather (GPS)
- [ ] Weather maps integration
- [ ] Dark/Light theme toggle
- [ ] Weather alerts and notifications
- [ ] Favorite cities list
- [ ] Historical weather data
- [ ] Unit conversion (Celsius/Fahrenheit)

## 📧 Contact

Your Name - [aks526@nau.edu](mailto:aks526@nau.edu)

LinkedIn: [https://www.linkedin.com/in/avnishkumarsinha/](https://www.linkedin.com/in/avnishkumarsinha/)

Project Link: [https://github.com/your-username/WeatherApp](https://github.com/your-username/WeatherApp)

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- [Google Fonts](https://fonts.google.com/) for the Outfit font family
- [Unsplash](https://unsplash.com/) for beautiful background images
- Inspiration from modern weather app designs

---

⭐ Star this repository if you found it helpful!

