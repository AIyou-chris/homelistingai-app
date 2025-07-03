import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Menu,
  X,
  Shield,
  CheckCircle,
  Bot,
  Mic,
  MicOff,
  MessageCircle,
  Rocket,
  Zap,
  Clock,
  TrendingUp,
  Heart,
  Award,
  Upload,
  Brain,
  Share2,
  Settings,
  Users,
  Calendar,
  Building,
  Eye,
  Edit,
  MapPin,
  DollarSign,
  Bed,
  Bath,
  Square,
  ChevronRight,
  PlusCircle,
  User,
  LogOut,
  Volume2,
  VolumeX,
  Send,
  Headphones,
  BarChart3
} from 'lucide-react';

// Mock Router Hook
const useRouter = () => {
  const [currentRoute, setCurrentRoute] = useState('/');
  
  const navigate = (path) => {
    setCurrentRoute(path);
    console.log(`Navigating to: ${path}`);
  };
  
  return { navigate, currentRoute };
};

// Mock Auth Hook
const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email, password) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (email === 'support@homelistingai.com' && password === 'Jake@2024') {
      setUser({
        id: 'admin-123',
        email: 'support@homelistingai.com',
        name: 'Admin User',
        role: 'admin'
      });
      setIsLoading(false);
      return true;
    } else if (email === 'agent@demo.com' && password === 'demo123') {
      setUser({
        id: 'agent-1',
        email: 'agent@demo.com',
        name: 'Demo Agent',
        role: 'agent'
      });
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const logout = () => setUser(null);

  return {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    isLoading
  };
};

// UI Components
const Button = ({ children, variant = 'primary', size = 'md', onClick, disabled, className = '', type = 'button' }) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-slate-600 text-white hover:bg-slate-700',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
    ghost: 'text-slate-600 hover:bg-slate-100'
  };
  
  const sizeClasses = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-11 px-8'
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = '' }) => (
  <div className={`rounded-lg border bg-white text-gray-900 shadow-sm ${className}`}>
    {children}
  </div>
);

const Input = ({ type = 'text', placeholder, value, onChange, className = '', required, onKeyPress }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required={required}
    onKeyPress={onKeyPress}
    className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
  />
);

const TextArea = ({ placeholder, value, onChange, rows = 4, className = '' }) => (
  <textarea
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    rows={rows}
    className={`flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none ${className}`}
  />
);

// Mock Data
const mockListings = [
  {
    id: '1',
    title: 'Modern Downtown Condo',
    address: '123 Main St, Seattle, WA 98101',
    price: 750000,
    description: 'Stunning modern condo in the heart of downtown Seattle with panoramic city views.',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    garage: true,
    images: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500'],
    status: 'active',
    agentId: 'agent-1',
    createdAt: '2024-01-15',
    walkScore: 95
  },
  {
    id: '2',
    title: 'Charming Family Home',
    address: '456 Oak Avenue, Bellevue, WA 98004',
    price: 1250000,
    description: 'Beautiful 4-bedroom family home in prestigious Bellevue neighborhood.',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    garage: true,
    images: ['https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500'],
    status: 'active',
    agentId: 'agent-1',
    createdAt: '2024-01-10',
    walkScore: 78
  },
  {
    id: '3',
    title: 'Luxury Waterfront Villa',
    address: '789 Harbor View Dr, Kirkland, WA 98033',
    price: 2500000,
    description: 'Exceptional waterfront property with private dock and stunning lake views.',
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4200,
    garage: true,
    images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500'],
    status: 'pending',
    agentId: 'agent-1',
    createdAt: '2024-01-05',
    walkScore: 65
  }
];

const mockLeads = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@email.com',
    phone: '(555) 123-4567',
    message: 'Interested in scheduling a viewing for the downtown condo.',
    status: 'new',
    listingId: '1',
    createdAt: '2024-01-20'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    phone: '(555) 987-6543',
    message: 'Looking for a family home in Bellevue area. This looks perfect!',
    status: 'contacted',
    listingId: '2',
    createdAt: '2024-01-18'
  },
  {
    id: '3',
    name: 'Mike Chen',
    email: 'mike.chen@email.com',
    phone: '(555) 456-7890',
    message: 'Very interested in the waterfront property. Can we discuss financing options?',
    status: 'qualified',
    listingId: '3',
    createdAt: '2024-01-16'
  }
];

// AI Service
class AIService {
  static instance = null;
  
  static getInstance() {
    if (!AIService.instance) {
      AIService.instance = new AIService();
    }
    return AIService.instance;
  }

  async generateResponse(message, context) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (message.toLowerCase().includes('price') || message.toLowerCase().includes('cost')) {
      return `Based on our current listings, we have properties ranging from $750K to $2.5M. The downtown condo at $750K is great value, while our luxury waterfront villa offers premium amenities at $2.5M. What's your budget range?`;
    }
    
    if (message.toLowerCase().includes('bedroom') || message.toLowerCase().includes('bed')) {
      return `I can help you find the perfect home! We have:\n• 2-bedroom downtown condo ($750K)\n• 4-bedroom family home in Bellevue ($1.25M)\n• 5-bedroom waterfront villa ($2.5M)\n\nHow many bedrooms are you looking for?`;
    }
    
    if (message.toLowerCase().includes('schedule') || message.toLowerCase().includes('viewing') || message.toLowerCase().includes('appointment')) {
      return `I'd be happy to schedule a viewing for you! We have availability this week for all our properties. Which property interests you most, and what days work best for you?`;
    }
    
    if (message.toLowerCase().includes('location') || message.toLowerCase().includes('neighborhood')) {
      return `All our properties are in prime Seattle area locations:\n• Downtown Seattle (Walk Score: 95) - urban lifestyle\n• Bellevue (Walk Score: 78) - family-friendly with top schools\n• Kirkland Waterfront (Walk Score: 65) - luxury lakeside living\n\nWhat type of neighborhood appeals to you?`;
    }

    return `I'm here to help you find your dream home! I can provide information about our properties, schedule viewings, discuss pricing, and answer questions about neighborhoods. What would you like to know?`;
  }

  async generatePropertyDescription(propertyData) {
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    return `Discover this exceptional ${propertyData.bedrooms}-bedroom, ${propertyData.bathrooms}-bathroom residence featuring ${propertyData.sqft.toLocaleString()} square feet of thoughtfully designed living space. Located at ${propertyData.address}, this property offers ${propertyData.garage ? 'private garage parking and ' : ''}modern amenities throughout. Priced at $${propertyData.price.toLocaleString()}, this home represents outstanding value in today's market.`;
  }
}

// Voice Service
class VoiceService {
  static instance = null;
  
  static getInstance() {
    if (!VoiceService.instance) {
      VoiceService.instance = new VoiceService();
    }
    return VoiceService.instance;
  }

  constructor() {
    this.synthesis = window.speechSynthesis;
    this.recognition = null;
    this.isListening = false;
    this.voices = [];
    this.loadVoices();
    
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = false;
      this.recognition.lang = 'en-US';
    }
  }

  loadVoices() {
    this.voices = this.synthesis.getVoices();
    if (this.voices.length === 0) {
      this.synthesis.addEventListener('voiceschanged', () => {
        this.voices = this.synthesis.getVoices();
      });
    }
  }

  speak(text) {
    return new Promise((resolve, reject) => {
      if (!this.synthesis) {
        reject(new Error('Speech synthesis not supported'));
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      const voice = this.voices.find(v => v.lang.includes('en') && v.name.includes('Female')) 
                    || this.voices.find(v => v.lang.includes('en'))
                    || this.voices[0];
      
      if (voice) utterance.voice = voice;
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 0.8;
      
      utterance.onend = () => resolve();
      utterance.onerror = (error) => reject(error);
      
      this.synthesis.speak(utterance);
    });
  }

  startListening() {
    return new Promise((resolve, reject) => {
      if (!this.recognition) {
        reject(new Error('Speech recognition not supported'));
        return;
      }

      this.isListening = true;
      
      this.recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        this.isListening = false;
        resolve(transcript);
      };

      this.recognition.onerror = (event) => {
        this.isListening = false;
        reject(new Error(event.error));
      };

      this.recognition.onend = () => {
        this.isListening = false;
      };

      this.recognition.start();
    });
  }

  stopListening() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
      this.isListening = false;
    }
  }

  getIsListening() {
    return this.isListening;
  }

  stopSpeaking() {
    if (this.synthesis) {
      this.synthesis.cancel();
    }
  }
}

// Animated Counter Component
const AnimatedCounter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [target, duration]);

  return <span>{count}</span>;
};

// Live Results Card
const LiveResultsCard = () => {
  return (
    <Card className="p-6 w-full max-w-sm bg-gradient-to-br from-blue-600/90 to-purple-600/90 text-white backdrop-blur-md border-0">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold text-lg">Live Results Today</h3>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-white/80 text-sm">Live</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 text-white">
        <div>
          <div className="text-4xl font-bold"><AnimatedCounter target={847} /></div>
          <div className="text-sm opacity-80">Conversations</div>
        </div>
        <div>
          <div className="text-4xl font-bold"><AnimatedCounter target={23} /></div>
          <div className="text-sm opacity-80">Qualified Leads</div>
        </div>
        <div>
          <div className="text-4xl font-bold"><AnimatedCounter target={12} /></div>
          <div className="text-sm opacity-80">Tours Scheduled</div>
        </div>
        <div>
          <div className="text-4xl font-bold"><AnimatedCounter target={3} /></div>
          <div className="text-sm opacity-80">Deals Closed</div>
        </div>
      </div>
    </Card>
  );
};

// Chat Preview Card
const ChatPreviewCard = () => {
  return (
    <Card className="p-4 w-full max-w-sm shadow-2xl bg-white">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
          <Bot className="w-5 h-5 text-white" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">Oak Street Property AI</h4>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-500">Online now</span>
          </div>
        </div>
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex justify-start">
          <div className="max-w-xs px-3 py-2 rounded-lg bg-gray-100 text-gray-800">How's the neighborhood?</div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-xs px-3 py-2 rounded-lg bg-gray-100 text-gray-800">What's the HOA fee?</div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-xs px-3 py-2 rounded-lg bg-gray-100 text-gray-800">Can I install a pool?</div>
        </div>
      </div>
    </Card>
  );
};

// Voice Hero Component
const VoiceHero = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  const handleVoiceCommand = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setTimeout(() => {
        setTranscript("Show me available properties");
        setIsListening(false);
      }, 2000);
    }
  };

  return (
    <div className="text-center">
      <div className="mb-8">
        <Button
          size="lg"
          onClick={handleVoiceCommand}
          disabled={isListening}
          className={`bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg ${
            isListening ? 'animate-pulse' : ''
          }`}
        >
          {isListening ? (
            <>
              <MicOff className="h-6 w-6 mr-2" />
              Listening...
            </>
          ) : (
            <>
              <Mic className="h-6 w-6 mr-2" />
              Try Voice Demo
            </>
          )}
        </Button>
      </div>
      
      {transcript && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg max-w-md mx-auto">
          <p className="text-sm text-gray-600">You said: "{transcript}"</p>
        </div>
      )}
    </div>
  );
};

// AI Chat Widget Component
const AIChatWidget = ({ isOpen, onToggle }) => {
  const [messages, setMessages] = useState([
    {
      id: '1',
      content: 'Hello! I\'m your AI real estate assistant. How can I help you today?',
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  const aiService = AIService.getInstance();
  const voiceService = VoiceService.getInstance();

  const sendMessage = async (message) => {
    if (!message.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      content: message,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await aiService.generateResponse(message);
      const aiMessage = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error generating AI response:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVoiceInput = async () => {
    try {
      setIsListening(true);
      const transcript = await voiceService.startListening();
      setIsListening(false);
      
      if (transcript) {
        await sendMessage(transcript);
      }
    } catch (error) {
      console.error('Voice input error:', error);
      setIsListening(false);
    }
  };

  const handleSpeak = async (text) => {
    try {
      setIsSpeaking(true);
      await voiceService.speak(text);
      setIsSpeaking(false);
    } catch (error) {
      console.error('Speech error:', error);
      setIsSpeaking(false);
    }
  };

  const stopSpeaking = () => {
    voiceService.stopSpeaking();
    setIsSpeaking(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={onToggle}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="mb-4 w-80 h-96 bg-white rounded-lg shadow-2xl border flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-blue-600 text-white rounded-t-lg">
          <div className="flex items-center space-x-2">
            <Bot className="h-5 w-5" />
            <span className="font-medium">AI Assistant</span>
          </div>
          <button onClick={onToggle} className="text-white/80 hover:text-white">
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.sender === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                <div className="flex items-center justify-between mt-2">
                  <p className={`text-xs ${
                    message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                  {message.sender === 'ai' && (
                    <button
                      onClick={() => isSpeaking ? stopSpeaking() : handleSpeak(message.content)}
                      className="ml-2 text-gray-500 hover:text-gray-700"
                    >
                      {isSpeaking ? <VolumeX className="h-3 w-3" /> : <Volume2 className="h-3 w-3" />}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-lg p-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <Input
              placeholder="Ask about properties..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage(inputMessage)}
              className="flex-1"
            />
            <Button
              size="sm"
              onClick={() => sendMessage(inputMessage)}
              disabled={!inputMessage.trim() || isLoading}
            >
              <Send className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={handleVoiceInput}
              disabled={isLoading}
              className={isListening ? 'bg-red-100 border-red-300' : ''}
            >
              {isListening ? <MicOff className="h-4 w-4 text-red-600" /> : <Mic className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        <X className="h-6 w-6" />
      </button>
    </div>
  );
};

// Main HomePage Component
const HomePage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-[5%] right-[5%] w-[20vw] opacity-10">
          <div className="w-32 h-32 bg-blue-200 rounded-full blur-xl"></div>
        </div>
        <div className="absolute top-[15%] left-[2%] w-[15vw] opacity-10">
          <div className="w-24 h-24 bg-purple-200 rounded-full blur-xl"></div>
        </div>
        <div className="absolute top-[50%] left-[10%] w-[25vw] opacity-10">
          <div className="w-40 h-40 bg-indigo-200 rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md fixed w-full z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Home className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">HomeListingAI</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</a>
              <Button variant="outline" onClick={() => navigate('/login')}>Sign In</Button>
              <Button onClick={() => navigate('/login')}>Get Started</Button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-600">Features</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-600">Pricing</a>
              <a href="#how-it-works" className="block px-3 py-2 text-gray-600">How It Works</a>
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" onClick={() => navigate('/login')} className="w-full">Sign In</Button>
                <Button onClick={() => navigate('/login')} className="w-full">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Updated Background */}
      <section className="relative overflow-hidden min-h-screen pt-16" id="hero">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop&crop=center')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40" />
        
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto px-4">
            {/* Left side content */}
            <div className="text-center lg:text-left">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                AI-Powered Real Estate Platform
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Talk to the <span className="text-blue-600">House</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl">
                Every listing comes with its own AI assistant. Buyers get instant answers 24/7. Agents get qualified leads on autopilot. $59/month.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                <Button size="lg" onClick={() => navigate('/login')}>
                  Start in minutes
                </Button>
                <Button size="lg" variant="outline">
                  Try Demo Chat
                </Button>
              </div>

              {/* 15-Day Guarantee Button */}
              <div className="flex justify-center lg:justify-start mb-4">
                <button className="flex items-center gap-2 bg-green-100 text-green-800 font-semibold px-5 py-2 rounded-full shadow-md border border-green-300 text-sm hover:bg-green-200 transition">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  15-Day Money-Back Guarantee
                </button>
              </div>
              <p className="text-sm text-gray-500">No setup fees • Cancel anytime</p>

              {/* Voice Demo Section */}
              <VoiceHero />
            </div>

            {/* Right side content with the cards */}
            <div className="space-y-6">
              <LiveResultsCard />
              <ChatPreviewCard />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Turn Every Listing Into a Lead Magnet
            </h2>
            <p className="text-xl text-gray-600">
              Stop chasing leads. Start capturing them automatically with AI that works 24/7.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: 'Generate 3x More Leads',
                desc: 'AI responds instantly to every buyer inquiry, capturing leads while you sleep',
                benefit: 'Increase lead volume without increasing work hours',
                color: 'from-purple-500 to-indigo-400'
              },
              {
                icon: Zap,
                title: 'Close Deals Faster',
                desc: 'Pre-qualified buyers arrive ready to buy, shortening your sales cycle',
                benefit: 'Turn conversations into contracts in weeks, not months',
                color: 'from-pink-500 to-yellow-400'
              },
              {
                icon: Clock,
                title: 'Save 20+ Hours Weekly',
                desc: 'Eliminate repetitive answering of the same buyer questions',
                benefit: 'Focus on high-value activities like showings and negotiations',
                color: 'from-blue-400 to-cyan-400'
              },
              {
                icon: TrendingUp,
                title: 'Boost Listing Visibility',
                desc: 'Interactive AI chat increases engagement and time on listing pages',
                benefit: 'Properties get more exposure and interest from serious buyers',
                color: 'from-green-400 to-teal-400'
              },
              {
                icon: Heart,
                title: 'Improve Client Satisfaction',
                desc: 'Buyers get instant answers and feel heard, even outside business hours',
                benefit: 'Happy buyers become loyal clients and referral sources',
                color: 'from-pink-300 to-pink-500'
              },
              {
                icon: Award,
                title: 'Increase Commission Value',
                desc: 'More qualified leads and faster closings mean more deals and higher income',
                benefit: 'Multiply your earning potential without multiplying your effort',
                color: 'from-purple-300 to-purple-500'
              }
            ].map((feature, index) => (
              <div key={feature.title}>
                <Card className="text-center p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="mb-4 text-gray-600">{feature.desc}</p>
                  <div className="flex items-center justify-center gap-2 text-green-600 font-semibold">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm">{feature.benefit}</span>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              From Setup to Sales in 4 Simple Steps
            </h2>
            <p className="text-xl text-gray-600">
              Be generating qualified leads in under 10 minutes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Upload Your Listing",
                description: "Add photos, details, and key selling points in minutes.",
                icon: Upload,
                color: "from-purple-500 to-indigo-600"
              },
              {
                number: "02",
                title: "AI Learns Everything",
                description: "Our AI instantly understands your property's unique features and neighborhood.",
                icon: Brain,
                color: "from-pink-500 to-rose-500"
              },
              {
                number: "03",
                title: "Share Your Smart Listing",
                description: "Get a special link with built-in AI chat for all your marketing.",
                icon: Share2,
                color: "from-sky-400 to-cyan-400"
              },
              {
                number: "04",
                title: "Watch Leads Pour In",
                description: "AI qualifies buyers 24/7 and sends you hot leads instantly.",
                icon: TrendingUp,
                color: "from-teal-400 to-emerald-500"
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-8 text-center h-full">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  {index === 0 && (
                    <div className="text-sm text-gray-400 font-medium mb-3">a url is all it takes</div>
                  )}
                  <p className="text-gray-600">{step.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-purple-800 to-pink-700 text-white">
        <div className="max-w-3xl mx-auto text-center px-4">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Built to Help You Close More Deals.
            </h2>
            <h3 className="text-2xl text-purple-100 font-semibold mb-6">
              Simple tools. Real support. Designed for real estate pros.
            </h3>
            <div className="text-lg sm:text-xl text-gray-100 mb-8 leading-relaxed font-medium">
              <p>We focus on one thing: helping agents like you connect with more buyers and sellers.</p>
              <p className="mt-2">No fluff. Just features that save time and help you win more clients.</p>
              <p className="mt-2">Let's make your next deal easier.</p>
            </div>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-2xl hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300 text-xl font-bold px-10 py-5"
              onClick={() => navigate('/login')}
            >
              🚀 Get started—it's built for agents like you
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Launch Special Banner */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="rounded-xl bg-gradient-to-r from-pink-500 to-yellow-400 text-white text-2xl font-extrabold py-4 px-6 shadow-lg text-center border-4 border-white">
              $59 a month <span className="text-3xl">per listing</span>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              One monthly price, every feature included. No hidden fees. Cancel anytime.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl">
              <div className="text-center">
                {/* Normal price badge */}
                <div className="flex flex-col items-center mb-4">
                  <span className="bg-white text-pink-600 text-base font-extrabold px-4 py-1 rounded-full border-2 border-pink-400 shadow-md mb-2">
                    <span className="line-through mr-1">$99</span> <span className="text-pink-400 font-bold text-xs align-middle">Normally</span>
                  </span>
                </div>
                <p className="text-6xl font-bold mb-2">
                  $59
                  <span className="text-2xl font-medium opacity-80">/mo/listing</span>
                </p>
                <p className="mb-8 opacity-90">Billed monthly per active listing. Cancel anytime.</p>
                
                {/* Feature list */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8 mt-6 text-left">
                  {[
                    "Full AI Lead System Included",
                    "24/7 Automated Lead Capture",
                    "Instant Buyer Conversations",
                    "Easy AI Upgrades: Just Upload New Info",
                    "Keep Your App Up to Date in Seconds",
                    "Built-in CRM & Follow-up Tools",
                    "Voice Bot & Live Chat",
                    "Neighborhood & School Data",
                    "Property History & Comps",
                    "Custom AI Training—No Coding Needed"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Button 
                size="lg" 
                className="w-full bg-white text-blue-600 hover:bg-gray-200"
                onClick={() => navigate('/login')}
              >
                <Rocket className="w-6 h-6 mr-2" />
                Get Started Now
              </Button>
              <p className="mt-4 text-center text-sm opacity-80">✅ 15-day money-back guarantee</p>
            </Card>
          </div>

          {/* Promise Statement */}
          <div className="max-w-2xl mx-auto mt-6">
            <Card className="p-4 text-center text-white bg-gradient-to-r from-blue-900 via-purple-800 to-pink-700/80 border-0">
              <div className="text-lg font-bold mb-1 tracking-wide">Our Promise:</div>
              <div className="text-base md:text-lg font-medium opacity-90">A tool that actually delivers—and a team that's obsessed with your ROI.</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-100 via-pink-100 to-pink-200">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center p-8 rounded-2xl border-2 border-pink-300 shadow-lg bg-white/50">
            <h2 className="text-2xl font-bold mb-2 text-pink-700 flex items-center justify-center gap-2">
              <MessageCircle className="w-7 h-7 text-blue-500" />
              Still Have Questions?
            </h2>
            <p className="text-blue-900 mb-6 font-medium">We're here to help! Get personalized answers and see HomeListingAI in action with a free consultation.</p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-pink-500 hover:from-blue-700 hover:to-pink-600 text-white font-semibold shadow-lg"
              onClick={() => setIsConsultationOpen(true)}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Book Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-0">
            <div className="mb-8 md:mb-0 flex-1 min-w-[200px]">
              <div className="flex items-center mb-4">
                <Home className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">HomeListingAI</span>
              </div>
              <p className="text-gray-400 mb-4 text-sm max-w-xs">Transform your real estate business with AI-powered listings and automated lead generation.</p>
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-green-400 text-green-400 bg-gray-800 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-green-400 mr-2"></span>
                15-Day Money-Back Guarantee
              </div>
            </div>
            <div className="flex flex-1 justify-between gap-12">
              <div>
                <h4 className="font-semibold mb-3 text-gray-100">Product</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#features" className="hover:text-blue-400">Features</a></li>
                  <li><a href="#pricing" className="hover:text-blue-400">Pricing</a></li>
                  <li><a href="#how-it-works" className="hover:text-blue-400">How It Works</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-gray-100">Contact</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="mailto:support@homelistingai.com" className="hover:text-blue-400">support@homelistingai.com</a></li>
                  <li><span className="text-gray-400">Seattle, WA</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row md:justify-between md:items-center text-xs text-gray-500">
            <div className="text-center md:text-left mb-2 md:mb-0">
              © 2024 HomeListingAI. All rights reserved.
            </div>
            <div className="text-center md:text-right">
              <button 
                onClick={() => navigate('/admin/login')}
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors duration-200"
                title="Admin Login"
              >
                <Settings className="w-4 h-4" />
                Admin Login
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Admin Button */}
      <button
        onClick={() => navigate('/admin/login')}
        className="fixed top-4 right-4 bg-red-600 text-white p-2 rounded-full shadow-lg hover:bg-red-700 transition-colors z-40"
        title="Admin Access"
      >
        <Shield className="h-5 w-5" />
      </button>

      {/* Consultation Modal */}
      {isConsultationOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setIsConsultationOpen(false)}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Book Free Consultation</h3>
              <button
                onClick={() => setIsConsultationOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <p className="text-gray-600 mb-6">Schedule a personalized demo and see how HomeListingAI can transform your business.</p>
            <div className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Email Address" />
              <Input type="tel" placeholder="Phone Number" />
              <TextArea placeholder="Tell us about your real estate business..." rows={3} />
              <Button className="w-full">Schedule My Free Demo</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Login Page Component
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();
  const { navigate } = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    const success = await login(email, password);
    if (!success) {
      setError('Invalid credentials. Try: agent@demo.com / demo123');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <Home className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900">Sign In to HomeListingAI</h2>
          <p className="text-gray-600 mt-2">Access your real estate dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
              {error}
            </div>
          )}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800 font-medium mb-2">Demo Credentials:</p>
          <p className="text-sm text-blue-700">Email: agent@demo.com</p>
          <p className="text-sm text-blue-700">Password: demo123</p>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            ← Back to Home
          </button>
        </div>
      </Card>
    </div>
  );
};

// Dashboard Component
const Dashboard = () => {
  const [isGeneratingDescription, setIsGeneratingDescription] = useState(false);
  const [generatedDescription, setGeneratedDescription] = useState('');
  const aiService = AIService.getInstance();

  const stats = [
    { name: 'Active Listings', value: '24', change: '+3', changeType: 'increase', icon: Building },
    { name: 'New Leads', value: '12', change: '+5', changeType: 'increase', icon: Users },
    { name: 'Scheduled Appointments', value: '8', change: '+2', changeType: 'increase', icon: Calendar },
    { name: 'This Month Revenue', value: '$45,250', change: '+12%', changeType: 'increase', icon: DollarSign },
  ];

  const handleGenerateDescription = async (listing) => {
    setIsGeneratingDescription(true);
    try {
      const description = await aiService.generatePropertyDescription(listing);
      setGeneratedDescription(description);
    } catch (error) {
      console.error('Error generating description:', error);
    } finally {
      setIsGeneratingDescription(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name} className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                    <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                      stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Featured Listings */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {mockListings.map((listing) => (
          <Card key={listing.id} className="overflow-hidden">
            <div className="relative">
              <img
                src={listing.images[0]}
                alt={listing.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  listing.status === 'active' ? 'bg-green-100 text-green-800' :
                  listing.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {listing.status}
                </span>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{listing.title}</h3>
              <p className="text-gray-600 text-sm mb-2 flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {listing.address}
              </p>
              <p className="text-2xl font-bold text-blue-600 mb-3">${listing.price.toLocaleString()}</p>
              
              <div className="flex items-center text-sm text-gray-600 mb-4 space-x-4">
                <span className="flex items-center">
                  <Bed className="h-4 w-4 mr-1" />
                  {listing.bedrooms}
                </span>
                <span className="flex items-center">
                  <Bath className="h-4 w-4 mr-1" />
                  {listing.bathrooms}
                </span>
                <span className="flex items-center">
                  <Square className="h-4 w-4 mr-1" />
                  {listing.sqft.toLocaleString()} sq ft
                </span>
              </div>

              {listing.walkScore && (
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Walk Score</span>
                    <span className="font-medium">{listing.walkScore}/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div
                      className="bg-green-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${listing.walkScore}%` }}
                    ></div>
                  </div>
                </div>
              )}

              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => handleGenerateDescription(listing)}
                    disabled={isGeneratingDescription}
                  >
                    <Zap className="h-4 w-4" />
                  </Button>
                </div>
                <Button size="sm" variant="ghost">
                  View Details
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Generated Description Display */}
      {generatedDescription && (
        <Card className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">AI Generated Description</h3>
          <p className="text-gray-700 leading-relaxed">{generatedDescription}</p>
          <div className="mt-4 flex justify-end">
            <Button size="sm" onClick={() => setGeneratedDescription('')}>
              Clear
            </Button>
          </div>
        </Card>
      )}

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Leads</h3>
          <div className="space-y-4">
            {mockLeads.slice(0, 3).map((lead) => (
              <div key={lead.id} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">{lead.name}</p>
                  <p className="text-sm text-gray-500">{lead.email}</p>
                </div>
                <div className="text-right">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    lead.status === 'new' ? 'bg-blue-100 text-blue-800' :
                    lead.status === 'contacted' ? 'bg-yellow-100 text-yellow-800' :
                    lead.status === 'qualified' ? 'bg-green-100 text-green-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {lead.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">AI Quick Actions</h3>
          <div className="space-y-3">
            <Button className="w-full justify-start">
              <PlusCircle className="h-5 w-5 mr-2" />
              Add New Listing
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Zap className="h-5 w-5 mr-2" />
              Generate AI Description
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <MessageCircle className="h-5 w-5 mr-2" />
              Start AI Chat
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Calendar className="h-5 w-5 mr-2" />
              Schedule Appointment
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const { isAuthenticated } = useAuth();
  const { currentRoute } = useRouter();
  const [isChatOpen, setIsChatOpen] = useState(false);

  if (isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-8 px-4">
          <Dashboard />
        </div>
        <AIChatWidget isOpen={isChatOpen} onToggle={() => setIsChatOpen(!isChatOpen)} />
      </div>
    );
  }

  if (currentRoute === '/login') {
    return <LoginPage />;
  }

  return (
    <>
      <HomePage />
      <AIChatWidget isOpen={isChatOpen} onToggle={() => setIsChatOpen(!isChatOpen)} />
    </>
  );
};

export default App;