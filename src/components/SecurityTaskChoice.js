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

const securityTodayTaskList = [
    {
        id: '01',
        content: '乗用トラクターでの公道移動',
        checked: false
    },
    {
        id: '02',
        content: '刈払機による草刈り作業',
        checked: false
    },
    {
        id: '03',
        content: '歩行用トラクターによる耕うん作業',
        checked: false
    },
    {
        id: '04',
        content: '脚立やはしごによる高所作業',
        checked: false
    },
    {
        id: '05',
        content: '重量物の運搬作業',
        checked: false
    },
    {
        id: '06',
        content: '乗用トラクターによる耕うん・代かき作業',
        checked: false
    },
    {
        id: '07',
        content: '田植作業',
        checked: false
    },
    {
        id: '08',
        content: 'コンバインによる収穫作業',
        checked: false
    },
    {
        id: '09',
        content: '大規模畑作・野菜作における機械収穫作業',
        checked: false
    },
    {
        id: '10',
        content: 'スピードスプレーヤによる農薬散布作業',
        checked: false
    },
    {
        id: '11',
        content: 'モノレールによる作業',
        checked: false
    },
    {
        id: '12',
        content: '牧草収穫作業',
        checked: false
    },
    {
        id: '13',
        content: '牛の管理作業',
        checked: false
    }
]

class SecurityTaskChoice extends React.Component
{

    constructor(props) {
        super(props)
        this.state =  {
            securityTodayTaskList: securityTodayTaskList
        }
    }

    checkTask(e) {

        const selected = securityTodayTaskList.filter(
            function (elm) {
                return 'task' + elm.id === e.target.name
            }
        )
        selected[0].checked = e.target.checked
        this.setState(
            {
                securityTodayTaskList: securityTodayTaskList
            }
        )
    }

    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">一般社団法人 日本農業機械化協会</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}><a href="/">トップへ</a></MenuItem>
                                <MenuItem eventKey={3.2}>ログアウト</MenuItem>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="row">
                    <Grid>
                        <Row className="show-grid">
                            <h1>[14]今日の作業の選択</h1>
                            <ol class="list-group">
                                <li class="list-group-item">
                                    以下の作業の選択
                                </li>
                            </ol>
                        </Row>
                        <Row className="show-grid">
                            <Col md={6}>
                                <ul class="list-group">
                                    {
                                        this.state.securityTodayTaskList.map(task =>
                                            <li class="list-group-item" key={task.id}>
                                                <Checkbox name={'task' + task.id} check={task.checked} onClick={(e) => this.checkTask(e)}>
                                                    {task.content}
                                                </Checkbox>
                                            </li>
                                        )
                                    }
                                </ul>
                            </Col>
                            <Col md={6}>
                                {
                                    this.state.securityTodayTaskList
                                        .filter((elm) => elm.checked === true)
                                        .map(task =>
                                        <li class="list-group-item" key={task.id}>
                                            <span>
                                                {task.content}
                                            </span>
                                        </li>
                                    )
                                }
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col md={6}>
                                <Button bsStyle='warning' bsSize='lg' href='/security/top'>戻る</Button>
                            </Col>
                            <Col md={6}>
                                <Button bsStyle='info' bsSize='lg' href='/security/weatherData'>次へ</Button>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default SecurityTaskChoice
