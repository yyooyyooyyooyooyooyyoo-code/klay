
import React, { useState } from "react";
import { FilloutStandardEmbed } from "@fillout/react";
import "./CostCalculatorPage.css";

const faqs = [
  {
    q: "What is the Meydan Free Zone cost calculator?",
    a: "It helps entrepreneurs estimate their potential Dubai company setup costs based on licence type, activities, shareholders, visas and additional services.",
  },
  {
    q: "How accurate is the trade licence cost estimate?",
    a: "No amount is shown until current prices are verified. Final fees may also depend on activity approval, immigration checks and document verification.",
  },
  {
    q: "What information do I need to calculate my setup cost?",
    a: "You will need to select your licence type, duration, business activities, number of shareholders, visa requirements and office preferences.",
  },
  {
    q: "Does the cost include visas?",
    a: "Visa charges depend on the selected package and applicable immigration requirements. Confirm current charges before proceeding.",
  },
  {
    q: "Can I compare different business activities?",
    a: "Yes. You can select your intended activities and compare different setup configurations.",
  },
  {
    q: "Does the number of shareholders affect the price?",
    a: "It may affect the overall setup cost depending on the selected company structure and applicable pricing.",
  },
  {
    q: "Can overseas investors use the calculator?",
    a: "Yes. The calculator is designed for both UAE residents and overseas entrepreneurs planning a Dubai company setup.",
  },
  {
    q: "Are additional approvals included?",
    a: "Some business activities may require additional approvals or fees. These should be confirmed before finalising your quote.",
  },
  {
    q: "Can I change my selections after calculating?",
    a: "Yes. You can change your selections and review the updated setup summary. Request a verified quote for current prices.",
  },
  {
    q: "How do I proceed after receiving my estimate?",
    a: "You can request a personalised quote and discuss your requirements with the business setup team.",
  },
];

const coverage = [
  { icon: "▣", title: "Trade licence", subtitle: "Type and duration", color: "green" },
  { icon: "▥", title: "Business activities", subtitle: "Selection", color: "orange" },
  { icon: "♙", title: "Number of", subtitle: "Shareholders", color: "purple" },
  { icon: "▤", title: "Visa allocations", subtitle: "(Investor, Employment, Dependent)", color: "blue" },
  { icon: "⚙", title: "Additional business", subtitle: "Setup services through mPlus", color: "green" },
];

function PaymentBadges() {
  return (
    <div className="payment-badges">
      <span>Pricing confirmation required</span>
      <span>Payment not enabled</span>
    </div>
  );
}

function SectionButton({ children = "Calculate Now", onClick }) {
  return (
    <button className="primary-btn" onClick={onClick}>
      {children} <span>→</span>
    </button>
  );
}

export default function CostCalculatorPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const scrollToCalculator = () => {
    document.getElementById("calculator")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="cost-page">

      {/* HERO */}
      <section className="cost-hero">
        <video
          className="cost-hero-video"
          src="/videos/KLAY-VID-compressed.mp4"
          poster="/services-dubai-sunset.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="hero-overlay">
          <div className="cost-container">
            <div className="cost-hero-grid">
              <div className="hero-heading">
                <span className="eyebrow">BUSINESS SETUP CONSULTANTS IN DUBAI</span>
                <h1>
                  Plan Your Setup,
                  <span> Understand Your Costs</span>
                </h1>
                <p>
                  Explore the options for your UAE business setup and review the
                  cost categories that need confirmation. No unverified package
                  prices are presented as quotes.
                </p>
                <div className="hero-actions">
                  <a className="hero-action-primary" href="/contact-us/">
                    Book a Consultation <span aria-hidden="true">→</span>
                  </a>
                  <a className="hero-action-secondary" href="/services/">
                    Explore Our Services
                  </a>
                </div>
                <div className="hero-benefits">
                  <span>✓ Setup planning</span>
                  <span>✓ Transparent cost categories</span>
                  <span>✓ Business setup guidance</span>
                </div>
              </div>

              <div className="calculator-layout" id="calculator">
                <div className="calculator-card">
                  <span className="eyebrow">GET YOUR ESTIMATE</span>
                  <h2>Configure Your Business Setup</h2>
                  <div className="calculator-form-embed">
                    <FilloutStandardEmbed filloutId="1nqKwwpPkQus" dynamicResize />
                  </div>
                  <p className="calculator-disclaimer">
                    Final costs depend on your selected activities, licence requirements
                    and applicable government fees.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="cost-section" id="how-it-works">
        <div className="cost-container">
          <div className="section-heading">
            <span className="eyebrow">SIMPLE PROCESS</span>
            <h2>What Happens After You Get Your Cost Estimate</h2>
            <p>Review your setup requirements and request confirmed pricing before you proceed.</p>
          </div>

          <div className="process-grid">
            {[
              ["01", "Review Your Cost Breakdown And Compare Setup Structures"],
              ["02", "Confirm Your Business Activity Eligibility And Visa Requirements"],
              ["03", "Request a verified quote and confirm your next steps"],
            ].map(([number, title]) => (
              <div className="process-card" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
              </div>
            ))}
          </div>

          <p className="center-text">
            Not ready to commit? No problem. Many founders use this estimate
            purely to compare options before making a decision.
          </p>
          <div className="center-action">
            <PaymentBadges />
            <SectionButton onClick={scrollToCalculator} />
          </div>
        </div>
      </section>

      {/* VIDEO GUIDE */}
      <section className="cost-section soft-bg">
        <div className="cost-container split-section">
          <div>
            <span className="eyebrow">VIDEO GUIDE</span>
            <h2><span className="blue-text">Video Guide:</span> How To Use Our Cost Calculator</h2>
            <p>
              Know exactly what your Dubai business setup will cost before
              you commit to anything. See how quickly you can price your
              setup, including your licence, shareholders, visas and add-ons.
            </p>
            <h4>A clear breakdown, tailored to your business, ready in minutes.</h4>
            <SectionButton onClick={scrollToCalculator}>Calculate Now</SectionButton>
          </div>
          <div className="video-placeholder">
            <div className="phone-mockup">
              <div className="phone-screen">
                <span>Cost Calculator</span>
                <div className="phone-line" />
                <div className="phone-line short" />
                <div className="phone-option">Licence Options</div>
                <div className="phone-option">Visa Allocation</div>
                <div className="phone-option">Cost Estimate</div>
              </div>
            </div>
            <span className="play-button">Calculator preview</span>
          </div>
        </div>
      </section>

      {/* COST FACTORS */}
      <section className="cost-section">
        <div className="cost-container split-section">
          <div>
            <span className="eyebrow">UNDERSTANDING YOUR COST</span>
            <h2>Why Your Trade License Cost Depends on Your Setup</h2>
            <p>No two setups are the same and neither are the costs. Your total depends on how you configure your company.</p>

            <h3>Your estimate will change based on:</h3>
            <div className="check-grid">
              {[
                "Trade licence type and duration",
                "Office or desk requirements",
                "Number and type of business activities",
                "Immigration eligibility",
                "Number of shareholders",
                "Additional approvals",
                "Visa allocations and change of status",
                "Additional support services",
              ].map((item) => <span key={item}>✓ {item}</span>)}
            </div>

            <p>
              Compare different setups to understand how each decision
              impacts your business costs before you commit.
            </p>
            <PaymentBadges />
            <SectionButton onClick={scrollToCalculator} />
          </div>

          <div className="visual-card">
            <div className="visual-circle">AED</div>
            <div className="visual-phone">
              <span>Business Setup</span>
              <h3>Cost Estimate</h3>
              <div className="phone-line" />
              <div className="phone-line" />
              <div className="phone-line short" />
            </div>
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="cost-section soft-bg">
        <div className="cost-container">
          <div className="section-heading">
            <span className="eyebrow">COST BREAKDOWN</span>
            <h2>See the Cost Categories for Your Dubai Trade Licence</h2>
            <p>Build your setup step by step and review the cost categories that need confirmation.</p>
            <PaymentBadges />
          </div>

          <div className="coverage-grid">
            {coverage.map((item) => (
              <div className="coverage-card" key={item.title}>
                <span className={`coverage-icon ${item.color}`}>{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COST INFORMATION + PAYMENT PLAN */}
      <section className="cost-section">
        <div className="cost-container">
          <div className="section-heading">
            <span className="eyebrow">COST INFORMATION</span>
            <h2>How Much Does It Cost to Get a Trade License in Dubai?</h2>
            <p>Understand the important factors before moving forward.</p>
          </div>

          <div className="info-grid">
            {[
              ["How Much Will It Actually Cost?", "Understand the factors that determine your setup cost."],
              ["What Is Included In That Cost?", "Explore the licence and additional setup components."],
              ["Will The Cost Change Later?", "Learn about approvals and final pricing confirmation."],
            ].map(([title, description]) => (
              <div className="info-card" key={title}>
                <span>◈</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href="#calculator">Learn More →</a>
              </div>
            ))}
          </div>

          <div className="payment-plan">
            <div className="bank-card-visual">BANK CARD</div>
            <div>
              <span className="eyebrow">PAYMENT OPTIONS</span>
              <h2>Payment Options for UAE-based Clients</h2>
              <p>
                Payment options can be discussed after your setup costs and
                eligibility are confirmed. Online payment is not available here.
              </p>
              <PaymentBadges />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="cost-section soft-bg" id="faq">
        <div className="cost-container faq-layout">
          <div className="faq-intro">
            <span className="eyebrow">HELP CENTRE</span>
            <h2>Common Questions Founders Ask Before Checking Trade License Costs</h2>
            <p>Find answers to common questions about your Dubai business setup estimate.</p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={faq.q}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  aria-expanded={openFaq === index}
                >
                  {faq.q}
                  <span>{openFaq === index ? "−" : "+"}</span>
                </button>
                {openFaq === index && <p>{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="cost-container">
          <span className="eyebrow">START YOUR JOURNEY</span>
          <h2>Ready to Estimate Your Dubai Business Setup Cost?</h2>
          <p>Compare your options and understand your setup requirements.</p>
          <SectionButton onClick={scrollToCalculator} />
        </div>
      </section>

    </div>
  );
}
