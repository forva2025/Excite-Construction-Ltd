# Excite Construction Ltd - Company Website

A modern, responsive website for Excite Construction Limited, a leading construction company in Uganda specializing in civil construction and building projects since 2014.

## 🏗️ About Excite Construction Ltd

**Excite Construction Limited** is Uganda's premier construction company specializing in residential, commercial, and institutional building projects. Founded in 2014 and headquartered in Kampala, Uganda, we provide professional construction services with quality civil engineering solutions.

### Company Details
- **Founded:** 2014
- **Headquarters:** Kampala, Uganda
- **Address:** Plot 19, Robert Mugabe Road, P.O Box 10455, Kampala, Uganda
- **Industry:** Civil Construction & Building
- **Employees:** 11-50
- **Website:** [exciteconstruction.com](https://exciteconstruction.com)

### Contact Information
- **Phone:** +256 701 084 131
- **WhatsApp:** +256 701 084 131
- **Fax:** +256 776 084 131
- **Email:** exciteconstruction@gmail.com

## 🌟 Features

### 🎨 Modern Design
- **Responsive Design:** Fully responsive across all devices (desktop, tablet, mobile)
- **Dark/Light Mode:** Toggle between dark and light themes
- **Professional UI/UX:** Clean, modern interface with smooth animations
- **Accessibility:** WCAG compliant with proper semantic HTML

### 🚀 Interactive Elements
- **Smooth Scrolling:** Enhanced navigation experience
- **Animated Counters:** Dynamic statistics display
- **Project Gallery:** Expandable project showcase with "View All" functionality
- **Testimonials Slider:** Client testimonials carousel
- **Contact Form:** Interactive contact form with validation
- **Mobile Navigation:** Hamburger menu for mobile devices

### 📱 Responsive Sections
1. **Hero Section** - Company introduction with call-to-action buttons
2. **About Section** - Company mission and vision
3. **Services Section** - Four main service offerings
4. **Featured Projects** - Portfolio showcase (15 projects)
5. **Our Team** - Team member profiles
6. **Client Testimonials** - Customer feedback
7. **Contact Section** - Contact form and information
8. **Footer** - Links, contact info, and social media

## 🛠️ Technical Stack

### Frontend Technologies
- **HTML5** - Semantic markup with proper SEO optimization
- **CSS3** - Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (ES6+)** - Interactive functionality and DOM manipulation
- **Font Awesome** - Icon library for UI elements
- **Google Fonts** - Inter font family for typography

### Key Libraries & Frameworks
- **AOS (Animate On Scroll)** - Scroll-triggered animations
- **Font Awesome 6.4.0** - Icon library
- **Google Fonts** - Inter font family

### SEO & Performance
- **Structured Data** - JSON-LD schema markup
- **Open Graph** - Social media sharing optimization
- **Twitter Cards** - Twitter sharing optimization
- **Meta Tags** - Comprehensive SEO meta tags
- **Sitemap** - XML sitemap for search engines
- **Robots.txt** - Search engine crawling instructions

## 📁 Project Structure

```
Excite-Construction-Ltd/
├── index.html              # Main HTML file
├── style.css               # Main stylesheet (2,607 lines)
├── app.js                  # JavaScript functionality (787 lines)
├── .cpanel.yml             # cPanel deployment configuration
├── script.py               # Data compilation script
├── robots.txt              # SEO robots file
├── sitemap.xml             # XML sitemap
├── LICENSE                 # MIT License
├── README.md               # Project documentation
│
├── Images/
│   ├── excite black.png    # Main logo (black version)
│   ├── excite yello bg.png # Main logo (yellow background)
│   ├── excite logo.jfif    # Alternative logo
│   ├── bagnrd.jpg          # Background image
│   └── project1.png - project15.png # Project portfolio images
│
└── .git/                   # Git repository
```

## 🎯 Services Offered

1. **Building & Civil Construction**
   - Complete building construction services from foundation to finishing
   - Residential and commercial structures

2. **Plan Development & Design**
   - Professional architectural planning and design services
   - Tailored to client needs and specifications

3. **Project Management**
   - End-to-end project management
   - From conception through implementation and delivery

4. **Civil Engineering**
   - Expert civil engineering solutions
   - Infrastructure and development projects

## 🏆 Featured Projects

The website showcases 15 featured projects including:

- **Proposed Gayaza Hospital** - Healthcare facility construction
- **Proposed Shades For Mutukula Regional Market** - 10 Market Shades (1.7B Shillings)
- **Completed Farm House Structures In Kapeeka** - Farm House & Piggery (125M Shillings)
- **Proposed Residential Development in Kiira** - Two-storied structure (1.4B Shillings)
- **Completed Tujja Victoria Nursery & Primary School** - Educational facility (2.3B Shillings)
- **Proposed Sub-contract for SGS Traffic Verification Centre** - Warehouse fittings (200M Shillings)
- **Construction of Residential House in Kayunga** - Residential construction (320M Shillings)
- **Proposed Construction of Residential House in Sonde** - Residential development (420M Shillings)
- **Proposed Acholi Inn Hotel in Gulu** - Hotel construction & renovation (8B Shillings)

*And 6 additional projects showcasing the company's diverse portfolio.*

## 🚀 Deployment

### cPanel Deployment
The project is configured for automatic deployment to cPanel hosting using the `.cpanel.yml` configuration file.

**Deployment Features:**
- Automatic file copying to public_html directory
- Proper file permissions (644 for files)
- Error page creation (404.shtml, 403.shtml)
- .htaccess management for proper server configuration
- Comprehensive logging for deployment tracking

### Manual Deployment
1. Upload all files to your web server's public directory
2. Ensure proper file permissions (644 for files, 755 for directories)
3. Configure your web server to serve `index.html` as the default page
4. Update any hardcoded URLs in the files if necessary

## 🎨 Design System

### Color Palette
- **Primary Colors:** Yellow (#FFD700) and Black (#000000)
- **Background:** Dark mode default with light mode toggle
- **Text Colors:** Optimized for both dark and light themes
- **Accent Colors:** Professional teal and orange accents

### Typography
- **Primary Font:** Inter (Google Fonts)
- **Weights:** 300, 400, 500, 600, 700
- **Responsive:** Scales appropriately across devices

### Layout
- **Grid System:** CSS Grid and Flexbox for responsive layouts
- **Breakpoints:** Mobile-first responsive design
- **Spacing:** Consistent spacing system using CSS custom properties

## 📱 Browser Support

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## 🔧 Development

### Local Development
1. Clone the repository
2. Open `index.html` in a web browser
3. For development with live reload, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

### File Organization
- **HTML:** Semantic structure with proper accessibility
- **CSS:** Modular styles with custom properties and responsive design
- **JavaScript:** Modular functions with event-driven architecture

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email exciteconstruction@gmail.com or call +256 701 084 131.

## 🌐 Live Website

Visit the live website at: [https://exciteconstruction.com](https://exciteconstruction.com)

---

**Excite Construction Ltd** - Building With Excellence, Precision, and Passion since 2014.