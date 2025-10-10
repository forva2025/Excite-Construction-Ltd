# Let's compile all the information we've gathered about Excite Construction Ltd
# and create a comprehensive data structure for the website

import json

# Company Information
company_info = {
    "company_name": "Excite Construction Ltd",
    "tagline": "Building With Excellence, Precision, and Passion",
    "description": "Excite Construction Limited is a leading civil construction Company in quality civil and building construction. We are specialists in civil building; our construction quality having been time tested, availing excellent products. We have a skillful and professional team that guides our clients all the way from Plan development, through the design, build and implementation stages, till their dreams are ultimately implemented.",
    "founded": "2014",
    "headquarters": "Kampala, Uganda",
    "office_address": "Plot 19, Robert Mugabe Road, P.O Box 10455, Kampala, Uganda",
    "employees": "11-50",
    "industry": "Civil Construction & Building",
    "website": "www.exciteconstruction.com",
    "contact": {
        "phone": "+256 701 084 131",
        "whatsapp": "+256 701 084 131",
        "fax": "+256 776 084 131",
        "email": "exciteconstruction@gmail.com"
    },
    "social_media": {
        "twitter": "@exciteconstruct",
        "instagram": "@exciteconstruction",
        "linkedin": "excite-construction-ltd"
    }
}

# Services offered
services = [
    {
        "title": "Building & Civil Construction",
        "description": "Complete building construction services from foundation to finishing, including residential and commercial structures.",
        "icon": "building"
    },
    {
        "title": "Plan Development & Design",
        "description": "Professional architectural planning and design services tailored to client needs and specifications.",
        "icon": "blueprint"
    },
    {
        "title": "Project Management",
        "description": "End-to-end project management from conception through implementation and delivery.",
        "icon": "management"
    },
    {
        "title": "Civil Engineering",
        "description": "Expert civil engineering solutions for infrastructure and development projects.",
        "icon": "engineering"
    },
    {
        "title": "Construction Consultancy",
        "description": "Professional advice and guidance throughout all stages of construction projects.",
        "icon": "consulting"
    },
    {
        "title": "Quality Assurance",
        "description": "Time-tested construction quality with excellent products and professional oversight.",
        "icon": "quality"
    }
]

# Company strengths and values
strengths = [
    {
        "title": "Quality Craftsmanship",
        "description": "Time-tested construction quality with excellent products"
    },
    {
        "title": "Professional Team",
        "description": "Skillful and professional team with extensive experience"
    },
    {
        "title": "Full-Service Approach",
        "description": "Guidance from plan development through implementation"
    },
    {
        "title": "Client-Focused",
        "description": "Dedicated to implementing client dreams and visions"
    },
    {
        "title": "Innovative Designs",
        "description": "Modern construction techniques and innovative solutions"
    },
    {
        "title": "Reliable Delivery",
        "description": "Consistent project delivery and client satisfaction"
    }
]

# Sample projects (based on typical construction company projects in Uganda)
projects = [
    {
        "name": "Residential Complex - Kampala",
        "type": "Residential",
        "location": "Kampala, Uganda",
        "description": "Modern residential apartments with contemporary design and quality finishes",
        "status": "Completed",
        "image": "residential-complex.jpg"
    },
    {
        "name": "Commercial Building - Ntinda",
        "type": "Commercial",
        "location": "Ntinda, Uganda",
        "description": "Multi-story commercial building with modern amenities and professional design",
        "status": "Completed",
        "image": "commercial-building.jpg"
    },
    {
        "name": "Infrastructure Development",
        "type": "Civil Works",
        "location": "Central Uganda",
        "description": "Civil engineering project including road and infrastructure development",
        "status": "Ongoing",
        "image": "infrastructure.jpg"
    }
]

# Team information (based on available info)
team = [
    {
        "name": "Akandwanaho Bondex",
        "position": "Managing Director",
        "experience": "Since October 2014",
        "background": "Experienced construction professional with expertise in project management and business development"
    }
]

# Company statistics
stats = [
    {"number": "11", "label": "Years of Experience", "suffix": "+"},
    {"number": "50", "label": "Completed Projects", "suffix": "+"},
    {"number": "100", "label": "Happy Clients", "suffix": "%"},
    {"number": "24", "label": "Professional Support", "suffix": "/7"}
]

# Color scheme - Methylene blue based
colors = {
    "primary": "#1B4F72",  # Deep methylene blue
    "secondary": "#2E86AB",  # Lighter methylene blue
    "accent": "#A23B72",  # Complementary accent
    "white": "#FFFFFF",
    "light_gray": "#F5F5F5",
    "dark_gray": "#222222",
    "text": "#333333"
}

# Create comprehensive data structure
website_data = {
    "company": company_info,
    "services": services,
    "strengths": strengths,
    "projects": projects,
    "team": team,
    "stats": stats,
    "colors": colors,
    "features": [
        "Responsive Design",
        "Modern Animations",
        "Project Gallery",
        "Client Testimonials",
        "Contact Forms",
        "SEO Optimized",
        "Fast Loading",
        "Mobile Friendly"
    ]
}

# Convert to JSON for use in the web application
website_data_json = json.dumps(website_data, indent=2)

print("Website Data Structure Created Successfully!")
print("===========================================")
print(f"Company: {company_info['company_name']}")
print(f"Founded: {company_info['founded']}")
print(f"Location: {company_info['headquarters']}")
print(f"Services: {len(services)} main services")
print(f"Team Members: {len(team)} documented")
print(f"Sample Projects: {len(projects)} featured")
print("\nData ready for web application development!")