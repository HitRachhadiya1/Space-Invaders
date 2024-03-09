const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

class Player{
    constructor(){
       

        this.velocity = {
            x: 0,
            y: 0,
        }

        this.image = new Image()
        this.image.src = './assets/images/player.png'
        this.image.onload = () => {
            this.width = this.image.width
            this.height = this.image.height
            this.position = {
                x: canvas.width / 2 - this.width / 2, 
                y: canvas.height - this.height
            }
        }
    }
     
    draw(){
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
    
    
}

const player = new Player()

function animate() {
    requestAnimationFrame(animate)

    c.fillRect(0,0, canvas.width, canvas.height)
    player.draw()
}

animate()
