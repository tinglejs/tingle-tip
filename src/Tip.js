/**
 * Tip Component for tingle
 * @author minjie
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */

let classnames = require('classnames');
let Layer = require('tingle-layer');
let Icon = require('tingle-icon');

class Tip extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            show: false,
            icon: props.icon,
            text: props.text,
            mask: props.mask,
            onHide: props.onHide,
            duration: props.duration
        }
    }

    show(options) {
        let width = options.icon ? options.width || this.props.width : 216;

        this.setState({
            width: width,
            text: options.text,
            icon: options.icon,
            onHide: options.onHide || this.props.onHide,
            show: true,
            mask: true,
            duration: options.duration
        });
    }

    hide() {
        clearTimeout(this.timer);
        this.setState({
            show: false
        });
        this.state.onHide();
    }

    render() {
        let t = this;
        let {icon, text, show, duration, ...other} = t.state;

        icon = icon ? <div key={"tingle-tip-" + icon} className="tTipIcon tFAC tPR">
                <Icon id={"tingle-tip-" + icon} />
            </div> : '';

        clearTimeout(t.timer);
        t.timer = show && setTimeout(function(){t.hide();},duration || 3000);

        return <Layer show={show} {...other}>
            <div ref="root" className={classnames('tTip', {
                [t.props.className]: !!t.props.className
            })}>
                {icon}
                <div className="tTipContent tFCf tLH1_5 tFAC">{text}</div>
            </div>
        </Layer>;
    }
}

Tip.defaultProps = {
    onHide() {},
    show: false,
    mask: true,
    text: '',
    icon: '',
    width: 136,
    duration: 3000
}

// http://facebook.github.io/react/docs/reusable-components.html
Tip.propTypes = {
    show: React.PropTypes.bool,
    mask: React.PropTypes.bool,
    onHide: React.PropTypes.func,
    width: React.PropTypes.number,
    text: React.PropTypes.string,
    icon: React.PropTypes.string,
    duration: React.PropTypes.number
}

let WRAPPER_ID = '__TingleGlobalTip__';
let doc = document;

Tip.global = null;
Tip.show = function (options){
    // 只有首次全局调用时，才会创建全局实例
    if (!Tip.global) {
        let wrapper = doc.getElementById(WRAPPER_ID);
        if (!wrapper) {
            wrapper = doc.createElement('div');
            wrapper.id = WRAPPER_ID;
            doc.body.appendChild(wrapper);
        }
        Tip.global = React.render(<Tip/>, wrapper);
    }
    Tip.global.show(options);
}

Tip.hide = function()  {
    Tip.global && Tip.global.hide();
}

Tip.displayName = 'Tip';

module.exports = Tip;
