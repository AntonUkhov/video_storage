
import * as path from 'path';
import { unlink } from 'fs';

class VideoService {
    //function save video
    saveVideo(file) {
        try {
            const fileName = file.lolo.name;
            const filePath = path.resolve('static', fileName);
            file.lolo.mv(filePath)
            return fileName;
            
        } catch (error) {
            console.log(error)
        }
        
    }
    //function get video
    getVideo(id) {
        try {
            const fileName = id;
            const filePath = path.resolve('static', fileName);
            console.log(filePath)
            return filePath
        } catch (error) {
            console.log(error)
        }
    }
    //function delete video
    deleteVideo(id) {
        try {
            const fileName = id
            const filePath = path.resolve('static', fileName);
            unlink(filePath, (err) => {
                if (err) {
                    console.log(err)
                };
                console.log('delete');
                return 'delete'
            })

        } catch (error) {
            console.log(error)
        }
    }

}


export default new VideoService()