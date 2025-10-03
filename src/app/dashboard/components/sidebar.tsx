import Link from "next/link"

const menus = [
  {
    url: "#",
    label: "Dashboard",
  },
  {
    url: "#",
    label: "User",
  },
  {
    url: "#",
    label: "Product",
  },
];

export default function Sidebar() {
    return (
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-4 text-xl font-bold border-b border-gray-700">
          Admin Panel
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menus.map((menu, index) => (
              <li key={index}>
                <Link
                  href={menu.url}
                  className="block px-3 py-2 rounded hover:bg-gray-700"
                >
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    );
}