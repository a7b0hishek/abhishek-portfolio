function Project({ title, description, image }) {
    return (
      <div className="bg-secondary p-4 rounded-lg shadow-lg">
        <img src={image} alt={title} className="w-full h-40 object-cover rounded" />
        <h3 className="text-white text-xl font-bold mt-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    );
  }
  
  export default Project;
  