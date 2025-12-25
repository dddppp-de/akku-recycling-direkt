import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, Calculator } from "lucide-react";
import { z } from "zod";

const quoteSchema = z.object({
  postalCode: z.string().regex(/^\d{5}$/, "Bitte geben Sie eine gültige PLZ ein (5 Ziffern)"),
  capacity: z.number().min(1, "Kapazität muss mindestens 1 Wh sein").max(10000, "Maximale Kapazität: 10.000 Wh"),
  timeframe: z.enum(["14days", "2months"]),
  customerType: z.enum(["private", "business", "authority"]),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
});

const QuoteForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    postalCode: "",
    capacity: "",
    timeframe: "",
    customerType: "",
    email: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const calculatePrice = () => {
    const capacity = parseFloat(formData.capacity) || 0;
    const rate = formData.timeframe === "14days" ? 0.04 : 0.02;
    const price = capacity * rate;
    return Math.max(price, 20).toFixed(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      quoteSchema.parse({
        postalCode: formData.postalCode,
        capacity: parseFloat(formData.capacity) || 0,
        timeframe: formData.timeframe,
        customerType: formData.customerType,
        email: formData.email,
      });

      setIsSubmitting(true);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast({
        title: "Angebot angefordert!",
        description: `Wir haben Ihre Anfrage erhalten und senden Ihnen in Kürze ein Angebot an ${formData.email}.`,
      });

      setFormData({
        postalCode: "",
        capacity: "",
        timeframe: "",
        customerType: "",
        email: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="angebot" className="py-20 md:py-32 bg-hero-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary-foreground/80 font-semibold text-sm uppercase tracking-wider">Unverbindlich</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-3 mb-4">
              Jetzt Angebot einholen
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Erhalten Sie in wenigen Minuten ein kostenloses, unverbindliches Angebot für Ihre Akku-Entsorgung.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-elevated">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="postalCode">Postleitzahl *</Label>
                <Input
                  id="postalCode"
                  placeholder="z.B. 10115"
                  value={formData.postalCode}
                  onChange={(e) => setFormData({ ...formData, postalCode: e.target.value.slice(0, 5) })}
                  className={errors.postalCode ? "border-destructive" : ""}
                  maxLength={5}
                />
                {errors.postalCode && <p className="text-sm text-destructive">{errors.postalCode}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="capacity">Kapazität (Wh) *</Label>
                <Input
                  id="capacity"
                  type="number"
                  placeholder="z.B. 500"
                  value={formData.capacity}
                  onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                  className={errors.capacity ? "border-destructive" : ""}
                  min={1}
                  max={10000}
                />
                {errors.capacity && <p className="text-sm text-destructive">{errors.capacity}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeframe">Abholzeitraum *</Label>
                <Select value={formData.timeframe} onValueChange={(value) => setFormData({ ...formData, timeframe: value })}>
                  <SelectTrigger className={errors.timeframe ? "border-destructive" : ""}>
                    <SelectValue placeholder="Bitte wählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="14days">Express (14 Tage) – 0,04€/Wh</SelectItem>
                    <SelectItem value="2months">Standard (2 Monate) – 0,02€/Wh</SelectItem>
                  </SelectContent>
                </Select>
                {errors.timeframe && <p className="text-sm text-destructive">{errors.timeframe}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="customerType">Kundenart *</Label>
                <Select value={formData.customerType} onValueChange={(value) => setFormData({ ...formData, customerType: value })}>
                  <SelectTrigger className={errors.customerType ? "border-destructive" : ""}>
                    <SelectValue placeholder="Bitte wählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="private">Privatperson</SelectItem>
                    <SelectItem value="business">Unternehmen</SelectItem>
                    <SelectItem value="authority">Behörde</SelectItem>
                  </SelectContent>
                </Select>
                {errors.customerType && <p className="text-sm text-destructive">{errors.customerType}</p>}
              </div>

              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="email">E-Mail-Adresse *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ihre@email.de"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={errors.email ? "border-destructive" : ""}
                  maxLength={255}
                />
                {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
              </div>
            </div>

            {formData.capacity && formData.timeframe && (
              <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
                <div className="flex items-center gap-3">
                  <Calculator className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Geschätzter Preis</p>
                    <p className="text-2xl font-bold text-primary">{calculatePrice()}€</p>
                  </div>
                </div>
              </div>
            )}

            <Button type="submit" size="lg" className="w-full mt-8" disabled={isSubmitting}>
              {isSubmitting ? (
                "Wird gesendet..."
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Unverbindliches Angebot anfordern
                </>
              )}
            </Button>

            <p className="text-sm text-muted-foreground text-center mt-4">
              * Pflichtfelder. Ihre Daten werden vertraulich behandelt.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
