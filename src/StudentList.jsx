function StudentList(props) {
return (
    <div>
    <h2>Student Names</h2>

    <ul>
        {props.students.map((student, index) => (
        <li key={index}>{student}</li>
        ))}
    </ul>
    </div>
);
}

export default StudentList;