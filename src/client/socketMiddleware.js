import io from 'socket.io-client';

export default function socketMiddleware() {
  const socket = io();
  return ({ dispatch }) => next => (action) => {
    if (typeof action === 'function') {
      return next(action);
    }

    const {
      event,
      emit,
      leave,
      handle,
      err,
      ...rest
    } = action;

    if(emit){
      return socket.emit(event,handle,err);
    }
    if (!event) {
      return next(action);
    }

    if (leave) {
      socket.removeListener(event);
    }

    let handleEvent = handle;
    if (typeof handleEvent === 'string') {
      handleEvent = result => dispatch({ type: handle, result, ...rest });
    }
    return socket.on(event, handleEvent);
  };
}