import React from 'react'
import { withNamespaces } from 'react-i18next'
import { Timeline, Icon } from 'antd';
import PanelBox from '../../components/layouts/PanelBox';
import Main from './../../components/Main';

let data = [
  {
    icon: '',
    title: "Create a services site",
    time: "2015-09-01"
  },
  {
    icon: '',
    title: "Create a services site",
    time: "2015-09-01"
  },
  {
    icon: '',
    title: "Create a services site",
    time: "2015-09-01"
  },
  {
    icon: '',
    title: "Create a services site",
    time: "2015-09-01"
  },
  {
    icon: '',
    title: "Create a services site",
    time: "2015-09-01"
  },
  {
    icon: 'clock-circle-o',
    title: "Create a services site",
    time: "2015-09-01"
  },
  {
    icon: '',
    title: "Create a services site",
    time: "2015-09-01"
  },
  {
    icon: '',
    title: "Create a services site",
    time: "2015-09-01"
  }
]
class Index extends React.Component {
    state = {
        data: []
      };
      componentDidMount() {
        this.setState({
          data: data
        });
      }
      render() {
        return (
            <Main>
              <PanelBox title="Timeline Page">
                <Timeline mode="alternate">
                  {this.state.data.map((item, i) => {
                    return (
                      <Timeline.Item key={i} dot={item.icon ? <Icon type={item.icon} style={{ fontSize: '16px' }} /> : null} color="green">{item.title} {item.time}</Timeline.Item>
                    )
                  })}
                </Timeline>
              </PanelBox>
            </Main>
        );
      }
}

export default withNamespaces(['product'])(Index);
