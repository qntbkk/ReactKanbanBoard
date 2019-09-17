import * as React from 'react';
//import ReactDOM from 'react-dom';
import Board from '@lourenci/react-kanban';

//import '../../MxReactWidget.css';
/**
 * Built-in Properties of Mendix
 */
const board = {
  lanes: [
    {
      id: 1,
      title: 'Backlog',
      cards: [
        {
          id: 1,
          title: 'Card title 1',
          description: 'Card content'
        },
        {
          id: 2,
          title: 'Card title 2',
          description: 'Card content'
        },
        {
          id: 3,
          title: 'Card title 3',
          description: 'Card content'
        }
      ]
    },
    {
      id: 2,
      title: 'Doing',
      cards: [
        {
          id: 9,
          title: 'Card title 9',
          description: 'Card content'
        }
      ]
    },
    {
      id: 3,
      title: 'Q&A',
      cards: [
        {
          id: 10,
          title: 'Card title 10',
          description: 'Card content'
        },
        {
          id: 11,
          title: 'Card title 11',
          description: 'Card content'
        }
      ]
    },
    {
      id: 4,
      title: 'Production',
      cards: [
        {
          id: 12,
          title: 'Card title 12',
          description: 'Card content'
        },
        {
          id: 13,
          title: 'Card title 13',
          description: 'Card content'
        }
      ]
    }
  ]
}
 interface IMendixDefaultProps {
    /** Class configured from Modeller */
    class: string;
    /** Context Object of the widget */
    mxObject?: mendix.lib.MxObject;
    /** Style configured from Modeller */
    style: string;
    /** Form object contains the widget */
    mxform: mxui.lib.form._FormBase;
}
/**
 * Interface for variable sent from Modeller
 */
interface IMxReactWidgetProps extends IMendixDefaultProps {
    messageString?: string;
}
/** Widget state, if changed, the widget will be re-rendered */
interface IWidgetState {
    currentTime?: string;
}
export default class MxReactWidget extends React.Component<IMxReactWidgetProps, IWidgetState> {
    constructor(props: IMxReactWidgetProps) {
        super(props);
        this.state = {
            currentTime: props.messageString
        };
    }
    componentWillMount() {
        console.log('component will mount');
        window.setInterval(() => {
            this.setState({ currentTime: `Current Time: ${new Date()}` }); // Re-render every sec since we update the state
        }, 1000)
    }
    componentWillReceiveProps(nextProps: IMxReactWidgetProps) {
        return (
            <div>
                {nextProps}
            </div>
        )
    }
    render() {
        return (
            <div>
                <div>Message from Modeller: {this.props.messageString}</div>
                <div>Current time in State: {this.state.currentTime}</div>
                <Board
                    allowRemoveLane
                    allowRenameLane
                    allowRemoveCard
                    onLaneRemove={console.log}
                    onCardRemove={console.log}
                    onLaneRename={console.log}>
                    {board}
                </Board>
            </div >
        )
    }
    componentDidUpdate() {
        console.log("component did update");
    }
    componentWillUnmount() {
        // unintialize
    }
} 