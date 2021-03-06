import React from 'react';
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min.js';
window.THREE = THREE;
window.OrbitControls = OrbitControls;
window.TWEEN = TWEEN;

class Banner extends React.Component {
    componentDidMount() {
        var SHADOW_MAP_WIDTH = 2048,
            SHADOW_MAP_HEIGHT = 1024;

        var SCREEN_WIDTH = window.innerWidth;
        var SCREEN_HEIGHT = window.innerHeight;
        var FLOOR = -300;

        var camera, controls, scene, renderer;

        var NEAR = 10,
            FAR = 4000;


        var light;

        var clock = new THREE.Clock();

        var userOpts = {
            range: 10, //SCREEN_WIDTH*0.3,
            duration: 3500,
            delay: 500
        };
        var centerOffset;



        var init = function(mount) {

            // SCENE CAMERA

            camera = new THREE.PerspectiveCamera(23, SCREEN_WIDTH / SCREEN_HEIGHT, NEAR, FAR);
            camera.position.set(0, 50, 2500);


            // SCENE

            scene = new THREE.Scene();
            scene.fog = new THREE.Fog(0x3d3d3d, 1000, FAR);

            // LIGHTS

            // var ambient = new THREE.AmbientLight(0x444444);
            // scene.add(ambient);

            light = new THREE.SpotLight(0xffffff);
            light.position.set(0, 1500, 1000);
            light.target.position.set(0, 0, 0);

            light.castShadow = true;

            light.shadow = new THREE.LightShadow(new THREE.PerspectiveCamera(50, 1, 1200, 2500));
            light.shadow.bias = 0.0001;

            light.shadow.mapSize.width = SHADOW_MAP_WIDTH;
            light.shadow.mapSize.height = SHADOW_MAP_HEIGHT;

            scene.add(light);

            createScene();

            // RENDERER

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setClearColor(scene.fog.color);
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);

            renderer.autoClear = false;

            //
            // container = document.getElementById('banner');
            mount.appendChild(renderer.domElement);

            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFShadowMap;


            //
            controls = new OrbitControls(camera, renderer.domElement);
            controls.enableZoom = false;
            controls.minPolarAngle = 0; // radians
            controls.maxPolarAngle = Math.PI / 2; // radians

            // controls.minAzimuthAngle = -Math.PI / 2;
            // controls.maxAzimuthAngle = Math.PI / 2;

            window.addEventListener('resize', onWindowResize, false);
            // window.addEventListener('keydown', onKeyDown, false);

        }

        var onWindowResize = function() {

            SCREEN_WIDTH = window.innerWidth;
            SCREEN_HEIGHT = window.innerHeight;

            camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
            camera.updateProjectionMatrix();

            renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);

            //controls.handleResize();

        }

        var createScene = function() {

            // GROUND

            var geometry = new THREE.PlaneBufferGeometry(100, 100);
            var planeMaterial = new THREE.MeshPhongMaterial({ color: 0xaaaaaa });

            var ground = new THREE.Mesh(geometry, planeMaterial);

            ground.position.set(0, FLOOR, 0);
            ground.rotation.x = -Math.PI / 2;
            ground.scale.set(100, 100, 100);

            ground.castShadow = false;
            ground.receiveShadow = true;

            scene.add(ground);

            // TEXT

            var loader = new THREE.FontLoader();
            loader.load('../../assets/lib/fonts/optimer_regular.typeface.json', function (font) {

                var textGeo = new THREE.TextGeometry("Luke Gong", {

                    font: font,

                    size: 50,
                    height: 10,
                    curveSegments: 12,

                    bevelThickness: 2,
                    bevelSize: 1,
                    bevelEnabled: true

                });

                textGeo.computeBoundingBox();
                centerOffset = -0.5 * (textGeo.boundingBox.max.x - textGeo.boundingBox.min.x);

                var textMaterial = new THREE.MeshPhongMaterial({ color: 0xc0c0c0, specular: 0xffffff });

                var text = new THREE.Mesh(textGeo, textMaterial);
                text.position.x = centerOffset;
                text.position.y = 250;

                text.castShadow = true;
                text.receiveShadow = true;

                scene.add(text);
                setupTween(text);
            });


            //objects
            // loadFurniture("screen_left");
            // loadFurniture("desk");
            // loadFurniture("screen_main");
            // loadFurniture("desk_leg");
            // loadFurniture("screen_right");
            // loadFurniture("computer_frame");
            // loadFurniture("package");
            // loadFurniture("keyboard01");
            // loadFurniture("mouse");
            loadFurniture("all");

        }

        var animate = function() {

            requestAnimationFrame(animate);

            render();

        }

        var render = function() {

            var delta = clock.getDelta();

            TWEEN.update();
            //controls.update( delta );
            controls.update(delta);
            renderer.clear();
            renderer.render(scene, camera);

        }

        // var loadText =  function(material, path, name, repeatx, repeaty) {
        //     var textureLoader = new THREE.TextureLoader();
        //     textureLoader.load("../../assets/models/banner_parts/" + name, function (map) {
        //         map.wrapS = THREE.RepeatWrapping;
        //         map.wrapT = THREE.RepeatWrapping;
        //         map.anisotropy = 4;
        //         if (repeatx && repeaty)
        //             map.repeat.set(repeatx, repeaty);
        //         material.map = map;
        //         material.needsUpdate = true;
        //     });
        // }

        var loadFurniture = function(name, m1, m2, m3, m4, m5, m6, m7) {
            var loader = new THREE.ObjectLoader();
            loader.load("../../assets/models/banner_parts/" + name + ".json", function (object) {
                object.scale.set(40, 40, 40);
                object.position.set(0, FLOOR, 0);
                object.rotation.y = -Math.PI / 2;
                object.traverse(function (child) {

                    if (child instanceof THREE.Mesh) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                        // child.material.color.set(0x0000ff);
                    }

                });
                scene.add(object);
            });
        }

        var setupTween = function(cube) {
            //
            var update = function () {
                cube.position.x = current.x + centerOffset;
                cube.position.y = current.y + 250;
            }
            var current = {
                x: -userOpts.range,
                y: -70,
            };

            // remove previous tweens if needed
            TWEEN.removeAll();

            // convert the string from dat-gui into tween.js functions
            // build the tween to go ahead
            var tweenHead = new TWEEN.Tween(current)
                .to({ x: +userOpts.range, y: 70 }, userOpts.duration)
                .delay(userOpts.delay)
                .easing(TWEEN.Easing.Elastic.Out)
                .onUpdate(update);
            // build the tween to go backward
            var tweenBack = new TWEEN.Tween(current)
                .to({ x: -userOpts.range, y: -70 }, userOpts.duration)
                .delay(userOpts.delay)
                .easing(TWEEN.Easing.Elastic.Out)
                .onUpdate(update);

            // after tweenHead do tweenBack
            tweenHead.chain(tweenBack);
            // after tweenBack do tweenHead, so it is cycling
            tweenBack.chain(tweenHead);

            // start the first
            tweenHead.start();
        }

        init(this.mount);
        animate();

    }
    render() {
        return <div id="banner" ref={ref => (this.mount = ref)} />;
    }
}

export default Banner;