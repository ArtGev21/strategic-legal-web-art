'use client';

import { useState, useEffect } from 'react';
import { Scale, FileText, Building, Gavel, Landmark, Handshake, Shield, BookOpen, Briefcase, Home, Users, HeartPulse, Globe, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const legalBlogs = [
  {
    title: "Understanding California Personal Injury Laws",
    description: "Learn about the key aspects of personal injury law in California and how they may affect your case.",
    icon: <Scale className="h-16 w-16 text-primary" />,
    category: "Personal Injury"
  },
  {
    title: "Estate Planning Essentials",
    description: "Discover the importance of estate planning and how to protect your family's future.",
    icon: <FileText className="h-16 w-16 text-primary" />,
    category: "Estate Law"
  },
  {
    title: "Business Formation Guide",
    description: "Choosing the right business structure is crucial for your company's success and protection.",
    icon: <Building className="h-16 w-16 text-primary" />,
    category: "Business Law"
  },
  {
    title: "Navigating Workers' Compensation Claims",
    description: "What every employee should know about filing successful workers' comp claims in California.",
    icon: <Briefcase className="h-16 w-16 text-primary" />,
    category: "Employment Law"
  },
  {
    title: "The Probate Process Explained",
    description: "A step-by-step guide to understanding probate administration in California.",
    icon: <Landmark className="h-16 w-16 text-primary" />,
    category: "Estate Law"
  },
  {
    title: "Mediation vs. Litigation",
    description: "When to choose alternative dispute resolution over courtroom battles.",
    icon: <Handshake className="h-16 w-16 text-primary" />,
    category: "Civil Law"
  },
  {
    title: "Tenant Rights in California",
    description: "Know your rights as a renter in the Golden State's competitive housing market.",
    icon: <Home className="h-16 w-16 text-primary" />,
    category: "Real Estate"
  },
  {
    title: "Intellectual Property Protection",
    description: "Safeguarding your creative works and business innovations.",
    icon: <Shield className="h-16 w-16 text-primary" />,
    category: "Business Law"
  },
  {
    title: "Understanding Class Action Lawsuits",
    description: "When and how consumers can join forces to fight corporate wrongdoing.",
    icon: <Users className="h-16 w-16 text-primary" />,
    category: "Civil Law"
  },
  {
    title: "Medical Malpractice Basics",
    description: "Recognizing when poor medical care becomes legally actionable.",
    icon: <HeartPulse className="h-16 w-16 text-primary" />,
    category: "Personal Injury"
  },
  {
    title: "International Business Considerations",
    description: "Legal factors when expanding your business across borders.",
    icon: <Globe className="h-16 w-16 text-primary" />,
    category: "Business Law"
  },
  {
    title: "The Statute of Limitations Guide",
    description: "Critical deadlines for filing different types of legal claims.",
    icon: <Clock className="h-16 w-16 text-primary" />,
    category: "Legal Basics"
  },
  {
    title: "Small Claims Court Procedures",
    description: "How to effectively pursue claims under $10,000 without an attorney.",
    icon: <Gavel className="h-16 w-16 text-primary" />,
    category: "Civil Law"
  },
  {
    title: "Understanding Contract Law",
    description: "Essential elements that make agreements legally binding.",
    icon: <BookOpen className="h-16 w-16 text-primary" />,
    category: "Business Law"
  }
];

const NewsSection = () => {
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBlogIndex((prevIndex) => (prevIndex + 1) % legalBlogs.length);
    }, 3600000); // Change every hour (3600000ms)

    return () => clearInterval(interval);
  }, []);

  const currentBlog = legalBlogs[currentBlogIndex];

  return (
    <section id="news" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Legal Insights</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-textSecondary max-w-2xl mx-auto">
            Stay up to date on legal trends and practical legal tips
          </p>
        </div>
        
        <div className="flex justify-center">
          <Card className="hover:shadow-lg transition-shadow w-full max-w-2xl">
            <CardContent className="">
              <div className="flex items-center justify-center p-6">
                <div className="h-24 w-24 bg-background rounded-full flex items-center justify-center">
                  {currentBlog.icon}
                </div>
                <div className="pl-6 ">
                  <h3 className="text-2xl font-semibold text-primary">
                    {currentBlog.title}
                  </h3>
                  <span className="text-sm font-medium text-secondary my-2">
                    {currentBlog.category}
                  </span>
                </div>
              </div>
              <p className="text-textSecondary text-lg indent-6">
                {currentBlog.description}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;