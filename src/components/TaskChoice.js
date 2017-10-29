import React from 'react';
import Button from 'react-bootstrap/lib/Button'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Checkbox from 'react-bootstrap/lib/Checkbox'

import {LinkContainer} from 'react-router-bootstrap'

/**
 * 「今日の作業の選択」の表示コンポーネント.
 */
class TaskChoice extends React.Component {

    constructor(props) {
        console.log(props)
        super(props)
    }

    render() {
        return (
            <div>
                <div className="row">
                    <Grid>
                        <Row className="show-grid">
                            <h1>[14]今日の作業の選択</h1>
                            <ol className="list-group">
                                <li className="list-group-item">
                                    以下の作業の選択
                                </li>
                            </ol>
                        </Row>
                        <Row className="show-grid">
                            <Col md={6}>
                                <ul className="list-group">
                                    {
                                        this.props.todayTaskList.map(task =>
                                            <li className="list-group-item" key={task.id}>
                                                <Checkbox name={'task' + task.id} checked={task.checked ? 'checked' : ''}
                                                          onChange={() => this.props.onCheckChange(task.id, !task.checked)} >
                                                    {task.content}
                                                </Checkbox>
                                            </li>
                                        )
                                    }
                                </ul>
                            </Col>
                            <Col md={6}>
                                {
                                    this.props.todayTaskList.filter(
                                        (task) => task.checked === true
                                    ).map(task =>
                                        <li className="list-group-item" key={task.id}>
                                                {task.content}
                                        </li>
                                    )
                                }
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col md={6}>
                                <LinkContainer to="./">
                                    <Button bsStyle='warning' bsSize='lg'>戻る</Button>
                                </LinkContainer>
                            </Col>
                            <Col md={6}>
                                <LinkContainer to="./checkList">
                                    <Button bsStyle='info' bsSize='lg'>次へ</Button>
                                </LinkContainer>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default TaskChoice
