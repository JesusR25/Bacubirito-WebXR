// Copyright (c) 2021 8th Wall, Inc.
/* globals AFRAME */

// Component that places trees where the ground is clicked
AFRAME.registerComponent('tap-place', {
    init() {
      const ground = document.getElementById('Cob')
      ground.addEventListener('click', (event) => {
        console.log("FUnciono gente")
        // Create new entity for the new object
        const newElement = document.createElement('a-entity')
  
        // The raycaster gives a location of the touch in the scene
        const touchPoint = event.detail.intersection.point
        newElement.setAttribute('position', touchPoint)

      })
    },
  })