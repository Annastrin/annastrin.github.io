function ExternalLink({ children, href, className }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}

export default ExternalLink;
