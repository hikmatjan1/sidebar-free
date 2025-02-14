import React from 'react';

function Home() {

    return (
        <div style={{ padding: "10px", fontSize: "13px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <h3 style={{ fontSize: "20px" }}>📌 Features:</h3>
                <div>✅ Fully customizable – Easily adjust width, height, and animations.</div>
                <div>✅ Smooth animations – Beautiful transitions when opening and closing.</div>
                <div>✅ Responsive design – Works perfectly on all devices (mobile & desktop).</div>
                <div>✅ Dark & Light mode support – Adapts to different themes effortlessly.</div>
                <div>✅ Two modes – Static or Collapsible (toggle) mode for better UX.</div>
                <div>✅ Seamless TailwindCSS integration – Customize styles easily.</div>
                <div>✅ Navigation-ready – Perfect for adding menus and action buttons.</div>
                <div>✅ Highly Customizable – Easily modify width, height, colors, and animations.</div>
                <div>✅ Multiple Sidebar Modes:</div>
                <div>✅ The navbar section is also included.</div>
                <ul style={{ display: "flex", flexDirection: "column", gap: "6px", paddingLeft: "20px" }}>
                    <li>Collapsible Mode – Sidebar toggles on/off with a button.</li>
                    <li>Static Mode – Always visible, ideal for dashboards.</li>
                    <li>Multi-Level Navigation – Supports nested menus for better organization.</li>
                    <li>Multi-Level Navigation – Supports nested menus for better organization.</li>
                </ul>
                <br />

                <h3 style={{ fontSize: "20px" }}>🛠 Technologies Used:</h3>
                <div>⚡ React.js – For an interactive and dynamic UI.</div>
                <div>🎨 TailwindCSS or Custom CSS – For modern and efficient styling.</div> <br />

                <h3 style={{ fontSize: "20px" }}>💡 Why Choose This Sidebar?</h3>
                <div>This React Sidebar is designed for modern web applications that require a fast, efficient, and easy-to-integrate navigation panel. Whether you are building a dashboard, an admin panel, or a simple navigation menu, this component is the perfect solution.</div>
                <div>🚀 Easy to set up</div>
                <div>🎨 Highly customizable</div>
                <div>📱 Works on all devices</div>
                <div>🛠 Minimal setup required</div>
            </div>
        </div>
    )
}

export default Home;