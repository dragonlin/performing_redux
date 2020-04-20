import React from 'react';
import { Descriptions } from 'antd';
// import styles from './RedditPost.css'
// import moment from 'moment'
import { Modal, Button } from 'antd';
import { Card } from 'antd';
import { updatePost} from './redux/actions/posts'

class RedditPost extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    // this.props.dispatch(updatePost(title))
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    const modal_title = `Pronto ${this.props.title} 的信息`
    return <div>
      <Card title={this.props.title}>
        <Descriptions>
        <Descriptions.Item label="master">{this.props.master}</Descriptions.Item>
        <Descriptions.Item label="xL20A">{this.props.xL20A}</Descriptions.Item>
        <Descriptions.Item label="Author">{this.props.userName}</Descriptions.Item>
        <Descriptions.Item label="comments">{this.props.comments}</Descriptions.Item>
        </Descriptions>
        <Button type="primary" onClick={this.showModal}>
            更新Pronto信息
        </Button>
        <Modal
            title={modal_title}
            centered
            visible={visible}
            onOk={this.handleOk}
            confirmLoading={confirmLoading}
            onCancel={this.handleCancel}
            >
          <p>{ModalText}</p>
        </Modal>
      </Card>
    
    
    </div>
  }

}
export default RedditPost;
