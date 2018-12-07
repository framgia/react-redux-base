import React from 'react'
import { withNamespaces } from 'react-i18next'
import { Timeline, Icon } from 'antd';
import PanelBox from '../../components/layouts/PanelBox';
import Main from './../../components/Main';

class Index extends React.Component {
      render() {
        return (
            <Main>
              <PanelBox title="Timeline Page">
                <Timeline mode="alternate">
                  <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                  <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
                  <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</Timeline.Item>
                  <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
                  <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                  <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>Technical testing 2015-09-01</Timeline.Item>
                </Timeline>
              </PanelBox>
            </Main>
        );
      }
}

export default withNamespaces(['product'])(Index);
