import { Link } from "react-router";

const stats = [
  {
    id: 1,
    title: "Total Residents",
    value: 0,
    subtitle: "Active residents in your care",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-users-icon lucide-users"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <path d="M16 3.128a4 4 0 0 1 0 7.744" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Upcoming Activities",
    value: 0,
    subtitle: "Scheduled from today onwards",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-calendar-icon lucide-calendar"
      >
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Planned Meals",
    value: 0,
    subtitle: "Meals scheduled from today",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-utensils-crossed-icon lucide-utensils-crossed"
      >
        <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" />
        <path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" />
        <path d="m2.1 21.8 6.4-6.3" />
        <path d="m19 5-7 7" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Shopping List",
    value: 0,
    subtitle: "Items to purchase",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-clipboard-list-icon lucide-clipboard-list"
      >
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="M12 11h4" />
        <path d="M12 16h4" />
        <path d="M8 11h.01" />
        <path d="M8 16h.01" />
      </svg>
    ),
  },
];

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <nav className=" justify-between items-center p-4 border border-slate-300">
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
      <div className="flex-1 container px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl mb-2 font-bold">Welcome back, there</h1>
          <p>Your Care Home</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {/*  */}
          {stats.map((s) => (
            <div
              key={s.id}
              className="bg-white rounded-xl shadow-sm border p-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-slate-600">
                    {s.title}
                  </h3>
                  <div className="mt-4 text-3xl font-bold">{s.value}</div>
                  <p className="text-xs text-slate-400 mt-2">{s.subtitle}</p>
                </div>
                <div className="text-slate-300">{s.icon}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
          {/*  */}
          <div className="bg-white rounded-xl shadow-sm border p-6 flex flex-col justify-between">
            <div>
              <h4 className="font-semibold">Manage Residents</h4>
              <p className="text-slate-500 text-sm mt-2">
                Add, edit, or view resident profiles with dietary needs and
                preferences
              </p>
            </div>
            <div className="mt-6">
              <button className="w-full py-2 rounded-md bg-blue-900 text-white font-medium">
                View Residents
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6 flex flex-col justify-between">
            <div>
              <h4 className="font-semibold">Plan Activities</h4>
              <p className="text-slate-500 text-sm mt-2">
                Schedule engaging activities and track resident participation
              </p>
            </div>
            <div className="mt-6">
              <button className="w-full py-2 rounded-md bg-blue-900 text-white font-medium">
                Plan Activities
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6 flex flex-col justify-between">
            <div>
              <h4 className="font-semibold">Meal Planning</h4>
              <p className="text-slate-500 text-sm mt-2">
                Create meal plans and generate shopping lists automatically
              </p>
            </div>
            <div className="mt-6">
              <button className="w-full py-2 rounded-md bg-blue-900 text-white font-medium">
                Plan Meals
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
