CGE.Loader.setBaseUrl('./res/');

var app = new CGE.Application();

app.init(300, 150);

var scene = app.getScene();
var stage = app.getStage();

var camera = app.getCamera();

camera.setPosition(-20, 20, 20);

var renderer = app.getRenderer();
renderer.enableDepthTest();
var gb = Math.pow(0.5, 2.2);
renderer.setClearColor(1.0, gb, gb, 1.0);

scene.setActiveCamera(camera);

document.body.appendChild(renderer.getCanvas());

// 应用启动 
app.start();

app.setSize(800, 600);

new CGE.FirstPersonControl(camera, stage, app.getTimer());


var teapotGeometry = new CGE.Geometry();
teapotGeometry.addSingleAttribute('Position', CGE.ShaderConst.position, 3, CGE.GraphicsType.FLOAT, teapotPositions);
teapotGeometry.addSingleAttribute('UV', CGE.ShaderConst.texcoord, 3, CGE.GraphicsType.FLOAT, teapotTexCoords);
teapotGeometry.addSingleAttribute('Normal', CGE.ShaderConst.normal, 3, CGE.GraphicsType.FLOAT, teapotNormals);
teapotGeometry.addSingleAttribute('Tangent', CGE.ShaderConst.tangent, 3, CGE.GraphicsType.FLOAT, teapotTangents);
teapotGeometry.setIndexData(teapotIndices);
teapotGeometry.setDrawParameter(teapotIndices.length);


var brdf_basecolor = 'brdfTest/rustediron2_basecolor.jpg';
var brdf_normal = 'brdfTest/rustediron2_normal.jpg';
var brdf_specular = 'brdfTest/rustediron2_specular.jpg'

    
var diffTex = new CGE.Texture2D;
diffTex.setUrl(brdf_basecolor, CGE.Texture2D.White);
diffTex.setMipmap(true);
diffTex.setFilter(CGE.GraphicsType.LINEAR_MIPMAP_LINEAR, CGE.GraphicsType.LINEAR);
diffTex.setWarp(CGE.GraphicsType.REPEAT, CGE.GraphicsType.REPEAT);

var normTex = new CGE.Texture2D;
normTex.setUrl(brdf_normal, CGE.Texture2D.Normal);
normTex.setMipmap(true);
normTex.setFilter(CGE.GraphicsType.LINEAR_MIPMAP_LINEAR, CGE.GraphicsType.LINEAR);
normTex.setWarp(CGE.GraphicsType.REPEAT, CGE.GraphicsType.REPEAT);

var specTex = new CGE.Texture2D;
specTex.setUrl(brdf_specular, CGE.Texture2D.White);
specTex.setMipmap(true);
specTex.setFilter(CGE.GraphicsType.LINEAR_MIPMAP_LINEAR, CGE.GraphicsType.LINEAR);
specTex.setWarp(CGE.GraphicsType.REPEAT, CGE.GraphicsType.REPEAT);

var createTexture2DFromImage = function(imgSrc, func) {
    var texture2d = new CGE.Texture2D();
    texture2d.setUrl(imgSrc, CGE.Texture2D.White, func);
    return texture2d;
};

var cubeTexture = new CGE.TextureCube();

var func = () => {
    cubeTexture.needsUpdate();
}

cubeTexture.setTexture2ds(
    createTexture2DFromImage('skybox/px.jpg', func),
    createTexture2DFromImage('skybox/nx.jpg', func),
    createTexture2DFromImage('skybox/py.jpg', func),
    createTexture2DFromImage('skybox/ny.jpg', func),
    createTexture2DFromImage('skybox/pz.jpg', func),
    createTexture2DFromImage('skybox/nz.jpg', func)
);

cubeTexture.setMipmap(true);
cubeTexture.setFilter(CGE.GraphicsType.LINEAR_MIPMAP_LINEAR, CGE.GraphicsType.LINEAR);

var mat = new CGE.StandardMaterial(diffTex, normTex, specTex, specTex, specTex);
mat.setIrradianceMap(cubeTexture);
mat.setPrefilterMap(cubeTexture);
mat.setCullFaceMode(CGE.ZERO);


var mesh  = new CGE.Mesh();
mesh.setScale(0.5, 0.5, 0.5);
mesh.setPosition(0, 20, 0);
mesh.setGeometry(teapotGeometry);
mesh.setMaterial(mat);
mesh.name = '水壶';

scene.addChild(mesh)

var skyboxMat = new CGE.SkyboxMaterial();
skyboxMat.depthMask = false;
skyboxMat.setDiffuseMap(cubeTexture);
skyboxMat.setCullFaceMode(CGE.GraphicsType.FRONT);
skyboxMat.depthFunc = CGE.GraphicsType.LEQUAL; 

var boxGeo = new CGE.BoxGeometry();
boxGeo.removeBounding();
// bounding.setMax(Infinity, Infinity, Infinity);
// bounding.setMin(-Infinity, -Infinity, -Infinity)

var skyboxMesh = new CGE.Mesh();

skyboxMesh.setGeometry(boxGeo);
skyboxMesh.setMaterial(skyboxMat);

scene.addChild(skyboxMesh);




