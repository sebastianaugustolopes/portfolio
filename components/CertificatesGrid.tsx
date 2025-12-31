"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Certificate } from "@/db/schema";

const CertificatesGrid = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCertificates() {
      try {
        const res = await fetch("/api/certificates");
        const data = await res.json();
        setCertificates(data);
      } catch (error) {
        console.error("Error fetching certificates:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCertificates();
  }, []);

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-48 bg-secondary/30 rounded-xl animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {certificates.map((cert, index) => (
        <Card 
          key={cert.id} 
          variant="glow"
          className="overflow-hidden group"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {cert.image && (
            <div className="relative w-full h-48 overflow-hidden">
              <Image 
                src={cert.image} 
                alt={cert.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent z-10" />
            </div>
          )}
          <CardContent className="p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                  {cert.name}
                </h3>
                <p className="text-primary font-medium">{cert.institution}</p>
              </div>
              
              <div className="flex items-center gap-1 text-muted-foreground text-sm">
                <Calendar size={14} />
                {new Date(cert.date).getFullYear()}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CertificatesGrid;

