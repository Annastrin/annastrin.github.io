interface ExternalLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

function ExternalLink({ children, href, className }: ExternalLinkProps) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}

export default ExternalLink;
