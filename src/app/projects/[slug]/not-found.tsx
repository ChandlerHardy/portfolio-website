import Link from "next/link";
import WinXpDialog, { winXpButtonStyle } from "../../../../components/WinXpDialog";

export default function NotFound() {
  return (
    <WinXpDialog
      title="Project Not Found"
      icon="⚠️"
      message="404 — Project not found"
      detail="The project you are looking for does not exist or has been moved."
    >
      <Link href="/" style={winXpButtonStyle}>
        OK
      </Link>
    </WinXpDialog>
  );
}
