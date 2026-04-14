"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const allImages = [
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop", alt: "Stamped concrete driveway", category: "Driveways" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop", alt: "Modern concrete patio", category: "Patios" },
  { src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop", alt: "Concrete sidewalk leading to home", category: "Sidewalks" },
  { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop", alt: "Colored concrete patio design", category: "Colors" },
  { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop", alt: "Concrete foundation work", category: "Foundations" },
  { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=400&fit=crop", alt: "Decorative stamped concrete", category: "Colors" },
  { src: "https://images.unsplash.com/photo-1600573472591-ee6c563aaec3?w=600&h=400&fit=crop", alt: "Residential driveway installation", category: "Driveways" },
  { src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=400&fit=crop", alt: "Backyard patio pour", category: "Patios" },
  { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop", alt: "Smooth sidewalk finish", category: "Sidewalks" },
  { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&h=400&fit=crop", alt: "Home extension foundation", category: "Foundations" },
  { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop", alt: "Colored concrete walkway", category: "Colors" },
  { src: "https://images.unsplash.com/photo-1600573472572-8aba5d81f02a?w=600&h=400&fit=crop", alt: "Wide concrete driveway", category: "Driveways" },
];

const categories = ["All", "Driveways", "Sidewalks", "Patios", "Foundations", "Colors"];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = filter === "All" ? allImages : allImages.filter((img) => img.category === filter);

  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main className="pt-28 pb-16 bg-gray-light min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-orange font-semibold text-sm tracking-widest uppercase mb-3">
              Portfolio
            </p>
            <h1 className="font-[var(--font-heading)] font-extrabold text-3xl md:text-5xl text-navy">
              Our Work Gallery
            </h1>
            <p className="text-dark-muted mt-4 max-w-xl mx-auto">
              Browse our recent projects across the Phoenix West Valley.
              These are placeholder images — real project photos coming soon.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  filter === cat
                    ? "bg-gradient-to-r from-orange to-orange-light text-white shadow-lg shadow-orange/20"
                    : "bg-white text-dark-muted border border-gray hover:border-orange/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photo grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filtered.map((img, i) => (
              <div
                key={`${filter}-${i}`}
                className="reveal break-inside-avoid group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                style={{ transitionDelay: `${(i % 6) * 0.08}s` }}
                onClick={() => setLightbox(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block bg-orange/90 text-white text-xs font-semibold px-3 py-1 rounded-full mb-1">
                    {img.category}
                  </span>
                  <p className="text-white font-medium text-sm">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />

      {/* Lightbox */}
      <div
        className={`lightbox-overlay fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 ${lightbox ? "open" : ""}`}
        onClick={() => setLightbox(null)}
      >
        {lightbox && (
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox} alt="Gallery" className="w-full rounded-xl shadow-2xl" />
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-dark font-bold shadow-lg hover:scale-110 transition-transform"
            >
              ✕
            </button>
          </div>
        )}
      </div>
    </>
  );
}
