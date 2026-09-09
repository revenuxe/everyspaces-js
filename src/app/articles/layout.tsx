import JournalShell from "@/components/blog/JournalShell";

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return <JournalShell>{children}</JournalShell>;
}
