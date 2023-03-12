import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviousSuspense from "../../components/PreviewSuspense";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";

const query = groq`
*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

export default async function HomePage() {
  if (previewData()) {
    return (
      <PreviousSuspense
        fallback={
          <div role={"status"}>
            <p className="text-center text-lg animate-pulse text[#F7AB0A]">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        {/* Preview Blog List */}
        <PreviewBlogList query={query} />
      </PreviousSuspense>
    );
  }

  const posts = await client.fetch(query);

  return <BlogList posts={posts} />;
}
