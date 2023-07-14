import {getSortedPostsData} from '../../lib/posts'

export default function Articles() {
    const allPostsData = getSortedPostsData();

    return (
      <div className="flex items-start justify-center min-h-screen bg-base-200">
        <div className="max-w-3xl">
          <p className="mt-8 mb-4 ml-4 leading-relaxed tracking-tight">
            Here, I share my thoughts and experiences on a wide range of topics, 
            including <strong>software development</strong>, <strong>best practices</strong>, and insights into <strong>life matters</strong>.
            Join me on this journey as we explore the intersection of <strong>technology</strong>, <strong>personal growth</strong>, and the <strong>world around us</strong>.
          </p>
          <section className="p-4">
            <div className="grid grid-cols-1 gap-4">
              {allPostsData.map((postData) => (
                <div className="bg-base-300 p-4 rounded" key={postData.id}>
                  <h3 className="text-lg font-semibold mb-2">{postData.title}</h3>
                  <p className="text-sm mb-1">{postData.id}</p>
                  <p className="text-sm">{postData.date}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
)}