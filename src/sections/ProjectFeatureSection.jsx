import React from 'react';
import ProjectFeatureLayout from '../components/ProjectFeatureLayout';

const ProjectFeatureSection = () => {
    const frontendFeatures = [
        {
            id: 1,
            number: 1,
            feature: "Modern UI Design",
            description: "Clean, contemporary interface with product browsing, advanced filtering options, and intuitive navigation that guides users naturally through their shopping journey."
        },
        {
            id: 2,
            number: 2,
            feature: "Smart Search System",
            description: "Intelligent search functionality that allows customers to find products by category, keyword, and price range with real - time suggestions and autocomplete."
        },
        {
            id: 3,
            number: 3,
            feature: "Mobile Responsive Design",
            description: "Fully optimized for all devices and screen sizes, ensuring a consistent shopping experience across desktop, tablet, and mobile platforms."
        },
        {
            id: 4,
            number: 4,
            feature: "Interactive Product Gallery",
            description: "Rich media experience with high - resolution image zoom, 360 - degree product preview, and multiple angle viewing for detailed visualization.."
        },



    ];
    const backendFeatures = [
        {
            id: 1,
            number: 1,
            feature: "JWT-Based Authentication",
            description: "Secure login and registration system using JSON Web Tokens, providing stateless authentication."
        },
        {
            id:2 ,
            number: 2,
            feature: "Role - Based Access Control",
            description: "Sophisticated permission system with separate Admin and Customer panels, ensuring proper access control."
        },
        {
            id:3 ,
            number:3 ,
            feature: "Order Management System",
            description: "Comprehensive order tracking and management tools that streamline operations from purchase to delivery."
        },
        {
            id: 4,
            number: 4,
            feature: "Integrated Payment Gateway",
            description: "Multiple payment options including Stripe, SSLCommerz, and PayPal integration, providing flexible payment solutions."
        },
        {
            id: 5,
            number:5 ,
            feature: "Dashboard Analytics",
            description: "    Real - time business intelligence with comprehensive sales tracking, revenue analysis, and operational insights. "
        }
    ]
return (
    <section className="py-5 lg:py-10">
        <div className="container">
            <div className="mobile-padding space-y-5 lg:space-y-10">
                <ProjectFeatureLayout
                    heading={"Core Features ( Frontend ) "}
                    description={"The frontend experience is designed to provide customers with an intuitive, fast, and engaging shopping journey.It is crafted to convert browsers into buyers through seamless navigation and powerful search capabilities."}
                    features={frontendFeatures}
                />
                <ProjectFeatureLayout
                    heading={"Core Features (Backend)"}
                    description={"The backend infrastructure provides enterprise-level security, comprehensive management tools, and advanced analytics."}
                    features={backendFeatures}
                />
            </div>
        </div>
    </section>
);
};

export default ProjectFeatureSection;