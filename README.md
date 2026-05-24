# mobile-application
React Native mobile app for industrial machine control via WebSocket and MQTT. Connects to ESP8266 for real-time monitoring, sensor data visualization, and machine control.
# Industrial Machine Control Mobile App

React Native mobile application for industrial machine control via WebSocket and MQTT protocols. Connects to ESP8266-based industrial controllers for real-time monitoring, sensor data visualization, and machine control.

## Features

- **Dual Protocol Support** – Connect via WebSocket (direct to ESP8266) or MQTT (via broker)
- **Real-Time Sensor Data** – Temperature (3 channels), pressure, water level, HC level
- **Machine Control** – ON/OFF, timer settings (30/45/60 min), engine size selection
- **Data Logging** – Automatic history logging every minute, snapshot persistence
- **MQTT Broker Configuration** – Customizable broker host, port, TLS, username/password
- **Recent IP History** – Saves and suggests recent device IP addresses
- **Export Functionality** – Export logged data for analysis

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React Native (Expo) | Mobile app framework |
| TypeScript | Type safety |
| WebSocket | Real-time device communication |
| MQTT (MQTT.js) | Broker-based IoT communication |
| AsyncStorage | Local data persistence |

## Architecture
┌─────────────────────────────────────────────────────────────┐
│ Mobile Application │
├─────────────────────────────────────────────────────────────┤
│ │
│ ┌─────────────┐ ┌─────────────┐ │
│ │ WebSocket │ │ MQTT │ │
│ │ Provider │ │ Provider │ │
│ └──────┬──────┘ └──────┬──────┘ │
│ │ │ │
│ ▼ ▼ │
│ ┌─────────────┐ ┌─────────────┐ │
│ │ ESP8266 │ │ Broker │ │
│ │ (Device) │ │ (Mosquitto/ │ │
│ └─────────────┘ │ CloudMQTT) │ │
│ └─────────────┘ │
│ │
└─────────────────────────────────────────────────────────────┘

## Screens

| Screen | Description |
|--------|-------------|
| **Main (index.tsx)** | Connection management, real-time sensor data, machine controls |
| **Export** | View and export logged history |
| **About** | App information and documentation |

## Connection Options

### WebSocket (Direct to ESP8266)
1. Enter device IP address (e.g., `192.168.1.100`)
2. Tap **Connect**
3. App connects to `ws://[IP]/ws`

### MQTT (via Broker)
1. Enter broker host, port, credentials
2. Enter Device ID (matches ESP8266 configuration)
3. Tap **Connect MQTT**

## Data Display

| Data Point | Unit | Description |
|------------|------|-------------|
| Temperature 1-3 | °C | Machine temperature sensors |
| Pressure | PSI | System pressure |
| Level 1 | % | Water level |
| Level 2 | % | HC (Hydrocarbon) level |
| Timer | HH:MM:SS | Remaining session time |
| Service Remaining | Hours | Time until next calibration |

## Control Commands

| Command | Action |
|---------|--------|
| `start` | Start machine operation |
| `stop` | Stop machine operation |
| `t30` | Set timer to 30 minutes |
| `t45` | Set timer to 45 minutes |
| `t60` | Set timer to 60 minutes |
| `1000` | Set engine size 0-1L |
| `2000` | Set engine size 1-2L |
| `3000` | Set engine size 2-3L |
| `4000` | Set engine size 3-4L |

## Installation

### Prerequisites
- Node.js (v16+)
- npm or yarn
- Expo CLI

### Setup

```bash
# Clone repository
git clone https://github.com/ayoubgethub2024/mobile-application.git
cd mobile-application

# Install dependencies
npm install
# or
yarn install

# Start Expo development server
npx expo start
