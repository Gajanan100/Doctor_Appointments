
 
    import React, { useState } from 'react';
    import { Modal as AntdModal, Form, Input, Button } from 'antd';
    
    // Separate login function
    const handleLogin = (values) => {
      console.log('Login Success:', values);
      // Add your login logic here
    };
    
    // Separate signup function
    const handleSignup = (values) => {
      console.log('Signup Success:', values);
      // Add your signup logic here
    };
    
    // SignInForm function
    const SignInForm = ({ onFinish }) => {
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    
      return (
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="identifier"
            rules={[{ required: true, message: 'Please input your email or username!' }]}
          >
            <Input placeholder="Email or Username" />
          </Form.Item>
    
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
    
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Sign In
            </Button>
          </Form.Item>
        </Form>
      );
    };
    
    // SignUpForm function
    const SignUpForm = ({ onFinish }) => {
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    
      return (
        <Form
          name="signup"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input placeholder="Email" />
          </Form.Item>
    
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="Username" />
          </Form.Item>
    
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
    
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      );
    };
    
    // Modal component
    const ModalComponent = ({ isOpen, onClose }) => {
      const [isLogin, setIsLogin] = useState(true);
    
      return (
        <AntdModal
          title={isLogin ? "Sign In" : "Sign Up"}
          visible={isOpen}
          onCancel={onClose}
          footer={null}
        >
          {isLogin ? (
            <SignInForm onFinish={handleLogin} />
          ) : (
            <SignUpForm onFinish={handleSignup} />
          )}
          <p className="mt-4 text-center">
            {isLogin ? (
              <span>
                Don't have an account? <Button type="link" onClick={() => setIsLogin(false)}>Create one</Button>
              </span>
            ) : (
              <span>
                Already have an account? <Button type="link" onClick={() => setIsLogin(true)}>Sign in</Button>
              </span>
            )}
          </p>
        </AntdModal>
      );
    };
    
    export default ModalComponent;
    