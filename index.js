import express from 'express'
import router from './router.js';
import fileUpload from 'express-fileupload';

const PORT = 3000;

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({ safeFileNames: true, preserveExtension: true }))
app.use('/api', router)



app.listen(PORT, () => console.log('server start port '))
