import { useState } from "react";
import "./App.css";

interface Student {
  name: string;
  age: number;
  course: string;
}

export default function App() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [course, setCourse] = useState<string>("");
  const [student, setStudent] = useState<Student | null>(null);

  function handleSubmit() {
    if (!name.trim() || age <= 0 || !course) {
      alert("Please enter all details");
      return;
    }

    setStudent({ name, age, course });
  }

  return (
    <div className="container">
      <h1>Student Registration</h1>

      <label>Name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />

      <label>Age</label>
      <input
        type="number"
        value={age || ""}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="Enter age"
      />

      <label>Course</label>
      <select
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      >
        <option value="">Select course</option>
        <option value="React">React</option>
        <option value="Python">Python</option>
        <option value="JavaScript">JavaScript</option>
      </select>

      <button onClick={handleSubmit}>Register</button>

      {student && (
        <div className="result">
          <h2>Student Details</h2>
          <p>Name: {student.name}</p>
          <p>Age: {student.age}</p>
          <p>Course: {student.course}</p>
        </div>
      )}
    </div>
  );
}
