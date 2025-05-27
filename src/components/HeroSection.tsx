import { Button } from './ui/button';

const HeroSection = () => (
  <section 
    id="hero" 
    className="relative min-h-screen flex items-center py-20 text-white"
    aria-label="Law firm hero section"
  >
    {/* Background with overlay */}
    <div 
      className="absolute inset-0 bg-[url('/supreme_court_building_washington_3_7.jpg')] bg-cover bg-center bg-no-repeat"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
    </div>

    {/* Content */}
    <div className="container relative z-10 mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Get Strategic Legal Help with Compassion and Results
          </h1>
          <p className="text-xl text-blue-100/90">
            Serving injury victims, families, and businesses across California
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              asChild 
              className="bg-secondary hover:bg-secondary/80 text-primary font-semibold"
              aria-label="Free case evaluation"
            >
              <a href="#contact">Free Case Evaluation</a>
            </Button>
            <Button 
              variant="outline" 
              asChild 
              className="text-primary hover:bg-white/80"
              aria-label="Learn more about our firm"
            >
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;