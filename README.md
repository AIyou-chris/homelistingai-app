# HomeListingAI - AI-Powered Real Estate Platform

![HomeListingAI Hero](https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=HomeListingAI+-+Talk+to+the+House)

> Transform your real estate business with AI-powered listings and automated lead generation. Every listing comes with its own AI assistant that works 24/7 to capture and qualify leads.

## 🚀 Features

### 🤖 AI-Powered Listings
- **Talk to the House**: Every property gets its own AI assistant
- **24/7 Lead Capture**: AI responds instantly to buyer inquiries
- **Voice Integration**: Voice commands and text-to-speech capabilities
- **Intelligent Responses**: Context-aware answers about properties, neighborhoods, and pricing

### 📈 Lead Management
- **Automated Qualification**: AI pre-qualifies leads before they reach you
- **Real-time Analytics**: Live dashboard showing conversations, leads, and bookings
- **Smart Follow-up**: Automated nurturing sequences
- **Appointment Scheduling**: AI books viewings directly into your calendar

### 🎨 Modern Interface
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Animated Counters**: Real-time stats display
- **Interactive Chat**: Full-featured AI chat widget
- **Professional UI**: Clean, modern design built with Tailwind CSS

### 🔐 Multi-Role Access
- **Agent Dashboard**: Complete CRM and listing management
- **Admin Portal**: User management and system analytics
- **Demo Credentials**: Easy testing with built-in demo accounts

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Voice**: Web Speech API
- **State Management**: React Hooks + Context

## 📦 Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/homelistingai-app.git
   cd homelistingai-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 🎯 Demo Accounts

### Agent Access
- **Email**: `agent@demo.com`
- **Password**: `demo123`

### Admin Access  
- **Email**: `support@homelistingai.com`
- **Password**: `Jake@2024`

## 🏗️ Project Structure

```
homelistingai-app/
├── public/
│   ├── index.html
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   └── Input.jsx
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── Dashboard.jsx
│   │   └── AIChatWidget.jsx
│   ├── contexts/
│   │   ├── AuthContext.jsx
│   │   └── RouterContext.jsx
│   ├── services/
│   │   ├── AIService.js
│   │   └── VoiceService.js
│   ├── data/
│   │   └── mockData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Customization

### Styling
The app uses Tailwind CSS for styling. Key color scheme:
- Primary: Blue (600-700)
- Secondary: Purple (600-700) 
- Accent: Pink (500-600)
- Success: Green (500-600)

### AI Configuration
Update the AI service configuration in `src/services/AIService.js`:
```javascript
const config = {
  openai: {
    apiKey: 'your-openai-api-key',
    model: 'gpt-4'
  }
};
```

### Voice Features
Voice features use the Web Speech API and work in modern browsers:
- Chrome (recommended)
- Edge
- Safari (limited support)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Features Demo

### Landing Page
- ✅ Hero section with animated background
- ✅ Live results cards with real-time counters
- ✅ Interactive voice demo
- ✅ Feature showcase with gradient icons
- ✅ Pricing section with guarantee
- ✅ Contact form modal

### Dashboard
- ✅ Stats overview with animated counters
- ✅ Property cards with walk scores
- ✅ AI description generation
- ✅ Lead management
- ✅ Quick actions panel

### AI Chat
- ✅ Full conversation interface
- ✅ Voice input/output
- ✅ Context-aware responses
- ✅ Quick action buttons
- ✅ Real-time typing indicators

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm run build
npx vercel --prod
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Traditional Hosting
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 🔮 Roadmap

- [ ] **Backend Integration**: Connect to real APIs
- [ ] **Database**: Add persistent data storage
- [ ] **Payment Processing**: Stripe integration
- [ ] **Email Automation**: Mailgun/SendGrid
- [ ] **Advanced Analytics**: Detailed reporting
- [ ] **Mobile App**: React Native version
- [ ] **API Documentation**: OpenAPI/Swagger docs
- [ ] **Multi-language**: i18n support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Support

- 📧 Email: support@homelistingai.com
- 💬 Issues: [GitHub Issues](https://github.com/yourusername/homelistingai-app/issues)
- 📚 Docs: [Documentation](https://github.com/yourusername/homelistingai-app/wiki)

## 🎉 Acknowledgments

- Built with ❤️ for real estate professionals
- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

**Ready to transform your real estate business?** 🏠✨

[Get Started](https://homelistingai-app.vercel.app) | [Live Demo](https://homelistingai-app.vercel.app) | [Documentation](https://github.com/yourusername/homelistingai-app/wiki)