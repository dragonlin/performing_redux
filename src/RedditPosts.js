import React, { Component } from 'react';
import RedditPost from './RedditPost'
import AddPost from './AddPost'
import _ from 'lodash'
import { connect } from 'react-redux'
import { newPost, loadPosts, updateTitle, savePost } from './redux/actions/posts'
import postsSelector from './redux/selectors/posts'

import { Row, Col } from 'antd';
import { Spin } from 'antd';
import { Input } from 'antd';
const { Search } = Input;

class RedditPosts extends Component {
  constructor(props) {
    super(props)
    console.log('-------init----------------')
    this.props.dispatch(loadPosts())
  }

  state = {
    filter: '',
  };


  onSearch = (value) => {
    console.log('-------onSearch----------------' + value)
    this.setState({
      filter: value,
    });

  };

  render() {
    console.log(this.props)
    // console.log(this.state.filter)
    const { posts } = this.props;
    const { filter } = this.state;
    const showProntoLists = posts.filter(post=> post.Pronto.includes(filter) || post.Author.includes(filter))
    
    return (
      <div className="App">
        {/* <AddPost
          editingPost={this.props.editingPost}
          onPostTitleChange={(title) => this.props.dispatch(updateTitle(title))}
          onAdd={() => {
            this.props.dispatch(savePost())
          }}
        /> */}
        <br/>
        <br/>
        <Row>
          <Col span={2}></Col>
          <Col span={12}><Search
              placeholder="input search text"
              enterButton="Search"
              size="large"
              onSearch={value => this.onSearch(value)}
            /></Col>
        </Row>
        
        <br/>
        <br/>
        <p>search by: {filter} Numbers: {showProntoLists.length}</p>
        {this.props.isLoading ? <Spin size="large" /> : null}
        {_.map(showProntoLists, pronto => {
            return <RedditPost
              key={pronto.Pronto}
              title={pronto.Pronto}
              userName={pronto.Author}
              comments={pronto['Commit Date']}
              master={pronto.master}
              xL20A={pronto.xL20A}
            />
        })}
      </div>
    );
  }
}
export default connect(state => postsSelector(state))(RedditPosts);
