import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../styles/landing.css";
import Navbar from "../components/sections/navbar";
import Footer from "../components/sections/footer";

export default function SafetyPolicyPage() {
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

        <h1 className="text-5xl md:text-6xl font-display font-black mb-4 uppercase tracking-tighter text-black">Safety Policy</h1>
        <p className="text-black/50 font-ui-mono mb-12">Last updated: March 8, 2026</p>

        <div className="space-y-10 text-black/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-black uppercase mb-3 text-black">Our Commitment</h2>
            <p>At ClayMind, child safety is our highest priority. We have built every feature of our platform with the safety and wellbeing of young learners in mind. This policy outlines the measures we take to create a secure, positive learning environment.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-3 text-black">1. Content Safety</h2>
            <p className="font-semibold">AI Content Filtering</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>All AI-generated content passes through multiple safety filters before being shown to users</li>
              <li>Prompts are screened for inappropriate, harmful, or age-inappropriate requests</li>
              <li>Generated outputs are validated against our content safety guidelines</li>
              <li>Content that doesn't meet our standards is blocked and not displayed</li>
            </ul>
            <p className="font-semibold mt-4">Educational Content Review</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>All lessons and modules are reviewed by educators and child safety experts</li>
              <li>Content is age-appropriate and aligned with educational standards</li>
              <li>Regular audits ensure content remains accurate and safe</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-3 text-black">2. Account Safety</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Parental Consent:</strong> Children under 13 cannot create accounts without parental verification</li>
              <li><strong>Secure Authentication:</strong> All passwords are securely hashed; we support Google OAuth for convenient, secure sign-in</li>
              <li><strong>Email Verification:</strong> All accounts require email verification before full access is granted</li>
              <li><strong>Role-Based Access:</strong> Students, parents, and teachers have different permissions appropriate to their role</li>
              <li><strong>Session Security:</strong> Automatic session expiry and secure token management</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-3 text-black">3. Data Protection</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All data is encrypted in transit and at rest</li>
              <li>Row-level security ensures users can only access their own data</li>
              <li>We collect the minimum data necessary to provide the learning experience</li>
              <li>Children's data is never used for advertising or sold to third parties</li>
              <li>Parents can view, export, or delete their child's data at any time</li>
            </ul>
            <p className="mt-2">For full details, see our <Link to="/privacy" className="font-bold underline hover:text-black">Privacy Policy</Link>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-3 text-black">4. AI Safety Measures</h2>
            <p>Our AI Lab includes multiple layers of protection:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Input Filtering:</strong> Prompts are analyzed for harmful intent, inappropriate language, or dangerous requests before being processed</li>
              <li><strong>Output Screening:</strong> AI responses are checked for accuracy, appropriateness, and safety before display</li>
              <li><strong>Rate Limiting:</strong> Usage limits prevent misuse and ensure fair access</li>
              <li><strong>Sandboxed Execution:</strong> Generated web apps run in isolated sandboxes with restricted permissions</li>
              <li><strong>No External Connections:</strong> Generated content cannot make external network requests or access user data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-3 text-black">5. Parental Controls</h2>
            <p>Parents and guardians have access to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>A dedicated parent dashboard showing their child's activity and progress</li>
              <li>The ability to review AI Lab creations and chat history</li>
              <li>Controls to limit or restrict certain platform features</li>
              <li>Email notifications about their child's achievements and activity</li>
              <li>The ability to pause or delete their child's account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-3 text-black">6. Reporting & Support</h2>
            <p>If you encounter any safety concerns:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Use the in-app reporting feature to flag inappropriate content</li>
              <li>Contact our safety team at <strong>safety@claymind.com</strong></li>
              <li>All reports are reviewed within 24 hours</li>
              <li>We take immediate action on confirmed safety violations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-3 text-black">7. Compliance</h2>
            <p>ClayMind is designed to comply with:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>COPPA</strong> - Children's Online Privacy Protection Act</li>
              <li><strong>FERPA</strong> - Family Educational Rights and Privacy Act</li>
              <li><strong>GDPR-K</strong> - General Data Protection Regulation (children's provisions)</li>
              <li><strong>CIPA</strong> - Children's Internet Protection Act guidelines</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-3 text-black">8. Continuous Improvement</h2>
            <p>We are committed to continuously improving our safety measures. Our team regularly:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Reviews and updates safety filters based on emerging threats</li>
              <li>Conducts third-party security audits</li>
              <li>Incorporates feedback from parents, educators, and safety experts</li>
              <li>Stays current with child online safety best practices and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-3 text-black">Contact Our Safety Team</h2>
            <p>For any safety-related questions or concerns:</p>
            <p className="mt-2"><strong>Email:</strong> safety@claymind.com</p>
            <p><strong>Response Time:</strong> Within 24 hours for safety reports</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
