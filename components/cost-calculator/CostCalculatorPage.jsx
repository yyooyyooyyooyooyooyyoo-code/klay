
import React, { useState } from "react";
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
  const [step, setStep] = useState(1);
  const [license, setLicense] = useState("regular");
  const [duration, setDuration] = useState("oneYear");
  const [activities, setActivities] = useState([]);
  const [shareholders, setShareholders] = useState(1);
  const [visas, setVisas] = useState(0);
  const [employmentVisas, setEmploymentVisas] = useState(false);
  const [dependentVisas, setDependentVisas] = useState(false);
  const [office, setOffice] = useState("none");
  const [addons, setAddons] = useState("none");
  const [openFaq, setOpenFaq] = useState(0);

  const scrollToCalculator = () => {
    document.getElementById("calculator")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const scrollToQuote = () => {
    document.getElementById("quote-form")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const toggleActivity = (activity) => {
    setActivities((prev) =>
      prev.includes(activity)
        ? prev.filter((item) => item !== activity)
        : [...prev, activity]
    );
  };

  return (
    <div className="cost-page">

      {/* NAVIGATION */}
      <nav className="cost-navbar">
        <a href="/" className="cost-logo">Business Setup in UAE</a>

        <div className="cost-nav-links">
          <a href="/">Home</a>
          <a href="#calculator">Cost Calculator</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#faq">FAQs</a>
        </div>

        <button className="nav-cta" onClick={scrollToCalculator}>
          Free Cost Calculator
        </button>
      </nav>

      {/* HERO */}
      <section className="cost-hero">
        <div className="hero-overlay">
          <div className="cost-container">

            <div className="hero-heading">
              <span className="eyebrow">DUBAI BUSINESS SETUP</span>
              <h1>Calculate Your Dubai<br />Trade License Cost Now</h1>
              <PaymentBadges />
              <p>
                Configure your business setup and review the cost categories
                that need confirmation. No unverified package prices are shown.
              </p>

              <div className="hero-benefits">
                <span>✦ Setup Planning</span>
                <span>▤ Itemised Cost Categories</span>
                <span>✓ Business Setup Guidance</span>
              </div>
            </div>

            {/* CALCULATOR */}
            <div className="calculator-layout" id="calculator">

              <div className="calculator-card">
                <h2>Configure Your Business Setup</h2>

                <div className="step-indicator">
                  {["Licence", "Visas & Office", "Add-ons", "Estimate"].map(
                    (item, index) => (
                      <button
                        key={item}
                        className={step === index + 1 ? "active" : ""}
                        onClick={() => setStep(index + 1)}
                      >
                        <span>{index + 1}</span>{item}
                      </button>
                    )
                  )}
                </div>

                {step === 1 && (
                  <div className="calculator-fields">
                    <label>
                      Licence Type *
                      <select value={license} onChange={(e) => setLicense(e.target.value)}>
                        <option value="regular">Regular Licence</option>
                        <option value="flexi">Flexi Licence</option>
                      </select>
                    </label>

                    <label>
                      Licence Duration *
                      <select value={duration} onChange={(e) => setDuration(e.target.value)}>
                        <option value="oneYear">1 Year</option>
                        <option value="twoYears">2 Years</option>
                        <option value="threeYears">3 Years</option>
                      </select>
                    </label>

                    <div className="full-field" role="group" aria-labelledby="business-activities-label">
                      <span className="field-title" id="business-activities-label">Business Activities *</span>
                      <div className="activity-options">
                        {["Consultancy", "Trading", "E-commerce", "Technology", "Marketing", "Services"].map(
                          (activity) => (
                            <button
                              type="button"
                              key={activity}
                              className={activities.includes(activity) ? "selected" : ""}
                              aria-pressed={activities.includes(activity)}
                              onClick={() => toggleActivity(activity)}
                            >
                              {activities.includes(activity) ? "✓ " : "+ "}
                              {activity}
                            </button>
                          )
                        )}
                      </div>
                    </div>

                    <div>
                      <span className="field-title">Number of Shareholders</span>
                      <div className="number-control">
                        <button type="button" aria-label="Decrease shareholders" onClick={() => setShareholders(Math.max(1, shareholders - 1))}>−</button>
                        <strong>{shareholders}</strong>
                        <button type="button" aria-label="Increase shareholders" onClick={() => setShareholders(shareholders + 1)}>+</button>
                      </div>
                    </div>

                    <label>
                      Office / Desk Requirement
                      <select value={office} onChange={(e) => setOffice(e.target.value)}>
                        <option value="none">Select an option</option>
                        <option value="flexi">Flexi Desk</option>
                        <option value="office">Physical Office</option>
                      </select>
                    </label>
                  </div>
                )}

                {step === 2 && (
                  <div className="calculator-fields">
                    <div>
                      <span className="field-title">Investor Visas</span>
                      <div className="number-control">
                        <button type="button" aria-label="Decrease investor visas" onClick={() => setVisas(Math.max(0, visas - 1))}>−</button>
                        <strong>{visas}</strong>
                        <button type="button" aria-label="Increase investor visas" onClick={() => setVisas(visas + 1)}>+</button>
                      </div>
                    </div>

                    <label>
                      Employment Visas
                      <select
                        value={employmentVisas ? "required" : "none"}
                        onChange={(event) => setEmploymentVisas(event.target.value === "required")}
                      >
                        <option value="none">Not selected</option>
                        <option value="required">Required</option>
                      </select>
                    </label>

                    <label>
                      Dependent Visas
                      <select
                        value={dependentVisas ? "required" : "none"}
                        onChange={(event) => setDependentVisas(event.target.value === "required")}
                      >
                        <option value="none">Not selected</option>
                        <option value="required">Required</option>
                      </select>
                    </label>
                  </div>
                )}

                {step === 3 && (
                  <div className="calculator-fields">
                    <label className="full-field">
                      Additional Services
                      <select value={addons} onChange={(e) => setAddons(e.target.value)}>
                        <option value="none">No additional services</option>
                        <option value="support">Additional setup support</option>
                      </select>
                    </label>
                    <p className="field-note">
                      Additional government approvals and third-party charges
                      should be confirmed separately.
                    </p>
                  </div>
                )}

                {step === 4 && (
                  <div className="calculator-review">
                    <h3>Review Your Business Setup</h3>
                    <p>Licence: {license}</p>
                    <p>Duration: {duration}</p>
                    <p>Activities: {activities.join(", ") || "Not selected"}</p>
                    <p>Shareholders: {shareholders}</p>
                    <p>Investor visas: {visas}</p>
                    <p>Employment visas: {employmentVisas ? "Required" : "Not selected"}</p>
                    <p>Dependent visas: {dependentVisas ? "Required" : "Not selected"}</p>
                    <p>Office: {office}</p>
                    <p>Additional services: {addons}</p>
                  </div>
                )}

                <div className="calculator-actions">
                  {step > 1 && (
                    <button className="back-btn" onClick={() => setStep(step - 1)}>
                      Back
                    </button>
                  )}

                  {step < 4 ? (
                    <button className="primary-btn next-btn" onClick={() => setStep(step + 1)}>
                      Next: {step === 1 ? "Visas & Office" : step === 2 ? "Add-ons" : "Estimate"} →
                    </button>
                  ) : (
                    <button className="primary-btn next-btn" onClick={scrollToQuote}>
                      Request a Verified Quote →
                    </button>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section className="quote-section" id="quote-form">
        <div className="cost-container quote-grid">
          <div>
            <span className="eyebrow">NEXT STEP</span>
            <h2>Get Your Personalised Setup Quote</h2>
            <p>Share your details so your requirements can be reviewed.</p>
          </div>

          <div className="quote-form">
            <p>
              The calculator does not collect or transmit your personal details.
              Contact our team to confirm your configuration and receive a verified quote.
            </p>
            <a className="primary-btn" href="/contact-us/#contact-form">
              Contact the Klay team <span>→</span>
            </a>
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

      {/* FOOTER */}
      <footer className="cost-footer">
        <div className="cost-container footer-content">
          <a href="/">Business Setup in UAE</a>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
