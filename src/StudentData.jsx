import React from "react";

function StudentData(props) {
const student = {
    name: "Swetha",
    course: "React JS",
    marks: 90
};

return (
    <div>
    {props.render(student)}
    </div>
);
}

export default StudentData;
