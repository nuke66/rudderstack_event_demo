


export function transformEvent(event, metadata) {
    const originalEvent = event;
  
    if (originalEvent.type === "track" && ["wayfinder_complete", "mar_complete"].includes(originalEvent.event)) {
  
      // Deep clone the original event
      const additionalEvent = JSON.parse(JSON.stringify(event))
  
      // Apply additional transformations to the new event
      additionalEvent.event = "tool_complete";
  
      // Send both the original and new event to the destination.
      return [originalEvent, additionalEvent];
  
    } else {
      // Otherwise just return the original event.
      return originalEvent;
    }
  }