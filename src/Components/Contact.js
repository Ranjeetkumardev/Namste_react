const Contact = () => {
    return (
      <div>
        <h1>Contact us </h1>
        <form>
          <input
            type="text"
            className="m-2 p-2 border border-black rounded-md"
            placeholder="Name"
          />
          <input
            type="text"
            className="m-2 p-2 border border-black rounded-md"
            placeholder="Message"
          />
          <button className="bg-gray-100 m-2 p-2 rounded-md">Submit</button>
          
        </form>
      </div>
    );
}
export default Contact;