`redux/actions/posts.js`

```
export const newPost = () => {
  return {type: 'posts/NEW_POST', payload: "post2"}
}
```

Use like this after importing:

`this.props.dispatch(newPost())`
