// Data Generator
const projectCategories = ['Residential', 'Commercial', 'Industrial', 'Interior'];
const locations = ['New York, USA', 'London, UK', 'Berlin, Germany', 'Tokyo, Japan', 'Paris, France', 'Dubai, UAE', 'Toronto, Canada', 'Sydney, Australia'];
const images = [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1553434320-e9f5757140b1?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1571896349842-6e5a513e610a?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1479839672679-a455b1809a2c?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600'
];

const projects = [];
let pId = 1;

projectCategories.forEach(cat => {
    for (let i = 1; i <= 35; i++) {
        projects.push({
            id: pId++,
            title: `${cat} Project ${i}`,
            category: cat,
            location: locations[Math.floor(Math.random() * locations.length)],
            image: images[Math.floor(Math.random() * images.length)],
            budget: `${Math.floor(Math.random() * 50) + 1}M`,
            roi: `${Math.floor(Math.random() * 20) + 5}%`,
            desc: `A premium ${cat.toLowerCase()} development focusing on sustainability and modern aesthetics.`
        });
    }
});

const faqCategories = {
    'General': 'General Questions',
    'Pricing': 'Pricing & Costs',
    'Technical': 'Technical Details',
    'Support': 'Support & Warranty'
};

const faqs = [
    // General Questions
    {
        category: 'General',
        question: 'How long has BuildWith been in the construction industry?',
        answer: 'BuildWith has been constructing excellence since 1999, bringing over 25 years of experience in residential, commercial, industrial, and interior construction projects. We have successfully completed hundreds of projects worldwide.'
    },
    {
        category: 'General',
        question: 'What types of construction projects do you specialize in?',
        answer: 'We specialize in four main categories: Residential (homes, apartments, condos), Commercial (offices, retail spaces, hotels), Industrial (factories, warehouses, manufacturing facilities), and Interior (renovations, fit-outs, and design). Each project is handled by specialized teams with expertise in that domain.'
    },
    {
        category: 'General',
        question: 'In which locations do you operate?',
        answer: 'We operate globally with major presence in New York USA, London UK, Berlin Germany, Tokyo Japan, Paris France, Dubai UAE, Toronto Canada, and Sydney Australia. We can also accommodate special projects in other locations upon request.'
    },
    {
        category: 'General',
        question: 'What makes BuildWith different from other construction companies?',
        answer: 'Our commitment to safety, quality, and timeliness sets us apart. We use cutting-edge technology including AI-driven design, sustainable materials, and smart building integration. Our glassmorphic approach to modern architecture combined with traditional craftsmanship ensures excellence in every project.'
    },
    {
        category: 'General',
        question: 'Do you offer consultation services before starting a project?',
        answer: 'Yes, we provide complimentary initial consultations to discuss your vision, requirements, and budget. Our expert team will assess the feasibility and provide professional recommendations to help you make informed decisions.'
    },
    
    // Pricing & Costs
    {
        category: 'Pricing',
        question: 'How do you calculate project costs?',
        answer: 'Project costs are calculated based on several factors including project size (square footage), complexity, location, materials selected, labor requirements, and timeline. We provide detailed, transparent estimates with itemized breakdowns so you understand exactly where your investment goes.'
    },
    {
        category: 'Pricing',
        question: 'What is the typical budget range for residential projects?',
        answer: 'Residential projects typically range from $200,000 to $5M+ depending on size and specifications. A standard family home renovation might start at $200K, while luxury custom builds can exceed $5M. We offer projects across all budget ranges to accommodate different needs.'
    },
    {
        category: 'Pricing',
        question: 'Do you provide financing options?',
        answer: 'Yes, we partner with leading financial institutions to offer flexible financing options for qualified clients. Our team can help you explore various financing solutions including construction loans, home equity lines, and payment plans to make your project more accessible.'
    },
    {
        category: 'Pricing',
        question: 'What is included in the project estimate?',
        answer: 'Our comprehensive estimates include materials, labor, equipment, permits, insurance, project management, safety measures, waste disposal, and contingency funds. We provide detailed line-item breakdowns so there are no surprises during construction.'
    },
    {
        category: 'Pricing',
        question: 'How accurate are your ROI projections?',
        answer: 'Our ROI calculator uses industry data, local market trends, and historical performance to provide estimates typically within 5-10% accuracy. Actual returns depend on market conditions, property location, and quality of execution. We have achieved average ROI increases of 15-25% across our completed projects.'
    },
    {
        category: 'Pricing',
        question: 'Are there any hidden costs I should be aware of?',
        answer: 'We maintain complete transparency - there are no hidden costs. All potential expenses are outlined in the initial estimate. However, client-initiated changes, unforeseen site conditions, or premium material upgrades may incur additional costs, which are always discussed and approved before proceeding.'
    },
    
    // Technical Details
    {
        category: 'Technical',
        question: 'What building codes and standards do you follow?',
        answer: 'We strictly adhere to all local, national, and international building codes including IBC (International Building Code), OSHA safety standards, ADA compliance, and environmental regulations. Our projects undergo rigorous inspections at every phase to ensure full compliance.'
    },
    {
        category: 'Technical',
        question: 'Do you use sustainable and eco-friendly materials?',
        answer: 'Absolutely. Sustainability is a core value at BuildWith. We use eco-friendly materials including recycled steel, bamboo reinforcement, low-VOC paints, solar panels, energy-efficient HVAC systems, and self-healing concrete. We can achieve LEED certification for projects upon request.'
    },
    {
        category: 'Technical',
        question: 'What technology do you use in your construction process?',
        answer: 'We leverage advanced technologies including BIM (Building Information Modeling), AI-driven generative design, drone surveys, 3D printing for prototypes, IoT sensors for smart building integration, and project management software for real-time tracking and communication.'
    },
    {
        category: 'Technical',
        question: 'How do you ensure structural safety and integrity?',
        answer: 'Safety is our top priority. We employ certified structural engineers, conduct soil testing, use advanced simulation software for stress analysis, perform regular safety audits, maintain strict quality control protocols, and use only premium-grade materials that meet or exceed industry standards.'
    },
    {
        category: 'Technical',
        question: 'Can you integrate smart home technology into the construction?',
        answer: 'Yes, we specialize in smart building integration. This includes automated lighting, climate control, security systems, voice-activated controls, energy monitoring, and IoT-connected appliances. We design infrastructure to accommodate current and future smart technologies.'
    },
    {
        category: 'Technical',
        question: 'What is your approach to earthquake and disaster-resistant construction?',
        answer: 'In seismic zones, we implement advanced engineering techniques including base isolation, reinforced concrete frameworks, flexible joint systems, and shock-absorbing materials. Our structures are designed to withstand natural disasters while ensuring occupant safety.'
    },
    
    // Support & Warranty
    {
        category: 'Support',
        question: 'What warranty do you provide on completed projects?',
        answer: 'We offer a comprehensive 10-year structural warranty, 5-year warranty on major systems (HVAC, plumbing, electrical), and 2-year warranty on finishes and fixtures. Extended warranty options are available. All warranties are fully transferable to future owners.'
    },
    {
        category: 'Support',
        question: 'What is your response time for support requests?',
        answer: 'We pride ourselves on rapid response times. For urgent issues, we respond within 4 hours. For standard support queries, you will receive a response within 24 hours on business days. Emergency situations are handled immediately with 24/7 on-call teams.'
    },
    {
        category: 'Support',
        question: 'Do you offer post-construction maintenance services?',
        answer: 'Yes, we offer comprehensive maintenance packages including regular inspections, preventive maintenance, repairs, seasonal servicing, and emergency support. Our maintenance programs are customizable to fit your specific needs and budget.'
    },
    {
        category: 'Support',
        question: 'What happens if issues arise after project completion?',
        answer: 'If any issues arise during the warranty period, contact us immediately. Our team will assess the situation, determine if it is covered under warranty, and dispatch technicians to resolve the issue promptly at no additional cost if covered. Customer satisfaction is our priority.'
    },
    {
        category: 'Support',
        question: 'Can I make changes or additions after the project is completed?',
        answer: 'Absolutely. We welcome the opportunity to work with you on future modifications, additions, or upgrades. Since we built the original structure, we have complete knowledge of the building systems and can seamlessly integrate new changes.'
    },
    {
        category: 'Support',
        question: 'How can I track my project progress?',
        answer: 'All clients receive access to our User Dashboard where you can track real-time project progress, view updates, communicate with project managers, access documents, review timelines, and receive notifications. We believe in complete transparency throughout the construction process.'
    }
];

const news = [
    {
        id: 1,
        title: "Sustainable Building Trends 2025",
        excerpt: "Exploring the future of eco-friendly construction materials including self-healing concrete and bamboo reinforcement.",
        date: "Dec 10, 2024",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=500"
    },
    {
        id: 2,
        title: "Smart Cities Integration",
        excerpt: "How IOT is reshaping urban infrastructure to create more efficient and livable environments for future generations.",
        date: "Nov 25, 2024",
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=500"
    },
    {
        id: 3,
        title: "AI in Architecture",
        excerpt: "Generative design is allowing architects to explore thousands of structural variations in minutes.",
        date: "Oct 15, 2024",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=500"
    }
];

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Homeowner",
        text: "BuildWith transformed our vision into reality. The attention to detail was impeccable.",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        name: "Michael Chang",
        role: "CEO, TechFlow",
        text: "The most professional construction firm we've worked with. Delivered our new HQ ahead of schedule.",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    }
];

const team = [
    {
        name: "David Sterling",
        role: "Chief Architect",
        image: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
        name: "Elena Rodriguez",
        role: "Project Director",
        image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
        name: "Marcus Chen",
        role: "Lead Engineer",
        image: "https://randomuser.me/api/portraits/men/22.jpg"
    }
];
