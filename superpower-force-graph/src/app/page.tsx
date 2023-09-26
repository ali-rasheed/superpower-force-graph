"use client"
import genRandomTree from './utility-functions/random-data-gen';
import ForceGraph2D from 'react-force-graph-2d';
import ForceGraph3D from 'react-force-graph-3d';
import * as THREE from 'three';
import MyForceGraph from './graphs/SuperForceGraph';
import dynamic from 'next/dynamic';



export default function Home() {
  const imgs = [['a.jpg', "something"], 'a.jpg', 'a.jpg', 'a.jpg',];

  const gData = {
    nodes: imgs.map((img, id, text) => ({ id, img, text })),
    links: [...Array(imgs.length).keys()]

      .filter(id => id)
      .map(id => ({
        source: id,
        target: Math.round(Math.random() * (id - 1))
      }))
  };

  return (

    <main
      className='w-full flex-1 px-20 text-center
      bg-white'
    >


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
    </main>
  )
}

