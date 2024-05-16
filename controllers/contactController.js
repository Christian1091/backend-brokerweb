const nodeMailer = require('nodemailer');

const envioCorreo = (req, res) => {

    //const { nombres, asunto, mensaje } = req.body;
    //console.log(req.body);
    const contacto = req.body;

    /*res.json({
            ok: true,
            msg: req.body
        })*/
    //let body = req.body;

    let config = nodeMailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        post: 587,
        auth: {
            user: 'christianespinoza935@gmail.com',
            pass: 'scna buoa qoas nlct'
        }
    });

    const opciones = {
        from: contacto.nombres,
        subject: "Información Seguros",
        to: 'christianespinoza935@gmail.com', //Aqui va el correo de la empresa
        text: "Estimado VasBroker, " + contacto.mensaje + ", mis datos son: " + contacto.nombres + "," + contacto.asunto
    };

    config.sendMail(opciones, function(error, result) {

        if (error) return res.json({
            ok: 'Error al envio de email',
            msg: result
        });

        return res.json({
            ok: true,
            msg: result
        });
    })

}

module.exports = { envioCorreo }