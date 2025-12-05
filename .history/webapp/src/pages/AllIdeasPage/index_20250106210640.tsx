import {trpc} from '../../lib/trpc'

export const AllPostsPage = () => {
    const result 
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
