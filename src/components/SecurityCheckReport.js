import React from 'react';

/**
 * 「チェックリスト」の表示コンポーネント.
 */
export default class SecurityCheckReport extends React.Component {

    render() {
        return (
            <section id="securityCheckReport" className="sheet padding-10mm">

                <h1>今日の作業の安全確認</h1>

                <article>
                    <ul>
                        {
                            this.props.checkList.map(task =>
                                <li key={task.id}>
                                    {task.content}
                                </li>
                            )
                        }
                    </ul>
                </article>
            </section>
        )
    }
}