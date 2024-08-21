import NewsList from "@/components/news-list";
import { DUMMY_NEWS } from "@/dummy-news";
const NewsPage = () => {
  return (
    <div className="p-4 sm:px-24">
      <h1 className=" mt-4 text-3xl font-medium"> News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </div>
  );
};

export default NewsPage;
