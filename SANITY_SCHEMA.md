# Sanity CMS Schema Specifications for ForWyn Enterprises

This document outlines the Sanity Studio schema architecture for future CMS integration. All frontend content in `js/script.js` is structured to consume data matching these document types and fields directly.

---

## 1. Site Settings Schema (`siteSettings`)

**Document Type:** `document` (singleton)  
**Name:** `siteSettings`

| Field | Type | Required | Description |
|---|---|---|---|
| `companyName` | `string` | Yes | Full brand name (e.g. "FORWYN ENTERPRISES") |
| `shortName` | `string` | Yes | Abbreviated name (e.g. "ForWyn") |
| `tagline` | `string` | Yes | Company slogan/tagline |
| `description` | `text` | Yes | Primary SEO site description |
| `email` | `string` | Yes | Primary contact email (`HELLO@FORWYN.COM`) |
| `phone` | `string` | Yes | Primary phone number |
| `whatsappNumber` | `string` | Yes | WhatsApp phone number without spaces |
| `whatsappMessage` | `string` | No | Pre-filled WhatsApp chat message |
| `socialLinks` | `object` | No | Social profile URLs (`linkedin`, `instagram`, `youtube`) |
| `bookingUrl` | `url` | No | Direct scheduling service link |

---

## 2. Navbar Schema (`navbar`)

**Document Type:** `document` (singleton)  
**Name:** `navbar`

| Field | Type | Required | Description |
|---|---|---|---|
| `logo` | `image` | Yes | Brand logo asset |
| `brandName` | `string` | Yes | Brand display text |
| `navItems` | `array` | Yes | Array of navigation links (`label`, `href`) |
| `ctaButton` | `object` | Yes | CTA button config (`label`, `href`, `visible`) |

---

## 3. Hero Section Schema (`hero`)

**Document Type:** `document` (singleton)  
**Name:** `hero`

| Field | Type | Required | Description |
|---|---|---|---|
| `eyebrow` | `string` | Yes | Small top tag text ("Modern Software Engineering") |
| `headline` | `string` | Yes | Main title ("Build What Moves You Forward.") |
| `subtitle` | `text` | Yes | Hero description text |
| `primaryCTA` | `object` | Yes | Primary CTA config (`label`, `href`) |
| `secondaryCTA` | `object` | Yes | Secondary CTA config (`label`, `href`) |

---

## 4. Metrics Schema (`metrics`)

**Document Type:** `document` (singleton)  
**Name:** `metrics`

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | `string` | Yes | Section title |
| `items` | `array` of `object` | Yes | Metric cards (`index`, `value`, `title`, `description`, `footerLabel`, `footerValue`, `stars`) |

---

## 5. Services Schema (`service`)

**Document Type:** `document`  
**Name:** `service`

| Field | Type | Required | Description |
|---|---|---|---|
| `index` | `string` | Yes | Index string (e.g. "01") |
| `title` | `string` | Yes | Capability title (e.g. "DIGITAL PRODUCTS") |
| `description` | `text` | Yes | Service description |
| `tags` | `array` of `string` | Yes | Practice tags |
| `accent` | `string` | Yes | Accent color token (`cyan`, `blue`, `cobalt`) |

---

## 6. Projects / Portfolio Schema (`project`)

**Document Type:** `document`  
**Name:** `project`

| Field | Type | Required | Description |
|---|---|---|---|
| `slug` | `slug` | Yes | Unique project URL slug (`lumina-pos`) |
| `category` | `string` | Yes | Category badge text |
| `title` | `string` | Yes | Project title |
| `statement` | `text` | Yes | Brief statement summary |
| `image` | `image` | Yes | Project thumbnail & header image |
| `overview` | `text` | No | Project overview text |
| `challenge` | `text` | No | Enterprise challenge description |
| `approach` | `text` | No | Architectural approach |
| `solution` | `text` | No | Technical solution |
| `techStack` | `array` of `string` | Yes | List of technologies used |
| `outcomes` | `text` | No | Verified project outcomes |
| `featured` | `boolean` | Yes | Flag to show on homepage |
| `published` | `boolean` | Yes | Visibility status |

---

## 7. Process Schema (`process`)

**Document Type:** `document` (singleton)  
**Name:** `process`

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | `string` | Yes | Section title |
| `steps` | `array` of `object` | Yes | Process steps (`stepNumber`, `title`, `description`) |

---

## 8. Plans & Pricing Schema (`plan`)

**Document Type:** `document`  
**Name:** `plan`

| Field | Type | Required | Description |
|---|---|---|---|
| `planId` | `string` | Yes | Unique ID (`starter`, `grow`, `scale`, `custom`) |
| `name` | `string` | Yes | Display tier name ("Starter") |
| `tierBadge` | `string` | Yes | Tier label ("Tier 01") |
| `budgetRange` | `string` | Yes | Price range ("₹15K – 35K") |
| `description` | `text` | Yes | Tier description |
| `features` | `array` of `string` | Yes | Bullet point features |
| `popular` | `boolean` | No | Highlight badge flag |

---

## 9. Testimonials / Reviews Schema (`review`)

**Document Type:** `document`  
**Name:** `review`

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Client / reviewer name |
| `role` | `string` | Yes | Client job title |
| `company` | `string` | Yes | Company name |
| `rating` | `number` | Yes | Star rating (1 - 5) |
| `text` | `text` | Yes | Testimonial quote text |

---

## 10. FAQ Schema (`faqItem`)

**Document Type:** `document`  
**Name:** `faqItem`

| Field | Type | Required | Description |
|---|---|---|---|
| `question` | `string` | Yes | Frequently asked question |
| `answer` | `text` | Yes | Comprehensive answer |
| `order` | `number` | Yes | Display sorting index |

---

## 11. Contact & Inquiry Schema (`contact`)

**Document Type:** `document` (singleton)  
**Name:** `contact`

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | `string` | Yes | Section headline |
| `description` | `text` | Yes | Contact copy |
| `budgetOptions` | `array` of `string` | Yes | Budget dropdown choices |
| `projectTypes` | `array` of `string` | Yes | Project type dropdown choices |

---

## 12. Footer Schema (`footer`)

**Document Type:** `document` (singleton)  
**Name:** `footer`

| Field | Type | Required | Description |
|---|---|---|---|
| `companyDescription` | `text` | Yes | Short footer bio |
| `navigationLinks` | `array` of `object` | Yes | Footer menu items |
| `legalLinks` | `array` of `object` | Yes | Privacy/Terms links |
| `copyrightText` | `string` | Yes | Copyright notice string |
