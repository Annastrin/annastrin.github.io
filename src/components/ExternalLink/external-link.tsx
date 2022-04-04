import React from "react";

interface ExternalLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const ExternalLink = ({ children, href, className }: ExternalLinkProps) => (
  <a href={href} target="_blank" rel="noreferrer" className={className}>
    {children}
  </a>
);

export default ExternalLink;
