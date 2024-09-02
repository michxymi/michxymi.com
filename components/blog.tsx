import ContentCard from '@/components/ui/content-card';
import ReadingTime from '@/lib/reading-time';
import { allPosts } from 'content-collections';

const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: '2-digit' };

const Blog = () => {
  return (
    <section className="py-20" id="blog">
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="heading">
          Beyond the <span className="text-purple">Brackets</span>
        </h1>
        <p className="subheading">My latest posts</p>
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-16 p-4">
        {allPosts.map(({ title, description, image, author, avatar, content, date, _meta }) => {
          const readTimeInMins: number = ReadingTime(content);
          const readTimeAndDate: string = `${date.toLocaleDateString('en-US', options)} - ${readTimeInMins} ${readTimeInMins > 1 ? 'minutes' : 'minute'} read`;
          const slug: string = _meta.fileName.replace(/\.mdx$/, '');
          return (
            <ContentCard
              key={_meta.path}
              title={title}
              author={author}
              description={description}
              avatar={avatar}
              image={image}
              meta={readTimeAndDate}
              url={`/blog/${slug}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
