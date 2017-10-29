import React from 'react';
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Button from 'react-bootstrap/lib/Button'

import {LinkContainer} from 'react-router-bootstrap'

import VisibleSecurityCheckReport from '../containers/VisibleSecurityCheckReport'

/**
 * 「チェックリスト」の表示コンポーネント.
 */
export default class CheckList extends React.Component {

    /**
     * 印刷を実行します.
     */
    printSecurityCheckReport() {
        // localStrageにreactでrenderした内容を保存
        localStorage.removeItem('securityCheckReport')
        localStorage.setItem('securityCheckReport', document.getElementById('securityCheckReport').innerHTML)
        window.open('/SecurityCheckReport.html')
        // ローカル実行
        // window.open('./SecurityCheckReport.html')
    }

    render() {
        return (
            <div>
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
                                        <li className="list-group-item" key={task.id}>
                                            {task.content}
                                        </li>
                                    )
                                }
                            </Col>
                        </Row>

                        <dev style={{display: 'none'}}>
                            <VisibleSecurityCheckReport/>
                        </dev>

                        <Row className="show-grid">
                            <Col md={4}>
                                <LinkContainer to="./">
                                    <Button bsStyle='warning' bsSize='lg'>戻る</Button>
                                </LinkContainer>
                            </Col>
                            <Col md={4}>
                                <LinkContainer to="./checkList">
                                    <Button bsStyle='info' bsSize='lg'>次へ</Button>
                                </LinkContainer>
                            </Col>
                            <Col md={4}>
                                <Button bsSize='lg' onClick={this.printSecurityCheckReport} >印刷</Button>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        )
    }
}
