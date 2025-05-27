import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from './ui/use-toast';

const CaseEvaluationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    helpType: '',
    injured: '',
    consent: false,
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.consent) newErrors.consent = 'You must consent to be contacted';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      toast({
        title: "Case Evaluation Submitted",
        description: "We'll contact you within 24 hours to discuss your case."
      });
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        helpType: '',
        injured: '',
        consent: false,
        message: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">First Name *</Label>
          <Input id="firstName" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className={errors.firstName ? 'border-danger' : ''} aria-describedby={errors.firstName ? 'firstName-error' : undefined} />
          {errors.firstName && <p id="firstName-error" className="text-danger text-sm mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <Label htmlFor="lastName">Last Name *</Label>
          <Input id="lastName" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className={errors.lastName ? 'border-danger' : ''} aria-describedby={errors.lastName ? 'lastName-error' : undefined} />
          {errors.lastName && <p id="lastName-error" className="text-danger text-sm mt-1">{errors.lastName}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="phone">Phone Number *</Label>
        <Input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={errors.phone ? 'border-danger' : ''} aria-describedby={errors.phone ? 'phone-error' : undefined} />
        {errors.phone && <p id="phone-error" className="text-danger text-sm mt-1">{errors.phone}</p>}
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      </div>

      <div>
        <Label htmlFor="helpType">How Can We Help?</Label>
        <Select value={formData.helpType} onValueChange={(value) => setFormData({ ...formData, helpType: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select practice area" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="vehicle-accident">Vehicle Accident</SelectItem>
            <SelectItem value="personal-injury">Personal Injury</SelectItem>
            <SelectItem value="estate-trusts">Estate & Trusts</SelectItem>
            <SelectItem value="business">Business Organizations</SelectItem>
            <SelectItem value="employment">Employment & Labor</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Were You Injured?</Label>
        <RadioGroup value={formData.injured} onValueChange={(value) => setFormData({ ...formData, injured: value })} className="mt-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="injured-yes" />
            <Label htmlFor="injured-yes">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="injured-no" />
            <Label htmlFor="injured-no">No</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <Label htmlFor="message">Brief Description (Optional)</Label>
        <Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={3} />
      </div>

      <div className="flex items-start space-x-2">
        <Checkbox id="consent" checked={formData.consent} onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })} className={errors.consent ? 'border-danger' : ''} />
        <Label htmlFor="consent" className="text-sm leading-tight">
          I expressly consent to receive communications from Repchian Law Firm, APC including calls, texts, emails, and/or automated messages and confirm that the submitted information provided is mine. By submitting this form, I agree to the Terms and acknowledge the Privacy Policy. *
        </Label>
      </div>
      {errors.consent && <p className="text-danger text-sm">{errors.consent}</p>}

      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
        Submit Case
      </Button>
    </form>
  );
};

const ContactSection = () => (
  <section id="contact" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Contact Us</h2>
        <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
        <p className="text-lg text-textSecondary max-w-2xl mx-auto">
          Ready to discuss your case? Contact us today for a free consultation.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="p-12">
          <CardContent className="space-y-8">
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-primary">Phone</h3>
                <p className="text-textSecondary">(555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-primary">Email</h3>
                <p className="text-textSecondary">info@repchianlaw.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-primary">Office</h3>
                <p className="text-textSecondary">
                  123 Legal Street<br />
                  Los Angeles, CA 90210
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="p-6">
          <CardContent>
            <h3 className="text-xl font-semibold text-primary mb-4">Get Your Free Case Evaluation</h3>
            <CaseEvaluationForm />
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default ContactSection;