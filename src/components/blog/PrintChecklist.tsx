"use client";

export default function PrintChecklist() {
  return <button type="button" onClick={() => window.print()} className="journal-button mt-6 print:hidden">Save Checklist / Print</button>;
}
