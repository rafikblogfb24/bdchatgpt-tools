import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Shield, FileText, Mail, HelpCircle, Scale, AlertTriangle, RefreshCcw, Info, Zap } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-[2.5rem] bg-emerald-500/10 border border-emerald-500/20 text-center animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
        </div>
        <h3 className="text-2xl font-black text-white mb-2">Message Sent Successfully!</h3>
        <p className="text-emerald-400/80 text-sm max-w-md mx-auto leading-relaxed">
          Thank you for reaching out, {name}. We have received your message and will get back to you within 24 to 48 hours.
        </p>
        <button 
          onClick={() => {
            setSubmitted(false);
            setName('');
            setEmail('');
            setMessage('');
          }} 
          className="mt-8 px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-widest transition-all"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mt-8 p-8 bg-white/5 border border-white/10 rounded-[2.5rem]">
      <h3 className="text-xl font-black text-white mb-4">Send Us a Secure Message</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-white/40">Your Name</label>
          <input 
            type="text" 
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 outline-none focus:border-blue-500 text-white transition-all text-sm placeholder:text-white/20"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-white/40">Email Address</label>
          <input 
            type="email" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 outline-none focus:border-blue-500 text-white transition-all text-sm placeholder:text-white/20"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-xs font-black uppercase tracking-widest text-white/40">Message</label>
        <textarea 
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="How can we help you? Or suggest a new AI tool..."
          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 outline-none focus:border-blue-500 text-white transition-all text-sm placeholder:text-white/20 resize-none"
        />
      </div>
      <button 
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-xl hover:shadow-blue-500/10 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending Message...
          </span>
        ) : (
          <span>Send Secure Message</span>
        )}
      </button>
    </form>
  );
};

const PAGES: Record<string, { title: string; icon: any; content: React.ReactNode }> = {
  'about': {
    title: 'About Us',
    icon: Info,
    content: (
      <div className="space-y-6 text-white/60 leading-relaxed">
        <p>
          BDchatGPT was founded with a single, clear objective: to democratize access to advanced, high-performance digital utilities and developer tools without compromising user privacy. The concept was born when our team of developers grew increasingly frustrated by the current state of online utility portals. Most platforms were cluttered with intrusive interstitial advertisements, forced multi-step user sign-ups, and worst of all, required users to upload their sensitive files and private text to distant servers just to perform basic tasks like JSON formatting, SQL prettifying, or calculating BMI.
        </p>
        <p>
          We asked ourselves: why should a developer have to risk exposing client data or proprietary code, and why should everyday users have to sign up and give away their email addresses just to use a word counter or calculate interest?
        </p>
        <p>
          Thus, BDchatGPT was created. Our platform serves as a modern, world-class tool hub offering over 100+ high-quality utilities completely free of charge. Our mission is built on three core pillars: absolute accessibility, blinding speed, and an uncompromising, privacy-first architecture.
        </p>
        <h3 className="text-xl font-bold text-white mt-8 mb-4">What Makes BDchatGPT Different?</h3>
        <p>
          What makes BDchatGPT fundamentally different from traditional utility websites is our client-side execution paradigm. When you use any tool on our platform, the computational logic runs entirely inside your web browser. Whether you are validating massive JSON structures, converting image formats, or parsing logs, no data is ever uploaded, stored, or processed on our backend servers. This provides an ironclad guarantee of confidentiality and data security, making our site perfectly safe for professional and enterprise use.
        </p>
        <p>
          To keep this vast library of tools free for everyone without sacrificing privacy, we partner with reputable ad networks like Google AdSense to display non-intrusive, secure advertisements. We do not sell user data, because we do not collect it in the first place. BDchatGPT is designed to be your trusted, lightning-fast digital workspace where tools work instantly, safely, and without any barriers.
        </p>
      </div>
    )
  },
  'privacy': {
    title: 'Privacy Policy',
    icon: Shield,
    content: (
      <div className="space-y-6 text-white/60 leading-relaxed">
        <p>
          At BDchatGPT, accessible from bdchatgpt.pro.bd, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by BDchatGPT and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
        </p>
        
        <h3 className="text-xl font-bold text-white mt-8 mb-4">1. Client-Side Execution & Data Processing</h3>
        <p>
          The core architectural principle of BDchatGPT is local, client-side processing. Unlike traditional utility portals, <strong>all tools, calculators, formatters, and generators on our platform run entirely within your own web browser</strong>. No files, text, logs, code, or personal data you input into our tools are ever uploaded to our servers, stored, or processed by our backend systems. Your data remains on your physical device at all times. Since we do not transmit or store your processed data, there is zero risk of data exposure, leakage, or server-side compromise. This makes BDchatGPT fully compliant with strict corporate privacy standards.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">2. Information We Collect</h3>
        <p>
          Because our tools run client-side, BDchatGPT does not require user registration, account creation, or sign-ups. We do not collect or request personal identifying information to use our services. We may gather non-identifiable usage stats and log files for operational optimization. This standard information includes IP addresses, browser type, Internet Service Provider (ISP), date/time stamps, referring/exit pages, and number of clicks. These logs are not linked to any information that is personally identifiable.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">3. Cookies and Local Storage</h3>
        <p>
          BDchatGPT uses "Cookies" and "Local Storage" (such as localStorage) to enhance your user experience. Cookies and Local Storage are used to store visitors' preferences, such as your customized layout options, favorite tools list, or tool history (e.g., recent calculations). This data is stored strictly on your local device and is never synchronized to our servers or shared with any third party. You can choose to disable cookies or clear local storage through your individual browser options.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">4. Third-Party Services & Google DoubleClick DART Cookie</h3>
        <p>
          We use third-party vendors, including Google, to serve advertisements on our site. These vendors use cookies, including the DART cookie, to serve ads to our site visitors based upon their visit to bdchatgpt.pro.bd and other sites on the internet. Visitors may choose to decline the use of the DART cookie by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://policies.google.com/technologies/ads</a>.
        </p>
        <p>
          Please note that third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on BDchatGPT, which are sent directly to users' browsers. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit. Note that BDchatGPT has no access to or control over these cookies that are used by third-party advertisers.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">5. Third-Party Privacy Policies</h3>
        <p>
          BDchatGPT's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">6. User Rights & Data Retention</h3>
        <p>
          Under privacy regulations like GDPR and CCPA, users have specific rights regarding their personal data. However, because BDchatGPT operates entirely client-side, we do not retain or store any of your private tool data or personal documents on our systems. Since there is no data stored, there is no data to delete, modify, or export. Any configurations or history stored on your device's Local Storage can be deleted instantly by clearing your browser cache or using our built-in profile reset tools.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">7. Privacy Inquiries</h3>
        <p>
          If you have any questions, concerns, or inquiries regarding our privacy practices, please contact our designated privacy officer at <a href="mailto:support@bdchatgpt.com" className="text-blue-400 hover:underline">support@bdchatgpt.com</a>.
        </p>
      </div>
    )
  },
  'terms': {
    title: 'Terms of Service',
    icon: Scale,
    content: (
      <div className="space-y-6 text-white/60 leading-relaxed">
        <p>
          Welcome to BDchatGPT. Please read these Terms of Service carefully before using our platform.
        </p>
        
        <h3 className="text-xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h3>
        <p>
          By accessing or using the website bdchatgpt.pro.bd and our suite of free online utilities, you agree to be bound by these Terms of Service. Because BDchatGPT is a completely open platform that does not require registration, sign-ups, or user account creation, your continued access and use of our tools constitute your legally binding agreement to these terms. If you do not agree with any part of these terms, you are prohibited from using our services.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">2. User Conduct & Prohibited Activities</h3>
        <p>
          You agree to use BDchatGPT and its tools only for lawful, ethical, and professional purposes. You are strictly prohibited from:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Engaging in automated data scraping, harvesting, extraction, or systematic crawling of our web pages, tool codes, or content without our express written permission.</li>
          <li>Attempting to disrupt, disable, overburden, or impair the security, integrity, or proper functioning of our servers, hosting systems, or local client-side scripts.</li>
          <li>Using our utilities to generate, format, convert, or distribute malicious software, spam, defamatory materials, or any content that violates third-party intellectual property or local laws.</li>
          <li>Reverse engineering or attempting to extract the underlying proprietary source code of our platform's interface and proprietary algorithms.</li>
        </ul>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">3. Intellectual Property Rights</h3>
        <p>
          The visual design, brand identity, layout, logos, CSS configurations, user interface elements, and custom proprietary tool logic of BDchatGPT are the sole property of our platform and are protected by international copyright and trademark laws.
        </p>
        <p>
          However, we claim absolutely no ownership rights over any data, text, files, configurations, or outputs that you generate or process using our tools. Any formatted JSON, calculated results, converted media, or document files generated through our client-side scripts belong entirely to you, the user, and you are free to use them for any commercial or non-commercial purposes.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">4. Local Processing & Service Availability</h3>
        <p>
          BDchatGPT operates under a local, browser-based execution paradigm. This means the computational workload for our tools is processed directly by your physical device. While we make every reasonable effort to ensure that our tools are optimized, secure, and available 24/7, our services are provided on an "as is" and "as available" basis. We offer no warranties, express or implied, regarding constant availability, perfect accuracy of local computations, or bug-free performance. We are not responsible for any local browser crashes, device freezes, or data lost during your use of our tools.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">5. Third-Party Advertisements</h3>
        <p>
          BDchatGPT is a completely free resource funded through third-party advertisements (such as Google AdSense). By using our site, you acknowledge and agree that we may display advertisements provided by our advertising partners. Your interaction with any third-party advertisement, and any terms, conditions, or representations associated with such interactions, are solely between you and the respective advertiser. We do not endorse, nor are we responsible for, the content, products, or privacy practices of our advertisers.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">6. Modifications to Service and Terms</h3>
        <p>
          We reserve the right, at our sole discretion, to modify, update, replace, or discontinue any individual tool, category, or portion of our service at any time without prior notice or liability. We may also revise these Terms of Service to reflect changes in regulatory compliance, technological advances, or platform expansions. Your continued use of the site following any updates constitutes acceptance of the modified Terms of Service.
        </p>
      </div>
    )
  },
  'disclaimer': {
    title: 'Disclaimer',
    icon: AlertTriangle,
    content: (
      <div className="space-y-6 text-white/60 leading-relaxed">
        <p>
          The information and utilities provided on BDchatGPT (accessible at bdchatgpt.pro.bd) are for general informational, educational, and convenience purposes only. While we make every effort to ensure the accuracy, reliability, and functionality of all our 100+ client-side tools, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, suitability, availability, or reliability of the tools, outputs, or calculations contained on this website for any purpose.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">1. Not Professional Advice</h3>
        <p>
          The outputs generated by our calculators, converters, formatting tools, and financial/health utilities (including, but not limited to, the BMI Calculator, Loan Estimator, or Tax Calculators) are estimations and simulations. They should not be construed as, or substituted for, professional medical, financial, investment, legal, architectural, or technical advice. Users must consult with qualified professionals prior to making any significant health, financial, or legal decisions. Relying on the outputs of these automated client-side scripts is strictly at your own risk.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">2. Limitation of Liability</h3>
        <p>
          In no event will BDchatGPT, its developers, partners, or affiliates be liable for any loss, damage, or consequence, including without limitation, indirect or consequential loss or damage, arising out of, or in connection with, the use of this website. This includes, but is not limited to, data loss, business interruption, financial loss, or personal injury resulting from relying on the correctness or continuous operational availability of our tools.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">3. External Links Disclaimer</h3>
        <p>
          BDchatGPT may contain links to external websites, services, or resources that are not owned, operated, or controlled by our team. Please be aware that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these third-party websites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them. We recommend reviewing the terms and privacy policies of any third-party websites you visit.
        </p>
        <p>
          By using BDchatGPT, you acknowledge and agree to this disclaimer and use all utilities at your own risk.
        </p>
      </div>
    )
  },
  'dmca': {
    title: 'DMCA Notice',
    icon: Shield,
    content: (
      <div className="space-y-6 text-white/60 leading-relaxed">
        <p>
          BDchatGPT (accessible at bdchatgpt.pro.bd) respects the intellectual property rights of others and expects its users to do the same. In accordance with the Digital Millennium Copyright Act (DMCA), we will respond expeditiously to clear, valid notices of alleged copyright infringement.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">1. Notice of Copyright Infringement</h3>
        <p>
          If you are a copyright owner or an authorized agent and believe that any content, tool, or material hosted on our platform infringes upon your copyright, you may submit a formal written Takedown Request. To file a valid notice, you must provide our Designated Copyright Agent with the following information in writing:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>A physical or electronic signature of a person authorized to act on behalf of the owner of the exclusive right that is allegedly infringed.</li>
          <li>Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works at a single online site are covered by a single notification, a representative list of such works.</li>
          <li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit us to locate the material (the specific URL).</li>
          <li>Information reasonably sufficient to permit us to contact you, such as an address, telephone number, and email address.</li>
          <li>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
          <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of the exclusive right that is allegedly infringed.</li>
        </ul>
        <p>
          Please send all DMCA takedown notices to our Designated Copyright Agent at: <a href="mailto:support@bdchatgpt.com" className="text-blue-400 hover:underline">support@bdchatgpt.com</a>.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">2. Counter-Notification Process</h3>
        <p>
          If you believe that your content or tool was removed or disabled by mistake or misidentification, you may submit a written Counter-Notification to our agent. Your counter-notice must include your name, contact details, identification of the material removed, a statement under penalty of perjury that you believe the removal was a mistake, and your consent to federal court jurisdiction.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">3. Repeat Infringer Policy</h3>
        <p>
          Since BDchatGPT is a client-side platform and does not support user accounts or persistent content hosting by users, we do not have individual user accounts to terminate. However, we reserve the right to block access or restrict access to our platform for any repeat infringers, crawlers, or malicious scrapers.
        </p>
      </div>
    )
  },
  'contact': {
    title: 'Contact Us',
    icon: Mail,
    content: (
      <div className="space-y-8">
        <p className="text-white/60 leading-relaxed text-lg">
          At BDchatGPT, we are committed to providing an exceptional and seamless experience for all our users. We firmly believe that the key to building a truly world-class tool hub is continuous communication, transparent feedback, and a highly responsive support structure. Whether you are a professional software engineer suggesting a niche utility, a content creator who encountered an edge-case bug, or a business partner looking to explore advertising opportunities, we are eager to hear from you. Your feedback is the catalyst for our constant development and optimization of over 100+ free digital tools.
        </p>
        <p className="text-white/60 leading-relaxed">
          We pride ourselves on our responsiveness and attention to detail. Our dedicated support team and lead developers actively review all incoming inquiries to ensure that every question is resolved. For standard queries, feature requests, and general feedback, you can expect a comprehensive and helpful response from our team within 24 to 48 hours. If you are reporting a critical technical bug, a potential security vulnerability, or an intellectual property concern, your email will be automatically escalated to our engineering staff for immediate priority review.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-white/20 transition-all">
            <h4 className="font-bold text-white mb-2 text-lg">Customer Support</h4>
            <p className="text-white/40 text-sm mb-4">For general inquiries, assistance, and feedback on existing utilities.</p>
            <a href="mailto:support@bdchatgpt.com" className="text-blue-400 font-bold hover:underline flex items-center gap-2">
              <Mail className="w-4 h-4" /> support@bdchatgpt.com
            </a>
          </div>
          <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-white/20 transition-all">
            <h4 className="font-bold text-white mb-2 text-lg">Developer Relations</h4>
            <p className="text-white/40 text-sm mb-4">For technical bug reports, API questions, and system suggestions.</p>
            <a href="mailto:dev@bdchatgpt.com" className="text-blue-400 font-bold hover:underline flex items-center gap-2">
              <Mail className="w-4 h-4" /> dev@bdchatgpt.com
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    )
  }
};

export const Legal: React.FC = () => {
  const { page } = useParams();
  const data = PAGES[page || 'about'] || PAGES['about'];
  const Icon = data.icon;

  return (
    <div className="bg-[#020617] min-h-screen text-white pt-24 pb-32">
      <Helmet>
        <title>{data.title} | BDchatGPT</title>
      </Helmet>

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-16"
        >
          <div className="w-20 h-20 rounded-[2rem] bg-blue-500/20 flex items-center justify-center text-blue-400 mb-8">
            <Icon className="w-10 h-10" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-12">
            {data.title}
          </h1>

          <div className="prose prose-invert prose-blue max-w-none">
            {data.content}
          </div>

          <div className="mt-16 pt-12 border-t border-white/5 flex flex-wrap gap-4 text-xs font-black uppercase tracking-widest text-white/20">
            <Link to="/legal/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/legal/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/legal/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/legal/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            <Link to="/legal/dmca" className="hover:text-white transition-colors">DMCA</Link>
            <Link to="/legal/contact" className="hover:text-white transition-colors">Contact</Link>
            <div className="ml-auto flex items-center gap-2">
              <Zap className="w-4 h-4 fill-current" /> BDchatGPT v2.4.0
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
