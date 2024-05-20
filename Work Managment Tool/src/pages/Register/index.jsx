// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";

function Register() {
  const onfinish = (values) => {
    console.log("success", values);
  };
  return (
    <div className="grid grid-cols-2">
      {/* Left side */}
      <div className="bg-black h-screen flex flex-col justify-center items-center">
        <div>
          <h1 className="text-7xl text-white">GIRI TRACKER</h1>
          <span className="text-white mt-5 ml-2">
            One place to track all your bussiness records
          </span>
        </div>
      </div>
      {/* Right side */}
      <div className="flex justify-center items-center">
        <div className=" w-[400px]">
          <h1 className="text-xl  text-gray-700 uppercase"> Lets get you started</h1>
       
          <Form className="mt-3" layout="vertical" onFinish={onfinish}>
          <Form.Item label="First Name" name="firstname">
              <Input />
            </Form.Item>
            <Form.Item label="Last Name" name="lastname">
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>
            <Button type="primary" htmlType="submit" block>
              Register
            </Button>

            <div className="flex justify-center mt-5">
              <span>
                Already Have an account? <Link to="/login">Login</Link>
              </span>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
