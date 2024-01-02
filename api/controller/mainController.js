module.exports = mainController = () => {
    mainController.exampleGet = (req,resp) => {
        console.log(req.headers);
        resp.json('API está de pé e funcionando!');
    }
    return mainController;
}