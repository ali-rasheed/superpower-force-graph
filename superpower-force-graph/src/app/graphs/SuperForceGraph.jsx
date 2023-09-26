import dynamic from 'next/dynamic';
import React, { useState, useEffect,useMemo } from 'react';
import ForceGraph3D from 'react-force-graph-3d';
import ForceGraph2D from 'react-force-graph-2d';
import * as THREE from 'three';

const MyForceGraph = (graphData 
  ) => {
return(
  <ForceGraph2D
    graphData={genRandomTree(80)}
    nodeVal={1} // node size
    nodeLabel='id'
    backgroundColor='white'
    linkWidth={.25}
    // linkOpacity={1}
    linkColor={() => 'black'}
    nodeCanvasObject={({ img, node, ctx }) => {
      const size = 16;
      ctx.drawImage(img, node.x - size / 2, node.y - size / 2, size, size);

    }}



  // nodeThreeObject={({ img }) => {
  //   const imgTexture = new THREE.TextureLoader().load(`./imgs/level-01/${img}`);
  //   imgTexture.colorSpace = THREE.SRGBColorSpace;
  //   const material = new THREE.SpriteMaterial({ map: imgTexture });
  //   const sprite = new THREE.Sprite(material);
  //   sprite.scale.set(16, 16, 1);

  //   return sprite;
  // }
  // }
  />
)
  
}
export default MyForceGraph;
