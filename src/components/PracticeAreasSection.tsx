import { Card, CardContent } from './ui/card';
import { Car, Brain, FileText, Building, Briefcase, Shield } from 'lucide-react';

const PracticeAreasSection = () => (
  <section id="practice-areas" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Practice Areas</h2>
        <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
        <p className="text-lg text-textSecondary max-w-2xl mx-auto">
          Comprehensive legal services tailored to meet your specific needs
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <Car className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-3">Vehicle Accidents</h3>
            <ul className="space-y-2 text-textSecondary">
              <li>• Car Accidents</li>
              <li>• Truck Accidents</li>
              <li>• Motorcycle Accidents</li>
              <li>• Rideshare Accidents</li>
              <li>• Bus Accidents</li>
              <li>• Bicycle Accidents</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <Brain className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-3">Personal Injury</h3>
            <ul className="space-y-2 text-textSecondary">
              <li>• Pedestrian Accidents</li>
              <li>• Brain & Spine Injuries</li>
              <li>• Catastrophic Injuries</li>
              <li>• Dog Bites</li>
              <li>• Slip & Fall</li>
              <li>• Wrongful Death</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <FileText className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-3">Estate & Trusts</h3>
            <ul className="space-y-2 text-textSecondary">
              <li>• Estate Planning</li>
              <li>• Probate</li>
              <li>• Trust Administration</li>
              <li>• Business Succession</li>
              <li>• Premarital Agreements</li>
              <li>• Wills & Trusts</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <Building className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-3">Business Organizations</h3>
            <ul className="space-y-2 text-textSecondary">
              <li>• LLC Formation</li>
              <li>• Corporation Formation</li>
              <li>• Business Transactions</li>
              <li>• Contract Review</li>
              <li>• Partnership Agreements</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <Briefcase className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-3">Employment & Labor</h3>
            {/* <ul className="space-y-2 text-textSecondary">
              <li>• Workplace Discrimination</li>
              <li>• Wrongful Termination</li>
              <li>• Wage & Hour Disputes</li>
              <li>• Sexual Harassment</li>
              <li>• Employment Contracts</li>
            </ul> */}
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <Shield className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-3">Compliance</h3>
            {/* <ul className="space-y-2 text-textSecondary">
              <li>• Regulatory Compliance</li>
              <li>• Risk Assessment</li>
              <li>• Policy Development</li>
              <li>• Compliance Training</li>
              <li>• Audit Support</li>
            </ul> */}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default PracticeAreasSection;