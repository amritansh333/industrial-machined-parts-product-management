import { useState, useEffect, useRef, type ComponentType, type ReactNode } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Download,
  CheckCircle2,
  Factory,
  Package,
  Cog,
  Layers,
  Boxes,
  UtensilsCrossed,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

/* ====================================================
   TYPES
==================================================== */

type IconType = ComponentType<{ className?: string }>;

interface ProductSpecification {
  parameter: string;
  specification: string;
}

interface MachinePart {
  id: string;
  slug: string;
  name: string;
  displayName?: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  technicalCharacteristics: string[];
  applications: string[];
  specifications: ProductSpecification[];
}

const PAGE_EYEBROW = "Industrial Machine Components";

/* ====================================================
   PRODUCT DATABASE
==================================================== */

function buildPlaceholder(id: string, name: string, slug: string): MachinePart {
  return {
    id,
    slug,
    name,
    shortDescription: `${name} is precision-engineered from high-performance industrial plastics for demanding machine applications.`,
    fullDescription: `${name} is manufactured using high-quality engineering thermoplastics, custom fabricated to exact specifications. Designed for durability, low friction, and long service life in continuous industrial duty. Full technical documentation is available on request.`,
    images: [
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1200&auto=format&fit=crop",
    ],
    technicalCharacteristics: [
      "High wear and abrasion resistance",
      "Low friction surface",
      "Lightweight construction",
      "Chemical and corrosion resistant",
      "High dimensional accuracy",
      "Custom sizing available",
    ],
    applications: [
      "Conveyor Systems",
      "Industrial Equipment",
      "Machine Components",
      "Packaging Machinery",
    ],
    specifications: [
      { parameter: "Material Options", specification: "UHMWPE / Nylon / POM / HDPE / PP" },
      { parameter: "Manufacturing Process", specification: "CNC Machining / Fabrication" },
      { parameter: "Tolerance", specification: "Precision / Custom" },
      { parameter: "Application", specification: "Industrial Machinery" },
    ],
  };
}

const PRODUCT_MACHINE_PARTS: MachinePart[] = [
  {
    id: "p-lpg",
    slug: "p-lpg",
    name: "Polyrib Machine Plastic Parts",
    displayName: "POLYRIB Machine Plastic Parts",
    shortDescription:
      "Precision-engineered POLYRIB Machine Plastic parts built for rigorous industrial machinery operation.",
    fullDescription:
      "POLYRIB Machine Plastic Parts are designed to provide precision and are built for rigorous operation in industrial machinery from high-quality engineering plastics. They offer industrial machinery with greater durability, lower friction, and increased resistance to wear than traditional metal parts, thereby increasing efficiency while reducing weight and maintenance. Additionally, these parts are custom-made and fabricated to specific requirements, ensuring reliable performance under adverse operating conditions.",
    images: [
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1200&auto=format&fit=crop",
    ],
    technicalCharacteristics: [
      "High wear and abrasion resistance",
      "Low friction for smooth operation",
      "Lightweight compared to metal components",
      "Excellent chemical and corrosion resistance",
      "High-dimensional accuracy",
      "Customizable designs and sizes",
      "Reduced noise and maintenance",
      "Long service life",
    ],
    applications: [
      "Gears and bushings",
      "Rollers and pulleys",
      "Guide rails and wear pads",
      "Conveyor system components",
      "Machine housings and supports",
      "Custom industrial parts",
    ],
    specifications: [
      { parameter: "Material Options", specification: "UHMWPE / Nylon / POM / HDPE / PP" },
      { parameter: "Manufacturing Process", specification: "CNC Machining / Fabrication" },
      { parameter: "Tolerance", specification: "Precision / Custom" },
      { parameter: "Application", specification: "Industrial Machinery" },
    ],
  },
  {
    id: "plagro",
    slug: "plagro",
    name: "Plagro",
    shortDescription:
      "Heavy-duty engineering plastic components built for agricultural and farm machinery equipment.",
    fullDescription:
      "Plagro components are custom-fabricated from impact-resistant engineering thermoplastics for agricultural machinery. Built to withstand abrasive soil contact, variable field loads, and outdoor exposure, Plagro parts replace metal wear components with lighter, longer-lasting alternatives that reduce downtime during peak season operation.",
    images: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1200&auto=format&fit=crop",
    ],
    technicalCharacteristics: [
      "UV and weather resistant",
      "High impact strength",
      "Abrasion resistant in soil contact",
      "Lightweight for reduced load",
      "Low moisture absorption",
      "Long outdoor service life",
    ],
    applications: [
      "Seed drill components",
      "Planter wear plates",
      "Harvester guides",
      "Soil-engaging parts",
      "Hopper liners",
      "Field equipment bushings",
    ],
    specifications: [
      { parameter: "Material Options", specification: "HDPE / UHMWPE / PP" },
      { parameter: "Manufacturing Process", specification: "CNC Machining / Thermoforming" },
      { parameter: "Tolerance", specification: "Standard / Custom" },
      { parameter: "Application", specification: "Agricultural Machinery" },
    ],
  },
  {
    id: "spur-gears",
    slug: "spur-gears",
    name: "Spur Gears",
    shortDescription:
      "Precision-machined plastic spur gears delivering quiet, self-lubricating power transmission.",
    fullDescription:
      "Plastic Spur Gears are CNC-machined to tight tolerances from acetal, nylon, and cast nylon stock for smooth, quiet power transmission. Self-lubricating properties eliminate the need for external lubrication, while reduced mass lowers inertia and noise compared to equivalent metal gearing in light and medium-duty drive systems.",
    images: [
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
    ],
    technicalCharacteristics: [
      "Self-lubricating operation",
      "Precision tooth profile",
      "Low noise transmission",
      "High dimensional stability",
      "Corrosion-free operation",
      "Lightweight, low inertia",
    ],
    applications: [
      "Conveyor drive systems",
      "Packaging machinery",
      "Printing equipment",
      "Textile machinery",
      "Light-duty gearboxes",
      "Automation drive trains",
    ],
    specifications: [
      { parameter: "Material Options", specification: "Acetal (POM) / Nylon / Cast Nylon" },
      { parameter: "Manufacturing Process", specification: "CNC Machining" },
      { parameter: "Tolerance", specification: "Precision (AGMA Grade)" },
      { parameter: "Application", specification: "Power Transmission Machinery" },
    ],
  },
  buildPlaceholder("p-vibrating-screen", "P Vibrating Screen", "p-vibrating-screen"),
  buildPlaceholder("plascon-sealing-strips", "Plascon Sealing Strips", "plascon-sealing-strips"),
  buildPlaceholder("solution-for-headbox", "Solution for Headbox", "solution-for-headbox"),
  buildPlaceholder("plabott", "Plabott", "plabott"),
  buildPlaceholder("placoss", "Placoss", "placoss"),
  buildPlaceholder("plamacon", "Plamacon", "plamacon"),
  buildPlaceholder("plasb", "Plasb", "plasb"),
  buildPlaceholder("kaylon-gears", "Kaylon Gears", "kaylon-gears"),
  buildPlaceholder("plascon-former-bottom-lip", "Plascon Former Bottom Lip", "plascon-former-bottom-lip"),
  buildPlaceholder("metering-bar-holders", "Metering Bar Holders", "metering-bar-holders"),
  buildPlaceholder("polyrib-car-stopper", "Polyrib Car Stopper", "polyrib-car-stopper"),
  buildPlaceholder("plascreen", "Plascreen", "plascreen"),
  buildPlaceholder("ccn", "CCN", "ccn"),
];

const APPLICATION_ICONS: IconType[] = [Factory, Package, UtensilsCrossed, Cog, Boxes, Layers];

/* ====================================================
   SECTION EYEBROW (shared label badge)
==================================================== */

function SectionEyebrow({ icon: Icon, children }: { icon: IconType; children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#279ECE]/10 border border-[#279ECE]/20 mb-4">
      <Icon className="w-3.5 h-3.5 text-[#276A96]" />
      <span className="text-[11px] font-bold uppercase tracking-widest text-[#276A96]">
        {children}
      </span>
    </div>
  );
}

/* ====================================================
   IMAGE SLIDER
==================================================== */

function ImageSlider({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [images.length]);

  const goTo = (i: number) => setIndex(((i % images.length) + images.length) % images.length);
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative bg-white border border-[#276A96]/15 shadow-2xl rounded-2xl p-3 overflow-hidden">
        <span className="absolute top-5 left-5 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 border border-[#276A96]/15 shadow-sm text-[10px] font-bold uppercase tracking-wider text-[#276A96]">
          <ShieldCheck className="w-3 h-3 text-[#279ECE]" />
          Machine Plastic Parts
        </span>

        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-[#F8FAFC]">
          {images.map((src, i) => (
            <img
              key={src + i}
              src={src}
              alt={`Industrial machine part view ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 border border-[#276A96]/20 flex items-center justify-center text-[#276A96] hover:bg-[#279ECE] hover:text-white transition-colors duration-200 shadow-md"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 border border-[#276A96]/20 flex items-center justify-center text-[#276A96] hover:bg-[#279ECE] hover:text-white transition-colors duration-200 shadow-md"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 pt-4 pb-1">
          {images.map((_, i) => (
            <button
              type="button"
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-[#279ECE]" : "w-2 bg-[#276A96]/20 hover:bg-[#279ECE]/50"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-[#279ECE]/10 rounded-2xl -z-10 hidden lg:block" />
      <div className="absolute -top-5 -left-5 w-20 h-20 border-2 border-[#279ECE]/20 rounded-2xl -z-10 hidden lg:block" />
    </div>
  );
}

/* ====================================================
   PRODUCT TABS
==================================================== */

function ProductTabs({
  products,
  selectedId,
  onSelect,
}: {
  products: MachinePart[];
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      {products.map((p) => {
        const isActive = p.id === selectedId;
        return (
          <button
            type="button"
            key={p.id}
            onClick={() => onSelect(p.id)}
            className={`px-4 py-3.5 text-sm font-semibold text-center border-2 rounded-xl transition-all duration-200 ${
              isActive
                ? "bg-gradient-to-br from-[#279ECE] to-[#1f7fa8] border-[#279ECE] text-white shadow-lg shadow-[#279ECE]/30 -translate-y-0.5"
                : "bg-white border-[#276A96]/15 text-[#1E293B] hover:border-[#279ECE] hover:text-[#279ECE] hover:bg-[#279ECE]/5 hover:-translate-y-0.5"
            }`}
          >
            {p.name}
          </button>
        );
      })}
    </div>
  );
}

/* ====================================================
   TECHNICAL CHARACTERISTICS
==================================================== */

function TechnicalCharacteristics({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-start gap-3 p-4 bg-white border border-[#276A96]/12 rounded-xl hover:border-[#279ECE]/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
        >
          <span className="w-7 h-7 rounded-full bg-[#279ECE]/10 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4 text-[#279ECE]" />
          </span>
          <span className="text-sm font-medium text-[#1E293B] leading-snug pt-0.5">{item}</span>
        </div>
      ))}
    </div>
  );
}

/* ====================================================
   APPLICATIONS GRID
==================================================== */

function ApplicationsGrid({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((item, i) => {
        const Icon = APPLICATION_ICONS[i % APPLICATION_ICONS.length];
        return (
          <div
            key={item}
            className="group relative p-5 bg-white border border-[#276A96]/10 border-l-4 border-l-[#279ECE] rounded-r-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-lg bg-[#279ECE]/10 flex items-center justify-center group-hover:bg-[#279ECE] transition-colors duration-300 shrink-0">
                <Icon className="w-6 h-6 text-[#279ECE] group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="font-semibold text-[#1E293B] text-sm leading-snug">{item}</p>
            </div>
            <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-[#279ECE]/5 rounded-full group-hover:scale-125 transition-transform duration-300" />
          </div>
        );
      })}
    </div>
  );
}

/* ====================================================
   SPECIFICATION TABLE
==================================================== */

function SpecificationTable({ specs }: { specs: ProductSpecification[] }) {
  return (
    <div className="border border-[#276A96]/15 rounded-xl overflow-hidden shadow-sm">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-gradient-to-r from-[#276A96] to-[#1f5a80]">
            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-white w-1/3">
              Parameter
            </th>
            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-white">
              Specification
            </th>
          </tr>
        </thead>
        <tbody>
          {specs.map((row, i) => (
            <tr
              key={row.parameter}
              className={`${i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"} hover:bg-[#279ECE]/5 transition-colors duration-150`}
            >
              <td className="px-6 py-4 text-sm font-semibold text-[#276A96] border-t border-[#276A96]/10">
                {row.parameter}
              </td>
              <td className="px-6 py-4 text-sm text-[#1E293B] border-t border-[#276A96]/10">
                {row.specification}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ====================================================
   MAIN PAGE
==================================================== */

export default function ProductMachinePartsPage() {
  const [selectedProduct, setSelectedProduct] = useState<string>(PRODUCT_MACHINE_PARTS[0].id);
  const product =
    PRODUCT_MACHINE_PARTS.find((p) => p.id === selectedProduct) ?? PRODUCT_MACHINE_PARTS[0];
  const heroTitle = product.displayName ?? product.name;

  return (
    <div className="bg-white">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-section {
          animation: fadeInUp 0.5s ease-out;
        }
      `}</style>

      {/* HERO (dynamic per selected product) */}
      <section
        key={`hero-${product.id}`}
        className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-white border-b border-[#276A96]/10 py-16 fade-in-section"
      >
        <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-[#279ECE]/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#276A96]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="w-full lg:basis-3/5">
              <SectionEyebrow icon={Sparkles}>{PAGE_EYEBROW}</SectionEyebrow>

              <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-[#0F2A3D] mb-6 leading-tight">
                {heroTitle}
              </h1>

              <div className="relative pl-5 mb-8 border-l-2 border-[#279ECE]/30">
                <p className="text-[#475569] leading-relaxed text-[15px]">
                  {product.fullDescription}
                </p>
              </div>

              <p className="text-xs font-bold uppercase tracking-widest text-[#276A96] mb-4">
                Technical Characteristics
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-9">
                {product.technicalCharacteristics.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-3 p-3 bg-white border border-[#276A96]/10 rounded-lg hover:border-[#279ECE]/40 hover:shadow-md transition-all duration-200"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#279ECE] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    </span>
                    <span className="text-sm font-medium text-[#1E293B] leading-snug">{f}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#279ECE] to-[#1f7fa8] text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-[#279ECE]/30 hover:-translate-y-0.5 transition-all duration-200"
                >
                  Request Quote <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#276A96]/25 text-[#276A96] text-sm font-semibold rounded-lg hover:border-[#279ECE] hover:text-[#279ECE] hover:bg-[#279ECE]/5 transition-colors duration-200"
                >
                  Download Datasheet <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="w-full lg:basis-2/5">
              <ImageSlider key={product.id} images={product.images} />
            </div>
          </div>
        </div>
      </section>

      {/* TAB SECTION (stable, does not re-animate on product change) */}
      <section className="bg-[#F8FAFC] border-b border-[#276A96]/10 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionEyebrow icon={Boxes}>Explore Our Range</SectionEyebrow>
          <h2 className="text-2xl font-bold text-[#0F2A3D] mb-6">Machine Plastic Products</h2>
          <ProductTabs
            products={PRODUCT_MACHINE_PARTS}
            selectedId={selectedProduct}
            onSelect={setSelectedProduct}
          />
        </div>
      </section>

      {/* DETAIL SECTIONS (dynamic per selected product) */}
      <section key={`detail-${product.id}`} className="max-w-7xl mx-auto px-6 py-16 fade-in-section">
        {/* Technical Characteristics */}

        {/* Specifications */}
        <div className= "mb-16">
          <SectionEyebrow icon={Layers}>Specifications</SectionEyebrow>
          <h3 className="text-2xl font-bold text-[#0F2A3D] mb-7">Technical Data Sheet</h3>
          <SpecificationTable specs={product.specifications} />
        </div>
        

        {/* Applications */}
        <div className="mb-16 p-8 sm:p-10 bg-[#F8FAFC] rounded-2xl border border-[#276A96]/10">
          <SectionEyebrow icon={Boxes}>Applications</SectionEyebrow>
          <h3 className="text-2xl font-bold text-[#0F2A3D] mb-7">Where It's Used</h3>
          <ApplicationsGrid items={product.applications} />
        </div>

        
      </section>
    </div>
  );
}