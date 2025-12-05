
export const AllPostsPage = () => {
  const posts = [
    {id: 1, author: "user1", content: 'Description1'},
    {id: 2, author: "user2", content: 'Description2'},
    {id: 3, author: "user3", content: 'Description3'},
    {id: 4, author: "user4", content: 'Description4'}
  ]
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
