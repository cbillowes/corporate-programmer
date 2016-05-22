module.exports =
  options:
    engine: 'im'
    sizes: [
      {
        name: 'share'
        width: 458
        height: 230
        quality: 80
        aspectRatio: false
      }
      {
        name: 'thumb'
        width: 700
        height: 180
        quality: 80
        aspectRatio: false
      }
      {
        name: '320'
        width: 320
        height: 100
        quality: 80
        aspectRatio: false
      }
      {
        name: '480'
        width: 480
        height: 150
        quality: 80
        aspectRatio: false
      }
      {
        name: '640'
        width: 640
        height: 200
        quality: 80
        aspectRatio: false
      }
      {
        name: '960'
        width: 960
        height: 300
        quality: 80
        aspectRatio: false
      }
      {
        name: '1024'
        width: 1024
        height: 320
        quality: 80
        aspectRatio: false
      }
      {
        name: '1280'
        width: 1280
        height: 400
        quality: 80
        aspectRatio: false
      }
      {
        name: '1440'
        width: 1440
        height: 450
        quality: 80
        aspectRatio: false
      }
      {
        name: '1600'
        width: 1600
        height: 500
        quality: 80
        aspectRatio: false
      }
      {
        name: '1920'
        width: 1920
        height: 600
        quality: 80
        aspectRatio: false
      }
    ]
    newFilesOnly: false
  debug: files: [ {
    expand: true
    src: [ '**/*.jpg' ]
    cwd: '<%= paths.src.app %>/_assets/post-images'
    custom_dest: '<%= paths.src.app %>/.img/{%= name %}'
  } ]
