/**
 * Tip Component Demo for tingle
 * @author minjie
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */

let classnames = require('classnames');
let Button = require('tingle-button');
let Tip = require('../src');

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleClickSuccess() {
        Tip.show({
            icon: 'success',
            text: '提交成功',
            onHide() {
                console.log('success tip is hidden');
            }
        });
    }

    handleClickError() {
        Tip.show({
            icon: 'error',
            text: '提交出错',
            onHide() {
                console.log('error tip is hidden');
            }
        });
    }

    handleClickFail() {
        Tip.show({
            icon: 'fail',
            text: '网络连接失败',
            duration: 3000,
            closeable: true,
            onHide() {
                console.log('fail tip is hidden');
            }
        });
    }

    handleClickLoading() {
        Tip.show({
            icon: 'loading',
            text: '加载中...',
            autoHide: false,
            onHide() {
                console.log('loading tip is hidden');
            }
        });

        setTimeout(() => Tip.hide(), 5000);
    }

    handleClickText() {
        Tip.show({
            text: '文字提醒文字提醒文字提醒',
            onHide() {
                console.log('text tip is hidden');
            }
        });
    }


    render() {
        return <div className="demoWrap">
            <Button className="demo" onClick={this.handleClickSuccess.bind(this)}>success</Button>
            <Button className="demo" onClick={this.handleClickError.bind(this)}>error</Button>
            <Button className="demo" onClick={this.handleClickFail.bind(this)}>fail</Button>
            <Button className="demo" onClick={this.handleClickLoading.bind(this)}>loading</Button>
            <Button className="demo" onClick={this.handleClickText.bind(this)}>text</Button>
            <Tip text="文字提醒文字提醒文字提醒" show={true} autoHide={false} closeable={true} />
        </div>
    }
};

module.exports = Demo;
