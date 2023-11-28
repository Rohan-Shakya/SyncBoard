export const dynamic = "force-dynamic";

import React from "react";
import QuillEditor from "@/components/quill-editor/quill-editor";
import { getFileDetails } from "@/lib/supabase/queries";
import { redirect } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: { fileId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data }: any = await getFileDetails(params.fileId);

  return {
    title: `${data[0].title} | SyncBoard`,
  };
}

const File = async ({ params }: Props) => {
  const { data, error } = await getFileDetails(params.fileId);

  if (error || !data.length) redirect("/dashboard");

  return (
    <div className="relative ">
      <QuillEditor
        dirType="file"
        fileId={params.fileId}
        dirDetails={data[0] || {}}
      />
    </div>
  );
};

export default File;
