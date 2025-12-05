import {trpc} from '../../lib/trpc'

export const AllPostsPage = () => {
  const {data, error, isLoading, isFetching, isError} = trpc.getPosts.useQuery()
    if (isLoading) {
      return <span>Loading...</span>
    }

    if (isError) {
      return <span>Error: {error.message}</span>
    }

  return (
    <div>
      <h1>All Posts</h1>
      {data?.posts?.map(post) => (
        <div key={post.id}>
          <h2>{</h2>
        </div>
      )}
    </div>  
  )
}
