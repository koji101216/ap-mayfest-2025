"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    
    const scene = new THREE.Scene()
    
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 2000)
    camera.position.z = 800
    
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: 'high-performance'
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    scene.background = null
    
    const geometry = new THREE.BufferGeometry()
    
    const particleCount = 4000
    
    const positions = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)
    const colors = new Float32Array(particleCount * 3)
    const opacities = new Float32Array(particleCount)
    const phases = new Float32Array(particleCount)
    
    const colorPalette = [
      new THREE.Color(0x4CC9F0),
      new THREE.Color(0x6366F1),
      new THREE.Color(0x8B5CF6),
      new THREE.Color(0x3A86FF),
    ]
    
    const accentColor = new THREE.Color(0xA78BFA)
    
    const color = new THREE.Color()
    
    const waveAmplitude = 120
    const wavePeriod = 600
    
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2
      
      const distanceFromCenter = Math.pow(Math.random(), 1.5) * 800 + 50
      
      positions[i * 3] = Math.cos(angle) * distanceFromCenter
      positions[i * 3 + 1] = Math.sin(angle) * distanceFromCenter
      
      phases[i] = Math.random() * Math.PI * 2
      
      const waveX = positions[i * 3] / wavePeriod
      const waveY = positions[i * 3 + 1] / wavePeriod
      positions[i * 3 + 2] = Math.sin(waveX + waveY + phases[i]) * waveAmplitude
      
      if (Math.random() > 0.97) {
        color.copy(accentColor)
      } else {
        const colorIndex = Math.floor(Math.random() * colorPalette.length)
        color.copy(colorPalette[colorIndex])
      }
      
      const distanceFactor = 1.0 - Math.min(distanceFromCenter / 1000, 0.6)
      color.multiplyScalar(distanceFactor)
      
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
      
      sizes[i] = Math.random() * 15 + 5 + (1.0 - distanceFromCenter / 1000) * 10
      
      opacities[i] = Math.random() * 0.3 + 0.4 + (1.0 - distanceFromCenter / 1000) * 0.3
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1))
    geometry.setAttribute("opacity", new THREE.BufferAttribute(opacities, 1))
    geometry.setAttribute("phase", new THREE.BufferAttribute(phases, 1))

    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        pointTexture: { value: new THREE.TextureLoader().load("/particle.svg") },
        waveParams: { value: new THREE.Vector4(waveAmplitude, wavePeriod, 0.5, 0.3) },
      },
      vertexShader: `
        uniform float time;
        uniform vec4 waveParams;
        attribute float size;
        attribute float opacity;
        attribute float phase;
        varying vec3 vColor;
        varying float vOpacity;
        
        float waveEffect(vec3 pos, float t, float phase) {
          float amp = waveParams.x;
          float period = waveParams.y;
          float speed = waveParams.z;
          float decay = waveParams.w;
          
          float dist = length(pos.xy);
          float distDecay = exp(-dist * decay / 1000.0);
          
          float wave1 = sin(dist / period + t * speed + phase) * amp * distDecay;
          float wave2 = sin(dist / (period * 0.5) + t * speed * 0.8 + phase) * (amp * 0.3) * distDecay;
          
          return wave1 + wave2;
        }
        
        void main() {
          vColor = color;
          vOpacity = opacity;
          
          vec3 pos = position;
          
          pos.z = waveEffect(position, time, phase);
          
          float angle = time * 0.05;
          mat2 rotation = mat2(
            cos(angle), sin(angle),
            -sin(angle), cos(angle)
          );
          pos.xy = rotation * pos.xy;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform sampler2D pointTexture;
        varying vec3 vColor;
        varying float vOpacity;
        
        void main() {
          vec4 texColor = texture2D(pointTexture, gl_PointCoord);
          if (texColor.a < 0.1) discard;
          gl_FragColor = vec4(vColor, vOpacity) * texColor;
        }
      `,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      transparent: true,
      vertexColors: true,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    const fieldGeometry = new THREE.PlaneGeometry(2000, 2000, 40, 40)
    
    const fieldMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Color(0x6366F1) },
        color2: { value: new THREE.Color(0x3B82F6) },
      },
      vertexShader: `
        uniform float time;
        varying vec2 vUv;
        varying float vElevation;
        
        void main() {
          vUv = uv;
          
          float elevation1 = sin(position.x * 0.05 + position.y * 0.03 + time * 0.1) * 5.0;
          float elevation2 = sin(position.x * 0.04 - position.y * 0.04 + time * 0.08) * 4.0;
          float elevation = elevation1 + elevation2;
          
          vElevation = elevation;
          
          vec3 pos = position;
          pos.z += elevation;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec2 vUv;
        varying float vElevation;
        
        void main() {
          float mixFactor = (vElevation + 10.0) / 20.0;
          vec3 color = mix(color1, color2, mixFactor);
          
          gl_FragColor = vec4(color, 0.08);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    
    const field = new THREE.Mesh(fieldGeometry, fieldMaterial)
    field.rotation.x = -Math.PI / 2
    field.position.z = -200
    scene.add(field)

    const clock = new THREE.Clock()

    const breathe = (time: number, period: number, min: number, max: number): number => {
      return min + (Math.sin(time / period) * 0.5 + 0.5) * (max - min)
    }

    const animate = () => {
      requestAnimationFrame(animate)
      const elapsedTime = clock.getElapsedTime()
      
      material.uniforms.time.value = elapsedTime
      fieldMaterial.uniforms.time.value = elapsedTime
      
      camera.position.x = Math.sin(elapsedTime * 0.05) * 30
      camera.position.y = Math.cos(elapsedTime * 0.05) * 30
      
      const breathFactor = breathe(elapsedTime, 10, 0.95, 1.05)
      particles.scale.set(breathFactor, breathFactor, 1)
      
      camera.lookAt(0, 0, 0)
      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement)
      }
      geometry.dispose()
      material.dispose()
      fieldGeometry.dispose()
      fieldMaterial.dispose()
      renderer.dispose()
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0" />
} 