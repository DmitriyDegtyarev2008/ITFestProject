import {trpc} from '../../lib/trpc'

export const AllPostsPage = () => {
  const {data, error, isLoading, isFetching, isError} = trpc.getPosts.useQuery()
    if (isLoading) {
      return <span>Loading...</span>
    }

    if (isError) {
      return <span>Error {error.me</span>
    }

    if (is)
  return (
    <div className="">
      <h1>Posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.author}</h2>
            <p>{post.content}</p>
          </div>
        )
      })}
      <div>
        <div>
          <h2>Post1</h2>
          <p>Post1 description</p>
        </div>
        <div className="">
          <h1>Post2</h1>
          <p>Post2 description</p>
        </div>
      </div>
    </div>
  )
}
