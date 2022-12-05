import { useEffect } from "react"

export default function AnimateCup() {
    let canvasStyle={
        position: 'absolute',
         display: 'block',
          backgroundColor:'rgba(255, 255, 255, 0.00)',
    }

    let overlayStyle={
        pointerEvents:'none',
         overflow:'hidden',
          width:280,
           height:126,
            position: 'absolute',
            left: 0,
             top: 0,
              display: 'block'
    }
    let animContStyle={
        backgroundColor:'rgba(255, 255, 255, 0.00)',
          width:280,
           height:126
    }
    


    useEffect(() => {
        
    }
    )

    return (

        <div id="animation_container" style={animContStyle}>
            <canvas id="canvas" width="280" height="126" style={canvasStyle}></canvas>
            <div id="dom_overlay_container" style={overlayStyle}>
            </div>
        </div>
    )

}

