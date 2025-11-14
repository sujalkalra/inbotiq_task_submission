import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LogOut, User, Shield } from "lucide-react";

const Dashboard = () => {
  const { user, userRole, userProfile, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!user || !userRole) {
    return null;
  }

  const isAdmin = userRole === "admin";

  return (
    <div className="min-h-screen p-8" style={{ background: "var(--gradient-card)" }}>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              {isAdmin ? (
                <Shield className="w-6 h-6 text-primary" />
              ) : (
                <User className="w-6 h-6 text-primary" />
              )}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Welcome, {userProfile?.full_name}
              </h1>
              <Badge 
                variant={isAdmin ? "default" : "secondary"} 
                className="mt-1 capitalize"
              >
                {userRole}
              </Badge>
            </div>
          </div>
          <Button onClick={handleSignOut} variant="outline" size="sm">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Main Content */}
        <Card className="border-border/50" style={{ background: "var(--gradient-card)" }}>
          <CardHeader>
            <CardTitle>
              {isAdmin ? "Admin Dashboard" : "User Dashboard"}
            </CardTitle>
            <CardDescription>
              {isAdmin 
                ? "You have full administrative access to manage the system."
                : "Welcome to your personal dashboard."
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {isAdmin ? (
              <div className="space-y-4">
                <div className="p-4 border border-primary/20 rounded-lg bg-primary/5">
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Admin Privileges
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    As an administrator, you can manage users, view system analytics, 
                    configure settings, and access all areas of the application.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border-border/50">
                    <CardHeader>
                      <CardTitle className="text-lg">User Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Manage user accounts, roles, and permissions.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-border/50">
                    <CardHeader>
                      <CardTitle className="text-lg">System Analytics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        View detailed reports and system performance metrics.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-4 border border-border/50 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    Your Account
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    You're logged in as a standard user. You have access to your personal 
                    data and can manage your account settings.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border-border/50">
                    <CardHeader>
                      <CardTitle className="text-lg">Profile</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        View and update your personal information.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-border/50">
                    <CardHeader>
                      <CardTitle className="text-lg">Settings</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Manage your account preferences and security.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Info Card */}
        <Card className="border-border/50 bg-secondary/50">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              <strong>Account ID:</strong> {user.id}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
