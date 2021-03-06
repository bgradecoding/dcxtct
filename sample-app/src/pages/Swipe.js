import React from 'react';
import ReactSwipe from 'react-swipe';
import {useSwipeable} from 'react-swipeable'

const Swipe = () => {

  let reactSwipeEl;

 const handlers = useSwipeable({
  onSwiped: (eventData) => console.log("User Swiped!", eventData),
  onSwipedLeft: () => reactSwipeEl.next(),
  onSwipedRight:() => reactSwipeEl.prev(),
  preventDefaultTouchmoveEvent: true,
    trackMouse: true
});

  return (
    <div>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
        <div {...handlers} style={{height:500, backgroundColor:'red', touchAction: 'pan-y'}}>PANE 1</div>
        <div {...handlers} style={{height:500, backgroundColor:'green', touchAction: 'pan-y'}}>PANE 2</div>
        <div {...handlers} style={{height:500, backgroundColor:'blue', touchAction: 'pan-y'}}>PANE 3</div>
      </ReactSwipe>
      <button onClick={() => reactSwipeEl.next()}>Next</button>
      <button onClick={() => reactSwipeEl.prev()}>Previous</button>
    </div>
  );
};

export default Swipe