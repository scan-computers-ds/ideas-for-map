// need this kind of flow:

// https://developer.mozilla.org/en-US/docs/Web/API/Window/message_event
// render need to omit a message event from their app
// we will tap into events and consume the data it provides

// example of how we could tap into an event
window.addEventListener('message', event => {
  if (!event.data.origin || !event.data) return;
  if (!event.data.data) return;

  if (event.data) {
    switch (event.data.event) {
      case 'PLOT_CLICKED':
        // {
        //   plotId: 12345,
        // }
        // we could open a modal here by fetching the plot from our store
        break;
      case 'PLOT_DESELECTED':
        // close modal here
        break;
    }
  }
}, false);

