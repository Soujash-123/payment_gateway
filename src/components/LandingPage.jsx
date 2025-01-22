import React, { useState, useEffect } from 'react';
import { ArrowRight, Key, Zap, Smartphone, Lock, Copy, Check, ChevronRight } from 'lucide-react';

const LandingPage = () => {
  const [copied, setCopied] = React.useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('curl');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const codeExamples = {
    curl: `curl -X POST https://synlink.onrender.com/integrate-razorpay \\
-H "Content-Type: application/json" \\
-d '{
  "api_key": "<YOUR_API_KEY>",
  "secret_key": "<YOUR_SECRET_KEY>",
  "amount": "500",
  "phone": "1234567890"
}'`,

    python: `import requests
import json

url = "https://synlink.onrender.com/integrate-razorpay"
headers = {"Content-Type": "application/json"}

payload = {
    "api_key": "<YOUR_API_KEY>",
    "secret_key": "<YOUR_SECRET_KEY>",
    "amount": "500",
    "phone": "1234567890"
}

response = requests.post(url, headers=headers, json=payload)
print(response.json())`,

    node: `const axios = require('axios');

const url = 'https://synlink.onrender.com/integrate-razorpay';
const payload = {
    api_key: '<YOUR_API_KEY>',
    secret_key: '<YOUR_SECRET_KEY>',
    amount: '500',
    phone: '1234567890'
};

axios.post(url, payload, {
    headers: { 'Content-Type': 'application/json' }
})
.then(response => console.log(response.data))
.catch(error => console.error(error));`,

    java: `import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.URI;

public class RazorpayIntegration {
    public static void main(String[] args) {
        String payload = """
            {
                "api_key": "<YOUR_API_KEY>",
                "secret_key": "<YOUR_SECRET_KEY>",
                "amount": "500",
                "phone": "1234567890"
            }""";

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://synlink.onrender.com/integrate-razorpay"))
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(payload))
            .build();

        HttpClient.newHttpClient()
            .sendAsync(request, HttpResponse.BodyHandlers.ofString())
            .thenApply(HttpResponse::body)
            .thenAccept(System.out::println);
    }`
  };

  const copyCode = () => {
    navigator.clipboard.writeText(codeExamples[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDemoClick = () => {
    window.open('https://calendly.com/synlink-demo/30min', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Floating shapes background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 relative">
        <div className="text-center mb-24">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Trusted by 10,000+ businesses worldwide
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Effortless Razorpay
              <br />
              Integration
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Transform your business with our powerful payment integration solution.
              Set up in minutes, not days.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a 
                href="https://synlink.onrender.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </a>
              <button 
                onClick={handleDemoClick}
                className="bg-white text-gray-800 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all border border-gray-200 flex items-center gap-2"
              >
                Schedule Demo
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
          {[
            { number: "99.9%", label: "Uptime" },
            { number: "0.3s", label: "Avg Response Time" },
            { number: "₹100M+", label: "Processed Daily" },
            { number: "10k+", label: "Happy Customers" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            { icon: Key, title: "Quick API Setup", desc: "Integration in less than 5 minutes with our streamlined onboarding process." },
            { icon: Zap, title: "Lightning Fast", desc: "Process thousands of transactions per second with 99.9% uptime guarantee." },
            { icon: Smartphone, title: "Mobile-First Design", desc: "Perfect checkout experience across all devices and platforms." },
            { icon: Lock, title: "Bank-Grade Security", desc: "PCI DSS Level 1 compliant with end-to-end encryption." }
          ].map((benefit, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-4 rounded-xl inline-block mb-6">
                <benefit.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* Code Example Section */}
        <div className="bg-gray-900 rounded-2xl p-8 mb-24 shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-white font-semibold text-xl mb-2">Integration Examples</h3>
              <p className="text-gray-400">Choose your preferred language</p>
            </div>
            <button
              onClick={copyCode}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied!" : "Copy code"}
            </button>
          </div>
          <div className="flex gap-4 mb-4">
            {Object.keys(codeExamples).map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveTab(lang)}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === lang
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          <pre className="text-gray-300 overflow-x-auto bg-gray-800/50 p-6 rounded-xl">
            <code>{codeExamples[activeTab]}</code>
          </pre>
        </div>

        {/* Final CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust our payment solution. Set up your account in minutes and start accepting payments today.
          </p>
          <a 
            href="https://synlink.onrender.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-12 py-6 rounded-xl text-xl font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 flex items-center mx-auto gap-2 shadow-lg"
          >
            Get Started For Free
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
