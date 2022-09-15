import VideoService from "./VideoService.js"

class VideoController {
    async download(req, res) {
        try {
            const video = req.files
            const ans = await VideoService.saveVideo(video)
            res.json(ans)
    
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getvideo(req, res) {
        try {
            const {id} = req.params
            console.log(id)
            const answ = await VideoService.getVideo(id)
            console.log(answ)
            res.sendFile(answ)
            
        } catch (e) { 
            res.status(500).json(e)
        }

    }

    async delete(req, res) {
        try {
            const {id} = req.params
            console.log(id)
            const answ = await VideoService.deleteVideo(id)
            res.json(answ)
        } catch (e) {
            res.status(500).json(e)
        }

    }
}

export default new VideoController();