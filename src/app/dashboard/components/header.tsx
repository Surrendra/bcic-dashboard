export default function Header() {
    return (
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <div className="flex-7 space-x-2">
            <span className="text-gray-600 hover:text-blue-400">Admin</span>
          </div>
          <button className="bg-red-500 text-white px-3 py-1 rounded">
            Logout
          </button>
        </div>
      </header>
    );
}