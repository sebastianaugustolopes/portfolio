import ProjectDetail from "@/components/pages/ProjectDetail";

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return <ProjectDetail id={params.id} />;
}

