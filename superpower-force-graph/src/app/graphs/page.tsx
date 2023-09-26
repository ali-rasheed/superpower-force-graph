"use client"
import genRandomTree from '../utility-functions/random-data-gen';
import ForceGraph2D from 'react-force-graph-2d';
import ForceGraph3D from 'react-force-graph-3d';

import { useMemo, useCallback, useState, useEffect } from "react";
import THREE from 'three';
import dynamic from 'next/dynamic';
const DynamicGraph = dynamic(() => import('./SuperForceGraph'), { ssr: false });
const Home = () => {
  const imgs = [{ img: 'a.jpg', collapsed: false, childlinks: [] }, { img: 'a.jpg', collapsed: false, childlinks: [] }, { img: 'a.jpg', collapsed: false, childlinks: [] }, { img: 'a.jpg', collapsed: false, childlinks: [] }];

  return (<>

    <main
      className='w-full flex-1 px-20 text-center
      bg-white'
    >
      <DynamicGraph imgs={imgs} />
    </main>

  </>
  )
}

export default Home;