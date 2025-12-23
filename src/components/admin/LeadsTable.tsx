import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2, Eye, Loader2, Globe, Calendar, FileText } from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";

type LeadStatus = 'new' | 'follow_up' | 'site_visit' | 'quotation' | 'converted' | 'rejected';

interface Lead {
  id: string;
  form_name: string;
  source_page: string | null;
  data: Record<string, unknown>;
  status: LeadStatus;
  notes: string | null;
  created_at: string;
}

const statusColors: Record<LeadStatus, string> = {
  new: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  follow_up: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  site_visit: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  quotation: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  converted: "bg-green-500/10 text-green-500 border-green-500/20",
  rejected: "bg-red-500/10 text-red-500 border-red-500/20",
};

const statusLabels: Record<LeadStatus, string> = {
  new: "New",
  follow_up: "Follow Up",
  site_visit: "Site Visit",
  quotation: "Quotation",
  converted: "Converted",
  rejected: "Rejected",
};

export function LeadsTable() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const fetchLeads = async () => {
    let query = supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (filterStatus !== "all") {
      query = query.eq('status', filterStatus as LeadStatus);
    }

    const { data, error } = await query;

    if (error) {
      toast.error("Failed to fetch leads");
      return;
    }

    setLeads(data as Lead[]);
    setLoading(false);
  };

  useEffect(() => {
    fetchLeads();
  }, [filterStatus]);

  const updateStatus = async (id: string, status: LeadStatus) => {
    const { error } = await supabase
      .from('leads')
      .update({ status })
      .eq('id', id);

    if (error) {
      toast.error("Failed to update status");
      return;
    }

    toast.success("Status updated");
    fetchLeads();
  };

  const deleteLead = async (id: string) => {
    const { error } = await supabase
      .from('leads')
      .delete()
      .eq('id', id);

    if (error) {
      toast.error("Failed to delete lead");
      return;
    }

    toast.success("Lead deleted");
    fetchLeads();
    setSelectedLead(null);
  };

  const getDisplayName = (data: Record<string, unknown>): string => {
    return (data.name || data.Name || data.full_name || data.fullName || "Unknown") as string;
  };

  const getDisplayPhone = (data: Record<string, unknown>): string => {
    return (data.phone || data.Phone || data.mobile || data.Mobile || "-") as string;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">All Leads ({leads.length})</h2>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-40 bg-card border-border">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            {Object.entries(statusLabels).map(([value, label]) => (
              <SelectItem key={value} value={value}>{label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Card className="border-border/50 bg-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="text-muted-foreground">Name</TableHead>
              <TableHead className="text-muted-foreground">Phone</TableHead>
              <TableHead className="text-muted-foreground">Form</TableHead>
              <TableHead className="text-muted-foreground">Source</TableHead>
              <TableHead className="text-muted-foreground">Date</TableHead>
              <TableHead className="text-muted-foreground">Status</TableHead>
              <TableHead className="text-muted-foreground text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-12 text-muted-foreground">
                  No leads found
                </TableCell>
              </TableRow>
            ) : (
              leads.map((lead) => (
                <TableRow key={lead.id} className="border-border hover:bg-muted/50">
                  <TableCell className="font-medium text-foreground">
                    {getDisplayName(lead.data)}
                  </TableCell>
                  <TableCell className="text-foreground">{getDisplayPhone(lead.data)}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary">
                      {lead.form_name}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {lead.source_page || "-"}
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {format(new Date(lead.created_at), "MMM dd, yyyy")}
                  </TableCell>
                  <TableCell>
                    <Select
                      value={lead.status}
                      onValueChange={(value) => updateStatus(lead.id, value as LeadStatus)}
                    >
                      <SelectTrigger className={`w-32 h-8 border ${statusColors[lead.status]}`}>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(statusLabels).map(([value, label]) => (
                          <SelectItem key={value} value={value}>{label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-foreground"
                        onClick={() => setSelectedLead(lead)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                        onClick={() => deleteLead(lead.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Card>

      <Dialog open={!!selectedLead} onOpenChange={() => setSelectedLead(null)}>
        <DialogContent className="max-w-lg bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Lead Details
            </DialogTitle>
          </DialogHeader>

          {selectedLead && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <Badge className={`${statusColors[selectedLead.status]} border`}>
                  {statusLabels[selectedLead.status]}
                </Badge>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => deleteLead(selectedLead.id)}
                  className="gap-2"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-muted/50 border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <FileText className="h-4 w-4" />
                      <span className="text-xs uppercase tracking-wide">Form</span>
                    </div>
                    <p className="font-medium text-foreground">{selectedLead.form_name}</p>
                  </CardContent>
                </Card>

                <Card className="bg-muted/50 border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Globe className="h-4 w-4" />
                      <span className="text-xs uppercase tracking-wide">Source</span>
                    </div>
                    <p className="font-medium text-foreground">{selectedLead.source_page || "Direct"}</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-muted/50 border-border/50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <span className="text-xs uppercase tracking-wide">Submitted On</span>
                  </div>
                  <p className="font-medium text-foreground">
                    {format(new Date(selectedLead.created_at), "MMMM dd, yyyy 'at' hh:mm a")}
                  </p>
                </CardContent>
              </Card>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">
                  Form Data
                </h4>
                <Card className="bg-muted/50 border-border/50">
                  <CardContent className="p-4 space-y-3">
                    {Object.entries(selectedLead.data).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-start">
                        <span className="text-muted-foreground capitalize">
                          {key.replace(/_/g, " ")}
                        </span>
                        <span className="text-foreground font-medium text-right max-w-[60%]">
                          {String(value)}
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">
                  Update Status
                </h4>
                <Select
                  value={selectedLead.status}
                  onValueChange={(value) => {
                    updateStatus(selectedLead.id, value as LeadStatus);
                    setSelectedLead({ ...selectedLead, status: value as LeadStatus });
                  }}
                >
                  <SelectTrigger className="w-full bg-card border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(statusLabels).map(([value, label]) => (
                      <SelectItem key={value} value={value}>{label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
