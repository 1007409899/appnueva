import * as CreateUser from "./controllers/Auth.controller";

app.use("/auth", CreateUser.CreateUser, (req, res) => {
    res.send('Hello World');
});

app.use("/auth", AuthRouter);
export default App;