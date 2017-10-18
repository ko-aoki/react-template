import React, {Component} from 'react';
import Button from 'react-bootstrap/lib/Button'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Checkbox from 'react-bootstrap/lib/Checkbox'
import Nav from 'react-bootstrap/lib/Nav'
import Navbar from 'react-bootstrap/lib/Navbar'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import {taskCheck} from  '../actions'

class SecurityTaskChoice extends React.Component
{

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">トップページ</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>トップへ</MenuItem>
                                <MenuItem eventKey={3.2}>ログアウト</MenuItem>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
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
                                        this.props.securityTodayTaskList.map(task =>
                                            <li className="list-group-item" key={task.id}>
                                                <Checkbox name={'task' + task.id} check={task.checked}
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
                                    this.props.securityTodayTaskList.filter(
                                        (task) => task.checked === true
                                    ).map(task =>
                                        <li class="list-group-item" key={task.id}>
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

export default SecurityTaskChoice
