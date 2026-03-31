import jsPDF from "jspdf";
import type { Recommendation } from "./types";

export const generateReportPDF = (rec: Recommendation, userName: string, location: string): jsPDF => {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 16;
  const contentWidth = pageWidth - margin * 2;
  let y = 20;

  const checkPageBreak = (needed: number) => {
    if (y + needed > 280) {
      doc.addPage();
      y = 20;
    }
  };

  const addText = (text: string, size: number, style: "normal" | "bold" | "italic" = "normal", color: [number, number, number] = [30, 30, 30]) => {
    doc.setFontSize(size);
    doc.setFont("helvetica", style);
    doc.setTextColor(...color);
    const lines = doc.splitTextToSize(text, contentWidth);
    checkPageBreak(lines.length * (size * 0.5));
    doc.text(lines, margin, y);
    y += lines.length * (size * 0.45) + 2;
  };

  const addSectionHeader = (title: string) => {
    y += 4;
    checkPageBreak(14);
    doc.setFillColor(199, 121, 59);
    doc.roundedRect(margin, y - 4, contentWidth, 8, 1, 1, "F");
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 255, 255);
    doc.text(title.toUpperCase(), margin + 4, y + 1);
    y += 10;
  };

  // Header
  doc.setFillColor(26, 54, 72);
  doc.rect(0, 0, pageWidth, 36, "F");
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.text("EverySpaces Design Report", margin, 16);
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(200, 200, 200);
  doc.text(`Prepared for ${userName} â€¢ ${location} â€¢ ${new Date().toLocaleDateString("en-IN")}`, margin, 24);
  doc.text("Powered by Orza AI â€” everyspaces.com", margin, 30);
  y = 44;

  // Headline
  addText(rec.headline, 16, "bold", [26, 54, 72]);
  addText(rec.intro, 10, "normal", [80, 80, 80]);
  y += 2;

  // Mood Keywords
  if (rec.moodKeywords?.length) {
    addText("Style Keywords: " + rec.moodKeywords.join(" â€¢ "), 9, "italic", [199, 121, 59]);
  }

  // Color Palette
  if (rec.colorPalette) {
    addSectionHeader("Color Palette");
    addText(rec.colorPalette.description, 9, "normal", [80, 80, 80]);
    rec.colorPalette.colors?.forEach((c) => {
      const hex = c.hex.replace("#", "");
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      checkPageBreak(12);
      doc.setFillColor(r, g, b);
      doc.roundedRect(margin, y - 3, 6, 6, 1, 1, "F");
      doc.setFontSize(9);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(30, 30, 30);
      doc.text(`${c.name} (${c.shade})`, margin + 9, y);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(100, 100, 100);
      doc.text(`â€” ${c.usage}`, margin + 9, y + 4);
      y += 10;
    });
  }

  // Furniture
  if (rec.furnitureLayout) {
    addSectionHeader("Furniture & Layout");
    addText(rec.furnitureLayout.description, 9, "normal", [80, 80, 80]);
    rec.furnitureLayout.items?.forEach((item) => {
      addText(`â€¢ ${item.name} â€” ${item.detail}`, 9, "normal");
      addText(`  Price: ${item.priceRange}`, 8, "italic", [199, 121, 59]);
    });
  }

  // Materials
  if (rec.materials) {
    addSectionHeader("Materials & Finishes");
    addText(rec.materials.description, 9, "normal", [80, 80, 80]);
    rec.materials.recommendations?.forEach((m) => {
      addText(`â€¢ ${m.item}: ${m.type}`, 9, "bold");
      addText(`  ${m.why}`, 8, "normal", [100, 100, 100]);
    });
  }

  // Lighting
  if (rec.lighting) {
    addSectionHeader("Lighting Design");
    addText(rec.lighting.description, 9, "normal", [80, 80, 80]);
    rec.lighting.layers?.forEach((l) => {
      addText(`â€¢ ${l.type}: ${l.suggestion}`, 9, "normal");
      addText(`  Placement: ${l.placement}`, 8, "italic", [100, 100, 100]);
    });
  }

  // Vastu Tips
  if (rec.vastuTips && rec.vastuTips.tips?.length > 0) {
    addSectionHeader("Vastu Guidelines");
    addText(rec.vastuTips.description, 9, "normal", [80, 80, 80]);
    rec.vastuTips.tips.forEach((tip) => {
      addText(`â€¢ ${tip.aspect}: ${tip.recommendation}`, 9, "normal");
      addText(`  Modern adaptation: ${tip.modern_adaptation}`, 8, "italic", [100, 100, 100]);
    });
  }

  // Pro Tips
  if (rec.proTips && rec.proTips.length > 0) {
    addSectionHeader("Expert Pro Tips");
    rec.proTips.forEach((tip, i) => {
      addText(`${i + 1}. ${tip}`, 9, "normal", [60, 60, 60]);
    });
  }

  // Designer Secret
  if (rec.designerSecret) {
    addSectionHeader("Designer Secret");
    addText(`"${rec.designerSecret}"`, 9, "italic", [80, 80, 80]);
  }

  // Maintenance Guide
  if (rec.maintenanceGuide && rec.maintenanceGuide.tasks?.length > 0) {
    addSectionHeader("Maintenance Guide");
    addText(rec.maintenanceGuide.description, 9, "normal", [80, 80, 80]);
    rec.maintenanceGuide.tasks.forEach((task) => {
      addText(`â€¢ ${task.item} (${task.frequency}): ${task.method}`, 9, "normal");
      addText(`  Est. annual cost: ${task.cost}`, 8, "italic", [199, 121, 59]);
    });
  }

  // Budget
  if (rec.estimatedBudget) {
    addSectionHeader("Estimated Budget");
    addText(`${rec.estimatedBudget.low} â€” ${rec.estimatedBudget.high}`, 14, "bold", [26, 54, 72]);
    addText(rec.estimatedBudget.note, 9, "normal", [100, 100, 100]);
  }

  // Timeline
  if (rec.estimatedTimeline) {
    addSectionHeader("Estimated Completion Time");
    addText(rec.estimatedTimeline.days, 16, "bold", [199, 121, 59]);
    addText(rec.estimatedTimeline.breakdown, 9, "normal", [30, 30, 30]);
    addText(rec.estimatedTimeline.note, 8, "italic", [100, 100, 100]);
  }

  // Hyderabad Specific
  if (rec.bangaloreSpecific) {
    addSectionHeader("Hyderabad Context");
    addText(rec.bangaloreSpecific, 9, "normal", [80, 80, 80]);
  }

  // Footer
  y += 8;
  checkPageBreak(20);
  doc.setDrawColor(199, 121, 59);
  doc.line(margin, y, pageWidth - margin, y);
  y += 6;
  addText("Ready to bring this design to life? Contact EverySpaces for a free consultation.", 9, "bold", [26, 54, 72]);
  addText("Phone: +91 9886579923 | everyspaces.com/contact", 9, "normal", [199, 121, 59]);

  return doc;
};

