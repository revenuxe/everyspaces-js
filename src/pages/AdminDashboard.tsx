import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { LeadsTable } from "@/components/admin/LeadsTable";
import { DashboardStats } from "@/components/admin/DashboardStats";
import ArticlesManager from "@/components/admin/ArticlesManager";
import { Loader2 } from "lucide-react";

const AdminDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [activeView, setActiveView] = useState("dashboard");
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session?.user) {
        navigate('/admin/login');
        return;
      }

      const { data: roles } = await (supabase
        .from('user_roles') as any)
        .select('role')
        .eq('user_id', session.user.id)
        .eq('role', 'admin');

      if (!roles || roles.length === 0) {
        await supabase.auth.signOut();
        navigate('/admin/login');
        return;
      }

      setLoading(false);
    };

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_OUT') {
        navigate('/admin/login');
      }
    });

    checkAuth();

    return () => subscription.unsubscribe();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-muted/30">
        <AdminSidebar activeView={activeView} setActiveView={setActiveView} />
        
        <main className="flex-1 overflow-auto">
          <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm flex items-center px-4 sticky top-0 z-10">
            <SidebarTrigger className="mr-4" />
            <h1 className="text-xl font-semibold text-foreground capitalize">
              {activeView === "dashboard" ? "Dashboard" : activeView}
            </h1>
          </header>

          <div className="p-6">
            {activeView === "dashboard" && <DashboardStats />}
            {activeView === "leads" && <LeadsTable />}
            {activeView === "articles" && <ArticlesManager />}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;
