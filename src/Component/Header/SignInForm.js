import { useMutation } from '@tanstack/react-query';
import { Form, Input, Button } from 'antd';
import { loginApi } from './service';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { UPDATE_JWT, UPDATE_USER_DATA } from '../../Provider/reducers/authReducer/authReducer';
export function SignInForm({ onSwitch, onClose }) {
    const dispatch = useDispatch()
    const { isPending, mutateAsync, data } = useMutation({ mutationFn: loginApi, onSuccess(data){
        if(data?.jwt){
            //closing the modal amn storing the jwt in the internal state
            dispatch({type:UPDATE_USER_DATA, payload: data?.user})
            dispatch({type:UPDATE_JWT, payload: data?.jwt})
            onClose()
        }

    } })

    const handleSignIn = async (values) => {
        await mutateAsync(values) // 5
    };
    const errorMessage = useMemo(() => data?.data?.error?.message ?? null, [data?.data?.error?.message])
    return (
        <Form layout="vertical" onFinish={handleSignIn}>
            <Form.Item
                label="Email"
                name="identifier"
                rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'The input is not valid E-mail!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>
            {errorMessage && <span className='text-red-500'>{errorMessage}</span>}
            <Form.Item>
                <Button disabled={isPending} type="primary" htmlType="submit" block>
                    {isPending ? "Loading..." : "Sign In"}
                </Button>
            </Form.Item>
            <p className="text-center">
                Don't have an account?{' '}
                <Button type="link" onClick={onSwitch}>
                    Create an account
                </Button>
            </p>
        </Form>
    );
}