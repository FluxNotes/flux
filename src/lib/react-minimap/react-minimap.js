import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types'
import Child from './components/Child'
import './react-minimap.css'
import Lang from 'lodash';

export class Minimap extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    selector: PropTypes.string.isRequired,
    width: PropTypes.number, /** in pixel */
    height: PropTypes.number, /** in pixel */
    keepAspectRatio: PropTypes.bool,
    isFullHeight: PropTypes.bool,
    childComponent: PropTypes.any,
    titleAttribute: PropTypes.string,
    onMountCenterOnX: PropTypes.bool,
    onMountCenterOnY: PropTypes.bool,
  };

  static defaultProps = {
    className: "",
    width: 200,
    height: 200,
    keepAspectRatio: false,
    childComponent: Child,
    onMountCenterOnX: false,
    onMountCenterOnY: false,
  };

  constructor(props) {
    super(props);
    this.down = this.down.bind(this)
    this.move = this.move.bind(this)
    this.synchronize = this.synchronize.bind(this)
    this.init = this.init.bind(this)
    this.up = this.up.bind(this)

    this.resize = _.throttle(this.synchronize, 100)

    this.state = {
      children: null,
      viewport: null,
      width: props.width,
      height: props.height,
      inEditMode: false,
    };

    this.downState = false
    this.initState = false
  }

  componentDidMount() {
    const {onMountCenterOnX, onMountCenterOnY} = this.props
    setTimeout(() => this.synchronize({centerOnX: onMountCenterOnX, centerOnY:onMountCenterOnY}));
    window.addEventListener( "resize", this.resize);
    this.init()
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.keepAspectRatio !== this.props.keepAspectRatio) {
      setTimeout(this.synchronize);
    } else if (nextProps.children !== this.props.children) {
      setTimeout(this.synchronize);
    }
  }

  componentDidUpdate() {
    if (this.initState) {
      this.initState = false
    } else {
      this.initState = true
      this.init()
    }
  }

  init() {
    const {childComponent, keepAspectRatio} = this.props;
    const ChildComponent = childComponent;
    const {scrollWidth, scrollHeight, scrollTop, scrollLeft} = this.source;
    const sourceRect = this.source.getBoundingClientRect();

    let {width, height} = this.props
    height = (this.props.isFullHeight) ? sourceRect.height : this.props.height;

    let ratioX = width / scrollWidth;
    let ratioY = height / scrollHeight;

    if (keepAspectRatio) {
      if (ratioX < ratioY) {
        ratioY = ratioX
        height = Math.round( scrollHeight / (scrollWidth / width) )
      } else {
        ratioX = ratioY
        width = Math.round( scrollWidth / (scrollHeight / height) )
      }
    }

    const nodes = this.ref.querySelectorAll(this.props.selector)
    let diff = 0;
    this.setState({
      ...this.state,
      height,
      width,
      children: _.map(nodes, (node, key) => {
        const {width, height, left, top} = node.getBoundingClientRect()

        const wM = width * ratioX;
        let hM = Math.round(height * ratioY);
        const xM = (left + scrollLeft - sourceRect.left) * ratioX;
        const yM = ((top + scrollTop - sourceRect.top) * ratioY) + diff;
        const title = node.getAttribute(this.props.titleAttribute);
        const shortTitle = node.getAttribute(this.props.shortTitleAttribute);

        if (hM < 0) {
          diff += 0 - hM;
          hM = 0;
        }

        return (
          <ChildComponent
            key={key}
            width={Math.round( wM )}
            height={hM}
            left={Math.round( xM )}
            top={Math.round( yM )}
            node={node}
            title={title}
            shortTitle={shortTitle}
            inEditMode={this.state.inEditMode}
            preferenceManager={this.props.preferenceManager}
          />
        )
      })
    })
  }

    moveToSection(sectionName) {
        const sectionElements = Array.from(this.ref.querySelectorAll(".section-header>span"));
        const sectionNodes = sectionElements.filter(el => el.textContent === sectionName);
        if (!sectionNodes || sectionNodes.length === 0) return `Section '${sectionName}' not found.`;

        if (Lang.isUndefined(this.x) || Lang.isUndefined(this.y)) {
            this.x = 0
            this.y = 0;
        }
        sectionNodes[0].scrollIntoView();
        return null;
    }

    isScrolledIntoView(elem) {
        const overall_div = document.querySelector('.minimap-container');
        var docViewTop = this.ref.clientTop; //this.ref.scrollTop;
        var docViewBottom = docViewTop + overall_div.clientHeight; //this.ref.clientHeight; //scrollHeight

        const { height, top} = elem.getBoundingClientRect()
        var elemTop = top;
        var elemBottom = elemTop + height;
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    // if we just have a section name, move to it
    // if we have a section and subsection names, move to section and then move to subsection if its not already visible.
    moveToSubsection(sectionName, subsectionName) {
        let result = this.moveToSection(sectionName);
        // if no subsectionName specified or got an error on scroll to section, we're done
        if (!subsectionName || !Lang.isNull(result)) return result;
        // if we have a subsectionName and scrolling to the section doesn't make entire subsection visible,
        // just scroll to subsection instead
        const subsectionSpans = Array.from(this.ref.querySelectorAll(".list-subsection-header>span"));
        const subsectionNodes = subsectionSpans.filter(el => el.textContent === subsectionName);
        if (!subsectionNodes || subsectionNodes.length === 0) return `Subsection '${subsectionName}' of section '${sectionName}' not found.`;
        const isVisible = this.isScrolledIntoView(subsectionNodes[0]);
        if (!isVisible) {
            subsectionNodes[0].scrollIntoView();
        }
        return null;
    }

  down( e ) {
    if (!this.state.inEditMode) {
      const pos = this.minimap.getBoundingClientRect()

      this.x = Math.round( pos.left + this.l + this.w / 2 );
      this.y = Math.round( pos.top + this.t + this.h / 2 );

      this.downState = true
      this.move( e );
    }
  }

  up() {
    this.downState = false
  }

  move( e ) {
    if (this.downState === false)
      return

    let event;

    e.preventDefault();
    if ( e.type.match( /touch/ ) ) {
      if ( e.touches.length > 1 ) {
        return;
      }
      event = e.touches[ 0 ];
    } else {
      event = e;
    }

    this.scrollTo(event.clientX, event.clientY);
  }

  scrollTo(x, y) {
    const {width, height} = this.state

    let dx = x - this.x;
    let dy = y - this.y;
    if ( this.l + dx < 0 ) {
      dx = -this.l;
    }
    if ( this.t + dy < 0 ) {
      dy = -this.t;
    }
    if ( this.l + this.w + dx > width ) {
      dx = width - this.l - this.w;
    }
    if ( this.t + this.h + dy > height ) {
      dy = height - this.t - this.h;
    }

    this.x += dx;
    this.y += dy;

    this.l += dx;
    this.t += dy;

    // Sanity checks:
    this.l = (this.l < 0 ? 0 : this.l)
    this.t = (this.t < 0 ? 0 : this.t)

    const coefX = width / this.source.scrollWidth;
    const coefY = height / this.source.scrollHeight;
    const left = this.l / coefX;
    const top = this.t / coefY;


    this.source.scrollLeft = Math.round( left );
    this.source.scrollTop = Math.round( top );
    this.redraw();
  }

  synchronize(options) {
    const {width, height} = this.state

    const rect = this.source.getBoundingClientRect()

    const dims = [ rect.width, rect.height ];
    const scroll = [ this.source.scrollLeft, this.source.scrollTop ];
    const scaleX = width / this.source.scrollWidth;
    const scaleY = height / this.source.scrollHeight;

    const lW = dims[ 0 ] * scaleX;
    const lH = dims[ 1 ] * scaleY;
    const lX = scroll[ 0 ] * scaleX;
    const lY = scroll[ 1 ] * scaleY;

    // Ternary operation includes sanity check
    this.w = (Math.round( lW ) > this.state.width) ? this.state.width : Math.round( lW );
    this.h = (Math.round( lH ) > this.state.height) ? this.state.height : Math.round( lH );
    this.l = Math.round( lX );
    this.t = Math.round( lY );

    if (options !== undefined) {
      if (options.centerOnX === true) {
        this.source.scrollLeft  = this.source.scrollWidth / 2 - dims[ 0 ]  / 2
      }

      if (options.centerOnY === true) {
        this.source.scrollTop  = this.source.scrollHeight / 2 - dims[ 1 ]  / 2
      }
    }

    this.redraw();
  }

  redraw() {
    this.setState({
      ...this.state,
      viewport: (
        <div
          className="minimap-viewport"
          style={{
            width : this.w,
            height : this.h,
            left : this.l,
            top : this.t
          }}
        />
      )
    })
  }

  editMinimapSections = () => {
    const { inEditMode } = this.state;
    if (inEditMode) {
      this.props.doneEditingMinimap();
    } else {
      this.props.startEditingMinimap()
    }
    this.setState({ inEditMode: !inEditMode });
  }

  render() {
    const {width, height, inEditMode} = this.state;
    const editButtonText = inEditMode ? 'Done' : 'Edit';

    return (
      <div
        className={"minimap-container " + this.props.className}
        onScroll={this.synchronize}
        ref={(source) => {this.source = source;}}
      >
        <button className="minimap-children" style={{ width: `${width}px` }} onClick={this.editMinimapSections}>
          {editButtonText}
        </button>
        <div
          className="minimap"
          style={{
            width: `${width}px`,
            height: `${height}px`,
          }}

          ref={(minimap) => { this.minimap = minimap; }}

          onMouseDown={this.down}
          onTouchStart={this.down}
          onTouchMove={this.move}
          onMouseMove={this.move}
          onTouchEnd={this.up}
          onMouseUp={this.up}
        >
          {!inEditMode && this.state.viewport}
          {this.state.children}
        </div>

        <div ref={(container) => { this.ref = container; }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Minimap
