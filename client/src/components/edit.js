import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Edit() {
    const [form, setForm] = useState({
        name: "",
        position: "",
        level: "",
        records: [],
});
const params = useParams();
const navigate = useNavigate();
    useEffect(() => {
        async function fetchData() {
            const id = params.id.toString();
            const response = await
fetch(`http://localhost:5000/record/${params.id.toString()}`);
            if (!response.ok) {
                const message = `An error has occured: ${response.statusText}`;
                window.alert(message)
                return;
            }

            const record = await response.json();
            if (!record) {
                window.alert(`Record with id ${id} not found`);
                navigate("/");
                return;
            }
            setForm(record);
        }
        fetchData();
        return;
    }, [params.id, navigate]);

    // methods will update state props
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value};
        });
    }

}