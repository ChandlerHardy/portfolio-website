import Link from "next/link";
import WinXpDialog, { winXpButtonStyle } from "../../components/WinXpDialog";

export default function NotFound() {
  return (
    <WinXpDialog
      title="Page Not Found"
      icon="⚠️"
      message="404 — Page not found"
      detail="The page you are looking for does not exist or has been moved."
    >
      <Link href="/" style={winXpButtonStyle}>
        OK
      </Link>
    </WinXpDialog>
  );
}
