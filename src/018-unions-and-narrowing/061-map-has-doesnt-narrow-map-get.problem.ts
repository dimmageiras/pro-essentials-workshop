type Event = {
  message: string;
};

const processUserMap = (eventMap: Map<string, Event>) => {
  const errorEvent = eventMap?.get("error");

  if (errorEvent) {
    throw new Error(errorEvent.message);
  }
};
