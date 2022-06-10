export default process.env.NODE_ENV === "development"
  ? "http://165.232.88.235:5000"
  : process.env.NODE_ENV === "production" && "http://165.232.88.235:5000";
