import React, { ChangeEventHandler } from "react";

export function Login() {

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value
    if (value.length === 9) {
    }
  };

  return <div>
    <input type="text" onChange={handleInputChange} />
  </div>
}