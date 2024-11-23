import React from 'react';
import { Github, Cpu, Database, Shield, BookOpen, Server, LineChart, Layout } from 'lucide-react';
import Architecture from './components/Architecture';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import SetupGuide from './components/SetupGuide';
import Scenarios from './components/Scenarios';
import Documentation from './components/Documentation';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      
      {/* Hero Section */}
      <header className="py-20 px-4 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Azure IoT Labs Guide</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Master Azure IoT with hands-on labs and real-world scenarios
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#setup" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Get Started
          </a>
          <a href="#scenarios" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors">
            View Scenarios
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Architecture Section */}
        <section id="architecture" className="py-16 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Layout className="h-8 w-8 text-blue-600" />
            Architecture Overview
          </h2>
          <Architecture />
        </section>

        {/* Setup Guide */}
        <SetupGuide />

        {/* Scenarios */}
        <Scenarios />

        {/* Documentation */}
        <Documentation />

        {/* Features Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Server className="h-8 w-8 text-blue-600" />,
                title: "IoT Hub Setup",
                description: "Configure and manage Azure IoT Hub for device communication and data ingestion."
              },
              {
                icon: <Cpu className="h-8 w-8 text-blue-600" />,
                title: "Device Simulation",
                description: "Emulate real IoT devices and sensors with our comprehensive simulation tools."
              },
              {
                icon: <Database className="h-8 w-8 text-blue-600" />,
                title: "Data Management",
                description: "Store and process IoT data using Azure Cosmos DB and Stream Analytics."
              },
              {
                icon: <Shield className="h-8 w-8 text-blue-600" />,
                title: "Security",
                description: "Implement robust security measures for device authentication and data protection."
              },
              {
                icon: <LineChart className="h-8 w-8 text-blue-600" />,
                title: "Analytics",
                description: "Analyze IoT data with Power BI dashboards and Azure Functions."
              },
              {
                icon: <BookOpen className="h-8 w-8 text-blue-600" />,
                title: "Documentation",
                description: "Access comprehensive guides and practical scenarios for hands-on learning."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;