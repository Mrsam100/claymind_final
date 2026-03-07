import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../styles/landing.css";
import Navbar from "../components/sections/navbar";
import Footer from "../components/sections/footer";

export default function PrivacyPolicyPage() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Newsreader:ital,opsz,wght@0,6..72,400;1,6..72,400&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    window.scrollTo(0, 0);
    return () => { document.head.removeChild(link); };
  }, []);

  return (
    <div className="landing-page flex flex-col min-h-screen bg-[#F1EEE9]">
      <Navbar />
      <main className="flex-grow container mx-auto px-6 py-16 max-w-4xl">
        <Link to="/" className="inline-block mb-8 font-bold text-black/60 hover:text-black transition-colors">&larr; Back to Home</Link>

        <h1 className="text-5xl md:text-6xl font-display font-black mb-4 uppercase tracking-tighter text-black">Privacy Policy</h1>
        <p className="text-black/50 font-ui-mono mb-12">Last updated: March 8, 2026</p>

        <div className="space-y-10 text-black/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-black uppercase mb-3 text-black">1. Introduction</h2>
            <p>ClayMind ("we," "our," or "us") is committed to protecting the privacy of children and families who use our AI learning platform. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you or your child uses ClayMind.</p>
            <p className="mt-2">We comply with the Children's Online Privacy Protection Act (COPPA) and other applicable child privacy laws. We do not knowingly collect personal information from children under 13 without verifiable parental consent.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-3 text-black">2. Information We Collect</h2>
            <p className="font-semibold mt-2">Account Information:</p>
            <ul className="list-disc pl-6 space-y-1 mt-1">
              <li>First name and age (for student accounts)</li>
              <li>Parent/guardian email address</li>
              <li>Login credentials (email and encrypted password)</li>
            </ul>
            <p className="font-semibold mt-4">Learning Data:</p>
            <ul className="list-disc pl-6 space-y-1 mt-1">
              <li>Module and lesson progress</li>
              <li>Quiz scores and achievements</li>
              <li>AI Lab creations and prompts</li>
              <li>Time spent on activities</li>
            </ul>
            <p className="font-semibold mt-4">Technical Data:</p>
            <ul className="list-disc pl-6 space-y-1 mt-1">
              <li>Device type and browser information</li>
              <li>IP address (anonymized)</li>
              <li>Usage analytics (aggregated, non-identifying)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-3 text-black">3. How We Use Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and personalize the learning experience</li>
              <li>To track progress and award achievements</li>
              <li>To communicate with parents/guardians about their child's progress</li>
              <li>To improve our platform and educational content</li>
              <li>To ensure safety and enforce our community guidelines</li>
            </ul>
            <p className="mt-3">We <strong>never</strong> use children's data for advertising, profiling, or selling to third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-3 text-black">4. Data Sharing</h2>
            <p>We do not sell, rent, or trade personal information. We may share data only with:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>Service Providers:</strong> Trusted partners who help us operate the platform (e.g., hosting, authentication) under strict data protection agreements</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect safety</li>
              <li><strong>Parents/Guardians:</strong> Parents can access and review their child's information at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-3 text-black">5. Data Security</h2>
            <p>We implement industry-standard security measures including:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Encryption of data in transit (TLS/SSL) and at rest</li>
              <li>Secure authentication with hashed passwords</li>
              <li>Row-level security on all database tables</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Role-based access controls for all platform features</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-3 text-black">6. Parental Rights</h2>
            <p>Parents and guardians have the right to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Review their child's personal information</li>
              <li>Request deletion of their child's data</li>
              <li>Refuse further collection of their child's information</li>
              <li>Receive a copy of their child's data in a portable format</li>
            </ul>
            <p className="mt-2">To exercise these rights, contact us at <strong>privacy@claymind.com</strong>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-3 text-black">7. Data Retention</h2>
            <p>We retain account data for as long as the account is active. When an account is deleted, we remove all personal information within 30 days. Anonymized, aggregated learning data may be retained for research and platform improvement.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-3 text-black">8. Cookies</h2>
            <p>We use essential cookies only for authentication and session management. We do not use tracking cookies, advertising cookies, or third-party analytics that identify individual users.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-3 text-black">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify parents/guardians of any material changes via email before they take effect. Continued use of the platform after changes constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-3 text-black">10. Contact Us</h2>
            <p>If you have questions about this Privacy Policy or our data practices:</p>
            <p className="mt-2"><strong>Email:</strong> privacy@claymind.com</p>
            <p><strong>Address:</strong> ClayMind Inc., Privacy Team</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
