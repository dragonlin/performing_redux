```
    case 'posts/DELETE_POST':
      const postId = action.payload
      return {...state, posts: _.reject(state.posts, post => post.id === postId)}
    case 'posts/UPDATE_POST':
      const postId = action.payload.postId
      const newPost = action.payload.newPost
      const postIndex = _.findIndex(state.posts, post => post.id === postId)

      return {...state,
        posts: [
          ...state.posts.slice(0, postIndex),
          newPost,
          ...state.posts.slice(postIndex + 1)
        ]
      }
    case 'posts/RESET'
      return {...state, posts: initialState.posts}
```
