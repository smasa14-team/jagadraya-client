import React, { PureComponent } from 'react'
import { debounce } from 'lodash'
import { Button, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'

export default class ScrollableContainer extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      items: this.props.items,
      hasOverflow: false,
      canScrollLeft: false,
      canScrollRight: false
    }

    this.checkForOverflow = this.checkForOverflow.bind(this)
    this.checkForScrollPosition = this.checkForScrollPosition.bind(this)

    this.debounceCheckForOverflow = debounce(this.checkForOverflow, 1000)
    this.debounceCheckForScrollPosition = debounce(
      this.checkForScrollPosition,
      200
    )

    this.container = null
  }

  componentDidMount() {
    this.checkForOverflow()
    this.checkForScrollPosition()

    this.container.addEventListener(
      'scroll',
      this.debounceCheckForScrollPosition
    )
  }

  componentWillUnmount() {
    this.container.removeEventListener(
      'scroll',
      this.debounceCheckForScrollPosition
    )
    this.debounceCheckForOverflow.cancel()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.items.length !== this.state.items.length) {
      this.checkForOverflow()
      this.checkForScrollPosition()
    }
  }

  checkForScrollPosition() {
    const { scrollLeft, scrollWidth, clientWidth } = this.container

    this.setState({
      canScrollLeft: scrollLeft > 0,
      canScrollRight: scrollLeft !== scrollWidth - clientWidth
    })
  }

  checkForOverflow() {
    const { scrollWidth, clientWidth } = this.container
    const hasOverflow = scrollWidth > clientWidth

    this.setState({ hasOverflow })
  }

  scrollContainerBy(distance) {
    this.container.scrollBy({ left: distance, behavior: 'smooth' })
  }

  buildItems() {
    if (this.props.items && this.props.items.length) {

      return this.props.items.map(item => {
        return (
          this.props.type === "activity" ?
            <Card className="item" key={item}>
              <CardImg src={item.image} alt={item.title} />
              <CardBody className="cardbody">
                <CardTitle>{item.title}</CardTitle>
                <CardText className="card-text">{item.detail}</CardText>
                <div className="item-detail">
                  <span className="item-date ">
                    {item.date}
                  </span>
                  <div>
                    <span className="fa fa-star checked"></span>
                    <span className="item-rating">
                      {item.rate}
                    </span>
                  </div>
                </div>
              </CardBody>
            </Card>
            :
            <Card className="item" key={item}>
              <CardImg src={item.image} alt={item.title} />
              <CardBody className="cardbody">
                <CardTitle>{item.title}</CardTitle>
                <div className="item-detail">
                  <span className="item-date ">
                    {item.date}
                  </span>
                  <div>
                    <span className="fa fa-star checked"></span>
                    <span className="item-rating">
                      {item.rate}
                    </span>
                  </div>
                </div>
              </CardBody>
            </Card>
        )
      })
    } else return null
  }

  buildControls() {
    const { canScrollLeft, canScrollRight } = this.state
    return (
      <div className="item-controls">
        <button
          type="button"
          disabled={!canScrollLeft}
          onClick={() => {
            this.scrollContainerBy(-200)
          }}
        >
          Previous
        </button>
        <button
          type="button"
          disabled={!canScrollRight}
          onClick={() => {
            this.scrollContainerBy(200)
          }}
        >
          Next
        </button>
      </div>
    )
  }

  render() {
    const { canScrollRight } = this.state
    return (
      <>
        <ul
          className="item-container"
          ref={node => {
            this.container = node
          }}
        >
          {this.buildItems()}
        </ul>
        <button disabled={!canScrollRight}
          onClick={() => this.scrollContainerBy(200)} className="Btn-next">></button>
      </>
    )
  }
}
