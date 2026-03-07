import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../styles/landing.css";
import Navbar from "../components/sections/navbar";
import Footer from "../components/sections/footer";

export default function TermsOfServicePage() {
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

        <h1 className="text-5xl md:text-6xl font-display font-black mb-4 uppercase tracking-tighter text-black">Terms of Service</h1>
        <p className="text-black/50 font-ui-mono mb-12">Last updated: March 8, 2026</p>

        <div className="space-y-10 text-black/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-black uppercase mb-3 text-black">1. Acceptance of Terms</h2>
            <p>By creating an account or using ClayMind ("the Platform"), you agree to these Terms of Service. If you are a parent or guardian creating an account for a child under 18, you agree to these terms on behalf of your child and accept responsibility for their use of the Platform.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-3 text-black">2. Eligibility</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>ClayMind is designed for learners ages 6-18</li>
              <li>Children under 13 require verifiable parental consent to create an account</li>
              <li>Parent/guardian accounts must be created by individuals 18 years or older</li>
              <li>Teacher accounts require verification of educational credentials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-3 text-black">3. Account Responsibilities</h2>
            <p>You are responsible for:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activity that occurs under your account</li>
              <li>Providing accurate and current account information</li>
              <li>Notifying us immediately of any unauthorized access</li>
            </ul>
            <p className="mt-3">Parents/guardians are responsible for monitoring and supervising their child's use of the Platform.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-3 text-black">4. Acceptable Use</h2>
            <p>When using ClayMind, you agree <strong>not</strong> to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Use the Platform for any unlawful purpose</li>
              <li>Share inappropriate, harmful, or offensive content</li>
              <li>Attempt to bypass safety filters or content moderation</li>
              <li>Misuse the AI Lab to generate harmful, deceptive, or inappropriate content</li>
              <li>Interfere with the Platform's operation or other users' experience</li>
              <li>Share your account with others or create multiple accounts</li>
              <li>Scrape, copy, or redistribute Platform content without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-3 text-black">5. AI Lab & Generated Content</h2>
            <p>The AI Lab feature allows users to generate content using AI models. By using this feature:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>You understand that AI-generated content may not always be accurate</li>
              <li>You agree to use the AI Lab for educational purposes only</li>
              <li>Content generated through the AI Lab is subject to our safety filters</li>
              <li>We reserve the right to review and moderate generated content</li>
              <li>You retain ownership of your original prompts; generated outputs are licensed for personal, educational use</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-3 text-black">6. Intellectual Property</h2>
            <p>All ClayMind content, including lessons, modules, graphics, UI design, and code, is owned by ClayMind Inc. and protected by intellectual property laws. Users are granted a limited, non-exclusive, non-transferable license to access and use the Platform for personal, educational purposes.</p>
            <p className="mt-2">Projects and creations made by users within the Platform belong to the user, subject to the license granted above for platform operation.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-3 text-black">7. Subscriptions & Payments</h2>
            <p>ClayMind may offer free and paid tiers. For paid subscriptions:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Payments are processed securely through third-party providers</li>
              <li>Subscriptions auto-renew unless cancelled before the renewal date</li>
              <li>Refunds are available within 14 days of purchase if no significant usage has occurred</li>
              <li>We reserve the right to change pricing with 30 days' notice</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-3 text-black">8. Termination</h2>
            <p>We may suspend or terminate accounts that violate these terms. Users may delete their account at any time through the settings page or by contacting support. Upon termination:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Access to the Platform will be revoked</li>
              <li>Personal data will be deleted within 30 days per our Privacy Policy</li>
              <li>Any active subscriptions will be cancelled</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-3 text-black">9. Disclaimers</h2>
            <p>ClayMind is provided "as is" without warranties of any kind. While we strive for accuracy in our educational content:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>We do not guarantee uninterrupted or error-free service</li>
              <li>AI-generated content is for educational purposes and should not be relied upon as professional advice</li>
              <li>We are not responsible for content created by users through the AI Lab</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-3 text-black">10. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, ClayMind Inc. shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Platform. Our total liability shall not exceed the amount paid by you in the 12 months preceding the claim.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-3 text-black">11. Changes to Terms</h2>
            <p>We may update these Terms of Service from time to time. Material changes will be communicated via email or a prominent notice on the Platform at least 30 days before taking effect.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-3 text-black">12. Contact</h2>
            <p>For questions about these Terms of Service:</p>
            <p className="mt-2"><strong>Email:</strong> legal@claymind.com</p>
            <p><strong>Address:</strong> ClayMind Inc., Legal Team</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
