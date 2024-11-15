export default (req, res) => {
    const { method } = req;
    const { email, password } = req.body;

    if(method !== 'POST') {
        return res.status(404).end();
    }
}