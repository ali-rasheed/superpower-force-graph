import React from 'react';
import THREE from 'three';
import ForceGraph3D from 'react-force-graph-3d';
const MainForceGraph = ({ gData }: any) => {
  return (


    <ForceGraph3D
      graphData={gData}
      nodeOpacity={1} // node opacity
      nodeResolution={8} // how thick the node is
      nodeVal={1} // node size
      nodeLabel='id'
      backgroundColor='white'
      linkWidth={.25}
      linkOpacity={1}
      linkColor='black'
      nodeThreeObject={({ img }) => {
        const imgTexture = new THREE.TextureLoader().load(`./imgs/level-01/${img}`);
        imgTexture.colorSpace = THREE.SRGBColorSpace;
        const material = new THREE.SpriteMaterial({ map: imgTexture });
        const sprite = new THREE.Sprite(material);
        sprite.scale.set(16, 16, 1);

        return sprite;
      }}

    />
  )
}