# ForWyn Enterprises — Website Refactor & Architecture

Production-ready, modular, high-performance web architecture for **ForWyn Enterprises** — Custom Software Engineering Studio.

---

## Directory Structure

```text
Forwyn_backup/
├── index.html                  # Semantic HTML & page structure
├── css/
│   └── style.css               # Extracted & organized CSS (tokens, reset, layout, FX)
├── js/
│   └── script.js               # Clean modular JavaScript (data layer, renderers, interactions)
├── assets/
│   └── images/
│       └── Forwyn_Logo.jpeg    # ForWyn brand logo
├── SANITY_SCHEMA.md            # Sanity CMS Studio schema specifications
└── README.md                   # Technical documentation & usage instructions
```

---

## Key Refactoring Highlights

### 1. Modular Codebase Split
- Converted monolithic `code.html` into structured, maintainable files.
- Separated all CSS rules into `css/style.css` (Tokens, Reset, Navigation, Bento Grids, Animations, FX).
- Separated all JavaScript logic into `js/script.js` (Data layer, Plan Engine, Form Handlers, Routing, Renderers).

### 2. Navbar Visual Upgrade
- Enlarged ForWyn logo image (`48px x 48px`).
- Enlarged **FORWYN ENTERPRISES** typography (`text-xl`/`text-2xl` bold Space Grotesk).
- Enlarged **Book a Call** CTA button with increased padding, font size, and hover glow.

### 3. Repositioned Metrics Section
- Metrics section (`#metrics-section`) relocated to appear immediately after the stark statement section:
  > **DIGITAL PRODUCTS BUILT AROUND REAL BUSINESS PROBLEMS.**

### 4. Interactive Plan → Inquiry & Dedicated Budget Field
- Added dedicated **Selected Plan** and **Budget** `<select>` fields to the Project Inquiry form.
- Clicking any plan button (**Select Starter**, **Select Grow**, **Select Scale**, **Inquire Custom**) automatically:
  1. Invokes `selectPlan(planId)`.
  2. Prefills the **Selected Plan** and matching **Budget** (`₹15K – 35K`, `₹45K – 75K`, `₹80K – 1.10L`, `Custom`).
  3. Highlights the prefilled fields.
  4. Smoothly scrolls the viewport to `#inquiry`.

### 5. CMS / Sanity Integration Readiness
- Every major section tags semantic containers with `data-section="..."` attributes.
- Complete data model centralizing config and content in `js/script.js`.
- Comprehensive `SANITY_SCHEMA.md` documenting document types, field types, and relationships.

---

## How to Run Locally

Using any standard static web server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js npx
npx serve .
```

Then open `http://localhost:8000` in your web browser.
