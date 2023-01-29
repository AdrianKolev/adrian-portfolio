import { useInfiniteQuery } from "react-query";
import Posts from "./Posts";

const fetchPosts = async ({ pageParam = 1 }) => {
  const res = await fetch(
    `https://api.shop4sport.eu/wp-json/programming/v1/posts?page=${pageParam}`
  );
  return res.json();
};

const InfiniteScroll = () => {
  const {
    isLoading,
    isError,
    error,
    data,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery(["colors"], fetchPosts, {
    getNextPageParam: (lastPage, pages) => {
      return lastPage.maxPage ? lastPage.page + 1 : undefined;
    },
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <section className="blog Services">
        <div className="container topMarign">
          <div className="heading">
            <h3>LATEST BLOGS</h3>
            <h1>Read Inspirational Story Every Week</h1>
          </div>
          <div className="contain grid topMarign">
            {data.pages.map((page) =>
              page.data.map((post) => <Posts key={post.id} post={post} />)
            )}
          </div>
          <div className="btn-container">
            {hasNextPage && (
              <button className={"loadMore"} onClick={fetchNextPage}>
                Load More
              </button>
            )}
          </div>
          <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
        </div>
      </section>
    </>
  );
};

export default InfiniteScroll;
