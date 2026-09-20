/* =============================================================================
   FORWYN ENTERPRISES — JAVASCRIPT ENGINE (script.js)
   ========================================================================== */

(function () {
  'use strict';

  // =============================================================================
  // GOOGLE SHEETS INTEGRATION CONFIGURATION
  // Replace this URL with your deployed Google Apps Script Web App URL.
  // =============================================================================
  const GOOGLE_SHEETS_ENDPOINT = "https://script.google.com/macros/s/AKfycbxUHYuenFSaLyOdm2ljtL9Symj6STsH58lsVMW8ycs8HuMU76luBFDLf707ZNIdKjDt3g/exec";

  // -----------------------------------------------------------------------------
  // 1. CENTRAL DATA LAYER (Sanity-Ready Schema Architecture)
  // -----------------------------------------------------------------------------
  const siteConfig = {
    companyName: 'FORWYN ENTERPRISES',
    shortName: 'ForWyn',
    tagline: 'Custom Software Engineering For Scalable Growth.',
    description: 'Custom software development studio specializing in custom web applications, custom ERP software, retail POS systems, Java Spring Boot engineering, and AI business automation.',
    email: 'forwynenterprises@gmail.com',
    phone: '+91 95009 11807',
    phoneHref: 'tel:+919500911807',
    whatsappNumber: '919500911807',
    whatsappMessage: 'Hi ForWyn, I\'d like to discuss a software project.',
    instagram: 'https://www.instagram.com/forwynenterprises',
    linkedin: 'https://www.linkedin.com/in/nitheesh-vellaiyan-996159256',
    youtube: '',
    ctaPrimary: 'Start Custom Build',
    ctaSecondary: 'Explore Projects',
    bookCallLabel: 'Book A Call',
    bookingUrl: '',
    copyrightYear: '2026',
  };

  const siteConfigUtl = {
    whatsappHref: 'https://wa.me/' + siteConfig.whatsappNumber +
      '?text=' + encodeURIComponent(siteConfig.whatsappMessage),
    mailtoHref: 'mailto:' + siteConfig.email,
  };

  // --- Core Capabilities Ticker Data ---
  const tickerRow1Companies = ['CUSTOM ERP', 'RETAIL POS', 'WEB APPLICATIONS', 'WORKFLOW AUTOMATION', 'REST APIS', 'SPRING BOOT', 'REACT & TS', 'INTERNAL TOOLS'];
  const tickerRow2Companies = ['SYSTEM ARCHITECTURE', 'DATABASE DESIGN', 'CLOUD DEPLOYMENT', 'CLIENT PORTALS', 'ROLE-BASED ACCESS', 'PAYOUT PIPELINES', 'INVENTORY BILLING', 'SECURE AUTH'];

  // --- Metrics Data Model ---
  const metrics = {
    projects: {
      index: '01',
      value: '50+',
      title: 'PROJECTS',
      description: 'Mission-critical architectures engineered for enterprise scale.',
      footerLabel: 'Execution Integrity',
      footerValue: '100% On-Time',
    },
    clients: {
      index: '02',
      value: '15+',
      title: 'CLIENTS & PARTNERS',
      description: 'Long-term engineering partnerships across high-throughput sectors.',
      footerLabel: 'Production Reliability',
      footerValue: '99.98% Uptime',
    },
    rating: {
      index: '03',
      value: '5.0',
      stars: 5,
      title: 'TRUST / RATING',
      description: 'Verified reliability, zero-discrepancy financial and business systems.',
      footerLabel: 'Client Satisfaction',
      footerValue: '5.0 / 5.0 Score',
    },
  };

  // --- Services Data Model ---
  const services = [
    {
      id: 'digital-products',
      index: '01',
      title: 'CUSTOM WEB APPLICATIONS',
      description: 'Custom web applications built around your business workflows — from e-commerce platforms, customer portals, and member management systems to SaaS-style dashboards, admin tools, and API-driven applications. Full-stack development using React, TypeScript, and Java Spring Boot.',
      tags: ['CUSTOM WEB APPS', 'E-COMMERCE & PORTALS', 'FULL-STACK DEVELOPMENT'],
      pillTag: 'Custom Web Apps',
      visualType: 'browser-terminal',
      accent: 'cyan',
    },
    {
      id: 'business-systems',
      index: '02',
      title: 'BUSINESS SYSTEMS & ERP SOFTWARE',
      description: 'Software your team uses internally to run the business — custom ERP systems, retail POS software, inventory and billing platforms, employee and admin tools, and role-based operational dashboards. Built specifically for your workflows, not adapted from a generic template.',
      tags: ['CUSTOM ERP SOFTWARE', 'RETAIL POS SYSTEMS', 'INTERNAL BUSINESS TOOLS'],
      pillTag: 'Business Software',
      visualType: 'radar-orbit',
      accent: 'blue',
    },
    {
      id: 'ai-automation',
      index: '03',
      title: 'AI & WORKFLOW AUTOMATION',
      description: 'Practical automation that removes repetitive manual work from business operations. We integrate AI assistants, build scheduled data pipelines, automate document processing, and connect systems via APIs — applied where automation genuinely improves efficiency.',
      tags: ['WORKFLOW AUTOMATION', 'API INTEGRATIONS', 'BUSINESS PROCESS AUTOMATION'],
      pillTag: 'AI Automation',
      visualType: 'ai-sphere',
      accent: 'cyan',
    },
    {
      id: 'digital-experiences',
      index: '04',
      title: 'HIGH-PERFORMANCE WEBSITES',
      description: 'Business websites, company websites, landing pages, and portfolio websites engineered for fast load times and a strong digital presence. Responsive, conversion-focused interfaces designed to build credibility and generate enquiries.',
      tags: ['BUSINESS WEBSITES', 'LANDING PAGES', 'RESPONSIVE INTERFACES'],
      pillTag: 'Web Experiences',
      visualType: 'gpu-aperture',
      accent: 'cyan',
    },
  ];

  // --- Projects Data Model ---
  const projects = [
    {
      id: 'charity-golf-club',
      indexBadge: 'WORK 01',
      statusBadge: 'ACTIVE BUILD // IN PRODUCTION',
      clientRegion: 'UK / Global Client',
      budgetQuotation: '₹2,00,000',
      category: 'Custom Web Application & Membership Platform',
      eyebrow: 'Work 01 • Custom Web Application & Member Portal',
      title: 'CHARITY GOLF CLUB',
      liveUrl: 'https://golfcharitysubscriptionplatform.vercel.app/', // Live external URL
      statement: 'A custom web application and member portal engineered for a UK client, combining recurring subscription billing, verified score submission workflows, automated charity splits, and prize pool distribution.',
      image: './assets/images/gcp.png',
      overview: 'Developed for an overseas sports entertainment client, Charity Golf Club is a custom web platform and member portal connecting amateur golfers with certified non-profit charities. Members subscribe through recurring billing tiers, submit verified scorecards through their private user dashboard, and participate in automated prize draws supported by custom calculation models.',
      challenge: 'The client required a fraud-resistant, responsive web application capable of managing multi-tier member subscriptions, user scorecard verification, automated fund allocation between charitable causes and prize reserves, and smooth administrative oversight.',
      approach: 'We engineered a responsive full-stack web application featuring recurring payment pipelines, member dashboard workflows, structured score verification rules, and automated prize calculations designed to operate cleanly without manual intervention.',
      solution: 'A custom digital platform built with dynamic jackpot tracking, automated multi-charity revenue splits, real-time score verification queues, role-based administrative dashboards, and structured member management tools.',
      keyFeatures: [
        'Member Subscription Management (Monthly & Annual Plans)',
        'User Account & Member Dashboard',
        'Verified Scorecard Submission Workflow',
        'Dynamic Prize Pool & Draw Tracking',
        'Automated Multi-Charity Revenue Split & Allocation',
        'Tiered Cash Prize Calculation & Rules Engine',
        'Charity Partner Directory & Impact Showcase',
        'Administrative Verification & Audit Portal'
      ],
      outcomes: 'Core membership platform, subscription billing workflows, user portal, and automated allocation logic successfully deployed to staging for active milestone delivery.',
      featured: true,
      published: true,
    },

    {
      id: 'nexa-ops',
      indexBadge: 'WORK 02',
      category: 'Custom ERP Software & Business Operations',
      eyebrow: 'Work 02 • Custom ERP Software & Operations',
      title: 'NOVA FINANCIAL ERP',
      statement: 'A custom ERP system and financial operations platform engineered for corporate ledger management, automated payroll processing, and multi-tier approval workflows.',
      image: './assets/images/PROJECT_2.png',
      overview: 'Nova Financial ERP is a centralized business management platform engineered to connect internal company workflows with banking and payout rails. The system provides finance and executive teams with real-time cash flow visibility, corporate account management, automated disbursement queues, and role-based permissions for treasury officers, accounting managers, and compliance auditors.',
      challenge: 'Growing businesses frequently manage supplier disbursements, vendor payouts, and employee payroll across fragmented banking interfaces and isolated spreadsheets. This causes reconciliation delays, audit discrepancies, and high exposure to manual entry errors.',
      approach: 'We developed a unified internal business software platform centered on strict role-based access control, structured ledger tracking, and automated payout workflows. By replacing manual spreadsheets with synchronized balance dashboards, the organization gained centralized control over operational fund flows.',
      solution: 'A centralized corporate ERP platform featuring secure authentication, dedicated entity wallets, automated payout queues, maker-checker approval chains, and immutable activity logs. Finance teams can execute bulk disbursements, track account balances, reconcile invoices, and maintain an audit-ready financial trail.',
      keyFeatures: [
        'Role-Based Access Control (Admins, Accountants, Auditors)',
        'Centralized Multi-Account Ledger & Balance Tracking',
        'Automated Bulk Payroll & Vendor Disbursement Queues',
        'Real-Time Cash Flow Dashboard & Financial Reporting',
        'Invoice Reconciliation & Payment Verification',
        'Maker-Checker Transaction Approval Workflows',
        'Audit-Ready Activity Logging & Compliance Trails',
        'Multi-Currency Settlement & Bank Transfer Integration'
      ],
      outcomes: 'Replaced manual spreadsheet reconciliation with centralized automated ledger sync, standardized maker-checker approval workflows, and established an audit-ready record for corporate disbursements.',
      featured: true,
      published: true,
    }, {
      id: 'lumina-pos',
      indexBadge: 'WORK 03',
      category: 'Retail POS & Store Management',
      eyebrow: 'Work 03 • Retail POS & Store Management',
      title: 'LUMINA RETAIL POS',
      statement: 'A production-ready retail POS and store management system built for a departmental store to streamline barcode billing, real-time inventory, supplier purchases, and bilingual daily operations.',
      image: './assets/images/Retail_pos.png',
      overview: 'Lumina Retail POS is a custom retail management and billing platform built and deployed for an active departmental store (Sri Murugan Store). The system unifies counter billing, barcode scanning, live stock management, supplier purchases, customer records, and thermal receipt printing into a practical workflow designed specifically for fast-paced store staff in both Tamil and English.',
      challenge: 'The store managed hundreds of fast-moving grocery and retail products using disconnected manual notebooks and basic calculators. Daily sales, inventory counts, stock replenishment, and customer credit tracking lacked a single source of truth, slowing counter checkout and leading to unrecorded stock discrepancies.',
      approach: 'We designed a focused desktop-friendly POS application mapped to counter checkout speeds, ensuring fast product lookup, barcode scanner compatibility, and instant payment recording (Cash and UPI). We eliminated unnecessary generic e-commerce bloat to keep the software responsive, straightforward for non-technical retail staff, and reliable under continuous store hours.',
      solution: 'A full-featured retail software suite integrating high-speed counter checkout, live inventory deduction, purchase order entry, supplier management, bilingual Tamil/English navigation, and role-separated access for store cashiers and the business owner.',
      // Renamed from techStack to keyFeatures:
      keyFeatures: [
        'High-Speed Barcode Scanning & Counter Billing',
        'Real-Time Inventory Tracking & Low-Stock Alerts',
        'Bilingual Interface (Tamil & English) for Store Staff',
        'Instant UPI QR & Cash Payment Reconciliation',
        'Supplier Purchase Orders & Goods Receipt Entry',
        'Thermal Receipt Generation & Local Printing',
        'Owner vs. Cashier Role-Based Access Control',
        'Manual Billing & Custom SKU Entry for Unlisted Goods'
      ],
      outcomes: 'Successfully deployed and operating in daily production at Sri Murugan Store, managing regular customer transactions, barcode billing, and storewide stock tracking without external software dependencies.',
      featured: true,
      published: true,
    }
  ];

  // --- Plans Data Model (Centralized Plan -> Budget Mapping) ---
  const plansData = {
    starter: {
      id: 'starter',
      name: 'Starter',
      budget: '₹20K – ₹60K',
      description: 'For businesses that need a professional online presence — business websites, company websites, landing pages, and portfolio websites. Includes responsive design, clean frontend build, and basic CMS or form integrations.',
    },
    grow: {
      id: 'grow',
      name: 'Grow',
      budget: '₹80K – ₹1.50L',
      description: 'For growing businesses that need more than a website — custom web applications, e-commerce stores, customer or member portals, user authentication, databases, admin dashboards, and business workflows.',
    },
    scale: {
      id: 'scale',
      name: 'Scale',
      budget: '₹1.60L – ₹2.50L',
      description: 'For complex business applications — custom ERP systems, retail POS software, internal operational tools, multi-role access systems, third-party integrations, and advanced backend architecture.',
    },
    custom: {
      id: 'custom',
      name: 'Custom',
      budget: '₹2.50L+',
      description: 'For projects with complex or unusual requirements. We run a discovery and scoping process, define the system architecture, plan phased delivery, and provide a detailed technical proposal and cost estimate.',
    }
  };

  // --- Reviews / Project Delivery Feedback Data Model ---
  const reviews = [
    {
      id: 'lumina-retail',
      name: 'Retail Store Operations',
      role: 'Store Operations',
      company: 'Sri Murugan Store POS',
      rating: 5,
      text: 'The in-store POS system brought barcode billing, daily inventory, and supplier purchasing into a unified bilingual workflow. Daily billing is fast and store staff operate it reliably.',
    },
    {
      id: 'golf-club-platform',
      name: 'Platform Product Lead',
      role: 'Web Platform Delivery',
      company: 'Charity Golf Club UK',
      rating: 5,
      text: 'Engineered a full-stack membership subscription platform with automated donation splits, scorecard submission workflows, and dynamic jackpot countdowns deployed to staging.',
    },
    {
      id: 'nova-erp-system',
      name: 'Corporate Systems Build',
      role: 'Operations & Treasury',
      company: 'Nova Financial ERP',
      rating: 5,
      text: 'Replaced manual spreadsheet reconciliation with centralized automated ledger sync and maker-checker authorization workflows for corporate disbursements and auditing.',
    },
  ];

  const team = [
    {
      name: 'Nitheesh V',
      role: 'Founder & System Architecture',
      bio: 'Specializes in custom software development, Java Spring Boot engineering, React TypeScript applications, and enterprise ERP architectures.',
      accent: 'cyan',
      image: './assets/images/team/Nitheesh.jpeg',
    },
    {
      name: 'Sakthi',
      role: 'Business Development Head',
      bio: 'Leads strategic partnerships, client acquisitions, and contract scoping across domestic and international accounts.',
      accent: 'cyan',
      image: './assets/images/team/Sakthi.jpeg',
    },
    {
      name: 'Mohan',
      role: 'Core Engineering & Development Head',
      bio: 'Directs full-stack implementation, Java Spring Boot backends, React TypeScript platforms, and enterprise ERP architectures.',
      accent: 'cyan',
      image: './assets/images/team/mohan.jpeg',
    },
    {
      name: 'Divya',
      role: 'Quality Assurance & Testing Head',
      bio: 'Oversees end-to-end test automation, API validation, regression testing, and production compliance standards.',
      accent: 'cyan',
      image: './assets/images/team/divya.jpeg',
    },
    {
      name: 'Dharanesh',
      role: 'DevOps & Cloud Infrastructure Head',
      bio: 'Manages CI/CD deployment pipelines, container orchestration, cloud security, and high-availability server infrastructure.',
      accent: 'cyan',
      image: './assets/images/team/dharanesh.jpeg',
    },
    {
      name: 'Lithan',
      role: 'UI/UX & Product Design Lead',
      bio: 'Crafts design systems, interactive prototypes, user journey mapping, and ergonomic product workflows across web and mobile platforms.',
      accent: 'cyan',
      image: './assets/images/team/lithen.jpeg',
    },
    {
      name: 'Gokul',
      role: 'Frontend & Web Applications Engineer',
      bio: 'Specializes in responsive frontend architecture, interactive state management, performance optimization, and modern JavaScript engines.',
      accent: 'cyan',
      image: './assets/images/team/gokul.jpeg',
    },
    {
      name: 'Raja',
      role: 'Backend & Database Systems Engineer',
      bio: 'Focuses on relational database modeling, secure API integrations, query optimization, and resilient transactional pipelines.',
      accent: 'cyan',
      image: './assets/images/team/raja.jpeg',
    },
  ];

  // -----------------------------------------------------------------------------
  // 2. PLAN SELECTION & BUDGET ENGINE
  // -----------------------------------------------------------------------------
  window.selectPlan = function (planId) {
    const key = (planId || '').toLowerCase();
    const plan = plansData[key] || plansData.custom;

    const planSelect = document.getElementById('inq-plan');
    const budgetSelect = document.getElementById('inq-budget');
    const inquirySection = document.getElementById('inquiry');

    if (planSelect) {
      planSelect.value = plan.name;
      planSelect.dispatchEvent(new Event('change', { bubbles: true }));
      planSelect.classList.add('field-highlight');
      setTimeout(() => planSelect.classList.remove('field-highlight'), 1200);
    }

    if (budgetSelect) {
      budgetSelect.value = plan.budget;
      budgetSelect.dispatchEvent(new Event('change', { bubbles: true }));
      budgetSelect.classList.add('field-highlight');
      setTimeout(() => budgetSelect.classList.remove('field-highlight'), 1200);
    }

    const selectedBadge = document.getElementById('inq-selected-badge');
    if (selectedBadge) {
      selectedBadge.textContent = `Selected: ${plan.name} Plan (${plan.budget})`;
      selectedBadge.classList.remove('hidden');
    }

    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  function initPlanSelection() {
    const planButtons = document.querySelectorAll('[data-plan-id]');
    planButtons.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const planId = this.getAttribute('data-plan-id');
        window.selectPlan(planId);
      });
    });
  }

  // -----------------------------------------------------------------------------
  // 3. CONTACT & INQUIRY FORM HANDLING
  // -----------------------------------------------------------------------------
  function hydrateContactAndFooter() {
    const { email, phoneHref, phone } = siteConfig;
    const { whatsappHref, mailtoHref } = siteConfigUtl;
    const { instagram, linkedin, youtube } = siteConfig;

    const channelEmail = document.getElementById('channel-email');
    const channelWhatsapp = document.getElementById('channel-whatsapp');
    const channelCall = document.getElementById('channel-call');
    const startProjectCta = document.getElementById('start-project-cta');

    if (channelEmail) {
      channelEmail.href = mailtoHref;
      const emailText = channelEmail.querySelector('#channel-email-text');
      if (emailText) emailText.textContent = email;
    }
    if (channelWhatsapp) channelWhatsapp.href = whatsappHref;
    if (channelCall) {
      channelCall.href = phoneHref;
      const callText = channelCall.querySelector('#channel-call-text');
      if (callText) callText.textContent = phone;
    }
    if (startProjectCta) startProjectCta.href = mailtoHref;

    const contactSocial = document.getElementById('contact-social');
    if (contactSocial) {
      contactSocial.innerHTML = '';
      const socialChannels = [];
      if (linkedin) socialChannels.push({ label: 'LinkedIn', url: linkedin, icon: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z' });
      if (instagram) socialChannels.push({ label: 'Instagram', url: instagram, icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' });
      if (youtube) socialChannels.push({ label: 'YouTube', url: youtube, icon: 'M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z' });
      socialChannels.forEach(({ label, url, icon }) => {
        const a = document.createElement('a');
        a.href = url;
        a.target = '_blank';
        a.rel = 'noopener';
        a.className = 'inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-300 transition-colors';
        a.innerHTML = `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="${icon}"/></svg><span>${label}</span>`;
        contactSocial.appendChild(a);
      });
    }

    const footerCopy = document.getElementById('footer-copy');
    if (footerCopy) footerCopy.innerHTML = `© ${new Date().getFullYear()} <span class="text-white font-medium">${siteConfig.companyName}</span>. All Rights Reserved.`;
  }

  // -----------------------------------------------------------------------------
  // 3. INQUIRY FORM SUBMISSION ENGINE (Google Sheets Web App Integration)
  // -----------------------------------------------------------------------------
  window.handleInquirySubmit = async function (event) {
    if (event && event.preventDefault) event.preventDefault();
    const form = document.getElementById('inquiry-form');
    if (!form) return false;

    const submitBtn = form.querySelector('#inq-submit-btn') || form.querySelector('button[type="submit"]');
    const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
    const btnArrow = submitBtn ? submitBtn.querySelector('.btn-arrow') : null;
    const statusContainer = document.getElementById('inq-status-message');

    if (statusContainer) {
      statusContainer.classList.add('hidden');
      statusContainer.innerHTML = '';
    }

    const name = (form.querySelector('#inq-name')?.value || '').trim();
    const email = (form.querySelector('#inq-email')?.value || '').trim();
    const company = (form.querySelector('#inq-company')?.value || '').trim();
    const phone = (form.querySelector('#inq-phone')?.value || '').trim();
    const projectType = form.querySelector('#inq-type')?.value || 'Custom Web App';
    const selectedPlan = form.querySelector('#inq-plan')?.value || 'N/A';
    const budget = form.querySelector('#inq-budget')?.value || 'N/A';
    const description = (form.querySelector('#inq-desc')?.value || '').trim();

    if (!name || !email || !description) {
      showFormError('VALIDATION_FAILED');
      return false;
    }

    // Enter Submitting State
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.classList.add('opacity-75', 'cursor-not-allowed');
    }
    if (btnText) {
      btnText.textContent = 'SENDING...';
    }
    if (btnArrow) {
      btnArrow.innerHTML = `<svg class="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>`;
    }

    const payload = {
      timestamp: new Date().toISOString(),
      name: name,
      email: email,
      phone: phone || 'N/A',
      company: company || 'N/A',
      service: projectType,
      projectType: projectType,
      selectedPlan: selectedPlan,
      budget: budget,
      message: description,
      description: description
    };

    try {
      const isPlaceholder = !GOOGLE_SHEETS_ENDPOINT ||
        GOOGLE_SHEETS_ENDPOINT.includes('PASTE_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE') ||
        GOOGLE_SHEETS_ENDPOINT.trim() === '';

      if (isPlaceholder) {
        throw new Error('CONFIG_PENDING');
      }

      const response = await fetch(GOOGLE_SHEETS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      let resData = null;
      try {
        resData = await response.json();
      } catch (parseErr) {
        if (response.ok || response.type === 'opaque') {
          resData = { result: 'success' };
        }
      }

      if (resData && (resData.result === 'success' || resData.status === 'success' || response.ok)) {
        showFormSuccess();
      } else {
        throw new Error((resData && resData.error) || 'Server returned error state');
      }
    } catch (err) {
      console.error('Inquiry Submission Error:', err);
      showFormError(err.message === 'CONFIG_PENDING' ? 'ENDPOINT_UNCONFIGURED' : 'SUBMIT_FAILED');
    }

    return false;
  };

  function showFormSuccess() {
    const form = document.getElementById('inquiry-form');
    if (!form) return;

    const phoneDisplay = siteConfig.phone || '+91 98765 43210';
    const phoneHref = siteConfig.phoneHref || 'tel:+919876543210';

    form.innerHTML = `
      <div class="py-10 px-4 text-center flex flex-col items-center justify-center gap-6 animate-fade-in">
        <div class="w-16 h-16 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.4)]">
          <svg class="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
          </svg>
        </div>

        <div class="space-y-3 max-w-md">
          <h3 class="text-2xl sm:text-3xl font-heading font-black text-white uppercase tracking-tight">
            Inquiry Sent Successfully!
          </h3>
          <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
            Thank you for reaching out to ForWyn Enterprises. We’ll get back to you soon.
          </p>
        </div>

        <div class="w-full max-w-md pt-6 border-t border-cyan-500/20 flex flex-col items-center gap-3 mt-2">
          <span class="text-xs font-heading font-bold uppercase tracking-widest text-slate-400">
            Prefer to discuss it directly? Call us.
          </span>
          <a href="${phoneHref}" class="inline-flex items-center gap-3 bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/40 text-cyan-300 px-6 py-3 rounded-full text-sm font-heading font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <span>${phoneDisplay}</span>
          </a>
        </div>
      </div>
    `;
  }

  function showFormError(reason) {
    const form = document.getElementById('inquiry-form');
    const submitBtn = form ? (form.querySelector('#inq-submit-btn') || form.querySelector('button[type="submit"]')) : null;
    const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
    const btnArrow = submitBtn ? submitBtn.querySelector('.btn-arrow') : null;

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
    }
    if (btnText) {
      btnText.textContent = 'SEND INQUIRY';
    }
    if (btnArrow) {
      btnArrow.textContent = '→';
    }

    let statusContainer = document.getElementById('inq-status-message');
    if (!statusContainer && form) {
      statusContainer = document.createElement('div');
      statusContainer.id = 'inq-status-message';
      form.insertBefore(statusContainer, form.firstChild);
    }

    const phoneDisplay = siteConfig.phone || '+91 98765 43210';
    const phoneHref = siteConfig.phoneHref || 'tel:+919876543210';

    let titleText = 'Unable to send your inquiry';
    let detailMsg = 'Please try again, or contact us directly.';

    if (reason === 'VALIDATION_FAILED') {
      detailMsg = 'Please fill in all required fields (Name, Email, Description) before submitting.';
    } else if (reason === 'ENDPOINT_UNCONFIGURED') {
      detailMsg = 'The Google Sheets endpoint URL is pending configuration in js/script.js. Please paste your Google Apps Script Web App URL or contact us directly.';
    }

    if (statusContainer) {
      statusContainer.className = 'mb-6 p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/40 text-slate-200 text-sm space-y-3';
      statusContainer.innerHTML = `
        <div class="flex items-start gap-3">
          <svg class="w-5 h-5 text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
          </svg>
          <div class="space-y-1">
            <h4 class="font-heading font-bold text-amber-300 text-sm uppercase tracking-wide">
              ${titleText}
            </h4>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              ${detailMsg}
            </p>
          </div>
        </div>
        <div class="pt-2 border-t border-amber-500/20 flex flex-wrap items-center justify-between gap-2 text-xs">
          <span class="text-slate-400">Prefer to discuss it directly?</span>
          <a href="${phoneHref}" class="font-heading font-bold text-cyan-300 hover:text-cyan-200 underline inline-flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <span>Call ${phoneDisplay}</span>
          </a>
        </div>
      `;
      statusContainer.classList.remove('hidden');
      statusContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  // -----------------------------------------------------------------------------
  // 4. FAQ ACCORDION ENGINE
  // -----------------------------------------------------------------------------
  window.toggleFaq = function (button) {
    const parent = button.closest('.faq-item');
    const answer = parent.querySelector('.faq-answer');
    const icon = button.querySelector('.icon-toggle');

    const isOpen = !answer.classList.contains('hidden');

    document.querySelectorAll('#faq-container .faq-answer').forEach(el => {
      el.classList.add('hidden');
    });
    document.querySelectorAll('#faq-container .icon-toggle').forEach(el => {
      el.textContent = '＋';
    });
    document.querySelectorAll('#faq-container button').forEach(btn => {
      btn.setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      answer.classList.remove('hidden');
      icon.textContent = '✕';
      button.setAttribute('aria-expanded', 'true');
    }
  };

  // -----------------------------------------------------------------------------
  // 5. PARTNER / CLIENT LOGO TICKER RENDERER (FIX 1 — Dual-Row Seamless Loop)
  // -----------------------------------------------------------------------------
  function renderClientMarquee() {
    const container = document.getElementById('client-marquee-container');
    if (!container) return;

    const createTrackItems = (companies) => {
      const doubled = [...companies, ...companies];
      return doubled.map(name => `
        <div class="ticker-item">
          <span>${name}</span>
          <span class="ticker-separator">✦</span>
        </div>
      `).join('');
    };

    const row1Html = createTrackItems(tickerRow1Companies);
    const row2Html = createTrackItems(tickerRow2Companies);

    container.innerHTML = `
      <div class="ticker-mask">
        <div class="ticker-container">
          <!-- Row 1: Smooth Leftward Movement -->
          <div class="ticker-row">
            <div class="ticker-track ticker-track-left">
              ${row1Html}
            </div>
          </div>
          <!-- Row 2: Smooth Rightward Movement -->
          <div class="ticker-row">
            <div class="ticker-track ticker-track-right">
              ${row2Html}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // -----------------------------------------------------------------------------
  // 6. DYNAMIC SECTION RENDERERS (FIX 2 — Four Service Card Visual Widgets)
  // -----------------------------------------------------------------------------
  function getServiceWidgetHTML(visualType) {
    switch (visualType) {
      case 'browser-terminal':
        return `
          <div class="service-widget-anchored">
            <div class="service-widget-terminal">
              <div class="terminal-header">
                <div class="terminal-dots">
                  <span class="terminal-dot terminal-dot-red"></span>
                  <span class="terminal-dot terminal-dot-yellow"></span>
                  <span class="terminal-dot terminal-dot-green"></span>
                </div>
                <div class="terminal-url">app.forwyn.io</div>
              </div>
              <div class="terminal-stats">
                <div class="terminal-stat-box">
                  <div class="terminal-stat-label">Speed</div>
                  <div class="terminal-stat-value">99/100</div>
                </div>
                <div class="terminal-stat-box">
                  <div class="terminal-stat-label">Latency</div>
                  <div class="terminal-stat-value text-cyan-400">12ms</div>
                </div>
                <div class="terminal-stat-box flex flex-col items-center justify-center">
                  <div class="terminal-stat-label">State</div>
                  <div class="flex items-center gap-1.5 mt-0.5">
                    <span class="sync-pulse-dot"></span>
                    <span class="text-[10px] font-mono font-bold text-emerald-400 uppercase">SYNC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      case 'radar-orbit':
        return `
          <div class="service-widget-anchored">
            <div class="service-widget-radar-container">
              <div class="radar-grid-tag">GRID // LAT 12.97°N</div>
              <div class="radar-ring radar-ring-1"></div>
              <div class="radar-ring radar-ring-2"></div>
              <div class="radar-ring radar-ring-3"></div>
              <div class="radar-center-node"></div>
              <div class="radar-wave"></div>
              <div class="radar-wave radar-wave-2"></div>
            </div>
          </div>
        `;
      case 'ai-sphere':
        return `
          <div class="service-widget-anchored">
            <div class="service-widget-ai-pet">
              <div class="ai-pet-header">
                <span class="ai-pet-title">AI COMPANION // V2</span>
                <span class="ai-pet-status"><span class="ai-pet-status-dot"></span>ACTIVE</span>
              </div>
              <div class="ai-pet-body-container">
                <div class="ai-pet-avatar">
                  <div class="ai-pet-antenna left"></div>
                  <div class="ai-pet-antenna right"></div>
                  <div class="ai-pet-head">
                    <div class="ai-pet-face">
                      <div class="ai-pet-eyes">
                        <span class="ai-pet-eye left"></span>
                        <span class="ai-pet-eye right"></span>
                      </div>
                      <div class="ai-pet-smile"></div>
                    </div>
                    <div class="ai-pet-core-glow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      case 'gpu-aperture':
        return `
          <div class="service-widget-anchored">
            <div class="service-widget-gpu-panel">
              <div class="gpu-header">
                <span class="gpu-title">WEBGL CORE</span>
                <span class="gpu-badge">120 FPS</span>
              </div>
              <div class="gpu-aperture-container">
                <div class="gpu-aperture-dial">
                  <div class="gpu-aperture-inner">
                    <div class="gpu-aperture-core"></div>
                  </div>
                </div>
              </div>
              <div class="gpu-footer">
                <span class="gpu-shaders">SHADERS ACTIVE</span>
                <span class="text-slate-400 font-mono">4K CANVAS</span>
              </div>
            </div>
          </div>
        `;
      default:
        return '';
    }
  }

  function renderServices() {
    const grid = document.getElementById('services-grid');
    if (!grid || !services || services.length === 0) return;

    grid.innerHTML = '';
    services.forEach((service) => {
      const widgetHTML = getServiceWidgetHTML(service.visualType);

      const card = document.createElement('div');
      card.className = 'service-card-wrapper interactive-card reveal-element';
      card.innerHTML = `
        <!-- Anchored Visual Widget at Bottom-Right (Fix 2) -->
        ${widgetHTML}

        <!-- Service Content Layer -->
        <div class="service-card-content">
          <div class="flex items-center justify-between mb-4">
            <div class="w-9 h-9 rounded-full border border-cyan-500/30 bg-[#101722] flex items-center justify-center font-heading font-bold text-xs text-cyan-300">${service.index}</div>
            <span class="px-3 py-1 rounded-full border border-cyan-500/30 bg-[#101722] text-[10px] font-mono text-cyan-300">${service.pillTag}</span>
          </div>

          <h3 class="text-3xl sm:text-4xl font-heading font-black text-white uppercase mt-2 mb-3 leading-tight">${service.title}</h3>
          <p class="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-md">${service.description}</p>

          <div class="mt-auto pt-4 border-t border-cyan-500/15 flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
            ${service.tags.map((t, idx) => `<span>${t}</span>${idx < service.tags.length - 1 ? '<span class="text-cyan-500/40">•</span>' : ''}`).join('')}
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  function renderRecentWorks() {
    const container = document.getElementById('recent-works');
    if (!container || !projects || projects.length === 0) return;

    container.innerHTML = '';
    const featured = projects.filter(p => p.featured).slice(0, 3);

    featured.forEach((project, idx) => {
      const card = document.createElement('article');
      card.className = 'group';

      const hasLiveUrl = Boolean(project.liveUrl);

      card.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <!-- LEFT / TEXT COLUMN: Always opens internal detailed case study -->
          <div class="lg:col-span-5 order-2 lg:order-${idx % 2 === 0 ? '1' : '2'}">
            
            <!-- Badges -->
            <div class="flex flex-wrap items-center gap-2 mb-4">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-[#0c1017]/90 text-[10px] tracking-wider uppercase text-cyan-300">
                <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>${project.category}
              </div>
              ${project.statusBadge ? `
                <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  ${project.statusBadge}
                </div>
              ` : ''}
            </div>

            <!-- Title: Clickable to detailed case study -->
            <h3 
              onclick="window.navigateToProject('${project.id}')" 
              class="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-4 group-hover:text-cyan-300 transition-colors cursor-pointer"
            >
              ${project.title}
            </h3>

            ${project.budgetQuotation ? `
              <div class="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-xl bg-[#101722] border border-cyan-500/25 mb-4">
                <span class="text-[10px] font-mono tracking-widest text-slate-400 uppercase">Contract Scope:</span>
                <span class="text-xs font-heading font-black text-white">${project.budgetQuotation}</span>
                <span class="text-[10px] font-mono text-cyan-400 uppercase">• ${project.clientRegion || 'Foreign Client'}</span>
              </div>
            ` : ''}

            <p class="text-slate-300 text-base leading-relaxed mb-6">${project.statement}</p>

            <!-- Actions Bar -->
            <div class="flex flex-wrap items-center gap-5">
              <!-- Case Study Button: Opens Overview & Key Features -->
              <button 
                type="button" 
                onclick="window.navigateToProject('${project.id}')" 
                class="inline-flex items-center gap-2 text-sm font-heading font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-200 transition-colors group/btn"
              >
                <span>Explore Case Study</span>
                <svg class="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>

              <!-- If Live URL exists: Show direct launch pill -->
              ${hasLiveUrl ? `
                <a 
                  href="${project.liveUrl}" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-xs font-heading font-bold uppercase tracking-wider text-emerald-300 hover:bg-emerald-500/20 transition-all shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                >
                  <span>Launch Live Platform</span>
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              ` : ''}
            </div>
          </div>

          <!-- RIGHT / IMAGE COLUMN: Directs to Vercel for Golf, or Case Study for Others -->
          <div class="lg:col-span-7 order-1 lg:order-${idx % 2 === 0 ? '2' : '1'}">
            <div 
              class="relative rounded-3xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/50 transition-all shadow-[0_0_40px_rgba(6,182,212,0.1)] hover:shadow-[0_0_60px_rgba(6,182,212,0.25)] cursor-pointer"
              onclick="${hasLiveUrl ? `window.open('${project.liveUrl}', '_blank', 'noopener,noreferrer')` : `window.navigateToProject('${project.id}')`}"
            >
              <img 
                src="${project.image}" 
                alt="${project.title} — ${project.category}" 
                class="w-full h-[280px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" 
                loading="lazy"
              />
              
              <!-- Badges Layered on Image -->
              <div class="absolute top-4 right-4 flex items-center gap-2">
                ${hasLiveUrl ? `
                  <div class="backdrop-blur-md bg-emerald-950/80 border border-emerald-400/60 px-3 py-1.5 rounded-full text-[10px] font-mono font-bold text-emerald-300 tracking-wider flex items-center gap-1.5 shadow-lg">
                    <span>LIVE DEMO</span>
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                ` : ''}
                ${project.statusBadge ? `
                  <div class="backdrop-blur-md bg-black/80 border border-cyan-500/40 px-3 py-1.5 rounded-full text-[10px] font-mono font-bold text-cyan-300 tracking-wider hidden sm:block">
                    LIVE CONTRACT // ${project.budgetQuotation}
                  </div>
                ` : ''}
              </div>
            </div>
          </div>

        </div>
      `;
      container.appendChild(card);
    });
  }
  function renderWorkIndex() {
    const grid = document.getElementById('work-index-grid');
    if (!grid) return;

    grid.innerHTML = '';
    projects.forEach((project) => {
      const card = document.createElement('article');
      card.className = 'group cursor-pointer bg-[#0c1017]/80 border border-cyan-500/20 rounded-3xl overflow-hidden hover:border-cyan-400/40 transition-all shadow-[0_0_30px_rgba(6,182,212,0.08)] hover:shadow-[0_0_50px_rgba(6,182,212,0.2)]';
      card.onclick = () => navigateToProject(project.id);
      card.innerHTML = `
        <div class="relative overflow-hidden">
          <img src="${project.image}" alt="${project.title} — ${project.category}" class="w-full h-[240px] object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy"/>
          <div class="absolute top-4 left-4 px-3 py-1 rounded-full border border-cyan-500/40 bg-[#0c1017]/90 backdrop-blur text-[10px] tracking-wider uppercase text-cyan-300">${project.category}</div>
        </div>
        <div class="p-6">
          <h3 class="font-heading font-bold text-xl text-white uppercase tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">${project.title}</h3>
          <p class="text-slate-400 text-sm leading-relaxed mb-4">${project.statement}</p>
          <div class="flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-cyan-400">
            <span>View Details</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  function renderProjectRoute(slug) {
    const project = projects.find(p => p.id === slug);
    if (!project) {
      location.hash = '#/work';
      return;
    }

    const body = document.getElementById('project-route-body');
    if (!body) return;

    // Check for keyFeatures (falls back to techStack if any legacy items exist)
    const featuresList = project.keyFeatures || project.techStack || [];

    body.innerHTML = `
    <div class="container mx-auto px-6 py-12 max-w-5xl">
      <button onclick="location.hash='#/work'" class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-[#0c1017] hover:bg-cyan-400/10 text-xs font-heading font-bold uppercase tracking-wider text-white mb-8 transition-all">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10 19l-7-7m0 0l7-7m-7 7h18" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span>Back to Works</span>
      </button>

      <!-- Header & Badges -->
      <div class="mb-8">
        <div class="flex flex-wrap items-center gap-3 mb-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-[#0c1017]/90 text-[10px] tracking-wider uppercase text-cyan-300">
            <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>${project.category}
          </div>

          ${project.statusBadge ? `
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              ${project.statusBadge}
            </div>
          ` : ''}

          ${project.budgetQuotation ? `
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/30 bg-[#101722] text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-wider">
              <span class="text-slate-400">QUOTATION:</span> ${project.budgetQuotation}${project.clientRegion ? `<span class="text-cyan-500">• ${project.clientRegion}</span>` : ''}
            </div>
          ` : ''}
        </div>

        <h1 class="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight mb-4">${project.title}</h1>
        <p class="text-slate-300 text-lg leading-relaxed max-w-3xl">${project.statement}</p>
      </div>

     <!-- Main Project Visual Banner -->
      <div 
        class="relative rounded-3xl overflow-hidden border border-cyan-500/20 mb-12 shadow-[0_0_40px_rgba(6,182,212,0.15)] ${project.liveUrl ? 'cursor-pointer group' : ''}"
        ${project.liveUrl ? `onclick="window.open('${project.liveUrl}', '_blank', 'noopener,noreferrer')"` : ''}
      >
        <img src="${project.image}" alt="${project.title} — ${project.category}" class="w-full h-[320px] sm:h-[480px] object-cover ${project.liveUrl ? 'group-hover:scale-105 transition-transform duration-500' : ''}" loading="lazy"/>
        
        <div class="absolute top-4 right-4 flex items-center gap-2">
          ${project.liveUrl ? `
            <div class="backdrop-blur-md bg-emerald-950/80 border border-emerald-400/50 px-3.5 py-1.5 rounded-full text-[11px] font-mono font-bold text-emerald-300 tracking-wider flex items-center gap-1.5 shadow-lg">
              <span>OPEN LIVE PLATFORM</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
          ` : ''}
          ${project.statusBadge ? `
            <div class="backdrop-blur-md bg-black/75 border border-emerald-500/40 px-3.5 py-1.5 rounded-full text-[11px] font-mono font-bold text-emerald-300 tracking-wider shadow-lg hidden sm:block">
              ONGOING // ${project.budgetQuotation || 'ACTIVE'}
            </div>
          ` : ''}
        </div>
      </div>

      <!-- Section 01: Overview & Challenge -->
      ${project.overview ? `
        <div class="bg-[#0c1017]/80 border border-cyan-500/20 rounded-3xl p-6 sm:p-8 mb-8">
          <div class="text-xs font-heading font-bold uppercase tracking-widest text-cyan-400 mb-3">01 // Overview &amp; Challenge</div>
          <p class="text-slate-300 text-sm leading-relaxed mb-4">${project.overview}</p>
          <p class="text-slate-400 text-sm leading-relaxed">${project.challenge}</p>
        </div>
      ` : ''}

      <!-- Section 02: Key Features & Capabilities -->
      ${featuresList.length > 0 ? `
        <div class="bg-[#0c1017]/90 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 mb-8">
          <div class="text-xs font-heading font-bold uppercase tracking-widest text-cyan-300 mb-4">02 // Key Features &amp; Capabilities</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${featuresList.map(feature => `
              <div class="flex items-center gap-2.5 px-3.5 py-2.5 bg-[#101722] rounded-xl border border-cyan-500/20 text-xs sm:text-sm text-slate-200">
                <span class="text-cyan-400 font-bold shrink-0">✓</span>
                <span>${feature}</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Section 03: Delivery Status / Outcomes -->
      ${project.outcomes ? `
        <div class="bg-[#0c1017]/80 border border-cyan-500/20 rounded-3xl p-6 sm:p-8 mb-12">
          <div class="text-xs font-heading font-bold uppercase tracking-widest text-cyan-400 mb-3">03 // Delivery Status &amp; Impact</div>
          <p class="text-slate-300 text-sm leading-relaxed">${project.outcomes}</p>
        </div>
      ` : ''}

      <!-- CTA -->
      <div class="flex items-center justify-center pt-6">
        <a href="#contact" class="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black hover:bg-[#2B59FF] hover:text-white font-heading font-bold text-sm uppercase tracking-wider transition-all shadow-[0_0_30px_rgba(43,89,255,0.4)]">
          <span>Request Similar Build</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
    </div>
  `;
  }

  window.navigateToProject = function (slug) {
    location.hash = `#/work/${slug}`;
  };


  function renderMetrics() {
    const section = document.getElementById('metrics-section');
    const grid = document.getElementById('metrics-grid');
    if (!section || !grid) return;

    if (!metrics || (!metrics.projects && !metrics.clients && !metrics.rating)) {
      section.style.display = 'none';
      return;
    }
    section.style.display = '';
    grid.innerHTML = '';

    const metricKeys = ['projects', 'clients', 'rating'];
    metricKeys.forEach(key => {
      const m = metrics[key];
      if (!m) return;

      const card = document.createElement('div');
      const borderColor = key === 'clients' ? 'border-blue-400/60' : 'border-cyan-400/60';
      const shadowColor = key === 'clients' ? 'rgba(37, 99, 235, 0.18)' : 'rgba(6, 182, 212, 0.15)';

      card.className = `p-8 rounded-2xl bg-[#0c1017]/80 border border-cyan-500/20 backdrop-blur relative overflow-hidden group hover:${borderColor} hover:shadow-[0_0_30px_${shadowColor}] transition-all interactive-card reveal-element`;

      // Extract raw target numbers and symbols (e.g. "100+", "15+", "5.0")
      let targetNumber = parseFloat(m.value.replace(/[^0-9.]/g, '')) || 0;
      let suffix = m.value.replace(/[0-9.]/g, '') || '';
      let isDecimal = m.value.includes('.');

      let valueMarkup = key === 'rating' ? `
        <span class="stat-counter text-4xl lg:text-5xl font-heading font-black text-white uppercase tracking-tight" data-target="${targetNumber}" data-suffix="${suffix}" data-decimal="${isDecimal}">0.0</span>
        <span class="text-cyan-400 text-sm tracking-widest ml-1">${'★'.repeat(m.stars)}</span>
      ` : `
        <span class="stat-counter text-4xl lg:text-5xl font-heading font-black text-white uppercase tracking-tight" data-target="${targetNumber}" data-suffix="${suffix}" data-decimal="${isDecimal}">0</span>
      `;

      card.innerHTML = `
        <div class="text-xs font-heading font-bold ${key === 'clients' ? 'text-blue-400' : 'text-cyan-400'} uppercase tracking-widest mb-3">METRICS // ${m.index}</div>
        <div class="flex items-baseline gap-2 mb-2">
          ${valueMarkup}
          <span class="text-xl font-heading font-bold ${key === 'clients' ? 'text-blue-300' : 'text-cyan-300'} uppercase">${m.title}</span>
        </div>
        <p class="text-slate-300 text-sm leading-relaxed mb-6">${m.description}</p>
        <div class="pt-4 border-t border-cyan-500/15 flex items-center justify-between text-xs text-slate-400">
          <span>${m.footerLabel}</span>
          <span class="text-cyan-300 font-medium">${m.footerValue}</span>
        </div>
      `;
      grid.appendChild(card);
    });

    initMetricCounters();
  }
  function initMetricCounters() {
    const section = document.getElementById('metrics-section');
    if (!section) return;

    let animated = false;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          const counters = section.querySelectorAll('.stat-counter');
          const duration = 1800; // Total animation time in ms (1.8 seconds)

          counters.forEach(counter => {
            const target = parseFloat(counter.getAttribute('data-target')) || 0;
            const suffix = counter.getAttribute('data-suffix') || '';
            const isDecimal = counter.getAttribute('data-decimal') === 'true';

            const startTime = performance.now();

            function updateCounter(currentTime) {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);

              // Ease-out cubic curve: fast start, soft stop
              const easeProgress = 1 - Math.pow(1 - progress, 3);
              const currentValue = easeProgress * target;

              if (isDecimal) {
                counter.textContent = currentValue.toFixed(1) + suffix;
              } else {
                counter.textContent = Math.floor(currentValue) + suffix;
              }

              if (progress < 1) {
                requestAnimationFrame(updateCounter);
              } else {
                counter.textContent = (isDecimal ? target.toFixed(1) : target) + suffix;
              }
            }

            requestAnimationFrame(updateCounter);
          });

          // Unobserve so the counter does not reset repeatedly during scrolling
          observer.unobserve(section);
        }
      });
    }, { threshold: 0.25 });

    observer.observe(section);
  }


  function renderReviews() {
    const grid = document.getElementById('reviews-grid');
    const section = document.getElementById('reviews');
    if (!grid || !section) return;

    if (!reviews || reviews.length === 0) {
      section.style.display = 'none';
      return;
    }
    section.style.display = '';
    grid.innerHTML = '';

    const instagramUrl = siteConfig.instagram || 'https://www.instagram.com/';

    reviews.forEach(review => {
      const card = document.createElement('div');
      card.className = 'bg-[#0c1017]/80 border border-cyan-500/20 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-400/40 transition-all shadow-[0_0_30px_rgba(6,182,212,0.06)] hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]';
      card.innerHTML = `
        <div class="space-y-4">
          <!-- Top Row: Star Rating & Verified Pill -->
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-1 text-yellow-400 text-base">
              ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
            </div>
            <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-wider">
              <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              Verified Feedback
            </span>
          </div>

          <!-- Review Statement -->
          <p class="text-slate-300 text-sm leading-relaxed italic">"${review.text}"</p>
        </div>

        <!-- Card Footer -->
        <div class="pt-6 mt-4 border-t border-cyan-500/15 space-y-4">
          <!-- Author Info -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 font-heading font-bold">
              ${review.name.charAt(0)}
            </div>
            <div>
              <div class="text-white font-heading font-bold text-sm">${review.name}</div>
              <div class="text-slate-400 text-xs">${review.role}, ${review.company}</div>
            </div>
          </div>

          <!-- Instagram Testimonials Link Tag -->
          <div class="pt-2 border-t border-cyan-500/10">
            <a 
              href="${instagramUrl}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="inline-flex items-center justify-between w-full px-3 py-2 rounded-xl bg-[#101722] hover:bg-[#162030] border border-cyan-500/25 hover:border-cyan-400 text-[11px] text-slate-300 hover:text-cyan-300 transition-all group/ig"
            >
              <span class="flex items-center gap-2">
                <svg class="w-3.5 h-3.5 text-pink-400 group-hover/ig:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span class="font-mono font-medium">Verify on Official Instagram</span>
              </span>
              <span class="text-cyan-400 group-hover/ig:translate-x-0.5 transition-transform">↗</span>
            </a>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }
  function renderTeam() {
    const grid = document.getElementById('team-grid');
    const section = document.getElementById('team');
    if (!grid || !section) return;

    if (!team || team.length === 0) {
      section.style.display = 'none';
      return;
    }
    section.style.display = '';
    grid.innerHTML = '';

    // Generate single card HTML
    const buildCard = (member) => `
      <div class="shrink-0 w-[290px] sm:w-[320px] bg-[#0c1017]/90 border border-cyan-500/20 hover:border-cyan-400 rounded-3xl p-6 text-center transition-all shadow-[0_0_25px_rgba(6,182,212,0.05)] hover:shadow-[0_0_35px_rgba(6,182,212,0.2)] flex flex-col items-center justify-between group select-none">
        <div class="flex flex-col items-center w-full">
          <!-- Circular Avatar with Fallback Initials -->
          <div class="w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-cyan-500/30 group-hover:border-cyan-300 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all shadow-xl bg-slate-900 flex items-center justify-center relative">
            <img 
              alt="${member.name}" 
              loading="lazy" 
              class="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
              src="${member.image}"
              onerror="this.style.display='none'; this.nextElementSibling.classList.remove('hidden');"
            />
            <div class="hidden w-full h-full flex items-center justify-center font-heading font-black text-3xl text-cyan-300 bg-[#101722]">
              ${member.name ? member.name.charAt(0) : 'F'}
            </div>
          </div>

          <h3 class="text-lg font-heading font-bold text-white uppercase tracking-wide group-hover:text-cyan-300 transition-colors">${member.name}</h3>
          <span class="text-[11px] font-mono text-cyan-400 mt-1 uppercase tracking-wider">${member.role}</span>
          <p class="text-xs text-slate-400 mt-4 leading-relaxed">${member.bio}</p>
        </div>
      </div>
    `;

    // Render set 1 + set 2 to create a seamless, infinite loop
    const fullSet = [...team, ...team];
    grid.innerHTML = fullSet.map(member => buildCard(member)).join('');

    // Ensure Founder Nitheesh is positioned centrally on first entry before starting marquee
    if (!window._teamObserverInit) {
      window._teamObserverInit = true;
      let hasStarted = false;
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasStarted) {
            hasStarted = true;
            grid.classList.add('is-running');
          }
        });
      }, { threshold: 0.15 });
      observer.observe(section);
    }
  }

  function handleRouting() {
    const hash = location.hash || '#hero';
    const workIndexRoute = document.getElementById('work-index-route');
    const projectRoute = document.getElementById('project-route');

    const mainSections = document.querySelectorAll('section:not(#work-index-route):not(#project-route)');

    if (hash.startsWith('#/work/')) {
      mainSections.forEach(s => s.style.display = 'none');
      if (workIndexRoute) workIndexRoute.style.display = 'none';
      if (projectRoute) {
        projectRoute.style.display = 'block';
        const slug = hash.replace('#/work/', '');
        renderProjectRoute(slug);
      }
      window.scrollTo(0, 0);
    } else if (hash === '#/work') {
      mainSections.forEach(s => s.style.display = 'none');
      if (projectRoute) projectRoute.style.display = 'none';
      if (workIndexRoute) {
        workIndexRoute.style.display = 'block';
        renderWorkIndex();
      }
      window.scrollTo(0, 0);
    } else {
      mainSections.forEach(s => s.style.display = '');
      if (workIndexRoute) workIndexRoute.style.display = 'none';
      if (projectRoute) projectRoute.style.display = 'none';

      if (hash.startsWith('#') && hash !== '#hero') {
        const target = document.querySelector(hash);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  // -----------------------------------------------------------------------------
  // 7. UI & NAVIGATION CONTROLLERS (FIX 3: HERO EXIT RETREAT OBSERVER)
  // -----------------------------------------------------------------------------
  function initMobileNav() {
    const toggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    if (toggle && mobileNav) {
      const openMobileNav = (open) => {
        mobileNav.classList.toggle('hidden', !open);
        mobileNav.style.display = open ? 'flex' : '';
        toggle.setAttribute('aria-expanded', String(open));
      };
      toggle.addEventListener('click', () => openMobileNav(mobileNav.classList.contains('hidden')));
      mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => openMobileNav(false)));
    }

    const heroToggle = document.getElementById('hero-menu-toggle');
    const heroMobileNav = document.getElementById('hero-mobile-nav');
    if (heroToggle && heroMobileNav) {
      const openHeroNav = (open) => {
        heroMobileNav.classList.toggle('hidden', !open);
        heroToggle.setAttribute('aria-expanded', String(open));
      };
      heroToggle.addEventListener('click', () => openHeroNav(heroMobileNav.classList.contains('hidden')));
      heroMobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => openHeroNav(false)));
    }
  }

  function initScrollHeader() {
    const header = document.getElementById('site-header');
    const heroNav = document.getElementById('hero-nav');
    const hero = document.getElementById('hero');
    if (!header) return;

    const spyTargets = ['#hero', '#services', '#works', '#plans', '#contact'];
    const links = Array.prototype.slice.call(document.querySelectorAll('.capsule-link'));

    const update = () => {
      const scroll = window.pageYOffset;
      const heroBottom = hero ? hero.offsetTop + hero.offsetHeight : window.innerHeight;
      const pastHero = scroll > Math.max(120, heroBottom * 0.65);

      // Toggle compact floating capsule nav
      header.classList.toggle('capsule-visible', pastHero);

      // FIX 3: Target FORWYN brand & Book a Call button retreat exit animation
      if (heroNav) {
        // As scroll leaves the top hero region (past 60px), trigger retreat animation
        const heroLeaving = scroll > 60;
        heroNav.classList.toggle('hero-passed', heroLeaving);
      }

      let active = '#hero';
      spyTargets.forEach(id => {
        const section = document.querySelector(id);
        if (!section) return;
        if (section.getBoundingClientRect().top <= window.innerHeight * 0.35) active = id;
      });
      links.forEach(link => {
        link.classList.toggle('capsule-link-active', link.getAttribute('href') === active);
      });
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => { update(); ticking = false; });
      }
    };

    update();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
  }

  function initHeroStagger() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const heroElements = document.querySelectorAll('.reveal-hero[data-hs]');
    if (!heroElements.length) return;

    if (prefersReducedMotion) {
      heroElements.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        el.style.filter = 'blur(0)';
      });
      return;
    }

    const delays = [0, 100, 180, 300, 420, 500];
    heroElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.filter = 'blur(4px)';
      el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s cubic-bezier(0.16, 1, 0.3, 1)';

      const idx = parseInt(el.dataset.hs) || 0;
      const delay = delays[idx] !== undefined ? delays[idx] : idx * 100;

      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        el.style.filter = 'blur(0)';
      }, delay);
    });

    const heroAmbient = document.querySelectorAll('.hero-ambient');
    heroAmbient.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transition = 'opacity 0.5s ease-out';
      setTimeout(() => { el.style.opacity = '1'; }, 500 + (i * 80));
    });
  }

  function initMicroInteractions() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ring = document.getElementById('cursor-ring');
    const dot = document.getElementById('cursor-dot');
    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
    let ringX = mouseX, ringY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot) {
        dot.style.left = mouseX + 'px';
        dot.style.top = mouseY + 'px';
      }
    });

    function animateCursor() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ring) {
        ring.style.left = ringX + 'px';
        ring.style.top = ringY + 'px';
      }
      requestAnimationFrame(animateCursor);
    }
    requestAnimationFrame(animateCursor);

    document.querySelectorAll('a, button, article, .interactive-card, input, select, label').forEach(el => {
      el.addEventListener('mouseenter', () => ring && ring.classList.add('cursor-active'));
      el.addEventListener('mouseleave', () => ring && ring.classList.remove('cursor-active'));
    });

    document.querySelectorAll('.interactive-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', (e.clientX - rect.left) + 'px');
        card.style.setProperty('--mouse-y', (e.clientY - rect.top) + 'px');
      });
    });

    document.querySelectorAll('.btn-magnetic').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const btnX = e.clientX - rect.left - rect.width / 2;
        const btnY = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${btnX * 0.22}px, ${btnY * 0.22}px) scale(1.02)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          entry.target.classList.add('is-in');
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal-element, .fx-group').forEach(el => observer.observe(el));
  }

  // -----------------------------------------------------------------------------
  // 8. INITIALIZATION
  // -----------------------------------------------------------------------------
  function init() {
    hydrateContactAndFooter();
    renderClientMarquee();
    renderTeam();
    renderServices();
    renderRecentWorks();
    renderReviews();
    renderMetrics();
    handleRouting();
    initMobileNav();
    initScrollHeader();
    initHeroStagger();
    initPlanSelection();
    initMicroInteractions();

    window.addEventListener('hashchange', handleRouting);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
