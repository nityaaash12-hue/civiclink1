import "./Categories.css";

const categories = [
  {
    icon: "🛣️",
    title: "Road Damage",
    desc: "Potholes, cracked roads & damaged footpaths",
  },
  {
    icon: "🗑️",
    title: "Garbage",
    desc: "Overflowing bins & waste collection issues",
  },
  {
    icon: "💡",
    title: "Street Lights",
    desc: "Broken or non-working street lights",
  },
  {
    icon: "🚰",
    title: "Water Supply",
    desc: "Leakages & water supply problems",
  },
  {
    icon: "🌳",
    title: "Parks",
    desc: "Damaged parks & public spaces",
  },
  {
    icon: "🚦",
    title: "Traffic",
    desc: "Traffic signal & road safety issues",
  },
];

function Categories() {
  return (
    <section className="categories">
      <h2>These are issues reported by your community.</h2>

      <p className="category-subtitle">
       Have one too? Report yours.
      </p>

      <div className="category-grid">
        {categories.map((item, index) => (
          <div className="category-card" key={index}>
            <div className="category-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;