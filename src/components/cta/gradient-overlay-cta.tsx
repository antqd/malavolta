import { Button } from "@/components/ui/button";
import { Wheat } from "lucide-react";

const GradientOverlayCta = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto">
        <div className="flex h-[620px] items-center justify-center overflow-hidden rounded-2xl bg-[linear-gradient(rgba(45,80,22,0.7),rgba(45,80,22,0.5)),url('https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80')] bg-cover bg-center">
          <div className="flex flex-col items-center gap-8 p-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <Wheat className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-white text-5xl font-bold font-display">
              Inizia la Collaborazione con AgroItalia
            </h2>
            <p className="text-white text-lg max-w-2xl">
              Contattaci per una consulenza gratuita e scopri come possiamo supportare la tua attività agricola con soluzioni su misura.
            </p>
            <div className="flex flex-col justify-center gap-2 sm:flex-row">
              <Button size="lg" variant="default" className="bg-white text-primary hover:bg-white/90">
                Richiedi Preventivo
              </Button>
              <Button size="lg" variant="secondary" className="bg-transparent border-2 border-white text-white hover:bg-white/10">
                Chiamaci Ora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { GradientOverlayCta };