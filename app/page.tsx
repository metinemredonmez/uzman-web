import { Landing } from "@/components/site/landing";
import { buildMetadata } from "@/lib/metadata";

export function generateMetadata() {
  return buildMetadata("tr");
}

export default function Page() {
  return <Landing lang="tr" />;
}
