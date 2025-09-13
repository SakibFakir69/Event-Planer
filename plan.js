





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






document.addEventListener("DOMContentLoaded", () => {
    const taskDB = [];
    const calendarEl = document.getElementById('calendar');


    // button

    const buttonSection = document.getElementById("button-section");
    console.log(buttonSection);








    const calendar = new FullCalendar.Calendar(calendarEl, {
        // initialView: 'dayGridMonth',
        initialView: setValue(),
        editable: true,
        selectable: true,
        events: [],

        eventDidMount: function (info) {

            // delete

            const deleteBtn = document.createElement('button');
            deleteBtn.innerText = 'X',
                deleteBtn.style.height = "20px"
            deleteBtn.style.marginTop = '10px'
            deleteBtn.style.width = "40px"

            deleteBtn.addEventListener("click", (e) => {

                e.stopPropagation();
                info.event.remove();

            })
            console.log(info)

            info.el.style.height = '60px';
            info.el.style.display = 'flex justifiy-content:between'
            info.el.style.fontSize = "18px"
            info.el.overflowX = "auto"

            info.el.appendChild(deleteBtn);








        },


        dateClick: function (info) {
            const dateInfo = taskDB.filter((item) => item.date === info.dateStr);

            if (dateInfo.length === 0) return;

            const { title, description } = dateInfo[0];

            document.getElementById('modalTitle').textContent = `Title :`+ title;
            document.getElementById('modalBody').textContent = `Description : ` + description;

            const modalEl = document.getElementById('taskModal');
            const modal = new bootstrap.Modal(modalEl);
            modal.show();
        }

    });

    calendar.render();

    // change calander
    document.getElementById("year").addEventListener("click", () => {
        calendar.changeView("dayGridYear");
    });

    document.getElementById("month").addEventListener("click", () => {
        calendar.changeView("dayGridMonth");
    });

    document.getElementById("week").addEventListener("click", () => {
        calendar.changeView("dayGridWeek");
    });




    const btn = document.getElementById("add");
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const { title, textArea, datePicker, datePickerEnd } = fromValue();

        if (!title || !textArea || !datePicker || !datePickerEnd) {
            alert("Please Enter your event full info");
            return;
        }

        const task = {

            title,
            description: textArea,
            date: datePicker,
            id: randomID(),
            color: randomColor(),
            end: datePickerEnd,
        };

        taskDB.push(task);
        console.log(taskDB);

        // Add the task to FullCalendar
        calendar.addEvent({
            id: task.id,
            title: task.title,
            start: task.date,
            color: task.color,
            end: task.end,
        });

        //   remove value after add click
        document.getElementById("title").value = "";
        document.getElementById("text-area").value = "";
        document.getElementById("date-picker").value = "";
        document.getElementById("date-picker-end").value = "";

    });
});
