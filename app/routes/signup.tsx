import type React from "react";
// import { createClient } from "@/lib/supabase/client";
import { useState } from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";
import { Link, useNavigate } from "react-router";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    careHomeName: "",
    contactName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  //   const router = useRouter();
  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL || `${window.location.origin}/`,
          data: {
            care_home_name: formData.careHomeName,
            contact_name: formData.contactName,
          },
        },
      });
      if (error) throw error;
      navigate("/login");
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-indigo-900 mb-2">CarePlanner</h1>
          <p className="text-muted-foreground">Get started with your care home</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Create an account</CardTitle>
            <CardDescription>Start planning activities and meals for your residents</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignUp}>
              <div className="flex flex-col gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="careHomeName">Care Home Name</Label>
                  <Input id="careHomeName" type="text" placeholder="Sunshine Care Home" required value={formData.careHomeName} onChange={(e) => setFormData({ ...formData, careHomeName: e.target.value })} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="contactName">Your Name</Label>
                  <Input id="contactName" type="text" placeholder="Jane Smith" required value={formData.contactName} onChange={(e) => setFormData({ ...formData, contactName: e.target.value })} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="admin@carehome.co.uk" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" required value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    required
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                  />
                </div>
                {error && <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">{error}</div>}
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Creating account..." : "Create account"}
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <Link to="/auth/login" className="text-primary underline underline-offset-4 hover:text-primary/80">
                  Sign in
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
