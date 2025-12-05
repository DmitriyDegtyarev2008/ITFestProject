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
    <div className="">
      
  )
}
