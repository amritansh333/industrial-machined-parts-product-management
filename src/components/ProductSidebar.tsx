import { useMemo, useState } from "react";
import {
  Search,
  Check,
  Boxes,
  Package2,
  ChevronRight,
} from "lucide-react";

interface MachinePart {
  id: string;
  slug: string;
  name: string;
}

interface ProductSidebarProps {
  products: MachinePart[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export default function ProductSidebar({
  products,
  selectedId,
  onSelect,
}: ProductSidebarProps) {
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  return (
    <aside
      className="
      sticky
      top-24
      self-start
      w-full
      rounded-none
      border
      border-[#279ECE]/15
      bg-white
      shadow-[0_20px_60px_rgba(39,158,206,0.10)]
      overflow-hidden
      "
    >
      {/* Header */}

      <div className="relative overflow-hidden border-b border-[#279ECE]/10 bg-gradient-to-br from-[#279ECE] to-[#276A96] px-6 py-7">

        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-sm bg-white/10" />

        <div className="relative z-10">

          <div className="inline-flex items-center gap-2 rounded-sm bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">

            <Boxes className="h-3.5 w-3.5" />

            Explore Our Range

          </div>

          <h3 className="mt-4 text-2xl font-bold text-white">
            Machine Products
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-white/85">
            Browse our complete range of industrial engineering plastic
            components.
          </p>

          <div className="mt-5 flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-none bg-white/15">

              <Package2 className="h-5 w-5 text-white" />

            </div>

            <div>

              <p className="text-xs uppercase tracking-wider text-white/70">
                Products
              </p>

              <p className="text-lg font-bold text-white">
                {products.length}
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Search */}

      <div className="border-b border-[#279ECE]/10 p-5">

        <div className="relative">

          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#279ECE]" />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
            w-full
            rounded-none
            border
            border-[#279ECE]/15
            bg-[#F8FBFD]
            py-3.5
            pl-12
            pr-4
            text-sm
            outline-none
            transition-all
            duration-200
            focus:border-[#279ECE]
            focus:bg-white
            focus:ring-4
            focus:ring-[#279ECE]/10
            "
          />

        </div>

      </div>

      {/* Product List */}

      <div
        className="
        max-h-[620px]
        overflow-y-auto
        p-3

        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-thumb]:rounded-sm
        [&::-webkit-scrollbar-thumb]:bg-[#279ECE]/30
        [&::-webkit-scrollbar-track]:bg-transparent
        "
      >

        {filteredProducts.map((product) => {

          const active = product.id === selectedId;

          return (

            <button
              key={product.id}
              type="button"
              onClick={() => onSelect(product.id)}
              className={`
                group
                mb-2
                flex
                w-full
                items-center
                justify-between
                rounded-none
                border
                px-4
                py-4
                text-left
                transition-all
                duration-300

                ${
                  active
                    ? "border-[#279ECE] bg-gradient-to-r from-[#279ECE]/10 to-[#279ECE]/5 shadow-md"
                    : "border-transparent hover:border-[#279ECE]/20 hover:bg-[#F8FBFD]"
                }
              `}
            >

              <div className="flex items-center gap-3">

                <div
                  className={`
                    h-10
                    w-1
                    rounded-sm

                    ${
                      active
                        ? "bg-[#279ECE]"
                        : "bg-transparent group-hover:bg-[#279ECE]/40"
                    }
                  `}
                />
                                <div className="min-w-0 flex-1">

                  <p
                    className={`
                      truncate
                      text-[15px]
                      font-semibold
                      transition-colors
                      duration-200

                      ${
                        active
                          ? "text-[#279ECE]"
                          : "text-[#1E293B] group-hover:text-[#279ECE]"
                      }
                    `}
                  >
                    {product.name}
                  </p>

                  <p
                    className={`
                      mt-1
                      text-xs
                      transition-colors

                      ${
                        active
                          ? "text-[#279ECE]/80"
                          : "text-slate-500"
                      }
                    `}
                  >
                    Industrial Engineering Plastic Component
                  </p>

                </div>

              </div>

              {active ? (

                <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#279ECE] shadow-lg shadow-[#279ECE]/30">

                  <Check className="h-4 w-4 text-white" />

                </div>

              ) : (

                <ChevronRight
                  className="
                  h-4
                  w-4
                  text-slate-400
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:text-[#279ECE]
                  "
                />

              )}

            </button>

          );

        })}

        {filteredProducts.length === 0 && (

          <div className="py-14 text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-sm bg-[#279ECE]/10">

              <Search className="h-7 w-7 text-[#279ECE]" />

            </div>

            <h4 className="mt-5 text-lg font-semibold text-[#0F2A3D]">
              No Products Found
            </h4>

            <p className="mt-2 text-sm text-slate-500">
              Try searching with another keyword.
            </p>

          </div>

        )}

      </div>

      {/* Footer */}

      <div className="border-t border-[#279ECE]/10 bg-[#F8FBFD] px-6 py-5">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-xs uppercase tracking-widest text-[#276A96]">
              Selected
            </p>

            <p className="mt-1 text-sm font-semibold text-[#0F2A3D]">
              {products.find((p) => p.id === selectedId)?.name}
            </p>

          </div>

          <div className="rounded-none bg-[#279ECE]/10 px-3 py-2">

            <span className="text-xs font-bold text-[#279ECE]">
              {filteredProducts.length} Items
            </span>

          </div>

        </div>

      </div>

    </aside>
  );
}