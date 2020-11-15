import React from 'react';
import { connect, Loading, ConnectProps, Dispatch } from 'umi';
import { UserState } from './model';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import './style.less'
const { Meta } = Card;
export interface UserProps extends ConnectProps {
  User: UserState;
  dispatch: Dispatch;
  loading: boolean;
}

class Staff extends React.Component<UserProps, any> {
  componentDidMount() {
    this.props.dispatch({
      type: 'User/getUsers',
    });
  }
  render() {
    const {
      loading,
      User: { users},
    } = this.props;
    console.log(this.props.User,'có chi')
    const usersRender = users.map((user) => {
      return (
        <div className ='card'>
            <Card
                hoverable
                style={{ width:230 }}
                cover={<img alt="example" src={user.avatar} />}
            >
                  <Meta title={user.email} description= {`${user.first_name} - ${user.last_name}`} />
            </Card>  
        </div>
      )
    })

    return (
  <div className='over'>
  {usersRender}
  </div>
    );
  }
}

export default connect(
  ({ User, loading }: { User: UserState; loading: Loading }) => ({
    User,
    loading: loading.models.User,
  }),
)(Staff);