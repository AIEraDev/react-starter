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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{/*  */}</div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{/*  */}</div>
      </div>
    </div>
  );
}
