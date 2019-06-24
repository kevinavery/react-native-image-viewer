import React, { Component } from 'react';
import { Button, Modal, View } from 'react-native';
import ImageViewer from './built/index';

export default class Main extends Component {
  state = {
    index: 0,
    modalVisible: false,
    imageUrls: []
  };

  constructor(props) {
    super(props);

    this.updateImages = this.updateImages.bind(this);
  }

  componentDidMount() {
    this.updateImages();

    //setInterval(this.updateImages, 10000);
  }

  updateImages() {
    const urls = [
      'https://images.unsplash.com/photo-1558980394-34764db076b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
      'https://images.unsplash.com/photo-1560252118-b3ea5bc51cd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      'https://images.unsplash.com/photo-1561114475-ba52bf97e1bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      'https://images.unsplash.com/photo-1561102397-29b7492fa759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80',
      'https://images.unsplash.com/photo-1561180851-b7f0383a6c33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
      'https://images.unsplash.com/photo-1561023435-76d23e8ff6de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',
      'https://images.unsplash.com/photo-1561175102-9e541a675233?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
    ];

    const numImages = Math.floor(Math.random() * (urls.length - 2)) + 2;
    const imageUrls = [];
    for (let i = 0; i < numImages; i++) {
      const url = urls[Math.floor(Math.random() * urls.length)];
      imageUrls.push({ url });
    }

    const index = this.state.index > numImages - 1 ? numImages - 1 : this.state.index;
    this.setState({ index, imageUrls });
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          justifyContent: 'center',
          padding: 10
        }}
      >
        <Button title="Open" onPress={() => this.setState({ modalVisible: true })} />
        <Modal
          visible={this.state.modalVisible}
          transparent={true}
          onRequestClose={() => this.setState({ modalVisible: false })}
        >
          <ImageViewer
            imageUrls={this.state.imageUrls}
            index={this.state.index}
            onChange={index => this.setState({ index })}
            pageAnimateTime={150}
            enablePreload={true}
            enableSwipeDown={true}
            swipeDownThreshold={50}
            onSwipeDown={() => this.setState({ modalVisible: false })}
            enableSwipeDown={true}
            saveToLocalByLongPress={false}
          />
        </Modal>
      </View>
    );
  }
}
