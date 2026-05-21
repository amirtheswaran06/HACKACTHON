import { useState, useEffect } from 'react';
import { 
  Sprout, 
  CloudSun, 
  BrainCircuit, 
  PhoneCall, 
  Languages, 
  TrendingUp, 
  AlertTriangle, 
  ShoppingCart,
  Thermometer,
  CloudRain,
  Droplets,
  Wind,
  Info,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle,
  Menu,
  X,
  ChevronRight,
  Sun
} from 'lucide-react';
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useTransform 
} from 'motion/react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Legend 
} from 'recharts';
import { AIRecResponse, MarketInsightResponse, MarketData } from './types';

// Components
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 px-6 py-4 flex justify-between items-center ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="flex items-center space-x-2">
        <div className="bg-green-700 p-2 rounded-lg">
          <Sprout className="text-white w-6 h-6" />
        </div>
        <span className={`text-2xl font-bold ${isScrolled ? 'text-green-900' : 'text-white'}`}>
          AgriAI <span className="text-green-600">Connect</span>
        </span>
      </div>
      
      <div className={`hidden lg:flex space-x-8 font-semibold ${isScrolled ? 'text-green-900' : 'text-white'}`}>
        {['Home', 'Services', 'Products', 'Weather', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-green-600 transition">
            {item}
          </a>
        ))}
      </div>

      <div className="flex items-center space-x-4">
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-white shadow-xl p-6 lg:hidden"
          >
            <div className="flex flex-col space-y-4">
              {['Home', 'Services', 'Products', 'Weather', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-green-900 text-lg font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
  href="#register"
  className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold text-center"
>
  Register Now
</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000"
          alt="Farmland background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl"
      >
        <span className="bg-yellow-400 text-green-900 px-4 py-1 rounded-full text-sm font-bold mb-6 inline-block uppercase tracking-wider">
          Powered by Artificial Intelligence
        </span>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          AI-Powered Agricultural Marketing at Scale
        </h1>

        <p className="text-xl text-green-50 mb-10 leading-relaxed max-w-2xl mx-auto">
          Helping farmers with weather insights, crop recommendations,
          fertilizer guidance, and better market opportunities.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="#register"
            className="bg-yellow-500 hover:bg-yellow-600 text-green-900 px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-lg transform hover:-translate-y-1 inline-block"
          >
            Register as Farmer
          </a>

          <a
  href="#products"
  className="bg-white/10 backdrop-blur-md text-white px-10 py-4 rounded-xl font-bold text-lg border border-white/30 hover:bg-white/20 transition-all inline-block"
>
  Explore Products
</a>
        </div>
      </motion.div>
    </section>
  );
};
const Services = () => {
  const services = [
    { icon: CloudSun, title: "Weather Updates", desc: "Real-time alerts with precision hyper-local mapping." },
    { icon: BrainCircuit, title: "AI Crop Suggest", desc: "Recommendation based on soil health and seasonal data." },
    { icon: PhoneCall, title: "Voice Alerts", desc: "Offline automated voice calls for farmers without internet." },
    { icon: Languages, title: "Local Languages", desc: "Supports Hindi, Tamil, Telugu, and 10+ regional languages." },
  ];

  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-green-900">Our AI Ecosystem</h2>
        <div className="w-20 h-1.5 bg-yellow-500 mx-auto mt-4 rounded-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group bg-[#155f00]"
          >
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${index === 0 ? 'bg-[#fbfbfb]' : 'bg-[#ffffff]'}`}>
              <item.icon className="text-green-700 w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#ffffff]">{item.title}</h3>
            <p className={`${index === 0 || index === 3 ? 'text-[#fefefe]' : 'text-[#ffffff]'} leading-relaxed`}>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const MarketAnalytics = () => {
  const [data, setData] = useState<MarketData[]>([
    { month: 'Jan', yield: 12, price: 10 },
    { month: 'Feb', yield: 19, price: 15 },
    { month: 'Mar', yield: 15, price: 12 },
    { month: 'Apr', yield: 25, price: 18 },
    { month: 'May', yield: 22, price: 28 },
    { month: 'Jun', yield: 30, price: 25 },
  ]);
  const [insight, setInsight] = useState("Market prices are expected to rise by 12% next month based on seasonal trend analysis.");

  const fetchInsights = async () => {
    try {
      const res = await fetch('/api/market-insights', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ crop: 'Rice' })
      });
      const result: MarketInsightResponse = await res.json();
      if (result.trends) setData(result.trends);
      if (result.summary) setInsight(result.summary);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
          <h2 className="text-4xl font-bold text-green-900 mb-6">Real-Time Crop Analytics</h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Our AI engine predicts market prices and harvest quality trends to give you the best return on investment.
          </p>
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-5 bg-white rounded-2xl shadow-sm border-l-4 border-green-500">
              <TrendingUp className="text-green-600 w-6 h-6 shrink-0" />
              <span className="font-semibold text-green-900">{insight}</span>
            </div>
            <div className="flex items-center space-x-4 p-5 bg-white rounded-2xl shadow-sm border-l-4 border-yellow-500">
              <AlertTriangle className="text-yellow-600 w-6 h-6 shrink-0" />
              <span className="font-semibold text-green-900">Pest risk detected in nearby regions: Preemptive spraying recommended.</span>
            </div>
            <button 
              onClick={fetchInsights}
              className="mt-4 text-green-700 font-bold flex items-center hover:translate-x-2 transition-transform"
            >
              Get Latest AI Prediction <ChevronRight className="ml-1" />
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white p-8 rounded-[2.5rem] shadow-xl h-[400px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
              <XAxis dataKey="month" stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              />
              <Legend verticalAlign="top" height={36}/>
              <Line type="monotone" dataKey="yield" name="Yield Prediction (Tons)" stroke="#16a34a" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="price" name="Market Price (Index)" stroke="#eab308" strokeWidth={3} strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
};
const Registration = () => {
  return (
    <section id="register" className="py-24 px-6 bg-[#155f00]">
      <div className="max-w-6xl mx-auto bg-green-900 rounded-[3.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl">
        
        <div className="md:w-1/2 relative bg-[url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80')] bg-cover bg-center h-[300px] md:h-auto">
          <div className="absolute inset-0 bg-green-900/10" />
        </div>

        <div className="md:w-1/2 p-12 lg:p-20 bg-white">
          <h2 className="text-4xl font-bold text-green-900 mb-4">
            Join the Revolution
          </h2>

          <p className="text-[#000000] mb-10 text-lg">
            Register now to start receiving personalized AI farming insights via WhatsApp and Voice.
          </p>

          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();

              const form = e.currentTarget;

              const inputs = form.querySelectorAll("input, select");

              let isValid = true;

              inputs.forEach((input: any) => {
                if (!input.value.trim()) {
                  isValid = false;
                }
              });

              if (!isValid) {
                return;
              }

              const popup = document.createElement("div");

              popup.innerHTML = `
                <div style="
                  display:flex;
                  align-items:center;
                  gap:12px;
                ">
                  <span style="
                    background:#eab308;
                    color:#14532d;
                    width:34px;
                    height:34px;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    border-radius:999px;
                    font-size:18px;
                    font-weight:bold;
                  ">
                    ✓
                  </span>

                  <div>
                    <div style="
                      font-size:18px;
                      font-weight:800;
                      margin-bottom:2px;
                    ">
                      Registration Successful
                    </div>

                    <div style="
                      font-size:14px;
                      opacity:0.9;
                    ">
                      Farmer details submitted successfully
                    </div>
                  </div>
                </div>
              `;

              popup.style.position = "fixed";
              popup.style.top = "30px";
              popup.style.right = "30px";
              popup.style.background = "#14532d";
              popup.style.color = "white";
              popup.style.padding = "18px 24px";
              popup.style.borderRadius = "20px";
              popup.style.boxShadow = "0 12px 30px rgba(0,0,0,0.25)";
              popup.style.zIndex = "9999";
              popup.style.minWidth = "320px";
              popup.style.border = "2px solid #22c55e";
              popup.style.fontFamily = "sans-serif";
              popup.style.transition = "0.3s";

              document.body.appendChild(popup);

              setTimeout(() => {
                popup.style.opacity = "0";

                setTimeout(() => {
                  popup.remove();
                }, 300);
              }, 3000);

              form.reset();
            }}
          >
            <input
              type="text"
              placeholder="Farmer Name"
              className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-green-500 transition-all text-lg"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-green-500 transition-all text-lg"
            />

            <div className="grid grid-cols-2 gap-4">
              <select className="px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-green-500 transition-all">
                <option>Preferred Language</option>
                <option>English</option>
                <option>Tamil</option>
                <option>Hindi</option>
              </select>

              <input
                type="text"
                placeholder="Location"
                className="px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-green-500 transition-all"
              />
            </div>

            <button className="w-full py-5 bg-yellow-500 hover:bg-yellow-600 text-green-950 font-black rounded-2xl transition-all shadow-xl uppercase tracking-widest text-lg transform hover:-translate-y-1">
              Start Your Smart Journey
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
const Products = () => {
  const products = [
    { title: "Premium NPK Mix", category: "Organic", price: "₹850.00", img: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&q=80&w=600" },
    { title: "Bio-Insecticide", category: "Protection", price: "₹420.00", img: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80&w=600" },
    { title: "Micro-Nutrients", category: "Bio", price: "₹600.00", img: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c3c8b?auto=format&fit=crop&q=80&w=600" },
    { title: "Potash Liquid", category: "Nutrients", price: "₹350.00", img: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&q=80&w=600" },
  ];

  return (
    <section id="products" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-5xl font-extrabold text-green-900 mb-4 tracking-tight">Premium Supplies</h2>
          <p className="text-gray-500 text-xl font-medium">Verified quality fertilizers and pesticides with AI dosage guide.</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-green-100 text-green-800 px-8 py-3 rounded-full font-bold">Fertilizers</button>
          <button className="bg-white text-gray-500 px-8 py-3 rounded-full font-bold border border-gray-200">Pesticides</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((p, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-50"
          >
            <div className="h-56 overflow-hidden">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="p-8">
              <span className="text-xs font-black text-green-600 uppercase tracking-widest">{p.category}</span>
              <h4 className="text-2xl font-bold text-green-900 mt-2 mb-3">{p.title}</h4>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">Boost your yield with scientifically tested formulas.</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-black text-green-900">{p.price}</span>
                <button className="bg-green-700 p-3 rounded-xl text-white hover:bg-green-800 shadow-lg shadow-green-200">
                  <ShoppingCart className="w-6 h-6" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const WeatherDashboard = () => {
  const stats = [
    { icon: Thermometer, label: "Temperature", val: "32°C", color: "text-orange-500" },
    { icon: CloudRain, label: "Rain Prob.", val: "15%", color: "text-blue-500" },
    { icon: Droplets, label: "Humidity", val: "64%", color: "text-teal-500" },
    { icon: Wind, label: "Wind Speed", val: "12 km/h", color: "text-gray-500" },
  ];

  return (
    <section id="weather" className="py-24 px-6 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto bg-[#004313] p-12 lg:p-20 rounded-[4rem] relative overflow-hidden shadow-2xl border border-white">
        <div className="absolute top-0 right-0 p-12 opacity-5">
          <Sun className="w-48 h-48 text-yellow-400" />
        </div>
        
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-[#ffffff] mb-12">Agriculture Weather Pulse</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 p-8 rounded-[2rem] text-center border border-gray-100"
              >
                <s.icon className={`mx-auto ${s.color} mb-4 w-10 h-10`} />
                <p className="text-gray-500 font-bold uppercase text-xs tracking-widest mb-1">{s.label}</p>
                <h4 className="text-3xl font-black text-green-900">{s.val}</h4>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-12 p-8 bg-green-900 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center space-x-6">
              <div className="p-3 bg-white/10 rounded-full">
                <Info className="text-yellow-400 w-8 h-8" />
              </div>
              <div>
                <p className="text-green-100 text-sm uppercase font-black tracking-widest mb-1">AI Recommendation</p>
                <p className="text-lg font-medium">Perfect time for sowing seeds. Soil moisture is optimal for next 48 hours.</p>
              </div>
            </div>
            <button className="bg-yellow-500 px-8 py-3 rounded-2xl text-green-950 font-black whitespace-nowrap hover:bg-yellow-600 transition">
              Detailed Forecast
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-green-800 to-green-950 rounded-[4rem] p-16 lg:p-24 text-white relative overflow-hidden shadow-3xl">
        <div className="relative z-10">
          <h2 className="text-5xl font-black mb-16 tracking-tight">How We Build Farmer Trust</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { id: "01", title: "Dealer Discovery", desc: "We connect you with verified physical stores nearby to ensure quality check before delivery." },
              { id: "02", title: "Market Timing", desc: "Our AI helps you identify optimal sales windows to maximize your profit margin by up to 30%." },
              { id: "03", title: "Support Priority", desc: "Human-centered design. We never push products you don't need. Our goal is your success." }
            ].map((item, i) => (
              <div key={i} className="group">
                <span className="text-yellow-400 text-6xl font-black opacity-20 group-hover:opacity-100 transition-opacity duration-500 mb-6 block">{item.id}</span>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-green-100/70 text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-20 -right-20 opacity-5">
          <ShieldCheck className="w-[500px] h-[500px]" />
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="text-5xl font-black text-green-900 mb-8 tracking-tight">Let's Modernize <br/>Together.</h2>
          <p className="text-gray-500 mb-12 text-xl leading-relaxed">
            Have questions about our AI technology? Our experts are here to help you modernize your farm with the latest AgTech innovations.
          </p>
          <div className="space-y-8">
            {[
              { icon: Phone, label: "Toll Free", val: "+91 99520 34863" },
              { icon: Mail, label: "Email Address", val: "hello@agriaiconnect.com" },
              { icon: MapPin, label: "Headquarters", val: "Chennai, Tamil Nadu, India" }
            ].map((c, i) => (
              <div key={i} className="flex items-center space-x-6">
                <div className="bg-green-100 p-5 rounded-3xl text-green-700">
                  <c.icon className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-black text-gray-400 uppercase tracking-widest mb-1">{c.label}</p>
                  <p className="text-2xl font-bold text-green-950">{c.val}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#F8F9FA] p-12 lg:p-16 rounded-[4rem] border border-gray-100 shadow-2xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-6">
              <input type="text" placeholder="First Name" className="w-full p-5 rounded-2xl bg-white border-none focus:ring-2 focus:ring-green-500 shadow-sm text-lg" />
              <input type="text" placeholder="Last Name" className="w-full p-5 rounded-2xl bg-white border-none focus:ring-2 focus:ring-green-500 shadow-sm text-lg" />
            </div>
            <input type="email" placeholder="Email Address" className="w-full p-5 rounded-2xl bg-white border-none focus:ring-2 focus:ring-green-500 shadow-sm text-lg" />
            <textarea placeholder="Tell us about your farm..." rows={4} className="w-full p-5 rounded-2xl bg-white border-none focus:ring-2 focus:ring-green-500 shadow-sm text-lg"></textarea>
            <button className="w-full py-5 bg-green-700 text-white font-black rounded-2xl hover:bg-green-800 transition shadow-xl uppercase tracking-widest text-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 border-b border-white/10 pb-20">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center space-x-3 mb-10">
            <div className="bg-green-600 p-2 rounded-lg">
              <Sprout className="w-6 h-6" />
            </div>
            <span className="text-3xl font-black tracking-tighter">AgriAI Connect</span>
          </div>
          <p className="text-green-100/40 leading-relaxed text-lg mb-10">
            Pioneering the future of digital farming in India with AI-driven insights and sustainable practices.
          </p>
          <div className="flex space-x-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="bg-white/5 p-4 rounded-2xl hover:bg-yellow-500 transition-all hover:text-green-950">
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-black text-xl mb-10 uppercase tracking-widest text-yellow-500/50">Explore</h4>
          <ul className="space-y-6 text-green-100/60 text-lg">
            {['Home', 'Company', 'Success Stories', 'Privacy Policy'].map((item) => (
              <li key={item}><a href="#" className="hover:text-yellow-400 transition">{item}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-black text-xl mb-10 uppercase tracking-widest text-yellow-500/50">Services</h4>
          <ul className="space-y-6 text-green-100/60 text-lg">
            {['AI Recommendations', 'Soil Health', 'Market Analysis', 'Dealer Discovery'].map((item) => (
              <li key={item}><a href="#" className="hover:text-yellow-400 transition">{item}</a></li>
            ))}
          </ul>
        </div>

        <div className="bg-white/5 p-10 rounded-[3rem] border border-white/5">
          <h4 className="font-bold text-2xl mb-6">Stay Connected</h4>
          <p className="text-green-100/50 mb-8">Join 10,000+ farmers receiving smart updates weekly.</p>
          <div className="flex flex-col space-y-4">
            <input type="email" placeholder="email@example.com" className="bg-white/10 border-none rounded-2xl p-4 text-white placeholder:text-white/20 focus:ring-1 focus:ring-yellow-500" />
            <button className="bg-white text-green-950 font-black py-4 rounded-2xl hover:bg-yellow-500 transition">Subscribe</button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-10 flex flex-col md:flex-row justify-between items-center text-green-100/20 font-bold uppercase tracking-widest text-sm">
        <p>© 2024 AgriAI Connect. All rights reserved.</p>
        <div className="flex space-x-12 mt-6 md:mt-0 items-center">
          <span className="flex items-center"><span className="text-red-500 mr-2 text-xl">🇮🇳</span> Made for Indian Farmers</span>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-[#FDFDF7] min-h-screen text-gray-900 selection:bg-green-200 scroll-smooth">
      <Navbar />
      <Hero />
      <Services />
      <MarketAnalytics />
      <Registration />
      <Products />
      <WeatherDashboard />
      <TrustSection />
      <Contact />
      <Footer />
      
      {/* Floating WhatsApp */}
      <motion.a 
        href="#"
        whileHover={{ scale: 1.1 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="fixed bottom-10 right-10 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-2xl flex items-center justify-center"
      >
        <MessageCircle className="w-10 h-10" />
      </motion.a>
    </div>
  );
}
