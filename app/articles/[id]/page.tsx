import { getPostData } from "@/lib/posts";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  const postData = await getPostData(params.id)
  const { title, id, date, contentHtml} = postData
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4 text-center">{title}</h1>
          <p className="mb-2 text-center">ID: {id}</p>
          <p className="mb-2 text-center">Date: {date}</p>
        </div>
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </div>
  );
}