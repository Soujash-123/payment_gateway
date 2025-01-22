import React from 'react';
import { ArrowRight, Key, Zap, Smartphone, Lock, Copy } from 'lucide-react';

const LandingPage = () => {
  const [copied, setCopied] = React.useState(false);

  const curlCommand = `curl -X POST https://synlink.onrender.com/integrate-razorpay \\
-H "Content-Type: application/json" \\
-d '{
  "api_key": "rzp_test_JrKAzmnInWh8vu",
  "secret_key": "R9wompUtizorFSSDUR5QIq95",
  "amount": "500",
  "phone": "1234567890"
}'`;

  const copyCode = () => {
    navigator.clipboard.writeText(curlCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Effortless Razorpay Integration
            <br />
            for Your Business
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Seamlessly integrate secure payment systems with our API and Website solutions,
            customized for your needs.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center mx-auto gap-2">
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { icon: Key, title: "Quick API Setup", desc: "Just provide your Razorpay credentials, and you're ready to accept payments." },
            { icon: Zap, title: "Fast Payment Verification", desc: "Simplified tools to ensure seamless order and payment authentication." },
            { icon: Smartphone, title: "User-Friendly Interface", desc: "Create and manage orders effortlessly through our intuitive web portal." },
            { icon: Lock, title: "Secure Transactions", desc: "Built-in Razorpay utilities to ensure end-to-end encryption and secure payments." }
          ].map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <benefit.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Generate Credentials", desc: "Add your Razorpay API key and secret." },
              { step: "2", title: "Create Orders", desc: "Use our API or website dashboard to create payment orders." },
              { step: "3", title: "Verify Payments", desc: "Validate transactions quickly with our secure verification tools." }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Code Example */}
        <div className="bg-gray-900 rounded-xl p-6 mb-16">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-white font-semibold">Quick Integration Example</h3>
            <button
              onClick={copyCode}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Copy className="w-4 h-4" />
              {copied ? "Copied!" : "Copy code"}
            </button>
          </div>
          <pre className="text-gray-300 overflow-x-auto">
            <code>{curlCommand}</code>
          </pre>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="bg-blue-600 text-white px-12 py-6 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-colors flex items-center mx-auto gap-2">
            Start Integrating Razorpay Today 🚀
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;