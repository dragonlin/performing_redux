redux/actions/posts.js

```
import _ from 'lodash'

export const newPost = () => (dispatch, getState) => {
  console.log(getState())
  console.log('doing stuff')
  console.log('do more stuff')
  _.delay(() => {
    console.log('do stuff after a delay!')
    dispatch({type: 'posts/NEW_POST', payload: "post2"})
    dispatch({type: 'posts/NEW_POST', payload: "post3"})
  }, 2000)
}

```
