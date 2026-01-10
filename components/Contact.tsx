"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const locationText = "星语小屋 (Xingyu Cabin), Kundasang, 89308 Ranau, Sabah";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(locationText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px]">
              Registry
            </span>
            <h2 className="text-5xl font-bold font-serif text-primary">
              Reach <span className="italic font-light">Out</span>
            </h2>
            <div className="w-12 h-0.5 bg-accent/30 mx-auto rounded-full" />
          </div>

          <div className="relative rounded-[3rem] overflow-hidden bg-white shadow-premium border border-foreground/5 min-h-[600px] flex flex-col lg:flex-row">
            {/* Map Area - No Grayscale */}
            <div className="lg:flex-1 relative order-2 lg:order-1 min-h-[400px] lg:min-h-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.62561955104!2d116.5771917!3d6.0021883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323b99d2c4ba616b%3A0xdc9e6b9b90f2ce56!2z5pif6Kqe5bCP5bGv!5e0!3m2!1sen!2smy!4v1704890000000!5m2!1sen!2smy"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="星语小屋 Location"
                className="absolute inset-0 w-full h-full"
              ></iframe>

              {/* Address Quick Tag - Adjusted for better visibility */}
              <div className="absolute bottom-6 left-6 right-6 hidden md:block">
                <div className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/20 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                        Arrival Point
                      </p>
                      <p className="font-bold text-primary text-sm">
                        Kundasang, 89308 Ranau, Sabah
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={copyToClipboard}
                    className="p-2.5 bg-primary text-white rounded-lg hover:rotate-6 transition-all"
                  >
                    {copied ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Details - "The Desk" */}
            <div className="lg:w-[450px] bg-primary text-white p-10 lg:p-14 flex flex-col justify-between order-1 lg:order-2">
              <div className="space-y-12">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold font-serif leading-tight">
                    Concierge <br />
                    <span className="italic font-light text-secondary">
                      Desk
                    </span>
                  </h3>
                  <p className="text-white/60 font-light text-sm leading-relaxed">
                    Every stay is handled with personal care. Connect with us
                    for exclusive availability and seasonal rates.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/50">
                      Instant Message
                    </p>
                    <a
                      href="https://wa.me/60123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group/item"
                    >
                      <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group-hover/item:bg-secondary group-hover/item:text-primary transition-all">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div className="flex-1 border-b border-white/10 pb-2 group-hover/item:border-secondary transition-colors">
                        <p className="font-bold text-lg">WhatsApp</p>
                      </div>
                      <ExternalLink className="w-4 h-4 opacity-20 group-hover/item:opacity-100" />
                    </a>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/50">
                      Correspondence
                    </p>
                    <a
                      href="mailto:hello@xingyucabin.com"
                      className="flex items-center gap-4 group/item"
                    >
                      <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group-hover/item:bg-white group-hover/item:text-primary transition-all">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="flex-1 border-b border-white/10 pb-2 group-hover/item:border-white transition-colors">
                        <p className="font-bold text-lg">Email Inquiry</p>
                      </div>
                      <ExternalLink className="w-4 h-4 opacity-20 group-hover/item:opacity-100" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-12 flex items-center gap-4 opacity-40">
                <Sparkles className="w-4 h-4 text-secondary" />
                <p className="text-[10px] font-bold uppercase tracking-[0.3em]">
                  Managed with Heart
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
