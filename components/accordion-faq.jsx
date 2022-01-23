import React, {Component} from 'React';
import ReactDOM from 'react-dom'
class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0
    };
  }

  /* componentDidMount() {
    window.setTimeout(() => {
      const el = ReactDOM.findDOMNode(this);
      const height = el.querySelector('.panel__inner').scrollHeight;
      this.setState({
        height
      });
    }, 333);
  }*/

  render() {
    const {label, content, activeTab, index, activateTab} = this.props;
    const {height} = this.state;
    const isActive = activeTab === index;
    const innerStyle = {
      height: `${isActive ? height : 0}px`
    }

    return (
      <div className='panel'
        role='tabpanel'
        aria-expanded={isActive}>
        <button className='panel__label'
          role='tab'
          onClick={activateTab}>
          {label}
        </button>
        <div className='panel__inner'
          style={innerStyle}
          aria-hidden={!isActive}>
          <p className='panel__content'>
            {content}
          </p>
        </div>
      </div>
    );
  }
}

class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0
    };

    this.activateTab = this.activateTab.bind(this);
  }

  activateTab(index) {
    this.setState(prev => ({
      activeTab: prev.activeTab === index ? -1 : index
    }));
  }

  render() {
    const {panels} = this.props;
    const {activeTab} = this.state;
    return (
      <div className='accordion' role='tablist'>
        {panels.map((panel, index) =>
          <Panel
            key={index}
            activeTab={activeTab}
            index={index}
            {...panel}
            activateTab={this.activateTab.bind(null, index)}
          />
        )}
      </div>
    );
  }
}

const panels = [
  {
    label: 'Seriously, Don\'t Use Icon Fonts',
    content: 'Icons are everywhere. These "little miracle workers" (as John Hicks described them) help us reinforce meaning in the interfaces we design and build. Their popularity in web design has never been greater; the conciseness and versatility of pictograms in particular make them a lovely fit for displays large and small. But icons on the web have had their fair share of challenges.',
  },
  {
    label: 'Screen Readers Actually Read That Stuff',
    content: 'Most assistive devices will read aloud text inserted via CSS, and many of the Unicode characters icon fonts depend on are no exception. Best-case scenario, your "favorite" icon gets read aloud as "black favorite star." Worse-case scenario, it\'s read as "unpronounceable" or skipped entirely.',
  },
  {
    label: 'They Fail Poorly and Often',
    content: 'When your icon font fails, the browser treats it like any other font and replaces it with a fallback. Best-case scenario, you\'ve chosen your fallback characters carefully and something weird-looking but communicative still loads. Worse-case scenario (and far more often), the user sees something completely incongruous, usually the dreaded "missing character" glyph.',
  },
  {
    label: 'They\'re a Nightmare if You\'re Dyslexic',
    content: 'Many dyslexic people find it helpful to swap out a website\'s typeface for something like OpenDyslexic. But icon fonts get replaced as well, which makes for a frustratingly broken experience.',
  },
  {
    label: 'There\'s Already a Better Way',
    content: 'SVG is awesome for icons! It\'s a vector image format with optional support for CSS, JavaScript, reusability, accessibility and a bunch more. It was made for this sort of thing.'
  },
];

const App = document.querySelector('#accordion-faq');

ReactDOM.render(<Accordion panels={panels} />, App);
