import { useState } from "react";
import styled from "styled-components";
import { Column, Section } from "../../_shared/styledComponents";

const Auth = () => {
  const [message, setMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const formValidator = (formData: {
    email?: string;
    password?: string;
    name?: string;
  }) => {
    if (!formData.email) return "Email is required";
    if (!formData.password) return "Password is required";
    if (!formData.name) return "Name is required";

    return null;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = {
      email,
      password,
      name,
    };
    const validate = formValidator(formData);
    if (validate) {
      return setMessage(validate);
    } else {
      setMessage("success Login ");
    }
  };
  return (
    // <Section
    //   height="100vh"
    //   width="100vw"
    //   display="flex"
    //   justifyContent="center"
    //   style={{ alignItems: "center" }}
    // >
    //   <Column
    //     background="#fff"
    //     height="300px"
    //     width="500px"
    //     justifyContent="center"
    //     alignItems="center"
    //   >
    //     {message && <p style={styles.p}>{message}</p>}

    //     <form style={styles.form} onSubmit={handleSubmit}>
    //       <input
    //         onChange={(e: any) => setEmail(e.target.value)}
    //         style={styles.input}
    //         placeholder="Email"
    //         type="email"
    //         width="100%"
    //       />
    //       <input
    //         onChange={(e: any) => setPassword(e.target.value)}
    //         style={styles.input}
    //         placeholder="name"
    //         type="password"
    //       />
    //       <input
    //         onChange={(e: any) => setName(e.target.value)}
    //         style={styles.input}
    //         placeholder="password"
    //         type="password"
    //       />
    //       <button type="submit" style={styles.button}>
    //         Sign in
    //       </button>
    //     </form>
    //   </Column>
    // </Section>
    <div></div>
  );
};

export default Auth;

const styles = {
  input: {
    padding: "10px",
    width: "100%",
    marginBottom: 10,
    borderRadius: "4px",
  },
  form: {
    width: "100%",
    padding: "10px",
  },
  button: {
    padding: "10px",
    width: "100%",
    maxWidth: "200px",
    color: "#000000",
  },
  p: {
    color: "red",
    fontSize: "1.5em",
  },
};
