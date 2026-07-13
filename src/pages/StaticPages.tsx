import React from 'react';
import { Helmet } from 'react-helmet-async';

export const AboutUs: React.FC = () => (
  <div className="max-w-3xl mx-auto px-4 py-16">
    <Helmet>
      <title>About Us | BDchatGPT</title>
      <meta name="description" content="Learn about BDchatGPT, our mission, and our commitment to privacy and free online tools." />
      <link rel="canonical" href="https://bdchatgpt.pro.bd/about-us" />
    </Helmet>
    <h1 className="text-4xl font-bold mb-8">About Us</h1>
    <div className="prose prose-lg dark:prose-invert">
      <p>Welcome to BDchatGPT, your one-stop hub for free, accessible, and privacy-first online utilities.</p>
      
      <h2>Our Mission</h2>
      <p>We believe that everyday digital tasks shouldn't require downloading bloated apps, signing up for accounts, or sacrificing your privacy. Our mission is to provide high-quality tools that are accessible to everyone, everywhere, instantly.</p>
      
      <h2>What Makes Us Different?</h2>
      <ul>
        <li><strong>100% Free:</strong> No paywalls, no subscriptions, no hidden features.</li>
        <li><strong>No Sign-Ups:</strong> We don't want your email address. Just use the tools and go.</li>
        <li><strong>Privacy First:</strong> Our tools run completely in your web browser. When you use our word counter, image compressor, or any other tool, your data never leaves your device. We do not upload, store, or analyze your files.</li>
        <li><strong>Fast & Lightweight:</strong> Built with modern web technologies, our tools load instantly even on slow connections.</li>
      </ul>
      
      <p>Whether you're a developer formatting JSON, a student calculating your GPA, or a writer checking your word count, we hope our tools make your day a little bit easier.</p>
    </div>
  </div>
);

export const ContactUs: React.FC = () => (
  <div className="max-w-3xl mx-auto px-4 py-16">
    <Helmet>
      <title>Contact Us | BDchatGPT</title>
      <meta name="description" content="Get in touch with the BDchatGPT team for questions, suggestions, or bug reports." />
      <link rel="canonical" href="https://bdchatgpt.pro.bd/contact-us" />
    </Helmet>
    <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
    <p className="text-lg text-foreground/70 mb-8">Have a question, suggestion, or found a bug? We'd love to hear from you.</p>
    
    <div className="bg-card border border-border rounded-xl p-8 shadow-sm mb-8">
      <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('In a real app, this would send an email via Formspree or similar service.'); }}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
          <input type="text" id="name" required className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <input type="email" id="email" required className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
          <textarea id="message" rows={5} required className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"></textarea>
        </div>
        <button type="submit" className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors">
          Send Message
        </button>
      </form>
    </div>
    
    <div className="prose dark:prose-invert">
      <h3>Support Email</h3>
      <p>You can also reach us directly at <a href="mailto:support@multitools.example.com">support@multitools.example.com</a>. We typically respond within 24-48 hours.</p>
    </div>
  </div>
);

export const PrivacyPolicy: React.FC = () => (
  <div className="max-w-3xl mx-auto px-4 py-16">
    <Helmet>
      <title>Privacy Policy | BDchatGPT</title>
      <meta name="description" content="Read our privacy policy to understand how BDchatGPT protects your data and privacy." />
      <link rel="canonical" href="https://bdchatgpt.pro.bd/privacy-policy" />
    </Helmet>
    <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
    <div className="prose prose-lg dark:prose-invert">
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      
      <h2>1. Local Processing Guarantee</h2>
      <p>The core principle of BDchatGPT is privacy by design. All of our 30+ tools process data <strong>locally in your web browser</strong>. We do not upload your text, images, code, or personal files to any server. When you use a tool, your data stays on your device.</p>
      
      <h2>2. Information We Collect</h2>
      <p>We do not require you to create an account, so we do not collect personal information like names or email addresses unless you voluntarily provide them via our Contact Form.</p>
      <p>Like most websites, our web hosting servers may automatically log standard technical information, such as your IP address, browser type, and the pages you visit. This is standard practice and is used strictly for security and analytics.</p>
      
      <h2>3. Cookies and LocalStorage</h2>
      <p>We use your browser's LocalStorage to save your preferences, such as your Dark/Light mode theme choice. This data is stored locally on your device and is not transmitted to us.</p>
      
      <h2>4. Third-Party Services</h2>
      <p>We may use third-party services (such as Google Analytics or Google AdSense) to analyze traffic and display advertisements. These services may use cookies or web beacons to collect non-personally identifiable information. You can opt out of personalized advertising by visiting the respective privacy settings of these providers.</p>
      
      <h2>5. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page.</p>
      
      <h2>6. Contact Us</h2>
      <p>If you have questions about this Privacy Policy, please contact us at <a href="/contact-us">our contact page</a>.</p>
    </div>
  </div>
);

export const Disclaimer: React.FC = () => (
  <div className="max-w-3xl mx-auto px-4 py-16">
    <Helmet>
      <title>Disclaimer | BDchatGPT</title>
      <meta name="description" content="Read the disclaimer for BDchatGPT's tools and calculators." />
      <link rel="canonical" href="https://bdchatgpt.pro.bd/disclaimer" />
    </Helmet>
    <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>
    <div className="prose prose-lg dark:prose-invert">
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      
      <h2>General Information Purposes</h2>
      <p>All tools, calculators, and converters provided on BDchatGPT are intended for general informational and educational purposes only. While we strive to ensure the algorithms and formulas used are accurate, we make no guarantees regarding the completeness, reliability, or absolute accuracy of the results provided.</p>
      
      <h2>Not Professional Advice</h2>
      <p>The outputs from our calculators (including financial calculators like the Loan/EMI calculator, and health calculators like the BMI calculator) do not constitute professional advice. </p>
      <ul>
        <li><strong>Financial Tools:</strong> Do not rely on our calculators for making financial decisions, signing contracts, or filing taxes. Always consult a certified financial planner or accountant.</li>
        <li><strong>Health Tools:</strong> BMI and other health-related tools are not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician.</li>
      </ul>
      
      <h2>No Liability</h2>
      <p>BDchatGPT, its creators, and affiliates shall not be held liable for any damages, losses, or negative outcomes resulting from the use of our website or reliance on the information generated by our tools.</p>
      
      <h2>External Links</h2>
      <p>Our website may contain links to external sites that are not operated by us. We have no control over the content and practices of these sites and cannot accept responsibility or liability for their respective privacy policies.</p>
    </div>
  </div>
);

