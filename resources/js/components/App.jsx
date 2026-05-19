import React from 'react';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import About from './About.jsx';
import ReportFeatures from './ReportFeatures.jsx';
import Customers from './Customers.jsx';
import HowItWorks from './HowItWorks.jsx';
import WhyUs from './WhyUs.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import FloatingCTA from './FloatingCTA.jsx';

export default function App() {
    return (
        <div style={{ background: 'var(--navy-950)', minHeight: '100vh' }}>
            <Navbar />
            <main>
                <Hero />
                <About />
                <ReportFeatures />
                <Customers />
                <HowItWorks />
                <WhyUs />
                <Contact />
            </main>
            <Footer />
            <FloatingCTA />
        </div>
    );
}