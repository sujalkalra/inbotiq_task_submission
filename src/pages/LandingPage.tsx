import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Users, Lock } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen" style={{ background: "var(--gradient-card)" }}>
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center space-y-6 max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Role-Based Authentication System
          </h1>
          <p className="text-xl text-muted-foreground">
            A secure, full-stack application with user and admin roles, 
            built with modern technologies and best practices.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/signup">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline">
                Login
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="border-border/50 hover:border-primary/50 transition-colors">
            <CardContent className="pt-6 text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Secure Authentication</h3>
              <p className="text-muted-foreground text-sm">
                Industry-standard security with bcrypt password hashing and JWT tokens.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 hover:border-primary/50 transition-colors">
            <CardContent className="pt-6 text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Role Management</h3>
              <p className="text-muted-foreground text-sm">
                Separate user and admin roles with distinct permissions and dashboards.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 hover:border-primary/50 transition-colors">
            <CardContent className="pt-6 text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Protected Routes</h3>
              <p className="text-muted-foreground text-sm">
                Secure access control with authentication-based route protection.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Tech Stack */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Built With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 border border-border/50 rounded-lg">
              <p className="font-semibold">React</p>
              <p className="text-sm text-muted-foreground">Frontend</p>
            </div>
            <div className="p-4 border border-border/50 rounded-lg">
              <p className="font-semibold">TypeScript</p>
              <p className="text-sm text-muted-foreground">Type Safety</p>
            </div>
            <div className="p-4 border border-border/50 rounded-lg">
              <p className="font-semibold">PostgreSQL</p>
              <p className="text-sm text-muted-foreground">Database</p>
            </div>
            <div className="p-4 border border-border/50 rounded-lg">
              <p className="font-semibold">Lovable Cloud</p>
              <p className="text-sm text-muted-foreground">Backend</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
