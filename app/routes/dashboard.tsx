import { Link } from "react-router";

export default function Dashboard() {
  return (
    <div>
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 border border-slate-300">
        <h1 className="flex items-center gap-x-3 font-bold text-2xl">
          <span>📆</span>
          <span>Care Planner</span>
        </h1>

        <ul className="flex items-center gap-x-3">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>

          <li>
            <Link to="/residents">Residents</Link>
          </li>

          <li>
            <Link to="/activities">Activities</Link>
          </li>

          <li>
            <Link to="/meals">Meals</Link>
          </li>

          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>

      {/* Body */}
      <div>
        <h1>Welcome back, there</h1>
        <p>Your Care Home</p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {
            <div className="bg-white rounded-2xl shadow-sm p-5 w-64 flex flex-col gap-2">
              <div className="flex items-center justify-between text-gray-800">
                <h4 className="text-sm font-medium">Total Residents</h4>
                <span>👩‍👦‍👦</span>
              </div>

              <h1 className="text-4xl font-bold text-gray-900">0</h1>
              <p className="text-sm text-gray-500">
                Active residents in your care
              </p>
            </div>
          }
          <div className="bg-white rounded-2xl shadow-sm p-5 w-64 flex flex-col gap-2">
            <div className="flex items-center justify-between text-gray-800">
              <h4 className="text-sm font-medium">Upcoming Activities</h4>
              🎰
            </div>

            <h1 className="text-4xl font-bold text-gray-900">0</h1>
            <p className="text-sm text-gray-500">Scheduled from today onward</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-5 w-64 flex flex-col gap-2">
            <div className="flex items-center justify-between text-gray-800">
              <h4 className="text-sm font-medium">Planned Meal</h4>
              <span>🍽</span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900">0</h1>
            <p className="text-sm text-gray-500">Meal scheduled from today</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-5 w-64 flex flex-col gap-2">
            <div className="flex items-center justify-between text-gray-800">
              <h4 className="text-sm font-medium">Total Residents</h4>
              <span>🍽</span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900">0</h1>
            <p className="text-sm text-gray-500">
              Active residents in your care
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{/*  */}</div>
      </div>
    </div>
  );
}
