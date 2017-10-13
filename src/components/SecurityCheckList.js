import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Checkbox from 'react-bootstrap/lib/Checkbox'
import { CommonHeader } from '../common/CommonHeader'

export default class SecurityCheckList extends React.Component {

    render() {
        return (
            <div className="row">
                <Grid>
                    <Row className="show-grid">
                        <h1>[16]チェックリストの生成・表示</h1>
                        <ol>
                            <li>
                                選択した今日の作業と収集した今日の気象データから、チェックリストを作成する。
                            </li>
                            <li>
                                作成方法については検討中
                            </li>
                        </ol>
                        <h1>[17]最優先チェックリストの選択</h1>
                        <ol>
                            <li>
                                表示されたチェックリストから、最優先事項を選択する。
                            </li>
                        </ol>
                    </Row>
                    <Row className="show-grid">
                        <ul>
                            <li>
                                <Checkbox>
                                    チェック項目１
                                </Checkbox>
                            </li>
                            <li>
                                <Checkbox>
                                    チェック項目２
                                </Checkbox>
                            </li>
                            <li>
                                <Checkbox>
                                    チェック項目３
                                </Checkbox>
                            </li>
                        </ul>
                    </Row>
                    <Row className="show-grid">
                        <Col md={6}>
                            <Button bsStyle='warning' bsSize='lg' href='/security/weatherData'>戻る</Button>
                        </Col>
                        <Col md={6}>
                            <Button bsStyle='info' bsSize='lg' href='/security/accidentCase'>次へ</Button>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
