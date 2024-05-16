const { Router } = require('express');
const { envioCorreo } = require('../controllers/contactController');

const router = Router();

router.post('/', envioCorreo);

/*router.get('/', (req, res) => {

    res.json({
        ok: true,
        usuarios: [{
            id: 123,
            nombre: 'Juan'
        }]
    });
});*/

module.exports = router;