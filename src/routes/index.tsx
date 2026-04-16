import { createFileRoute } from "@tanstack/react-router";
import { AiSparkle } from "../components/AiSparkle";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <AiSparkle size={120} />
    </div>
  );
}
