import React from 'react'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
import Main from './../../components/Main';
import PanelBox from '../../components/layouts/PanelBox';

class RegistrationForm extends React.Component {
    render() {
        return (
            <Main>
                <div>a</div>
            </Main>
        );
      }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);
export default WrappedRegistrationForm
