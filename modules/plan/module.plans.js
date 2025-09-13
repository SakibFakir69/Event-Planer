



// ssot single source of trust
export const fromValue = () => {
    const title = document.getElementById("title").value
    const textArea = document.getElementById("text-area").value;
    const datePicker = document.getElementById("date-picker").value;
    const datePickerEnd = document.getElementById("date-picker-end").value

    return { title, textArea, datePicker, datePickerEnd };

}

export const randomID = () => {

    const id = Math.floor(Math.random() * 100000);
    return id;
}


export const randomColor = () => {
    const color = ['red', 'green', 'black'];
    const index = Math.floor(Math.random() * color.length);

    return color[index];
}

// user can add task , remove 


// setValue

export const setValue = (value = "dayGridMonth") => {

    return value;


}


