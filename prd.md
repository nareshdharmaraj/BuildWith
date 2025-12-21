1. Project Overview
Project Name: BuildWith (Placeholder)
Type: Frontend-only Static Website
Domain: Construction / Architecture / Building Services
Goal: Create a high-end, responsive, and interactive website showcasing construction services, projects, and a simulated admin dashboard. The design must utilize "Glassmorphism," professional animations, and offer extensive UX features like Theme Toggles and RTL mirroring without a backend.

2. Technical Stack & Constraints
Core: HTML5, CSS, JavaScript (ES6+).
Frameworks: None. (CSS/JS only).
External Libraries Allowed:
Icons: FontAwesome, Boxicons, or Phosphor Icons.
Fonts: Google Fonts (e.g., Poppins, Montserrat, Exo 2).
Charts: Chart.js or ApexCharts (CDN) for the Dashboard.
Maps: Leaflet.js or Google Maps Embed (Static).
Data Handling: No Database. All data (projects, news, dashboard stats) must be mocked using JavaScript Arrays/Objects (JSON format) within the script files.

3. Design System & UI/UX
Theme: "Glassic UI" (Glassmorphism).
Use backdrop-filter: blur(), semi-transparent white/dark backgrounds, and subtle borders.
Responsiveness: Mobile-first approach. Fully responsive on Mobile, Tablet, and Desktop.
Animations:
Scroll reveal animations (elements fade in/slide up as user scrolls).
Hover effects on cards (scale, shadow glow).
Smooth transitions for theme toggles.
Global Toggles:
Dark/Light Mode: Switches CSS variables for background and text colors.
RTL/LTR (Mirror Mode):
Logic: Does not translate text. It mirrors the layout (Left-to-Right becomes Right-to-Left) using CSS Flexbox/Grid direction reversal (flex-direction: row-reverse).
Icon: Globe Icon.

4. Navigation & Footer
4.1 Navbar (Sticky & Glassmorphism)
Logo: Text or Icon (Left aligned).
Menu Items:
Home (Hover Dropdown):
Home 1 (Main/Corporate)
Home 2 (Creative/Parallax)
Projects
Dashboard (Hover Dropdown):
User Dashboard
Admin Dashboard
About
Contact
FAQ
Controls (Right aligned):
Globe Icon (RTL Toggle).
Sun/Moon Icon (Dark/Light Toggle).
Login Button.
Sign Up Button (CTA Style).
Mobile: Hamburger menu displaying all links and toggles.

4.2 Footer
Columns:
Brand: Logo, tagline, social media icons.
Quick Links: Home, Projects, About, Contact.
Legal: Privacy Policy, Terms & Conditions.
Newsletter: Input field and subscribe button.
Copyright Bar: © 202X [Name]. All Rights Reserved.

5. Page Specifications
5.1 Home Page 1 (index.html) - Corporate & Clean
Hero Section: Full-screen video background or high-res slider. Bold headlines, "Get a Quote" CTA.
Services: Grid layout (Commercial, Residential, Industrial, Renovation) with icons and hover details.
Featured Projects: Carousel or 3-column grid of top projects.
Why Choose Us: Icon list (Safety, Quality, Timeliness).
Statistics: Animated counters (Projects Completed, Experience Years, Awards).
Testimonials: Slider showing client quotes.
Latest News: Blog cards.
Call to Action: "Build your dream with us today."

5.2 Home Page 2 (index2.html) - Creative & Visual
Hero Section: Parallax scrolling effect with architectural line-drawing animations.
Layout: Asymmetrical grid for services and projects. Focus on large imagery.
Content: Same data as Index 1, but different presentation (e.g., masonry layout for projects).

5.3 Projects Page (projects.html)
Header: "Our Portfolio".
Filter System: Buttons (All, Residential, Commercial, Interior).
Search Bar: Real-time search by project name (JS filtering).
Project Grid: Dynamic generation from a JS Array.
Card: Image, Title, Location, Badge (Category).
ROI Calculator: Interactive section.
Inputs: Budget, Area, Type.
Output: Estimated Value Increase / ROI % (Simple JS formula).

5.4 About Page (about.html)
Hero: Branding image.
Our Story (Timeline): Vertical line design. Years (e.g., 2010, 2015, 2024) on one side, content on the other.
Vision & Mission: Side-by-side cards.
Core Values: Grid (Integrity, Innovation, Sustainability, Safety).
Leadership Team: Member cards with photos and social links.
Awards: Logo grid of certifications/trophies.

5.5 Contact Page (contact.html)
Info Section: Address, Phone, Email, "Response time: < 24 hrs".
Contact Form: Glassmorphic container. Fields: Name, Email, Subject, Message.
Map: Embedded Map (Google or placeholder).

5.6 Admin Dashboard (admin-dashboard.html)
Layout: Sidebar (Nav) + Main Content Area.
Sidebar Tabs: Overview, Projects, Clients, Workers, Settings.
Main Content (Overview Tab):
Analytics Cards: Total Projects, Active Workers, Revenue, Client Satisfaction.
Charts (main.js):
Bar Chart: Monthly Project Progress.
Doughnut Chart: Project Status (Completed vs. Ongoing).
Tables: Recent Client Activity.
Sub-Tabs Implementation: Clicking Sidebar tabs dynamically swaps the Main Content area using JS (hiding/showing divs).

5.7 Login / Sign Up Page (login.html)
Design: Single container centered on screen.
Interaction: "Morph" transition. A "Switch to Signup" button slides the background overlay to reveal the registration form.
Sign Up Form (Stage-wise):
Step 1: Account Info (Name, Email).
Step 2: Security (Password, Confirm).
Step 3: Profile (User Type, Phone).
Next/Back buttons controlled by JS.

5.8 FAQ Page (faq.html)
Search: "How can we help?" search bar.
Accordion: Click question -> Answer slides down.
Categories: General, Pricing, Technical.
Ask Question: Small form at bottom.

5.9 User Dashboard (user-dashboard.html)
Simple Layout:
My Projects: List of projects the user has requested.
Messages: Chat-like interface (UI only).
Profile: Edit details.

5.10 Utility Pages
404.html: "Under Construction" theme illustration. "Go Home" button.
coming-soon.html: Countdown timer (JS), Newsletter subscription.
privacy.html & terms.html: Standard text-heavy legal pages.

6. Functional Requirements (JavaScript)
Navigation:
Handle Dropdown toggles on click/hover for Mobile/Desktop.
Theme Engine:
Check localStorage for saved theme preference on load.
Function to toggle class .dark-mode on <body>.
RTL Engine:
Function to toggle class .rtl-mode on <body>.
rtl-mode sets direction: rtl and flips flex containers.
Mock Data:
Create data.js containing arrays for Projects, Reviews, and FAQs.
Populate HTML dynamically using map() or forEach().
Form Handling:
onsubmit prevent default reload.
Show a "Success" toast notification/modal.

7. Folder Structure
/root
  ├── /assets
  │     ├── /css
  │     │    ├── style.css       (Common css for all)
  │     ├── /js
  │     │    ├── main.js         (common js for all)
  |     |    |__ rtl-toggle.js   (full rtl/ltr toggle functionality)
  |     |    |__ data.js         (mock data for all pages)
  │     ├── /images              (Placeholders)
  │     └── /icons
  ├── index.html
  ├── index2.html
  ├── about.html
  ├── projects.html
  ├── contact.html
  ├── faq.html
  ├── login.html
  ├── admin-dashboard.html
  ├── user-dashboard.html
  ├── 404.html
  ├── coming-soon.html
  ├── privacy_terms.html (common for privacy and terms)