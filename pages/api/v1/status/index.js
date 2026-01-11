function status(request, response) {
    response.status(200).json({ chave: "voce é legal" });
}

export default status;
