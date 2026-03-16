import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCheck, UserX, Clock, TrendingUp, FileText } from "lucide-react";

interface Stats {
  total: number;
  new: number;
  followUp: number;
  siteVisit: number;
  quotation: number;
  converted: number;
  rejected: number;
}

export function DashboardStats() {
  const [stats, setStats] = useState<Stats>({
    total: 0,
    new: 0,
    followUp: 0,
    siteVisit: 0,
    quotation: 0,
    converted: 0,
    rejected: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      const { data: leads } = await (supabase
        .from('leads') as any)
        .select('status');

      if (leads) {
        setStats({
          total: leads.length,
          new: leads.filter(l => l.status === 'new').length,
          followUp: leads.filter(l => l.status === 'follow_up').length,
          siteVisit: leads.filter(l => l.status === 'site_visit').length,
          quotation: leads.filter(l => l.status === 'quotation').length,
          converted: leads.filter(l => l.status === 'converted').length,
          rejected: leads.filter(l => l.status === 'rejected').length,
        });
      }
      setLoading(false);
    };

    fetchStats();
  }, []);

  const statCards = [
    { title: "Total Leads", value: stats.total, icon: Users, color: "text-primary", bgColor: "bg-primary/10" },
    { title: "New", value: stats.new, icon: FileText, color: "text-blue-500", bgColor: "bg-blue-500/10" },
    { title: "Follow Up", value: stats.followUp, icon: Clock, color: "text-yellow-500", bgColor: "bg-yellow-500/10" },
    { title: "Site Visit", value: stats.siteVisit, icon: TrendingUp, color: "text-purple-500", bgColor: "bg-purple-500/10" },
    { title: "Quotation", value: stats.quotation, icon: FileText, color: "text-orange-500", bgColor: "bg-orange-500/10" },
    { title: "Converted", value: stats.converted, icon: UserCheck, color: "text-green-500", bgColor: "bg-green-500/10" },
    { title: "Rejected", value: stats.rejected, icon: UserX, color: "text-red-500", bgColor: "bg-red-500/10" },
  ];

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(7)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-6">
              <div className="h-20 bg-muted rounded" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat) => (
          <Card key={stat.title} className="border-border/50 hover:border-border transition-colors bg-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-3xl font-bold text-foreground mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-border/50 bg-card">
        <CardHeader>
          <CardTitle className="text-foreground">Conversion Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Conversion Rate</span>
              <span className="font-semibold text-foreground">
                {stats.total > 0 ? ((stats.converted / stats.total) * 100).toFixed(1) : 0}%
              </span>
            </div>
            <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full transition-all duration-500"
                style={{ width: `${stats.total > 0 ? (stats.converted / stats.total) * 100 : 0}%` }}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-green-500/10 rounded-lg">
                <p className="text-sm text-muted-foreground">Success Rate</p>
                <p className="text-2xl font-bold text-green-500">
                  {stats.total > 0 ? ((stats.converted / stats.total) * 100).toFixed(1) : 0}%
                </p>
              </div>
              <div className="p-4 bg-red-500/10 rounded-lg">
                <p className="text-sm text-muted-foreground">Rejection Rate</p>
                <p className="text-2xl font-bold text-red-500">
                  {stats.total > 0 ? ((stats.rejected / stats.total) * 100).toFixed(1) : 0}%
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
