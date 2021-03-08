import React from "react";

function Form() {
  return (
    <div>
      <form>
        <div className="flex flex-col md:flex-row md:items-center mb-4">
          <label>Fullname: </label>
          <input
            type="text"
            className="focus:outline-none border-b flex-grow mx-2 md:p-1"
            name="fullname"
            required
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center mb-4">
          <label>Email: </label>
          <input
            type="email"
            className="focus:outline-none border-b flex-grow mx-2 md:p-1"
            name="email"
            required
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center mb-4">
          <label>PAssword: </label>
          <input
            type="password"
            className="focus:outline-none border-b flex-grow mx-2 md:p-1"
            name="password"
            required
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
