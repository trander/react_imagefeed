import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import sha1 from 'sha1'

class Images extends Component {

    uploadFile(files) {
        console.log('uploadFile: ')
        const image = files[0]
        // https://media-service.appspot.com/site/images/7OWDvgtE?crop=96
        // https://api.cloudinary.com/v1_1/<cloud name>/<resource_type>/upload

        const cloudName= 'denq2af9d'
        const url = "https://api.cloudinary.com/v1_1/"+cloudName+"/img/upload"

        const timestamp = Date.now()/1000
        const uploadPreset = 'd0hrt3wy'

        const paramsStr = 'timestamp='+timestamp='&upload_preset='+uploadPreset+"PMLf7RMLbEKZc_AKs5W2Hlxlz8c"
        const signature = sha1(paramsStr)

        const params = {
            'api_key': '728318899993142',
            'timestamp': timestamp,
            'upload_preset': uploadPreset,
            'signature': signature
        }
    }

    render() {
        return (
            <div>
                Images Component
                <Dropzone onDrop={this.uploadFile.bind(this)}/>
            </div>
        )
    }
}

export default Images
