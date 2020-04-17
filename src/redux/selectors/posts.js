import _ from 'lodash'
import { createSelector } from 'reselect'

export default createSelector(
  state => state.posts,
  state => state.users,
  (postsState, usersState) => {
    const users = usersState.users
    const result = {
      ...postsState,
      posts: _.map(postsState.posts, post => ({...post, userName: _.get(users, [post.userId, 'name'])})),
      currentPost: postsState.posts[postsState.currentPostIndex]
    }
    console.log(result)
    return result
  }
)
