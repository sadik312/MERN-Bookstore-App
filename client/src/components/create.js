import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";

function Create() {
    const [form, setForm] = useState({
        name: "",
        position: "",
        level: ""
    });

    const navigate = useNavigate();
    // methods will update state props
    function updateForm(value) {
        return setForm((prov) => {
            return { ...prev, ...value };
        });
    }
    // function to handle submission
    async function onSubmit(e) {
        e.preventDefault();
        // when POST request sent to 'create' URL, add new record to db
        const newPerson = { ...form };
        await fetch("http://localhost:5000/record/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPerson),
        })
        .catch(error => {
            window.alert(error);
            return;
        });
        setForm({ name: "", position: "", level: "" });
        navigate("/");
    }
    // display form that takes user input
    return (
        <div>
            <h3>Create New Record</h3>
        </div>
    )


}
