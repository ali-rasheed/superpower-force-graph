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
  const DynamicGraph = dynamic(() => import('./graphs/SuperForceGraph'), { ssr: false });
  return (

    <main
      className='w-full flex-1 px-20 text-center
      bg-white'
    >
      <DynamicGraph gData={gData} />

    </main>
  )
}

