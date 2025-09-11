


const fromValue = () => {
    const title = document.getElementById("title").value
    const textArea = document.getElementById("text-area").value;
    const datePicker = document.getElementById("date-picker").value;

    return { title, textArea ,datePicker};

}

const randomID = () => {

    const id = Math.floor(Math.random() * 100000);
    return id;
}


const randomColor = () => {
    const color = ['red', 'green', 'black'];
    const index = Math.floor(Math.random() * color.length);

    return color[index];
}

// user can add task , remove , edit 


document.addEventListener("DOMContentLoaded", () => {
    const taskDB = [];
    const calendarEl = document.getElementById('calendar');

    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        editable: true,
        selectable: true,
        events: [], // start empty
        dateClick: function () {
            alert('A day has been clicked!');
        }
    });

    calendar.render();

    const btn = document.getElementById("add");
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const { title, textArea,datePicker } = fromValue();

        const task = {
            title,
            description: textArea,
            date: datePicker,
            id: randomID(),
            color: randomColor()
        };

        taskDB.push(task);
        console.log(taskDB);

        // Add the task to FullCalendar
        calendar.addEvent({
            title: task.title,
            start: task.date,
            color: task.color
        });
        
    });
});
