"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu,LayoutDashboard,User,Settings, ChevronDown, ChevronRight, SidebarOpen } from "lucide-react";
import { usePathname } from "next/navigation";

const menus = [
  {
    url: "/dashboard",
    label: "Beranda",
    icon: LayoutDashboard,
  },
  {
    url: "#",
    label: "Pengguna",
    icon: User,
    childs: [
      {
        url: "/#",
        label: "Pemandu",
      },
      {
        url: "/#",
        label: "Pelanggan",
      },
      {
        url: "/dashboard/user",
        label: "Pengguna Reguler",
      },
    ],
  },
  {
    url: "#",
    label: "Produk",
    icon: Settings,
    childs: [
      {
        url: "#",
        label: "Paket",
      },
      {
        url: "#",
        label: "Makanan & Minuman",
      },
    ],
  },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [openMenu,setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    menus.forEach(menu => {
        if (menu.childs?.some((child) => pathname.startsWith(child.url))) {
          console.log(menu.label);
          setOpenMenu(menu.label)
        }
    });
    console.log(pathname);
  },[pathname]);

  const toggleMenu = (label:string) => {
    setOpenMenu(openMenu === label ? null : label);
  }
  return (
    <>
      <button
        className="lg:hidden p-2 m-2 bg-gray-200 rounded"
        onClick={() => setOpen(true)}
      >
        <Menu size={24} />
      </button>
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}
      <aside
        className={`fixed lg:static top-0 left-0 h-screen w-64 bg-gray-900 text-white flex flex-col transform transition-transform duration-300 z-50
          ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="p-4 text-xl font-bold border-b border-gray-700">
          Panel Admin
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setOpen(false)}
          >
            x
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {menus.map((menu, index) => (
            <div key={index}>
              {menu.childs ? (
                <>
                  <button
                    className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-800"
                    onClick={() => toggleMenu(menu.label)}
                  >
                    <div className="flex items-center gap-2">
                      <menu.icon size={20} />
                      <span>{menu.label}</span>
                    </div>
                    {openMenu === menu.label ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                  </button>
                  {openMenu === menu.label && (
                    <div
                      className={`ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-700 ${
                        openMenu === menu.label
                          ? "max-h-40 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {menu.childs?.map((child, i) => (
                        <Link
                          href={child.url}
                          key={i}
                          onClick={() => setOpen(false)}
                          className={`block p-2 rounded-2xl hover:bg-gray-800 text-sm ${
                            pathname == child.url
                              ? "bg-gray-100/10 font-semibold"
                              : ""
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={menu.url}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 p-2 rounded-2xl hover:bg-gray-800"
                >
                  <menu.icon size={20} />
                  <span>{menu.label}</span>
                </Link>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
  
}
