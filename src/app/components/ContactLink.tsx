import { Link, type LinkProps } from "react-router";

type ContactLinkProps = Omit<LinkProps, "to">;

/** Client-side link to the homepage contact form (`/#contact`). */
export function ContactLink({ children, ...props }: ContactLinkProps) {
  return (
    <Link to="/#contact" {...props}>
      {children}
    </Link>
  );
}
