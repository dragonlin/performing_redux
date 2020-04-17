import React, { Component } from 'react';


export default class AddPost extends Component {
  render() {
    return <div>
      <p>Title</p>
      <input
        value={this.props.editingPost.title}
        onChange={(event) => this.props.onPostTitleChange(event.target.value)}
      />
      <button onClick={() => this.props.onAdd()}>Add</button>
    </div>
  }
}
