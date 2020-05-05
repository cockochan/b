window.addEventListener("DOMContentLoaded", function(){
    var canvas = document.getElementById("canvas");
    var engine = new BABYLON.Engine(canvas,true);
    var createScene = function(){
        var scene  = new BABYLON.Scene(engine);
            scene.clearColor = new BABYLON.Color3.White();
            var camera = new BABYLON.FreeCamera("camera1",
                new BABYLON.Vector3(0,3,-10),scene);
            camera.setTarget(BABYLON.Vector3.Zero());
            camera.attachControl(canvas,true);

           

            BABYLON.SceneLoader.ImportMesh("","","colitsod.babylon",
            scene,
            function(newMeshes){
                // newMehes.forEach(function(mesh){
                //     mesh.rotation = new BABYLON.vector3(
                //         BABYLON.Tools.ToRadians(45),
                //             0,
                //             0);
                //         }
                //     );
                });
            

        
            var light = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(0,10,0))
            light.parent = camera;
            light.diffuse = new BABYLON.Color3(1,1,1);
            var box = BABYLON.Mesh.CreateBox("Box",2.0,scene);
            var sphere = BABYLON.MeshBuilder.CreateSphere('sphere', {segments:16, diameter:2}, scene);
            var material = new BABYLON.StandardMaterial("material1",scene);
            material.diffuseColor = BABYLON.Color3.Blue();
            sphere.material = material;
            box.material = material;
            return scene;
    }
    var scene = createScene();
    engine.runRenderLoop(function(){
        scene.render();
    });
})