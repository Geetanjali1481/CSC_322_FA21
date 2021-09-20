var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(
            75, window.innerWidth/window.innerHeight,
            0.5, 1000
        );
        camera.position.z = 5;

        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        //Cube
        var geometry = new THREE.ConeGeometry(1, 2, 4);
        var material = new THREE.MeshBasicMaterial({color: 0x00aaff});

        var cone = new THREE.Mesh(geometry, material);
        scene.add(cone);

        function animate(){
            requestAnimationFrame(animate);

            cone.rotation.x += 0.01;
            cone.rotation.y += 0.01;

            renderer.render(scene, camera);
        }

        animate();