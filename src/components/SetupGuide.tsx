import React from 'react';
import { Terminal, Cloud, Settings, Check } from 'lucide-react';

const SetupGuide = () => {
  const steps = [
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Create Azure Resources",
      content: `
1. Create an Azure IoT Hub
\`\`\`powershell
# Create a resource group
az group create --name IoTLabGroup --location westeurope

# Create an IoT Hub
az iot hub create --name MyIoTLab --resource-group IoTLabGroup --sku S1
\`\`\`
`,
    },
    {
      icon: <Terminal className="h-6 w-6" />,
      title: "Configure Device Registration",
      content: `
1. Register a new device
\`\`\`powershell
# Register a new device
az iot hub device-identity create --hub-name MyIoTLab --device-id myDevice

# Get the connection string
az iot hub device-identity connection-string show --hub-name MyIoTLab --device-id myDevice
\`\`\`
`,
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Set Up Device Simulation",
      content: `
\`\`\`javascript
const clientFromConnectionString = require('azure-iot-device-mqtt').clientFromConnectionString;
const Message = require('azure-iot-device').Message;

const connectionString = '[Device Connection String]';
const client = clientFromConnectionString(connectionString);

function sendMessage() {
  const temperature = 20 + (Math.random() * 10);
  const humidity = 60 + (Math.random() * 20);
  const data = JSON.stringify({ temperature, humidity });
  const message = new Message(data);
  
  client.sendEvent(message, (err) => {
    if (err) console.error('Could not send message:', err);
    else console.log('Message sent successfully');
  });
}

client.open((err) => {
  if (err) console.error('Could not connect:', err);
  else {
    console.log('Client connected');
    setInterval(sendMessage, 5000);
  }
});
\`\`\`
`,
    },
  ];

  return (
    <section id="setup" className="py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Setup Guide</h2>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-blue-600">{step.icon}</div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
                <code>{step.content}</code>
              </pre>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SetupGuide;