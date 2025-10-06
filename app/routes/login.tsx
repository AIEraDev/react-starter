import React, { useState } from "react";
import { motion } from "framer-motion";
import { AtSign, Lock, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function validate() {
    if (!email) return "Please enter your email.";
    if (!password) return "Please enter your password.";
    // simple email regex
    const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!re.test(email)) return "Please enter a valid email address.";
    return null;
  }

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setError("");
    const v = validate();
    if (v) return setError(v);
    setLoading(true);
    try {
      // simulate network
      await new Promise((r) => setTimeout(r, 900));
      // TODO: call your auth API here
      console.log("submit", { email, password });
      // For demo, we'll just clear fields on "success"
      setEmail("");
      setPassword("");
      alert("Signed in (demo)");
    } catch (err) {
      setError("Sign in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white p-6">
      <div className="w-full max-w-2xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-indigo-700">
            CarePlanner
          </h1>
          <p className="mt-2 text-gray-500">
            Activity &amp; Meal Planning for Care Homes
          </p>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="bg-white rounded-xl shadow-md p-8 md:p-10 border border-gray-100"
        >
          <h2 className="text-2xl font-semibold text-gray-900">Welcome back</h2>
          <p className="mt-2 text-sm text-gray-500">
            Sign in to your care home account
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1 relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <AtSign size={16} className="text-gray-400" />
                </span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 rounded-md border border-gray-200 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={16} className="text-gray-400" />
                </span>

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-12 py-2 rounded-md border border-gray-200 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400"
                  placeholder="••••••••"
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center px-4 py-2 rounded-md bg-indigo-700 text-white font-medium hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-300 disabled:opacity-70"
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </div>

            <div className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="#" className="text-indigo-600 hover:underline">
                Sign up
              </a>
            </div>
          </form>
        </motion.div>

        <footer className="mt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} CarePlanner
        </footer>
      </div>
    </div>
  );
}

// import {
//   Field,
//   FieldDescription,
//   FieldGroup,
//   FieldLabel,
//   FieldSet,
// } from "@/components/ui/field"
// import { Input } from "@/components/ui/input"

// export function FieldInput() {
//   return (
//     <div className="w-full max-w-md">
//       <FieldSet>
//         <FieldGroup>
//           <Field>
//             <FieldLabel htmlFor="username">Username</FieldLabel>
//             <Input id="username" type="text" placeholder="Max Leiter" />
//             <FieldDescription>
//               Choose a unique username for your account.
//             </FieldDescription>
//           </Field>
//           <Field>
//             <FieldLabel htmlFor="password">Password</FieldLabel>
//             <FieldDescription>
//               Must be at least 8 characters long.
//             </FieldDescription>
//             <Input id="password" type="password" placeholder="********" />
//           </Field>
//         </FieldGroup>
//       </FieldSet>
//     </div>
//   )
// }
