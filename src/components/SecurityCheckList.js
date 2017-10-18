import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Nav from 'react-bootstrap/lib/Nav'
import Navbar from 'react-bootstrap/lib/Navbar'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'

export default class SecurityCheckList extends React.Component {

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
                            <h1>[16]チェックリストの生成・表示</h1>
                            <ol className="list-group">
                                <li className="list-group-item">
                                    選択した今日の作業と収集した今日の気象データから、チェックリストを作成する。
                                </li>
                                <li className="list-group-item">
                                    作成方法については検討中
                                </li>
                            </ol>
                            <h1>[17]最優先チェックリストの選択</h1>
                            <ol className="list-group">
                                <li className="list-group-item">
                                    表示されたチェックリストから、最優先事項を選択する。
                                </li>
                            </ol>
                        </Row>
                        <Row className="show-grid">
                            <Col md={12}>
                                {
                                    this.props.checkList.map(task =>
                                        <li class="list-group-item" key={task.id}>
                                            {task.content}
                                        </li>
                                    )
                                }
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        )
    }
}
