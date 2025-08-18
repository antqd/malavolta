import { Linkedin, Mail } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  avatar: string;
  email?: string;
  linkedin?: string;
}

interface CenteredTeamCardsProps {
  heading?: string;
  subheading?: string;
  description?: string;
  members?: TeamMember[];
}

// Use DiceBear API for avatars
const AgricolturaTeamMembers = [
  {
    id: "team-1",
    name: "Marco Rossi",
    role: "Direttore Generale",
    description: "35 anni di esperienza in agricoltura",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Marco%20Rossi",
    email: "#",
    linkedin: "#",
  },
  {
    id: "team-2",
    name: "Elena Bianchi",
    role: "Agronomo Senior",
    description: "Specialista in consulenza tecnica",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Elena%20Bianchi",
    email: "#",
    linkedin: "#",
  },
  {
    id: "team-3",
    name: "Giuseppe Verdi",
    role: "Responsabile Ricambi",
    description: "Esperto meccatronica agricola",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Giuseppe%20Verdi",
    email: "#",
    linkedin: "#",
  },
  {
    id: "team-4",
    name: "Francesca Neri",
    role: "Customer Care",
    description: "Supporto clienti e ordini",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Francesca%20Neri",
    email: "#",
    linkedin: "#",
  },
];

const CenteredTeamCards = ({
  heading = "Il Nostro Team",
  description = "Professionisti qualificati con esperienza pluriennale nel settore agricolo, sempre al vostro fianco",
  members = AgricolturaTeamMembers,
}: CenteredTeamCardsProps) => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight lg:text-5xl text-primary font-display">
            {heading}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
            {description}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <div key={member.id} className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <Avatar className="size-20 lg:size-24">
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback className="text-lg font-semibold">
                      {member.name}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="mb-6">
                  <h3 className="mb-1 text-lg font-semibold font-display">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {member.description}
                  </p>
                </div>
                <div className="flex gap-3">
                  {member.email && (
                    <a
                      href={member.email}
                      className="bg-muted/50 hover:bg-muted transition-colors rounded-lg p-2"
                    >
                      <Mail className="text-muted-foreground size-4" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      className="bg-muted/50 hover:bg-muted transition-colors rounded-lg p-2"
                    >
                      <Linkedin className="text-muted-foreground size-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { CenteredTeamCards };