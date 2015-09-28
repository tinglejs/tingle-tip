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

        this.state = Object.assign({}, props);
        this.state.width = this.state.icon ? this.state.width : '80%';
    }

    show(options) {
        let t = this;

        options.width = options.icon ? options.width || t.props.width : '80%';
        options.show = true;

        t.setState(Object.assign({}, t.props, options));
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
        let {icon, text, show, duration, autoHide, onHide, ...other} = t.state;

        icon = icon ? <div key={"tingle-tip-" + icon} className={"tTipIcon tFAC tPR tTipIcon" + icon[0].toUpperCase() + icon.slice(1)}>
                <Icon id={"tingle-tip-" + icon} />
            </div> : null;

        text = text ? <div className="tTipContent tFCf tLH1_5 tFAC">{text}</div> : null;

        clearTimeout(t.timer);
        t.timer = show && autoHide && setTimeout(() => t.hide(), duration);

        return <Layer show={show} onHide={t.hide.bind(this)} {...other} > 
            <div ref="root" className={classnames('tTip', {
                [t.props.className]: !!t.props.className
            })} onClick={() => {t.state.closeable && t.hide()}}>
                {icon}
                {text}
            </div>
        </Layer>;
    }
}

Tip.defaultProps = {
    onHide() {},
    show: false,
    mask: true,
    autoHide: true,
    closeable: false,
    text: '',
    icon: '',
    duration: 1500
}

// http://facebook.github.io/react/docs/reusable-components.html
Tip.propTypes = {
    show: React.PropTypes.bool,
    mask: React.PropTypes.bool,
    autoHide: React.PropTypes.bool,
    closeable: React.PropTypes.bool,
    onHide: React.PropTypes.func,
    width: React.PropTypes.string,
    text: React.PropTypes.string,
    icon: React.PropTypes.string,
    duration: React.PropTypes.number
}

let WRAPPER_ID = '__TingleGlobalTip__';
let doc = document;

Tip.global = null;
Tip.show = (options) => {
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

Tip.hide = () => {
    Tip.global && Tip.global.hide();
}

Tip.displayName = 'Tip';

module.exports = Tip;
