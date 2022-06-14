import * as THREE from 'three'
import { Suspense, VFC } from 'react'
import { Canvas } from '@react-three/fiber'

import { Lense } from './Lense'
import { Background } from './Background'
import { TextPlane } from './TextPlane'

import {
  enFragmentShader,
  enVertexShader,
  jpFragmentShader,
  jpVertexShader,
} from '../glsl/shader'

export const TCanvas: VFC = () => {
  const OrthographicCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, -10, 10)

  return (
    <Canvas
      style={{ height: '100vh' }}
      camera={OrthographicCamera}
      dpr={typeof window !== 'undefined' ? window.devicePixelRatio : [1, 2]}>
      <Suspense fallback={null}>
        <Background />
        <Lense />
        <TextPlane
          text={['We are a Brand', 'For Creativity']}
          vertexShader={enVertexShader}
          fragmentShader={enFragmentShader}
        />

        <TextPlane
          text={['تشدوني من زبي', 'تونس حفرة قحبة']}
          vertexShader={jpVertexShader}
          fragmentShader={jpFragmentShader}
        />
      </Suspense>
    </Canvas>
  )
}
