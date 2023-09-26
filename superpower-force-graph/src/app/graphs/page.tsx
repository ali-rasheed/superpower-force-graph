"use client"
import genRandomTree from '../utility-functions/random-data-gen';
import ForceGraph2D from 'react-force-graph-2d';
import ForceGraph3D from 'react-force-graph-3d';

import { useMemo, useCallback, useState } from "react";
import THREE from 'three';
const Home = () => {
  const imgs = [{ img: 'a.jpg', collapsed: false, childlinks: [] }, { img: 'a.jpg', collapsed: false, childlinks: [] }, { img: 'a.jpg', collapsed: false, childlinks: [] }, { img: 'a.jpg', collapsed: false, childlinks: [] }];

  return (<>
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

  </>
  )
}

export default Home;