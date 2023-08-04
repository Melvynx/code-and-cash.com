export default function Contributor({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-slate-500 mb-3 prose-p:m-0 prose-p:inline">
      <span className="text-slate-400">—</span> {children}
    </div>
  );
}
