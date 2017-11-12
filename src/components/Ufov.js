import React from 'react';
import Button from 'react-bootstrap/lib/Button'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

import {LinkContainer} from 'react-router-bootstrap'

import './Ufov.css';

/**
 * 「UFOV」の表示コンポーネント.
 */
class Ufov extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillUnMount() {
        this.props.onStop()
    }

    render() {
        return (
            <div>
                <div className="row">
                    <Grid>
                        <Row className="show-grid">
                            <h1>UFOV</h1>
                        </Row>
                        <Row className="show-grid">
                            <Col md={12}>
                                <ul className="list-group">
                                    {
                                        this.props.ufov.targetList.map((target) =>{
                                            if (target.active) {
                                                return (
                                                    <li className="list-group-item" >
                                                        <div className="blackCircle"
                                                             onClick={ !this.props.ufov.touched ?
                                                                 () => {
                                                                     this.props.onTouch()
                                                                 } : () => {}
                                                             }></div>
                                                    </li>
                                                )
                                            } else {
                                                return (
                                                    <li className="list-group-item" >
                                                        <div className="darkgrayCircle"></div>
                                                    </li>
                                                )
                                            }
                                        })
                                    }
                                </ul>
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col md={12}>
                                <label>ポイント：{this.props.ufov.point}</label>
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col md={6}>
                                <Button bsSize='lg' onClick={() => this.props.onStart()}>start</Button>
                            </Col>
                            <Col md={6}>
                                <Button bsSize='lg' onClick={() => this.props.onStop()}>stop</Button>
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

export default Ufov
