
import React from "react";
import { useParams } from "react-router-dom";

export function UserPage() {
  const { userAddress } = useParams(); // Extract the user address from the URL

  return (
    <div style={styles.container}>
      <h1>Welcome, {userAddress}</h1>
      <p>This is your personalized dashboard.</p>
      {/* User specific content goes below the comment.Its gonna be different from the reality altogether */}

    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
    color: "#333",
  },
};

export default UserPage;
