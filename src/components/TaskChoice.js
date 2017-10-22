import React, {Component} from 'react';
import Button from 'react-bootstrap/lib/Button'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Checkbox from 'react-bootstrap/lib/Checkbox'

import {taskCheck} from  '../actions'

class TaskChoice extends React.Component {

    constructor(props) {
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
                                                <Checkbox name={'task' + task.id} check={task.checked ? 'checked' : ''}
                                                          onClick={() => this.props.onCheckClick(task.id, !task.checked)} >
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
                                <Button bsStyle='warning' bsSize='lg' href='/'>戻る</Button>
                            </Col>
                            <Col md={6}>
                                <Button bsStyle='info' bsSize='lg' href='./checkList'>次へ</Button>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default TaskChoice
