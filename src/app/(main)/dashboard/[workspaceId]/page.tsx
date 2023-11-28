export const dynamic = "force-dynamic";

import QuillEditor from "@/components/quill-editor/quill-editor";
import { getWorkspaceDetails } from "@/lib/supabase/queries";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: { workspaceId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data }: any = await getWorkspaceDetails(params.workspaceId);

  return {
    title: `${data[0].title} | SyncBoard`,
  };
}

const Workspace = async ({ params }: Props) => {
  const { data, error } = await getWorkspaceDetails(params.workspaceId);

  if (error || !data.length) redirect("/dashboard");

  return (
    <div className="relative">
      <QuillEditor
        dirType="workspace"
        fileId={params.workspaceId}
        dirDetails={data[0] || {}}
      />
    </div>
  );
};

export default Workspace;
