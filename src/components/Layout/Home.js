import classes from "./Home.module.css";
import Card from "../UI/Card";
const Home = () => {
  return (
    <Card>
      <div className={classes.home}>
        <h1>Home</h1>
      </div>
    </Card>
  );
};

export default Home;
