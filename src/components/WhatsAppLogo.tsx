interface WhatsAppLogoProps {
  className?: string;
}

export default function WhatsAppLogo({ className = '' }: WhatsAppLogoProps) {
  return <img src="/whatsapp-logo.png" alt="" aria-hidden="true" className={className} />;
}
