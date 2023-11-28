export const dynamic = "force-dynamic";

import React from "react";
import QuillEditor from "@/components/quill-editor/quill-editor";
import { getFolderDetails } from "@/lib/supabase/queries";
import { redirect } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: { folderId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data }: any = await getFolderDetails(params.folderId);

  return {
    title: `${data[0].title} | SyncBoard`,
  };
}

const Folder = async ({ params }: Props) => {
  const { data, error } = await getFolderDetails(params.folderId);

  if (error || !data.length) redirect("/dashboard");

  return (
    <div className="relative ">
      <QuillEditor
        dirType="folder"
        fileId={params.folderId}
        dirDetails={data[0] || {}}
      />
    </div>
  );
};

export default Folder;
