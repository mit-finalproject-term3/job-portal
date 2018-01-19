import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

const { TextArea } = Input;

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};
class Contact extends React.Component {
  state = {
    checkNick: false,
  };
  check = () => {
    this.props.form.validateFields(
      (err) => {
        if (!err) {
          console.info('success');
        }
      },
    );
  }
  handleChange = (e) => {
    this.setState({
      checkNick: e.target.checked,
    }, () => {
      this.props.form.validateFields(['nickname'], { force: true });
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <FormItem {...formItemLayout} label="Name">
          {getFieldDecorator('username', {
            rules: [{
              required: true,
              message: 'Please enter your name',
            }],
          })(
            <Input placeholder="Please enter your name" />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Email">
          {getFieldDecorator('nickname', {
            rules: [{
              required: this.state.checkNick,
              message: 'Please input your nickname',
            }],
          })(
            <Input placeholder="Please enter your Email" />
          )}
        </FormItem>

      <FormItem>
        <div> 
    <TextArea placeholder="comments" autosize />
     <div style={{ margin: '10px 10px' }} />
    
   </div>
  </FormItem>

      
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
// ReactDOM.render(<WrappedDynamicRule />, mountNode);


export default WrappedDynamicRule;


// const WrappedPostJobForm = Form.create()(PostJob);

// export default WrappedPostJobForm;