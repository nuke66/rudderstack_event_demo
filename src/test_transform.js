export function transformEvent(event, metadata) {
    const originalEvent = event;

    if (originalEvent.type === "track" && originalEvent.event === "bq_event_test") {
        const event_list = [originalEvent]; // Array to hold the transformed events
        const e_field_list = JSON.parse(JSON.stringify(originalEvent.properties.fields_updated))
        const unique_id =  parseInt(Date.now() + Math.random());

        e_field_list.forEach(item => {
            const keyword = Object.keys(item)[0];  
            const value = item[keyword];  
            const additionalEvent = JSON.parse(JSON.stringify(event))
            let text_value = "";
            let number_value = 0;

            if (value.constructor === Number && Number.isInteger(value)) {
                number_value = value;
            }
            else {
                text_value = value;
            }

            additionalEvent.properties = {
                id: unique_id,
                field_name: keyword,
                text_value: text_value,
                number_value: number_value
            };
            
            event_list.push(additionalEvent);
        });

        // Send orginal event and transformed events to the destination.
        return event_list;
    } else {
        // Otherwise just return the Original Event.
        return originalEvent;
    }
}