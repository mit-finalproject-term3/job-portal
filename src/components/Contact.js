import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 }
};
class Contact extends React.Component {
  state = {
    checkNick: false
  };
  check = () => {
    this.props.form.validateFields(err => {
      if (!err) {
        console.info('success');
      }
    });
  };
  handleChange = e => {
    this.setState(
      {
        checkNick: e.target.checked
      },
      () => {
        this.props.form.validateFields(['nickname'], { force: true });
      }
    );
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <FormItem {...formItemLayout} label="Name">
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Please input your name'
              }
            ]
          })(<Input placeholder="Enter your name" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Email">
          {getFieldDecorator('nickname', {
            rules: [
              {
                required: this.state.checkNick,
                message: 'Please input your nickname'
              }
            ]
          })(<Input placeholder="Enter your Email" />)}
        </FormItem>
        <FormItem {...formTailLayout} />
        <FormItem {...formTailLayout}>
          <Button type="primary" onClick={this.check}>
            Send
          </Button>
        </FormItem>
      </div>
    );
  }
}

const WrappedDynamicRule = Form.create()(Contact);

export default WrappedDynamicRule;

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Modal, Button } from 'antd';

// class Contact extends React.Component {
//   state = {
//     ModalText: 'Address: 273 Alfred St N, North Sydney NSW 2060',
//     visible: false,
//     confirmLoading: false
//   };
//   showModal = () => {
//     this.setState({
//       visible: true
//     });
//   };
//   handleOk = () => {
//     this.setState({
//       ModalText: 'The modal will be closed after two seconds',
//       confirmLoading: true
//     });
//     setTimeout(() => {
//       this.setState({
//         visible: false,
//         confirmLoading: false
//       });
//     }, 2000);
//   };
//   handleCancel = () => {
//     console.log('Clicked cancel button');
//     this.setState({
//       visible: false
//     });
//   };
//   render() {
//     const { visible, confirmLoading, ModalText } = this.state;
//     return (
//       <div>
//         <Button type="primary" onClick={this.showModal}>
//           Contact
//         </Button>
//         <Modal
//           title="Macquarie IT Australia Pty Ltd"
//           visible={visible}
//           onOk={this.handleOk}
//           confirmLoading={confirmLoading}
//           onCancel={this.handleCancel}
//         >
//           <p>{ModalText}</p>
//         </Modal>
//       </div>
//     );
//   }
// }

// export default Contact;
