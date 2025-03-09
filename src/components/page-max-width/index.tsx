interface PageMaxWidthProps {
  children: React.ReactNode;
}

export function PageMaxWidth({ children }: PageMaxWidthProps) {
  return <div className="w-full max-w-7xl mx-auto px-4 lg:px-10">{children}</div>;
}
