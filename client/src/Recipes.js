import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [form, setForm] = useState({ title: "", ingredients: "", instructions: "", imageUrl: "" });

  useEffect(() => {
    axios.get("http://localhost:5000/api/recipes").then((res) => setRecipes(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await axios.post("http://localhost:5000/api/recipes", form, {
      headers: { Authorization: `Bearer ${token}` }
    });
    alert("Recipe added!");
  };

  return (
    <div>
      <h2>Recipes</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Title" onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <input placeholder="Ingredients" onChange={(e) => setForm({ ...form, ingredients: e.target.value })} />
        <input placeholder="Instructions" onChange={(e) => setForm({ ...form, instructions: e.target.value })} />
        <input placeholder="Image URL" onChange={(e) => setForm({ ...form, imageUrl: e.target.value })} />
        <button type="submit">Add Recipe</button>
      </form>
      <ul>
        {recipes.map((r) => (
          <li key={r._id}>
            <h3>{r.title}</h3>
            <p>{r.ingredients}</p>
            <img src={r.imageUrl} alt="" width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
}
