import { Scale } from 'lucide-react';
import { Shield, Users } from 'lucide-react';

const AboutSection = () => (
  <section id="about" className="py-20 bg-surface">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Attorney Daniel Repchian</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-textPrimary leading-relaxed indent-6">
              At Repchian Law Firm, you are working directly with the our founding attorney Daniel Repchian, a former defense attorney and experienced plaintiff attorney who uses his knowledge & experience to advocate for clients who’ve been injured, wronged, or need legacy planning. With Daniel Repchian’s proven track record—recovering over $1 million for injury clients—our firm combines strategic insight with fierce advocacy for individuals, families, and businesses across California.
            </p>
            <p className="text-lg text-textPrimary leading-relaxed indent-6">
              Whether navigating a serious personal injury, drafting a customized estate plan, or guiding your business through formation and compliance, we bring clarity, compassion, and skill to every case.</p>
            <div className="flex items-center space-x-4">
              <Shield className="h-6 w-6 text-secondary" />
              <span className="text-textPrimary">Licensed in California</span>
            </div>
            <div className="flex items-center space-x-4">
              <Users className="h-6 w-6 text-secondary" />
              <span className="text-textPrimary">Hundreds of successful cases</span>
            </div>
          </div> 
          <div className="bg-background rounded-lg p-8 text-center w-full h-full items-center ">
            <div className="w-32 h-32 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
              <Scale className="h-16 w-16 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-primary">Daniel Repchian</h3>
            <p className="text-textSecondary">Attorney at Law</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;